import React from 'react'
import { useState , useEffect } from 'react'
import InputComponent from '../../../Components/InputComponent'
import './style.scss'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import CommonBtn from '../../../Components/commonbtn'
import { useNavigate } from 'react-router-dom'
import { IYBenroll, createIYBorder, successMail } from '../api'
import { uploadFile } from '../../../../../helpers/OssHelper'
import { upload } from '../../../assets/icons/icon'

const IBYform = ({ setOpenForm }) => {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    emailId: '',
    country: '',
  })
  const navigate = useNavigate()
  const [courseAsset, setCourseAsset] = useState(null)
  const [empty, setEmpty] = useState(0)
  const [certificateName, setcertificateName] = useState('')

  const submitForm = async() => {
    const { data } = await IYBenroll({
      personalDetails: formData,
      courseDetails: {
        cousreName: 'IBY course',
        certificationDocs:` ${courseAsset}` 
      },
    })
    console.log(formData,'data')
   
    const paymentOrderResponse = await createIYBorder(data.data._id, {
      amount: 2000,
      notes: {
        description: 'IYB course',
      },
    })
    if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
      return 0

    const options = {
      key: 'rzp_live_KyhtrIyJ546bd2', // Enter the Key ID generated from the Dashboard
      amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'The Yoga Institute',
      description: 'IYB course Transaction',
      // image: 'https://example.com/your_logo', // un comment and add TYI logo
      order_id: paymentOrderResponse.data.id, // eslint-disable-line
      handler: async(res) => {
        // Navigare to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
        if (
          res.razorpay_payment_id &&
          res.razorpay_order_id &&
          res.razorpay_signature
        ) {
          await successMail({
            type: 'INFO_TYI',
            HTMLTemplate: 'IBY_CLASS_FORM_SUB_MAIL',
            subject: 'Enrollment Confirmation',
            data: {
              name: formData.name,
            },
            receivers: [formData.emailId,'info@yogainstitute.org'],
          })
          navigate('/enrollment_thankyou')
        }
      },
      prefill: {
        name: formData.name,
        email: formData.emailId,
        contact: formData.phone,
      },
      notes: {
        // description: plan,
        formData: data.data._id,
      },
      theme: {
        color: '#3399cc', // enter theme color for our website
      },
    }
    console.log(paymentOrderResponse,'helotjiogery]iug')
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const uploadDoc = async(file, type) => {
    const url = await uploadFile(file, type)
    setCourseAsset(url)
    setEmpty(0)
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
    } 
    else if (certificateName === '') {
      setEmpty(5)
    }
    else {
      submitForm()
    }
  }
  
  return (
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
       
        <div className='form-field' style={{ textAlign: 'left' }} id='t-n-c'>
         
        </div>
        <div className='uploads'>
          <fieldset>
            <label htmlFor="resume">
              {courseAsset
                ? certificateName.substring(0, 15)
                : 'Upload Certificate '}
              <input
                type={'file'}
                onChange={(e) => {
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
            {empty === 5 && (
              <small style={{ color: 'red' }}>
              Please upload relevant certificate
              </small>
            )}
          </fieldset>

        </div>
      </form>
      <CommonBtn
        isColor='#ca4625'
        text='Continue'
        buttonAction={handleEnrollment}
      />
    </div>
  )
}

export default IBYform