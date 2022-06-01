import React from 'react'
import './style.scss'

const OneTimePass = () => {
  return (
    <>
      <div className='main_big_box'>
        <div className="big_box">
          <div className="second_box">
            <label className='enter_label' htmlFor="">
              Enter OTP <br />
              <input className='otp_input' type="text" placeholder="Enter OTP" />
            </label>
          </div>
          <div className="verify">
            <button className="verify_button">Verify</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OneTimePass
