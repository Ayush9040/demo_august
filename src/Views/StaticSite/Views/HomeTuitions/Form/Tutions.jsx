
import React, { useEffect, useState } from 'react'
import InputComponent from '../../../Components/InputComponent'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import Select from 'react-select'
import { Country, City } from 'country-state-city'
import './style.scss'

const Tutions = ({
  name,
  address,
  country,
  city,
  dob,
  phone,
  email,
  health,
  session,
  language,
  persons,
  dayTime,
  constraints,
  comments,
  formData,
  setFormData,
  mode
}) => {

  const [values, setValues] = useState([])
  const [empty, setEmpty] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }

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
      width: '40%',
      padding: '0.25rem 2rem',
      marginTop: '2rem',
      display: 'flex',
      justifyContent:'center',
      marginLeft: '2rem',
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

  const updatedCities = (countryId, stateId) => {
    return City.getCitiesOfCountry(countryId, stateId).map((city) => {
      console.log(city, 'city')
      return (
        {
          label: city.name,
          value: city.id,
          ...city,
        })
    })
  }

  console.log(country,city)

  return (
    <div className="signin-container">
      <InnerNavComponent abc={UserNav} />
      <div className="signin-form">
        <form>
          <h1>Home Tutions</h1>

          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter Name*"
              value={name}
              form={formData}
              setField={setFormData}
              keyName="name"
            />
          </div>
          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter Address*"
              value={address}
              form={formData}
              setField={setFormData}
              keyName="address"
            />
          </div>
          <div className="form-field">
            <Select
              styles={customStyles}
              id="country"
              name="country"
              label="country"
              placeholder='Select Country*'
              className='select'
              options={updatedCountries}
              value={values.country}
              onChange={(value) => {
                setValues({ country: value, state: null, city: null }, false)
                setFormData(prev=>{ return { ...prev, state: value.name } })
              }}
            />
          </div>
          <div className="form-field">
            <Select
              styles={customStyles}
              id="city"
              name="city"
              placeholder='Select city*'
              className='select'
              options={updatedCities(values?.country?.isoCode, values?.state?.isoCode)}
              value={values.city}
              onChange={(value) => {
                setValues({ country: values.country, state: values.state, city: value }, false)
                setFormData(prev=>{ return { ...prev, state: value.name } })
              }}
            />
          </div>
          <div className="form-field">
            <InputComponent
              type="date"
              placeholder="Enter Date of birth*"
              value={dob}
              form={formData}
              setField={setFormData}
              keyName="dob"
            />
          </div>
          <div className="form-field">
            <div className='gender-main'>Gender:&nbsp;
              <label className="gender*">
                Male&nbsp;
                <input
                  type="radio"
                  value="MALE"
                  name="gender"
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
              <div className="form-field">
                <InputComponent
                  type="number"
                  placeholder="Enter mobile number*"
                  value={phone}
                  form={formData}
                  setField={setFormData}
                  keyName="phone"
                />
                {empty === 2 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    *Please Enter Valid Email!
                  </small>
                )}
              </div>
              <div className="form-field">
                <InputComponent
                  type="email"
                  placeholder="Enter email*"
                  value={email}
                  form={formData}
                  setField={setFormData}
                  keyName="email"
                />
              </div>
              <div className="form-field">
                <InputComponent
                  type="text"
                  placeholder="Enter health condition*"
                  value={health}
                  form={formData}
                  setField={setFormData}
                  keyName="health"
                />
              </div>
              <div className="form-field">
                <InputComponent
                  type="text"
                  placeholder="Enter preffered language*"
                  value={language}
                  form={formData}
                  setField={setFormData}
                  keyName="language"
                />
              </div>
              <div className="form-field">
                <InputComponent
                  type="number"
                  placeholder="Enter session required*"
                  value={session}
                  form={formData}
                  setField={setFormData}
                  keyName="session"
                />
              </div>
              <div className="form-field">
                <InputComponent
                  type="number"
                  placeholder="Enter number of persons*"
                  value={persons}
                  form={formData}
                  setField={setFormData}
                  keyName="persons"
                />
              </div>
              <div className="form-field">
                <InputComponent
                  type="text"
                  placeholder="Enter day and time*"
                  value={dayTime}
                  form={formData}
                  setField={setFormData}
                  keyName="dayTime"
                />
              </div>
              <div className="form-field">
                <InputComponent
                  type="text"
                  placeholder="Enter constraints"
                  value={constraints}
                  form={formData}
                  setField={setFormData}
                  keyName="constraints"
                />
                <div className="form-field">
                  <textarea rows='10' cols='55'
                    type="text"
                    placeholder='Any other comments...'
                    value={comments}
                    className='comments'
                    form={formData}
                    setField={setFormData}
                    keyName="comments"
                  ></textarea>
                </div>
                <div className="form-field">
                  <Select
                    type="text"
                    placeholder="Enter mode"
                    value={mode}
                    form={formData}
                    setField={setFormData}
                    keyName="mode"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Tutions