import React from 'react'
import { useState, useEffect } from 'react'
import InputComponent from '../../../Components/InputComponent'
import './style.scss'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import CommonBtn from '../../../Components/commonbtn'
import { useNavigate } from 'react-router-dom'
import { IYBenroll, createIYBorder, successMail } from '../api'
import { uploadFile } from '../../../../../helpers/OssHelper'
import { upload } from '../../../assets/icons/icon'
import Loader from '../../../Components/Loader'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { razorPayKey } from '../../../../../Constants/appSettings'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga4';

const IBYform = ({ setOpenForm, price, selectBatch }) => {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    country: '',
    paymentInfo: '',
    certificationDocs: '',
    courseInfo: 'IBY class',
  })
  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const navigate = useNavigate()
  const [courseAsset, setCourseAsset] = useState(null)
  const [empty, setEmpty] = useState(0)
  const [certificateName, setcertificateName] = useState('')
  const [loading, setLoading] = useState(false)
  const [agree, setAgree] = useState(false)

  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);
  const phoneNumberFromRedux = useSelector((state) => state.auth.user.data?.phoneNumber);
  const emailFromRedux = useSelector((state) => state.auth.user.data?.email);
  const countryNameFromRedux = useSelector((state) => state.auth.user.data?.country);
  const dailCode = useSelector((state) => state.auth.user.data?.dialCode);

  useEffect(() => {
    if (nameFromRedux) {
      setFormData((prev) => ({ ...prev, name: nameFromRedux }));
    }
    if (phoneNumberFromRedux) {
      setFormData((prev) => ({ ...prev, phoneNumber: `+${dailCode}${phoneNumberFromRedux}` }));
    }
    if (emailFromRedux) {
      setFormData((prev) => ({ ...prev, email: emailFromRedux }));
    }
    if (countryNameFromRedux) {
      setFormData((prev) => ({ ...prev, country: countryNameFromRedux }));
    }


  }, [nameFromRedux, phoneNumberFromRedux, emailFromRedux, countryNameFromRedux, setFormData]);

  const submitForm = async () => {
    const { data } = await IYBenroll(
      {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        country: formData.country,
        paymentInfo: formData.paymentInfo,
        certificationDocs: ` ${courseAsset}`,
        courseInfo: 'IBY class',

      }
    )
    
    ReactGA.event('begin_checkout', {
      currency: 'INR',
      value: price,
      items: [{
        item_name: 'IBY class',
        item_id: 'IBY',
        price: price,
        quantity: 1
      }]
    });
    console.log('begin_checkout', {
      currency: 'INR',
      value: price,
      items: [{
        item_name: 'IBY class',
        item_id: 'IBY',
        price: price,
        quantity: 1
      }]
    });

    const paymentOrderResponse = await createIYBorder(data.data._id, {
      amount: price,
      notes: 'IYB course',
      objectType: 'IBY',
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
      description: 'IYB course Transaction',
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
            HTMLTemplate: 'IBY_CLASS_FORM_CONFIRMATION_MAIL',
            subject: 'Enrollment Confirmation',
            data: {
              name: formData.name,
            },
            receivers: [formData.email, 'info@theyogainstitute.org'],
          })
          ReactGA.event('purchase', {
            currency: 'INR',
            value: price,
            transaction_id:res.razorpay_payment_id,
            items: [{
              item_name: 'IBY class',
              item_id: 'IBY',
              price: price,
              quantity: 1
            }]
          });
          console.log('purchase', {
            currency: 'INR',
            value: price,
            transaction_id:res.razorpay_payment_id,
            items: [{
              item_name: 'IBY class',
              item_id: 'IBY',
              price: price,
              quantity: 1
            }]
          });

          navigate(`/enrollment_thankyou/${'IBY-course'}`)
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phoneNumber,
      },
      notes: {
        // description: plan,
        formData: data.data._id,
        name: formData.name,
        email: formData.email,
        contact: formData.phoneNumber,
        paymentInfo: formData.paymentInfo,
      },
      theme: {
        color: '#3399cc', // enter theme color for our website
      },
    }
    console.log(paymentOrderResponse, 'helotjiogery]iug')
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const uploadDoc = async (file, type) => {
    const url = await uploadFile(file, type)
    setCourseAsset(url)
    setEmpty(0)
    setLoading(false)
  }

  const handleEnrollment = () => {
    if (formData.name === '') {
      setEmpty(1)
    } else if (formData.email === '') {
      setEmpty(2)
    } else if (formData.phoneNumber === '') {
      setEmpty(3)
    } else if (formData.country === '') {
      setEmpty(4)
    } else if (formData.paymentInfo === '') {
      setEmpty(5)
    } else if (agree === false) {
      setEmpty(6)
    }
    else {
      submitForm()
    }
  }

  return (
    <>
      <InnerNavComponent abc={highlight} />
      <div className='IBY-subscription-form'>
        <div
          style={{
            float: 'right',
            fontSize: '32px',
            color: '#000000',
            cursor: 'pointer',
          }}
          onClick={() => {
            setOpenForm(false)
          }}
        >
          &#10005;
        </div>
        <h2>IBY Class (Only for TYI TTC Teachers)</h2>
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
              keyName='email'
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
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e })
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
          <div >
            <div className='batch_price'>Batch : {selectBatch}</div>
            <div className='batch_price'>  Amount Payable : {price}</div>
          </div>
          <div className='form-field' style={{ textAlign: 'left' }} id='t-n-c'>

          </div>
          <div className="residential-form">
            <div className="last_radio_button">
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="paymentInfo"
                  value="OFFLINE"
                  checked={formData.paymentInfo === 'OFFLINE'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        paymentInfo: e.target.value,
                      })
                      setEmpty(0)
                    }
                  }}
                />
                &nbsp;Offline
              </label>

            </div>
            <div className="last_radio_button" ><label htmlFor="" className="course_details_text">
              <input
                type="radio"
                name="paymentInfo"
                value="ONLINE"
                checked={formData.paymentInfo === 'ONLINE'}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      paymentInfo: e.target.value,
                    })
                    setEmpty(0)
                  }
                }}
              />
              &nbsp;Online
            </label>

            </div>
            {empty === 5 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please select one of the options
              </small>
            )}
          </div>
          <div className='uploads'>
            {loading ? <Loader /> :

              <fieldset>
                <label htmlFor="resume">
                  {courseAsset
                    ? certificateName.substring(0, 15)
                    : 'Upload Certificate '}
                  <input
                    type={'file'}
                    onChange={(e) => {
                      setLoading(true)
                      uploadDoc(
                        e.target.files[0],
                        'applicant_certificate',
                        'CERTIFICATE'
                      )
                      setcertificateName(e.target.files[0].name)
                    }}
                    id="resume"
                    accept=".pdf"
                    placeholder="Upload Cerificate"
                  />
                  &ensp;
                  {upload}
                </label>
              </fieldset>}
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
        <CommonBtn
          isColor='#ca4625'
          text='Continue'
          buttonAction={handleEnrollment}
        />
      </div>
    </>

  )
}

export default IBYform