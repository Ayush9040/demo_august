import React from 'react'
import { legacy1 } from '../../assets/icons/icon'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const DonationThankYou = () => {
  const greetModal= true

  const navigate = useNavigate()

  
  return (
    <div className="donation-thankyou">
      {greetModal && (
        <div className="donation-border">
          <span className="donation-close" onClick={() => navigate('/courses')}>
            &times;
          </span>
          <div className="donation-icon">{legacy1}</div>
          <h1 className="donation-heading">Thank you</h1>
          <p className="donation-paragraph">for your donation for the well-being of people in our society</p>
        </div>
      )}
    </div>
  )
}

export default DonationThankYou
