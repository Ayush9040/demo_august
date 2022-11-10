import React from 'react'
import InnerNavComponent from '../InnerNavComponent/index.jsx'
import Carousel from './Carousel.js'
import './LocationDetails.scss'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
const LocationDetails = () => {
 
  const location = useLocation()
  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
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
