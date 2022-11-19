import React, { useState, useEffect } from 'react'
import InputComponent from '../../../Components/InputComponent'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.scss'
import CommonBtn from '../../../Components/commonbtn'
import { createNutriOrder, enrollPlan, successMail } from '../Api'
import Select from 'react-select'
import { Country, State, City } from 'country-state-city'
import { useNavigate } from 'react-router-dom'

const SubcriptionForm = ({ packageName, packagePrice, closeForm }) => {
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
    email: '',
    city: '',
    country: '',
  })
  const [agree, setAgree] = useState(false)
  const [empty, setEmpty] = useState()
  const [values, setValues] = useState([])

  const submitForm = async() => {
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
      notes: {
        description: 'Nutri Diet Clinic',
      },
    })
    if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
      return 0

    const options = {
      key: 'rzp_test_udmmUPuH3rTJe8', // Enter the Key ID generated from the Dashboard
      amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'The Yoga Institute',
      description: 'Nutri Diet Clinic Transaction',
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
            HTMLTemplate: 'NUTRI_DIET_CLINIC_CONFIRMATION_MAIL',
            subject: 'Enrollment Confirmation',
            data: {
              name: formData.name,
            },
            receivers: [formData.email, 'info@theyogainstitute.org'],
          })
          navigate('/enrollment_thankyou')
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
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
    } else if (formData.email === '') {
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
    }
  }

  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  // const city = City.getAllCities()

  const updatedCities = (countryId,stateId) => {
    // console.log(countryId,stateId,'stateId')
    return City.getCitiesOfCountry(countryId,stateId).map((city) => {
      // console.log(city,'city')
      return (
        {
          label: city.name,
          value: city.id,
          ...city,
        })})
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'white',
      borderRadius: '50px',
      padding: '0.5rem 2rem',
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
      <h4>Fees: Rs. {packagePrice}</h4>
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
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e })
            }}
          />
          {empty === 3 && <small> Please enter a valid phone number</small>}
        </div>
        <div className='form-field'>
          {/* <InputComponent
            type='text'
            placeholder='Country*'
            form={formData}
            setField={setFormData}
            keyName='country'
            errorCheck={setEmpty}
          /> */}
          <Select 
            styles={customStyles}
            id="country"
            name="country"
            label="country"
            placeholder='Country'
            className='select'
            form={formData}
            setField={setFormData}
            keyName='country'
            errorCheck={setEmpty}
            options={updatedCountries}
            value={values.country}
            onChange={(value) => {
              setValues({ country: value, state: null, city: null }, false)
            }}
          />
      
          {empty === 4 && <small> Please enter your country</small>}
        </div>

        {/* <div className='form-field'>
          <Select
            id="state"
            name="state"
            placeholder="state"
            className='select'
            options={updatedStates(values.country?.isoCode)}
            value={values.state}
            onChange={(value) => {
              console.log(value,'sss')
              setValues({ country: values.country, state: value, city: null }, false)
            }}
          />
        </div> */}
        <div className='form-field'>
          {/* <InputComponent
            type='text'
            placeholder='City*'
            form={formData}
            setField={setFormData}
            keyName='city'
            errorCheck={setEmpty}
          /> */}
          <Select 
            styles={customStyles}
            id="city"
            name="city"
            label="city"
            placeholder='City'
            className='select'
            form={formData}
            setField={setFormData}
            keyName='city'
            errorCheck={setEmpty}
            options={updatedCities(values?.country?.isoCode,values?.state?.isoCode)}
            value={values.city}
            onChange={(value) => {
              setValues({ country: values.country, state: values.state, city: value }, false)
            }}
          />
          {empty === 5 && <small> Please enter your city</small>}
        </div>
        <div className='form-field' style={{ textAlign: 'left' }} id='t-n-c'>
          <ol>
            Terms & Conditions
            <li>Fees are non- refundable and non-transferable.</li>
            <li>
              Call on +91 9967429596 for appointments between 10:00 am to 6:30 pm IST
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
      <CommonBtn
        isColor='#ca4625'
        text='Continue'
        buttonAction={handleEnrollment}
      />
    </div>
  )
}

export default SubcriptionForm
