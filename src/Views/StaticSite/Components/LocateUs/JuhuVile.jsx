import React from 'react'
import Slider from 'react-slick'
import baseDomain from '../../assets/images/imageAsset'
import { juhuVileAsset } from '../../assets/images/imageAsset'
const JuhuVile = () => {
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
      <div className='carosoul-main'>
        <Slider {...settings}>
          <div className='carosoul-slide'>
            <img src={`${baseDomain}${juhuVileAsset.carosoul1}`} />
          </div>
          <div className='carosoul-slide'>
            <img src={`${baseDomain}${juhuVileAsset.carosoul2}`} />
          </div>
          <div className='carosoul-slide'>
            <img src={`${baseDomain}${juhuVileAsset.carosoul3}`} />
          </div>
        </Slider>
        <div className='title'>
          <h2>Special Regular Classes</h2>
        </div>
        <div className="courses-details">
          <div className="courses-details-left">
            <img src={`${baseDomain}${juhuVileAsset.left}`} />
          </div>
          <div className="courses-details-right">
            <h2>Details on courses and Center</h2>
            <p>
              Special classes are an ideal way of Yoga education for daily practice. The classes cover Asanas, Pranayamas, Kriyas, diet and Yogic lifestyle recommendations. Further, based on participant health conditions separate guidance is given.
            </p>
          </div>
        </div>
        <div className="apply-main">
          <div className="apply-right">
            <h2>How to apply</h2>
            <div className="apply-duration">
              <p>
                Classes are of 1 hour duration held on the weekdays (Monday to Saturday) and classes are for one and half hour on weekend (Saturday & Sunday). You could opt for weekday’s classes and/or the weekends classes.
              </p>
              <p>
                A minimum attendance of 3 months is recommended, to experience the difference in your life. Participant can join on any day of the month.
              </p>
            </div>
            <div className="apply-address">
              <h5>The Yoga Institute, Juhu </h5>
              <h5>Centre 1</h5>
              <h5>Ground Floor Backside, Abhijat Bunglow, Plot No. 48, NS Road Number 7, Opp. Siddhivinayak Building, JVPD Scheme, Juhu.</h5>
              <p>All Classes are 1 Hour (unless specified)</p>
            </div>
            <div className="apply-timing">
              <h5>Weekend Classes:</h5>
              <ul>
                <li>Monday / Wednesday/ Friday (Morning)</li>
                <li>Timings: 6:30 am, 7:30 am, 9:00 am, 10:00 am, 11:30 am, 12:30 pm, 4:00 pm, 5:00, 6.00 pm, 7.00 pm</li>
                <li>Tuesday / Thursday/ Saturday (Morning)</li>
                <li>Timings: 6:30 am, 7.00 pm</li>
              </ul>
              <h5>Weekend Special Classes:</h5>
              <ul>
                <li>Timings: 9:00 to 10.30 am</li>
              </ul>
            </div>
            <div className="apply-packages">
              <h5>Yoga for Weight Management</h5>
              <p>
                Obesity is increasing at an alarming rate all over the world and particularly in India. There are several contributing factors towards this problem. Despite following different types of diet and weight loss programs, the results are often not satisfactory. The basic reason for this ‘yoyo effect’ is that obesity is not the cause of the problem. It’s only the effect of some deep-rooted problem within one’s total personality complex.
              </p>
              <ul style={{ fontWeight: 'bold' }}>
                <li>Tuesday / Thursday/ Saturday (Morning)</li>
                <li>Timings: <span className='timings-font'>7:30 am</span>
                  <h5>Pranayam and Meditation Class</h5>
                  <p>No other movement in recent years has so fascinated people as the possibility of calming the mind through meditation and pranayama. All the techniques of classic yoga of Patanjali aim at making one more aware and finally to see the Self shining forth in its own true nature.</p>
                </li>
                <li>Tuesday / Thursday/ Saturday (Evening)</li>
                <li>Timings: <span className='timings-font'>6:00 pm</span>
                  <h5>Special Regular Pre-Postnatal Classes</h5>
                  <p>A great opportunity for all pregnant women! Come – join us, learn and practice simple yoga techniques for a happier pregnancy.</p>
                </li>
                <li>Tuesday / Thursday/ Saturday (Morning)</li>
                <li>Timings:  <span className='timings-font'>7:00 pm</span></li>
                <li>Monday / Wednesday/ Friday (Evening)</li>
                <li>Timings: <span className='timings-font'>3.00 pm and 6:00 pm</span></li>
              </ul>
              <h5 className='apply-address'>Kids Yoga Classes :</h5>
              <ul>
                <li>Mon & Friday</li>
                <li>Timings :<span className='timings-font'>6.00 pm</span></li>
                <li>Sat and Sun</li>
                <li>Timings : <span className='timings-font'>10.30 to 11.30 am</span></li>
              </ul>
              <div className="apply-address">
                <h5>The Yoga Institute, Vile Parle</h5>
                <h5>Centre 2</h5>
                <h5>Sanyas Ashram Temple, Off. Bajaj Road, Vile Parle West, Mumbai - 400056.</h5>
                <p>All classes are for 1 hour</p>
              </div>
              <ul className='apply-address'>
                <li>Monday / Wednesday/ Friday (Morning)</li>
                <li>Timings:<span className='timings-font apply-address'> 6:30 am, 7.30 am, 8.30 am</span>
                  <h5>The Yoga Institute, Rotary Club</h5>
                  <h5>Centre 3</h5>
                  <h5>Rotary Club of Bombay West Rotary Service Centre, Rotary Chowk, Juhu Tara Road, Santacruz W, Mumbai 400049.</h5>
                  <p>All classes are for 1 hour [Unless specified]</p>
                </li>
                <li className='apply-address'>Monday  to Friday (Morning) [Alternate days Mon-Wed-Fri also available]</li>
                <li>Timings:<span className='timings-font'> 6:30 am, 7:30 am, 9:00 am</span>
                  <h5 className='apply-address'>Weekend Special Classes:</h5>
                </li>
                <li>Timings:<span className='timings-font'> 8:00 am to 9:30 am</span></li>
              </ul>
              <div className="apply-address apply para">
                <h5>The Yoga Institute, Lokhandwala</h5>
                <h5>G703, Aston Building, Above Mercedes Benz Showroom, Andheri, Near Lokhandwala Circle</h5>
                <p>All Classes are for 1 Hour (unless specified)</p>
              </div>
              <div className="apply-packages">
                <ul className='apply-para'>
                  <li>Mon – Wed - Fri</li>
                  <p><span className='title-font'>Timings : </span>6:30 am, 7:30 am, 8:30 am, 9:30 am, 10:30 am and 11:30 am
                    4:00 pm, 5:00 pm, 6:00 pm and 7:00 pm</p>
                  <li className='apply-para title-font'>Advance Class
                    <p className='timings-font'>Sunday 10.30 am to 12.00 pm</p></li>
                  <li className='apply-para title-font'>Weekend class
                    <p><span className='title-font'>Timing :</span> 9:30am to 10:30 am</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="apply-details-left">
            <img src={`${baseDomain}${juhuVileAsset.right}`} />
          </div>
        </div>
      </div>
    </>
  )
}
export default JuhuVile






