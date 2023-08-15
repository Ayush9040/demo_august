import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { landingLogo } from '../../../assets/icons/icon'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import GroupImg from '../../../assets/images/overview-bg.jpg'
import CampaignThankYou from '../ThankYouPage'
import Slider from 'react-slick'
import { testimonialData4 } from '../constant'
import SevenDaysBlogs from '../../../Components/LandingCourse/SevenDaysBlogs'
import { popularCourses } from '../constant'

import { creatForm, successMail } from '../Api'

const LandingPageTyi = () => {
  const [modal, setModal] = useState(false)
  const [err, setErr] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    country: '',
    city: '',
  })

  const { name, email, city, contact, country } = formData

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleForm = async() => {
    try {
      await creatForm({ ...formData, formType: 'MONTHS3HRS900CAMPAIGN' })
      await successMail({
        type: 'MONTHS3HRS900CAMPAIGN',
        HTMLTemplate: 'MONTHS_3_900_HRS_FORM_CONFIRMATION_MAIL',
        subject: 'Thank you from The Yoga Institute',
        data: {
          name: name,
        },
        receivers: [email],
      })
      setModal(true)
    } catch (error) {
      console.log('error')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '') {
      setErr(1)
    } else if (contact === '') {
      setErr(2)
    } else if (email === '') {
      setErr(3)
    } else if (country === '') {
      setErr(4)
    } else if (city === '') {
      setErr(5)
    } else {
      handleForm()
    }
  }
  let settings = {
    dots: false,
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

  return (
    <div className="main-container">
      <nav>
        <Link to="/">
          <div className="tyi-logo_21">{landingLogo}</div>
        </Link>
        <div className="call-cta_21">
          <h2>
            Call On<a href="tel:+919136668224">&ensp;+91-9136668224</a>
          </h2>
          <h2>Resolve all your queries!</h2>
        </div>
      </nav>
      <section className="section_1">
        <div className="backgroundImage">
          <div className="backgroundTitle">
            <div className="form_text">
              <div className="left_heading1">JOIN OUR</div>
              <div className="left_heading2">
                <span className="left_heading_bold">900-HRS (3-MONTHS)</span>{' '}
              </div>
              <div className="left_heading2">
                <span className="left_head_bold">TEACHER TRAINING COURSE</span>{' '}
              </div>
            </div>

            <div className="form-phone-info">
              <form>
                <h5>
                  EMBARK ON <br /> A TRANSFORMATIVE JOURNEY
                  <br />
                  <span className='lightWeight'>SIGNUP FOR THE COURSE</span>
                </h5>
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
                  {err === 2 && (
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
                  {err === 3 && (
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
                <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="overlap-container">
        <div className="img-container">
          <img
            src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/first.png"
            alt="image"
          />
        </div>
        <div className="content-container1">
          Through Our
          <br />
          Comprehensive Course,
          <br />
          <span className="selected-content1">
            Achieve International Certification
            <br />
            <span className="underlined-text">As A Yoga Teacher</span>
          </span>
        </div>
      </div>
      <div className="container_2">
        <div className="content-container2">
          <span className="span-select">OVER 1,50,000</span> STUDENTS
          <br />
          INTERNATIONALLY CERTIFIED THROUGH <br />
          <span className="selected-content2">
            {' '}
            <span className="underlined-text2">THE YOGA INSTITUTES TTC. </span>
          </span>{' '}
        </div>
        <div className="img-container">
          <img
            src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/second.png"
            alt="image"
          />
        </div>
      </div>
      <div className="gradient-container">
        <div className="grad-label"> WHAT WILL YOU LEARN ? </div>
        <div className="label-list">
          <div className="list1"></div>
          <div className="list2"></div>
          <ul>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Experiential Yoga Asana Sessions
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Quintessence of Bhagavad Gita <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and Samkhya Philosophy.
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Yogic Techniques: Pranayams,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kriyas and importance of Sattvik{' '}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Anatomy and Physiology
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Patanjali Yoga Sutras and Hatha <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yoga Texts, with an emphasis on
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hatha Yoga Pradipika
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Yoga for Wellness and Stress <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;management
            </li>
          </ul>
        </div>
      </div>
      <div className="gradient-container2">
        <div className="partitions1"></div>
        <div className="partitions2"></div>
        <div className="partitions3"></div>
        <div className="grad-label2"> COURSE BENEFITS </div>

        <div className="label-list2">
          <ul>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Triple Accreditation
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Practical Experience <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
              Learning.
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Personal Growth
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              In-Depth Knoweledge <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
              Practice
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Physical and Mental <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Well-being
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Attitude Training
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Internationally <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recognized{' '}
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certification
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Holistic Approach
            </li>
          </ul>
          <div className="groupImage">
            <img src={GroupImg} alt="image" className="group" />
          </div>
        </div>
      </div>
      <div className="featureCourse">
        <div className="courseHead">UNIQUE FEATURES OF THIS COURSE</div>
        <div className="courseHeadItems">
          <ul>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Over 1,00,000 students certified since 1954, a testament to our
              rich legacy and expertise <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in yoga education.
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Triple accreditation: Yoga Certification Board ( AYUSH Level-1
              ),Yoga Alliance USA (RYT 200),
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and The Yoga Institute,
              ensuring international recognition and credibility.
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              Embracing the essence of Traditional Yoga, this course serves as a
              transformative <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              journey,guiding individuals towards balance and fulfillment in all
              aspects of life.
            </li>
            <li>
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/flower.jpg"
                alt="Flower Icon"
                className="flowerIcon"
              />
              The curriculum seamlessly integrates theoretical knowledge and
              practical skills, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              providing a comprehensive and well-rounded learning experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="founderContainer">
        <div className="founderImage">
          {' '}
          <img
            src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/New-landing-page/founder.png"
            alt="founderImage"
          />
        </div>
        <div className="cusp"></div>
        <div className="founderContent">
          <div className="founderArc">
            SPECIAL INTERACTION WITH <br />
            <span className="founderName">DR. HANSAJI YOGENDRA</span>
          </div>
          <div className="founderText">
            Experience profound wisdom and recieve
            <br />
            guidance from the legendary Yoga Guru,
            <br />
            Dr. Hansaji Yogendra, to find solutions to 
            <br />
            you challenges and deepen your Yogic journey.
          </div>
        </div>
      </div>
      <div className="schedule">
        <div className="duration">
          <u>Duration</u>
        </div>
        <div className="durationText">
          900 HRS TTC Batch- 3 Months TTC On Campus - English
        </div>
        <div className="timing">
          <u>TIMING</u>
        </div>
        <div className="timingText">
          Monday to Saturday:6:30 am - 8:00pm (IST)
        </div>
      </div>
      <div className="otherCourses">
        <div className="otherCoursesHead">OTHER POPULAR COURSES</div>
        <div className="offers">
          The Yoga Institute offers a wide range of courses including:
        </div>
      </div>
      
      <div className="popularCourses">
        {popularCourses.map((item, idx) => (
          <div key={idx} className="popCourses">
            <div className="image123">
              <img src={item?.img} alt="" />
            </div>
            <div className="popCo1Text">
              <Link to={item?.url}>{item?.text}</Link>
            </div>
          </div>
        ))}
      </div>
      <section className="testimonials-section21">
        <Slider {...settings}>
          {testimonialData4.map((item, i) => (
            <div key={i} className="testimonial21">
              <div className="left21">
                <img src={item?.img} alt={`testimonial-${i + 1}`} />
              </div>
              <div className="right21">
                <p className="heading21">{item?.name}</p>
                <span>{item?.info}</span>
                <p className="content21">{item?.message}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <div className="other_div21">
        <div className="other_line21"></div>
        <div className="landing_other21">Featured Blogs</div>
        <div className="other_line21"></div>
      </div>

      <section className="featured-section21">
        <SevenDaysBlogs />
      </section>
      <section className="last_div21-2">
        <div className="last_logo21">{landingLogo}</div>
        <div className="last_text21">
          Address: Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai
          Maharashtra 400055
        </div>
      </section>

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

export default LandingPageTyi
