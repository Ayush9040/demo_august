import React from 'react'
import './style.scss'
import { landingFeaturedBlogs } from '../../Views/LandingPage/constant'
import { Link } from 'react-router-dom'
import LandingButton from './LandingButton'

const FeatuedBlogs = () => {
  return (
    <div className="featured_blogs">
      {landingFeaturedBlogs.map((item, idx) => (
        <div key={idx} className="featured_blogs_div">
          <div className="featured_blogs_img">
            <img src={item?.img} alt="" />
          </div>
          <Link to={item?.url}>
            <div className="featured_blogs_text">{item?.text}</div>
          </Link>
          <Link to={item?.url}>
            <LandingButton 
          
              text={'Read More'}
              textColor={'#000'}
              isColor={'#B8B8B8'}
              btnBorder={'#B8B8B8'}/>
          </Link>
          
        </div>
      ))}
    </div>
  )
}

export default FeatuedBlogs
