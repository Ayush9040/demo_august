import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CoursePara = () => {
  const Para = {
    type: 'paragraph',
    content: {
      title: 'Course',
      text: [
        '200 hrs TTC - Batch 1 - 1 Month TTC - Online & On Campus - English',
      ],
    },
  }

  return (
    <div className="course_para">
      <h2>
        <u>
          <b>{Para.content.title}</b>
        </u>
      </h2>
      {Para.content.text.map((point, i) => {
        return <p key={i} >{point}</p>
      })}
    </div>
  )
}

export default CoursePara
