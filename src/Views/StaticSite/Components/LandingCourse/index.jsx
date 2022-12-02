import React from 'react'
import './style.scss'
import { landingFeaturedBlogs2 } from '../../Views/LandingPage/constant'
import LandingButton from './LandingButton'

const FeatuedBlogs = () => {
  return (
    <div className="featured_blogs">
      {landingFeaturedBlogs2.map((item, idx) => (
        <div key={idx} className="featured_blogs_div">
          <div className="featured_blogs_img">
            <img src={item?.img} alt="" />
          </div>
          <div className="featured_blogs_text">{item?.text}</div>
          <LandingButton 
            url={ item?.url }
            text={'Read More'}
            textColor={'#000'}
            isColor={'#B8B8B8'}
            btnBorder={'#B8B8B8'}/>
          
        </div>
      ))}
    </div>
  )
}

export default FeatuedBlogs
