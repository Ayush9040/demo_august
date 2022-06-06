import React from 'react'
import AlumniGrid from '../AlumniGrid'
import { data } from './data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

const Carousel = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
  }

  return (
    <div className="main-div">
      <div className="alumini-carousel-heading">Alumini</div>
      <Slider {...settings}>
        {data.map((item, idx) => {
          if (idx < 5) {
            return (
              <div key={item.id}>
                <div className="alumini-carousel-info">
                  <img src={item.alluminiImg} className="alluminiImg" />
                  <div className="alumini-carousel-details">
                    <div className="alumini-carousel-title">
                      {item.name},{item.post}
                    </div>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            )
          }
          return
        })}
      </Slider>
      <AlumniGrid />
    </div>
  )
}

export default Carousel
