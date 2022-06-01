import React, { useEffect, useState } from 'react'
import CommonBannerNav2 from '../../Components/EcomNav'
import { mail, lock } from '../../assets/icons/icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './style.scss'
import CommonBtn from '../../Components/commonbtn'
import InputComponent from '../../Components/InputComponent'
import { validateEmail, validatePassword } from '../../../../helpers'

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [empty, setEmpty] = useState(false)

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  console.log(formData, 'sahil')

  const handleSubmit = () => {
    console.log('working')
    if (formData.firstName === '') {
      return setEmpty(true)
    } else if (formData.lastName === '') return setEmpty(true)
    else if (!validateEmail(formData.email)) {
      console.log('email error')
      return setEmpty(true)
    } else if (!validatePassword(formData.password)) {
      return setEmpty(true)
    } else if (formData.confirmPassword !== formData.password)
      return setEmpty(true)
    console.log('calling api')
  }

  return (
    <div className="signin-container">
      <CommonBannerNav2 />
      <div className="signin-form">
        <form>
          <h1>Sign Up</h1>

          <InputComponent
            type="text"
            placeholder="User Name"
            form={formData}
            icon={lock}
            setField={setFormData}
            keyName="userName"
          />

          <InputComponent
            type="email"
            placeholder="Email Address"
            form={formData}
            icon={mail}
            setField={setFormData}
            keyName="email"
          />
          <InputComponent
            type="password"
            placeholder="Password"
            form={formData}
            icon={lock}
            setField={setFormData}
            keyName="password"
          />
          <InputComponent
            type="password"
            placeholder=" Confirm Password"
            form={formData}
            icon={lock}
            setField={setFormData}
            keyName="confirmPassword"
          />
          <label className="signin-btn" onClick={handleSubmit}>
            <CommonBtn text={'Sign Up'} />
          </label>
        </form>

        <div className="social-logins google">
          <h3>
            <FontAwesomeIcon icon={faGoogle} />
            &ensp;SIGN UP WITH GOOGLE
          </h3>
        </div>
        <div className="social-logins facebook">
          <h3>
            <FontAwesomeIcon icon={faFacebook} />
            &ensp;SIGN UP WITH FACEBOOK
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SignUp
