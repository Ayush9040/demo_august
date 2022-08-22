import React, { useState, useEffect } from 'react'
import './formstyles.scss'
// import { courseArray } from '../../Constants/courses/c200hr'
import { AllCourses } from '../../Views/Courses/Constants/courses'
import { useParams } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import { Link, useSearchParams } from 'react-router-dom'
import DisclaimerPolicy from '../DisclaimerPolicy'
import { useSelector } from 'react-redux'
import Other from './Other'
import CourseDetails from './CourseDetails'
import Academic from './Academic'
import Personal from './Personal'
import Work from './Work'
import { legacy2 } from '../../assets/icons/icon'

const Enrollment = () => {
  const { user } = useSelector((state) => state.auth)
  const { courseId } = useParams()
  const [currentCourse, setCurrentCourse] = useState({})
  const [courseDate, setCourseDate] = useState(null)
  const[Params]= useSearchParams()
  //const [date, setDate] = useState('')

  useEffect(() => {
    setCurrentCourse(AllCourses.find((item) => item.key === courseId))
    setCourseDate(Params.get('date'))
    // setDate(
    //   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    // )
  }, [])

  // var today = new Date()

  const [empty, setEmpty] = useState(0)
  const [ courseFee,setCourseFee ]=useState(null)
  const [bold, setBold] = useState(0)
  const [yearEmpty, setYearEmpty] = useState(0)
  const [resgin, setResgin] = useState(0)
  const [listData, setListData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [courseAsset1, setCourseAsset1] = useState(null)
  const [courseAsset2, setCourseAsset2] = useState(null)
  const [formData, setFormData] = useState({
    name: user?.data?.firstName,
    phone: '',
    email:  user?.data?.email,
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
    mode:'',
    residental: '',
  })

  const listDetailHandler = (e) => {
    e.preventDefault()
    if (formData.workfrom.length !== 4) {
      return setResgin(1)
    } else if (formData.worktill.length !== 4) {
      return setResgin(2)
    } else
      setListData([
        ...listData,
        {
          companyName: formData.company,
          roleWhenLeaving: formData.leavejob,
          workFrom: formData.workfrom,
          workTill: formData.worktill,
          listedWorkExperience: formData.leavejob,
        },
      ])
    setFormData({
      ...formData,
      //  resignation: '',
      company: '',
      leavejob: '',
      workfrom: '',
      worktill: '',
    })
  }

  const QualificationDetailHandler = () => {
    if (formData.school === '') {
      setYearEmpty(1)
    } else if (formData.course === '') {
      setYearEmpty(2)
    } else if (formData.completion.length !== 4) {
      return setYearEmpty(3)
    } else
      setQualificationData([
        ...qualificationData,
        {
          schoolOrCollege: formData.school,
          course: formData.course,
          yearOfCompletion: formData.completion,
          listedQualification: formData.course,
        },
      ])
    setEmpty(0)
    setFormData({ ...formData, school: '', course: '', completion: '' })
  }

  const handleEmpty1 = (e) => {
    e.preventDefault()
    if (formData.name === '' || formData.name===undefined || formData.name===null ) {
      return setEmpty(1)
    } else if (
      formData.phone === '' ||
      formData.phone.length < 6 ||
      formData.phone.length > 15
    ) {
      return setEmpty(3)
    } else if (!validateEmail(formData.email)) {
      return setEmpty(2)
    } else if (formData.address1 === '') {
      return setEmpty(4)
    } else if (formData.country === '') {
      return setEmpty(5)
    } else if (formData.state === '') {
      return setEmpty(6)
    } else if (formData.city === '') {
      return setEmpty(7)
    } else if (formData.pincode === '') {
      return setEmpty(8)
    } else if (formData.AGE === null||formData.AGE<4 || formData.AGE>99) {
      return setEmpty(9)
    } else if (formData.nationality === '') {
      return setEmpty(10)
    } else if (formData.gender === '') {
      return setEmpty(11)
    } else {
      setEmpty(0)
      setBold(1)
    }
  }

  const handleEmpty2 = () => {
    if (qualificationData.length === 0) {
      if (formData.school === '') {
        setYearEmpty(1)
      } else if (formData.course === '') {
        setYearEmpty(2)
      } else if (formData.completion.length !== 4) {
        return setYearEmpty(3)
      } else{
        setQualificationData([
          ...qualificationData,
          {
            schoolOrCollege: formData.school,
            course: formData.course,
            yearOfCompletion: formData.completion,
            listedQualification: formData.course,
          },
        ])
        setEmpty(0)
        setFormData({ ...formData, school: '', course: '', completion: '' })
        setBold(2)
      } 
    }
    else{
      setEmpty(0)
      setBold(2)
    }
  }

  const handleEmpty3 = (e) => {
    e.preventDefault()
    if (formData.workfrom.length !== 0 && (formData.workfrom.length > 4 || formData.workfrom.length < 4 )) {
      return setResgin(1)
    } else if (formData.worktill.length !== 0 && (formData.worktill.length > 4 || formData.worktill.length < 4 )) {
      return setResgin(2)
    } else{
      setListData([
        ...listData,
        {
          companyName: formData.company,
          roleWhenLeaving: formData.leavejob,
          workFrom: formData.workfrom,
          workTill: formData.worktill,
          listedWorkExperience: formData.leavejob,
        },
      ])
      setBold(3)
    }
    setFormData({
      ...formData,
      //  resignation: '',
      company: '',
      leavejob: '',
      workfrom: '',
      worktill: '',
    })
  }
  const handleEmpty4 = () => {
    if (formData.source === '') {
      if (formData.sourceinfo === '') {
        return setEmpty(2)
      }
    } else setBold(4)
  }

  const handleSubmit = () => {
    if(formData.mode===''){
      setEmpty('mode')
    }
    else if(formData.mode==='ONLINE'){
      setBold(5)
    }
    else if(formData.mode==='OFFLINE' && (currentCourse.residential===true || currentCourse.nonResidential===true)){
      if(formData.residental===''){
        setEmpty('subMode')
      }
      else{
        setBold(5)
      }
    
    }
    else if( currentCourse.certficate === true && (courseAsset2 ==='' || courseAsset2 === null) ){
      setEmpty('certificate')
    }    
    else{
      setBold(5)
    }
    
  }

  return (
    <>
      <div className="enrollment_container ">
        {bold<5 && <div className="header">
          <Link to="/courses">
            <button className="x">x</button>
          </Link>
          <span className="flower">{legacy2}</span>

          <div className="student">Student Enrollment</div>

          <ul className="header_ul">
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
          </ul>
        </div>}

        {bold === 0 ? (
          <>
            <Personal
              setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              handleEmpty1={handleEmpty1}
              setEmpty={setEmpty}
            />
          </>
        ) : bold === 1 ? (
          <>
            <Academic
              setBold={setBold}
              empty={empty}
              formData={formData}
              yearEmpty={yearEmpty}
              setYearEmpty={setYearEmpty}
              setFormData={setFormData}
              handleEmpty2={handleEmpty2}
              qualificationData={qualificationData}
              QualificationDetailHandler={QualificationDetailHandler}
            />
          </>
        ) : bold === 2 ? (
          <>
            <>
              <Work
                setBold={setBold}
                empty={empty}
                formData={formData}
                resgin={resgin}
                setFormData={setFormData}
                handleEmpty3={handleEmpty3}
                setYearEmpty={setYearEmpty}
                yearEmpty={yearEmpty}
                listDetailHandler={listDetailHandler}
                listData={listData}
              />
            </>
          </>
        ) : bold === 3 ? (
          <>
            <Other
              setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              handleEmpty4={handleEmpty4}
            />
          </>
        ) : bold === 4 ? (
          <CourseDetails
            courseDate={courseDate}
            currentCourse={currentCourse}
            formData={formData}
            setFormData={setFormData}
            courseAsset1={courseAsset1}
            setCourseAsset1={setCourseAsset1}
            courseAsset2={courseAsset2}
            setCourseAsset2={setCourseAsset2}
            setBold={setBold}
            handleSubmit={handleSubmit}
            empty={empty}
            setEmpty={setEmpty}
            courseFee={courseFee}
            setCourseFee={setCourseFee}
          />
        ) : (
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
            courseDate={ courseDate }
          />
        )}
      </div>
    </>
  )
}

export default Enrollment
