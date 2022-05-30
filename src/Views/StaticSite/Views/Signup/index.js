import React, { useState } from 'react'
import CommonBannerNav2 from '../../Components/EcomNav'
import { mail, lock } from '../../assets/icons/icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './style.scss'
import CommonBtn from '../../Components/commonbtn'
import InputComponent from '../../Components/InputComponent'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [empty, setEmpty] = useState(false)
  console.log(empty)

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  console.log(formData, 'sahil')

  const handleSubmit=()=>{
    if (formData.firstName === '') setEmpty(true)
    else if (formData.lastName === '') setEmpty(true)
    else if (formData.email === '') setEmpty(true)
    else if (formData.password==='') setEmpty(true)
    else if (formData.confirmPassword==='') setEmpty(true)
    else if (formData.confirmPassword!==formData.password) setEmpty('true')
  }

  return (
    <div className="signin-container">
      <CommonBannerNav2 />
      <div className="signin-form">
        <form onSubmit={handleSubmit} > 
          <h1>Sign Up</h1>
          <InputComponent
            type="text"
            placeholder="First Name"
           
            icon={lock}
            form={formData}
            setField={setFormData}
            keyName='firstName'
          />
          <InputComponent
            type="text"
            placeholder="Last Name"
            form={formData}
            icon={lock}
            setField={setFormData}
            keyName='lastName'
          />
          <InputComponent
            type="email"
            placeholder="Email Address"
            form={formData}
            icon={mail}
            setField={setFormData}
            keyName='email'
          />
          <InputComponent
            type="password"
            placeholder="Password"
            form={formData}
            icon={lock}
            setField={setFormData}
            keyName='password'
          />
          <InputComponent
            type="password"
            placeholder=" Confirm Password"
            form={formData}
            icon={lock}
            setField={setFormData}
            keyName='confirmPassword'
          />
          <label className="signin-btn">
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
