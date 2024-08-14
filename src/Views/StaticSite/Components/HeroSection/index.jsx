import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import MainVideo from '../MainVideo'

const HeroSection = ({ isUserLoggedIn }) => {

  const abc = {
    title: 'affiliations',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  return (
    <div className="landing-page-container">
      <div id='hero-overlay' >
        <Navbar isUserLoggedIn={isUserLoggedIn} abc={abc} />
      </div>
      <MainVideo/>
    </div>
  )
}

export default HeroSection
