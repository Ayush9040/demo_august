import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import MainVideo from '../MainVideo'

const HeroSection = ({ isUserLoggedIn, setIsModalOpen }) => {
  return (
    <div className="landing-page-container">
      <div id='hero-overlay' >
        <Navbar setIsModalOpen={setIsModalOpen} isUserLoggedIn={isUserLoggedIn} />
      </div>
      <MainVideo/>
    </div>
  )
}

export default HeroSection
