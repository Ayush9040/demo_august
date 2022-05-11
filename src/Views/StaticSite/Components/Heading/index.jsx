import React from 'react'
import './style.scss'

const Heading = ({ logo, smallText, largeText }) => {
  return (
    <div className="heading-container">
      <div className="heading-content">
        <div className="heading-logo">{logo}</div>
        <div className="heading-text">
          <h2>{smallText}</h2>
          <h1>{largeText}</h1>
        </div>
      </div>
      <div className="custom-border global-top-margin"></div>
    </div>
  )
}

export default Heading
