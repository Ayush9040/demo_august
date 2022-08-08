import React, { useState, useRef, useEffect } from 'react'
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
import useOnScreen from '../../../../helpers/InterSection'

const SocialInitiatives = ({ alumni, setImageChanger }) => {

  const socialRef = useRef(null)
  const sliderRef = useRef(null)
  const isInteracting = useOnScreen(socialRef)


  useEffect(() => {
    if(!sliderRef.current) return
    if (isInteracting)
      sliderRef.current.slickPlay()
    else
      sliderRef.current.slickPause()

  }, [isInteracting])

  const AnnamBrahma = `${baseDomain}${socialInitiativeNew.socialNew1}`
  const Police = `${baseDomain}${socialInitiativeNew.socialNew2}`
  const BMC = `${baseDomain}${socialInitiativeNew.socialNew3}`
  let images = [AnnamBrahma, Police, BMC]
  let ALT = ['Annam Brahma','Police','BMC']

  const [image, setImage] = useState(AnnamBrahma)
  const [alt, setAlt] = useState()

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
      setAlt(ALT[index])
    },
  }


  return (
    <div className='social-initiative-container global-padding'>
      <div className='social-initiative-image' id={ alumni ? 'support-page' :''} >
        <img src={image} alt={alt} />
      </div>
      <div className='social-initiative-content'>
        <Heading
          logo={alumni ? '' : responsibility}
          smallText={'Social'}
          largeText={alumni ? 'Responsibility' : 'Initiatives'}
        />
        <div className='social-initiative-carousel' ref={ socialRef } >
          <Slider {...settings} ref={slider => { sliderRef.current = slider }} >
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
        
        {!alumni && <Link to='/social-initiatives'>
          <CommonBtn text={'Explore More'} />
        </Link>}
      </div>
    </div>
  )
}

export default SocialInitiatives
