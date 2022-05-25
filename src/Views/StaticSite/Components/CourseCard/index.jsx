import { Link } from 'react-router-dom'
import React from 'react'
import { star } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import './style.scss'

const CourseCard = ({
  color,
  courseTitle,
  description,
  path,
  img = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/course%20%281%29.png',
}) => {
  console.log(color, 'clr')
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
        <Link to={`/courses/${path}/`}>
          <CommonBtn text={'Explore'} />
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
