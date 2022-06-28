import React from 'react'
import { legacy1 } from '../../assets/icons/icon'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const EnrollmentThankyou = () => {
  const greetModal= true

  const navigate = useNavigate()

  
  return (
    <div className="greeting-thankyou">
      {greetModal && (
        <div className="greeting-border">
          <span className="greeting-close" onClick={() => navigate('/courses')}>
            &times;
          </span>
          <div className="greeting-icon">{legacy1}</div>
          <h1 className="greeting-heading">Thank you</h1>
          <p className="greeting-paragraph">for your enrollment</p>

          <button className="browse-more" onClick={() => navigate('/courses')}>
            Browse More Courses
          </button>
        </div>
      )}
    </div>
  )
}

export default EnrollmentThankyou
