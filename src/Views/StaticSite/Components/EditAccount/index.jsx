import React, { useState } from 'react'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import CommonBtn from '../commonbtn'
import './style.scss'
const EditAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phoneNum: '',
    country: '',
    state: '',
    city: '',
    year: '',
    course: '',
    name: '',
    addLine1: '',
    addLine2: '',
    shipCountry: '',
    shipState: '',
    shipCity: '',
    pinCode: '',
  })

  const [empty,setEmpty]=useState(false)

  console.log(formData)

  const submitForm = () => {
    if (formData.firstName === '') setEmpty(true)
    else if (formData.lastName === '') setEmpty(true)
    else if (formData.email === '') setEmpty(true)
    else if (formData.gender === '') setEmpty(true)
    else if (formData.phoneNum === '') setEmpty(true)
    else if (formData.country === '') setEmpty(true)
    else if (formData.state === '') setEmpty(true)
    else if (formData.city === '') setEmpty(true)
    else if (formData.year === '') setEmpty(true)
    else if (formData.course === '') setEmpty(true)
    else if (formData.name === '') setEmpty(true)
    else if (formData.addLine1 === '') setEmpty(true)
    else if (formData.addLine2 === '') setEmpty(true)
    else if (formData.shipCountry === '') setEmpty(true)
    else if (formData.shipState === '') setEmpty(true)
    else if (formData.shipCity === '') setEmpty(true)
    else if (formData.pinCode === '') setEmpty(true)
  }

  return (
    <>
      {empty && <div>ERR</div>}
      <CommonBannerNavPrimary />
      <div className="edit-main">
        <h2 className="account-header">Edit Account</h2>
        <div className="personal-info">Personal Info</div>
        <div className="account-input">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Email Id"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Gender"
            value={formData.gender}
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNum}
            onChange={(e) => {
              setFormData({ ...formData, phoneNum: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Country"
            className="input-text"
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) => {
              setFormData({ ...formData, state: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => {
              setFormData({ ...formData, city: e.target.value })
            }}
          />
        </div>
        <hr />
        <div className="former-input">
          <div className="former-l1">
            <div className="former-p">Are you a former alumini?</div>
            <div className="former-radio">
              <p>Yes</p>
              {/* <nbsp /> */}
              <input type="radio" name="option" />
              <p>No</p>
              <input type="radio" name="option" />
            </div>
          </div>
          <div className="year-course">
            <input
              type="text"
              placeholder="Year"
              value={formData.year}
              onChange={(e) => {
                setFormData({ ...formData, year: e.target.value })
              }}
            />
            <input
              type="text"
              placeholder="Course"
              value={formData.course}
              onChange={(e) => {
                setFormData({ ...formData, course: e.target.value })
              }}
            />
          </div>
          <div className="subscribe">
            <div className="subscribe-p">
              Would you like to subscribe to the alumini newsletter?
            </div>
            <p>Yes</p>
            <input type="radio" name="option1" />
            <p>No</p>
            <input type="radio" name="option1" />
          </div>
        </div>
        <hr />
        <div className="shipping">
          <p>Shipping Details</p>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Address Line 1"
            value={formData.addLine1}
            onChange={(e) => {
              setFormData({ ...formData, addLine1: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={formData.addLine2}
            onChange={(e) => {
              setFormData({ ...formData, addLine2: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.shipCountry}
            onChange={(e) => {
              setFormData({ ...formData, shipCountry: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="State"
            value={formData.shipState}
            onChange={(e) => {
              setFormData({ ...formData, shipState: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="City"
            value={formData.shipCity}
            onChange={(e) => {
              setFormData({ ...formData, shipCity: e.target.value })
            }}
          />
          <input
            type="text"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={(e) => {
              setFormData({ ...formData, pinCode: e.target.value })
            }}
          />
          <div className="continue-button">
            <div onClick={submitForm}>
              <CommonBtn text={'Continue'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditAccount
