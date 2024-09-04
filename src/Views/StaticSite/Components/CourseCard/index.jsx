import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

import CommonBtn from '../commonbtn'
//import SelectDropDown from '../Select Dropdown'
import './style.scss'
import SelectDropDown from '../Select Dropdown'
//import { useEffect } from 'react'
//import StarIcon from './star-icon'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { handleCTCourseClick, handleCTEnrollNowClick } from '../../../../CleverTap/buttonClicked';
// import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons'

// const Error = () => {
//   <small style={{ color: 'red', marginLeft: '0' }}>
//     *Please Enter Your 10 Digit Phone Number!
//   </small>
// }



const CourseCard = ({
  color,
  key,
  courseTitle,
  description,
  path,
  img = 'https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/Courses/course%20%281%29.png',
  //rating = 5,
  dates = [],
  fees,
  timing,
  category,
  batch,
  nonResidential,
  residential,
  online
}) => {

  const coursesList = [
    {
      id: 1,
      ques: '200 hours TTC (Basic)',
      ans: [
        {
          url: '/one-month-ttc',
          text: ' 1 Month TTC Online & On Campus - English - Batch 1 ',
        },
        {
          url: '/200-hrs-part-time-ttc-on-campus-english',
          text: '2 Months TTC Online & On Campus – English - Batch 2',
        },
        {
          url: '/200-hrs-part-time-ttc-online-english',
          text: '2 Months TTC Online – English - Batch 3 ',
        },
        {
          url: '/200-hrs-part-time-ttc-online',
          text: '2 Months TTC Online – Hindi - Batch 4 ',
        },
        {
          url: '/weekend-teacher-training-course',
          text: '3 Months Weekend TTC Online – English - Batch 5',
        },
        {
          url: '/200-hrs-part-time-ttc-online-english-batch-6',
          text: '2 Months TTC Online – English - Batch 6',
        },
        // /200-hrs-part-time-ttc-online-english-batch-5
      ],
    },
    {
      id: 2,
      ques: '500 Hours TTC (Intermediate)',
      ans: [
        {
          url: '/500-hrs-online-yoga-teacher-training-course-intermediate-level',
          text: ' 3 Months TTC - Online - English',
        },
      ],
    },
    {
      id: 3,
      ques: '900 Hour Courses',
      ans: [
        {
          url: '/3-months-advanced-teacher-training-course',
          text: '3 Months TTC-On Campus-English',
        },
        {
          url: '/900-hours-advanced-teacher-training-course',
          text: '4 Months TTC-Online-English',
        },
        {
          url: '/seven-month-ttc',
          text: '7 Months TTC-Online & On Campus-English',
        },
        { url: '/one-year-ttc', text: '1 Year TTC-Online & On Campus-Hindi' },
        {
          url: '/two-year-ttc',
          text: '2 Years TTC-Online & On Campus-English',
        },
      ],
    },
  ]
  const campsAccordian = [
    {
      id: 1,
      ques: '21 Days Better Living Course',
      ans: [
        {
          url: '/21-days-better-living-course',
          text: 'Morning On Campus – English - Batch 1',
        },
        {
          url: '/21-days-better-living-course-batch-2',
          text: 'Evening - Online & On Campus – English - Batch 2',
        },
        {
          url: '/21-days-better-living-course-batch-3',
          text: 'Evening - Online & On Campus – Hindi - Batch 3',
        },
        // {
        //   url: '/21-days-better-living-course-batch-4',
        //   text: 'Morning - Online – English - Batch 4',
        // },
      ],
    },
    {
      id: 2,
      ques: '7 Days Health Camp',
      ans: [
        {
          url: '/7-days-camp',
          text: '7 Days Health Camp - On Campus - Hindi',
        },
        {
          url: '/7-days-camp-english',
          text: '7 Days Health Camp - On Campus - English',
        },
      ],
    },
  ]



  const selectStyles = {
    cursor: 'pointer',
    background: color,
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
  }
  // const [ratingArr, setRatingArr] = useState([])
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [error, setError] = useState(0)



  // useEffect(() => {
  //   let arr = []
  //   for (let i = 0; i < rating; i++) {
  //     arr[i] = i
  //     setRatingArr(arr)
  //   }
  // }, [])
  const navigate = useNavigate()

  const [selectDate, setSetselectDate] = useState('null')//null
  // localStorage.setItem('selectedDate', selectDate)

  const checkEmpty = () => {
    if (dates.length !== 0) {
      if (selectDate === null) {
        setError(0)//1
      }
      else {
        setError(0)
      }
    }
  }

  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={img} alt={courseTitle} onClick={() => { navigate(`/${path}`) }} />
        {/* <div className="stars">
          {ratingArr.length !== 0 &&
            ratingArr.map((item, id) => <StarIcon key={id} />)}
        </div> */}
      </div>
      <div
        className="course-card-content"
        style={{
          background: `${color}`,
        }}
      >
        {/* <h4>{courseTitle?.slice(0, 55)}...</h4> */}
        <h4>{courseTitle}</h4>
        <h3>{description?.slice(0, 90)}...</h3>
        {/* <SelectDropDown currentValue={selectDate} changeCurrentValue={setSetselectDate} text={'Select Dates'} isStyles={selectStyles} /> */}
        <div className="course-card-dropdown">
          {/* <div style={dates.length !== 0 ? { visibility: 'visible' } : { visibility: 'hidden' }} ><SelectDropDown
            currentValue={selectDate}
            changeCurrentValue={setSetselectDate}
            text={'Select Date/Time'}
            isStyles={selectStyles}
            dates={dates}
          /></div> */}
          {/* <SelectDropDown
            dates={dates}
            text={'Select Dates'}
            isStyles={selectStyles}
          /> */}
        </div>
        <div className="Button-class">
          <Link
            to={
              selectDate === null
                ? `/${path}`
                : `/${path}`///?date=${selectDate}
            }
          >
            <CommonBtn text={'View Details'} buttonAction={() => handleCTCourseClick({
              courseTitle,
              description,
              key,
              fees,
              timing,
              category,
              batch,
              coursesList,
              nonResidential,
              residential,
              online
            })}/>
          </Link>
          <div onClick={checkEmpty}>
            {dates.length !== 0 ?
              (selectDate ? (
                <Link
                  to={
                    isLoggedIn
                      ? `/enrollment/${path}`///?date=${selectDate}
                      : `/user/sign-in/?location=${path}`//&date=${selectDate}
                  }
                >
                  <CommonBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
              courseTitle,
              fees,
              timing,
              category,
              batch,
              nonResidential,
              residential,
              online
            })} />
                </Link>
              ) : (
                <CommonBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
                  courseTitle,
                  fees,
                  timing,
                  category,
                  batch,
                  nonResidential,
                  residential,
                  online
                })} />
              )) : (path !== 'nutri-diet' ? <Link
                to={
                  isLoggedIn
                    ? `/enrollment/${path}` ///?date=${selectDate}
                    : `/user/sign-in/?location=${path}`//&date=${selectDate}
                }
              >
                <CommonBtn text={'Enroll Now'} />
              </Link> : <Link to='/nutri-diet' ><CommonBtn text={'Enroll Now'} /></Link>)}
          </div>
        </div>
      </div>
      {error === 1 && <small style={{ color: 'red', marginLeft: '0' }}>
        *Please Select Date/Time!
      </small>}
    </div>
  )
}

export default CourseCard
