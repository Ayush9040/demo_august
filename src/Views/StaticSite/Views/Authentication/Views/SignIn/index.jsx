import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { loginUserAction } from '../../Auth.actions'

import CommonBtn from '../../../../Components/commonbtn'
import InputComponent from '../../../../Components/InputComponent'
import CommonBannerNav2 from '../../../../Components/EcomNav'

import { mail, lock } from '../../../../assets/icons/icon'

import './style.scss'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [course, setCourse] = useState()
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })
  const location = useLocation()
  console.log(location.pathname.split('/'))

  useEffect(() => {
    setCourse(location?.pathname?.split('/')?.[3])
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSignIn = () =>{
    dispatch(loginUserAction({
      email: formData.name,
      password: formData.password
    }, navigate))
  }

  return (
    <div className="signin-container">
      <CommonBannerNav2 />
      <div className="signin-form">
        <form>
          <h1>Sign In</h1>
          <InputComponent
            icon={mail}
            type="text"
            placeholder="Name"
            form={formData}
            setField={setFormData}
            keyName="name"
          />
          <InputComponent
            icon={lock}
            type="text"
            placeholder="Password"
            form={formData}
            setField={setFormData}
            keyName="password"
          />
          <label className="other-options">
            <div className="remember-me">
              <input type={'checkbox'} />
              &ensp; Remember Me
            </div>
            <div className="forgot-password">Forgot Password ?</div>
          </label>
          <label className="signin-btn">
            <CommonBtn
              text="Sign In"
              buttonAction={handleSignIn}
            />
            <Link to={`/enrollment/${course}`}>
              <CommonBtn text={'Continue as a guest'} isColor={'#EA4335'} />
            </Link>
          </label>
        </form>
        <div className="social-logins guest">
          <Link to="/user/sign-up">
            <h3>Sign Up</h3>
          </Link>
        </div>
        <div className="social-logins google">
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
        </div>
      </div>
    </div>
  )
}

export default SignIn
