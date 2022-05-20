import React, { useState } from 'react'
import Heading from '../Heading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { responsibility } from '../../assets/icons/icon'
import { socialData } from '../../utils/socialData'
import CommonBtn from '../commonbtn'

import './style.scss'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import { Link } from 'react-router-dom'

const Programs = ({ alumni, setImageChanger }) => {
  const AnnamBrahma = `${baseDomain}${homeAssets.homeAsset19}`
  const Police = `${baseDomain}${homeAssets.homeAsset20}`
  const BMC = `${baseDomain}${homeAssets.homeAsset21}`
  let images = [AnnamBrahma, Police, BMC]

  const [image, setImage] = useState(AnnamBrahma)

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (oldIndex, index) => {
      setImage(images[index])
      setImageChanger && setImageChanger(index)
    },
  }


  return (
    <div className='wellness-initiative-container global-padding'>
      <div className='wellness-initiative-image'>
        <img src={image} />
      </div>
      <div className='wellness-initiative-content'>
        <Heading
          // logo={responsibility}
          smallText={'Social'}
          largeText={alumni ? 'Responsibility' : 'Initiatives'}
        />
        <div className='wellness-initiative-carousel'>
          <Slider {...settings}>
            {socialData.map((item, i) => {
              //  setIndex(i);

              return (
                <div key={i} className='wellness-initiative-wrap'>
                  <h1>{item.title}</h1>
                  <br />
                  <p>{item.description}</p>
                  {item.url}
                </div>
              )
            })}
          </Slider>
        </div>
        <br />
        <br />
        <br />
        <Link to='/social-responsibility'>
          <CommonBtn text={'Explore More'} />
        </Link>
      </div>
    </div>
  )
}

export default Programs
