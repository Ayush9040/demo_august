import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import MainVideo from '../MainVideo'

const HeroSection = ({ isUserLoggedIn }) => {
  return (
    <div className="landing-page-container">
      <div id='hero-overlay' >
        <Navbar isUserLoggedIn={isUserLoggedIn} />
      </div>
      <MainVideo/>
    </div>
  )
}

export default HeroSection
