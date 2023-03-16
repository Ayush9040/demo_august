import React from 'react'
import { useState,useEffect } from 'react'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import CommonBtn from '../../../Components/commonbtn'
import InputComponent from '../../../Components/InputComponent'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.scss'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { kidsCampData,createKidsCamp, successMail } from '../api'

const KidsCampForm = ({ setModal }) => {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const navigate = useNavigate()
  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const kidsAge = [
    {
      value:'4-8 years',
      label:'4-8 years'
    },
    {
      value:'9-13 years',
      label:'9-13 years'
    },
  ]

  const campsTimeFirst = [
    {
      value:'10,11 and 12 April',
      label:'10,11 and 12 April'
    },
    {
      value:'1,2, 3 May 2023',
      label:'1,2, 3 May 2023'
    },
    {
      value:'29,30,31 May 2023',
      label:'29,30,31 May 2023'
    }

  ]
  const campsTimeSecond =    [  
    {
      value:'13,14 and 15 April 2023',
      label:'13,14 and 15 April 2023'
    },  

    {
      value:'4,5,6 May 2023',
      label:'4,5,6 May 2023'
    },
    {
      value:'1,2,3 June 2023',
      label:'1,2,3 June 2023'
    },
  ]
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phoneNumber:'',
    age:'',
    date:'',
    country:'',
  })
  const [ empty, setEmpty] = useState(0)
  const [agree, setAgree] = useState(false)
  const [timeOne, setTimeOne] = useState(null)

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'white',
      borderRadius: '50px',
      width: '400px',
      padding: '0.25rem 2rem',
      fontSize:'1.75rem',
      // Overwrittes the different states of border
      borderColor: state.isFocused ? 'rgba(96, 96, 96, 0.5019607843)' : 'rgba(96, 96, 96, 0.5019607843)',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? 'rgba(96, 96, 96, 0.5019607843)' : 'rgba(96, 96, 96, 0.5019607843)'
      }
    })
  }

  const submitForm = async() => {
    const { data } = await kidsCampData(formData)
   
    const paymentOrderResponse = await createKidsCamp(data.data._id, {
      amount: 1500,
      notes:'Kids Summer camp',
      objectType:'KIDS',
    })
    if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
      return 0

    const options = {
      key: 'rzp_live_KyhtrIyJ546bd2', // Enter the Key ID generated from the Dashboard
      amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'The Yoga Institute',
      description: 'Kids summer camp Transaction',
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
            HTMLTemplate: 'KID_CLASS_FORM_CONFIRMATION_MAIL',
            subject: 'Enrollment Confirmation',
            data: {
              name: formData.name,
            },
            receivers: [formData.email,'info@yogainstitute.org'],
          })
          navigate('/enrollment_thankyou')
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
        age: formData.age,
        date : formData.date,
      },
      theme: {
        color: '#3399cc', // enter theme color for our website
      },
    }
    console.log(paymentOrderResponse,'helotjiogery]iug')
    const rzp = new window.Razorpay(options)
    rzp.open()
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
    } else if (formData.age === '') {
      setEmpty(5) 
    } else if(formData.date === '') {
      setEmpty(6)
    }  
    else if (agree === false) {
      setEmpty(7)
    } 
    else {
      submitForm()
      console.log('successfull')
    }
  }
  return (
    <div>
      <InnerNavComponent abc={ highlight } />
      <div className='Kids-camps-subscription-form'>
        <div
          style={{
            float: 'right',
            fontSize: '32px',
            color: '#000000',
            cursor: 'pointer',
          }}
          onClick={() => {
            setModal(false)
          }}
        >
      &#10005;
        </div>
        <h2>Kids Yoga Summer Camp (On-Campus)</h2>
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
              <small >
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
              <small >
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
          <div className='form-field'>
            <Select
              styles={customStyles}
              id="age"
              name="age"
              placeholder='Age*'
              label="age"
              className='select'
              form={formData}
              setField={setFormData}
              keyName="age"
              errorCheck={setEmpty}
              options={kidsAge}
              onChange={(e)=>{
                setEmpty(0)
                setFormData({ ...formData, age: e.value })
                setTimeOne(e.value)
              }}
            />
            {empty === 5 && <small> Please select the age</small>}
          </div>
          {timeOne === null ? null : timeOne === '4-8 years' ? 
            <div className='form-field'>
              <Select
                styles={customStyles}
                id="date"
                name="date"
                placeholder='Date*'
                label="date"
                className='date'
                form={formData}
                setField={setFormData}
                keyName="age"
                errorCheck={setEmpty}
                options={campsTimeFirst}
                onChange={(value)=>{
                  setEmpty(0)
                  setFormData({ ...formData, date: value.value })
                }}
              />
            </div> 
            : 
            <div className='form-field'>
              <Select
                styles={customStyles}
                id="date"
                name="date"
                placeholder='Date*'
                label="date"
                className='date'
                form={formData}
                setField={setFormData}
                keyName="age"
                errorCheck={setEmpty}
                options={campsTimeSecond}
                onChange={(value)=>{
                  setEmpty(0)
                  setFormData({ ...formData, date: value.value })
                }}
              />
            </div>
          }
          {empty === 6 && <small> Please select the date</small>}
          <div className='terms-conditions'>
            <input
              type='checkbox'
              onChange={() => setAgree(agree ? false : true)}
            />
            <p>I have read and agree to the above terms and conditions.</p>
          </div>
          {empty === 7 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please agree to the condition!
            </small>
          )}
        </form>
        <CommonBtn
          isColor='#ca4625'
          text='Continue'
          buttonAction={handleEnrollment}
        />
      </div>
    </div>
  )
}

export default KidsCampForm