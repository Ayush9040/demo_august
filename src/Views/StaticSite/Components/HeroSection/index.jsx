import React from 'react'
import './style.scss'
import Navbar from '../Navbar'

const HeroSection = ({ isUserLoggedIn }) => {
  return (
    <div className="landing-page-container">
      <Navbar isUserLoggedIn={isUserLoggedIn} />
    </div>
  )
}

export default HeroSection
