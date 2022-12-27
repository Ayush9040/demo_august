import React from 'react'
import './style.scss'

const SevenDaysThankYou = ({ name = 'user', setModal, setFormData }) => {
  return (
    <div className="thank_you_div">
      <div className="thank_you_text_div">
        <div
          onClick={() => {
            setModal(false)
            setFormData({
              name: '',
              email: '',
              contact: '',
              city: '',
              country: '',
            })
          }}
          className="close_btn"
        >
          &times;
        </div>
        <h1>Thank You {name} for signing up for the course.</h1>
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

export default SevenDaysThankYou
