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
import { Link, useNavigate } from 'react-router-dom'
import useOnScreen from '../../../../helpers/InterSection'
import { useEffect } from 'react'
import month_ttc from './images/3_month_ttc.jpg'
import Arrow_Right from './images/Arrow_Right.svg'
import Arrow_Left from './images/Arrow_Left.svg'

const OurOfferings = () => {

  const offerinRef = useRef(null)
  const sliderRef = useRef(null)
  const isInteracting = useOnScreen(offerinRef, { threshold: 0.5 })
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 499;
  const [activeSlide, setActiveSlide] = useState(0);

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
      name: '3-Month TTC',
      description:
        'Learn and witness marked improvement in your life, relationships, and work',
      redirect: '/500-hrs-online-yoga-teacher-training-course-intermediate-level',
      timeline: '3-month',
      price: '40,000',
      imgSrc: month_ttc,
      height: '376px',
    },
    {
      name: '7-month TTC',
      description:
        'With this course, you will acquire the skills necessary to master your mental, spiritual, and physical health and lead a fulfilling life.',
      redirect: '/seven-month-ttc',
      timeline: '7-month',
      price: '60,000',
      imgSrc: baseDomain + homeAssets.homeAsset11,
    },
    {
      name: '7-day Yoga Health Camp',
      description:
        'An introductory course to yoga theory and practice in which students experience yogic lifestyle and learn how to achieve life balance.',
      redirect: '/7-days-camp',
      timeline: '7 days',
      price: '10000',
      imgSrc: baseDomain + homeAssets.homeAsset7,
    },
    {
      name: '21-Day Better Living Course',
      description:
        'This course will assist you in incorporating yoga philosophy and healthy habits into daily life by taking a holistic approach.',
      redirect: '/21-days-better-living-course',
      timeline: '21 days',
      price: '2500',
      imgSrc: baseDomain + homeAssets.homeAsset8,
    },
    {
      name: 'Regular Asana Classes',
      description:
        'Improve your physical and mental health by practicing asanas, pranayama, and a yogic lifestyle and living mindfully.',
      redirect: '/asana-regular-classes-online',
      timeline: 'Any Day',
      price: '1100',
      imgSrc: baseDomain + courseAssets.courseAsset115,
    },
    {
      name: 'Children’s Regular Classes',
      description:
        'This asana class will help children develop their focus, memory, discipline, determination, and value system.',
      redirect: '/childrens-regular-classes',
      timeline: 'Any Day',
      price: '1100',
      imgSrc: baseDomain + homeAssets.homeAsset10,
    },
    
  ]

  const [smallDescription, setSmallDescription] = useState(
    carouselData[0].description.substring(0, 120) + '...'
  )

  const [redirect, setRedirect] = useState(carouselData[0].redirect)
  const [timeline, setTimeline] = useState(carouselData[0].timeline)
  const [price, setPrice] = useState(carouselData[0].price)

  let settings = {
    dots: window?.innerWidth > 500,
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
    beforeChange: (current, next) => setActiveSlide(next),
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

  const handleDotClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };


  return (
    <div className="our-offerings-section">
      <div className="our-offerings-container offering-padding">

        <div className="offering-overview">
          <Heading logo={courses} smallText="Our Signature" largeText="Offerings" />

          <div className="offering-text">
            <p>
              The unique offerings of The Yoga Institute have impacted and inspired
              millions of lives across the globe. Scroll through some of our
              signature offerings.
            </p>
          </div>

          <Link to="/courses" className='btn_offer'>
            <CommonBtn text="Explore More" />
          </Link>
        </div>

        <div className="our-offerings-carousel" ref={offerinRef}>

          <Slider {...settings} ref={(slider) => { sliderRef.current = slider }}>

            {
              carouselData?.map((data, index) => (
                <div className="course-offered" key={index} dataSettings={JSON.stringify(settings)}>
                  <Link to={data?.redirect} className={data?.height ? 'apply_this' : ''}>
                    <img src={data?.imgSrc} placeholder="none" alt="7-days-camp" />
                    <div className='image-overlay'></div>
                  </Link>
                  <p className='h4'>{data?.name}</p>

                  <div className="base-info-wrap">
                    <div className="base-text-wrap">
                      <div className="base-content">{data?.name}</div>
                      <div className="base-price">({data?.timeline} - ₹{data?.price})</div>
                    </div>
                    <div className="base-btn-explore" onClick={() => navigate(data?.redirect)}> Explore <img className='Chevrons-right' src="/icons/200-hours/Chevrons right.svg" alt="" /> </div>
                  </div>

                </div>
              ))
            }

            {/* <div className="course-offered" dataSettings={JSON.stringify(settings)}>
              <Link to="/7-days-camp">
                <img src={`${baseDomain}${homeAssets.homeAsset7}`} placeholder="none" alt="7-days-camp" />
              </Link>
              <p className='h4'>7-day Yoga Health Camp</p>

              <div className="base-info-wrap">
                <div className="base-text-wrap">
                  <div className="base-content">7-day Yoga Health Camp</div>
                  <div className="base-price">(7 days - ₹10000)</div>
                </div>
                <div className="base-btn-explore" onClick={() => navigate('/7-days-camp')}> Explore <img className='Chevrons-right' src="/icons/200-hours/Chevrons right.svg" alt="" /> </div>
              </div>

            </div>

            <div className="course-offered">
              <Link to="/21-days-better-living-course">
                <img
                  src={`${baseDomain}${homeAssets.homeAsset8}`}
                  placeholder="none"
                  alt="21-days"
                />
              </Link>
              <p className='h4'>21-Day Better Living Course</p>

              <div className="base-info-wrap">
                <div className="base-text-wrap">
                  <div className="base-content">21-Day Better Living Course</div>
                  <div className="base-price">(21 days - ₹2500)</div>
                </div>
                <div className="base-btn-explore" onClick={() => navigate('/21-days-better-living-course')}> Explore <img className='Chevrons-right' src="/icons/200-hours/Chevrons right.svg" alt="" /> </div>
              </div>

            </div>

            <div className="course-offered">
              <Link to="/asana-regular-classes-online">
                <img
                  src={`${baseDomain}${courseAssets.courseAsset115}`}
                  placeholder="none"
                  alt="Regular-Asana-Classes"
                />
              </Link>
              <p className='h4'>Regular Asana Classes</p>

              <div className="base-info-wrap">
                <div className="base-text-wrap">
                  <div className="base-content">Regular Asana Classes</div>
                  <div className="base-price">(Regular Asana - ₹1100)</div>
                </div>
                <div className="base-btn-explore" onClick={() => navigate('/asana-regular-classes-online')}> Explore <img className='Chevrons-right' src="/icons/200-hours/Chevrons right.svg" alt="" /> </div>
              </div>
            </div>

            <div className="course-offered">
              <Link to="/childrens-regular-classes">
                <img
                  src={`${baseDomain}${homeAssets.homeAsset10}`}
                  placeholder="none"
                  alt="Children-Classes"
                />
              </Link>
              <p className='h4'>Children’s Regular Classes</p>

              <div className="base-info-wrap">
                <div className="base-text-wrap">
                  <div className="base-content">Children’s Regular Classes</div>
                  <div className="base-price">(Children’s - ₹1100)</div>
                </div>
                <div className="base-btn-explore" onClick={() => navigate('/childrens-regular-classes')}> Explore <img className='Chevrons-right' src="/icons/200-hours/Chevrons right.svg" alt="" /> </div>
              </div>
            </div>

            <div className="course-offered">
              <Link to="/seven-month-ttc">
                <img
                  src={`${baseDomain}${homeAssets.homeAsset11}`}
                  placeholder="none"
                  alt="7-month-TTC"
                />
              </Link>
              <p className='h4'>7-month TTC</p>

              <div className="base-info-wrap">
                <div className="base-text-wrap">
                  <div className="base-content">7-month TTC</div>
                  <div className="base-price">(7 months - ₹60000)</div>
                </div>
                <div className="base-btn-explore" onClick={() => navigate('/seven-month-ttc')}> Explore <img className='Chevrons-right' src="/icons/200-hours/Chevrons right.svg" alt="" /> </div>
              </div>
            </div> */}

          </Slider>

          <div>
          
            <div className="slider-dots">
            <img
      src={Arrow_Left}
      alt="Previous"
      className="mobile-arrow"
      style={{ width: '16px', height: '16px'}}
      onClick={() => sliderRef.current?.slickPrev()}
    />
              {
                carouselData.map((content, index) => (
                  <div
                    className={`slider-dot ${activeSlide === index ? 'slider-dot-active' : ''}`}
                    key={index}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))
              }

<img
      src={Arrow_Right}
      alt="Next"
      className="mobile-arrow"
      style={{ width: '16px', height: '16px'}}
      onClick={() => sliderRef.current?.slickNext()}
    />
            </div>
           

          </div>


          <div className="course-details">
            <div className="course-content-container">
              <p>{smallDescription}</p>
              <div className="actions">
                <h3>{timeline} | ₹{price}</h3>
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
