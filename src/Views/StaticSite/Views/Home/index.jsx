import React, { useEffect } from 'react'
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
import Blog from '../../Components/Blogs'
import { useLocation } from 'react-router-dom'
import EditAccount from '../../Components/EditAccount'
import OneTimePass from '../../Components/OneTimePass'
//import UserProfile from '../../Components/UserProfile'

const Home = () => {
  const route = useLocation()
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
      <HeroSection />
      <OneTimePass/>
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
    </>
  )
}

export default Home
