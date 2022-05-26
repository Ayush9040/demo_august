import React, { useState } from 'react'
import { filler1 } from '../../assets/icons/icon'
import './styles.scss'
//import { Link } from 'react-router-dom'

const Enrollment = () => {
  const [bold, setBold] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    DOB: '',
    nationality: '',
    children: '',
    age1: '',
    age2: '',
    gender: '',
    school: '',
    course: '',
    completion: '',
    company: '',
    leavejob: '',
    resignition: '',
    medicalstatus: '',
    sourceinfo: '',
    source:'',
    purpose:''
  })

  return (
    <>
      <div className="enrollment_container ">
        <div className="header">
          <button className="x">x</button>
          <div className="student">Student Enrollment</div>

          <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li
              style={bold === 0 ? { fontWeight: '600' } : {}}
              onClick={() => setBold(0)}
            >
              {' '}
              Personal Details |{' '}
            </li>
            <li
              style={bold === 1 ? { fontWeight: '600' } : {}}
              onClick={() => setBold(1)}
            >
              Academic Qualifications |{' '}
            </li>
            <li
              style={bold === 2 ? { fontWeight: '600' } : {}}
              onClick={() => setBold(2)}
            >
              Work Experience |{' '}
            </li>
            <li
              style={bold === 3 ? { fontWeight: '600' } : {}}
              onClick={() => setBold(3)}
            >
              Other
            </li>
          </ul>
        </div>

        {bold === 0 ? (
          <div>
            <div className="details">
              <div className="left">
                <form>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Email ID"
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Address Line 1"
                      onChange={(e) => { setFormData({ ...formData, address1: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Address Line 2"
                      onChange={(e) => { setFormData({ ...formData, address2: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Country"
                      onChange={(e) => { setFormData({ ...formData, country: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="State"
                      onChange={(e) => { setFormData({ ...formData, state: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="City"
                      onChange={(e) => { setFormData({ ...formData, city: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Pincode"
                      onChange={(e) => { setFormData({ ...formData, pincode: e.target.value }) }}
                    />
                  </div>
                </form>
              </div>
              <div className="right">
                <div className="radio_text">
                  <label className="label">
                    Male&nbsp;
                    <input type="radio"
                      value="male"
                      name="gender"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, gender: e.target.value })
                        }
                      }} />
                  </label>
                  <label className="label">
                    Female&nbsp;
                    <input
                      className="radio"
                      type="radio"
                      value="female"
                      name="gender"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, gender: e.target.value })
                        }
                      }}
                    />
                  </label>
                </div>
                <div>
                  <div>
                    <label className="placeholder" id="dob">
                      <input
                        type="text" id="DOB_box" placeholder="DOB"
                        onChange={(e) => { setFormData({ ...formData, DOB: e.target.value }) }}
                      />
                      <span className="pesudo"> dd | mm | yyyy</span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Nationality"
                      onChange={(e) => { setFormData({ ...formData, nationality: e.target.value }) }}
                    />
                  </div>

                  <div>
                    <div className="flex_box">
                      <label className="label" htmlFor="">
                        Number of children
                      </label>
                      <input
                        className="place_holder_flex"
                        type="text"
                        name="children"
                        id="children"
                        onChange={(e) => { setFormData({ ...formData, age1: e.target.value }) }}
                      />
                    </div>
                    <div className="flex_box">
                      <label className="label" htmlFor="">
                        Age of child 1
                      </label>
                      <input
                        className="place_holder_flex"
                        type="text"
                        name="age1"
                        id="age1"
                        onChange={(e) => { setFormData({ formData, age1: e.target.value }) }}
                      />
                    </div>
                    <div className="flex_box">
                      <label className="label" htmlFor="">
                        Age of child 2
                      </label>{' '}
                      <input
                        className="place_holder_flex"
                        type="text"
                        name="age2"
                        id="age2"
                        onChange={(e) => { setFormData({ ...formData, age2: e.target.value }) }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <button className="back" style={{ visibility: 'hidden' }}>
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button
                className="next_1"
                onClick={() => {
                  setBold(1)
                }}
              >
                Next
              </button>
            </div>
          </div>
        ) : bold === 1 ? (
          <div>
            <div className="details">
              <div className="left">
                <div className="flex-container">
                  <div style={{ width: '99%' }}>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="School / College"
                      onChange={(e) => { setFormData({ ...formData, school: e.target.value }) }}
                    />
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Course"
                      onChange={(e) => { setFormData({ ...formData, course: e.target.value }) }}
                    />
                  </div>
                  <div className="button">
                    <button className="button_2">+</button>
                  </div>
                </div>

                <div className="left_flex_contanier">
                  <div className="flex_box">
                    <label className="label ">
                      Year of completion
                      <input
                        className="place_holder_flex"
                        type="text"
                        placeholder="Year"
                        onChange={(e) => { setFormData({ ...formData, completion: e.target.value }) }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="label">Listed Qualifications :</div>
              </div>
            </div>
            <div className="footer">
              <button
                className="back"
                onClick={() => {
                  setBold(0)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button
                className="next_1"
                onClick={() => {
                  setBold(2)
                }}
              >
                Next
              </button>
            </div>
          </div>
        ) : bold === 2 ? (
          <div>
            <div className="details">
              <div className="left">
                <div className="flex-container">
                  <div style={{ width: '99%' }}>
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Company Name"
                      onChange={(e) => { setFormData({ ...formData, company: e.target.value }) }}
                    />
                    <input
                      className="placeholder"
                      type="text"
                      placeholder="Role when leaving the job"
                      onChange={(e) => { setFormData({ ...formData, leavejob: e.target.value }) }}
                    />
                  </div>
                  <div className="button">
                    <button className="button_2">+</button>
                  </div>
                </div>
                <div className="left_flex_contanier">
                  <div className="flex_box">
                    <label className="label ">
                      Year of resignition
                      <input
                        className="place_holder_flex"
                        type="text"
                        placeholder="Year"
                        onChange={(e) => { setFormData({ ...formData, resignition: e.target.value }) }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="label">Listed Work Experience :</div>
              </div>
            </div>
            <div className="footer">
              <button
                className="back"
                onClick={() => {
                  setBold(1)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button
                className="next_1"
                onClick={() => {
                  setBold(3)
                }}
              >
                Next
              </button>
            </div>
          </div>
        ) : bold === 3 ? (
          <div>
            <div className="other">
              <div className="other_1">
                <div>
                  <div>
                    <label className="label">
                      Medical History & Current Health Issues :
                      <input
                        className="text_box"
                        type="text"
                        rows="5"
                        cols="40"
                        onChange={(e) => { setFormData({ ...formData, medicalstatus: e.target.value }) }}
                      />
                    </label>
                  </div>
                  <div>
                    <div className="label">How do you hear about us?</div>
                    <div>
                      <form className="radio_text">
                        <label className="label">
                          Internet&nbsp;
                          <input 
                            type="radio" 
                            value="internet" 
                            name="source" 
                            onChange={(e)=>{
                              if(e.target.checked) {
                                setFormData({ ...formData, source: e.target.value })
                              }
                            }} 
                          />
                        </label>
                        <label className="label">
                          Print Media&nbsp;
                          <input 
                            type="radio" 
                            value="media" 
                            name="source" 
                            onChange={(e)=>{
                              if(e.target.checked) {
                                setFormData({ ...formData, source: e.target.value })
                              }
                            }} 
                          />
                        </label>
                        <label className="label">
                          Friends/Relatives&nbsp;
                          <input 
                            type="radio" 
                            value="friends" 
                            name="source" 
                            onChange={(e)=>{
                              if(e.target.checked) {
                                setFormData({ ...formData, source: e.target.value })
                              }
                            }} 
                          />
                        </label>
                        <label className="label">
                          Events&nbsp;
                          <input 
                            type="radio" 
                            value="events" 
                            name="source" 
                            onChange={(e)=>{
                              if(e.target.checked) {
                                setFormData({ ...formData, source: e.target.value })
                              }
                            }} 
                          />
                        </label>
                        <label className="label">
                          Others&nbsp;
                          <input 
                            type="radio" 
                            value="others" 
                            name="source" 
                            onChange={(e)=>{
                              if(e.target.checked) {
                                setFormData({ ...formData, source: e.target.value })
                              }
                            }} 
                          />
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    className="underline"
                    type="text"
                    placeholder="Any other source please specify"
                    onChange={(e) => { setFormData({ ...formData, sourceinfo: e.target.value }) }}
                  />
                </div>
                <div className="radio_heading">
                  <div className="label">Purpose of joining this program</div>

                  <div className="radio_text">
                    <label className="label">
                      Self-Development&nbsp;
                      <input type="radio" />
                    </label>
                    <label className="label">
                      Fitness&nbsp;
                      <input 
                        type="radio" 
                        name="purpose" 
                        onChange={(e)=>{
                          if(e.target.checked) {
                            setFormData({ ...formData,purpose:e.target.value })
                          }
                        }}
                      />
                    </label>
                    <label className="label">
                      Career&nbsp;
                      <input   
                        type="radio" 
                        name="purpose" 
                        onChange={(e)=>{
                          if(e.target.checked) {
                            setFormData({ ...formData,purpose:e.target.value })
                          }
                        }}
                      />
                    </label>
                    <label className="label">
                      Health&nbsp;
                      <input 
                        type="radio" 
                        name="purpose" 
                        onChange={(e)=>{
                          if(e.target.checked) {
                            setFormData({ ...formData,purpose:e.target.value })
                          }
                        }}
                      />
                    </label>
                    <label className="label">
                      Others&nbsp;
                      <input 
                        type="radio" 
                        name="purpose" 
                        onChange={(e)=>{
                          if(e.target.checked) {
                            setFormData({ ...formData,purpose:e.target.value })
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    className="underline"
                    type="text"
                    placeholder="Any other source please specify"
                  />
                </div>
              </div>
            </div>
            <div className="footer">
              <button
                className="back"
                onClick={() => {
                  setBold(2)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button className="next_1">Submit</button>
            </div>
          </div>
        ) : (
          ''
        )}

        {/* new */}
      </div>
    </>
  )
}

export default Enrollment
