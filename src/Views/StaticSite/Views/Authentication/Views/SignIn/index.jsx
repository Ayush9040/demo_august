import React, { useEffect, useState } from 'react'
import {
  Link,
  useLocation,
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

const SignIn = () => {
  const [modal, setModal] = useState(false)
  const [validate, setValidate] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, error } = useSelector((state) => state.auth)
  const [course, setCourse] = useState()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const location = useLocation()

  useEffect(() => {
    setCourse(location?.pathname?.split('/')?.[3])
  }, [location])

  const [Params] = useSearchParams()

  const [selectDate, setSetselectDate] = useState()

  useEffect(() => {
    setSetselectDate(Params.get('date'))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isLoggedIn])

  const handleSignIn = async() => {
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
          
        )
      )
      isLoggedIn && course ? navigate(`/enrollment/${course}/?date=${selectDate}`):navigate('/')
      error.isError ? setModal(true) : setModal(false)
    }
  }

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }
  console.log(error.isError)
  return (
    <div className='signin-container'>
      <InnerNavComponent abc={UserNav} />
      <div className='signin-form'>
        <form>
          <h1>Sign In</h1>
          <InputComponent
            icon={mail}
            type='text'
            placeholder='Enter Email'
            form={formData}
            setField={setFormData}
            keyName='email'
          />
          <InputComponent
            icon={lock}
            type='password'
            placeholder='Enter Password'
            form={formData}
            setField={setFormData}
            keyName='password'
          />
          {validate === 1 && (
            <small
              style={{
                position: 'relative',
                bottom: '1rem',
                color: 'red',
                fontSize: '1rem',
              }}
            >
              Please enter valid email
            </small>
          )}
          {validate === 2 && (
            <small
              style={{
                position: 'relative',
                bottom: '1rem',
                color: 'red',
                fontSize: '1rem',
              }}
            >
              Please enter the password
            </small>
          )}
          {/* <label className="other-options">
            <div className="remember-me">
              <input type={'checkbox'} />
              &ensp; Remember Me
            </div>
            <div className="forgot-password">Forgot Password ?</div>
          </label> */}
          <label className='signin-btn'>
            <CommonBtn text='Sign In' buttonAction={handleSignIn} />
            <Link
              to={
                course !== undefined
                  ? `/enrollment/${course}/?date=${selectDate}`
                  : '/'
              }
            >
              <CommonBtn text={'Continue as a guest'} isColor={'#EA4335'} />
            </Link>
          </label>
        </form>
        <Link to='/user/sign-up'>
          <div className='social-logins guest'>
            <h3>Sign Up</h3>
          </div>
        </Link>
        {/* <div className="social-logins google">
          <h3>
            <FontAwesomeIcon icon={faGoogle} />
            &ensp;SIGN IN WITH GOOGLE
          </h3>
        </div>
        <div className="social-logins facebook">
          <h3>
            <FontAwesomeIcon icon={faFacebook} />
            &ensp;SIGN IN WITH FACEBOOK
          </h3>
        </div> */}
      </div>
      {modal !== false && (
        <MessageModal
          type='ERROR'
          message={error.isError}
          closePopup={setModal}
        />
      )}
    </div>
  )
}

export default SignIn
