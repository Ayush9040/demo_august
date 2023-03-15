import React from 'react'
import { useLocation } from 'react-router-dom'
import InnerNavComponent from '../InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import './LocationDetails.scss'
import Slider from 'react-slick'
import { courseAssets } from '../../assets/images/imageAsset'
import baseDomain from '../../assets/images/imageAsset'
import { santaCruz } from '../../assets/images/imageAsset'

const MaladPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '25%',
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: false,

        },
      },
    ],
  }
  const location = useLocation()
  const malad = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <InnerNavComponent abc={malad}/>
      <div className='heading-main'>
        <h2 className='heading-1'>MALAD</h2>
        <h2 className='heading-2'>Mumbai, India</h2>
      </div>
      <div className="carosoul-main">
        <Slider {...settings}>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${courseAssets.courseAsset40}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.malad1}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.malad2}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${courseAssets.courseAsset13}`} />
          </div>
        </Slider>
      </div>
      <div className="courses-details">
        <div className="courses-details-left">
          <img src={`${baseDomain}${courseAssets.courseAsset84}`} />
        </div>
        <div className="courses-details-right">
          <h2>Details on courses and Center</h2>
          <p>
          Regular classes are an ideal way of Yoga education for daily practice. The classes covers Asanas, Pranayamas, Meditation and Kriyas. We have periodic discussion on 4 Pillars of Yoga, Lifestyle management, Satvik Ahar and guidance regarding health conditions.
          </p>
          <div className="apply-address">
            <h5>Address -</h5>
            <p>The Yoga Institute, Malad </p>
            <p>
            201 & 202, B Wing, 2nd Floor, Solitaire 2, Opp Infinity Mall, Near Malad West Metro Station, New Link Road, Ekta Nagar, Malad West.
            </p>
            <p>Mumbai – 400064</p>
            <h5>Contact us - <a href='tel: + 91 9343517490'>+ 91 9343517490</a></h5>
          </div>
        </div>
      </div>
      <div className="apply-main">
        <div className="apply-right">
          <h2>How to apply</h2>
          <div className="apply-duration">
            <p>
            Regular Classes are of 1 hour duration. You can opt for 3 days a week classes, 6 days a week classes (Monday – Saturday) and/or Weekend Classes (Saturday & Sunday). 
            </p>
            <p>
            A minimum attendance of 3 months is recommended, to experience the difference in your body, health condition (if any) and life. Participants can join on any day of the month.
            </p>
          </div>
          <div className="apply-timing">
            <h5>Batch timings (All Sessions 1 hour):</h5>
            <h5>Morning Batches (6 days / 3 days a Week both option available)-</h5>
            <ol>
              <li>7 am – 8 am,</li>
              <li>8 am – 9 am</li>
              <li>9 am – 10am</li>
            </ol>
            <p className="apply-para">
              <h5> Evening Batches (6 days / 3 days a Week both option available)</h5>
            </p>
            <ol>
              <li>6 pm – 7 pm </li>
              <li>7 pm – 8 pm</li>
            </ol>
          </div>
          <div className="apply-timing">
            <h5>Weekend (Saturday and Sunday)-</h5>
            <h5>Timings -</h5>
            <p>9 am – 10 am</p>
            <p>10 am – 11am</p>
          </div>
          <div className="apply-fees">
            <h5>Fees and Packages Available:-</h5>
            <h5>3 Days a week</h5>
            <p>1 Month – Rs. 2,000/-</p>
            <p>3 Months – Rs. 5,400/- </p>
            <p>6 Months – Rs. 10,200/-</p>
            <p>12 Months – Rs. 19,200/- </p>
            <h5>6 Days a week</h5>
            <p>1 Month – Rs. 3,000/-</p>
            <p>3 Months – Rs. 8,100/-</p>
            <p>6 Months – Rs. 15,300/- </p>
            <p>12 Months – Rs. 28,800/-</p>
            <h5>Weekend</h5>
            <p>1 Month – Rs. 1,500/-</p>
            <p>3 Months – Rs. 4,100/-</p>
            <p>6 Months – Rs. 7,700/-</p>
            <p>12 Months – Rs. 14,500 /-</p>
          </div>
          
        </div>
        
        <div className="apply-details-left">
          <img src={`${baseDomain}${santaCruz.malad3}`} />
        </div>
      </div>
      <div className='updated-div'>
        <h5>To Be Updated Soon : </h5>
        <p>21 Days Better Living Course, 200 Hour Teacher Training Course, Workshops and Health Camps.</p>
        <p>The Yoga Institute Malad is an abode to honoring wellness of your mind body and soul.</p>
        <p>The Yoga Institute is the world’s oldest organized Yoga center, founded by Father of the Modern Yoga Renaissance Shri Yogendraji in 1918.</p>
        <p>The Yoga Institute is recognized worldwide for spreading the awareness of Yoga authentically and preserving the purity of our country’s rich ancient heritage.</p>
        <p>It has been awarded by the Prestigious Prime Mister Award.</p>
        <p>TYI has branches all over the world, the MALAD branch is managed by Yash Tongia, who has been teaching and practicing Yoga for almost a decade.</p>
        <p>Our work together here at The Yoga Institute Malad is of simplicity and consistency by nurturing life’s four pillars Ahar (Diet), Vihar (Recreation), Achar (Behavior), and Vichar (Thinking Process).</p>
        <p>At our yoga studio, experience specially curated programs, practices, books, workshop/camps and teacher training courses which will calm your mind, fortify your resiliency, address and resolve the health and life challenges.</p>
        <p>These yoga classes invite you into a deeper experience of your own body and mind, as you align with nature. Each session reflects the distinct personality and strengths of the teacher. We take great pride in the fact that we teach and practice the traditional yogic techniques.</p>
      </div>
    </>
  )
}

export default MaladPage