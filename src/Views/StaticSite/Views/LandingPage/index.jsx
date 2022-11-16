import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import CommonBtn from '../../Components/commonbtn'
import { creatForm,successMail } from './Api'
import { testimonialData } from './constant'

import './style.scss'
import CampaignThankYou from './ThankYouPage'

const LandingPage = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
    centerMode: false,
    centerPadding: '20%',
    swipe: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    country: '',
  })

  const [err, setErr] = useState(0)
  const [modal,setModal] = useState(false)

  const { name, email, contact, city, country } = formData

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitForm = async()=>{
    try {
      await creatForm(formData)
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'SOCIAL_MEDIA_ADD_CAMPAIGN_CONFIRMATION_MAIL',
        subject: 'Thank you from yoga The Yoga Institute',
        data: {
          name: name,
        },
        receivers: [ email ],
      })
      setModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {
    if (name === '') {
      setErr(1)
    } else if (email === '') {
      setErr(2)
    } else if (contact === '') {
      setErr(3)
    } else if (country === '') {
      setErr(4)
    } else if (city === '') {
      setErr(5)
    } else {
      submitForm()
    }
  }

  return (
    <div className='landing-page'>
      <nav className='landing-navigation'>
        <div className='tyi-logo'>
          <img
            style={{ transition: 'none !important' }}
            placeholder='none'
            alt='The Yoga Institute'
            src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/tyi.png'
          />
        </div>
        <div className='call-cta'>
          <h2>
            Call On:<a href='tel:+919136668224'>+91-9136668224</a>
          </h2>
          <p>And get all your queries resolved!</p>
        </div>
      </nav>
      <main>
        <section className='form-section'>
          <div className='landing-text'>
            <h1>
              Become an Internationally Certified Yoga Teacher From the World’s
              Oldest Organised Yoga Center!
            </h1>
          </div>
          <div className='form-cta'>
            <form>
              <h2>Sign-Up for the course!</h2>
              <label htmlFor='name'>
                <input
                  type={'text'}
                  name='name'
                  id='name'
                  placeholder='Enter Name'
                  value={name}
                  onChange={handleInput}
                />
                {err === 1 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    *Please Enter Name!
                  </small>
                )}
              </label>
              <label htmlFor='contact'>
                <PhoneInput
                  placeholder='Enter phone number*'
                  defaultCountry='IN'
                  id='contact'
                  value={contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e })
                  }}
                />
                {err === 3 && <small> Please enter a valid phone number</small>}
              </label>
              <label htmlFor='email'>
                <input
                  type={'email'}
                  name='email'
                  id='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={handleInput}
                />
                {err === 2 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    *Please Enter Valid Email!
                  </small>
                )}
              </label>
              <label htmlFor='country'>
                <input
                  type={'text'}
                  name='country'
                  id='country'
                  placeholder='Enter country'
                  value={country}
                  onChange={handleInput}
                />
                {err === 4 && <small> Please enter your country</small>}
              </label>
              <label htmlFor='city'>
                <input
                  type={'text'}
                  name='city'
                  id='city'
                  placeholder='Enter city'
                  value={city}
                  onChange={handleInput}
                />
                {err === 5 && <small> Please enter your city</small>}
              </label>
              <CommonBtn buttonAction={handleSubmit} text={'Sign Up'} />
            </form>
          </div>
        </section>
        <section className='details-section'>
          <p>Course Learnings</p>
          <ul>
            <li>
              <p>Experiential Sessions of Yoga Asanas</p>
            </li>
            <li>
              <p>
                Learn, experience and transform yourself with Yogic techniques –
                Pranayamas, Kriyas, Meditation, Sattvic food{' '}
              </p>
            </li>
            <li>
              <p>
                Patanjali Yoga Sutras and Hatha Yoga Texts with special
                reference to Hatha Yoga Pradipika
              </p>
            </li>
            <li>
              <p>Anatomy & Physiology</p>
            </li>
            <li>
              <p>Yoga for Wellness and Stress Management</p>
            </li>
          </ul>
          <p>Course Benefits</p>
          <h4>
            With 200-Hrs TTC, you will get an in-depth understanding of the
            Yogic practices and learn the tools to master physical, mental and
            spiritual well-being
          </h4>
          <div className='benefits-grid'>
            <div className='benefit'>
              <h3>PHYSICAL</h3>
              <p>Strength</p>
              <p>Stamina</p>
              <p>Flexibility</p>
              <p>Endurance</p>
              <p>Balance</p>
            </div>
            <div className='benefit'>
              <h3>MENTAL</h3>
              <p>Mindfulness</p>
              <p>Calmness</p>
              <p>Stress-relief</p>
              <p>Increased Focus</p>
              <p>Better Clarity</p>
            </div>
            <div className='benefit'>
              <h3>SPIRITUAL</h3>
              <p>Increased Happiness</p>
              <p>Optimism</p>
              <p>Inner peace</p>
            </div>
          </div>
          <p>Course USPs</p>
          <ul>
            <li>
              <p>
                Since 1954, over 1,00,000 students have been successfully
                certified under the 200-Hours TTC at The Yoga Institute.
              </p>
            </li>
            <li>
              <p>
                The students will receive triple accreditation - Yoga
                Certification Board (AYUSH Level-1), Yoga Alliance USA (RYT 200)
                and The Yoga Institute.
              </p>
            </li>
            <li>
              <p>
                Covering the nuances of Traditional Yoga, this course serves as
                a valuable ‘life school’ to those seeking balance and
                fulfillment in life.
              </p>
            </li>
            <li>
              <p>
                The Course Curriculum brings a perfect amalgamation of theory –
                knowledge and practical – skill.
              </p>
            </li>
          </ul>
          <p>Special Interaction with Dr. Hansaji Yogendra</p>
          <h4>
            Imbibe wisdom and get solutions to your problems by the legendary
            Yoga Guru Dr. Hansaji Yogendra.
          </h4>
          <p>Duration</p>
          <h4>
            200 Hrs TTC Batch 1 - 1 Month TTC Online &amp; On Campus - English
          </h4>
          <p>Timings</p>
          <h4>Monday to Saturday: 10:00 am - 6:00 pm (IST)</h4>
          <p>Other Popular Courses</p>
          <h4>The Yoga Institute offers a wide range of courses including:</h4>
          <ul>
            <li>
              <p>
                <Link to='/3-months-advanced-teacher-training-course'>
                  Advance TTC (900 Hrs){' '}
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to='/21-days-better-living-course'>
                  21 Days Better Living Course{' '}
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to='/7-days-camp-english'>
                  7 Days Health Camp
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to='/certificate-yoga-therapy-course-online'>
                  Certificate Yoga Therapy Course
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to='/nutri-diet'>
                  Nutri Diet Clinic
                </Link>
              </p>
            </li>
          </ul>
        </section>
        <section className='testimonials-section'>
          <Slider {...settings}>
            {testimonialData.map((item, i) => (
              <div key={i} className='testimonial'>
                <div className='left'>
                  <img src={item.img} alt={`testimonial-${i + 1}`} />
                </div>
                <div className='right'>
                  <p className='heading'>{item.name}</p>
                  <span>{item.info}</span>
                  <p className='content'>{item.message}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        <section className='featured-section'>
          <p>Featured Blogs</p>
          <h4>
            Read our informative blogs and increase your knowledge about Yoga,
            Asanas, Pranayamas and much more.
          </h4>
          <Link to='/one-month-yoga-teachers-training-course-yoga-instructor-training/'>
            http://www.theyogainstitute.org/one-month-yoga-teachers-training-course-yoga-instructor-training/
          </Link>
          <Link to='/importance-and-benefits-of-yoga'>
            http://www.theyogainstitute.org/importance-and-benefits-of-yoga
          </Link>
        </section>
      </main>
      { modal && <CampaignThankYou name={name} /> }
    </div>
  )
}

export default LandingPage
