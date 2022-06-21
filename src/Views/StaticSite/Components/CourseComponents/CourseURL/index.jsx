import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseURL = ({ content }) => {
  return (
    <div className="course_url">
      <p>
        {content.text}
        <a href={content.url}>{content.url}</a>
      </p>
    </div>
  )
}

export default CourseURL
