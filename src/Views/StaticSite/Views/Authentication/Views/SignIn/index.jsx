import React, { useEffect, useState } from 'react'
import {
  Link,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../../Auth.actions'
import CommonBtn from '../../../../Components/commonbtn'
import InputComponent from '../../../../Components/InputComponent'
import { mail, lock } from '../../../../assets/icons/icon'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { validateEmail } from '../../../../../../helpers'
import MessageModal from '../../../../Components/MessageModal'
import PhoneInput from 'react-phone-number-input'

const SignIn = () => {
  const [modal, setModal] = useState(false)
  const [validate, setValidate] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, error } = useSelector((state) => state.auth)
  const [page, setPage] = useState()
  const [errMsg, setErrMsg] = useState('')
  const [pageIndex, setPageIndex] = useState('2')
  // const [course, setCourse] = useState()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  // const location = useLocation()

  // useEffect(() => {
  //   setCourse(location?.pathname?.split('/')?.[3])
  // }, [location])

  const [Params] = useSearchParams()

  const [selectDate, setSetselectDate] = useState()
  const [otp, setOtp] = useState(new Array(4).fill(""));

  useEffect(() => {
    localStorage.removeItem('userAppId')
    setSetselectDate(Params.get('date'))
    setPage(Params.get('location'))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [isLoggedIn])


  const handleContinueAsGuest = () => {
    if (!page) return navigate('/')
    if (page !== 'cart') navigate(`/enrollment/${page}/?date=${selectDate}`)
    setErrMsg('Please login to continue purchase!')
    setModal(true)

  }


  const handleSignIn = async () => {
    if (!validateEmail(formData.email)) {
      return setValidate(1)
    } else if (formData.password === '') {
      return setValidate(2)
    } else {
      await dispatch(
        loginUserAction(
          {
            email: formData.email,
            password: formData.password,
          },
          navigate,
          page ? page !== 'cart' ? `/enrollment/${page}/?date=${selectDate}` : '/shop/checkout' : '/',
        )
      )
      if (error.isError !== false) { setModal(true); setErrMsg(error.isError) } else { setModal(false) }
    }
  }

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
            <div className='back-nav'>
              <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#181818" />
              </svg>
              &nbsp;Back
            </div>

            {/* login page with mobile number */}
            {pageIndex == '1' && <>
              <div className='header'>Log in or Sign up</div>
              <div className='sub-header'>Log in/sign up with google account or mobile number</div>
              <div className='google-badge'>
                <svg width="1.25rem" height="1.35rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="form-inp">
                <PhoneInput
                  placeholder="Enter your Mobile number"
                  defaultCountry="IN"
                  className="custom-phone-input"
                />
              </div>
              <button type='click' className='primary-btn'>Continue</button>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='tc-text'>By Clicking “Continue with google  / mobile” you agree to
                  our <span>Terms & Conditions</span> and <span>Privacy Policy</span></div>
              </div>
            </>}

            {/* Login page with OTP */}
            {pageIndex == '2' && <>
              <div className='sub-header' style={{ fontWeight: '600',padding:'12px 0 4px 0' }}>Verify your Mobile Number</div>
              <div className='sub-header'>enter the OTP we sent to +91 7895623325</div>
              <div className="otp-inputs">
                        {otp.map((data, index) => {
                          return (
                            <input
                              key={index}
                              type="text"
                              maxLength="1"
                              className="otp-input"
                              // value={data}
                              // onChange={(e) => handleChange(e.target, index)}
                              // onKeyDown={(e) =>
                              //   e.key === "Backspace" ? handleBackspace(e.target, index) : null
                              // }
                              // ref={(el) => (inputRefs.current[index] = el)}
                            />
                          );
                        })}
                      </div>
              <button type='click' className='primary-btn'>Verify & Continue</button>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='tc-text'>Didn’t received the OTP? <br />You can request another in 00:55</div>
              </div>
            </>}


          </div>
        </div>
      </div>
      <div className="signin-banner">
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
