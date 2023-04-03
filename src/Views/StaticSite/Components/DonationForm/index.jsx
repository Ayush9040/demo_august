import React, { useState } from 'react'
import InnerNavComponent from '../InnerNavComponent'
import InputComponent from '../InputComponent'
import Select from 'react-select'
import { Country } from 'country-state-city'
import './style.scss'

const DonationForm = () => {

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
    terms: 'no',
    country: ''
  })

  const [validate, setValidate] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)

  const [values, setValues] = useState([])
  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'rgb(240,234,234)',
      borderRadius: '50px',
      width: '100%',
      // padding: '1rem 2rem',
      // marginTop: '2rem',
      // marginLeft: '2rem',
      // backgroundColor:'blue',
      // Overwrittes the different states of border
      border: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? '0' : '0',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? '0' : '0'
      }
    })
  }

  const stylesSelect = {
    background: 'rgb(240,234,234)'
  }

  const donationFormHandler = (e) => {
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
    } else if (formData.terms === 'no') {
      return setValidate(8)
    } else if (formData.country === '' && isDisabled === false) {
      return setValidate(9)
    } else {
      return
    }
  }

  const handleClick = () => {
    if (isDisabled === false) {
      setIsDisabled(true)
      setFormData({ ...formData, fName: '', lName: '', email: '', panNum: '', phone: '', dob: '', country: '' })
    } else {
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
              <InputComponent
                type='text'
                placeholder="First Name*"
                form={formData}
                setField={setFormData}
                keyName="fName"
                errorCheck={setValidate}
                blocked={isDisabled}
                css={isDisabled === true ? { backgroundColor: ('rgb(240,234,234)') } : {}}
              />
              {validate === 2 && (<small style={{ color: 'red', marginLeft: '-450px', width: '100%', position: 'relative', top: '60px' }}>
                *Please Enter First Name!
              </small>)}
              <InputComponent
                type="text"
                placeholder="Last Name*"
                form={formData}
                setField={setFormData}
                keyName="lName"
                errorCheck={setValidate}
                blocked={isDisabled}
                css={isDisabled === true ? { backgroundColor: ('rgb(240,234,234)') } : {}}
              />
              {validate === 3 && (<small style={{ color: 'red', marginLeft: '-300px', position: 'relative', top: '60px' }}>
                *Please Enter Last Name!
              </small>)}
            </div>

            <div className='donation-field'>
              <InputComponent
                type="email"
                placeholder="Email ID*"
                form={formData}
                setField={setFormData}
                keyName="email"
                errorCheck={setValidate}
                blocked={isDisabled}
                css={isDisabled === true ? { backgroundColor: ('rgb(240,234,234)') } : {}}
              />

              <InputComponent
                type="text"
                placeholder="PAN Number*"
                form={formData}
                setField={setFormData}
                keyName="panNum"
                errorCheck={setValidate}
                blocked={isDisabled}
                css={isDisabled === true ? { backgroundColor: ('rgb(240,234,234)') } : {}}
              />
              {validate === 4 && (<small style={{ color: 'red', marginLeft: '-86rem', width: '100%', position: 'relative', top: '60px' }}>
                *Please Enter your email!
              </small>)}
              {validate === 5 && (<small style={{ color: 'red', marginLeft: '-450px', width: '100%', position: 'relative', top: '60px' }}>
                *Please Enter PAN number!
              </small>)}
            </div>
            <div className='donation-field'>
              <InputComponent
                type="number"
                placeholder="Phone*"
                form={formData}
                setField={setFormData}
                keyName="phone"
                errorCheck={setValidate}
                blocked={isDisabled}
                css={isDisabled === true ? { backgroundColor: ('rgb(240,234,234)') } : {}}
              />

              <InputComponent
                type="date"
                placeholder='Date of birth*'
                form={formData}
                onfocus="text.type = Date of birth*"
                setField={setFormData}
                keyName="dob"
                errorCheck={setValidate}
                blocked={isDisabled}
                css={isDisabled === true ? { backgroundColor: ('rgb(240,234,234)') } : {}}
              />
              {validate === 6 && (<small style={{ color: 'red', marginLeft: '-86rem', width: '100%', position: 'relative', top: '60px' }}>
                *Please Enter Phone Number!
              </small>)}
            </div>
            <div>
              <Select
                styles={isDisabled === true ? customStyles : {}}
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
              {/* {validate === 9 && (<small style={{ color: 'red', marginLeft: '0' }}>
                *Please Select Country!
              </small>)} */}
            </div>
            {validate === 7 && (<small style={{ color: 'red', marginLeft: '440px', position: 'relative', bottom: '20px' }}>
              *Please Enter Date of Birth!
            </small>)}
          </div>
          {validate === 8 && (<small style={{ color: 'red', marginLeft: '0' }}>
            *Please accept Terms & Conditions!
          </small>)}
          {validate === 9 && (<small style={{ color: 'red', marginLeft: '0' }}>
            *Please Select Country!
          </small>)}
          <div className="terms-conditions">
            <div className='terms-conditions-parts'>
              <input
                type="checkbox"
                className='input-box'
                keyName='check1'
                onChange={() => setValidate({ ...validate, terms: 'yes' })}
              />
              <p>I accept all Terms & Conditions. <a href='https://theyogainstitute.org/terms-and-conditions' className='conditions-underline'>View Terms & Conditions</a></p>
            </div>
            <div className='terms-conditions-parts'>
              <input
                type="checkbox"
                className='input-box'
                keyName='check2'
                onChange={() => setValidate({ ...validate, terms: 'yes' })}
              />
              <p>Do you wish to avail 80G tax exemption</p>
            </div>
            <button className='donate-button global-common-btn' onClick={donationFormHandler}>Donate</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DonationForm
