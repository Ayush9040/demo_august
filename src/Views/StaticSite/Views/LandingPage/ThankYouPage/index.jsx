import React from 'react'
import './style.scss'

const CampaignThankYou = ({ name='user' }) => {
  return (
    <div className="thank_you_div">
      <div className="thank_you_text_div">
        <h1>
          Thank You { name } for signing up for the course.
        </h1>
        <div className="thank_you_text">
          The Yoga Institute Team will get in touch with you shortly!
        </div>
        <div className="thank_you_text">
          For further details, check our website :&nbsp;
          <a href="/">www.theyogainstitute.org</a>
        </div>
      </div>
    </div>
  )
}

export default CampaignThankYou
