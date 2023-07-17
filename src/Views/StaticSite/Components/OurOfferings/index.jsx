import React, { useState, useRef } from 'react'
import Heading from '../Heading'
import './style.scss'
import { courses, filler } from '../../assets/icons/icon'
import baseDomain, {
  courseAssets,
  homeAssets,
} from '../../assets/images/imageAsset'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'
import useOnScreen from '../../../../helpers/InterSection'
import { useEffect } from 'react'

const OurOfferings = () => {
  const offerinRef = useRef(null)
  const sliderRef = useRef(null)
  const isInteracting = useOnScreen(offerinRef, { threshold: 0.5 })

  useEffect(() => {
    if (!sliderRef.current) return
    if (isInteracting) sliderRef.current.slickPlay()
    else {
      sliderRef.current.slickPause()
      sliderRef.current.slickGoTo(0)
    }
  }, [isInteracting])

  const carouselData = [
    {
      name: '7-day Yoga Health Camp',
      description:
        'An introductory course to yoga theory and practice in which students experience yogic lifestyle and learn how to achieve life balance.',
      redirect: '/7-days-camp',
      timeline: '7 days',
      price: '9000',
    },
    {
      name: '21-Day Better Living Course',
      description:
        'This course will assist you in incorporating yoga philosophy and healthy habits into daily life by taking a holistic approach.',
      redirect: '/21-days-better-living-course',
      timeline: '21 days',
      price: '2100',
    },
    {
      name: 'Regular Asana Classes',
      description:
        'Improve your physical and mental health by practicing asanas, pranayama, and a yogic lifestyle and living mindfully.',
      redirect: '/asana-regular-classes-online',
      timeline: 'Any Day',
      price: '1000',
    },
    {
      name: 'Children’s Regular Classes',
      description:
        'This asana class will help children develop their focus, memory, discipline, determination, and value system.',
      redirect: '/childrens-regular-classes',
      timeline: 'Any Day',
      price: '1000',
    },
    {
      name: '7-month TTC',
      description:
        'With this course, you will acquire the skills necessary to master your mental, spiritual, and physical health and lead a fulfilling life.',
      redirect: '/seven-month-ttc',
      timeline: '7-month',
      price: '55,000',
    },
  ]
  const [smallDescription, setSmallDescription] = useState(
    carouselData[0].description.substring(0, 120) + '...'
  )

  const [redirect, setRedirect] = useState(carouselData[0].redirect)
  const [timeline, setTimeline] = useState(carouselData[0].timeline)
  const [price, setPrice] = useState(carouselData[0].price)

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoPlaySpeed: 500,
    centerMode: true,
    centerPadding: '70px',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: '0',
        },
      },
    ],
    afterChange: (index) => {
      setSmallDescription(
        carouselData[index].description.substring(0, 110) + '...'
      )
      setRedirect(carouselData[index].redirect)
      setTimeline(carouselData[index].timeline)
      setPrice(carouselData[index].price)
    },
  }

  return (
    <div className="our-offerings-section">
      <div className="our-offerings-container offering-padding">
        <div className="offering-overview">
          <Heading
            logo={courses}
            smallText="Our Signature"
            largeText="Offerings"
          />
          <div className="offering-text">
            <p>
              The unique offerings of The Yoga Institute have impacted and
              inspired millions of lives across the globe. Scroll through some
              of our signature offerings.
            </p>
          </div>
          <Link to="/courses">
            <CommonBtn text={'Explore More'} />
          </Link>
        </div>
        <div className="our-offerings-carousel" ref={offerinRef}>
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef.current = slider
            }}
          >
            <div
              className="course-offered"
              dataSettings={JSON.stringify(settings)}
            >
              <Link to={'/7-days-camp'}>
                <img
                  src={`${baseDomain}${homeAssets.homeAsset7}`}
                  placeholder="none"
                  alt="7days-camp"
                />
              </Link>
              <h4>7-day Yoga Health Camp</h4>
            </div>
            <div className="course-offered">
              <Link to={'/21-days-better-living-course'}>
                <img
                  src={`${baseDomain}${homeAssets.homeAsset8}`}
                  placeholder="none"
                  alt="21days"
                />
              </Link>
              <h4>21-Day Better Living Course</h4>
            </div>
            <div className="course-offered">
              <Link to={'/asana-regular-classes-online'}>
                <img
                  src={`${baseDomain}${courseAssets.courseAsset115}`}
                  placeholder="none"
                  alt="200hrsTTC"
                />
              </Link>
              <h4>Regular Asana Classes</h4>
            </div>
            <div className="course-offered">
              <Link to={'/childrens-regular-classes'}>
                <img
                  src={`${baseDomain}${homeAssets.homeAsset10}`}
                  placeholder="none"
                  alt="Children-camp"
                />
              </Link>
              <h4>Children’s Regular Classes</h4>
            </div>
            <div className="course-offered">
              <Link to={'/seven-month-ttc'}>
                <img
                  src={`${baseDomain}${homeAssets.homeAsset11}`}
                  placeholder="none"
                  alt="900hrs"
                />
              </Link>
              <h4>7-month TTC</h4>
            </div>
          </Slider>
          <div className="course-details">
            <div className="course-content-container">
              <p>{smallDescription}</p>
              <div className="actions">
                <h3>
                  {timeline}|₹{price}
                </h3>
                <h3>
                  <Link to={redirect}>Explore &#62;&#62;</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filler-logo">{filler}</div>
    </div>
  )
}

export default OurOfferings
