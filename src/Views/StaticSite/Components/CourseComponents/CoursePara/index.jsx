import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../Components/CourseComponents/style.scss'

const CoursePara = ({ content }) => {
  const navigate = useNavigate()

  const handleTitleClick = () => {
    if (content?.title === 'Apply Now') {
      navigate('/user/sign-in/?location=ma-yoga-shastra&date=null')
    }
  }

  return (
    <div className="course_para">
      {content?.title && (
        <h2
          className={`sub_heading ${content?.title === 'Apply Now' ? 'apply-now' : ''}`}
          onClick={handleTitleClick}
          style={{ cursor: content?.title === 'Apply Now' ? 'pointer' : 'default' }}
        >
          {content.title}
        </h2>
      )}
      {content.text.map((point, i) => (
        <p className="para" key={i}>{point}</p>
      ))}
    </div>
  )
}

export default CoursePara