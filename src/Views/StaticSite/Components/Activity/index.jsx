import React, { useEffect, useRef } from 'react'
import Heading from '../Heading'
import { highlights } from '../../assets/icons/icon'
import Activitycard from './Activitycard'
import { activityData } from '../../utils/ActivityData'
import './styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'
import useOnScreen from '../../../../helpers/InterSection'
import Arrow_Left from './images/Arrow_Left.svg'
import Arrow_Right from './images/Arrow_Right.svg'

const Activity = () => {
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
    //centerMode: true,
    pauseOnHover: true,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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

  return (
    <>
      <div className="activity-container glabal-padding">
        <div className="activity-card-container" ref={activityRef}
          onMouseEnter={() => {
            if (activitySliderRef.current && typeof activitySliderRef.current.slickPause === 'function') {
              activitySliderRef.current.slickPause()
            }
          }}
          onMouseLeave={() => {
            if (activitySliderRef.current && typeof activitySliderRef.current.slickPlay === 'function') {
              activitySliderRef.current.slickPlay()
            }
          }}
        >
          <Slider
            {...settings}
            ref={(slider) => {
              activitySliderRef.current = slider
            }}
          >
            {activityData.map((item, i) => {
              return (
                <Activitycard
                  key={i}
                  id={item.id}
                  title={item.title}
                  images={item.image}
                  description={item.description}
                  url={item.url}
                />

              )
            })}
          </Slider>
        </div>
        <div className="activity-content">
          <div className="activity-wrapper">
            <Heading
              logo={highlights}
              smallText="Our"
              largeText="Highlight"
            />
            <div className="activity-text">
              <p>
                These wellness initiatives will harmonize your energies and
                bring that much-needed balance and peace into your life. Explore
                them now!
              </p>
            </div>
            <Link to="/courses/browse/most-popular">
              <CommonBtn text={'Explore more'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Activity
