import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseQuote = ({ content }) => {


  return (
    <div className="course_quote">
      <p>
        <b>
          <u>{content.title}</u>
        </b>
      </p>
      <q>{content.text}</q>
    </div>
  )
}

export default CourseQuote
