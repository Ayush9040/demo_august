import React from 'react'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import CommonBtn from '../commonbtn'
import './style.scss'
const EditAccount = () => {
  return (
    <div>
      <CommonBannerNavPrimary />
      <div className="edit-main">
        <h2 className="account-header">Edit Account</h2>
        <div className="personal-info">Personal Info</div>
        <div className="account-input">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email Id" />
          <input type="text" placeholder="Gender" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Country" className="input-text" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="City" />
        </div>
        <hr />
        <div className="former-input">
          <div className="former-l1">
            <div className="former-p">Are you a former alumini?</div>
            <div className="former-radio">
              <p>Yes</p>
              {/* <nbsp /> */}
              <input type="radio"  name="option" />
              <p>No</p>
              <input type="radio"  name="option"/>
            </div>
          </div>
          <div className="year-course">
            <input type="text" placeholder="Year" />
            <input type="text" placeholder="Course" />
          </div>
          <div className="subscribe">
            <div className="subscribe-p">
              Would you like to subscribe to the alumini newsletter?
            </div>
            <p>Yes</p>
            <input type="radio"  name="option"/>
            <p>No</p>
            <input type="radio"  name="option"/>
          </div>
        </div>
        <hr />
        <div className="shipping">
          <p>Shipping Details</p>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Pin Code" />
          <div className="continue-button">
            <CommonBtn text={'Continue'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAccount
