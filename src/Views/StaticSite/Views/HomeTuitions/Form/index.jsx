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
import { useSelector } from 'react-redux'
import { MultiSelect } from 'react-multi-select-component'

const HomeTutions = ({ courseMode }) => {
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
    days: [],
    course: courseMode,
    mode: '',
  })
  const [values, setValues] = useState([])
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState(''); 
  const [empty, setEmpty] = useState(0)

  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);
  const phoneNumberFromRedux = useSelector((state) => state.auth.user.data?.phoneNumber);
  const emailFromRedux = useSelector((state) => state.auth.user.data?.email);
  const countryNameFromRedux = useSelector((state) => state.auth.user.data?.country);
  const stateNameFromRedux = useSelector((state) => state.auth.user.data?.state);
  const cityNameFromRedux = useSelector((state) => state.auth.user.data?.city);
  const panNameFromRedux = useSelector((state) => state.auth.user.data?.pan);
  const lnameNameFromRedux = useSelector((state) => state.auth.user.data?.lastName);
  const dobNameFromRedux = useSelector((state) => state.auth.user.data?.dateOfBirth);
  const genderFromRedux = useSelector((state) => state.auth.user.data?.gender);


  useEffect(() => {
    // JS to modify span after component mounts
    const spanElement = document.querySelector('.atleast_3_days .dropdown-container .dropdown-heading .dropdown-heading-value span');
    
    if (spanElement) {
      spanElement.textContent = 'Select 3 days*';
      spanElement.className = 'atleast_3days_options_container';
    }
  }, []);

  console.log('countryNameFromRedux ', countryNameFromRedux);
  console.log('dobNameFromRedux ', dobNameFromRedux);
  console.log('courseMode ', courseMode);

  useEffect(() => {
    if (countryNameFromRedux) {
      setFormData((prev) => ({ ...prev, country: countryNameFromRedux }));
      setValues((prev) => ({ ...prev, country: { label: countryNameFromRedux, value: countryNameFromRedux } }));
    }
    if (stateNameFromRedux) {
      setFormData((prev) => ({ ...prev, state: stateNameFromRedux }));
      setValues((prev) => ({ ...prev, state: { label: stateNameFromRedux, value: stateNameFromRedux } }));
    }
    if (cityNameFromRedux) {
      setFormData((prev) => ({ ...prev, city: cityNameFromRedux }));
      setValues((prev) => ({ ...prev, city: { label: cityNameFromRedux, value: cityNameFromRedux } }));
    }
    
  }, [countryNameFromRedux, cityNameFromRedux, stateNameFromRedux, setFormData, setValues]);
  

  useEffect(() => {
    if (nameFromRedux) {
      setFormData((prev) => ({ ...prev, name: nameFromRedux }));
    }
    if (phoneNumberFromRedux) {
      setFormData((prev) => ({ ...prev, contact: phoneNumberFromRedux }));
    }
    if (emailFromRedux) {
      setFormData((prev) => ({ ...prev, email: emailFromRedux }));
    }
    if (panNameFromRedux) {
      setFormData((prev) => ({ ...prev, panNum: panNameFromRedux }));
    }
    
  
  }, [nameFromRedux, phoneNumberFromRedux, emailFromRedux, panNameFromRedux, setFormData]);



  // Extract the date in 'YYYY-MM-DD' format
  useEffect(() => {
    if (dobNameFromRedux) {
      const formattedDOB = dobNameFromRedux.split('T')[0]; // Extract 'YYYY-MM-DD' part
      setFormData((prev) => ({ ...prev, dob: formattedDOB }));
    }
  }, [dobNameFromRedux]);

  useEffect(() => {
    if (genderFromRedux) {
      const upperCaseGender = genderFromRedux.toUpperCase(); 
      setFormData((prev) => ({ ...prev, gender: upperCaseGender }));
    }
    
  }, [genderFromRedux, setFormData]);


  // Options for the Days multi-select dropdown
  const daysOptions = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
  ];


   // Generate time options from 12:00 AM to 11:00 PM in 1-hour intervals
   const generateTimeOptions = () => {
    const times = [];
    
    const formatTime = (hour) => {
      const period = hour >= 12 ? 'PM' : 'AM';
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      return `${formattedHour}:00 ${period}`;
    };
  
    // Start from hour 5 (5 AM) and go until hour 20 (8 PM)
    for (let hour = 5; hour <= 20; hour++) {
      times.push({ label: formatTime(hour), value: formatTime(hour) });
    }
  
    return times;
  };
  
  const timeOptions = generateTimeOptions();

  


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

  // Prevent more than 3 selections
  const handleDayChange = (selected) => {
    if (selected.length <= 3) {
      setSelectedDays(selected);
    }
    console.log('selectedDays ', selectedDays)
    setFormData((prevFormData) => ({
      ...prevFormData,
      days: selectedDays.map((day) => day.value),
      // PreferedDayAndTime: selectedTime,
    }));
  };

  const {
    name,
    address,
    dob,
    contact,
    email,
    noOfSessionsRequired,
    preferedLanguage,
    days,
    noOfPersons,
    PreferedDayAndTime,
    constraints,
  } = formData

  const handleEmpty = () => {
    let hasError = false;
    
    if (
      formData.name === '' ||
      formData.name === undefined ||
      formData.name === null
    ) {
       setEmpty(1)
       hasError = true;
    } else if (!validateEmail(formData.email)) {
       setEmpty(2)
       hasError = true;
    } else if (
      formData.contact === '' ||
      formData.contact.length < 6 ||
      formData.contact.length > 15
    ) {
       setEmpty(3)
       hasError = true;
    } else if (formData.address === '') {
       setEmpty(4)
       hasError = true;
    } else if (formData.country === '') {
       setEmpty(5)
       hasError = true;
    }
    //  else if (formData.city === ' ') {
    //   return setEmpty(6)
    // }
    else if (formData.dob === '') {
       setEmpty(7)
       hasError = true;
    } else if (formData.genHealthCondition === '') {
       setEmpty(8)
       hasError = true;
    } else if (formData.gender === '') {
      setEmpty(9)
      hasError = true;
    } else if (formData.preferedLanguage === '') {
      setEmpty(10)
      hasError = true;
    } else if (formData.noOfSessionsRequired === '') {
      setEmpty(11)
      hasError = true;
    } else if (formData.noOfPersons === '') {
      setEmpty(12)
      hasError = true;
    } else if (selectedDays.length !== 3) {
      console.log('see ', formData.days)
      hasError = true;
      setEmpty(15)
    } else if (formData.PreferedDayAndTime === '') {
      console.log('run from !!!')
      hasError = true;
      setEmpty(17)
    } else if (formData.dayTime === '') {
      setEmpty(13)
      hasError = true;
    } else if (formData.mode === '') {
      setEmpty(14)
      hasError = true;
    } else {
      setEmpty(0)
      setFormData((prevFormData) => ({
        ...prevFormData,
        days: selectedDays.map((day) => day.value),
      }));
      handleSubmit()
    }

   

     // If no errors, submit the form data
     

      // console.log("Form Data:", formData);
  }


  const nagivate = useNavigate()
  const handleSubmit = async() => {
    // await handleEmpty()
    console.log('empty ', empty)
    // if (empty !== 0) return
    try {
      // if (!hasError) {
        
  
      // }
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
            {empty === 11 && <small> Please enter how many sessions are required</small>}
          </div>
          <div div className="form-field">
              <select
                name="noOfPersons"
                onChange={(e) =>
                  setFormData({ ...formData, noOfPersons: e.target.value })
                }
              >
                <option disabled selected className="edit-account-gender">
                  Number of Persons*
                </option>
                <option selected={formData.noOfPersons === '1'} value="1">
                  1
                </option>
                <option selected={formData.noOfPersons === '2'} value="2">
                  2
                </option>
                <option selected={formData.noOfPersons === '3'} value="3">
                  3
                </option>
                <option selected={formData.noOfPersons === '4'} value="4">
                  4
                </option>
              </select>

              {empty === 12 && (
                <small style={{ color: 'red', marginLeft: '0', margin: '0px' }}>
                  *Please enter number of persons
                </small>
              )}
            </div>
          {/* <div className="form-field">
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
          </div> */}
          {/* <div className="form-field">
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
          </div> */}

          {/* Added a new fields */}

          <div className="form-field multi_day atleast_3_days" style={{ width: '100%'}}>
        {/* <label>Select Preferred Days*</label> */}
        <MultiSelect
          styles={customStyles}
          options={daysOptions}
          value={selectedDays}
          onChange={handleDayChange}
          labelledBy="Select 3 Days"
          disableSearch={true}  // Optional: to disable search feature if not needed
          hasSelectAll={false}  // Disable "Select All" option
        />
        {empty === 15 && (
                <small style={{ color: 'red', marginLeft: '0', margin: '0px' }}>
                  *Please Select atleast 3 days!
                </small>
              )}
      </div>


      <div div className="form-field">
              <select
                name="noOfPersons"
                onChange={(e) =>
                  setFormData({ ...formData, PreferedDayAndTime: e.target.value })
                }
              >
                <option disabled selected className="edit-account-gender">
                Select Time*
                </option>
                <option selected={formData.PreferedDayAndTime === '5:00 AM'} value="5:00 AM">
                  5:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '6:00 AM'} value="6:00 AM">
                  6:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '7:00 AM'} value="7:00 AM">
                  7:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '8:00 AM'} value="8:00 AM">
                  8:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '9:00 AM'} value="9:00 AM">
                  9:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '10:00 AM'} value="10:00 AM">
                  10:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '11:00 AM'} value="11:00 AM">
                  11:00 AM
                </option>
                <option selected={formData.PreferedDayAndTime === '12:00 PM'} value="12:00 PM">
                  12:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '13:00 PM'} value="13:00 PM">
                  13:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '14:00 PM'} value="14:00 PM">
                  14:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '15:00 PM'} value="15:00 PM">
                  15:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '16:00 PM'} value="16:00 PM">
                  16:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '17:00 PM'} value="17:00 PM">
                  17:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '18:00 PM'} value="18:00 PM">
                  18:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '19:00 PM'} value="19:00 PM">
                  19:00 PM
                </option>
                <option selected={formData.PreferedDayAndTime === '20:00 PM'} value="20:00 PM">
                  20:00 PM
                </option>
              </select>

              {empty === 17 && (
                <small style={{ color: 'red', marginLeft: '0', margin: '0px' }}>
                  *Please Select the Time!
                </small>
              )}
            </div>


      {/* <div className="form-field"> */}
        {/* <label>Select Preferred Time*</label> */}
        {/* <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="" disabled>Select Time</option>
          {timeOptions.map((time) => (
            <option key={time.value} value={time.value}>
              {time.label}
            </option>
          ))}
        </select>
        {empty === 17 && (
                <small style={{ color: 'red', marginLeft: '0', margin: '0px' }}>
                  *Please Select the Time!
                </small>
              )}
      </div> */}



          {/* Added a new fields */}

          
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
                <small style={{ color: 'red', marginLeft: '0', margin: '0px' }}>
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
          buttonAction={handleEmpty}
          isColor={'#CF5335'}
        />
      </div>
    </div>
  )
}

export default HomeTutions
