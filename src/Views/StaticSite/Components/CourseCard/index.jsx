import { Link } from 'react-router-dom'
import React from 'react'
// import { star } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
//import SelectDropDown from '../Select Dropdown'
import './style.scss'
import SelectDropDown from '../Select Dropdown'

const CourseCard = ({
  color,
  courseTitle,
  description,
  path,
  img = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/course%20%281%29.png',
}) => {


  const selectStyles = {
    cursor: 'pointer',
    background: color,
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '15%/50%',
    borderStyle: 'solid',
    maxWidth: '130px',
  }



  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={img} />
        {/* <div className="stars">
          {star}
          {star}
          {star}
          {star}
          {star}
        </div> */}
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
          <SelectDropDown text={'Select Dates'} isStyles={ selectStyles } />
        </div>
        <div className="Button-class">
          <Link to={`/courses/course/${path}/`}>
            <CommonBtn text={'View Details'}/>
          </Link>
          <Link to={`/enrollment/${path}/`}>
            <CommonBtn text={'Enrol Now'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
