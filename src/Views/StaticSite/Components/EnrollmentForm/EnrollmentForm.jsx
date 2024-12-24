import React, { useState, useEffect, useMemo, lazy } from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select'
import { Country, State, City } from 'country-state-city'
import Other from './Other'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js'
import { mapApiKey } from '../../../../Constants/appSettings'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logoutUserAction } from '../../Views/Authentication/Auth.actions';
import EditStudent from './EditStudent';

const CourseDetails = lazy(() => import('./CourseDetails'));

import CustomModal from '../TermsandCondition/t&Cpopup'


const libraries = ['places'];
const mapKey = mapApiKey

const EnrollmentForm = ({
  empty,
  setFormData,
  formData,
  setEmpty,
  templateKey,
  qualificationData,
  listData,
  courseDate,
  currentCourse,
  courseAsset1,
  setCourseAsset1,
  courseAsset2,
  setCourseAsset2,
  isEditStudentOpen,
  setEditStudentOpen,
  handleSubmit,
  courseFee,
  setCourseFee,
  uploadCheck,
  setUploadCheck,
  isLoad,
  dateDurationChange
}) => {
  const [values, setValues] = useState([])
  const [updateAddress, setUpdateAddress] = useState({
    address1: formData?.address1,
    state: formData?.state,
    country: formData?.country,
    pincode: formData?.pincode,
  });
  const countries = Country.getAllCountries()
  const [Params] = useSearchParams()
  const [validationErrors, setValidationErrors] = useState([]);
  const [isoCode, setIsoCode] = useState('');
  const phoneNumberFromRedux = useSelector((state) => state.auth.user?.data?.phoneNumber);
  const countryFromRedux = useSelector((state) => state.auth.user.data?.country);
  const stateFromRedux = useSelector((state) => state.auth.user.data?.state);
  const cityFromRedux = useSelector((state) => state.auth.user.data?.city);
  const genderFromRedux = useSelector((state) => state.auth.user.data?.gender);
  const nationalityFromRedux = useSelector((state) => state.auth.user.data?.nationality);
  const dailCode = useSelector((state) => state.auth.user.data?.dialCode);
  const addressLine1 = useSelector((state) => state.auth.user.data?.addressLine1);
  const pincodeFromRedux = useSelector((state) => state.auth.user.data?.pincode);
  console.log('pincodeFromRedux ', pincodeFromRedux)
  const [phoneValue, setPhoneValue] = useState(formData.phone);
  const [bold, setBold] = useState(0)
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false)
  const [isChecked, setIsChecked] = useState(true); // Checkbox is checked by default
  const [disData, setDisData] = useState('yes')
  const [isResidential, setIsResidential] = useState(false)
  const [isRegular, setIsRegular] = useState(false)
  const [autocomplete, setAutocomplete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [defaultAddress, setDefaultAddress] = useState(true);
  const navigates = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectDateValue, setSelectDateValue] = useState(values.selectDate);
  const [setDate, setSetDate] = useState(false)
  const isSatsangPage = location.pathname?.includes("/enrollment/satsang") || location.pathname?.includes("/enrollment/samattvam") || location.pathname?.includes("/enrollment/fullmoon-meditation") || location.pathname?.includes("/enrollment/yoga-by-the-bay");
  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);
  const lastnameFromRedux = useSelector((state) => state.auth.user.data?.lastName);

  console.log("nameFromRedux from profile ", nameFromRedux);

  if (nameFromRedux === undefined) {
    dispatch(logoutUserAction());
    localStorage.removeItem("authorizationToken");
    navigates('/user/sign-in');
  }

  useEffect(() => {
    if (isSatsangPage) {
      setSetDate(true);
      setSelectDateValue({ label: 'No date Selected', value: 'No date Selected' });

      setFormData((prev) => ({
        ...prev,
        sdate: 'No date Selected',
        courseDetails: {
          ...prev.courseDetails,
          date: 'No date Selected',
        },
      }));
    }
  }, [isSatsangPage]);

  useEffect(() => {
    const token = localStorage.getItem('authorizationToken'); // Check for the auth token
    if (!token) {
      // If the token is not found, navigate to the login page
      navigates('/user/sign-in');
    } else {
      setLoading(false); // If token is found, stop the loading state
    }
  }, [navigates]);
  useEffect(() => {
    if (phoneNumberFromRedux) {
      setPhoneValue(`+${dailCode}${phoneNumberFromRedux}`);
    }
  }, [phoneNumberFromRedux]);

  useEffect(() => {
    if (countryFromRedux) {
      setFormData((prev) => ({ ...prev, country: countryFromRedux }));
      setValues((prev) => ({ ...prev, country: { label: countryFromRedux, value: countryFromRedux } }));
      const countryData = Country.getAllCountries().find(country => country.name === countryFromRedux)
      // console.log(countryData)
      setIsoCode(countryData.isoCode)
    }
    if (stateFromRedux) {
      setFormData((prev) => ({ ...prev, state: stateFromRedux }));
      setValues((prev) => ({ ...prev, state: { label: stateFromRedux, value: stateFromRedux } }));
    }
    if (cityFromRedux) {
      // console.log('cityFromRedux inside State ', cityFromRedux);
      setFormData((prev) => ({ ...prev, city: cityFromRedux }));
      setValues((prev) => ({ ...prev, city: { label: cityFromRedux, value: cityFromRedux } }));
    }

  }, [countryFromRedux, stateFromRedux, cityFromRedux, setFormData, setValues]);

  useEffect(() => {
    if (genderFromRedux) {
      const upperCaseGender = genderFromRedux.toUpperCase();
      setFormData((prev) => ({ ...prev, gender: upperCaseGender }));
    }
    if (nationalityFromRedux) {
      setFormData((prev) => ({ ...prev, nationality: nationalityFromRedux }));
    }
    if (addressLine1) {
      setFormData((prev) => ({ ...prev, address1: addressLine1 }));
    }
    if (pincodeFromRedux) {
      setFormData((prev) => ({ ...prev, pincode: pincodeFromRedux }));
    }
    if (lastnameFromRedux) {
      setFormData((prev) => ({ ...prev, lname: lastnameFromRedux }));
    }
  }, [genderFromRedux, nationalityFromRedux, addressLine1, pincodeFromRedux, lastnameFromRedux, setFormData]);

  useEffect(() => {
    if (cityFromRedux) {
      // Get all cities and find the one that matches the city in Redux
      console.log('cityFromRedux inside State ', cityFromRedux);
      const cities = City.getAllCities();
      const matchedCity = cities.find(city => city.name.toLowerCase() === cityFromRedux.toLowerCase());
      console.log('matched city ', matchedCity);

      if (matchedCity) {
        // Get state using stateCode and countryCode from matched city
        const matchedState = State.getStateByCodeAndCountry(matchedCity.stateCode, matchedCity.countryCode);
        console.log('matched State ', matchedState.name);

        if (matchedState) {
          console.log('matched State ', matchedState.name); // Set the state name
          setFormData((prev) => ({ ...prev, state: matchedState.name }));
          setValues((prev) => ({ ...prev, state: { label: matchedState.name, value: matchedState.name } }));
        } else {
          // setError('State not found for the given city');
        }
      } else {
        // setError('City not found');
      }
    }
  }, [cityFromRedux, setValues]);



  const handleResidential = (value) => {
    setIsResidential(value);
    localStorage.setItem('isResidential', value)
  }
  const navigate = useNavigate()

  const getUpdatedCountries = useMemo(() => {
    return Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
  }, []);

  // Function to handle when Autocomplete is loaded
  const onLoadAutocomplete = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  // Function to handle when a place is selected
  // const onPlaceChanged = () => {
  //   if (autocomplete) {
  //     const place = autocomplete.getPlace();
  //     console.log('Selected Place Object:', place); // Log the selected place object

  //     // Extract address components
  //     const address = place.formatted_address || '';
  //     console.log('Selected address Object:', address);
  //     const countryComponent = place.address_components?.find((component) =>
  //       component.types.includes('country')
  //     );
  //     const stateComponent = place.address_components?.find((component) =>
  //       component.types.includes('administrative_area_level_1')
  //     );
  //     const cityComponent = place.address_components?.find((component) =>
  //       component.types.includes('locality') || component.types.includes('sublocality')
  //     );
  //     const postalCodeComponent = place.address_components?.find((component) =>
  //       component.types.includes('postal_code')
  //     );

  //     // Extract values
  //     const country = countryComponent ? countryComponent.long_name : '';
  //     const state = stateComponent ? stateComponent.long_name : '';
  //     console.log("State select ", state);
  //     const city = cityComponent ? cityComponent.long_name : '';
  //     console.log("city select ", city);
  //     const pincode = postalCodeComponent ? postalCodeComponent.long_name : '';
  //     console.log("pincode select ", pincode);

  //     // Update formData with extracted values
  //     setFormData((prev) => ({ ...prev, address1: address, country, state, city, pincode }));
  //     setEmpty(address ? 0 : 4); // Set error if no address is found

  //     // Find and set the selected country in Select component
  //     const selectedCountry = getAllCountries.find((option) => option.label === country);
  //     setValues((prev) => ({ ...prev, country: selectedCountry }));


  //     console.log('Selected Country from Address:', selectedCountry); // Log the selected country
  //     console.log('State:', state, 'City:', city, 'Pincode:', pincode); // Log the state, city, and pincode
  //   }
  // };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      console.log(
        'place ', place
      )
      const address = place.formatted_address || '';
      console.log(
        'Address ', address
      )
      const nameComponent = place?.name;
      const countryComponent = place.address_components?.find((component) =>
        component.types.includes('country')
      );
      const stateComponent = place.address_components?.find((component) =>
        component.types.includes('administrative_area_level_1')
      );
      const cityComponent = place.address_components?.find((component) =>
        component.types.includes('locality')
      );
      const postalCodeComponent = place.address_components?.find((component) =>
        component.types.includes('postal_code')
      );
      const address2CodeComponent1 = place.address_components?.find((component) =>
        component.types.includes('sublocality_level_2')
      );
      const address2CodeComponent2 = place.address_components?.find((component) =>
        component.types.includes('sublocality_level_1')
      );
      const address1CodeComponent1 = place.address_components?.find((component) =>
        component.types.includes('street_number')
      );
      const address1CodeComponent2 = place.address_components?.find((component) =>
        component.types.includes('route')
      );
      const address1CodeComponent3 = place.address_components?.find((component) =>
        component.types.includes('sublocality_level_3')
      );


      const country = countryComponent ? countryComponent.long_name : '';
      const state = stateComponent ? stateComponent.long_name : '';
      const city = cityComponent ? cityComponent.long_name : '';
      const pincode = postalCodeComponent ? postalCodeComponent.long_name : '';
      const formattedAddress = place.formatted_address || '';
      const name = nameComponent ? nameComponent : '';

      // Split the formatted address into lines for Address 1 and Address 2
      const addressParts = formattedAddress.split(', ');

      // Set Address Line 1 and Address Line 2 based on your criteria
      let address1 = [
        name,
        address1CodeComponent1?.long_name || '',
        address1CodeComponent2?.long_name || '',
        address1CodeComponent3?.long_name || '',
      ]
        .filter(Boolean) // Filter out any empty strings
        .join(', '); // Join the components with a comma/ Address till required part

      let address2 = [
        address2CodeComponent1?.long_name || '',
        address2CodeComponent2?.long_name || '',
      ]
        .filter(Boolean) // Filter out any empty strings
        .join(', '); // Join the components with a comma


      if (!address1) {
        address1 = address2;
        address2 = ''; // Clear Address Line 2
      }

      setFormData((prev) => ({
        ...prev,
        address1: address1,
        address2: address2,
        country,
        state,
        city,
        pincode,
      }));
      setEmpty(address ? 0 : 4);

      const selectedCountry = getUpdatedCountries.find((option) => option.label === country);
      setValues({ country: selectedCountry, state: { label: state, value: state }, city: { label: city, value: city } });
    }
  };

  // Function to generate state options based on selected country
  const getUpdatedStates = (countryIsoCode) => {
    if (!countryIsoCode) return [];
    return State.getStatesOfCountry(countryIsoCode).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
  };

  // Function to generate city options based on selected state
  const getUpdatedCities = (countryIsoCode, stateIsoCode) => {
    if (!countryIsoCode || !stateIsoCode) return [];
    return City.getCitiesOfState(countryIsoCode, stateIsoCode).map((city) => ({
      value: city.name,
      label: city.name,
    }));
  };



  const handleStartDate = (value) => {
    const day = value.getDate().toString().padStart(2, '0'); // Pad single digits with leading zero
    const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = value.getFullYear();

    setValues((prev) => {
      return {
        ...prev, startDate: `${day}/${month}/${year}`
      }
    })
    setFormData({ ...formData, startDate: `${day}/${month}/${year}` })
    if (values.endDate) { createEndDate(`${day}/${month}/${year}`, values.endDate) }
  }

  const createEndDate = (startDate, value) => {
    // console.log(startDate, value);

    let endDate = formatDate(addMonths(parseDate(startDate ? startDate : values?.startDate), value?.value))
    setValues((prev) => {
      return {
        ...prev, endDate: value, endDateFormat: endDate
      }
    })
    localStorage.setItem('courseEndDate', endDate)
    setFormData({ ...formData, endDate: value, duration: value?.value })
    dateDurationChange(value)
  }

  // Function to add months to a given date
  function addMonths(startDate, months) {
    const date = startDate; // Create a Date object from the start date
    // date.setMonth(date.getMonth() + months); // Add the number of months
    let totalDays = months * 30
    date.setDate(date.getDate() + (totalDays - 1));
    return date;
  }

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0'); // Day with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month with leading zero
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number); // Split the date string and convert parts to numbers
    // Create a new Date object (months are 0-based, so subtract 1 from month)
    return new Date(year, month - 1, day);
  }
  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))
  const getAddress = () => {
    let address = JSON.parse(localStorage.getItem('addressDataNew'))
    // setUpdateAddress1(address?.address1);
    return address?.address1;
  }

  const getPincode = () => {
    let address = JSON.parse(localStorage.getItem('addressDataNew'))
    // setUpdateAddress1(address?.address1);
    return address?.pincode;
  }

  const getCountry = () => {
    let address = JSON.parse(localStorage.getItem('addressDataNew'))
    // setUpdateAddress1(address?.address1);
    return address?.country;
  }

  const getState = () => {
    let address = JSON.parse(localStorage.getItem('addressDataNew'))
    // setUpdateAddress1(address?.address1);
    return address?.state;
  }

  const handlePhoneChange = (value) => {
    setPhoneValue(value);
    setFormData({ ...formData, phone: value });

    if (value) {
      const errors = validatePhoneNumber(value);
      setValidationErrors(errors);
    } else {
      setValidationErrors([]);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const errors = [];
    const parsedNumber = parsePhoneNumberFromString(phoneNumber);

    if (!parsedNumber) {
      errors.push('Invalid phone number format.');
      return errors;
    }

    const areaCode = parsedNumber.nationalNumber.slice(0, 3); // Extract the area code
    let skip = 0;
    if (areaCode === '555') {
      // Skip additional checks for '555' area codes
      skip = 1;
    }
    // Check if it's a valid phone number for the selected country
    if (!isValidPhoneNumber(phoneNumber) && skip === 0) {
      errors.push('Phone number is not valid for the selected country.');
    }

    // Additional custom validations can be added here
    if (parsedNumber && /(\d)\1{6,}/.test(parsedNumber.nationalNumber)) {
      errors.push('Phone number contains invalid patterns (e.g., too many repeated digits).');
    }
    return errors;
  };

  const handleCheckboxChange = () => {
    setIsChecked(prevChecked => {
      const newChecked = !prevChecked;
      setDisData('no');
      setFormData({ ...formData, terms: newChecked });
      return newChecked;
    });
  };
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    // Retrieve address data from localStorage when the component mounts
    const storedAddressData = localStorage.getItem('addressData');
    if (storedAddressData) {
      setUpdateAddress(JSON.parse(storedAddressData));
    }
  }, []);


  useEffect(() => {
    const array = ["Yoga Classes for Men (Regular Asana) - On Campus",
      "Yoga Classes for Women (Regular Asana) - On Campus",
      "Yoga Asana Regular Classes - (Men & Women) - Online Yoga Classes",
      "Weekend Yoga Asana Classes - (Men & Women) - On Campus",
      "Weekend Yoga Asana Classes - (Men & Women) - Online",
      "Children's Yoga Classes (Regular) - On Campus",
      "Children's Weekend Yoga Class - On Campus",
      "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      "Regular Pregnancy Yoga Classes - Online & On Campus",
      "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      "Healing Yoga Movement & Rhythm - Online",
      "Yog Prayas - Online",
      "Online Meditation Course  (Foundation Course)",
      "Regular Online Meditation Classes",
      "Couples’ Yoga Classes  - Online"
    ]
    const isMatch = array.includes(currentCourse?.title);
    setIsRegular(isMatch);
    localStorage.setItem('isRegular', isMatch)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow);
  }, [currentCourse])

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
    // console.log(formData);
  };


  const formattedDates = currentCourse?.dates?.map(date => ({
    label: date,
    value: date
  })) || [];
  const durationList = [{ label: '1 Month', value: 1 }, { label: '2 Months', value: 2 }, { label: '3 Months', value: 3 }, { label: '4 Months', value: 4 }, { label: '5 Months', value: 5 }, { label: '6 Months', value: 6 }, { label: '7 Months', value: 7 }, { label: '8 Months', value: 8 }, { label: '9 Months', value: 9 }, { label: '9 Months', value: 9 }, { label: '10 Months', value: 10 }, { label: '11 Months', value: 11 }, { label: '12 Months', value: 12 }]

  useEffect(() => {
    if (validationErrors?.length > 0) {
      setFormData(prevState => ({ ...prevState, phone: '' })); // Clear phone value if errors are present
    } else {
      setFormData(prevState => ({ ...prevState, phone: phoneValue })); // Update phone value if no errors
    }
  }, [validationErrors, phoneValue]);


  const [mail, setmail] = useState(null)


  const pickMail = () => {
    if (formData.mode === 'ONLINE') {
      setmail(templateKey?.templateOnline)
      return templateKey?.templateOnline
    } else if (formData.mode === 'OFFLINE' && formData.residental === '') {
      setmail(templateKey?.templateOnline)
      return templateKey?.templateOnline
    } else {
      if (formData.residental === 'RESIDENTIAL') {
        console.log(templateKey?.templateOffline?.templateResidential)
        setmail(templateKey?.templateOffline?.templateResidential)
        return templateKey?.templateOffline?.templateResidential
      } else {
        setmail(templateKey?.templateOffline?.templateNonResidential)
        return templateKey?.templateOffline?.templateNonResidential
      }
    }
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  }

  const handleEditClose = () => {
    setEditOpen(false);
    setEditStudentOpen(false);
  };


  if (loading) {
    return null; // Render nothing while checking the token
  }

  return (
    <div className="main_div">

      <div className="grid_box1">
        <div className="right_grid">
          <form>
            <CourseDetails
              courseDate={courseDate}
              currentCourse={currentCourse}
              formData={formData}
              setFormData={setFormData}
              courseAsset1={courseAsset1}
              setCourseAsset1={setCourseAsset1}
              courseAsset2={courseAsset2}
              setCourseAsset2={setCourseAsset2}
              handleSubmit={handleSubmit}
              empty={empty}
              setEmpty={setEmpty}
              formattedDates={formattedDates}
              courseFee={courseFee}
              setCourseFee={setCourseFee}
              uploadCheck={uploadCheck}
              setUploadCheck={setUploadCheck}
              handleResidential={handleResidential}
              dateDurationChange={dateDurationChange}
              isEditStudentOpen={isEditStudentOpen}
              setEditStudentOpen={setEditStudentOpen}
              isLoad={isLoad}
            />
            {(formData.startDate && values?.endDateFormat) &&
              <div className='terms' style={{ fontSize: '2rem' }}>Start date: <b>{values.startDate}</b> <br />
                Valid till: <b>{values?.endDateFormat}</b></div>}

          </form>
        </div>
        {/* <div>
          <div>
            <div className="details_course_box ">
              <div className="detail_image_box">
              </div>
              <div className="current_duration">
                <div className='personal_info_wrapper'>
                  <span className='details_newName'>
                    Student details
                  </span>
                  <div onClick={handleEditOpen}>
                    <img src='/images/edit_icon.svg' style={{ cursor: 'pointer' }} alt='' loading='lazy' />
                  </div>
                </div>
                {(editOpen || isEditStudentOpen) && (
                  <EditStudent isShippingModalOpen={handleEditOpen} setIsShipppingModalOpen={handleEditClose} formData={formData} setFormData={setFormData} setEmpty={setEmpty} empty={empty} currentCourse={currentCourse} dateDurationChange={dateDurationChange} handleSubmit={handleSubmit} setUpdateAddress={setUpdateAddress} setDefaultAddress={setDefaultAddress} />
                )}
                <div className='fields_alignment fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Name</span> <span className='tenure_course truncated-text'> {`${formData?.name} ${formData?.lname}`}</span></div>

                </div>
                <div className='details_desc_days fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Email Address</span> <span className='tenure_course'>{formData?.email}</span></div>

                </div>
                <div className='details_desc_days fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Mobile Number</span> <span className='tenure_course'>{formData?.phone}</span></div>

                </div>
                <div className='details_desc_days fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Gender</span> <span className='tenure_course'>{formData?.gender}</span></div>

                </div>
                <div className='details_desc_days'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Address</span> <span className='tenure_course'>
                    {getAddress()}
                    {getAddress() && <>, </>}
                    {getState()}
                    {getCountry() && <>, </>}
                    {getCountry()}
                    {getPincode() && <> - </>}
                    {getPincode()}
                  </span></div>
                </div>
              </div>
            </div>
          </div>
          {
            showForm && (
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
                  {empty === 1 && <small class="name_err"> Please enter your name</small>}
                </div>

                <div className="form_error">
                  <InputComponent
                    id="text"
                    placeholder="Email ID*"
                    form={formData}
                    setField={setFormData}
                    keyName="email"
                    errorCheck={setEmpty}
                  />
                  {empty === 2 && <small class="name_err"> Please enter a valid email</small>}




                </div>
                <div className="form_error">
                  <PhoneInput
                    placeholder="Enter phone number*"
                    defaultCountry="IN"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                  />

                  {validationErrors?.length > 0 ? (
                    <div className="created_phone_err">Invalid Number</div>
                  ) : (empty === 3 && (!formData.phone || (formData.phone === '')) ? (
                    <small className="phone_error">Please enter a valid phone number</small>
                  ) : " ")}
                  {console.log('ve', validationErrors)}

                </div>
                <LoadScript googleMapsApiKey={mapKey} libraries={libraries}>
                  <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
                    <div className="form_error">
                      <InputComponent
                        type="text"
                        placeholder="Address Line 1*"
                        form={formData}
                        setField={setFormData}
                        keyName="address1"
                        errorCheck={setEmpty}
                      />
                      {empty === 4 && <p>Please enter your address</p>}
                    </div>
                  </Autocomplete>

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

                  <div className="form_error countries_list">
                    <Select
                      styles={customStyles}
                      id="country"
                      name="country"
                      placeholder="Country"
                      options={getUpdatedCountries}
                      value={values.country}
                      onChange={(value) => {
                        setValues({ country: value, state: null, city: null });
                        setFormData((prev) => ({ ...prev, country: value.label }));
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
                      options={getUpdatedStates(values?.country?.isoCode ? values?.country?.isoCode :
                        isoCode)}
                      value={values.state}
                      onChange={(value) => {
                        setValues({ ...values, state: value, city: null });
                        setFormData((prev) => ({ ...prev, state: value.label }));
                      }}
                    />
                  </div>

                  <div className="form_error">

                    <Select
                      styles={customStyles}
                      id="city"
                      name="city"
                      placeholder="City"
                      options={getUpdatedCities(values?.country?.isoCode ? values?.country?.isoCode :
                        isoCode, values?.state?.value)}
                      value={values.city}
                      onChange={(value) => {
                        setValues({ ...values, city: value });
                        setFormData((prev) => ({ ...prev, city: value.label }));
                      }}
                    />
                  </div>

                  <div className="form_error pincode_err">
                    <InputComponent
                      type="text"
                      placeholder="Pincode*"
                      form={formData}
                      setField={setFormData}
                      keyName="pincode"
                      errorCheck={setEmpty}
                    />
                    {empty === 8 && <small>Please enter your pincode</small>}
                  </div>
                </LoadScript>

                <div className="personal_gender">
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

                  </div>
                  {empty === 11 && <div style={{ marginTop: '-11rem', fontSize: '12px', float: 'right', display: 'inline-block', color: 'red' }}> Please select one option</div>}
                </div>


                {!isSatsangPage && (
                  <div className="form_error course_date">
                    <Select
                      styles={customStyles}
                      id="sdate"
                      name="sdate"
                      placeholder="Select Date/Time*"
                      form={formData}
                      setField={setFormData}
                      keyName="sdate"
                      errorCheck={setEmpty}
                      isSearchable={false}
                      options={formattedDates}
                      value={setDate ? selectDateValue : values.selectDate}
                      onChange={(value) => {
                        setValues(
                          { country: values.country, state: values.state, city: values.city, sdate: value },
                          false
                        )
                        setFormData((prev) => {
                          return {
                            ...prev, sdate: value.value, courseDetails: {
                              ...prev.courseDetails,
                              date: value.value
                            }
                          }
                        })
                      }}
                    />
                    {empty === 18 && <small id="fill_err"> Please select course date</small>}
                  </div>
                )}

                {isRegular && <><br /><div className="form_error course_date date-input-wrapper">
                  <DatePicker
                    minDate={minDate}
                    visiblity={'hidden'}
                    placeholderText="Select start date*"
                    dateFormat="dd/MM/YYYY"
                    value={values.startDate}
                    form={formData}
                    setField={setFormData}
                    onChange={(value) => {
                      handleStartDate(value)
                    }}
                    onKeyDown={(e) => e.preventDefault()} //
                  />
                  {empty === 21 && <small id="fill_err"> Please select start date</small>
                  }
                </div></>}

                {isRegular && <>
                  <div className="form_error course_date">
                    <Select
                      styles={customStyles}
                      id="endDate"
                      name="endDate"
                      placeholder="Select Duration*"
                      options={durationList}
                      value={values.endDate}
                      onChange={(value) => {
                        createEndDate('', value)
                      }}
                    />
                    {empty === 20 && <small id="fill_err"> Please select duration</small>}
                  </div>
                  <div style={{ padding: '10px 0 0 26px', color: '#C9705F', fontWeight: '600' }}>&#8377;2200 off for 12 months</div>
                </>}

                <div className="DOB_box form_error">
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
                  {empty === 9 && <div style={{ marginTop: '-8.2rem', display: 'inline-block', float: 'right', fontSize: '12px', color: 'red' }}> Please enter age between 4 & 100</div>}
                </div>
                <div className="form_error">
                  <InputComponent
                    type="text"
                    placeholder="Nationality"
                    form={formData}
                    setField={setFormData}
                    keyName="nationality"
                    errorCheck={setEmpty}
                  />
                  {empty === 10 && <div style={{ marginTop: '-8rem', display: 'inline-block', float: 'right', fontSize: '12px', color: 'red' }}> Please enter your nationality</div>}
                </div>
                <Other
                  empty={empty}
                  formData={formData}
                  setFormData={setFormData}
                />

              </form>
            )
          }
        </div> */}
      </div>

    </div>
  )
}

export default EnrollmentForm