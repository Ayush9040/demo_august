import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseQuote = ({ content }) => {


  return (
    <div className="course_quote">
      {content.title && <h2 className='sub_heading' >
        {content.title}
      </h2>}
      <q>{content.text}</q>
    </div>
  )
}

export default CourseQuote
