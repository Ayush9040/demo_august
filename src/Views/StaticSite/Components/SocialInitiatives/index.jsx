import React, { useState } from 'react'
import Heading from '../Heading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { responsibility } from '../../assets/icons/icon'
import { socialData } from '../../utils/socialData'
import CommonBtn from '../commonbtn'

import './style.scss'
import baseDomain, { socialInitiativeNew } from '../../assets/images/imageAsset'
import { Link } from 'react-router-dom'

const SocialInitiatives = ({ alumni, setImageChanger }) => {
  const AnnamBrahma = `${baseDomain}${socialInitiativeNew.socialNew1}`
  const Police = `${baseDomain}${socialInitiativeNew.socialNew2}`
  const BMC = `${baseDomain}${socialInitiativeNew.socialNew3}`
  let images = [AnnamBrahma, Police, BMC]

  const [image, setImage] = useState(AnnamBrahma)

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
    beforeChange: (oldIndex, index) => {
      setImage(images[index])
      setImageChanger && setImageChanger(index)
    },
  }


  return (
    <div className='social-initiative-container global-padding'>
      <div className='social-initiative-image' id={ alumni ? 'support-page' :''} >
        <img src={image} />
      </div>
      <div className='social-initiative-content'>
        <Heading
          logo={alumni ? '' : responsibility}
          smallText={'Social'}
          largeText={alumni ? 'Responsibility' : 'Initiatives'}
        />
        <div className='social-initiative-carousel'>
          <Slider {...settings}>
            {socialData.map((item, i) => {
              //  setIndex(i);

              return (
                <div key={i} className='social-initiative-wrap'>
                  <h1>{item.title}</h1>
                 
                  <p>{item.description}</p>
                  {item.url}
                </div>
              )
            })}
          </Slider>
        </div>
        
        {!alumni && <Link to='/social-responsibility'>
          <CommonBtn text={'Explore More'} />
        </Link>}
      </div>
    </div>
  )
}

export default SocialInitiatives
