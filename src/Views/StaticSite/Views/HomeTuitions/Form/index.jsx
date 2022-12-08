import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Country, City, State } from 'country-state-city'
import './style.scss'
import InputComponent from '../../../Components/InputComponent'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { validateEmail } from '../../../../../helpers'
import CommonBtn from '../../../Components/commonbtn'
import { createHomeTution } from '../Api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authBaseDomain } from '../../../../../Constants/appSettings'

const HomeTutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    dob: '',
    gender: '',
    contact: '',
    email: '',
    genHealthCondition: '',
    preferedLanguage: '',
    noOfSessionsRequired: '',
    noOfPersons: '',
    PreferedDayAndTime: '',
    anyOtherComments: '',
    mode: '',
  })
  const [values, setValues] = useState([])
  const [empty, setEmpty] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'white',
      borderRadius: '50px',
      width: '100%',
      padding: '0.25rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '2rem',
      borderColor: state.isFocused
        ? 'rgba(96, 96, 96, 0.5019607843)'
        : 'rgba(96, 96, 96, 0.5019607843)',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused
          ? 'rgba(96, 96, 96, 0.5019607843)'
          : 'rgba(96, 96, 96, 0.5019607843)',
      },
    }),
  }
  const updatedStates = (countryId) => {
    return State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }))
  }

  const updatedCities = (countryId, stateId) => {
    return City.getCitiesOfCountry(countryId, stateId).map((city) => {
      console.log(city, 'city')
      return {
        label: city.name,
        value: city.id,
        ...city,
      }
    })
  }

  const {
    name,
    address,
    dob,
    contact,
    email,
    noOfSessionsRequired,
    preferedLanguage,
    noOfPersons,
    PreferedDayAndTime,
    constraints,
  } = formData

  const handleEmpty = () => {
    if (
      formData.name === '' ||
      formData.name === undefined ||
      formData.name === null
    ) {
      return setEmpty(1)
    } else if (!validateEmail(formData.email)) {
      return setEmpty(2)
    } else if (
      formData.contact === '' ||
      formData.contact.length < 6 ||
      formData.contact.length > 15
    ) {
      return setEmpty(3)
    } else if (formData.address === '') {
      return setEmpty(4)
    } else if (formData.country === '') {
      return setEmpty(5)
    }
    //  else if (formData.city === ' ') {
    //   return setEmpty(6)
    // }
    else if (formData.dob === '') {
      return setEmpty(7)
    } else if (formData.genHealthCondition === '') {
      return setEmpty(8)
    } else if (formData.gender === '') {
      return setEmpty(9)
    } else if (formData.preferedLanguage === '') {
      return setEmpty(10)
    } else if (formData.noOfSessionsRequired === '') {
      return setEmpty(11)
    } else if (formData.noOfPersons === '') {
      return setEmpty(12)
    } else if (formData.dayTime === '') {
      return setEmpty(13)
    } else if (formData.mode === '') {
      return setEmpty(14)
    } else {
      setEmpty(0)
    }
  }

  const nagivate = useNavigate()
  const handleSubmit = async() => {
    await handleEmpty()
    if (empty !== 0) return
    try {
      await createHomeTution(formData)
      await axios.post(`${authBaseDomain}/ali/mail`, {
        type: 'INFO_TYI',
        HTMLTemplate: 'HOME_TUTIONS_CONFIRMATION_MAIL',
        subject: 'Enrollment Confirmation',
        data: {
          name: formData.name,
        },
        receivers: [formData.email, 'info@theyogainstitute.org'],
      })
      nagivate('/enrollment_thankyou')
    } catch {
      console.log('error')
    }
  }
  return (
    <div className="signin_container">
      <h1>Home Tutions</h1>
      <div className="signin_form">
        <div className="left_grid">
          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter Name*"
              value={name}
              form={formData}
              setField={setFormData}
              keyName="name"
              errorCheck={setEmpty}
            />
            {empty === 1 && <small> Please enter your name</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="email"
              placeholder="Enter email*"
              value={email}
              form={formData}
              setField={setFormData}
              keyName="email"
              errorCheck={setEmpty}
            />
            {empty === 2 && <small> Please enter an valid E-mail</small>}
          </div>
          <div className="form-field">
            <PhoneInput
              // type="number"
              placeholder="Enter mobile number*"
              value={contact}
              form={formData}
              setField={setFormData}
              keyName="contact"
              errorCheck={setEmpty}
              defaultCountry='IN'
              onChange={(e) => {
                setFormData({ ...formData, phone: e })
              }}
            />
            {empty === 3 && <small> Please enter your phone number</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter Address*"
              value={address}
              form={formData}
              setField={setFormData}
              keyName="address"
              errorCheck={setEmpty}
            />
            {empty === 4 && <small> Please enter your address</small>}
          </div>
          <div className="form-field">
            <Select
              styles={customStyles}
              id="country"
              name="country"
              label="country"
              placeholder="Select Country*"
              className="select"
              options={updatedCountries}
              value={values.country}
              errorCheck={setEmpty}
              onChange={(value) => {
                setValues({ country: value, state: null, city: null }, false)
                setFormData((prev) => {
                  return { ...prev, country: value.name }
                })
              }}
            />
            {empty === 5 && <small> Please select your country</small>}
          </div>
          <div className="form-field">
            <Select
              styles={customStyles}
              id="city"
              name="city"
              placeholder="Select state*"
              className="select"
              errorCheck={setEmpty}
              options={updatedStates(
                values?.country?.isoCode,
                values?.state?.isoCode
              )}
              value={values.state}
              onChange={(value) => {
                setValues(
                  { country: values.country, state: value, city: null },
                  false
                )
                setFormData((prev) => {
                  return { ...prev, state: value.name }
                })
              }}
            />
            {/* {empty === 6 && <small> Please select your city</small>} */}
          </div>
          <div className="form-field">
            <Select
              styles={customStyles}
              id="city"
              name="city"
              placeholder="Select city*"
              className="select"
              errorCheck={setEmpty}
              options={updatedCities(
                values?.country?.isoCode,
                values?.state?.isoCode
              )}
              value={values.city}
              onChange={(value) => {
                setValues(
                  { country: values.country, state: values.state, city: value },
                  false
                )
                setFormData((prev) => {
                  return { ...prev, city: value.name }
                })
              }}
            />
            {/* {empty === 6 && <small> Please select your city</small>} */}
          </div>
          <div className="form-field">
            <InputComponent
              type="date"
              placeholder="Enter Date of birth*"
              value={dob}
              form={formData}
              setField={setFormData}
              keyName="dob"
              errorCheck={setEmpty}
            />
            {empty === 7 && <small> Please enter your DOB</small>}
          </div>
        </div>
        <div className="right_grid">
          <div className="gender form_error">
            <div className="personal_gender">Gender*</div>
            <label className="gender_radio">
              Male&nbsp;
              <input
                type="radio"
                value="MALE"
                name="gender"
                errorCheck={setEmpty}
                checked={formData.gender === 'MALE'}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({ ...formData, gender: e.target.value })
                    setEmpty(0)
                  }
                }}
              />
            </label>
            <label className="gender_radio">
              Female&nbsp;
              <input
                className="radio"
                type="radio"
                value="FEMALE"
                name="gender"
                errorCheck={setEmpty}
                checked={formData.gender === 'FEMALE'}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData(
                      { ...formData, gender: e.target.value },
                      setEmpty(0)
                    )
                  }
                }}
              />
            </label>
            {empty === 9 && <small> Please select one option</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter preffered language*"
              value={preferedLanguage}
              form={formData}
              setField={setFormData}
              keyName="preferedLanguage"
              errorCheck={setEmpty}
            />
            {empty === 10 && (
              <small> Please enter your preffered language</small>
            )}
          </div>
          <div className="form-field">
            <InputComponent
              type="number"
              minnum="1"
              maxnum="99"
              placeholder="Enter session required*"
              value={noOfSessionsRequired}
              form={formData}
              setField={setFormData}
              keyName="noOfSessionsRequired"
              errorCheck={setEmpty}
            />
            {empty === 11 && <small> Please enter how many are required</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="number"
              minnum="1"
              maxnum="99"
              placeholder="Enter number of persons*"
              value={noOfPersons}
              form={formData}
              setField={setFormData}
              errorCheck={setEmpty}
              keyName="noOfPersons"
            />
            {empty === 12 && <small> Please enter number of persons</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter day and time*"
              value={PreferedDayAndTime}
              form={formData}
              setField={setFormData}
              keyName="PreferedDayAndTime"
              errorCheck={setEmpty}
            />
            {empty === 13 && <small> Please tell day and time</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter constraints"
              value={constraints}
              form={formData}
              setField={setFormData}
              keyName="constraints"
              errorCheck={setEmpty}
            />
            <div div className="form-field">
              <select
                name="mode"
                onChange={(e) =>
                  setFormData({ ...formData, mode: e.target.value })
                }
              >
                <option disabled selected className="edit-account-gender">
                  Mode*
                </option>
                <option selected={formData.mode === 'ONLINE'} value="ONLINE">
                  Online
                </option>
                <option selected={formData.mode === 'OFFLINE'} value="OFFLINE">
                  Offline
                </option>
              </select>

              {empty === 14 && (
                <small style={{ color: 'red', marginLeft: '0' }}>
                  *Please Select the mode of classes!
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text_area">
        <textarea
          className="home_text_box"
          placeholder="Enter health condition*"
          type="text"
          rows="5"
          cols="40"
          onChange={(e) => {
            setFormData({
              ...formData,
              genHealthCondition: e.target.value,
            })
          }}
        />
      </div>
      {empty === 8 && (
        <small> Please enter your health condition (if any)</small>
      )}
      <div className="text_area">
        <textarea
          rows="5"
          cols="40"
          type="text"
          className="home_text_box"
          placeholder="Any other comments..."
          // value={anyOtherComments}
          // form={formData}
          // setField={setFormData}
          // keyName="anyOtherComments"
          onChange={(e) => {
            setFormData({
              ...formData,
              anyOtherComments: e.target.value,
            })
          }}
        ></textarea>
      </div>
      <div className="tutions_btn">
        <CommonBtn
          text={'Submit'}
          buttonAction={handleSubmit}
          isColor={'#CF5335'}
        />
      </div>
    </div>
  )
}

export default HomeTutions
