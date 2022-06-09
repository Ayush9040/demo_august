import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { star } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import SelectDropDown from '../Select Dropdown'
import './style.scss'


const CourseCard = ({
  color,
  courseTitle,
  description,
  path,
  img = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/course%20%281%29.png',
}) => {
  console.log(color, 'clr')
  
  const selectStyles = {
    width : 'max-content',
    background : 'rgb(227, 143, 115)',
    border : '3px solid white',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    outline: 'none',
    cursor: 'pointer'
  }
  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={img} />
        <div className="stars">
          {star}
          {star}
          {star}
          {star}
          {star}
        </div>
      </div>
      <div
        className="course-card-content"
        style={{
          background: color,
        }}
      >
        <h4>{courseTitle}</h4>
        <h3>
          {description?.length > 40
            ? description?.substring(0, 40)+'...'
            : description}
        </h3>
        <SelectDropDown text = {'Select Dates'} isStyles = {selectStyles} />
        <div className='Button-class'>
          <Link to={`/courses/${path}/`}>
            <CommonBtn text={'View Details'} />
          </Link>
          <CommonBtn text={'Enroll Now'} />
        </div> 
      </div>
    </div>
  )
}

export default CourseCard
