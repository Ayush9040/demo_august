import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { validateEmail } from '../../../../helpers'
import InnerNavComponent from '../InnerNavComponent'
import InputComponent from '../InputComponent'
import './style.scss'
const EditAccount = () => {

  const { user } = useSelector(state=>state.auth)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user.data.email,
    gender: '',
    phoneNum: '',
    country: '',
    state: '',
    city: '',
    year: '',
    course: '',
    studentId: '',
    alumni: '',
  })

  const [empty, setEmpty] = useState(0)

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [
    ],
  }



  const submitForm = () => {
    if (formData.firstName === '') {
      return setEmpty(1)
    } else if (formData.lastName === '') {
      return setEmpty(2)
    } else if (!validateEmail(formData.email)) {
      return setEmpty(3)
    } else if (formData.gender === '') {
      return setEmpty(4)
    } else if (formData.phoneNum === '') {
      return setEmpty(5)
    } else if (formData.country === '') {
      return setEmpty(6)
    } else if (formData.state === '') {
      return setEmpty(7)
    } else if (formData.city === '') {
      return setEmpty(8)
    } else if (formData.year === '') {
      return setEmpty(9)
    } else if (formData.course === '') {
      return setEmpty(10)
    } else if (formData.studentId === '') {
      return setEmpty(11)
    } else if (formData.alumni === '') {
      return setEmpty(12)
    }
    console.log('form submitted ')
    setEmpty(0)
  }

  console.log(formData.gender)

  return (
    <>
      <InnerNavComponent abc={UserNav} />
      <div className="edit-main">
        <h2 className="account-header">Edit Account</h2>
        <div className="personal-info">Personal Info</div>
        <div className="account-input">
          <>
            <InputComponent
              type="text"
              placeholder="First Name"
              form={formData}
              setField={setFormData}
              keyName="firstName"
            />
            {empty === 1 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter First Name Name!
              </small>
            )}
          </>
          <>
            <InputComponent
              type="text"
              placeholder="Last Name"
              form={formData}
              setField={setFormData}
              keyName="lastName"
            />
            {empty === 2 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Last Name Name!
              </small>
            )}
          </>

          <>
            <InputComponent
              type="email"
              placeholder="Email"
              form={formData}
              setField={setFormData}
              keyName="email"
              blocked={true}
            />
            {empty === 3 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Valid Email!
              </small>
            )}
          </>

          <>
            <select
              name="gender"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="none" selected className='edit-account-gender'>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>

            {empty === 4 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter The Gender!
              </small>
            )}
          </>

          <>
            <InputComponent
              type="text"
              placeholder="Phone Number"
              form={formData}
              setField={setFormData}
              keyName="phoneNum"
            />
            {empty === 5 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter The phone number!
              </small>
            )}
          </>

          <>
            <select
              name="country"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            >
              <option value="none" selected>
                Country
              </option>
              <option value="india">India</option>
              <option value="australia">Australia</option>
              <option value="usa">USA</option>
            </select>

            {empty === 6 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Select the Country!
              </small>
            )}
          </>

          <>
            <select
              name="state"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            >
              <option value="none" selected>
                State
              </option>
              <option value="delhi">delhi</option>
              <option value="mumbai">mumbai</option>
              <option value="kolkata">kolkata</option>
            </select>

            {empty === 7 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Select the Country!
              </small>
            )}
          </>
          <>
            <InputComponent
              type="text"
              placeholder="City"
              form={formData}
              setField={setFormData}
              keyName="city"
            />
            {empty === 8 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter The City!
              </small>
            )}
          </>
        </div>

        <hr />
        <div className="former-input">
          <div className="former-l1">
            <div className="former-p">Are you an alumini?</div>
            <div className="former-radio">
              <p>Yes</p>
              {/* <nbsp /> */}
              <input
                onChange={() => setFormData({ ...formData, alumni: 'yes' })}
                type="radio"
                name="option"
              />
              <p>No</p>
              <input
                onChange={() => setFormData({ ...formData, alumni: 'no' })}
                type="radio"
                name="option"
              />
            </div>
          </div>
          <div className="year-course">
            <div className="year-student">
              <>
                <InputComponent
                  type="text"
                  placeholder="Year"
                  form={formData}
                  setField={setFormData}
                  keyName="year"
                />
                {empty === 9 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    *Please Enter The City!
                  </small>
                )}
              </>
              <>
                <InputComponent
                  type="text"
                  placeholder="studentID"
                  form={formData}
                  setField={setFormData}
                  keyName="studentId"
                />
                {empty === 10 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    *Please Enter The StudentID!
                  </small>
                )}
              </>
            </div>
            <>
              <InputComponent
                type="text"
                placeholder="Course"
                form={formData}
                setField={setFormData}
                keyName="course"
              />
              {empty === 11 && (
                <small style={{ color: 'red', marginLeft: '0' }}>
                  *Please Enter The Course
                </small>
              )}
            </>
          </div>
        </div>
      </div>
      <div className="save-button">
        <span onClick={submitForm}>Save</span>
      </div>
    </>
  )
}

export default EditAccount
