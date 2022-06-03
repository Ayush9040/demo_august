import React, { useEffect, useState } from 'react'
import CommonBannerNav2 from '../../Components/EcomNav'
import { mail, lock } from '../../assets/icons/icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './style.scss'
import CommonBtn from '../../Components/commonbtn'
import { Link } from 'react-router-dom'
import InputComponent from '../../Components/InputComponent'

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
            <CommonBtn text={'Sign In'} />
            <CommonBtn text={'Continue as a guest'} isColor={'#EA4335'} />
          </label>
        </form>
        <div className="social-logins guest">
          <Link to="/sign-up">
            <h3>Create Account</h3>
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
