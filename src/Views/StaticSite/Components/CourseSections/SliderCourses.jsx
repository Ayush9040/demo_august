import React from 'react'
import { useState, useRef, useEffect } from 'react'
import useOnScreen from '../../../../helpers/InterSection'
import '../CourseCard/style.scss'
import Arrow_Left from './images/Arrow_Left.svg'
import Arrow_Right from './images/Arrow_Right.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import CourseCard from '../CourseCard'

const SliderCourses = ({ data, title }) => {

  const activityRef = useRef(null)
  const activitySliderRef = useRef(null)
  const isInteracting = useOnScreen(activityRef, { threshold: 0.75 })

  useEffect(() => {
    if (!activitySliderRef.current) return
    if (isInteracting) {
      if (typeof activitySliderRef.current.slickPlay === 'function') {
        activitySliderRef.current.slickPlay()
      }
    } else {
      if (typeof activitySliderRef.current.slickPause === 'function') {
        activitySliderRef.current.slickPause()
      }
      if (typeof activitySliderRef.current.slickGoTo === 'function') {
        activitySliderRef.current.slickGoTo(0)
      }
    }
  }, [isInteracting])


  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoPlaySpeed: 500,
    initialSlide: 0,
    pauseOnHover: true,
    centerPadding: '5px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '5px'
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerPadding: '5px'
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerPadding: '5px'
        }
      }
    ],
    appendDots: dots => (
      <div className="custom-arrow-dots-wrapper">
        <img
          src={Arrow_Left}
          alt="Previous"
          onClick={() => activitySliderRef.current?.slickPrev()}
          style={{ cursor: 'pointer', width: 18, height: 18 }}
        />
        <ul style={{ margin: 0, display: 'flex', justifyContent: 'center' }}>{dots}</ul>
        <img
          src={Arrow_Right}
          alt="Next"
          onClick={() => activitySliderRef.current?.slickNext()}
          style={{ cursor: 'pointer', width: 18, height: 18, marginLeft: '3px' }}
        />
      </div>
    )
  }

  const selectColor = (i, title) => {
    if (title == 'Yoga Teacher Training Courses (YTTC)') {
      return '#c8705f'
    }
    else if (title == 'Certified Yoga Courses') { return '#edbe66' }
    else if (title == 'Regular Yoga Classes') { return '#b77e7e' }
    else if (title == 'Most Popular Yoga Courses') { return '#6e9596' }
    else if (title == 'Camps & Workshops') { return '#ce9b51' }
    else if (title == 'Special Certificate Courses (For Yoga Teachers)') { return '#ba7e7e' }
    else if (title == 'Special Events') { return '#c8705f' }
    else if (title == 'Additional Certifications') { return 'rgba(117, 159, 128, 1)' }
    else { return '' }
  }

  useEffect(() => {
  if (activitySliderRef.current) {
    const track = activitySliderRef.current.innerSlider.list.querySelector('.slick-track');
    if (track) {
      track.style.transition = 'none';
      track.style.transform = 'translate3d(0,0,0)';
      setTimeout(() => {
        track.style.transition = '';
        track.style.transform = '';
      }, 50);
    }
  }
}, []);

  return (
    <div className='slider_course'>
      <div className="activity-card-container" ref={activityRef}>
        <Slider
          {...settings}
          ref={(slider) => {
            activitySliderRef.current = slider
          }}
        >
          {data.map((item, i) => {
            const isFirstSlide = i === 0;
            return (
                <CourseCard
                key={i}
                color={selectColor(i, title)}
                index={i}
                courseTitle={item?.title}
                description={item?.metaDescription}
                path={item?.key}
                img={item?.cardImage}
                rating={item?.rating}
                dates={item?.dates}
                fees={item?.fees}
                timing={item?.timing}
                tenure={item?.tenure}
                pageName={item?.key}
                courseCategory={item?.courseCategory}
                courseSubType={item?.courseSubType}
                onlineMode={item?.onlineInfo?.courseMode}
                residentialMode={item?.residentialInfo?.courseMode}
                nonResidentialMode={item?.nonResidentialInfo?.courseMode}
                residentialLocation={item?.residentialInfo?.residentialMode}
                nonResidentialLocation={item?.nonResidentialInfo?.nonResidentialMode}
                courseType={item?.courseType}
                language={item?.language}
                category={item?.category}
                batch={item?.batch}
                nonResidential={item?.nonResidential}
                residential={item?.residential}
                online={item?.online}
                weekends={item?.weekends}
                onCampus={item?.onCampus}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default SliderCourses;