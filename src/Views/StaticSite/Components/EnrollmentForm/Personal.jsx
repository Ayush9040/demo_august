import React, { useState, useEffect } from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Select from 'react-select'
import { Country, State, City } from 'country-state-city'
import Other from './Other'
import CourseDetails from './CourseDetails'
import SelectDropDown from '../Select Dropdown'
import { Link, useSearchParams } from 'react-router-dom'

const Personal = ({
  empty,
  setFormData,
  formData,
  setEmpty,
  courseDate,
  currentCourse,
  courseAsset1,
  setCourseAsset1,
  courseAsset2,
  setCourseAsset2,
  handleSubmit,
  courseFee,
  setCourseFee,
  uploadCheck,
  setUploadCheck
}) => {
  // {console.log(handleSubmit)}
  //const today = new Date().toISOString().split('T')[0]
  const [values, setValues] = useState([])
  const countries = Country.getAllCountries()
  const [selectDate, setSetselectDate] = useState(null)
  const [Params] = useSearchParams()
  const [fixDate, setFixDate] = useState([]);

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  useEffect(() => {
    // setSetselectDate(Params.get('date'))

    // window.scrollTo(0, 0)
    // console.log(pageDate?.key,'heoo')
    // {Params.get('date')===null? window.scrollTo(0, 0): document.getElementById('date-select').scrollIntoView()}
  }, [])

  const updatedStates = (countryId) => {
    return State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }))
  }

  const updatedCities = (countryId, stateId) => {
    // console.log(countryId,stateId,'stateId')
    return City.getCitiesOfState(countryId, stateId).map((city) => {
      // console.log(city,'city')
      return {
        label: city.name,
        value: city.id,
        ...city,
      }
    })
  }
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'white',
      borderRadius: '50px',
      width: '100%',
      padding: '0.25rem 2rem',
      marginTop: '2rem',
      marginLeft: '2rem',
      // Overwrittes the different states of border
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

  const selectStyles = {
    cursor: 'pointer',
    background: 'blue',
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
  }


  const testSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const formattedDates = currentCourse?.dates?.map(date => ({
    label: date,
    value: date
  })) || [];

  

  return (
    <div className="main_div">
      
      <div className="grid_box">
        <div className="left_grid">
          <form>
            <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Name*"
                form={formData}
                setField={setFormData}
                keyName="name"
                errorCheck={setEmpty}
              />
              {empty === 1 && <small> Please enter your name</small>}
            </div>

            <div className="form_error">
              <InputComponent
                type="email"
                id="text"
                placeholder="Email ID*"
                form={formData}
                setField={setFormData}
                keyName="email"
                errorCheck={setEmpty}
              />
              {empty === 2 && <small> Please enter a valid email</small>}
            </div>
            <div className="form_error">
              <PhoneInput
                placeholder="Enter phone number*"
                defaultCountry="IN"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e })
                }}
              />
              {empty === 3 && <small> Please enter a valid phone number</small>}
            </div>
            <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Address Line 1*"
                form={formData}
                setField={setFormData}
                keyName="address1"
                errorCheck={setEmpty}
              />
              {empty === 4 && <small> Please enter your address</small> }
            </div>
            <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Address Line 2"
                form={formData}
                setField={setFormData}
                keyName="address2"
                errorCheck={setEmpty}
              />
            </div>
            <div className="form_error">
              <Select 
                styles={customStyles}
                id="country"
                name="country"
                placeholder="Country"
                label="country"
                className="select"
                form={formData}
                setField={setFormData}
                keyName="country"
                errorCheck={setEmpty}
                options={updatedCountries}
                value={values.country}
                onChange={(value) => {
                  setValues({ country: value, state: null, city: null }, false)
                  setFormData((prev) => {
                    return { ...prev, country: value.name }
                  })
                }}
              />
              {empty === 5 && <p>Please enter your country</p>}
            </div>
            <div className="form_error">
              <Select
                styles={customStyles}
                id="state"
                name="state"
                placeholder="State"
                form={formData}
                setField={setFormData}
                keyName="state"
                errorCheck={setEmpty}
                options={updatedStates(values.country?.isoCode)}
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
              
            </div>
            <div className="form_error">
              <Select
                styles={customStyles}
                id="city"
                name="city"
                placeholder="City"
                form={formData}
                setField={setFormData}
                keyName="city"
                errorCheck={setEmpty}
                options={updatedCities(
                  values?.country?.isoCode,
                  values?.state?.isoCode
                )}
                value={values.city}
                onChange={(value) => {
                  setValues(
                    {
                      country: values.country,
                      state: values.state,
                      city: value,
                    },
                    false
                  )
                  setFormData((prev) => {
                    return { ...prev, city: value.name }
                  })
                }}
              />
              {/* {empty === 7 && (
                <small >
                  {' '}
                  Please enter your city
                </small>
              )} */}
            </div>
            <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Pincode*"
                form={formData}
                setField={setFormData}
                keyName="pincode"
                errorCheck={setEmpty}
              />
              {empty === 8 && <small> Please enter your pincode</small>}
            </div>

            {/* <div className="form_error">
            <div className="course-card-dropdown">
          <div >
           
          <SelectDropDown
                  currentValue={selectDate}
                  changeCurrentValue={setSetselectDate}
                  text={'Select Date/Time'}
                  isStyles={selectStyles}
                  dates={currentCourse.dates}
                  keyName="sdate"
                  form={formData}
                  setFormData={setFormData}
                  value={values.selectDate}
                  onChange={(value) => {
                    setValues({ ...values, sdate: value })
                    setFormData((prev) => ({
                      ...prev,
                      sdate: value.keyName
                  }))
                  }}
          />
         
          </div>
          </div>
          </div> */}


          <div className="form_error">
              <Select
                styles={customStyles}
                id="sdate"
                name="sdate"
                placeholder="Course Date"
                form={formData}
                setField={setFormData}
                keyName="sdate"
                errorCheck={setEmpty}
                options={formattedDates}
                value={values.selectDate}
                onChange={(value) => {
                  setValues(
                    { country: values.country, state: values.state, city: values.city, sdate: value },
                    false
                  )
                  setFormData((prev) => {
                    return { ...prev, sdate: value.value, courseDetails: {
                      ...prev.courseDetails,
                      date: value.value 
                    } }
                  })
                }}
              />
              
            </div>

          
        
            {/* <div className="personal_gender">
              <span className="gender-text">Gender*</span>
              <div className="gender form_error">
                <label className="gender_radio">
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
                {empty === 11 && <small> Please select one option</small>}
              </div>
            </div> */}

            
            {/* <div className="DOB_box form_error">
              <InputComponent
                type="number"
                placeholder="Age"
                minnum="4"
                maxnum="99"
                form={formData}
                setField={setFormData}
                keyName="AGE"
                errorCheck={setEmpty}
              />
              {empty === 9 && <small> Please enter age between 4 & 100</small>}
            </div> */}
            {/* <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Nationality"
                form={formData}
                setField={setFormData}
                keyName="nationality"
                errorCheck={setEmpty}
              />
              {empty === 10 && <small> Please enter your nationality</small>}
            </div> */}
            <Other
              // setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              // handleEmpty4={handleEmpty4}
            />
            
          </form>
        </div>
        <div className="right_grid">
          <form>
            {/* <div className="medical-section">
              <p className="medical-label">
                Medical History & Current Health Issues :
              </p>
              <textarea
                className="text_box"
                type="text"
                rows="5"
                cols="40"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    medicalstatus: e.target.value,
                  })
                }}
              />
            </div> */}


            
            <CourseDetails
              courseDate={courseDate}
              currentCourse={currentCourse}
              formData={formData}
              setFormData={setFormData}
              courseAsset1={courseAsset1}
              setCourseAsset1={setCourseAsset1}
              courseAsset2={courseAsset2}
              setCourseAsset2={setCourseAsset2}
              // setBold={setBold}
              handleSubmit={handleSubmit}
              empty={empty}
              setEmpty={setEmpty}
              courseFee={courseFee}
              setCourseFee={setCourseFee}
              uploadCheck={uploadCheck}
              setUploadCheck={setUploadCheck}
            />

          </form>
          <div className="button_box">
            <button className="next_button" onClick={handleSubmit}>
            Next
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Personal