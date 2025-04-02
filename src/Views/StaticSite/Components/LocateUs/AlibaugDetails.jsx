import React from 'react'
import InnerNavComponent from '../InnerNavComponent/index.jsx'
import './LocationDetails.scss'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import AlibaugCarousel from './AlibaugCarousel.js'
const AlibaugDetails = () => {

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
      <InnerNavComponent abc={viewBlog} />
      <div className='heading-main'>
        <h2 className='heading-1'>New yoga retreat centre at Alibaug</h2>
        <h2 className='heading-sub'>Discover Tranquillity in Nature, Revitalize and Reawaken Your Inner Peace</h2>
      </div>
      <div className='carosoul-main'>
        <AlibaugCarousel />
      </div>
    </>
  )
}

export default AlibaugDetails
