import React, { useState } from 'react'
import InputComponent from '../InputComponent'
import './style.scss'

const OneTimePass = () => {
  const [otp, setOtp] = useState({
    otp: 0,
  })
  const [otpEmpty, setOtpEmpty] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (otp.otp.toString().length !== 6) {
      return setOtpEmpty(1)
    }
  }


  return (
    <>
      <div className="main_big_box">
        <div className="big_box">
          <div className="second_box">
            <div className="enter_label">
              Enter OTP 
            </div>
            <div>
              <InputComponent
                type="number"
                placeholder="Enter OTP"
                form={otp}
                setField={setOtp}
                keyName="otp"
              />
            </div>
          </div>
          <div className="verify">
            <button className="verify_button" onClick={handleSubmit}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OneTimePass
