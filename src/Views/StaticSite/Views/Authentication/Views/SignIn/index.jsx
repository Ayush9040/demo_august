import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  // Link,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction, loginUserSuccess } from '../../Auth.actions'
// import CommonBtn from '../../../../Components/commonbtn'
// import InputComponent from '../../../../Components/InputComponent'
// import { mail, lock } from '../../../../assets/icons/icon'
import './style.scss'
// import InnerNavComponent from '../../../../Components/InnerNavComponent'
// import { validateEmail } from '../../../../../../helpers'
// import MessageModal from '../../../../Components/MessageModal'
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input'
import { Country, State, City } from 'country-state-city'
import Select from 'react-select'
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js'
import { auth, googleAuthProvider } from './firebaseConfig'; // Adjust the path as needed
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios'
import { authBaseDomain, cmsBaseDomain } from '../../../../../../Constants/appSettings'
import { handleCTSignIn, handleAlreadySignedUpUser } from '../../../../../../CleverTap/buttonClicked'
import InputComponent from '../../../../Components/InputComponent'
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';


const libraries = ['places'];
const mapKey = 'AIzaSyCArozsi_1fWJgSwDFDAoA_6Q5zLZ7NYyA';

const SignIn = () => {
  // const [modal, setModal] = useState(false)
  // const [validate, setValidate] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, error } = useSelector((state) => state.auth)
  const [page, setPage] = useState()
  // const [errMsg, setErrMsg] = useState('')
  const [pageIndex, setPageIndex] = useState('1')
  const [signUpType, setSignUpType] = useState('')
  const [values, setValues] = useState([])
  const [autocomplete, setAutocomplete] = useState(null);
  const [getemail, setGetEmail] = useState('')
  const [hideVerify, setHideVerify] = useState(false);
  const [errorMessage, setErrorMessage] = useState()
  const [formData, setFormData] = useState({
    phoneNumber: '',
    dialCode: '91',
    otp: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    city: '',
    errorIndex: '0'
    // password: '',
  })
  // const location = useLocation()

  // useEffect(() => {
  //   setCourse(location?.pathname?.split('/')?.[3])
  // }, [location])
  const OtpInpRef = useRef();
  const [Params] = useSearchParams()
  const inputRefs = useRef([]);
  const [token, setToken] = useState()
  const [isBtnLoad, setIsBtnLoad] = useState(false)
  const [isoCode, setIsoCode] = useState('');
  const [empty, setEmpty] = useState(0)
  const [selectDate, setSetselectDate] = useState()
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [stateOpt, setStateOpt] = useState("")
  const [cityOpt, setCityOpt] = useState("")
  const phoneNumberFromRedux = useSelector((state) => state.auth.user.data?.phoneNumber);
  // const [token, setToken] = useState(null);
  const [isLocationCart, setIsLocationCart] = useState(false);

  // Function to get query parameters from URL
  const checkLocationInURL = () => {
    const queryParams = new URLSearchParams(window.location.search); // Get the query params from URL
    const locationParam = queryParams.get('location'); // Get the 'location' parameter
    const currentPath = window.location.pathname; // Get the current path

    // Check if current path is 'sign-in'
    const isSignInPath = currentPath.includes('sign-in');

    // If we are on the sign-in path
    if (isSignInPath) {
      // If locationParam is null or empty, set isLocationCart to true
      if (locationParam == 'cart' || !locationParam) {
        setIsLocationCart(true); // No location provided
      } else {
        // If location is provided, we set it to false
        setIsLocationCart(false); // Any value after 'location=' means not the default case
      }
    } else {
      setIsLocationCart(false); // Not on the sign-in path
    }
  };

  useEffect(() => {
    checkLocationInURL(); // Run this function when the component mounts
  }, []);

  const customStyles = (isInvalid) => ({
    control: (base, state) => ({
      ...base,
      background: 'transparent',
      borderRadius: '30px !important',
      padding: '0 !important', // Ensure no padding is applied
      // height: 1/0, // Adjust the height of the select input
      minHeight: '24px !important', // Ensure the minimum height is applied
      // width: 'fitContent',
      // padding: '0.25rem 0.25rem',
      // marginTop: '2rem',
      // marginLeft: '2rem',
      // Overwrittes the different states of border
      // borderColor: state.isFocused
      //   ? 'rgba(96, 96, 96, 0.5019607843)'
      //   : 'rgba(96, 96, 96, 0.5019607843)',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused
          ? 'rgba(96, 96, 96, 0.5019607843)'
          : 'rgba(96, 96, 96, 0.5019607843)',
      },
      borderColor: isInvalid ? 'red' : 'rgba(96, 96, 96, 0.5019607843)',

    }),
  })


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

      console.log(" country ", country?.isoCode ? country?.isoCode : isoCode);

      const countryComponent2 = place.address_components?.find((component) =>
        component.types.includes('country')
      );

      const countryISOCode = countryComponent2 ? countryComponent2.short_name : '';
      setStateOpt(countryISOCode);

      const stateIsoCode = stateComponent ? stateComponent.short_name : '';
      setCityOpt(stateIsoCode)


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

      console.log("form updation ", formData);
      console.log("VAlues updation ", values);
    }
  };

  // Function to generate state options based on selected country
  const getUpdatedStates = (countryIsoCode) => {
    console.log("countryIsoCode ", countryIsoCode)
    if (!countryIsoCode) return [];
    return State.getStatesOfCountry(countryIsoCode).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
  };

  const onLoadAutocomplete = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };


  // Function to generate city options based on selected state
  const getUpdatedCities = (countryIsoCode) => {
    if (!countryIsoCode) return [];
    return City.getCitiesOfCountry(countryIsoCode.value).map((city) => ({
      value: city.name,
      label: city.name,
    }));
  };

  const updatedStates = (countryId) => {
    console.log('countryId ', countryId)
    console.log("Printing all ", State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    })))
    return State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }))
  }

  // const defaultStates = (stateOp) => {
  //   return State.getStatesOfCountry(stateOp).map((state) => ({
  //     label: state.name,
  //     value: state.id,
  //     ...state,
  //   }))
  // }

  // const updatedStates2 = (countryId) => {
  //   console.log("state ", countryId)
  //   if (!countryId) return defaultStates(stateOpt); // Return default options if no countryId is provided

  //   const states = State.getStatesOfCountry(countryId);
  //   if (!Array.isArray(states)) return []; // Ensure the function returns an array

  //   return states.map((state) => ({
  //     label: state.name,
  //     value: state.id,
  //     ...state,
  //   }));
  // };

  const updatedCities = (countryIsoCode, stateIsoCode) => {
    console.log("countryIsoCode, stateIsoCode", countryIsoCode, stateIsoCode)
    if (!countryIsoCode || !stateIsoCode) return [];
    return City.getCitiesOfState(countryIsoCode, stateIsoCode).map((city) => ({
      value: city.name,
      label: city.name,
    }));
  }

  // After login get the user details and update redux
  const getUserDetails = async (token, ctEventValue) => {
    try {
      const response = await axios.get(`${authBaseDomain}/user/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (ctEventValue === 'alreadySignedUp') {
        handleAlreadySignedUpUser({
          phone: response?.data?.data?.phoneNumber
        })
      }
      localStorage.setItem('userAppId', response?.data.data?._id)//to pass
      // console.log("response?.data.data?._id :", response?.data?.data?.phoneNumber)
      // handleAlreadySignedUpUser({
      //   phone: response?.data?.data?.phoneNumber
      // })
      //update user details to Redux 
      dispatch(loginUserSuccess({ type: 'auth/LOGIN_USER_SUCCESS', data: response?.data?.data }))
    } catch (error) {
      // Log the full error object to understand what went wrong
      console.error('Error fetching user data:', error);
    }

  }

  // verify mobile OTP and navigates to login or Signup
  const verifyOTP = async (userDetails) => {
    // console.log(userDetails.otp);

    if (userDetails.otp.length == 4) {//valid OTP
      setFormData({ ...formData, errorIndex: 0 });
      try {
        let response = await axios.post(//send OTP for mobile
          `${authBaseDomain}/authdoor/mobile/verify-otp`,
          { contactNo: phoneNumber.mobile, otp: userDetails.otp, dialCode: phoneNumber.dialCode }
        )
        setToken(response?.data?.token)
        setIsBtnLoad(false)
        if (response?.data?.isSignupRequired) { setPageIndex(3); setSignUpType('mobile') }
        else {
          localStorage.setItem('authorizationToken', response?.data?.accessToken)
          localStorage.setItem('refreshToken', response?.data?.refreshToken)
          // To set a cookie
          // document.cookie = `authorizationToken=${response?.data?.accessToken}; path=/;`; // Expires in 1 hour

          dispatch(loginUserSuccess({}))
          // handleAlreadySignedUpUser({
          //   phone: userDetails?.phoneNumber
          // })
          getUserDetails(response?.data?.accessToken, 'alreadySignedUp')
          page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
        }
        setOtp(new Array(4).fill(""))//clear OTP
      }
      catch (err) {
        // alert('Invalid OTP')
        setFormData({ ...formData, errorIndex: 2 });
      }
    }
    else {
      setFormData({ ...formData, errorIndex: 2 });
    }
  }

  const SignupUsingEmail = async (userDetails) => {

    const number = parsePhoneNumber(userDetails.phoneNumber);
    const countryCode = number.country; // This will give you the country code

    let payload = { ...userDetails }
    payload['gender'] = userDetails?.gender.value;
    payload['country'] = userDetails?.country?.label;
    payload['city'] = userDetails?.city?.label;
    payload['phoneNumber'] = phoneNumber.mobile;
    payload['dialCode'] = phoneNumber.dialCode;
    payload['countryCode'] = countryCode

    console.log("User details from Email ", userDetails)

    // let response = await axios.post(//send OTP for mobile
    //   `${authBaseDomain}/authdoor/google/signup`,
    //   payload,
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   }
    // )
    // if (response) {
    //   // alert('Siggned in');
    //   localStorage.setItem('authorizationToken', response?.data?.accessToken)
    //   localStorage.setItem('refreshToken', response?.data?.refreshToken)
    //   dispatch(loginUserSuccess({}))
    //   getUserDetails(response?.data?.accessToken)
    //   callCTEvent(payload)

    //   // console.log('user details 2 ', userDetails);
    //   page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
    // }
  }

  // create user after the final step validation
  const verifySignupOTP = async (userDetails, type, token) => {

    console.log("User Details from verifySign ", userDetails, type, token, getemail)

    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let details = { ...formData }
    setFormData({ ...formData, firstName: getTrimmedName(details.firstName), lastName: getTrimmedName(details.lastName) });

    details['firstName'] = getTrimmedName(details['firstName'])
    details['lastName'] = getTrimmedName(details['lastName'])
    console.log(values);
    console.log(userDetails);

    if (!details.firstName || !nameRegex.test(details.firstName)) {
      // console.log("Deails First Name ", details.firstName);
      setFormData({ ...formData, errorIndex: 3 });
    }
    else if (!details.lastName || !nameRegex.test(details.lastName)) {
      // console.log("Deails lastName Name ", details.lastName);
      setFormData({ ...formData, errorIndex: 4 });
    }
    else if ((!userDetails?.address1)) {
      // console.log("Deails email Name ", details.email);
      setFormData({ ...details, errorIndex: 5 });
    }
    else if (!values?.country?.label) {
      // alert("Hello from country ")
      // console.log("values ", values.country?.label)
      // console.log("Deails country Name ", details.country?.value);
      // setFormData({ ...details, errorIndex: 6 });
      setFormData({ ...details, errorIndex: 5 });
    }
    else if (!values?.state?.label) {
      // console.log("values ", values.country?.label)
      // console.log("Deails country Name ", details.country?.value);
      // setFormData({ ...details, errorIndex: 7 });
      setFormData({ ...details, errorIndex: 5 });
    }
    else if (!values?.city?.label) {
      // console.log("Deails city Name ", values.city?.label);
      // setFormData({ ...details, errorIndex: 8 });
      setFormData({ ...details, errorIndex: 5 });
    }
    else if (!userDetails?.pincode) {
      // console.log("Deails city Name ", values.city?.label);
      // setFormData({ ...details, errorIndex: 9 });
      setFormData({ ...details, errorIndex: 5 });
    }
    else if (!details.gender?.value) {
      // console.log("Deails gender Name ", details.gender?.value);
      setFormData({ ...details, errorIndex: 10 });
    }
    else if ((!getemail || !emailRegex.test(getemail)) && signUpType == 'mobile') {
      // console.log("Deails email Name ", getemail);
      setFormData({ ...details, errorIndex: 12 });
    }
    else if ((validatePhoneNumber(details.phoneNumber).length > 0) && signUpType != 'mobile') {
      // console.log("Deails phoneNumber Name ", details.gender?.value);
      setFormData({ ...details, errorIndex: 11 });
      setIsToast(true)
    }
    else if (signUpType != 'mobile' && !isMobileVerified) {
      // setFormData({ ...details, errorIndex: 11 });
      setIsToast(true)
    }
    else {

      if (userDetails.otp.length == 4 && type != 'mobile') {//valid OTP
        // alert("From otp ")
        setIsBtnLoad(true)
        setFormData({ ...formData, errorIndex: 0 });
        const number = parsePhoneNumber(userDetails.phoneNumber);
        const countryCode = number?.country; // This will give you the country code

        try {

          let payload = { ...userDetails }
          delete payload.email;
          delete payload.address1;
          delete payload.address2;
          payload['gender'] = userDetails?.gender.value;
          payload['addressLine1'] = userDetails?.address1;
          payload['addressLine2'] = userDetails?.address2;
          payload['country'] = values?.country?.label;
          payload['city'] = values?.city?.label;
          payload['state'] = values?.state?.label;
          payload['email'] = getemail;
          payload['pincode'] = userDetails?.pincode;
          payload['phoneNumber'] = phoneNumber.mobile;
          payload['dialCode'] = phoneNumber.dialCode;
          payload['countryCode'] = countryCode

          if (type != 'mobile') {
            // alert("Called mobile ")
            let response = await axios.post(//send OTP for mobile
              `${authBaseDomain}/authdoor/google/signup`,
              payload,
              {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }
            )

            // const response = true;
            // console.log("Response ", userDetails);

            if (response) {
              // alert('Siggned in');
              localStorage.setItem('authorizationToken', response?.data?.accessToken)
              localStorage.setItem('refreshToken', response?.data?.refreshToken)
              // document.cookie = `authorizationToken=${response?.data?.accessToken}; path=/;`;
              dispatch(loginUserSuccess({}))

              getUserDetails(response?.data?.accessToken, 'notalreadySignedUp')
              callCTEvent(payload)
              page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
            }
            else {
              // alert('failed')
            }


          }

          else {//google user
            let response = await axios.post(//send OTP for mobile
              `${authBaseDomain}/authdoor/google/signup`,
              payload,
              {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }
            )
            if (response) {
              // alert('Siggned in');
              localStorage.setItem('authorizationToken', response?.data?.accessToken)
              localStorage.setItem('refreshToken', response?.data?.refreshToken)
              dispatch(loginUserSuccess({}))
              getUserDetails(response?.data?.accessToken, 'notalreadySignedUp')
              callCTEvent(payload)

              // console.log('user details 2 ', userDetails);
              page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
            }
            else {
              // alert('failed')
            }
          }
        }
        catch (err) {
          // alert('Invalid OTP')
          setFormData({ ...formData, errorIndex: 2 });
          if (err.data.error == 'Your session has expired. Please Sign Up again to continue.') {
            setPageIndex(1)
            setOtp(new Array(4).fill(""));
            setSignUpType('')
            setFormData({
              phoneNumber: '',
              dialCode: '91',
              otp: '',
              email: '',
              firstName: '',
              lastName: '',
              gender: '',
              country: '',
              city: '',
              errorIndex: '0'
            })
          }
          else {
            setErrorMessage(err.data.error)
          }
          setIsBtnLoad(false)
        }
      }
      else {
        setIsBtnLoad(true)
        console.log("User details from Email ", userDetails)
        if (isMobileVerified) {
          const number = parsePhoneNumber(userDetails.phoneNumber);
          const countryCode = number?.country;
          let payload = { ...userDetails }
          delete payload.otp;
          delete payload.address1;
          delete payload.address2;
          payload['gender'] = userDetails?.gender.value;
          payload['addressLine1'] = userDetails?.address1;
          payload['addressLine2'] = userDetails?.address2;
          payload['country'] = values?.country?.label;
          payload['city'] = values?.city?.label;
          payload['state'] = values?.state?.label;
          payload['pincode'] = userDetails?.pincode;
          payload['phoneNumber'] = phoneNumber.mobile;
          payload['dialCode'] = phoneNumber.dialCode;
          payload['countryCode'] = countryCode;



          let response = await axios.post(//send OTP for mobile
            `${authBaseDomain}/authdoor/email/verify-otp`,
            payload,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          )
          if (response) {
            // alert('Siggned in');
            localStorage.setItem('authorizationToken', response?.data?.accessToken)
            localStorage.setItem('refreshToken', response?.data?.refreshToken)
            dispatch(loginUserSuccess({}))
            getUserDetails(response?.data?.accessToken, 'notalreadySignedUp')
            callCTEvent(payload)

            // console.log('user details 2 ', userDetails);
            page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
          }

          setFormData({ ...formData, errorIndex: 2 });
          setIsBtnLoad(false)
        }
      }

    }
  }


  // Send OTP for mobile
  const sendOTP = async (userDetails) => {
    setOtp(new Array(4).fill(""))//reset OTP
    if (userDetails.phoneNumber) {//validate mobile number
      const errors = validatePhoneNumber(userDetails.phoneNumber);
      if (errors.length) {
        setFormData({ ...formData, errorIndex: 1 });
      }
      else {//mobile num is valid
        setFormData({ ...formData, errorIndex: 0 });
        await axios.post(//send OTP for mobile
          `${authBaseDomain}/authdoor/mobile/generate-otp`,
          { contactNo: phoneNumber.mobile, dialCode: phoneNumber.dialCode }
        )
        setPageIndex(2)
        startTimer()
        focusFirstInput()
      }
    } else {
      setFormData({ ...formData, errorIndex: 1 });
    }
  }
  const [phoneNumber, setPhoneNumber] = useState({ dialCode: '', mobile: '' })

  const handlePhoneChange = (value) => {
    // setPhoneValue(value);
    setFormData({ ...formData, phoneNumber: value });
    if (value) {
      const phoneNumber = parsePhoneNumber(value);
      // console.log(phoneNumber);
      setPhoneNumber({ dialCode: phoneNumber?.countryCallingCode, mobile: phoneNumber?.nationalNumber })

    }
  };
  const [isAlreadyRegistered, SetIsAlreadyRegistered] = useState(false)
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

  const clevertap = window.clevertap;

  useEffect(() => {
    localStorage.removeItem('userAppId')
    setSetselectDate(Params.get('date'))
    setPage(Params.get('location'))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [isLoggedIn])


  // const handleContinueAsGuest = () => {
  //   if (!page) return navigate('/')
  //   if (page !== 'cart') navigate(`/enrollment/${page}/?date=${selectDate}`)
  //   setErrMsg('Please login to continue purchase!')
  //   setModal(true)
  // }

  const [seconds, setSeconds] = useState(59);
  const [isToast, setIsToast] = useState(false);
  let intervalId = useRef(null); // variable fro timer
  let timer = 59; // variable to handle seconds not updated in dom

  const startTimer = () => {
    setSeconds(59)
    clearInterval(intervalId.current);
    timer = 59;// resets timer
    intervalId.current = setInterval(() => {
      timer = timer - 1; //using state its not possible to get current time so using a new variable
      setSeconds(timer)
      if (timer === 0) {
        clearInterval(intervalId.current);
      }
    }, 1000)
  }

  const [secondsF, setSecondsF] = useState(59);
  let intervalIdF = useRef(null); // variable fro timer
  let timerF = 59; // variable to handle seconds not updated in dom

  const startTimerF = () => {
    timerF = 59;// resets timer
    setSecondsF(timerF)
    clearInterval(intervalIdF.current);
    intervalIdF.current = setInterval(() => {
      timerF = timerF - 1; //using state its not possible to get current time so using a new variable
      setSecondsF(timerF)
      if (timerF === 0) {
        clearInterval(intervalIdF.current);
      }
    }, 1000)
  }

  // Used to resend OTP in the final step
  const sendSignupOTP = async (details, type) => {
    setOtp(new Array(4).fill(""))
    if (type == 'mobile') {//send OTP for mobile
      await axios.post(//send OTP for mobile
        `${authBaseDomain}/authdoor/email/generate-otp`,
        { email: details?.email }
      )
      startTimerF()
      setPageIndex('4')
    }
    else {//resend OTP for mobile
      await axios.post(//send OTP for mobile
        `${authBaseDomain}/authdoor/mobile/generate-otp`,
        { contactNo: phoneNumber.mobile, dialCode: phoneNumber.dialCode }
      )
      startTimerF()
      setPageIndex('4')
    }
  }
  const getTrimmedName = (name) => {
    let result = name.trim().replace(/\s+/g, ' ')
    return result;
  }
  // validates the form and trigger OTP for the final step
  const signUpOTP = async (det, type) => {
    // type = 'mobile';

    console.log(" det from Sign up otp ", det, type)

    // console.log(" details from Sign up otp ", details, type)
    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //split empty space
    let details = { ...formData }
    setFormData({ ...formData, firstName: getTrimmedName(details.firstName), lastName: getTrimmedName(details.lastName) });

    details['firstName'] = getTrimmedName(details['firstName'])
    details['lastName'] = getTrimmedName(details['lastName'])

    if (!details.firstName || !nameRegex.test(details.firstName)) {
      console.log("Deails First Name ", details.firstName);
      setFormData({ ...formData, errorIndex: 3 });
    }
    else if (!details.lastName || !nameRegex.test(details.lastName)) {
      console.log("Deails lastName Name ", details.lastName);
      setFormData({ ...formData, errorIndex: 4 });
    }
    else if ((!details?.address1)) {
      console.log("Deails email Name ", details.email);
      setFormData({ ...details, errorIndex: 5 });
    }
    else if (!values?.country?.label) {
      // alert("Hello from country ")
      console.log("values ", values.country?.label)
      console.log("Deails country Name ", details.country?.value);
      setFormData({ ...details, errorIndex: 6 });
    }
    else if (!values?.state?.label) {
      console.log("values ", values.country?.label)
      console.log("Deails country Name ", details.country?.value);
      setFormData({ ...details, errorIndex: 7 });
    }
    else if (!values?.city?.label) {
      console.log("Deails city Name ", values.city?.label);
      setFormData({ ...details, errorIndex: 8 });
    }
    else if (!details?.pincode) {
      console.log("Deails city Name ", values.city?.label);
      setFormData({ ...details, errorIndex: 9 });
    }
    else if (!details.gender?.value) {
      console.log("Deails gender Name ", details.gender?.value);
      setFormData({ ...details, errorIndex: 10 });
    }
    else if ((!getemail || !emailRegex.test(getemail)) && signUpType == 'mobile') {
      console.log("Deails email Name ", getemail);
      setFormData({ ...details, errorIndex: 12 });
    }
    else if ((validatePhoneNumber(details.phoneNumber).length > 0) && signUpType != 'mobile') {
      console.log("Deails phoneNumber Name ", details.gender?.value);
      setFormData({ ...details, errorIndex: 11 });
      setIsToast(true)
    }
    else {//form is valid 
      setFormData({ ...formData, errorIndex: 0 });
      setHideVerify(true);

      // alert("573 ")

      //trigger EMAIL OTP 
      if (type == 'mobile') {
        //send OTP for mobile
        console.log("Mobile called otp from signup otp 1")
        try {
          await axios.post(//send OTP for mobile
            `${authBaseDomain}/authdoor/email/generate-otp`,
            { email: details?.email },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          )

          console.log("Mobile called otp from signup otp 2")
          startTimerF()
          SetIsAlreadyRegistered(false)
          setPageIndex('4')
          focusFirstInput()
        }
        catch (err) {
          SetIsAlreadyRegistered(true)
          setHideVerify(false);
          // alert('Unexpected error, please try again')
        }
      }
      else {//gmail signup
        // alert("Hello")
        try {
          // alert("Called from here")
          await axios.post(//send OTP for mobile
            `${authBaseDomain}/authdoor/mobile/otp/generate`,
            { contactNo: phoneNumber.mobile, dialCode: phoneNumber.dialCode },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          )
          // alert("again now")
          SetIsAlreadyRegistered(false)
          startTimerF()
          setPageIndex('4')
          focusFirstInput()
        }
        catch (err) {
          SetIsAlreadyRegistered(true)
          setHideVerify(false)
          // alert('Unexpected error, please try again')
        }
      }
      setTimeout(() => {
        if (OtpInpRef.current) {
          OtpInpRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);

    }

    // alert(formData.errorIndex)
  }

  const callCTEvent = (userDetails) => {
    console.log('callCTEvent function called ', userDetails)
    handleCTSignIn({
      firstName: userDetails?.firstName,
      email: userDetails?.email,
      IsLoggedIn: 'Yes',
      phone: userDetails.phoneNumber,
      city: userDetails?.city,
      country: userDetails?.country,
      gender: userDetails?.gender,
      dialCode: userDetails?.dialCode
    })
  }


  const openLink = (url) => {
    window.open(url, '_blank')
  }

  const handleOTPChange = (element, index) => {
    setIsMobileVerified(false)
    if (isNaN(element.value)) return; // Ensure only numbers are entered
    let otpArry = [...otp]
    otpArry[index] = element.value
    setOtp(otpArry);

    // Move focus to the next input
    if (element.value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    // console.log(inputRefs.current);

    setFormData({ ...formData, otp: otpArry.join('') })

    // auto submit data
    let payload = formData
    payload['otp'] = otpArry.join('')

    if (otpArry.join('').length == 4) {//auto submit form
      if (pageIndex == '2') {//for login
        verifyOTP(payload)
      }
      else {//for signup
        validateSignupOTP(payload, signUpType, token)
        // verifySignupOTP(payload, signUpType, token)
      }
    }
  };
  const [isMobileVerified, setIsMobileVerified] = useState(false)
  const validateSignupOTP = async (payload, signUpType, token) => {
    let request = { phoneNumber: phoneNumber.mobile, otp: payload.otp, dialCode: phoneNumber.dialCode, email: payload.email }
    try {
      let { data } = await axios.post(
        `${authBaseDomain}/authdoor/google/mobile-verify`,
        request,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      setIsMobileVerified(true)
    }
    catch (err) {
      setFormData({ ...formData, errorIndex: 2 });
      setErrorMessage(err.data.error)
      setIsMobileVerified(false)
    }

  }

  // Handle backspace and move focus to previous input
  const handleBackspace = (element, index) => {
    if (element.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const countries = Country.getAllCountries()

  const getUpdatedCountries = useMemo(() => {
    return Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
  }, []);

  // const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  // const handleSignIn = async () => {
  //   if (!validateEmail(formData.email)) {
  //     return setValidate(1)
  //   } else if (formData.password === '') {
  //     return setValidate(2)
  //   } else {
  //     await dispatch(
  //       loginUserAction(
  //         {
  //           email: formData.email,
  //           password: formData.password,
  //         },
  //         navigate,
  //         page ? page !== 'cart' ? `/enrollment/${page}/?date=${selectDate}` : '/shop/checkout' : '/',
  //       )
  //     )
  //     if (error.isError !== false) { setModal(true); setErrMsg(error.isError) } else { setModal(false) }
  //   }
  // }


  // to handle sigup/signin from Google
  const googleSignup = async () => {
    // console.log("Function called ")
    // alert("Me ")
    // try {

    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;
    // alert("Me ")
    // console.log("User from Google Sign up ", user)
    setFormData({ ...formData, email: user.email, phoneNumber: '' })
    setGetEmail(user.email);
    // alert(formData.phoneNumber)
    console.log("FormData ", formData)
    // Get the OAuth ID token from the credential
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log("Credentials ", credential)
    if (credential) {
      // alert("Fine")
      const idToken = credential.idToken; // OAuth ID token
      let response = await axios.post(//send OTP for mobile
        `${authBaseDomain}/authdoor/google/login`,
        { tokenId: idToken, emailId: user.email }
      )
      setFormData({ ...formData, email: user.email, phoneNumber: '' })
      console.log("Response ", response);
      if (response?.data?.isSignupRequired) {//gmail signup
        setPageIndex('3')
        setIsBtnLoad(false)
        setSignUpType('email')
        setToken(response?.data?.token)
        if (user?.displayName) {
          const parts = user?.displayName.split(" ");
          const lastWord = parts.length > 1 ? parts.pop() : ""; // Get the last word or set it to empty
          const remainingString = parts.join(" ") || user?.displayName; // Join the remaining parts or keep the original name
          setFormData({ ...formData, firstName: remainingString, lastName: lastWord, email: user.email, phoneNumber: '' })
        }
        else {
          setFormData({ ...formData, email: user.email, phoneNumber: '' })
        }
      }
      else {//existing user
        // alert('Siggned in');
        localStorage.setItem('authorizationToken', response?.data?.accessToken)
        localStorage.setItem('refreshToken', response?.data?.refreshToken)
        dispatch(loginUserSuccess({}))
        getUserDetails(response?.data?.accessToken, 'alreadySignedUp')
        console.log(response?.data)

        page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
      }
    } else {
      console.error('No credential found');
    }


    // Handle successful sign-in (e.g., update state, redirect user)
    // } catch (error) {
    // console.error('Sign In Error:', error.message);
    // Handle sign-in errors (e.g., show error message to user)
    // }
  }


  const navigateBack = () => {

    const isLoggedIn = !!localStorage.getItem('authorizationToken');

    if (pageIndex > 1) {
      if (pageIndex == '3' || pageIndex == '4') {
        if (signUpType == 'mobile') {
          setPageIndex('2')
        }
        else {
          setPageIndex('1')
        }
      }
      else {
        setPageIndex(pageIndex - 1)
      }
    }
    else {
      if (!isLoggedIn) {
        // If not logged in, navigate to the course page (you can specify the correct course page URL here)
        const lastPageUrl = sessionStorage.getItem('last_page_url') || 'Direct Visit';
        console.log("lastPageUrl ", lastPageUrl)

        const url2 = "/user/sign-in/?location=cart";

        if (lastPageUrl && lastPageUrl.includes(url2)) {
          sessionStorage.removeItem('last_page_url_2');
          navigate(`/shop`); // Redirect to the course page if previous page was a course

        } else {
          navigate(`/courses`);
        }
        // navigate(`/courses`); // Replace with the actual course page URL
      } else {
        // If logged in, navigate to the intended page
        page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/');
      }
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      // Handle sign-out (e.g., update state, redirect user)
    } catch (error) {
      console.error('Sign Out Error:', error.message);
      // Handle sign-out errors
    }
  };

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }

  const focusFirstInput = () => {
    setTimeout(() => {//auto focus the OTP
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 200)

  };

  const handlePaste = (e, index) => {
    const pastedData = e.clipboardData.getData('text');
    if (pastedData.length == 4 && !isNaN(Number(pastedData))) {
      setOtp(pastedData.split(''));
      setFormData({ ...formData, otp: pastedData })
      // auto submit data
      let payload = formData
      payload['otp'] = pastedData
      if (pageIndex == '2') {//for login
        verifyOTP(payload)
      }
      else {//for signup
        verifySignupOTP(payload, signUpType, token)
      }
      setTimeout(() => { inputRefs.current[3].focus(); }, 200)

    }

    e.preventDefault(); // Prevent the default paste behavior
  };


  return (
    <div className="signin-form">
      <div className='signin-container'>
        <div className="signin-logo">
          <img src="/images/main-logo-signup.svg" alt="primary-logo" loading="lazy" />
        </div>
        {(pageIndex == '3' && isToast) &&
          // formData?.errorIndex == 11 &&
          <div className='error-alert'>
            <div>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="#DC3545" fill-opacity="0.1" />
                <g clip-path="url(#clip0_4487_19089)">
                  <path d="M22 10C15.3676 10 10 15.367 10 22C10 28.6325 15.367 34 22 34C28.6324 34 34 28.633 34 22C34 15.3675 28.633 10 22 10ZM22 32.125C16.4039 32.125 11.875 27.5965 11.875 22C11.875 16.4038 16.4035 11.875 22 11.875C27.5961 11.875 32.125 16.4035 32.125 22C32.125 27.5962 27.5965 32.125 22 32.125Z" fill="#DC3545" />
                  <path d="M26.1057 24.7801L23.3259 22.0003L26.1057 19.2205C26.4718 18.8544 26.4718 18.2609 26.1057 17.8947C25.7395 17.5286 25.146 17.5286 24.7799 17.8947L22.0001 20.6745L19.2203 17.8947C18.8542 17.5286 18.2605 17.5286 17.8945 17.8947C17.5284 18.2609 17.5284 18.8544 17.8945 19.2205L20.6743 22.0003L17.8945 24.7801C17.5284 25.1462 17.5283 25.7398 17.8945 26.1059C18.2607 26.4721 18.8543 26.472 19.2203 26.1059L22.0001 23.3261L24.7799 26.1059C25.1459 26.472 25.7396 26.4721 26.1057 26.1059C26.4719 25.7398 26.4718 25.1462 26.1057 24.7801Z" fill="#DC3545" />
                </g>
                <defs>
                  <clipPath id="clip0_4487_19089">
                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '18px', color: '#DC3545', fontWeight: '800' }}>Verify the Mobile number</span><br />
              <span style={{ color: '#7A7A7C', fontSize: '12px', fontWeight: '400' }}>verify the number to proceed further</span>
            </div>
            <div onClick={() => { setIsToast(false) }} style={{ cursor: 'pointer', marginTop: '8px' }}>
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8334 1.84199L10.6584 0.666992L6.00008 5.32533L1.34175 0.666992L0.166748 1.84199L4.82508 6.50033L0.166748 11.1587L1.34175 12.3337L6.00008 7.67533L10.6584 12.3337L11.8334 11.1587L7.17508 6.50033L11.8334 1.84199Z" fill="#C0C1C2" />
              </svg>
            </div>
          </div>}

        <div className={pageIndex <= 2 ? 'signin-details' : 'signin-details f-height'}>

          <div className="container">
            {pageIndex <= 2 && <div className='back-nav' onClick={() => navigateBack()}>
              <span className="web">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#181818" />
                </svg></span>

              <span className="mobile">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.521 7.8335L8.18766 12.5002L7.00016 13.6668L0.333496 7.00016L7.00016 0.333496L8.18766 1.50016L3.521 6.16683H13.6668V7.8335H3.521Z" fill="white" />
                </svg>

              </span>
              &nbsp;Back
            </div>}

            {/* login page with mobile number */}
            {pageIndex == '1' && <>
              <div className='header'>Log In Or Sign up to TYI Account</div>
              <div className='sub-header'>Welcome to The Yoga Institute </div>
              <div className='google-badge' onClick={() => googleSignup()}>
                <svg width="16px" height="16px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8 10.2083C18.8 9.55834 18.7417 8.93334 18.6333 8.33334H10V11.8792H14.9333C14.7208 13.025 14.075 13.9958 13.1042 14.6458V16.9458H16.0667C17.8 15.35 18.8 13 18.8 10.2083Z" fill="#4285F4" />
                  <path d="M10 19.1667C12.475 19.1667 14.55 18.3458 16.0667 16.9458L13.1042 14.6458C12.2833 15.1958 11.2333 15.5208 10 15.5208C7.61252 15.5208 5.59168 13.9083 4.87085 11.7417H1.80835V14.1167C3.31668 17.1125 6.41668 19.1667 10 19.1667Z" fill="#34A853" />
                  <path d="M4.87075 11.7417C4.68742 11.1917 4.58325 10.6042 4.58325 10C4.58325 9.39583 4.68742 8.80833 4.87075 8.25833V5.88333H1.80825C1.16659 7.16071 0.832686 8.57051 0.833253 10C0.833253 11.4792 1.18742 12.8792 1.80825 14.1167L4.87075 11.7417Z" fill="#FBBC05" />
                  <path d="M10 4.47918C11.3458 4.47918 12.5542 4.94168 13.5042 5.85001L16.1334 3.22084C14.5459 1.74168 12.4708 0.833344 10 0.833344C6.41668 0.833344 3.31668 2.88751 1.80835 5.88334L4.87085 8.25834C5.59168 6.09168 7.61252 4.47918 10 4.47918Z" fill="#EA4335" />
                </svg>
                &nbsp;Continue with Google</div>
              <div class="divider-container">
                <span>Or</span>
              </div>
              <div className='inp-label'>Mobile Number <span>*</span></div>
              <div className={formData?.errorIndex == 1 ? "form-inp err-inp" : "form-inp"}>
                {/*  err-inp */}
                <PhoneInput
                  value={formData.phoneNumber}
                  placeholder="Enter your Mobile number"
                  defaultCountry="IN"
                  className="custom-phone-input"
                  onChange={handlePhoneChange}
                />
              </div>
              {formData?.errorIndex == 1 &&
                <div style={{ color: '#FF3B30' }}>Enter a valid Mobile number</div>}
              <div className="ftr-btn">
                <button type='click' className='primary-btn' onClick={() => { sendOTP(formData), setOtp(new Array(4).fill("")) }}>Continue</button>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className='tc-text'>By Clicking “Continue with google  / mobile” you agree to
                    our <span onClick={() => openLink('https://theyogainstitute.org/terms-and-conditions')}>Terms & Conditions</span> and <span onClick={() => openLink('https://theyogainstitute.org/privacy-policy')}>Privacy Policy</span></div>
                </div></div>
            </>}

            {/* Login page with OTP */}
            {pageIndex == '2' && <>
              <div className='sub-header wish' style={{ fontWeight: '700', padding: '12px 0 4px 0' }}>Namaste  🙏 Please verify your mobile number </div>
              {/* <div className='sub-header' style={{ fontWeight: '400', fontSize: '16px'}}>Enter the OTP</div> */}
              <div className="otp-inputs">
                {otp.map((data, index) => {
                  return (
                    <input
                      key={index}
                      value={data}
                      type="text"
                      maxLength="1"
                      className={formData?.errorIndex == 2 ? "otp-input otp-err" : "otp-input"}
                      // value={data}
                      onChange={(e) => handleOTPChange(e.target, index)}
                      onKeyDown={(e) =>
                        e.key === "Backspace" ? handleBackspace(e.target, index) : null
                      }
                      onPaste={(e) => handlePaste(e, index)} // Handle paste
                      ref={(el) => (inputRefs.current[index] = el)}
                      inputMode="numeric" // Add this line
                      pattern="[0-9]*" // Optionally, add this for better compatibility
                    />
                  );
                })}
              </div>
              <div className='sub-header' style={{ fontWeight: '400', fontSize: '16px', marginTop: '12px' }}>Enter OTP sent to {formData.phoneNumber}
                <span style={{ color: '#CA4625', fontSize: '12px', fontWeight: 600, cursor: 'pointer', borderBottom: '2px solid #CA4625', marginLeft: '1rem' }} onClick={() => {
                  setPageIndex('1');
                }}>
                  <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.249512 6.18805V7.75055H1.81201L6.42035 3.14222L4.85785 1.57972L0.249512 6.18805ZM7.62868 1.93389C7.79118 1.77139 7.79118 1.50889 7.62868 1.34639L6.65368 0.371387C6.49118 0.208887 6.22868 0.208887 6.06618 0.371387L5.30368 1.13389L6.86618 2.69639L7.62868 1.93389Z" fill="#CA4625" />
                  </svg>
                  Change mobile number
                </span>
              </div>
              {formData?.errorIndex == 2 &&
                <div style={{ color: '#FF3B30', margin: '1rem 0' }}>OTP is Invalid!</div>}
              <div className="ftr-btn">
                <button type='click' className='primary-btn' onClick={() => verifyOTP(formData)}>Verify & Continue</button>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className='tc-text'>
                    {seconds != '0' && <>We regret if you haven&apos;t received the OTP, <br />
                      resend OTP in<span style={{ fontWeight: 'bold', textDecoration: 'none', cursor: 'none' }}> 00:{seconds} </span></>}
                    {/* {seconds != '0' && <>You can request another in {seconds} {seconds > 9 ? 'seconds' : 'second'}</>} */}
                    {seconds == '0' && <div onClick={() => sendOTP(formData)} className="resend-btn">Resend</div>}</div>
                </div>
              </div>
            </>}

            {/* Signup page */}
            {(pageIndex == '3' || pageIndex == '4') && <>
              <div className='header header-3'>Namaste 🙏 Please Fill Your Details</div>
              <div className='sub-header sub-header-3 wish-text'>Become a Part of The Yoga Institute Family & Sign-up for <br />you’re preferred course</div>
              <div className='sub-header sub-header-3 wish-text-mob'>Join The Yoga Institute Family </div>

              <div className='inp-group'>


                <div className='width-100'>

                  <div className='inp-label mg-t-20'>First Name <span>*</span></div>
                  <div className={formData?.errorIndex == 3 ? "form-inp err-inp" : "form-inp"}>
                    <input
                      disabled={pageIndex == '4' ? true : false}
                      value={formData.firstName}
                      onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }) }}
                      type="text"
                      placeholder="Enter your first name"
                      className="custom-input"
                    />
                  </div>
                  {formData?.errorIndex == 3 &&
                    <div style={{ color: '#FF3B30' }}>Enter a valid First name</div>}

                </div>


                <div className='width-100'>
                  <div className='inp-label  mg-t-20'>Last Name <span>*</span></div>
                  <div className={formData?.errorIndex == 4 ? "form-inp err-inp" : "form-inp"}>
                    <input
                      disabled={pageIndex == '4' ? true : false}
                      type="text"
                      placeholder="Enter your Last name"
                      value={formData.lastName}
                      onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }}
                      className="custom-input"
                    />
                  </div>
                  {formData?.errorIndex == 4 &&
                    <div style={{ color: '#FF3B30' }}>Enter a valid Last name</div>}
                </div>

              </div>


              {/* Adding New Fields */}

              <LoadScript googleMapsApiKey={mapKey} libraries={libraries}>
                <div className='inp-group'>
                  <div className='width-100'>
                    <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>

                      <div className="form_error1">
                        <div className='inp-label mg-t-20'>Address <span>*</span></div>
                        <div className={formData?.errorIndex == 5 ? "form-inp err-inp custom_style_input_add" : "form-inp custom_style_input_add"}>
                          <InputComponent
                            type="text"
                            placeholder="Enter address line 1"
                            form={formData}
                            setField={setFormData}
                            keyName="address1"
                            errorCheck={setEmpty}
                            className="custom-input"

                          />
                        </div>
                        {formData?.errorIndex == 5 &&
                          <div style={{ color: '#FF3B30' }}>Select a valid address </div>}
                      </div>
                    </Autocomplete>
                  </div>

                  {/* <div className='width-100'>

                    <div className="form_error">
                      <div className='inp-label mg-t-20'>Address 2 <span>*</span></div>
                      <div className="form-inp custom_style_input_add">
                        <InputComponent
                          type="text"
                          placeholder="Enter address line 2"
                          form={formData}
                          setField={setFormData}
                          keyName="address2"
                          errorCheck={setEmpty}
                        />
                      </div>
                    </div>

                  </div> */}

                </div>

                <div className='inp-group'>
                  <div className='width-100'>

                    <div className="form_error">
                      <div className='inp-label mg-t-20'>House No. / Street name <span>*</span></div>
                      <div className="form-inp custom_style_input_add">
                        <InputComponent
                          type="text"
                          placeholder="Enter address line 2"
                          form={formData}
                          setField={setFormData}
                          keyName="address2"
                          errorCheck={setEmpty}
                        />
                      </div>
                    </div>

                  </div>
                  {/* <div className="form_error countries_list width-100" >
                    <div className='inp-label mg-t-20'>Country <span>*</span></div>

                    <Select
                      styles={customStyles(formData?.errorIndex == 6 ? true : false)}
                      // isDisabled={pageIndex == '4' ? true : false}
                      // menuPlacement="top"
                      id="country"
                      name="country"
                      placeholder="Country"
                      options={updatedCountries}
                      value={values.country}
                      onChange={(value) => {
                        setValues({ country: value, state: null, city: null }, false);
                        setFormData((prev) => ({ ...prev, country: value.label }));
                        setFormData({ ...formData, country: value });
                      }}


                    />
                    {formData?.errorIndex == 6 &&
                      <div style={{ color: '#FF3B30' }}>Enter Country</div>}
                  </div> */}


                  {/* <div className="form_error width-100">
                    <div className='inp-label mg-t-20'>State <span>*</span></div>
                    <Select
                      styles={customStyles(formData?.errorIndex == 7 ? true : false)}
                      id="state"
                      name="state"
                      placeholder="State"
                      className='custom-input'
                      options={updatedStates(values?.country?.isoCode || stateOpt)}
                      value={values.state}
                      onChange={(value) => {
                        setValues(
                          { country: values.country, state: value, city: null },
                          false
                        )
                        setFormData((prev) => ({ ...prev, state: value.label }));
                      }}
                    />

                    {formData?.errorIndex == 7 &&
                      <div style={{ color: '#FF3B30' }}>Enter State</div>}

                  </div> */}
                  <div className='form_error width-100'>
                    <div className='inp-label mg-t-20'>Gender <span>*</span></div>
                    <Select
                      isDisabled={pageIndex == '4' ? true : false}
                      menuPlacement="top"
                      styles={customStyles(formData?.errorIndex == 10 ? true : false)}
                      id="country"
                      name="Gender"
                      placeholder="Gender"
                      options={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                        { value: 'Others', label: 'Others' },
                      ]}
                      value={formData.gender}
                      onChange={(value) => { setFormData({ ...formData, gender: value }) }}
                    />
                    {formData?.errorIndex == 10 &&
                      <div style={{ color: '#FF3B30' }}>Select gender</div>}
                  </div>
                </div>
                {/* <div className='inp-group'>

                  <div className="form_error city_style">
                    <div className='inp-label mg-t-20'>City <span>*</span></div>
                    <Select
                      styles={customStyles(formData?.errorIndex == 8 ? true : false)}
                      id="city"
                      name="city"
                      placeholder="City"
                      options={updatedCities(
                        values?.country?.isoCode ? values?.country?.isoCode : stateOpt, // Pass country ISO
                        values?.state?.isoCode || cityOpt // Pass state ISO
                      )}
                      value={values.city}
                      onChange={(value) => {
                        setValues(
                          { country: values.country, state: values.state, city: value },
                          false
                        )
                        setFormData((prev) => ({ ...prev, city: value.label }));
                      }}
                    />

                    {formData?.errorIndex == 8 &&
                      <div style={{ color: '#FF3B30' }}>Enter City</div>}

                  </div>

                  <div className="form_error pincode_err pincode_style">
                    <div className='inp-label mg-t-20'>Pincode <span>*</span></div>
                    <div className={formData?.errorIndex == 9 ? "form-inp err-inp custom_style_input_pincode" : "form-inp custom_style_input_pincode"}>
                      <InputComponent
                        type="text"
                        placeholder="Pin code*"
                        form={formData}
                        setField={setFormData}
                        keyName="pincode"
                        errorCheck={setEmpty}
                      />

                    </div>
                    {formData?.errorIndex == 9 &&
                      <div style={{ color: '#FF3B30' }}>Enter Pincode</div>}
                  </div>

                  <div className='gender_desk'>
                    <div className='inp-label mg-t-20'>Gender <span>*</span></div>
                    <Select
                      isDisabled={pageIndex == '4' ? true : false}
                      menuPlacement="top"
                      styles={customStyles(formData?.errorIndex == 10 ? true : false)}
                      id="country"
                      name="Gender"
                      placeholder="Gender"
                      options={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                        { value: 'Others', label: 'Others' },
                      ]}
                      value={formData.gender}
                      onChange={(value) => { setFormData({ ...formData, gender: value }) }}
                    />
                    {formData?.errorIndex == 10 &&
                      <div style={{ color: '#FF3B30' }}>Select gender</div>}
                  </div>

                </div> */}

              </LoadScript>




              {/* Adding New Fields */}

              {/* <div className='inp-group'>
                <div>
                  <div className='inp-label mg-t-20'>Gender <span>*</span></div>
                
                  <Select
                    isDisabled={pageIndex == '4' ? true : false}
                    menuPlacement="top"
                    styles={customStyles(formData?.errorIndex == 6 ? true : false)}
                    id="country"
                    name="Gender"
                    placeholder="Select Gender"
                    options={[
                      { value: 'Male', label: 'Male' },
                      { value: 'Female', label: 'Female' },
                      { value: 'Others', label: 'Others' },
                    ]}
                    value={formData.gender}
                    onChange={(value) => { setFormData({ ...formData, gender: value }) }}
                  />
                  {formData?.errorIndex == 6 &&
                    <div style={{ color: '#FF3B30' }}>Select gender</div>}
                </div>
                <div>
                  <div className='inp-label  mg-t-20'>Country <span>*</span></div>
                 
                  <Select
                    isDisabled={pageIndex == '4' ? true : false}
                    menuPlacement="top"
                    styles={customStyles(formData?.errorIndex == 7 ? true : false)}
                    id="country"
                    name="country"
                    placeholder="Select Country"
                    options={getUpdatedCountries}
                    value={formData.country}
                    onChange={(value) => { setFormData({ ...formData, city: '', country: value }) }}
                  />
                  {formData?.errorIndex == 7 &&
                    <div style={{ color: '#FF3B30' }}>Select Country</div>}
                </div>
                <div>
                  <div className='inp-label  mg-t-20'>City <span>*</span></div>
                  <Select
                    isDisabled={pageIndex == '4' ? true : false}
                    menuPlacement="top"
                    styles={customStyles(formData?.errorIndex == 8 ? true : false)}
                    id="country"
                    name="City"
                    placeholder=" Select City"
                    options={getUpdatedCities(formData.country)}
                    value={formData.city}
                    onChange={(value) => { setFormData({ ...formData, city: value }) }}
                  />
                  {formData?.errorIndex == 8 &&
                    <div style={{ color: '#FF3B30' }}>Select City</div>}
                </div>
              </div> */}



              {signUpType == 'mobile' &&
                <>
                  <div className='inp-label  mg-t-20 margin-top'>Email <span>*</span></div>
                  <div className={formData?.errorIndex == 12 ? "form-inp err-inp" : "form-inp"}>
                    <input
                      disabled={pageIndex == '4' ? true : false}
                      type="email"
                      placeholder="Email"
                      className="custom-input"
                      value={formData.email}
                      onChange={(e) => {
                        setGetEmail(e.target.value);
                        setFormData({ ...formData, email: e.target.value })
                      }} />
                  </div>
                  {formData?.errorIndex == 12 &&
                    <div style={{ color: '#FF3B30' }}>Enter a valid Email</div>}

                  {isAlreadyRegistered &&
                    <div style={{ color: '#FF3B30' }}>Email already registered</div>
                  }

                </>}
              {signUpType != 'mobile' &&
                <>
                  <div className='inp-label  mg-t-20 margin-top' onClick={() => { OtpInpRef.current.scrollIntoView({ behavior: 'smooth' }) }}>Mobile Number <span>*</span></div>
                  <div className="form-inp style_verify">
                    <PhoneInput
                      disabled={pageIndex == '4' ? true : false}
                      placeholder="Enter your Mobile number"
                      defaultCountry="IN"
                      className="custom-phone-input"
                      onChange={handlePhoneChange}
                      value={formData.phoneNumber}
                    />
                    {(!hideVerify && !isMobileVerified) && <span type='click' className='verify_text' onClick={() => signUpOTP(formData, signUpType)}>Verify</span>}
                    {isMobileVerified && <span span type='click' className='verify_text' style={{ color: '#34C759' }}>Verified</span>}
                  </div>
                  {formData?.errorIndex == 11 &&
                    <div style={{ color: '#FF3B30' }}>Enter a valid Mobile number</div>}

                  {isAlreadyRegistered &&
                    <div style={{ color: '#FF3B30' }}>Mobile number already registered</div>
                  }



                </>}





              {(pageIndex == '4' && signUpType != 'mobile' && !isMobileVerified) && <>
                {/* <div className='inp-label' style={{ fontWeight: '600', padding: '14px 0 4px 0' }}>Verify your {signUpType == 'mobile' ? 'Email address' : 'Mobile Number'}</div> */}
                {/* <div className='sub-header' style={{ fontSize: '12px' }}>
                  enter the OTP we sent to <span style={{ fontWeight: '600' }}> {signUpType == 'mobile' ? formData.email : formData.phoneNumber}</span>

                  &nbsp;  <span style={{ color: '#CA4625', fontWeight: 600, cursor: 'pointer', borderBottom: '2px solid #CA4625' }} onClick={() => {
                    setPageIndex('3');
                    setHideVerify(false);
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.249512 6.18805V7.75055H1.81201L6.42035 3.14222L4.85785 1.57972L0.249512 6.18805ZM7.62868 1.93389C7.79118 1.77139 7.79118 1.50889 7.62868 1.34639L6.65368 0.371387C6.49118 0.208887 6.22868 0.208887 6.06618 0.371387L5.30368 1.13389L6.86618 2.69639L7.62868 1.93389Z" fill="#CA4625" />
                    </svg>
                    &nbsp;
                    Edit
                  </span>
                </div> */}
                <div className="otp-inputs">
                  {otp.map((data, index) => {
                    return (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className={formData?.errorIndex == 2 ? "otp-input otp-err" : "otp-input"}
                        // value={data}
                        onChange={(e) => handleOTPChange(e.target, index)}
                        onKeyDown={(e) =>
                          e.key === "Backspace" ? handleBackspace(e.target, index) : null
                        }
                        ref={(el) => (inputRefs.current[index] = el)}
                        onPaste={(e) => handlePaste(e, index)} // Handle paste
                        inputMode="numeric" // Add this line
                        pattern="[0-9]*" // Optionally, add this for better compatibility
                        value={data}
                      />
                    );
                  })}
                </div>
                <div className='sub-header' style={{ fontSize: '12px', marginTop: '12px' }}>
                  Enter OTP sent to <span style={{ fontWeight: '600' }}> {signUpType == 'mobile' ? formData.email : formData.phoneNumber}</span>
                  &nbsp;  <span style={{ color: '#CA4625', fontWeight: 600, cursor: 'pointer', borderBottom: '2px solid #CA4625' }} onClick={() => {
                    setPageIndex('3');
                    setIsBtnLoad(false)
                    setHideVerify(false);
                  }}>
                    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.249512 6.18805V7.75055H1.81201L6.42035 3.14222L4.85785 1.57972L0.249512 6.18805ZM7.62868 1.93389C7.79118 1.77139 7.79118 1.50889 7.62868 1.34639L6.65368 0.371387C6.49118 0.208887 6.22868 0.208887 6.06618 0.371387L5.30368 1.13389L6.86618 2.69639L7.62868 1.93389Z" fill="#CA4625" />
                    </svg>
                    &nbsp;
                    Change mobile number
                  </span>
                </div>
                {formData?.errorIndex == 2 &&
                  <div style={{ color: '#FF3B30', margin: '1rem 0' }}>{errorMessage}</div>}

                {/* <button type='click' className='primary-btn' ref={OtpInpRef} onClick={() => verifySignupOTP(formData, signUpType, token)}>Submit</button> */}
                {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className='tc-text'>Didn’t received the OTP? <br />
                    {secondsF != '0' && <>You can request another in {secondsF} {secondsF > 9 ? 'seconds' : 'second'}</>}
                    {secondsF == '0' && <div onClick={() => sendSignupOTP(formData, signUpType)} className="resend-btn">Resend</div>}</div>
                </div> */}
              </>}

              <button type='click' className={isBtnLoad ? 'primary-btn disb-btn' : 'primary-btn'} ref={OtpInpRef} onClick={() => verifySignupOTP(formData, signUpType, token)}>{isLocationCart ? 'Create My Account' : 'Create My Account & Enroll'}</button>
              {(pageIndex == '4' && signUpType != 'mobile' && !isMobileVerified) &&
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className='tc-text'>We regret if you haven&#39;t received the OTP, <br />  &nbsp;
                    {secondsF != '0' && <> resend OTP in <span style={{ fontWeight: 'bold', textDecoration: 'none' }}> 00:{secondsF}</span> </>}
                    {/* {secondsF > 9 ? 'seconds' : 'second'} */}
                    {secondsF == '0' && <span onClick={() => sendSignupOTP(formData, signUpType)} className="resend-btn">Resend</span>}</div>
                </div>}
            </>}

            {/* Signup OTP page */}


          </div>
        </div>
      </div>
      <div className={pageIndex <= 2 ? "signin-banner img-1" : "signin-banner img-2"}>
      </div>

    </div >
    // <div className='signin-container'>
    //   <InnerNavComponent abc={UserNav} />
    //   <div className='signin-form'>
    //     <form>
    //       <h1>Sign In</h1>
    //       <InputComponent
    //         icon={mail}
    //         type='text'
    //         placeholder='Enter Email'
    //         form={formData}
    //         setField={setFormData}
    //         keyName='email'
    //       />
    //       {validate === 1 && (
    //         <small
    //           style={{
    //             position: 'relative',
    //             bottom: '1rem',
    //             color: 'red',
    //             fontSize: '1rem',
    //           }}
    //         >
    //           Please enter valid email
    //         </small>
    //       )}
    //       <InputComponent
    //         icon={lock}
    //         type='password'
    //         placeholder='Enter Password'
    //         form={formData}
    //         setField={setFormData}
    //         keyName='password'
    //       />

    //       {validate === 2 && (
    //         <small
    //           style={{
    //             position: 'relative',
    //             bottom: '1rem',
    //             color: 'red',
    //             fontSize: '1rem',
    //           }}
    //         >
    //           Please enter the password
    //         </small>
    //       )}

    //       <label className='signin-btn'>
    //         <CommonBtn text='Sign In' buttonAction={handleSignIn} />
    //         <CommonBtn text={'Continue as a guest'} isColor={'#EA4335'} buttonAction={handleContinueAsGuest} />
    //       </label>
    //     </form>
    //     <Link to='/user/sign-up'>
    //       <div className='social-logins guest'>
    //         <h3>Sign Up</h3>
    //       </div>
    //     </Link>

    //   </div>
    //   {modal !== false && (
    //     <MessageModal
    //       type='ERROR'
    //       message={errMsg}
    //       closePopup={setModal}
    //     />
    //   )}
    // </div>
  )
}

export default SignIn
