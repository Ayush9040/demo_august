import React from 'react'
import InnerNavComponent from '../InnerNavComponent/index.jsx'
import Carousel from './Carousel.js'
import './LocationDetails.scss'
const LocationDetails = () => {

  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <>
      <InnerNavComponent abc={viewBlog}/>
      <div className='heading-main'>
        <h2 className='heading-1'>MATUNGA</h2>
        <h2 className='heading-2'>Mumbai, India</h2>
      </div>
      <div className='carosoul-main'>
        <Carousel />
      </div>
    </>
  )
}

export default LocationDetails
