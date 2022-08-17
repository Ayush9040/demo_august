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

const Activity = () => {
  const activityRef = useRef(null)
  const activitySliderRef = useRef(null)
  const isInteracting = useOnScreen(activityRef, { threshold: 0.75 })

  useEffect(() => {
    if (!activitySliderRef.current) return
    if (isInteracting) activitySliderRef.current.slickPlay()
    else {
      activitySliderRef.current.slickPause()
      activitySliderRef.current.slickGoTo(0)
    }
  }, [isInteracting])

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoPlaySpeed: 5000,
    //centerMode: true,
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
  }

  return (
    <>
      <div className="activity-container glabal-padding">
        <div className="activity-card-container" ref={activityRef}>
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
              smallText="In the"
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
