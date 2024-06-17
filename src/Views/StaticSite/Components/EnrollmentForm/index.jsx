import React, { useState, useEffect } from 'react'
import './formstyles.scss'
// import { courseArray } from '../../Constants/courses/c200hr'
import { AllCourses } from '../../Views/Courses/Constants/courses'
import { useParams } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import { Link, useSearchParams } from 'react-router-dom'
import DisclaimerPolicy from '../DisclaimerPolicy'
import { useSelector } from 'react-redux'
import Personal from './Personal'
import { legacy2 } from '../../assets/icons/icon'

const Enrollment = () => {
  const { user } = useSelector((state) => state.auth)
  const { courseId } = useParams()
  const [currentCourse, setCurrentCourse] = useState({})
  const [courseDate, setCourseDate] = useState(null)
  const [Params] = useSearchParams()

  useEffect(() => {
    setCurrentCourse(AllCourses.find((item) => item.key === courseId))
    setCourseDate(Params.get('date'))
    console.log(currentCourse)
    // setDate(
    //   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    // )
  }, [])

  const [empty, setEmpty] = useState(0)
  const [courseFee, setCourseFee] = useState(null)
  const [bold, setBold] = useState(0)
  const [listData, setListData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [courseAsset1, setCourseAsset1] = useState(null)
  const [courseAsset2, setCourseAsset2] = useState(null)
  const [uploadCheck, setUploadCheck] = useState(true)
  const [formData, setFormData] = useState({
    name: user?.data?.firstName,
    phone: '',
    email: user?.data?.email,
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    AGE: '',
    nationality: '',
    gender: '',
    school: '',
    course: '',
    completion: '',
    company: '',
    worktill: '',
    workfrom: '',
    leavejob: '',
    resignation: '',
    medicalstatus: '',
    sourceinfo: '',
    source: '',
    purpose: '',
    info: '',
    mode: '',
    residental: '',
  })

  const handleEmpty1 = (e) => {
    e.preventDefault()
    // if (
    //   formData.name === '' ||
    //   formData.name === undefined ||
    //   formData.name === null
    // ) {
    //   return setEmpty(1)
    // } else if (
    //   formData.phone === '' ||
    //   formData.phone.length < 6 ||
    //   formData.phone.length > 15
    // ) {
    //   return setEmpty(3)
    // } else if (!validateEmail(formData.email)) {
    //   return setEmpty(2)
    // } else if (formData.address1 === '') {
    //   return setEmpty(4)
    // } else if (formData.country === '') {
    //   return setEmpty(5)
    // } else if (formData.pincode === '') {
    //   return setEmpty(8)
    // } else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
    //   return setEmpty(9)
    // } else if (formData.nationality === '') {
    //   return setEmpty(10)
    // } else if (formData.gender === '') {
    //   return setEmpty(11)
    // } else {
    //   setEmpty(0)
    //   setBold(4)
    // }
  }
  
  const handleSubmit = () => {
    if (
      formData.name === '' ||
      formData.name === undefined ||
      formData.name === null
    ) {
      setEmpty(1)
    } else if (
      formData.phone === '' ||
      formData.phone.length < 6 ||
      formData.phone.length > 15
    ) {
      setEmpty(3)
    } else if (!validateEmail(formData.email)) {
      setEmpty(2)
    } else if (formData.address1 === '') {
      setEmpty(4)
    } else if (formData.country === '' ) {
      setEmpty(5)
    } else if (formData.pincode === '') {
      setEmpty(8)
    }
    //  else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
    //   setEmpty(9)
    // } else if (formData.nationality === '') {
    //   setEmpty(10)
    // }
    else if (formData.gender === '') {
      setEmpty(11)
    } else if (formData.mode === '') {
      setEmpty('mode')
    }
    else if (
      formData.mode === 'OFFLINE' &&
      (currentCourse.residential === true ||
        currentCourse.nonResidential === true)
    ) {
      if (formData.residental === '') {
        setEmpty('subMode')
      } else {
        setBold(5)
      }
    } else if (
      currentCourse.certficate === true &&
      (courseAsset2 === '' || courseAsset2 === null)
    ) {
      setEmpty('certificate')
    } else {
      setBold(5)
    }
  }

  return (
    <>
      <div className="enrollment_container ">
        {bold < 5 && (
          <div className="header">
            <Link to="/courses">
              <button className="x">x</button>
            </Link>
            <span className="flower">{legacy2}</span>

            <div className="student">Student Enrollment</div>

            {/* <ul className="header_ul">
            <li
              style={
                bold === 0 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={() => setBold(0)}
            >
              {' '}
              Personal Details{' '}
              {bold === 0 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 1 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={handleEmpty1}
            >
              Academic Qualifications{' '}
              {bold === 1 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 2 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={handleEmpty2}
            >
              Work Experience{' '}
              {bold === 2 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 3 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={() => setBold(3)}
            >
              Other{bold === 3 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 4 ? { fontWeight: 600, fontSize: '2.5rem' } : {}}
              onClick={handleEmpty4}
            >
              Course Details
              {bold === 4 && <div className="bottom-line"></div>}
            </li>
          </ul> */}
          </div>
        )}

        {bold === 0 ? (
          <>
            <Personal
              setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              handleEmpty1={handleEmpty1}
              setEmpty={setEmpty}
              courseDate={courseDate}
              currentCourse={currentCourse}
              courseAsset1={courseAsset1}
              setCourseAsset1={setCourseAsset1}
              courseAsset2={courseAsset2}
              setCourseAsset2={setCourseAsset2}
              handleSubmit={handleSubmit}
              courseFee={courseFee}
              setCourseFee={setCourseFee}
              uploadCheck={uploadCheck}
              setUploadCheck={setUploadCheck}
            />
          </>
        ) : null}

        {bold === 5 ? (
          <>
            <DisclaimerPolicy
              templateKey={currentCourse?.templateId}
              formData={formData}
              qualificationData={qualificationData}
              listData={listData}
              currentCourse={currentCourse}
              courseAsset1={courseAsset1}
              courseAsset2={courseAsset2}
              setBold={setBold}
              courseFee={courseFee}
              courseDate={courseDate}
              setListData={setListData}
              setQualificationData={setQualificationData}
            />
          </>
        ) : null}
      </div>
    </>
  )
}

export default Enrollment
