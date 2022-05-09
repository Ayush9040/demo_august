import { Link } from 'react-router-dom'
import React from 'react'
import { star } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import './style.scss'

const CourseCard = ({ color, index, courseTitle }) => {
  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/course%20%281%29.png' />
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
          background: color + `${index === 0 ? 'B3' : index === 1 ? 'CC' : ''}`,
        }}
      >
        <h4>{courseTitle}</h4>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          ndustry.
        </h3>
        <Link to="/courses/course-name/">
          <CommonBtn text={'Explore'} />
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
