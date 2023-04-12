import React, { useState, useEffect } from 'react'
import InnerNavComponent from '../InnerNavComponent'
import InputComponent from '../InputComponent'
import Select from 'react-select'
import { Country } from 'country-state-city'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router'
import 'react-datepicker/dist/react-datepicker.css'
import './style.scss'
import { AnonymousDonation, donationPaymentOrder, successMail } from './api'


const DonationForm = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])


  const Donate = {
    title: '',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }

  const [formData, setFormData] = useState({
    amount: '',
    fName: '',
    lName: '',
    email: '',
    panNum: '',
    phone: '',
    dob: '',
    country: '',
  })

  const [validate, setValidate] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [values, setValues] = useState([])
  const [currency, setCurrency] = useState('INR')
  const [agree, setAgree] = useState(false)
  const [tax, setTax] = useState(false)
  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'hsl(0, 0%, 95%)',
      borderRadius: '50px',
      width: '400px',
      padding: '6px',
      borderColor: 'black',
      border: state.isFocused ? 0 : 0,
      backgroundColor: state.isFocused ? 'rgb(240,234,234)' : 'rgb(240,234,234)',
      // Removes weirdgroundCborder around container
      boxShadow: state.isFocused ? null : null,
    })
  }

  const submitForm = async() => {
    if (isDisabled === false) {
      const { data } =  await AnonymousDonation(
        {
          amount: formData.amount,
          isAnonymous: isDisabled,
          tnc: agree,
          tax: tax,
          firstName: formData.fName,
          lastName: formData.lName,
          email: formData.email,
          pan: formData.panNum,
          phoneNumber: formData.phone,
          DOB: formData.dob,
          icountry: formData.country,
          currency: values.country.currency !== 'INR' ? 'USD' : 'INR'
        }  
      )
      const paymentOrderResponse = await donationPaymentOrder(data.data._id, {
        amount: formData.amount,
        donationFormId: data.data._id,
        currency: values.country.currency !== 'INR' ? 'USD' : 'INR',
        notes : {
          description: 'DONATION TRANSACTION',
          donationFormId: data.data._id
        }
      })
      if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
        return 0
  
      const options = {
        key: 'rzp_live_KyhtrIyJ546bd2', // Enter the Key ID generated from the Dashboard
        amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'The Yoga Institute',
        description: 'Donation Transaction',
        order_id: paymentOrderResponse.data.id, // eslint-disable-line
        handler: async(res) => {
          // Navigate to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
          if (
            res.razorpay_payment_id &&
          res.razorpay_order_id &&
          res.razorpay_signature
          ){
            await successMail({
              type: 'INFO_TYI',
              HTMLTemplate: 'DONATION_FORM_CONFIRMATION_MAIL',
              subject: 'Donation',
              data: {
                name: formData.fName + ' ' + formData.lName
              },
              receivers: [formData.email,'info@yogainstitute.org'],
            })
            navigate('/donation')
          }
        },
        prefill: {
          firstName: formData.fName,
          lastName: formData.lName,
          email: formData.email,
          pan: formData.panNum,
          phoneNumber: formData.phone,
          DOB: formData.dob,
          icountry: formData.country
        },
        notes: {
          formData: data.data._id,
          firstName: formData.fName,
          lastName: formData.lName,
          email: formData.email,
          pan: formData.panNum,
          phoneNumber: formData.phone,
          DOB: formData.dob,
          icountry: formData.country
        },
        theme: {
          color: '#3399cc', // enter theme color for our website
        },
      }
      const rzp = new window.Razorpay(options)
      rzp.open()
    } else{
      const { data } = await AnonymousDonation(
        {
          amount: formData.amount,
          isAnonymous: isDisabled,
          tnc: agree,
          tax: false,
          currency: currency
        }
      )
      const paymentOrderResponse = await donationPaymentOrder(data.data._id, {
        amount: formData.amount,
        donationFormId: data.data._id,
        notes : {
          description: 'DONATION TRANSACTION',
          donationFormId: data.data._id
        }
      })
      if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id)
        return 0
  
      const options = {
        key: 'rzp_live_KyhtrIyJ546bd2', // Enter the Key ID generated from the Dashboard
        amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'The Yoga Institute',
        description: 'Donation Transaction',
        order_id: paymentOrderResponse.data.id, // eslint-disable-line
        handler: async(res) => {
          // Navigate to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
          if (          res.razorpay_payment_id &&
            res.razorpay_order_id &&
            res.razorpay_signature){
            navigate('/donation')
          }

        },
        theme: {
          color: '#3399cc', // enter theme color for our website
        },
      }
      console.log(paymentOrderResponse,'helotjiogery]iug')
      const rzp = new window.Razorpay(options)
      rzp.open()
    }
  }


  const donationFormHandler = (e) => {
    console.log(formData)
    e.preventDefault()
    if (formData.amount === '' || formData.amount < 1) {
      return setValidate(1)
    } else if (formData.fName === '' && isDisabled === false) {
      return setValidate(2)
    } else if (formData.lName === '' && isDisabled === false) {
      return setValidate(3)
    } else if (formData.email === '' && isDisabled === false) {
      return setValidate(4)
    } else if (formData.panNum === '' && isDisabled === false) {
      return setValidate(5)
    } else if (formData.phone === '' && isDisabled === false) {
      return setValidate(6)
    } else if (formData.dob === '' && isDisabled === false) {
      return setValidate(7)
    } else if (formData.country === '' && isDisabled === false) {
      return setValidate(8)
    } else if (agree !== true) {
      return setValidate(9)
    } else {
      submitForm()
    }
  }

  const handleClick = () => {
    if (isDisabled === false) {
      setIsDisabled(true)
      setFormData({ ...formData, fName: '', lName: '', email: '', panNum: '', phone: '', dob: '', country: '' })
      setValues({ ...values, country: null })
      setSelectedDate(null)
    } else {
      setTax(tax.checked === false)
      setIsDisabled(false)
    }
  }

  return (
    <div className='donation-container'>
      <InnerNavComponent abc={Donate} />
      <div className='donation-form'>
        <form>
          <h1 className='donation-heading'>Support Our Cause</h1>
          <p className='donation-paragraph'>Let us be responsible and mindful for the well-being of people in our society</p>
          <div className='donate-amount'>
            <div>
              <h1 className='donation-amount-heading'>Enter any amount you wish to donate</h1>
            </div>
            <div className='donation_input'>
              <InputComponent
                type="number"
                minnum='1'
                placeholder="Enter amount"
                form={formData}
                setField={setFormData}
                keyName="amount"
                errorCheck={setValidate}
                css={isDisabled === true ? {} : { border: '0.5px solid hsl(0, 0%, 80%)' }}
              />
              {validate === 1 && (<small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Amount!
              </small>)}

              <div className='donation-amount-align'>
                <h1 className='donation-toggle-paragraph'>Donate anonymously</h1>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round" onClick={handleClick} ></span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className='donation-field'>
              <div className='alignment'>
                <InputComponent
                  type='text'
                  placeholder="First Name*"
                  form={formData}
                  setField={setFormData}
                  keyName="fName"
                  errorCheck={setValidate}
                  blocked={isDisabled}
                  css={isDisabled === true ? { backgroundColor: 'hsl(0, 0%, 95%)', border: 'none' } : { border: '0.5px solid hsl(0, 0%, 80%)' }}
                />
                {validate === 2 && (<small style={{ color: 'red' }}>
                *Please Enter First Name!
                </small>)}
              </div>
              <div className='alignment'>
                <InputComponent
                  type="text"
                  placeholder="Last Name*"
                  form={formData}
                  setField={setFormData}
                  keyName="lName"
                  errorCheck={setValidate}
                  blocked={isDisabled}
                  css={isDisabled === true ? { backgroundColor: ('hsl(0, 0%, 95%)'), border: 'none' } : { border: '0.5px solid hsl(0, 0%, 80%)' }}
                />
                {validate === 3 && (<small style={{ color: 'red' }}>
                *Please Enter Last Name!
                </small>)}
              </div>
            </div>

            <div className='donation-field'>
              <div className='alignment'>
                <InputComponent
                  type="email"
                  placeholder="Email ID*"
                  form={formData}
                  setField={setFormData}
                  keyName="email"
                  errorCheck={setValidate}
                  blocked={isDisabled}
                  css={isDisabled === true ? { backgroundColor: ('hsl(0, 0%, 95%)'), border: 'none' } : { border: '0.5px solid hsl(0, 0%, 80%)' }}
                />
                {validate === 4 && (<small style={{ color: 'red' }}>
                *Please Enter your email!
                </small>)}
              </div>
              <div className='alignment'>
                <InputComponent
                  type="text"
                  placeholder="PAN Number*"
                  form={formData}
                  setField={setFormData}
                  keyName="panNum"
                  errorCheck={setValidate}
                  blocked={isDisabled}
                  css={isDisabled === true ? { backgroundColor: ('hsl(0, 0%, 95%)'), border: 'none' } : { border: '0.5px solid hsl(0, 0%, 80%)' }}
                />
                {validate === 5 && (<small style={{ color: 'red' }}>
                *Please Enter PAN number!
                </small>)}
              </div>
            </div>
            <div className='donation-field'>
              <div className='alignment'>
                <InputComponent
                  type="number"
                  placeholder="Phone*"
                  form={formData}
                  setField={setFormData}
                  keyName="phone"
                  errorCheck={setValidate}
                  blocked={isDisabled}
                  css={isDisabled === true ? { backgroundColor: ('hsl(0, 0%, 95%)'), border: 'none' } : { border: '0.5px solid hsl(0, 0%, 80%)' }}
                />
                {validate === 6 && (<small style={{ color: 'red' }}>
                *Please Enter Phone Number!
                </small>)}
              </div>

              <div className='alignment'>
                <DatePicker
                  type='number'
                  className={isDisabled === true ? 'date-of-birth' : 'date-birth'}
                  placeholderText="Date of Birth*"
                  selected={selectedDate}
                  value={selectedDate}
                  form={formData}
                  setField={setFormData}
                  keyName='dob'
                  dateFormat="dd/MM/yyyy"
                  onChange={(selectedDate) => {
                    setSelectedDate(selectedDate)
                    setFormData({ ...formData, dob: selectedDate.toString() })
                  }}
                  disabled={isDisabled}
                />
                {validate === 7 && (<small style={{ color: 'red' }}>
              *Please Enter Date of Birth!
                </small>)}
              </div>
            </div>
            <div>
              <div className='alignment'>
                <Select
                  styles={isDisabled === true ? { customStyles } : {}}
                  id="country"
                  name="country"
                  placeholder='Country'
                  label="country"
                  className='select'
                  form={formData}
                  setField={setFormData}
                  keyName="country"
                  errorCheck={setValidate}
                  options={updatedCountries}
                  value={values.country}
                  onChange={(value) => {
                    setValues({ country: value, state: null, city: null }, false)
                    setFormData(prev => { return { ...prev, country: value.name } })
                  }}
                  isDisabled={isDisabled}
                />
                {validate === 8 && (<small style={{ color: 'red' }}>
            *Please Select Country!
                </small>)}
              </div>
            </div>
          </div>
          <div className="terms-conditions">
            <div className='terms-conditions-parts'>
              <input
                type="checkbox"
                className='input-box'
                onChange={(e) => {
                  setAgree(e.target.checked)
                }}
              />
              <p>I accept all Terms & Conditions. <a href='https://theyogainstitute.org/terms-and-conditions' className='conditions-underline'>View Terms & Conditions</a></p>
            </div>
            <div className='terms-conditions-parts'>
              <input
                type="checkbox"
                className='input-box'
                checked={isDisabled === false ? tax === true : ''}
                disabled={isDisabled}
                onChange={(e)=> setTax(e.target.checked)}
              />
              <p>Do you wish to avail 80G tax exemption</p>
            </div>
            {validate === 9 && (<small style={{ color: 'red', marginLeft: '0' }}>
            *Please agree to Terms & conditions!
            </small>)}
          </div>
          <button className='donate-button global-common-btn' onClick={donationFormHandler}>Donate</button>
        </form>
      </div>
    </div>
  )
}

export default DonationForm
