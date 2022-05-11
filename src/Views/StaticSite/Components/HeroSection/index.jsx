import React from 'react'
import './style.scss'
import Navbar from '../Navbar'

const HeroSection = ({ landingImage }) => {
  return (
    <div className="landing-page-container">
      <Navbar />
      {/* <img src={LandingImage} /> */}
    </div>
  )
}

export default HeroSection
