import React, { useState, useEffect } from 'react'
import './style.scss'
import InputComponent from '../../Components/InputComponent'
import { validatePassword } from '../../../../helpers'

const ForgotPass = () => {
  const [forgotPassword, setForgotPassword] = useState({
    newpass: '',
    confirmpass: '',
  })

  const [forgotEmpty, setForgotEmpty] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validatePassword(forgotPassword.newpass)) {
      return setForgotEmpty(1)
    } else if (forgotPassword.newpass !== forgotPassword.confirmpass) {
      return setForgotEmpty(2)
    }
    setForgotEmpty(0)

    console.log('hiiii sakshi')
  }
  return (
    <>
      <div className="forgot_main_box">
        <div className="main_box">
          <form>
            <div htmlFor="" className="forgot_label">
              Create New Password
            </div>

            <div className='form-field' >
              <InputComponent
                type="password"
                placeholder="enter new password"
                form={forgotPassword}
                setField={setForgotPassword}
                keyName="newpass"
              />
              {forgotEmpty === 1 && (
                <small style={{ color: 'red', marginLeft: '0' }}>
                    *Password must be 8 characters long and should include uppercase,lowecare,number and a symbol
                </small>
              )}
            </div>
            <>
              <InputComponent
                type="password"
                placeholder="confrim your password"
                form={forgotPassword}
                setField={setForgotPassword}
                keyName="confirmpass"
              />
              {forgotEmpty === 2 && (
                <small style={{ color: 'red', marginLeft: '0' }}>
                    *Passwords are not matching!!!
                </small>
              )}
            </>
            <div className="forgot_submit">
              <button className="forgot_submit_button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPass
