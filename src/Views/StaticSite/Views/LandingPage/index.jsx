import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import LandingButton from '../../Components/LandingCourse/LandingButton'
import { creatForm, successMail } from './Api'
import { testimonialData, popularCourses } from './constant'
import './style.scss'
import CampaignThankYou from './ThankYouPage'
import FeatuedBlogs from '../../Components/LandingCourse'
import { landingLogo } from '../../assets/icons/icon'

import baseDomain, { landingPage } from '../../assets/images/imageAsset'

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
  const [modal, setModal] = useState(false)

  const { name, email, contact, city, country } = formData

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitForm = async() => {
    try {
      await creatForm(formData)
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'SOCIAL_MEDIA_ADD_CAMPAIGN_CONFIRMATION_MAIL',
        subject: 'Thank you from The Yoga Institute',
        data: {
          name: name,
        },
        receivers: [email],
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
    <div className="landing-page">
      <nav className="landing-navigation">
        <Link to='/'>
          <div className="tyi-logo">
            {landingLogo}
          </div>
        </Link>
       
        <div className="call-cta">
          <h2>
            Call On:<a href="tel:+919136668224">+91-9136668224</a>
          </h2>
          <p>Get all your queries resolved!</p>
        </div>
      </nav>
      <main>
        <section className="form-section">
          <div className="form_img_div">
            <div className="form_img1">
              <div className="img_form">
                <div className="form_img2">
                  <img src={`${baseDomain}${landingPage.text}`} alt="" />
                </div>
                <div className="form-cta">
                  <form>
                    <h2>Sign-Up for the course!</h2>
                    <label htmlFor="name">
                      <input
                        type={'text'}
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={handleInput}
                      />
                      {err === 1 && (
                        <small style={{ color: 'red', marginLeft: '0' }}>
                          *Please Enter Name!
                        </small>
                      )}
                    </label>
                    <label htmlFor="contact">
                      <PhoneInput
                        placeholder="Enter phone number*"
                        defaultCountry="IN"
                        id="contact"
                        value={contact}
                        onChange={(e) => {
                          setFormData({ ...formData, contact: e })
                        }}
                      />
                      {err === 3 && (
                        <small> Please enter a valid phone number</small>
                      )}
                    </label>
                    <label htmlFor="email">
                      <input
                        type={'email'}
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleInput}
                      />
                      {err === 2 && (
                        <small style={{ color: 'red', marginLeft: '0' }}>
                          *Please Enter Valid Email!
                        </small>
                      )}
                    </label>
                    <label htmlFor="country">
                      <input
                        type={'text'}
                        name="country"
                        id="country"
                        placeholder="Enter country"
                        value={country}
                        onChange={handleInput}
                      />
                      {err === 4 && <small> Please enter your country</small>}
                    </label>
                    <label htmlFor="city">
                      <input
                        type={'text'}
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={handleInput}
                      />
                      {err === 5 && <small> Please enter your city</small>}
                    </label>
                    <LandingButton
                      text={'Sign Up'}
                      textColor={'#fff'}
                      isColor={'#F78A86'}
                      btnBorder={'#F78A86'}
                      btnAction={handleSubmit}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="details-section">
          <div className="learning_benefits">
            <div>
              <div className="learning_heading">Course Learnings</div>
              <ul>
                <li>
                  <p>Experiential Sessions of Yoga Asanas</p>
                </li>
                <li>
                  <p>
                    Learn, experience and transform yourself with Yogic
                    techniques – Pranayamas, Kriyas, Meditation, Sattvic food{' '}
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
            </div>
            <div>
              <div className="learning_heading">Course Benefits</div>
              <ul>
                <li>
                  <p>
                    With 200-Hrs TTC, you will get an in-depth understanding of
                    the Yogic practices and learn the tools to master physical,
                    mental and spiritual well-being
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="benefits-grid">
            <div className="benefit">
              <h3>PHYSICAL</h3>
              <p>Strength</p>
              <p>Stamina</p>
              <p>Flexibility</p>
              <p>Endurance</p>
              <p>Balance</p>
            </div>
            <div className="benefit">
              <h3>MENTAL</h3>
              <p>Mindfulness</p>
              <p>Calmness</p>
              <p>Stress-relief</p>
              <p>Increased Focus</p>
              <p>Better Clarity</p>
            </div>
            <div className="benefit">
              <h3>SPIRITUAL</h3>
              <p>Increased Happiness</p>
              <p>Optimism</p>
              <p>Inner peace</p>
            </div>
          </div>
          <div className="learning_heading">Course USPs</div>
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
          <div className="border_line">
            <div className="line_shadow"></div>
          </div>
          <div className="landing_img">
            <img src={`${baseDomain}${landingPage.curve2}`} alt="" />
          </div>
          <div className="interaction_div">
            <div className="interaction">
              <p>SPECIAL INTERACTION WITH DR. HANSAJI YOGENDRA</p>
              <div className="mataji1">
                <img src={`${baseDomain}${landingPage.mataji}`} alt="" />
              </div>
              <h2>
                Imbibe wisdom and get solutions to your problems by the
                legendary Yoga Guru Dr. Hansaji Yogendra.
              </h2>
              <h3>Duration</h3>
              <h4>
                200 Hrs TTC Batch 1 - 1 Month TTC Online &amp; On Campus -
                English
              </h4>
              <h3>Timings</h3>
              <h2>Monday to Saturday: 10:00 am - 6:00 pm (IST)</h2>
            </div>
            <div className="other_img">
              <img src={`${baseDomain}${landingPage.mataji}`} alt="" />
            </div>
          </div>
          <div className="other_div">
            <div className="other_line"></div>
            <div className="landing_other">Other Popular Courses</div>
            <div className="other_line"></div>
          </div>

          <div className="popular_div">
            {popularCourses.map((item, idx) => (
              <div key={idx} className="pop_courses_div">
                <div className="popular_img">
                  <img src={item?.img} alt="" />
                </div>
                <div className="popular_text">
                  <Link to={item?.url}>{item?.text}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="testimonials-section">
          <Slider {...settings}>
            {testimonialData.map((item, i) => (
              <div key={i} className="testimonial">
                <div className="left">
                  <img src={item.img} alt={`testimonial-${i + 1}`} />
                </div>
                <div className="right">
                  <p className="heading">{item.name}</p>
                  <span>{item.info}</span>
                  <p className="content">{item.message}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        <div className="other_div">
          <div className="other_line"></div>
          <div className="landing_other">Featured Blogs</div>
          <div className="other_line"></div>
        </div>

        <section className="featured-section">
          <FeatuedBlogs />
        </section>
        <section className='last_div'>
          <div className="last_logo">{landingLogo}</div>
          <div className="last_text">Address: Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai Maharashtra 400055</div>
        </section>
      </main>
      {modal && (
        <CampaignThankYou
          name={name}
          setModal={setModal}
          setFormData={setFormData}
        />
      )}
    </div>
  )
}

export default LandingPage
