import { Link } from 'react-router-dom'
import React from 'react'

import CommonBtn from '../commonbtn'
//import SelectDropDown from '../Select Dropdown'
import './style.scss'
import SelectDropDown from '../Select Dropdown'
import { useEffect } from 'react'
import StarIcon from './star-icon'
import { useState } from 'react'

const CourseCard = ({
  color,
  courseTitle,
  description,
  path,
  img = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/course%20%281%29.png',
  rating=5,
  dates=[]
}) => {


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
  const [ratingArr,setRatingArr] = useState([])

  useEffect(()=>{
    let arr =[]
    for (let i = 0; i < rating; i++) {
      arr[i]=i
      setRatingArr(arr)
    }
  },[])

  

  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={img} />
        <div className="stars">
          {ratingArr.length!==0 && ratingArr.map((item,id)=><StarIcon key={id} />)}
        </div>
      </div>
      <div
        className="course-card-content"
        style={{
          background: `${color}`,
        }}
      >
        <h4>{courseTitle}</h4>
        <h3>
          {description}
        </h3>
        {/* <SelectDropDown text = {'Select Dates'} isStyles = {selectStyles} /> */}
        <div className="course-card-dropdown">
          <SelectDropDown dates={dates} text={'Select Dates'} isStyles={ selectStyles } />
        </div>
        <div className="Button-class">
          <Link to={`/courses/course/${path}/`}>
            <CommonBtn text={'View Details'}/>
          </Link>
          <Link to={`/user/sign-in/${path}/`}>
            <CommonBtn text={'Enroll Now'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
