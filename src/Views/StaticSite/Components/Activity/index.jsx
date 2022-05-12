import React from 'react'
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

const Activity = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
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
      <div className='activity-container glabal-padding'>
        <div className='activity-card-container'>
          <Slider {...settings}>
            {activityData.map((item, i) => {
              console.log(item, 'ABCD')
              return (
                <Activitycard
                  key={i}
                  title={item.title}
                  images={item.image}
                  description={item.description}
                />
              )
            })}
          </Slider>
        </div>
        <div className='activity-content'>
          <div className='activity-wrapper'>
            <Heading
              logo={highlights}
              smallText='In the'
              largeText='Highlight'
            />
            <div className='activity-text'>
              <p>
                These wellness initiatives will harmonize your energies and
                bring that much-needed balance and peace into your life. Explore
                them now!
              </p>
            </div>
            <Link to='/courses'>
              <CommonBtn text={'Explore more'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Activity
