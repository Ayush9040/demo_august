import React, { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import HeroSection from '../../Components/HeroSection'
// import Legacy from '../../Components/Legacy'
// import Activity from '../../Components/Activity'
// import OurOfferings from '../../Components/OurOfferings'
// import SocialInitiatives from '../../Components/SocialInitiatives'
// import Nispand from '../../Components/NispandApp'
// import Facts from '../../Components/Facts'
// import Experience from '../../Components/Experience'
// import VideosSection from '../../Components/Videos'
// import NewsLetter from '../../Components/NewsLetter'
// import Footer from '../../Components/Footer'
// import Blog from '../../Components/BlogSection'
const HeroSection = lazy(() => import('../../Components/HeroSection'))
const Legacy = lazy(() => import('../../Components/Legacy'))
const Activity = lazy(() => import('../../Components/Activity'))
const OurOfferings = lazy(() => import('../../Components/OurOfferings'))
const SocialInitiatives = lazy(() => import('../../Components/SocialInitiatives'))
const Nispand = lazy(() => import('../../Components/NispandApp'))
const Facts = lazy(() => import('../../Components/Facts'))
const Experience = lazy(() => import('../../Components/Experience'))
const VideosSection = lazy(() => import('../../Components/Videos'))
const NewsLetter = lazy(() => import('../../Components/NewsLetter'))
const Footer = lazy(() => import('../../Components/Footer'))
const Blog = lazy(() => import('../../Components/BlogSection'))

import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import './style.scss'


const Home = () => {

  const route = useLocation()
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    if (route.hash) {
      document
        .getElementById(`${route.hash.substring(1, route.hash.length)}`)
        .scrollIntoView()
    }
  })

  return (
    <>
      {metaDataObj[route.pathname] &&
        <Helmet title={metaDataObj[route.pathname || '']?.title || ''} />
      }
      <Suspense fallback={<div className='global-loader' >Loading...</div>} >
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
      </Suspense>
    </>
  )
}

export default Home
