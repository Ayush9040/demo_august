import React from 'react'
import Slider from 'react-slick'
import './LocationDetails.scss'
import baseDomain from '../../assets/images/imageAsset.js'
import { santaCruz } from '../../assets/images/imageAsset.js'

const Carousel = () => {
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
  return (
    <>
      <div className="carosoul-main">
        <Slider {...settings}>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.slide1}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.slide2}`} />
          </div>
          <div className="carosoul-slide">
            <img src={`${baseDomain}${santaCruz.slide3}`} />
          </div>
        </Slider>
        <h2>Regular Classes</h2>
      </div>
      <div className="courses-details">
        <div className="courses-details-left">
          <img src={`${baseDomain}${santaCruz.details}`} />
        </div>
        <div className="courses-details-right">
          <h2>Details on courses and Center</h2>
          <p>
            Regular classes are an ideal way of Yoga education for daily
            practice. The classes cover Asana’s, Pranayama’s, Kriya’s, diet and
            Yogic lifestyle recommendations. Further, based on participant
            health conditions separate guidance is given.
          </p>
          <div className="apply-address">
            <h5>Address -</h5>
            <h5>The Yoga Institute, Matunga </h5>
            <h5>
              Sri Kanyaka Parmeshwari Temple, Plot No 403, Vasavi Nilayam,
              Telang Road, Matunga
            </h5>
            <h5>(CR),Mumbai</h5>
            <h5>Contact us - <a href='tel: + 91 9343517490'>+ 91 9343517490</a></h5>
          </div>
        </div>
      </div>
      <div className="apply-main">
        <div className="apply-right">
          <h2>How to apply</h2>
          <div className="apply-duration">
            <p>
              Classes are of 1 hour duration + 15minutes of discussion on yogic
              topics and/or guidance on health conditions held on weekdays
              (Monday to Friday) and classes are for one and half hour on
              weekend (Saturday &amp; Sunday). You could opt for weekday’s
              classes and/or the weekends classes.
            </p>
            <p>
              A minimum attendance of 3 months is recommended, to experience the
              difference in your life. Participants can join on any day of the
              month.
            </p>
          </div>
          <div className="apply-timing">
            <h5>Weekdays classes</h5>
            <h5>Timings-</h5>
            <p>
              Morning Batches (6 days / 3 days a Week both option available)
            </p>
            <ol>
              <li>6:45 am - 8:00 am,</li>
              <li>8:00 am - 9:15 am,</li>
              <li>10:00 am - 11:15 am</li>
            </ol>
            <p className="apply-para">
              Evening Batches (Only 3 Days a Week available) –
            </p>
            <ol>
              <li>4:15 pm - 5:30 pm (Tuesday, Thursday, Saturday)</li>
              <li>6:15 pm - 7:30 pm (Monday, Wednesday, Friday)</li>
            </ol>
          </div>
          <div className="apply-packages">
            <h5>Fees and packages -</h5>
            <p>
              6 Days - ₹ 2,500/- (1 month), ₹ 6,700 (3 months), ₹ 13,000/-
              (6 months), ₹ 25,000/- (1 year)
            </p>
          </div>
          <div className="apply-timing">
            <h5>Weekend Classes -</h5>
            <h5>Timings -</h5>
            <p>Saturday - 9:30 am to 11:00 am</p>
            <p>Sunday - 9:30 am to 11:00 am</p>
          </div>
          <div className="apply-fees">
            <h5>Fees and packages -</h5>
            <p>
            ₹ 1,500/- (1 month), ₹ 4,000 (3 months), ₹ 7,600/- (6
              months), ₹ 15,000/- (1 year)
            </p>
          </div>
          <div className="apply-address">
            <h5>Address -</h5>
            <h5>The Yoga Institute, Matunga </h5>
            <h5>
              Sri Kanyaka Parmeshwari Temple, Plot No 403, Vasavi Nilayam,
              Telang Road, Matunga
            </h5>
            <h5>(CR),Mumbai</h5>
            <h5>Contact us - <a href='tel: + 91 9343517490'>+ 91 9343517490</a></h5>
          </div>
        </div>
        <div className="apply-details-left">
          <img src={`${baseDomain}${santaCruz.apply}`} />
        </div>
      </div>
    </>
  )
}

export default Carousel
