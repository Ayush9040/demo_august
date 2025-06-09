import React, { useState, useEffect } from 'react'
import InputComponent from '../../../Components/InputComponent'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.scss'
import CommonBtn from '../../../Components/commonbtn'
import { createNutriOrder, enrollPlan, successMail } from '../Api'
import { useNavigate } from 'react-router-dom'
import { razorPayKey } from '../../../../../Constants/appSettings'
import { handleCTEnquireNutriDietInitiated, handleCTEnquireNutriDietCompleted } from '../../../../../CleverTap/nutriDietEvent'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga4';

const SubcriptionForm = ({ packageName, packagePrice, selectedPackageName, closeForm }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    emailId: '',
    city: '',
    country: '',
  })
  const [agree, setAgree] = useState(false)
  const [empty, setEmpty] = useState()
  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);
  const phoneNumberFromRedux = useSelector((state) => state.auth.user.data?.phoneNumber);
  const emailFromRedux = useSelector((state) => state.auth.user.data?.email);
  const countryNameFromRedux = useSelector((state) => state.auth.user.data?.country);
  const cityNameFromRedux = useSelector((state) => state.auth.user.data?.city);
  const dailCode = useSelector((state) => state.auth.user.data?.dialCode);

  useEffect(() => {
    if (nameFromRedux) {
      setFormData((prev) => ({ ...prev, name: nameFromRedux }));
    }
    if (phoneNumberFromRedux) {
      setFormData((prev) => ({ ...prev, phone: `+${dailCode}${phoneNumberFromRedux}` }));
    }
    if (emailFromRedux) {
      setFormData((prev) => ({ ...prev, emailId: emailFromRedux }));
    }
    if (countryNameFromRedux) {
      setFormData((prev) => ({ ...prev, country: countryNameFromRedux }));
    }
    if (cityNameFromRedux) {
      setFormData((prev) => ({ ...prev, city: cityNameFromRedux }));
    }
  }, [nameFromRedux, phoneNumberFromRedux, emailFromRedux, countryNameFromRedux, cityNameFromRedux, setFormData]);

  const submitForm = async () => {
    const { data } = await enrollPlan({
      personalDetails: formData,
      courseDetails: {
        cousreId: `${packageName}_${packagePrice}`,
        cousreName: 'Nutri Diet Clinic',
        plan: packageName,
      },
    })
    const paymentOrderResponse = await createNutriOrder(data.data._id, {
      amount: packagePrice,
      notes: 'Nutri Diet Clinic',
      objectType: 'NUTRI'
    })
    if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
      return 0

    const options = {
      // key: 'rzp_test_hWMewRlYQKgJIk', 
      // Enter the Key ID generated from the Dashboard
      key: razorPayKey,
      amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'The Yoga Institute',
      description: 'Nutri Diet Clinic Transaction',
      // image: 'https://example.com/your_logo', // un comment and add TYI logo
      order_id: paymentOrderResponse.data.id, // eslint-disable-line
      handler: async (res) => {
        // Navigare to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
        if (
          res.razorpay_payment_id &&
          res.razorpay_order_id &&
          res.razorpay_signature
        ) {
          await successMail({
            type: 'INFO_TYI',
            HTMLTemplate: 'NUTRI_DIET_CLINIC_CONFIRMATION_MAIL',
            subject: 'Enrollment Confirmation',
            data: {
              name: formData.name,
            },
            receivers: [formData.emailId, 'info@theyogainstitute.org'],
          })
          handleCTEnquireNutriDietCompleted({
            event_name: "Enquire_Nutri_Diet_Payment_Completed",
            name: formData.name,
            emailId: formData.emailId,
            phoneNo: formData.phone,
            country: formData.country,
            city: formData.city,
            // paymentMode,
            month: packageName,
            // programType,
            status: 'Completed',
            amount: packagePrice,
          })
          ReactGA.event('purchase', {
            currency: 'INR',
            value: packagePrice,
            transaction_id: res.razorpay_payment_id,
            items: [{
              item_name: 'Nutri Diet Clinic',
              item_id: 'NUTRI',
              price: packagePrice,
              quantity: 1
            }]
          });
          console.log('purchase', {
            currency: 'INR',
            value: packagePrice,
            transaction_id: res.razorpay_payment_id,
            items: [{
              item_name: 'Nutri Diet Clinic',
              item_id: 'NUTRI',
              price: packagePrice,
              quantity: 1
            }]
          });

          // navigate('/enrollment_thankyou')
          navigate('/enrollment_thankyou/nutri')
        } else {
          handleCTEnquireNutriDietCompleted({
            event_name: "Enquire_Nutri_Diet_Payment_Failed",
            name: formData.name,
            emailId: formData.emailId,
            phoneNo: formData.phone,
            country: formData.country,
            city: formData.city,
            // paymentMode,
            month: packageName,
            // programType,
            status: 'Failed',
            amount: packagePrice,
          })
        }
      },
      prefill: {
        name: formData.name,
        email: formData.emailId,
        contact: formData.phone,
      },
      notes: {
        description: packageName,
        formData: data.data._id,
      },
      theme: {
        color: '#3399cc', // enter theme color for our website
      },
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const handleEnrollment = () => {
    if (formData.name === '') {
      setEmpty(1)
    } else if (formData.emailId === '') {
      setEmpty(2)
    } else if (formData.phone === '') {
      setEmpty(3)
    } else if (formData.country === '') {
      setEmpty(4)
    } else if (formData.city === '') {
      setEmpty(5)
    } else if (agree === false) {
      setEmpty(6)
    } else {
      submitForm()
      handleCTEnquireNutriDietInitiated({
        Name: formData.name,
        Email_ID: formData.emailId,
        Phone_No: formData.phone,
        Country: formData.country,
        City: formData.city,
        // Payment_Mode,
        Month: packageName,
        // Program_Type,
        // Status,
        Amount: packagePrice,
      })
      ReactGA.event('begin_checkout', {
        currency: 'INR',
        value: packagePrice,
        items: [{
          item_name: 'Nutri Diet Clinic',
          item_id: 'NUTRI',
          price: packagePrice,
          quantity: 1
        }]
      });
      console.log('begin_checkout', {
        currency: 'INR',
        value: packagePrice,
        items: [{
          item_name: 'Nutri Diet Clinic',
          item_id: 'NUTRI',
          price: packagePrice,
          quantity: 1
        }]
      });

    }
  }

  return (
    <div className='nutri-subscription-form'>
      <div
        style={{
          float: 'right',
          fontSize: '32px',
          color: '#000000',
          cursor: 'pointer',
        }}
        onClick={() => {
          closeForm(false)
        }}
      >
        &#10005;
      </div>
      <h2>Course Duration:{packageName}</h2>
      <h4>{selectedPackageName} Fees: Rs. {packagePrice}</h4>
      <form>
        <div className='form-field'>
          <InputComponent
            type='text'
            placeholder='Enter Full Name*'
            form={formData}
            setField={setFormData}
            keyName='name'
          />
          {empty === 1 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please Enter Name!
            </small>
          )}
        </div>
        <div className='form-field'>
          <InputComponent
            type='email'
            placeholder='Enter Email Address*'
            form={formData}
            setField={setFormData}
            keyName='emailId'
          />
          {empty === 2 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please Enter Valid Email!
            </small>
          )}
        </div>
        <div className='form-field'>
          <PhoneInput
            placeholder='Enter phone number*'
            defaultCountry='IN'
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e })
            }}
          />
          {empty === 3 && <small> Please enter a valid phone number</small>}
        </div>
        <div className='form-field'>
          <InputComponent
            type='text'
            placeholder='Country*'
            form={formData}
            setField={setFormData}
            keyName='country'
            errorCheck={setEmpty}
          />
          {empty === 4 && <small> Please enter your country</small>}
        </div>
        <div className='form-field'>
          <InputComponent
            type='text'
            placeholder='City*'
            form={formData}
            setField={setFormData}
            keyName='city'
            errorCheck={setEmpty}
          />
          {empty === 5 && <small> Please enter your city</small>}
        </div>
        <div className='form-field' style={{ textAlign: 'left' }} id='t-n-c'>
          <ol>
            Terms & Conditions
            <li>Fees are non- refundable and non-transferable.</li>
            <li>
              Call on +91 9967429596 for appointments between 10:00 am to 6:00 pm IST
              (Monday to Saturday).
            </li>
          </ol>
        </div>
        <div className='terms-conditions'>
          <input
            type='checkbox'
            onChange={() => setAgree(agree ? false : true)}
          />

          <p>I have read and agree to the above terms and conditions.</p>
          {empty === 6 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please agree to the condition!
            </small>
          )}
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CommonBtn
          isColor='#ca4625'
          text='Continue'
          buttonAction={handleEnrollment}
        />
      </div>
    </div>
  )
}

export default SubcriptionForm
