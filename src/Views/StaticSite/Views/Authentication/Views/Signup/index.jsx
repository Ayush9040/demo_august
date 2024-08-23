import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'
import CommonBtn from '../../../../Components/commonbtn'
import InputComponent from '../../../../Components/InputComponent'
import { validateEmail } from '../../../../../../helpers'
import axios from 'axios'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import {
  authBaseDomain,
} from '../../../../../../Constants/appSettings'
import MessageModal from '../../../../Components/MessageModal'
import { handleCTSignUp } from '../../../../../../CleverTap/buttonClicked'

const SignUp = () => {
  const [modal, setModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { firstName, email, password, confirmPassword } = formData

  const clevertap = window.clevertap;

  const [empty, setEmpty] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const createUserSignIn = async(data) => {
    try {
      await axios.post(
        `${authBaseDomain}/authdoor/register`,
        data
      )
      navigate('/user/sign-in')

      
    clevertap.onUserLogin.push({
      "Site": {
        "Name": firstName,            // String
        "Email": email,         // Email address of the user               // Date of Birth. Date object
     // optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": false,                // Disable email notifications
        "MSG-push": false,                  // Enable push notifications
        "MSG-sms": false,                   // Enable sms notifications
        "MSG-whatsapp": false,              // Enable WhatsApp notifications
      }
     })

     console.log('New User From Clever Tap', clevertap);
     
    } catch (error) {
      setErrorMessage(error.data.message)
      setModal(true)
    }

    console.log(errorMessage)
  }

  const handleSubmit = async(e) => {
    if (formData.name === '') {
      return setEmpty(1)
    } else if (!validateEmail(formData.email)) {
      return setEmpty(2)
    }
    //else if (!validatePassword(formData.password)) {
    //   return setEmpty(3)
    // } else if (formData.confirmPassword !== formData.password)
    //   return setEmpty(4)
    // setEmpty(0)
    e.preventDefault()
    createUserSignIn({
      firstName,
      email,
      password,
      confirmPassword,
    })

    
  }

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }

  return (
    <div className="signin-container">
      <InnerNavComponent abc={UserNav} />
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Enter Name"
              form={formData}
              setField={setFormData}
              keyName="firstName"
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
              placeholder="Enter Email Address"
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
              placeholder="Enter Password"
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
              placeholder="Enter Confirm Password"
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
          <label className="signin-btn" id="sign-up" onClick={handleSubmit}>
            <CommonBtn text={'Submit'} buttonAction={() => handleCTSignUp({
              firstName,
              email
            })} />
          </label>
        </form>
      </div>
      <p style={{ textAlign: 'center' }}>
        Already a user ?{' '}
        <Link to="/user/sign-in">
          <span style={{ color: '#CC4625' }}>Sign-In</span>
        </Link>
      </p>
      {modal !== false && (
        <MessageModal
          type="ERROR"
          message="User already exist"
          closePopup={setModal}
        />
      )}
    </div>
  )
}

export default SignUp
