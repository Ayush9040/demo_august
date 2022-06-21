import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CoursePara = ({ content }) => {


  return (
    <div className="course_para">
      <h2>
        <u>
          <b>{content.title}</b>
        </u>
      </h2>
      {content.text.map((point, i) => {
        return <p key={i} >{point}</p>
      })}
    </div>
  )
}

export default CoursePara
