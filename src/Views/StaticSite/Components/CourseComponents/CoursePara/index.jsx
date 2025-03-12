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

  const isSatsangPage = location.pathname?.includes("/ma-yoga-shastra");
  const isBAPage = location.pathname?.includes("/ba-yoga-shastra");

  return (
    <div className="course_para">
      {content?.title && (
        <h2
          className={`sub_heading ${content?.title === 'Apply Now' ? 'apply-now' : ''}`}
          onClick={handleTitleClick}
          style={{ cursor: content?.title === 'Apply Now' ? 'pointer' : 'default' }}
        >
          {(isSatsangPage || isBAPage) && content?.title === 'Apply Now' ? ' ' : content.title} 
         
          {isSatsangPage && content?.title === 'How to Apply' && (
  <>
    {" - "}
    <a href="/enrollment/ma-yoga-shastra">Apply Now</a>
  </>
)}

{isSatsangPage && content?.title === 'Apply Now' && (
  <>
  
    <a href="/enrollment/ma-yoga-shastra">Apply Now</a>
  </>
)}

{isBAPage && content?.title === 'How to Apply' && (
  <>
    {" - "}
    <a href="/enrollment/ba-yoga-shastra">Apply Now</a>
  </>
)}

{isBAPage && content?.title === 'Apply Now' && (
  <>
  
    <a href="/enrollment/ba-yoga-shastra">Apply Now</a>
  </>
)}



        </h2>
      )}
      {content.text.map((point, i) => (
        <p className="para" key={i}>{point}</p>
      ))}
    </div>
  )
}

export default CoursePara