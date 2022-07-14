import React, { useState } from 'react'
import Heading from '../Heading'
import './style.scss'
import { courses, filler } from '../../assets/icons/icon'
import baseDomain,{ courseAssets, homeAssets } from '../../assets/images/imageAsset'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'

const OurOfferings = () => {
  const carouselData = [
    {
      name: '7-day Yoga Health Camp',
      description:
        'A powerful and life-changing experience, this is an introductory course to yoga theory and practice, within the premises of The Yoga Institute.',
      redirect:'/courses/course/7-days-heath-camp-on-campus/',
      timeline:'7 days',
      price:'8000' 
    },
    {
      name: '21-Day Better Living Course',
      description:
        'This popular course aims to integrate yoga philosophy and healthy routines in everyday life. We give you tools and techniques to help you manage your studies, home life, work life and other activities.',
      redirect:'/courses/course/batch1-21days-morning-oncampus/',
      timeline:'21 days',
      price:'1600'  
    },
    {
      name: 'Regular Asana Classes',
      description:
        'Daily one hour asana classes for people of all age groups to help them bring balance and serenity into their lives.',
      redirect:'/courses/course/asana-regular-classes-men-women/',
      timeline:'Any Day',
      price:'1000' 
    },
    {
      name: 'Children’s Regular Classes',
      description:
        'Especially designed for children, the asana class helps them balance their academics along with their physical and mental health.',
      redirect:'/courses/course/childrens-regular-class-oncampus/',
      timeline:'Any Day',
      price:'1000'
    },
    {
      name: '7-month TTC',
      description:
        'This course provides an in-depth study of classical ashtanga yoga which teaches core yoga philosophy and technology. Participants can become internationally certified yoga trainers on completing the course.',
      redirect:'/courses/course/7-months-900hr/',
      timeline:'7-month',
      price:'50,000'
    },
  ]
  const [smallDescription, setSmallDescription] = useState(
    carouselData[0].description.substring(0, 120) + '...'
  )

  const [ redirect,setRedirect]=useState(carouselData[0].redirect)
  const [ timeline,setTimeline]=useState(carouselData[0].timeline)
  const [ price,setPrice]=useState(carouselData[0].price)

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
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
    afterChange: index => {
      setSmallDescription(carouselData[index].description.substring(0, 110) + '...')
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
          <Link to="/courses" >
            <CommonBtn text={'Explore More'} />
          </Link>
        </div>
        <div className="our-offerings-carousel">
          <Slider {...settings}>
            <div className="course-offered">
              <img
                src={`${baseDomain}${homeAssets.homeAsset7}`}
                placeholder="none"
              />
              <h4>7-day Yoga Health Camp</h4>
            </div>
            <div className="course-offered">
              <img
                src={`${baseDomain}${homeAssets.homeAsset8}`}
                placeholder="none"
              />
              <h4>21-Day Better Living Course</h4>
            </div>
            <div className="course-offered">
              <img
                src={`${baseDomain}${courseAssets.courseAsset37}`}
                placeholder="none"
              />
              <h4>Regular Asana Classes</h4>
            </div>
            <div className="course-offered">
              <img
                src={`${baseDomain}${homeAssets.homeAsset10}`}
                placeholder="none"
              />
              <h4>Children’s Regular Classes</h4>
            </div>
            <div className="course-offered">
              <img
                src={`${baseDomain}${homeAssets.homeAsset11}`}
                placeholder="none"
              />
              <h4>7-month TTC</h4>
            </div>
          </Slider>
          <div className="course-details">
            <div className="course-content-container">
              <p>{smallDescription}</p>
              <div className="actions">
                <h3>{timeline}|₹{price}</h3>
                <h3><Link to={redirect} >Explore &#62;&#62;</Link></h3>
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
