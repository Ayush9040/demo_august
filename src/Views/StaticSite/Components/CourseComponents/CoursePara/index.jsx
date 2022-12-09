import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CoursePara = ({ content }) => {


  return (
    <div className="course_para">
      {content.title && <h2 className='sub_heading' >
        {content.title}
      </h2>}
      {content.text.map((point, i) => {
        return <p className='para' key={i} >{point}</p>
      })}
    </div>
  )
}

export default CoursePara
