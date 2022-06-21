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
import Blog from '../../Components/BlogSection'
import { useLocation } from 'react-router-dom'
import CourseTable from '../../Components/CourseComponents/CourseTable'
import CoursePara from '../../Components/CourseComponents/CoursePara'
import CourseQuote from '../../Components/CourseComponents/CourseQuote'
import CourseURL from '../../Components/CourseComponents/CourseURL'
import CourseUList from '../../Components/CourseComponents/CourseUList'


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
      <CourseTable />
      <CoursePara/>
      <CourseQuote/>
      <CourseURL/>
      <CourseUList/>
      <HeroSection />
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
