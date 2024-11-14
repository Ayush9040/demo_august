import React, { useState, useEffect, useMemo, lazy } from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select'
import { Country, State, City } from 'country-state-city'
import Other from './Other'
// import CourseDetails from './CourseDetails'
import SelectDropDown from '../Select Dropdown'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js'
import { authBaseDomain, cmsBaseDomain, razorPayKey } from '../../../../Constants/appSettings'
import axios from 'axios'
import { validateEmail } from '../../../../helpers'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import countryList from 'react-select-country-list';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logoutUserAction } from '../../Views/Authentication/Auth.actions';
import EditStudent from './EditStudent';

const CourseDetails = lazy(() => import('./CourseDetails'));

import MessageModal from '../MessageModal'
import TermsCondition from '../TermsandCondition'
// import TermsAndConditionsModal from '../TermsandCondition/t&Cpopup'
import CustomModal from '../TermsandCondition/t&Cpopup'


const libraries = ['places'];
const mapKey = 'AIzaSyCArozsi_1fWJgSwDFDAoA_6Q5zLZ7NYyA';

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
  // {console.log(handleSubmit)}
  //const today = new Date().toISOString().split('T')[0]
  const [values, setValues] = useState([])
  const countries = Country.getAllCountries()
  const [selectDate, setSetselectDate] = useState(null)
  const [Params] = useSearchParams()
  const [fixDate, setFixDate] = useState([]);
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
  // console.log('phoneNumberFromRedux ', phoneNumberFromRedux);
  // console.log('countryFromRedux ', countryFromRedux);
  // console.log('stateFromRedux ', stateFromRedux);
  // console.log('cityFromRedux ', cityFromRedux);
  // console.log('genderFromRedux ', genderFromRedux);
  const [phoneValue, setPhoneValue] = useState(formData.phone);
  const [bold, setBold] = useState(0)
  const [open, setOpen] = useState(false);

  // const [empty, setEmpty] = useState(0)
  // const [isLoad, setIsLoad] = useState(false)
  const [disable, setDisable] = useState(false)

  const [isChecked, setIsChecked] = useState(true); // Checkbox is checked by default



  const [disData, setDisData] = useState('yes')
  const [isResidential, setIsResidential] = useState(false)
  const [isRegular, setIsRegular] = useState(false)
  const [autocomplete, setAutocomplete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const navigates = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();



  const [selectDateValue, setSelectDateValue] = useState(values.selectDate);
  const [setDate, setSetDate] = useState(false)
  const isSatsangPage = location.pathname === '/enrollment/satsang';

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

      // Set formData with 'No date Selected' only once when the path is /enrollment/satsang
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

  // const validatePhoneNumber = (phoneNumber) => {
  //   const errors = [];
  //   const parsedNumber = parsePhoneNumberFromString(phoneNumber);

  //   if (!parsedNumber) {
  //     errors.push('Invalid phone number format.');
  //     return errors;
  //   }

  //   // Format Validation
  //   const formatted = parsedNumber.formatInternational();
  //   const actualFormat = formatted.replace(/\s+/g, '');
  //   // console.log('format My : ',actualFormat);
  //   // console.log('phoneNumber My : ',phoneNumber);
  //   if (phoneNumber !== actualFormat) {
  //     errors.push(`Incorrect format. Should be ${formatted}`);
  //   }

  //   // Country Code Validation
  //   if (!parsedNumber.country) {
  //     errors.push('Invalid or missing country code.');
  //   }

  //   // Length Validation
  //   if (!isValidPhoneNumber(phoneNumber)) {
  //     errors.push('Phone number is not valid for the selected country.');
  //   }

  //   // National and International Numbering Validation
  //   if (!parsedNumber.isPossible()) {
  //     errors.push('Phone number is not possible.');
  //   }

  //   // Region-Specific Checks
  //   const areaCode = parsedNumber.nationalNumber.slice(0, 3); // Correctly access the national number
  //   // console.log('ac',areaCode);

  //   if (parsedNumber.country === 'US' && !['202', '212', '213'].includes(areaCode)) {
  //     errors.push('Invalid area code for the region.');
  //   }

  //   // Invalid Number Patterns
  //   if (/(\d)\1{6,}/.test(parsedNumber.nationalNumber)) {  // Use nationalNumber property directly
  //     errors.push('Phone number contains invalid patterns (e.g., too many repeated digits).');
  //   }

  //   return errors;
  // };

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  // const handlePhoneChange = (value) => {
  //   setPhoneValue(value);
  //   setFormData({ ...formData, phone: value });

  //   if (value) {
  //     const errors = validatePhoneNumber(value);

  //     // console.log('ph', value, '', errors);
  //     console.log('phone err', validationErrors);
  //     setValidationErrors(errors);
  //   } else {
  //     setValidationErrors([]);
  //   }


  // };




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
    const array = ["Yoga Classes for Men (Regular Asana) - On Campus",
      "Yoga Classes for Women (Regular Asana) - On Campus",
      "Yoga Asana Regular Classes - (Men & Women) - Online Yoga Classes",
      "Weekend Yoga Asana Classes - (Men & Women) - On Campus",
      "Weekend Yoga Asana Classes - (Men & Women) - Online",
      "Children's Yoga Classes (Regular) - On Campus",
      "Children's Weekend Yoga Class - On Campus",
      // "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      // "Regular Pregnancy Yoga Classes - Online & On Campus",
      // "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      // "Healing Yoga Movement & Rhythm - Online",
      //  "Yog Prayas - Online",
      // "Online Meditation Course  (Foundation Course)", 
      // "Regular Online Meditation Classes", 
      // "Couples’ Yoga Classes  - Online"
    ]
    const isMatch = array.includes(currentCourse?.title);
    setIsRegular(isMatch);
    localStorage.setItem('isRegular', isMatch)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow);
  }, [currentCourse])
  // useEffect(() => {

  //   // const array = ["Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
  //   //   "Asana Regular Classes for Women - On Campus", "Asana Regular Classes (Men & Women) - Online",
  //   //   "Weekend Asana Classes (Men & Women) - On Campus", "Weekend Asana Classes (Men & Women) - Online",
  //   //   "Children's Regular Classes - On Campus", "Children'&apos;'s Weekend Classes - On Campus",
  //   //   "Advanced Asana Regular Class - Online (Only for TYI Teachers)", "Yog Prayas - Online",
  //   //   "Online Meditation Course (Foundation Course)", "Regular Online Meditation Classes",
  //   //   "Healing Movement and Rhythm Classes", "Couples' Classes - Online",
  //   //   "IBY Class (Only for TYI TTC Teachers)", "Regular Pregnancy Yoga Class - Online & On Campus"
  //   // ];
  //   // const isMatch = array.includes(currentCourse?.title);
  //   // setIsRegular(isMatch)
  //   // console.log(currentCourse);

  //   // setSetselectDate(Params.get('date'))

  //   // window.scrollTo(0, 0)
  //   // console.log(pageDate?.key,'heoo')
  //   // {Params.get('date')===null? window.scrollTo(0, 0): document.getElementById('date-select').scrollIntoView()}
  // }, [isChecked])

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


  // const handleSubmit1 = async() => {
  //   if (
  //     formData.name === '' ||
  //     formData.name === undefined ||
  //     formData.name === null
  //   ) {
  //     setEmpty(1)
  //   } else if (
  //     formData.phone === '' ||
  //     formData.phone?.length < 6 ||
  //     formData.phone?.length > 15
  //   ) {
  //     setEmpty(3)
  //   } else if (!validateEmail(formData.email)) {
  //     setEmpty(2)
  //   } else if (formData.address1 === '') {
  //     setEmpty(4)
  //   } else if (formData.country === '' ) {
  //     setEmpty(5)
  //   } else if (formData.pincode === '') {
  //     setEmpty(8)
  //   }else if (formData.sdate === '') {
  //     setEmpty(18)
  //   }
  //   //  else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
  //   //   setEmpty(9)
  //   // } else if (formData.nationality === '') {
  //   //   setEmpty(10)
  //   // }
  //   else if (formData.gender === '') {
  //     setEmpty(11)
  //   } else if (formData.mode === '') {
  //     setEmpty('mode')
  //   }
  //   else if (
  //     formData.mode === 'OFFLINE' &&
  //     (currentCourse.residential === true ||
  //       currentCourse.nonResidential === true)
  //   ) {
  //     if (formData.residental === '') {
  //       setEmpty('subMode')
  //     } else {
  //       setBold(5)
  //     }
  //   } else if (
  //     currentCourse.certficate === true &&
  //     (courseAsset2 === '' || courseAsset2 === null)
  //   ) {
  //     setEmpty('certificate')
  //   } else {
  //     setBold(5)
  //   }


  //   // setIsLoad(true);
  //   if (disData.terms === 'no') {
  //     return setEmpty(1)
  //   }else {
  //     setEmpty(0)
  //     let body = {
  //       personalDetails: {
  //         name: formData.name,
  //         emailId: formData.email,
  //         phone: formData.phone,
  //         addressLane1: formData.address1,
  //         addressLane2: formData.address2,
  //         country: formData.country,
  //         state: formData.state,
  //         city: formData.city,
  //         pincode: formData.pincode,
  //         // gender: formData.gender,
  //         age: formData.AGE,
  //         nationality: formData.nationality,
  //       },
  //       academicQualification: qualificationData,
  //       workExperience: listData,
  //       others: {
  //         medicalHistory: formData.medicalstatus,
  //         howDoYouHearAboutUs: formData.source || formData.sourceinfo,
  //       },
  //       courseDetails: {
  //         courseId: currentCourse.key,
  //         courseName:currentCourse.title,
  //         mode: formData.mode,
  //         subMode:formData.residental,
  //         batch:currentCourse.batch,
  //         imageAsset: courseAsset1,
  //         certificateImgAsset: courseAsset2,
  //         // date:courseDate,
  //         date: formData.sdate,
  //         timing:currentCourse.timing
  //       },
  //     }
  //     let body1 = {
  //       personalDetails: {
  //         name: formData.name,
  //         emailId: formData.email,
  //         phone: formData.phone,
  //         addressLane1: formData.address1,
  //         addressLane2: formData.address2,
  //         country: formData.country,
  //         state: formData.state,
  //         city: formData.city,
  //         pincode: formData.pincode,
  //         // gender: formData.gender,
  //         age: formData.AGE,
  //         nationality: formData.nationality,
  //       },
  //       academicQualification: qualificationData,
  //       workExperience: listData,
  //       others: {
  //         medicalHistory: formData.medicalstatus,
  //         howDoYouHearAboutUs: formData.source || formData.sourceinfo,
  //       },
  //       courseDetails: {
  //         courseId: currentCourse.key,
  //         courseName:currentCourse.title,
  //         mode: formData.mode,
  //         batch:currentCourse.batch,
  //         imageAsset: courseAsset1,
  //         certificateImgAsset: courseAsset2,
  //         // date:courseDate,
  //         date: formData.sdate,
  //         timing:currentCourse.timing
  //       },
  //     }
  //     // if(currentCourse.key==='batch-1-200hr'){
  //     //   if(formData?.residental==='RESIDENTIAL'){
  //     //     setmail(templateKey)
  //     //   }else{
  //     //     setmail(templateKey)
  //     //   }
  //     // }
  //     console.log(mail)
  //     console.log('body ', body)
  //     console.log('body 1 ', body1)
  //     let mailTemplate = {
  //       type: 'INFO_TYI',
  //       HTMLTemplate: pickMail(),
  //       subject: 'Enrollment Confirmation',
  //       data:{
  //         name: formData.name
  //       },
  //       receivers: [formData.email,'info@theyogainstitute.org']
  //     }

  //     try{
  //       let response
  //       if(formData.mode==='ONLINE' || (currentCourse.residential===false && currentCourse.nonResidential===false)){
  //         response = await axios.post(
  //           `${ cmsBaseDomain }/forms`,
  //           body1
  //         )
  //       }else{
  //         response = await axios.post(
  //           `${ cmsBaseDomain }/forms`,
  //           body
  //         )
  //       }

  //       if(response?.data?.success){
  //         if(currentCourse.key!=='satsang' && currentCourse.key!=='samattvam' ){
  //           const paymentOrderResponse =  await axios.post(`${ cmsBaseDomain }/payment/order?enrollmentFormId=${response.data.data['_id']}`, {
  //             amount: courseFee,
  //             notes: currentCourse.metaDescription,
  //             objectType:'ENROLLMENT'
  //           })
  //           console.log('Hello From 1 step')
  //           if(!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id) return 0
  //           console.log('Hello From 2 step')
  //           console.log('amount : ',paymentOrderResponse.data.amount,)
  //           console.log('amount : ',paymentOrderResponse.data.id,)
  //           console.log('razorPayKey : ',razorPayKey)
  //           console.log('handler : ', );

  //           const options = {
  //             // key: 'rzp_test_hWMewRlYQKgJIk', 
  //             // Enter the Key ID generated from the Dashboard
  //             key: razorPayKey,
  //             amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //             currency: 'INR',
  //             name: 'The Yoga Institute',
  //             description: 'Course Transaction',
  //             // image: 'https://example.com/your_logo', // un comment and add TYI logo
  //             order_id: paymentOrderResponse.data.id, // eslint-disable-line
  //             handler: async(res) => {

  //               // setIsLoad(false);
  //               console.log('Hello From rzr', res)
  //               // Navigare to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
  //               if(res.razorpay_payment_id && res.razorpay_order_id && res.razorpay_signature) {
  //                 await axios.post(`${ authBaseDomain }/ali/mail`, mailTemplate)
  //                 navigate(`/enrollment_thankyou/${currentCourse.key}`)
  //               }
  //             },
  //             prefill: {
  //               name: formData.name,
  //               email: formData.email,
  //               contact: formData.phone
  //             },
  //             notes:{
  //               courseName: currentCourse.title,
  //               name: formData.name,
  //               email: formData.email,
  //               contact: formData.phone,
  //               // date: courseDate,
  //               date: formData.sdate,
  //               time : currentCourse.timing,
  //               mode : formData.mode,
  //             },
  //             theme: {
  //               color: '#3399cc' // enter theme color for our website
  //             },
  //             modal: {
  //               ondismiss: function () {
  //                 // The user closed the payment modal
  //                 setIsLoad(false);
  //                 console.log("Payment modal closed by user.");
  //                 // alert("Payment process was canceled.");
  //                 // Perform any necessary cleanup or UI updates
  //               },
  //             },




  //           }

  //           console.log('Befor razorpay', options)
  //           console.log('Befor razorpay', options.handler())
  //           const rzp = new window.Razorpay(options)

  //           rzp.open()  
  //           console.log('Can See !!!!!!!!')
  //         }else{
  //           await axios.post(`${ authBaseDomain }/ali/mail`, mailTemplate)

  //           if(currentCourse.key==='satsang'){
  //             navigate('/satsang_thankyou')
  //           }else if(currentCourse.key ==='samattvam'){
  //             navigate('/samattvam_thankyou')
  //           }else{

  //             navigate(`/enrollment_thankyou/${currentCourse.key}`)

  //           }
  //         }
  //       }
  //     } 
  //     catch(err){
  //       setIsLoad(false);
  //       console.error(err)
  //     } 
  //   }


  // }

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

      <div className="grid_box">
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
              formattedDates={formattedDates}
              courseFee={courseFee}
              setCourseFee={setCourseFee}
              uploadCheck={uploadCheck}
              setUploadCheck={setUploadCheck}
              handleResidential={handleResidential}
              dateDurationChange={dateDurationChange}
            />

          </form>

          {(formData.startDate && values?.endDateFormat) &&
            <div className='terms' style={{ fontSize: '2rem' }}>Start date: <b>{values.startDate}</b> <br />
              Valid till: <b>{values?.endDateFormat}</b></div>}

          <div className="bottom_container_btn">
            <div className='terms'>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  id='myCheckbox'
                />
                I agree and accept the

              </label>

              <a
                // href="https://theyogainstitute.org/terms-and-conditions"
                // target="_blank"
                onClick={handleOpen}
                className='terms_text'
                style={{ color: "rgba(0, 0, 0, 1)", marginLeft: "3px", cursor: "pointer" }}
                rel="noopener noreferrer">
                terms and conditions
              </a>

              {open && (
                // <MessageModal 
                //   message={<TermsCondition />} 
                //   closePopup={handleClose} 
                //   type="Terms and Conditions" // You can pass any other props as needed
                // />
                // <TermsAndConditionsModal />
                <CustomModal isShippingModalOpen={handleOpen} setIsShipppingModalOpen={handleClose} />
              )}

              {isChecked === false ? empty === 19 && (
                <div style={{ color: 'red', marginLeft: '0', marginTop: '1rem',fontSize:'1.2rem' }} className='mar_top'>
                  *Please agree to the condition!
                </div>
              ) : ''}
              {console.log(isChecked)}
            </div>
            <div className="button_box">
              {/* <button className="next_button" onClick={handleSubmit}>
            Proceed to payment
            </button> */}

              {<button type="button" onClick={handleSubmit} className={!isLoad ? 'next_button button register-primary-btn' : 'next_button button register-primary-btn no-event'} disabled={isLoad}>
                {setDate ? <><span id="txt">Register&nbsp; </span> </> : !isLoad ? <><span id="txt" style={{ fontSize: '14px', fontWeight: '500' }}>Pay & confirm enrollment </span> </> : <><span className="loader">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span></>}
              </button>}

              {/* {isResidential && <button type="button" onClick={handleSubmit} className={!isLoad ? 'next_button button register-primary-btn' : 'next_button button register-primary-btn no-event'} disabled={isLoad}>
              {!isLoad ? <><span id="txt">Submit&nbsp; </span> </> : <><span className="loader">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span></>}
            </button>} */}

            </div>
          </div>
        </div>
        <div className="left_grid">
          <div className="details_box details_personal_box">
            <div className="details_course_box ">
              <div className="detail_image_box">
                {/* <img src={currentCourse?.image} alt={currentCourse?.title} /> */}
              </div>
              <div className="current_duration">
                <div className='personal_info_wrapper'>
                  <span className='details_newName'>
                    Student details
                  </span>
                  {/* {courseDate !== 'null' ? courseDate : ''} */}
                  <div onClick={handleEditOpen}>
                    <img src='/images/edit_icon.svg' style={{ cursor: 'pointer' }} alt='' loading='lazy' />
                  </div>
                </div>
                {(editOpen || isEditStudentOpen) && (
                  // <MessageModal 
                  //   message={<TermsCondition />} 
                  //   closePopup={handleClose} 
                  //   type="Terms and Conditions" // You can pass any other props as needed
                  // />
                  // <TermsAndConditionsModal />
                  <EditStudent isShippingModalOpen={handleEditOpen} setIsShipppingModalOpen={handleEditClose} formData={formData} setFormData={setFormData} setEmpty={setEmpty} empty={empty} currentCourse={currentCourse} dateDurationChange={dateDurationChange} handleSubmit={handleSubmit}/>
                )}
                <div className='fields_alignment fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Name</span> <span className='tenure_course'>{`${formData?.name} ${formData?.lname}`}</span></div>

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
                  {formData?.address1}
                    {formData?.address1 && <>, </>}
                    {formData?.state}
                    {formData?.country && <>, </>}
                    {formData?.country}
                    {formData?.pincode && <> - </>}
                    {formData?.pincode}
                    {/* {`${formData?.address1}, ${formData?.state}, ${formData?.country} - ${formData?.pincode}`} */}
                    </span></div>

                </div>
                {/* {courseFee && <p className="current_fees"> {currentCourse.key === 'ma-yoga-shastra' && formData.country !== 'India' ? '$ 3950' : `₹ ${courseFee}`}</p>} */}
                {/* {courseFee && <p className="current_fees"> ₹ {courseFee}</p>} */}
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
                    // type="email"
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
                    // country="IN"
                    value={phoneValue}
                    // onChange={(e) => {
                    //   setFormData({ ...formData, phone: e })
                    // }}
                    onChange={handlePhoneChange}

                  />
                  {/* {empty === 3 && <small> Please enter a valid phone number</small>}  */}
                  {/* {phoneError && <small>{phoneError}</small>} */}

                  {/* {validationErrors?.length > 0 ? (
        // <ul>
        //   {validationErrors.map((error, index) => (
        //     <li key={index}><small class="phone_err">{error}</small></li>
        //   ))}
        // </ul>
        
        <div class="created_phone_err">Invalid Number</div>
        
      ) : ((empty === 3) ? <small class="phone_error"> Please enter a valid phone number</small> : " ") } */}

                  {validationErrors?.length > 0 ? (
                    <div className="created_phone_err">Invalid Number</div>
                  ) : (empty === 3 && (!formData.phone || (formData.phone === '')) ? (
                    <small className="phone_error">Please enter a valid phone number</small>
                  ) : " ")}
                  {console.log('ve', validationErrors)}

                </div>

                {/* Adding start google API */}


                {/* <LoadScript googleMapsApiKey={mapKey} libraries={libraries}>
      <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
        <div className="form_error">
          <InputComponent
            type="text"
            placeholder="Address Line 1*"
            form={formData}
            setField={setFormData}
            keyName="address1"
            errorCheck={setEmpty}
            inputProps={{
              style: {
                boxSizing: 'border-box',
                border: '1px solid transparent',
                width: '100%',
                height: '32px',
                padding: '0 12px',
                borderRadius: '3px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                fontSize: '14px',
                outline: 'none',
                textOverflow: 'ellipsis',
                marginBottom: '12px',
              },
            }}
          />
          {empty === 4 && <p>Please enter your address</p>}
        </div>
      </Autocomplete>

      <div className="form_error countries_list">
        <Select
          styles={customStyles}
          id="country"
          name="country"
          placeholder="Country"
          options={updatedCountries}
          value={values.country}
          onChange={(value) => {
            setValues({ country: value, state: null, city: null }, false);
            setFormData((prev) => ({ ...prev, country: value.label }));
            console.log('Selected Country from Dropdown:', value); // Log the selected country object
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
          options={updatedStates(values.country?.isoCode)}
          value={values.state}
          onChange={(value) => {
            setValues({ country: values.country, state: value, city: null }, false);
            setFormData((prev) => ({ ...prev, state: value.name }));
            console.log('Selected State:', value); // Log the selected state
          }}
        />
      </div>

      <div className="form_error">
        <Select
          styles={customStyles}
          id="city"
          name="city"
          placeholder="City"
          options={updatedCities(values?.country?.isoCode, values?.state?.isoCode)}
          value={values.city}
          onChange={(value) => {
            setValues({ country: values.country, state: values.state, city: value }, false);
            setFormData((prev) => ({ ...prev, city: value.name }));
            console.log('Selected City:', value); // Log the selected city
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
          inputProps={{
            value: formData.pincode,
            onChange: (e) => setFormData((prev) => ({ ...prev, pincode: e.target.value })),
          }}
        />
        {empty === 8 && <small> Please enter your pincode</small>}
      </div>
    </LoadScript> */}



                {/* End google API */}


                {/* Adding start google API 2 */}


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


                {/* End google API 2 */}

                {/* <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Address Line 1*"
                form={formData}
                setField={setFormData}
                keyName="address1"
                errorCheck={setEmpty}
              />
              {empty === 4 && <p> Please enter your address</p>}
            </div> */}
                {/* <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Address Line 2"
                form={formData}
                setField={setFormData}
                keyName="address2"
                errorCheck={setEmpty}
              />
            </div> */}
                {/* <div className="form_error countries_list">
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
            </div> */}
                {/* <div className="form_error">
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

            </div> */}
                {/* <div className="form_error">
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
              {empty === 7 && (
                <small >
                  {' '}
                  Please enter your city
                </small>
              )}
            </div> */}
                {/* <div className="form_error pincode_err">
              <InputComponent
                type="text"
                placeholder="Pincode*"
                form={formData}
                setField={setFormData}
                keyName="pincode"
                errorCheck={setEmpty}
              />
              {empty === 8 && <small> Please enter your pincode</small>}
            </div> */}

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
                    placeholderText="Select start date*" // Custom placeholder text
                    dateFormat="dd/MM/YYYY"
                    value={values.startDate}
                    form={formData}
                    setField={setFormData}
                    onChange={(value) => {
                      handleStartDate(value)
                    }}
                    onKeyDown={(e) => e.preventDefault()} //
                  // readOnly
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
                      // form={formData}
                      // setField={setFormData}
                      // keyName="endDate"
                      // // errorCheck={setEmpty}
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
                  // setBold={setBold}
                  empty={empty}
                  formData={formData}
                  setFormData={setFormData}
                // handleEmpty4={handleEmpty4}
                />

              </form>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default EnrollmentForm