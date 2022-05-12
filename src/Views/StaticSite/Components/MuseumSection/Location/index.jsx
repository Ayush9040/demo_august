import React from 'react'
import Heading from '../../Heading'
import './style.scss'
const Location = () => {
  return (
    <div className="location-container global-padding">
      <div className="location-grid-1 ">
        <Heading largeText={'Location'} />
        <p className="location-text">
        The Yoga Institute, Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai – 400055 India.
        </p>
        <div className="location-sub-container">
          <div className="location-sub-grid-1">
            <p>Open EveryDay<br></br>
              6:30 AM - 8:00 PM</p>
          </div>
      
        </div>
      </div>
      <div className="location-grid-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.513774211696!2d72.8409643153211!3d19.08510398708263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a916aaaaab%3A0xb1b1dcb9c91cb9a!2sThe%20Yoga%20Institute!5e0!3m2!1sen!2sin!4v1649149231528!5m2!1sen!2sin" 
          style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location
