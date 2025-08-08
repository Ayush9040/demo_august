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

const SubcriptionForm = ({ packageName, packagePrice, selectedPackageName, currency, closeForm }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      // Split the name into first and last names if it contains a space
      const names = nameFromRedux.split(' ');
      setFormData(prev => ({
        ...prev, 
        firstName: names[0] || '',
        lastName: names.slice(1).join(' ') || ''
      }));
    }
    if (phoneNumberFromRedux) {
      setFormData(prev => ({ ...prev, phone: `+${dailCode}${phoneNumberFromRedux}` }));
    }
    if (emailFromRedux) {
      setFormData(prev => ({ ...prev, emailId: emailFromRedux }));
    }
    if (countryNameFromRedux) {
      setFormData(prev => ({ ...prev, country: countryNameFromRedux }));
    }
    if (cityNameFromRedux) {
      setFormData(prev => ({ ...prev, city: cityNameFromRedux }));
    }
  }, [nameFromRedux, phoneNumberFromRedux, emailFromRedux, countryNameFromRedux, cityNameFromRedux, dailCode]);

  const submitForm = async () => {
    // Combine first and last name for the API
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    
    const { data } = await enrollPlan({
      personalDetails: {
        ...formData,
        name: fullName // Send combined name to API
      },
      courseDetails: {
        courseId: `${packageName}_${packagePrice}`,
        courseName: 'Nutri Diet Clinic',
        plan: packageName,
      },
    })
    
    const paymentOrderResponse = await createNutriOrder(data.data._id, {
      amount: packagePrice,
      notes: 'Nutri Diet Clinic',
      objectType: 'NUTRI',
      currency: currency
    })
    if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
      return 0

    const options = {
      key: razorPayKey,
      amount: paymentOrderResponse.data.amount,
      currency: currency,
      name: 'The Yoga Institute',
      description: 'Nutri Diet Clinic Transaction',
      order_id: paymentOrderResponse.data.id,
      handler: async (res) => {
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
              name: fullName, // Use combined name here
            },
            receivers: [formData.emailId, 'info@theyogainstitute.org'],
          })
          handleCTEnquireNutriDietCompleted({
            event_name: "Enquire_Nutri_Diet_Payment_Completed",
            name: fullName, // Use combined name here
            emailId: formData.emailId,
            phoneNo: formData.phone,
            country: formData.country,
            city: formData.city,
            month: packageName,
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

          navigate('/enrollment_thankyou/nutri')
        } else {
          handleCTEnquireNutriDietCompleted({
            event_name: "Enquire_Nutri_Diet_Payment_Failed",
            name: fullName, // Use combined name here
            emailId: formData.emailId,
            phoneNo: formData.phone,
            country: formData.country,
            city: formData.city,
            month: packageName,
            status: 'Failed',
            amount: packagePrice,
          })
        }
      },
      prefill: {
        name: fullName, // Use combined name here
        email: formData.emailId,
        contact: formData.phone,
      },
      notes: {
        description: packageName,
        formData: data.data._id,
      },
      theme: {
        color: '#3399cc',
      },
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const handleEnrollment = () => {
    // Reset empty state
    setEmpty(null);
    
    // Validate all fields
    if (formData.firstName === '') {
      setEmpty(1)
      return
    }
    if (formData.emailId === '') {
      setEmpty(2)
      return
    } else if (!/^\S+@\S+\.\S+$/.test(formData.emailId)) {
      setEmpty(2.1)
      return
    }
    if (formData.phone === '') {
      setEmpty(3)
      return
    }
    if (formData.country === '') {
      setEmpty(4)
      return
    }
    if (formData.city === '') {
      setEmpty(5)
      return
    }
    if (agree === false) {
      setEmpty(6)
      return
    }

    // If all validations pass, submit the form
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    
    submitForm()
    handleCTEnquireNutriDietInitiated({
      Name: fullName,
      Email_ID: formData.emailId,
      Phone_No: formData.phone,
      Country: formData.country,
      City: formData.city,
      Month: packageName,
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
  }

  return (
    <div className='nutri-subscription-form'>
      <div className='nutri_form_wrapper'>
        <div
          style={{
            float: 'right',
            fontSize: '12px',
            color: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => {
            closeForm(false)
          }}
        >
          &#10005;
        </div>
        <h2 className='title_wrapper'>Course Duration: {packageName}</h2>
        <h4 className='package_wrapper'>{selectedPackageName} Fees: {currency} {packagePrice}</h4>
        <form>
          <div className='form-row'>
            <div className='form-field form-col'>
              <label htmlFor='firstName'>First Name*</label>
              <InputComponent
                id='firstName'
                type='text'
                placeholder='Enter First Name'
                form={formData}
                setField={setFormData}
                keyName='firstName'
              />
              {empty === 1 && (
                <small className='error-message'>*Please Enter First Name!</small>
              )}
            </div>
            <div className='form-field form-col'>
              <label htmlFor='lastName'>Last Name</label>
              <InputComponent
                id='lastName'
                type='text'
                placeholder='Enter Last Name'
                form={formData}
                setField={setFormData}
                keyName='lastName'
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-field form-col'>
              <label htmlFor='email'>Email Address*</label>
              <InputComponent
                id='email'
                type='email'
                placeholder='Enter Email Address'
                form={formData}
                setField={setFormData}
                keyName='emailId'
              />
              {empty === 2 && (
                <small className='error-message'>*Please Enter Email!</small>
              )}
              {empty === 2.1 && (
                <small className='error-message'>*Please Enter Valid Email!</small>
              )}
            </div>

            <div className='form-field form-col'>
              <label htmlFor='phone'>Phone Number*</label>
              <PhoneInput
                id='phone'
                placeholder='Enter phone number'
                defaultCountry='IN'
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e })
                }}
              />
              {empty === 3 && (
                <small className='error-message'>*Please enter phone number</small>
              )}
            </div>
          </div>

          <div className='form-row'>
            <div className='form-field form-col'>
              <label htmlFor='country'>Country*</label>
              <InputComponent
                id='country'
                type='text'
                placeholder='Enter Country'
                form={formData}
                setField={setFormData}
                keyName='country'
              />
              {empty === 4 && (
                <small className='error-message'>*Please enter your country</small>
              )}
            </div>
            <div className='form-field form-col'>
              <label htmlFor='city'>City*</label>
              <InputComponent
                id='city'
                type='text'
                placeholder='Enter City'
                form={formData}
                setField={setFormData}
                keyName='city'
              />
              {empty === 5 && (
                <small className='error-message'>*Please enter your city</small>
              )}
            </div>
          </div>

          <div className='form-field terms-container'>
            <h4>Terms & Conditions</h4>
            <ul type="none" className='terms-list'>
              <li>1. Fees are non-refundable and non-transferable.</li>
              <li>
                2. Call on +91 9967429596 for appointments between 10:00 am to 6:00 pm IST
                (Monday to Saturday).
              </li>
            </ul>
          </div>

          <div className='terms-agreement'>
            <div className='checkbox-container'>
              <input
                type='checkbox'
                id='agreeTerms'
                onChange={() => setAgree(!agree)}
              />
              <label htmlFor='agreeTerms'>
                I have read and agree to the above terms and conditions.
              </label>
            </div>
            {empty === 6 && (
              <small className='error-message'>*Please agree to the conditions!</small>
            )}
          </div>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CommonBtn
            isColor='#CBEA7B'
            text='Continue Next'
            buttonAction={handleEnrollment}
          />
        </div>
      </div>
    </div>
  )
}

export default SubcriptionForm