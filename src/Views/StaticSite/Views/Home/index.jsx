import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import HeroSection from '../../Components/HeroSection'
import Legacy from '../../Components/Legacy'
import Activity from '../../Components/Activity'
import OurOfferings from '../../Components/OurOfferings'
import SocialInitiatives from '../../Components/SocialInitiatives'
import Nispand from '../../Components/NispandApp'
import Facts from '../../Components/Facts'
import Experience from '../../Components/Experience'
import VideosSection from '../../Components/Videos'
import NewsLetter from '../../Components/NewsLetter'
import Footer from '../../Components/Footer'
import Blog from '../../Components/BlogSection'



const Home = () => {
  const route = useLocation()
  const { isLoggedIn } = useSelector((state) => state.auth)
  console.log(route.hash.substring(1, route.hash.length))
  useEffect(() => {
    if (route.hash) {
      document
        .getElementById(`${route.hash.substring(1, route.hash.length)}`)
        .scrollIntoView()
    }
  })
  return (
    <>
      <HeroSection isUserLoggedIn={isLoggedIn} />
      <Legacy />
      <OurOfferings />
      <Activity />
      <SocialInitiatives />
      <Nispand />
      <Facts />
      <Experience />
      <Blog />
      <VideosSection />
      <NewsLetter />
      <Footer />
      {/* <MainVideo/> */}
      
    </>
  )
}

export default Home
