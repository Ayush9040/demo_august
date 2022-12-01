import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { landingLogo } from '../../../assets/icons/icon'
import './styling.scss'
import LandingButton from '../../../Components/LandingCourse/LandingButton'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import FeatuedBlogs from '../../../Components/LandingCourse'
import { testimonialData } from '../constant'
import { popularCourses } from '../constant'
import Slider from 'react-slick'
import CampaignThankYou from '../ThankYouPage'
import { creatForm, successMail } from '../Api'

const LandingPageNew = () => {
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
  const [err, setErr] = useState(0)
  const [modal, setModal] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    country: '',
  })
  const { name, email, contact, city, country } = formData
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleForm = async() => {
    try {
      await creatForm({ ...formData, formType: 'DAYS21COURSE' })
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'DAYS_21_COURSE_CONFIRMATION_MAIL',
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
  const handleSubmit = (e) => {
    e.preventDefault()
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
      handleForm()
    }
  }
  return (
    <div className="main_div_21">
      <nav>
        <Link to="/">
          <div className="tyi-logo_21">{landingLogo}</div>
        </Link>
        <div className="call-cta_21">
          <h2>
            Call On<a href="tel:+919136668224">+91-9136668224</a>
          </h2>
          <p>Get all your queries resolved!</p>
        </div>
      </nav>
      <main>
        <section className="section_1">
          <div className="bg_img_21">
            <div className="img_form_21">
              <div className="form_text">
                <div className="main_heading1">BUILD HEALTHY </div>
                <div className="main_heading1">HABITS</div>
                <div className="main_heading2">IN JUST 21 DAYS!</div>
                <div className="main_heading1"> LEARN FROM THE WORLDS </div>
                <div className="main_heading1">OLDEST ORGANISED</div>
                <div className="main_heading1">YOGA CENTRE</div>
              </div>
              <div className="form-cta_21">
                <form>
                  <h2>Sign-Up for the Course!</h2>
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
        </section>
        <section className="section_2">
          <div className="sec2_img">
            <img
              src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/Camps/Weight_management.jpg"
              alt=""
            />
          </div>
          <div className="sec2_text">
            <div className="heading_21">About the Program</div>
            <div className="text_21">
              The 21-Days Better Living Course is a Certificate Course designed
              to help people build healthy habits, imbibe yogic principles and
              lead a well-balanced life.{' '}
            </div>
            <div className="text_21">
              The Yoga Institute has been successfully conducting this course
              for over 50 years with more than 1 lakh participants till date. As
              it is said that it takes 21 days to form a habit, this course will
              help participants to build healthy habits effortlessly.{' '}
            </div>
          </div>
        </section>
        <section className="details-section21">
          <div className="learning_benefits21">
            <div>
              <div className="heading_21">Course Learnings</div>
              <ul>
                <li>
                  <p>
                    The participants will be introduced to the concepts of
                    Astanga Yoga (eight limbs of Yoga)
                  </p>
                </li>
                <li>
                  <p>
                    The course adopts a holistic approach and incorporates
                    asanas, pranayamas and kriyas
                  </p>
                </li>
                <li>
                  <p>
                    This program has curated practical and theoretical knowledge
                    where the students will learn about Yogic concepts and
                    practically experience the Yogic techniques in a simple and
                    effective method
                  </p>
                </li>
                <li>
                  <p>
                    This course will guide participants to organise their work,
                    set their priorities and lead a happy and balanced life
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="heading_21">Course Benefits</div>
              <ul>
                <li>
                  <p>Enhanced productivity and clarity</p>
                </li>
                <li>
                  <p>Increased happiness and inner peace</p>
                </li>
                <li>
                  <p>Physical strength & flexibility</p>
                </li>
                <li>
                  <p>Better Interpersonal relationships </p>
                </li>
                <li>
                  <p>Reduced anger, stress and anxiety</p>
                </li>
                <li>
                  <p>Improved physical, mental and emotional health</p>
                </li>
                <li>
                  <p>Positive attitude training</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section_3">
          <div className="int_img_text21">
            <div className="int_text21">
              <div className="title_21">Special Interaction with</div>
              <div className="title_21">Dr. Hansaji Yogendra </div>
              <div className="subtitle_21">
                Imbibe wisdom and get solutions to your problems by the
                legendary Yoga Guru Dr. Hansaji Yogendra.
              </div>
            </div>
            <div className="int_img21">
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Landing_page/Hansaji.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="details_21">
            <div className="detail_heading">Duration</div>
            <div className="details_text">
              4th December to 24th December, 2022 (For consecutive 21-days)
            </div>
            <div className="detail_heading">Timings</div>
            <div className="details_text">
              7:00 am to 8:30 am (Batch 1 – Morning On-Campus English)
            </div>
            <div className="details_text">
              6:30 pm to 8:00 pm (Batch 2 – Evening On-Campus & Online English)
            </div>
          </div>
        </section>
        <section className="section_2">
          <div className="heading_21">Glimpse of the Course</div>
          <div className="text_21">
            Heres an insight into the 21-Days Better Living Course. This program
            will transform your life and help you to maintain a mind-body
            balance. Come experience, explore and learn Yoga to lead a joyful
            life.{' '}
          </div>
          <div className="text_21">
            <p className="text_21">To view the video,</p>
            <span className="text_21">click on the link:</span>
            <a href="https://www.instagram.com/reel/CkDZJm7IVih/?igshid=Zjc2ZTc4Nzk%3D">
              https://www.instagram.com/reel/CkDZJm7IVih/?igshid=Zjc2ZTc4Nzk%3D
            </a>
          </div>
        </section>
        <div className="other_div21">
          <div className="other_line21"></div>
          <div className="landing_other21">Other Popular Courses</div>
          <div className="other_line21"></div>
        </div>
        <div className="popular_div21">
          {popularCourses.map((item, idx) => (
            <div key={idx} className="pop_courses_div21">
              <div className="popular_img21">
                <img src={item?.img} alt="" />
              </div>
              <div className="popular_text21">
                <Link to={item?.url}>{item?.text}</Link>
              </div>
            </div>
          ))}
        </div>

        <section className="testimonials-section21">
          <Slider {...settings}>
            {testimonialData.map((item, i) => (
              <div key={i} className="testimonial21">
                <div className="left21">
                  <img src={item.img} alt={`testimonial-${i + 1}`} />
                </div>
                <div className="right21">
                  <p className="heading21">{item.name}</p>
                  <span>{item.info}</span>
                  <p className="content21">{item.message}</p>
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
          <FeatuedBlogs />
        </section>
        <section className="last_div21">
          <div className="last_logo21">{landingLogo}</div>
          <div className="last_text21">
            Address: Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai
            Maharashtra 400055
          </div>
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

export default LandingPageNew
