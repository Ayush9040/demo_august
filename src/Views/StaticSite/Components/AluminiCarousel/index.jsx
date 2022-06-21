import React, { useState } from 'react'
import AlumniGrid from '../AlumniGrid'
import { data } from './data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import CommonBtn from '../commonbtn'

const AlumniCarousel = () => {

  const [alumImgs,setAlumImgs]=useState(data[0].img)

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    beforeChange:(oldIndex,index)=>{
      setAlumImgs(data.find(item=>item.id===index).img)
    }
  }

  return (
    <div className="alumni-main-div">
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
                {/* <div className="alumini-carousel-grid">
                  <div className="alumni-carousel-event-grid">
                    <div className="grid-element-1">
                      <div className="event-1">
                        <img src={item.alluminiImg} />
                      </div>
                      <div className="event-2">
                        <img src={item.alluminiImg} />
                      </div>
                    </div>
                    <div className="grid-element-2">
                      <div className="event-3">
                        <img src={item.alluminiImg} />
                      </div>
                    </div>
                    <div className="grid-element-3">
                      <div className="event-4">
                        <img src={item.alluminiImg} />
                      </div>
                      <div className="event-5">
                        <img src={item.alluminiImg} />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            )
          }
        })}
      </Slider>
      <AlumniGrid images={alumImgs} notEvent={true} />
      <CommonBtn text={'Explore All'} />
    </div>
  )
}

export default AlumniCarousel
