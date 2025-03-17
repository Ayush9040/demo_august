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
    <a href="/enrollment/ma-yoga-shastra" style={{color: 'blue', textDecoration: 'underline'}}>Apply Now</a>
  </>
)}

{isSatsangPage && content?.title === 'Apply Now' && (
  <>
  
    <a href="/enrollment/ma-yoga-shastra" style={{
      width: 'max-content',
      backgroundColor: '#FFE3DE',
      boxShadow: '2px 3px 9px 0px rgba(0, 0, 0, 0.1019607843)',
      color: '#C9705F',
      padding: '1.5rem',
      borderRadius: '5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      // marginTop: '2.3rem',
      cursor: 'pointer',
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      // marginLeft: '0.5rem',
    }}>Apply Now     
    
    
    <span style={{display: 'flex'}}><svg className='img' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1493 0L7.78906 2.70472L13.2837 9L7.78906 15.2953L10.1493 18L18.002 9L10.1493 0Z" fill="#C9705F" />
          <path d="M2.36026 18L10.2129 9L2.36026 0L0 2.70472L5.49466 9L0 15.2953L2.36026 18Z" fill="#C9705F" />
        </svg></span>
    
    </a>
  </>
)}

{isBAPage && content?.title === 'How to Apply' && (
  <>
    {" - "}
    <a href="/enrollment/ba-yoga-shastra" style={{color: 'blue', textDecoration: 'underline'}}>Apply Now</a>
  </>
)}

{isBAPage && content?.title === 'Apply Now' && (
  <>
  
    <a href="/enrollment/ba-yoga-shastra" style={{
      width: 'max-content',
      backgroundColor: '#FFE3DE',
      boxShadow: '2px 3px 9px 0px rgba(0, 0, 0, 0.1019607843)',
      color: '#C9705F',
      padding: '1.5rem',
      borderRadius: '5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      // marginTop: '2.3rem',
      cursor: 'pointer',
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      // marginLeft: '0.5rem',
    }}>Apply Now
    
    <span style={{display: 'flex'}}><svg className='img' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1493 0L7.78906 2.70472L13.2837 9L7.78906 15.2953L10.1493 18L18.002 9L10.1493 0Z" fill="#C9705F" />
          <path d="M2.36026 18L10.2129 9L2.36026 0L0 2.70472L5.49466 9L0 15.2953L2.36026 18Z" fill="#C9705F" />
        </svg></span>
    
    
    </a>
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