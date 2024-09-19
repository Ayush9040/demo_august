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
import PhoneInput from 'react-phone-number-input'
import { Country, State, City } from 'country-state-city'
import Select from 'react-select'
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js'
import { auth, googleAuthProvider } from './firebaseConfig'; // Adjust the path as needed
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios'
import { authBaseDomain, cmsBaseDomain } from '../../../../../../Constants/appSettings'
import { handleCTSignIn } from '../../../../../../CleverTap/buttonClicked'


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

  const [Params] = useSearchParams()
  const inputRefs = useRef([]);
  const [token, setToken] = useState()
  const [selectDate, setSetselectDate] = useState()
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const customStyles = (isInvalid) => ({
    control: (base, state) => ({
      ...base,
      background: 'transparent',
      borderRadius: '8px',
      padding: '0 !important', // Ensure no padding is applied
      // height: 10, // Adjust the height of the select input
      // minHeight: 10, // Ensure the minimum height is applied
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


  // Function to generate city options based on selected state
  const getUpdatedCities = (countryIsoCode) => {
    if (!countryIsoCode) return [];
    return City.getCitiesOfCountry(countryIsoCode.value).map((city) => ({
      value: city.name,
      label: city.name,
    }));
  };

  // After login get the user details and update redux
  const getUserDetails = async (token) => {
    try {
      const response = await axios.get(`${authBaseDomain}/user/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      localStorage.setItem('userAppId', response?.data.data?._id)//to pass
      //update user details to Redux 
      dispatch(loginUserSuccess({ type: 'auth/LOGIN_USER_SUCCESS', data: response?.data?.data }))
    } catch (error) {
      // Log the full error object to understand what went wrong
      console.error('Error fetching user data:', error);
    }

  }

  // verify mobile OTP and navigates to login or Signup
  const verifyOTP = async (userDetails) => {
    if (userDetails.otp.length == 4) {//valid OTP
      setFormData({ ...formData, errorIndex: 0 });
      try {
        let response = await axios.post(//send OTP for mobile
          `${authBaseDomain}/authdoor/mobile/verify-otp`,
          { contactNo: userDetails.phoneNumber.slice(3), otp: userDetails.otp,dialCode:userDetails.phoneNumber.slice(1, 3) }
        )
        setToken(response?.data?.token)
        if (response?.data?.isSignupRequired) { setPageIndex(3); setSignUpType('mobile') }
        else {
          localStorage.setItem('authToken', response?.data?.accessToken)
          localStorage.setItem('refreshToken', response?.data?.refreshToken)
          dispatch(loginUserSuccess({}))
          getUserDetails(response?.data?.accessToken)
          page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
        }
      }
      catch (err) {
        alert('Invalid OTP')
      }
    }
    else {
      setFormData({ ...formData, errorIndex: 2 });
    }
  }

  // create user after the final step validation
  const verifySignupOTP = async (userDetails, type, token) => {
    if (userDetails.otp.length == 4) {//valid OTP
      setFormData({ ...formData, errorIndex: 0 });
      

      try {
        let payload = { ...userDetails }
        payload['gender'] = userDetails?.gender.value;
        payload['country'] = userDetails?.country.label;
        payload['city'] = userDetails?.city.label;
        payload['phoneNumber'] = userDetails.phoneNumber.slice(3);
        payload['dialCode'] = userDetails.phoneNumber.slice(1, 3);
        

        if (type == 'mobile') {
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
            localStorage.setItem('authToken', response?.data?.accessToken)
            localStorage.setItem('refreshToken', response?.data?.refreshToken)
            dispatch(loginUserSuccess({}))
            getUserDetails(response?.data?.accessToken)
            callCTEvent(payload)

            console.log('user details 1 ', userDetails);
            
            page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
          }
          else {
            alert('failed')
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
            localStorage.setItem('authToken', response?.data?.accessToken)
            localStorage.setItem('refreshToken', response?.data?.refreshToken)
            dispatch(loginUserSuccess({}))
            getUserDetails(response?.data?.accessToken)
            callCTEvent(payload)

            console.log('user details 2 ', userDetails);
            page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
          }
          else {
            alert('failed')
          }          
        }
      }
      catch (err) {
        alert('Invalid OTP')
      }
    }
    else {
      setFormData({ ...formData, errorIndex: 2 });
    }
  }

 
  // Send OTP for mobile
  const sendOTP = async (userDetails) => {
    if (userDetails.phoneNumber) {//validate mobile number
      const errors = validatePhoneNumber(userDetails.phoneNumber);
      if (errors.length) {
        setFormData({ ...formData, errorIndex: 1 });
      }
      else {//mobile num is valid
        setFormData({ ...formData, errorIndex: 0 });
        await axios.post(//send OTP for mobile
          `${authBaseDomain}/authdoor/mobile/generate-otp`,
          { contactNo: userDetails.phoneNumber.slice(3),dialCode:userDetails.phoneNumber.slice(1, 3) }
        )
        setPageIndex(2)
        startTimer()
      }
    } else {
      setFormData({ ...formData, errorIndex: 1 });
    }
  }

  const handlePhoneChange = (value) => {
    // setPhoneValue(value);
    setFormData({ ...formData, phoneNumber: value });
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
      skip=1;
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
  let intervalId; // variable fro timer
  let timer = 59; // variable to handle seconds not updated in dom

  const startTimer = () => {
    clearInterval(intervalId);
    timer = 59;// resets timer
    intervalId = setInterval(() => {
      timer = timer - 1; //using state its not possible to get current time so using a new variable
      setSeconds(timer)
      if (timer === 0) {
        clearInterval(intervalId);
      }
    }, 1000)
  }

  // Used to resend OTP in the final step
  const sendSignupOTP = async (details, type) => {
    if (type == 'mobile') {//send OTP for mobile
      await axios.post(//send OTP for mobile
        `${authBaseDomain}/authdoor/email/generate-otp`,
        { email: details?.email }
      )
      startTimer()
      setPageIndex('4')
    }
    else {//resend OTP for mobile
      await axios.post(//send OTP for mobile
        `${authBaseDomain}/authdoor/mobile/generate-otp`,
        { contactNo: details.phoneNumber.slice(3),dialCode:details.phoneNumber.slice(1, 3) }
      )
      startTimer()
      setPageIndex('4')
    }
  }

  // validates the form and trigger OTP for the final step
  const signUpOTP = async (details, type) => {
    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!details.firstName || !nameRegex.test(details.firstName)) {
      setFormData({ ...formData, errorIndex: 3 });
    }
    else if (!details.lastName || !nameRegex.test(details.lastName)) {
      setFormData({ ...formData, errorIndex: 4 });
    }
    else if ((!details.email || !emailRegex.test(details.email)) && signUpType == 'mobile') {
      setFormData({ ...formData, errorIndex: 5 });
    }
    else if (!details.gender?.value) {
      setFormData({ ...formData, errorIndex: 6 });
    }
    else if (!details.country?.value) {
      setFormData({ ...formData, errorIndex: 7 });
    }
    else if (!details.city?.value) {
      setFormData({ ...formData, errorIndex: 8 });
    }
    else if ((validatePhoneNumber(details.phoneNumber).length > 0) && signUpType != 'mobile') {
      setFormData({ ...formData, errorIndex: 9 });
    }
    else {//form is valid 
      setFormData({ ...formData, errorIndex: 0 });
      
      //trigger EMAIL OTP 
      if (type == 'mobile') {//send OTP for mobile
        try {
          startTimer()
          await axios.post(//send OTP for mobile
            `${authBaseDomain}/authdoor/email/generate-otp`,
            { email: details?.email },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          )

          
         
          setPageIndex('4')
        }
        catch (err) {
          alert('Unexpected error, please try again')
        }
      }
      else {//gmail signup
        try {
          await axios.post(//send OTP for mobile
            `${authBaseDomain}/authdoor/mobile/otp/generate`,
            { contactNo: details.phoneNumber.slice(3),dialCode:details.phoneNumber.slice(1, 3) },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          )
          
          startTimer()
          setPageIndex('4')
        }
        catch (err) {
          alert('Unexpected error, please try again')
        }
      }
    }
  }

  const callCTEvent = (userDetails) => {
    console.log('callCTEvent function called ', userDetails)
    handleCTSignIn({
      firstName: userDetails?.firstName,
      email: userDetails?.email,
      IsLoggedIn: 'Yes',
      phone: userDetails.phoneNumber,
      city: userDetails?.city,
      country:userDetails?.country,
      gender: userDetails?.gender,
      dialCode: userDetails?.dialCode
    })
  }


  const openLink = (url) => {
    window.open(url, '_blank')
  }

  const handleOTPChange = (element, index) => {
    if (isNaN(element.value)) return; // Ensure only numbers are entered
    let otpArry = [...otp]
    otpArry[index] = element.value
    setOtp(otpArry);
    // Move focus to the next input
    if (element.value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    setFormData({ ...formData, otp: otpArry.join('') })
  };

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
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      // Get the OAuth ID token from the credential
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const idToken = credential.idToken; // OAuth ID token
        let response = await axios.post(//send OTP for mobile
          `${authBaseDomain}/authdoor/google/login`,
          { tokenId: idToken, emailId: user.email }
        )
        if (response?.data?.isSignupRequired) {//gmail signup
          setPageIndex('3')
          setSignUpType('email')
          setToken(response?.data?.token)
          setFormData({ ...formData, email: user.email, firstName: user?.displayName })
        }
        else {//existing user
          // alert('Siggned in');
          localStorage.setItem('authToken', response?.data?.accessToken)
          localStorage.setItem('refreshToken', response?.data?.refreshToken)
          dispatch(loginUserSuccess({}))
          getUserDetails(response?.data?.accessToken)
          page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
        }
      } else {
        console.error('No credential found');
      }


      // Handle successful sign-in (e.g., update state, redirect user)
    } catch (error) {
      console.error('Sign In Error:', error.message);
      // Handle sign-in errors (e.g., show error message to user)
    }
  }

  const navigateBack = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1)
    }
    else {
      page ? page !== 'cart' ? navigate(`/enrollment/${page}`) : navigate('/shop/checkout') : navigate('/')
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



  return (
    <div className="signin-form">
      <div className='signin-container'>
        <div className="signin-logo">
          <img src="/images/primary-logo.svg" alt="primary-logo" />
        </div>
        <div className="signin-details">
          <div className="container">
            <div className='back-nav' onClick={() => navigateBack()}>
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
            </div>

            {/* login page with mobile number */}
            {pageIndex == '1' && <>
              <div className='header'>Log in or Sign up</div>
              <div className='sub-header'>Log in/sign up with google account or mobile number</div>
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
                <div style={{ color: '#FF3B30' }}>Enter a valid Mobile number to proceed next</div>}

              <button type='click' className='primary-btn' onClick={() => sendOTP(formData)}>Continue</button>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='tc-text'>By Clicking “Continue with google  / mobile” you agree to
                  our <span onClick={() => openLink('https://theyogainstitute.org/terms-and-conditions')}>Terms & Conditions</span> and <span onClick={() => openLink('https://theyogainstitute.org/privacy-policy')}>Privacy Policy</span></div>
              </div>
            </>}

            {/* Login page with OTP */}
            {pageIndex == '2' && <>
              <div className='sub-header' style={{ fontWeight: '600', padding: '12px 0 4px 0' }}>Verify your Mobile Number</div>
              <div className='sub-header'>enter the OTP we sent to {formData.phoneNumber}</div>
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
                    />
                  );
                })}
              </div>
              {formData?.errorIndex == 2 &&
                <div style={{ color: '#FF3B30', margin: '1rem 0' }}>OTP is Invalid!</div>}
              <button type='click' className='primary-btn' onClick={() => verifyOTP(formData)}>Verify & Continue</button>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='tc-text'>Didn’t received the OTP? <br />
                  {seconds != '0' && <>You can request another in {seconds} {seconds > 9 ? 'seconds' : 'second'}</>}
                  {seconds == '0' && <div onClick={() => sendOTP(formData)} className="resend-btn">Resend</div>}</div>
              </div>
            </>}

            {/* Signup page */}
            {pageIndex == '3' && <>
              <div className='header'>Welcome to TYI</div>
              <div className='sub-header'>Setup your TYI Account</div>
              <div className='inp-label mg-t-20'>First Name <span>*</span></div>
              <div className={formData?.errorIndex == 3 ? "form-inp err-inp" : "form-inp"}>
                <input
                  value={formData.firstName}
                  onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }) }}
                  type="text"
                  placeholder="First Name"
                  className="custom-input"
                />
              </div>
              {formData?.errorIndex == 3 &&
                <div style={{ color: '#FF3B30' }}>Enter a valid First name</div>}


              <div className='inp-label  mg-t-20'>Last Name <span>*</span></div>
              <div className={formData?.errorIndex == 4 ? "form-inp err-inp" : "form-inp"}>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }}
                  className="custom-input"
                />
              </div>
              {formData?.errorIndex == 4 &&
                <div style={{ color: '#FF3B30' }}>Enter a valid Last name</div>}

              {signUpType == 'mobile' &&
                <>
                  <div className='inp-label  mg-t-20'>Email <span>*</span></div>
                  <div className={formData?.errorIndex == 5 ? "form-inp err-inp" : "form-inp"}>
                    <input
                      type="email"
                      placeholder="Email"
                      className="custom-input"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
                  </div>
                  {formData?.errorIndex == 5 &&
                    <div style={{ color: '#FF3B30' }}>Enter a valid Email</div>}
                </>}
              {signUpType != 'mobile' &&
                <>
                  <div className='inp-label  mg-t-20'>Mobile Number <span>*</span></div>
                  <div className="form-inp">
                    <PhoneInput
                      placeholder="Enter your Mobile number"
                      defaultCountry="IN"
                      className="custom-phone-input"
                      onChange={handlePhoneChange}
                      value={formData.phoneNumber}
                    />
                  </div> {formData?.errorIndex == 9 &&
                    <div style={{ color: '#FF3B30' }}>Enter a valid Mobile number</div>}</>}
              <div className='inp-group'>
                <div>
                  <div className='inp-label  mg-t-20'>Gender <span>*</span></div>
                  {/* <div className="form-inp"> */}
                  <Select
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
                  {/* <div className="form-inp"> */}
                  <Select
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
                    styles={customStyles(formData?.errorIndex == 8 ? true : false)}
                    id="country"
                    name="City"
                    placeholder=" Select City"
                    options={getUpdatedCities(formData.country)}//values?.country?.value
                    value={formData.city}
                    onChange={(value) => { setFormData({ ...formData, city: value }) }}
                  />
                  {formData?.errorIndex == 8 &&
                    <div style={{ color: '#FF3B30' }}>Select City</div>}
                </div>
              </div>
              <button type='click' className='primary-btn' onClick={() => signUpOTP(formData, signUpType)}>Continue</button>
            </>}

            {/* Signup OTP page */}
            {pageIndex == '4' && <>
              <div className='sub-header' style={{ fontWeight: '600', padding: '12px 0 4px 0' }}>Verify your {signUpType == 'mobile' ? 'Email address' : 'Mobile Number'}</div>
              <div className='sub-header'>enter the OTP we sent to {signUpType == 'mobile' ? formData.email : formData.phoneNumber}</div>
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
                    />
                  );
                })}
              </div>
              {formData?.errorIndex == 2 &&
                <div style={{ color: '#FF3B30', margin: '1rem 0' }}>OTP is Invalid!</div>}
              <button type='click' className='primary-btn' onClick={() => verifySignupOTP(formData, signUpType, token)}>Verify & Continue</button>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='tc-text'>Didn’t received the OTP? <br />
                  {seconds != '0' && <>You can request another in {seconds} {seconds > 9 ? 'seconds' : 'second'}</>}
                  {seconds == '0' && <div onClick={() => sendSignupOTP(formData, signUpType)} className="resend-btn">Resend</div>}</div>
              </div>
            </>}

          </div>
        </div>
      </div>
      <div className={pageIndex <= 2 ? "signin-banner img-1" : "signin-banner img-2"}>
      </div>

    </div>
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
