import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//import { validateEmail } from '../../../../helpers'
import InnerNavComponent from '../InnerNavComponent'
import InputComponent from '../InputComponent'
import axios from 'axios'
import './style.scss'
import MessageModal from '../MessageModal'
import { authBaseDomain } from '../../../../Constants/appSettings'
import { useEffect } from 'react'
import { fetchUserData } from '../../Views/Authentication/Auth.actions'
const EditAccount = () => {

  const { user } = useSelector(state=>state.auth)
  const [showAlumniFields, setShowAlumniFields] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    year: '',
    course: '',
    studentId:'',
    alumni: '',
    company: '',
    profession: '',
    passport: '',
    dateOfBirth: '',
    nationality: '',
    pan: '',
  })

  useEffect(()=>{
    fetchUserData()
  },[])

  const dateStr = user.data?.dateOfBirth;
const dateObj = new Date(dateStr);
let formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;

if (isNaN(new Date(formattedDate).getTime())) {
  formattedDate = '';
}

  useEffect(()=>{
    setFormData({
      ...formData,
      firstName: user.data?.firstName || '',
      lastName: user.data?.lastName || '',
      gender: user.data?.gender || '',
      phoneNumber: user.data?.phoneNumber || '',
      country: user.data?.country || '',
      state: user.data?.state || '',
      city: user.data?.city || '',
      year: user.data?.year || '',
      course: user.data?.course || '',
      studentId: user.data?.studentId || '',
      alumni: user.data?.alumni || false ,
      company: user.data?.company || '',
      profession: user.data?.profession || '',
      passport: user.data?.passport || '',
      dateOfBirth: formattedDate  || '',
      nationality: user.data?.nationality || '',
      pan: user.data?.pan || '', 
    })
    setShowAlumniFields(user.data?.alumni);
  },[user])

  const [empty, setEmpty] = useState(0)
  const [ modal,setModal ]=useState(false)
  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [
    ],
  }





  const submitForm = async() => {

    if (formData.phoneNumber === '') {
      return setEmpty(5)
    }
    // if (formData.firstName === '') {
    //   return setEmpty(1)
    // } else if (formData.lastName === '') {
    //   return setEmpty(2)
    // } else if (formData.gender === '') {
    //   return setEmpty(4)
    // } else if (formData.phoneNumber === '') {
    //   return setEmpty(5)
    // } else if (formData.country === '') {
    //   return setEmpty(6)
    // } else if (formData.state === '') {
    //   return setEmpty(7)
    // } else if (formData.city === '') {
    //   return setEmpty(8)
    // }
    // } else if (formData.year === '') {
    //   return setEmpty(9)
    // } else if (formData.course === '') {
    //   return setEmpty(10)
    // } else if (formData.studentId === '') {
    //   return setEmpty(11)
    // } else if (formData.alumni === '') {
    //   return setEmpty(12)
    // }
    else{
      setEmpty(0)
      try{
        let token = localStorage.getItem('authToken')
        await axios.put(`${ authBaseDomain }/user/update`,formData,  {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setModal('success')
      }catch(err){
        setModal('error')
      }
    }
  }

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
              errorCheck={setEmpty}
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
              errorCheck={setEmpty}
            />
            {empty === 2 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Last Name Name!
              </small>
            )}
          </>

          <>
            <input
              type="email"
              placeholder="Email"
              value={user.data?.email}
              className='email-field'
              disabled
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
              <option disabled selected className='edit-account-gender'>
                Gender
              </option>
              <option selected={ formData.gender==='Male' } value="Male">Male</option>
              <option selected={ formData.gender === 'female' } value="female">Female</option>
              <option selected={ formData.gender === 'other' } value="other">other</option>
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
              keyName="phoneNumber"
              readOnly
            />
            {empty === 5 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter The phone number!
              </small>
            )}
          </>

          <>
            <InputComponent
              type="text"
              placeholder="Country"
              form={formData}
              setField={setFormData}
              keyName="country"
            />

            {empty === 6 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Select the Country!
              </small>
            )}
          </>

          <>
            <InputComponent
              type="text"
              placeholder="State"
              form={formData}
              setField={setFormData}
              keyName="state"
            />

            {empty === 7 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Select the State!
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



        {/* New Fields Added */}

        <hr />


        <div className="account-input">
          <>
            <InputComponent
              type="text"
              placeholder="Company"
              form={formData}
              setField={setFormData}
              keyName="company"
              errorCheck={setEmpty}
            />
            {empty === 1 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Company
              </small>
            )}
          </>
          <>
            <InputComponent
              type="text"
              placeholder="Profession"
              form={formData}
              setField={setFormData}
              keyName="profession"
              errorCheck={setEmpty}
            />
            {empty === 2 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Profession!
              </small>
            )}
          </>


          <>
            <InputComponent
              type="text"
              placeholder="Passport"
              form={formData}
              setField={setFormData}
              keyName="passport"
            />
            {empty === 15 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Passport!
              </small>
            )}
          </>

          <>
            <InputComponent
              type="text"
              placeholder="DOB"
              form={formData}
              setField={setFormData}
              keyName="dateOfBirth"
            />

            {empty === 6 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter DOB!
              </small>
            )}
          </>

          <>
            <InputComponent
              type="text"
              placeholder="Nationality"
              form={formData}
              setField={setFormData}
              keyName="nationality"
            />

            {empty === 7 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter Nationality!
              </small>
            )}
          </>
          <>
            <InputComponent
              type="text"
              placeholder="PAN"
              form={formData}
              setField={setFormData}
              keyName="pan"
            />
            {empty === 8 && (
              <small style={{ color: 'red', marginLeft: '0' }}>
                *Please Enter The PAN!
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
              checked={formData.alumni === true}
                onChange={() => {
                  setFormData({ ...formData, alumni: true })
                  setShowAlumniFields(true);
                }}
                type="radio"
                name="option"
                
              />
              <p>No</p>
              <input
              checked={formData.alumni === false}
                onChange={() => {
                  setFormData({ ...formData, alumni: false })
                  setShowAlumniFields(false);
                }}
                type="radio"
                name="option"
                
              />
            </div>
          </div>
          {showAlumniFields && (
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
                    *Please Enter The Year!
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
          )}
          
        </div>
      </div>
      <div className="save-button" onClick={submitForm} >
        <span>Save</span>
      </div>
      { modal!==false && (modal === 'success' ? <MessageModal type='SUCCESSS' message='Details Updated successfully!' closePopup={ setModal } /> : <MessageModal type='ERROR' message='Sorry! Please contact info@theyogaintitute.org' closePopup={ setModal }/>) }
    </>
  )
}

export default EditAccount
