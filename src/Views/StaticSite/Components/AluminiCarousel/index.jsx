import React, { useRef } from 'react'
import { data } from './data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'
import left_arrow_courses from './images/left_arrow_courses.png'
import right_arrow_courses from './images/right_arrow_courses.png'
import Arrow_Right from './images/Arrow_Right.svg'
import Arrow_Left from './images/Arrow_Left.svg'

const AlumniCarousel = () => {
  const sliderRef = useRef(null)
  
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoPlaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    nextArrow: (
      <div className="custom-next-arrow">
        <img src={right_arrow_courses} alt="next" />
      </div>
    ),
    prevArrow: (
      <div className="custom-prev-arrow">
        <img src={left_arrow_courses} alt="previous" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          appendDots: dots => (
            <div className="custom-arrow-dots-wrapper">
              <img
                src={Arrow_Left}
                alt="Previous"
                onClick={() => sliderRef.current?.slickPrev()}
                style={{ cursor: 'pointer', width: 18, height: 18 }}
              />
              <ul style={{ margin: 0, display: 'flex', justifyContent: 'center' }}>{dots}</ul>
              <img
                src={Arrow_Right}
                alt="Next"
                onClick={() => sliderRef.current?.slickNext()}
                style={{ cursor: 'pointer', width: 18, height: 18, marginLeft: '3px' }}
              />
            </div>
          )
        }
      }
    ]
  }

  return (
    <div className="alumni-main-div">
      <div className="alumini-carousel-heading">Alumni</div>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, idx) => {
          if (idx < 5) {
            return (
              <div key={item.id}>
                <div className="alumini-carousel-info">
                  <img src={item.alluminiImg} className="alluminiImg" alt={item.alt}/>
                  <div className="alumini-carousel-details">
                    <div className="alumini-carousel-title">
                      {item.name}
                      <div style={{ color: 'rgba(202, 70, 37, 1)', marginTop: '5px'}}>
                        {item.post}
                      </div>
                    </div>
                    <p className='info_courses_swipper'>{item.info}</p>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })}
      </Slider>
      <Link to="/student-experience" className='explore_courses'>
        <CommonBtn text={'Explore All'} isCourse='yes' />
      </Link>
    </div>
  )
}

export default AlumniCarousel