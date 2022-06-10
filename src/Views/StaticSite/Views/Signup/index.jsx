import React, { useEffect, useState } from 'react'
import CommonBannerNav2 from '../../Components/EcomNav'
//import { mail, lock } from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import './style.scss'
import CommonBtn from '../../Components/commonbtn'
import InputComponent from '../../Components/InputComponent'
import { validateEmail, validatePassword } from '../../../../helpers'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [empty, setEmpty] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const handleSubmit = () => {
    if (formData.name === '') {
      return setEmpty(1)
    } else if (!validateEmail(formData.email)) {
      console.log('email error')
      return setEmpty(2)
    } else if (!validatePassword(formData.password)) {
      return setEmpty(3)
    } else if (formData.confirmPassword !== formData.password)
      return setEmpty(4)
    console.log('calling api')
    setEmpty(0)
  }

  return (
    <div className="signin-container">
      <CommonBannerNav2 />
      <div className="signin-form">
        <form>
          <h1>Sign Up</h1>

          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Name"
              form={formData}
              setField={setFormData}
              keyName="name"
            />
            {empty === 1 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Name!
              </small>
            )}
          </div>
          <div className="form-field">
            <InputComponent
              type="email"
              placeholder="Email Address"
              form={formData}
              setField={setFormData}
              keyName="email"
            />
            {empty === 2 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Valid Email!
              </small>
            )}
          </div>
          <div className="form-field">
            <InputComponent
              type="password"
              placeholder="Password"
              form={formData}
              setField={setFormData}
              keyName="password"
            />
            {empty === 3 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Password must be 8 characters long and should include
                uppercase,lowecare,number and a symbol
              </small>
            )}
          </div>
          <div className="form-field">
            <InputComponent
              type="password"
              placeholder=" Confirm Password"
              form={formData}
              setField={setFormData}
              keyName="confirmPassword"
            />
            {empty === 4 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Passwords are not matching!
              </small>
            )}
          </div>
          <label className="signin-btn" id='sign-up' onClick={handleSubmit}>
            <CommonBtn text={'Submit'} />
          </label>
        </form>
      </div>
      <p style={{ textAlign:'center' }} >Already a user ? <Link to='/sign-in' ><span style={{ color:'#CC4625' }} >Sign-In</span></Link></p>
    </div>
  )
}

export default SignUp
