import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import MainVideo from '../MainVideo'

const HeroSection = ({ isUserLoggedIn }) => {
  return (
    <div className="landing-page-container">
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      <MainVideo/>
    </div>
  )
}

export default HeroSection
