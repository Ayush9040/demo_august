import React, { useState } from 'react'
import Heading from '../Heading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
//import { responsibility } from '../../assets/icons/icon'
import { data } from './data'

import './style.scss'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'

const Programs = ({ setImageChanger }) => {
  const AnnamBrahma = `${baseDomain}${homeAssets.homeAsset19}`
  const Police = `${baseDomain}${homeAssets.homeAsset20}`
  const BMC = `${baseDomain}${homeAssets.homeAsset21}`
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
    <div className="wellness-initiative-container global-padding">
      <div className="wellness-initiative-image">
        <img src={image} alt={alt} />
      </div>
      <div className="wellness-initiative-content">
        <Heading
          // logo={responsibility}
          smallText={'Positive Implications of'}
          largeText={'wellness programs at work'}
        />
        <div className="wellness-initiative-carousel">
          <Slider {...settings}>
            {data.map((item, i) => {
              //  setIndex(i);

              return (
                <div key={i} className="wellness-initiative-wrap">
                  {typeof item.desc === 'string' ? (
                    <p>{item.desc}</p>
                  ) : (
                    <ul style={{ listStyle: 'none' }}>
                      {item.desc.map((point) => {
                        return (
                          <li style={{ fontSize: '1.7rem' }} key={point}>
                            <span style={{ fontSize: '24px' }}>&#8226;</span>&ensp;{point}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Programs
