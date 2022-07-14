import { Link } from 'react-router-dom'
import React from 'react'

import CommonBtn from '../commonbtn'
//import SelectDropDown from '../Select Dropdown'
import './style.scss'
import SelectDropDown from '../Select Dropdown'
//import { useEffect } from 'react'
//import StarIcon from './star-icon'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons'

// const Error = () => {
//   <small style={{ color: 'red', marginLeft: '0' }}>
//     *Please Enter Your 10 Digit Phone Number!
//   </small>
// }



const CourseCard = ({
  color,
  courseTitle,
  description,
  path,
  img = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/course%20%281%29.png',
  //rating = 5,
  dates = [],
}) => {

  console.log(img,'card-img')

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
  const [error,setError]=useState(0)

 

  // useEffect(() => {
  //   let arr = []
  //   for (let i = 0; i < rating; i++) {
  //     arr[i] = i
  //     setRatingArr(arr)
  //   }
  // }, [])

  const [selectDate, setSetselectDate] = useState(null)
  // localStorage.setItem('selectedDate', selectDate)

  const checkEmpty =()=>{
    if(dates.length!==0){
      if(selectDate===null)
      {
        setError(1)
      }
      else{
        setError(0)
      }}
  }

  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={img} />
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
        <h4>{courseTitle}</h4>
        <h3>{ description.slice(0,90) }...</h3>
        {/* <SelectDropDown currentValue={selectDate} changeCurrentValue={setSetselectDate} text={'Select Dates'} isStyles={selectStyles} /> */}
        <div className="course-card-dropdown">
          <div style={dates.length!==0 ? { visibility:'visible' }:{ visibility:'hidden' }} ><SelectDropDown
            currentValue={selectDate}
            changeCurrentValue={setSetselectDate}
            text={'Select Dates'}
            isStyles={selectStyles}
            dates={dates}
          /></div>
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
                ? `/courses/course/${path}/`
                : `/courses/course/${path}/?date=${selectDate}`
            }
          >
            <CommonBtn text={'View Details'} />
          </Link>
          <div onClick={checkEmpty}>
            {dates.length!==0 ? 
              (selectDate ? (
                <Link
                  to={
                    isLoggedIn
                      ? `/enrollment/${path}/?date=${selectDate}`
                      : `/user/sign-in/${path}/?date=${selectDate}`
                  }
                >
                  <CommonBtn text={'Enroll Now'} />
                </Link>
              ) : (
                <CommonBtn text={'Enroll Now'} />
              )):( <Link
                to={
                  isLoggedIn
                    ? `/enrollment/${path}/?date=${selectDate}`
                    : `/user/sign-in/${path}/?date=${selectDate}`
                }
              >
                <CommonBtn text={'Enroll Now'} />
              </Link>)}
          </div>
        </div>
      </div>
      {error===1 && <small style={{ color: 'red', marginLeft: '0' }}>
                        *Please Select Date!
      </small>}
    </div>
  )
}

export default CourseCard
