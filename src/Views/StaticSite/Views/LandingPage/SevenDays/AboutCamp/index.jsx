import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { landingLogo } from '../../../../assets/icons/icon'
import LandingButton from '../../../../Components/LandingCourse/LandingButton'
import PhoneInput from 'react-phone-number-input'
import { CampsWorkShops } from '../../constant'
import SevenDaysBlogs from '../../../../Components/LandingCourse/SevenDaysBlogs'
import SevenDaysThankYou from '../ThankYou'
import Slider from 'react-slick'
import { testimonialData4 } from '../../constant'
import { creatForm, successMail } from '../../Api'
import './style.scss'

const AboutCamp = () => {
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

  const [modal, setModal] = useState(false)
  const [err, setErr] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    country: '',
  })

  const { name, email, city, contact, country } = formData

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleForm = async() => {
    try {
      await creatForm({ ...formData, formType: 'DAYS7CAMPAIGN' })
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'DAYS_7_COURSE_FORM_SUBMISSION_MAIL',
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
    } else {
      handleForm()
    }
  }

  return (
    <div className='main-nutri-seven-days'>
      <main>
        <section className="section_1_2">
          <div className="bg_img_21">
            <nav>
              <Link to="/">
                <div className="tyi-logo_21">{landingLogo}</div>
              </Link>
              <div className='phone-info'>
                <p>CALL ON<a href="tel:+919136668224">&ensp;91-9136668224</a></p>
                <h2>GET ALL YOUR QUERIES RESOLVED!</h2>
              </div>
            </nav>
            <div className="img_form_21">
              <div className="form_text">
                <div className="left_heading1">JOIN</div>
                <div className="left_heading2"><span className='left_heading_bold'>7-DAYS</span> </div>
                <div className="left_heading2"><span className='left_heading_bold'>HEALTH CAMP &</span> </div>
                <div className="left_heading3">ACHIEVE MIND-BODY</div>
                <div className="left_heading3">BALANCE!</div>
              </div>
              <div className="form-phone-info">
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
              src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/seven-days/About-Camp.jpg"
              alt=""
            />
            <div className='sec2_text_desktop'>
              <div className="sec2_text_mobile">
                <div className="heading_21">About the Camp:</div>
                <div className="text_21">
              The 7-Day Health Camp is an introductory course to the theoretical and practical aspects of
              Yoga. Through this camp, the participants will get to learn about the principles of Yoga, and
              experience the Yogic lifestyle. This health camp will take you on a self-transformational
              journey which will reshape your life on the physical, mental and spiritual levels.
                </div>
                <div className="text_21">
              This program will enable you to achieve a balance between your mind, body and soul. The
              camps offers a much-needed respite from the hustle-bustle of the city and allows connecting
              with your inner self and experience the peace, joy and beauty of life.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
        </section>
        <section className='learning-section'>
          <div className='learning'>
            <div className='learning-info'>
              <span className='programs'>Learnings:</span>
              <ul>
                <li>Asanas</li>
                <li>Pranayama</li>
                <li>Kriyas</li>
                <li>Yogic concepts</li>
                <li>Sattvik food</li>
                <li>Games and recreation</li>
                <li>Relaxation and meditation</li>
                <li>Attitude training</li>
              </ul>
            </div>
            <div className='learning-benefits'><span className='programs'>Benefits:</span>
              <ul>
                <li>Improved clarity &amp; focus</li>
                <li>Better mind-body connection</li>
                <li>Reduced stress and anxiety</li>
                <li>Developing right habits</li>
                <li>Strengthening immunity &amp; digestive system</li>
                <li>Detoxifying the body</li>
                <li>Overall development of the personality</li>
                <li>Self-reliant in maintaining the physical health</li>
              </ul>
            </div>
          </div>
          <div className='registration-dates'>
            <div><span className='registration-heading'>Duration:</span></div>
            <div><span className='dates-reg'>24 th December to 30 th December, 2022</span></div>
            <div className='dates-reg-2'>(Residential &amp; Non-Residential)</div>
            <div className='reg-note'>Please note Limited seats are available. Registrations are on a first come first serve basis.</div>
            <div><span className='registration-heading'>Timings:</span></div>
            <div className='dates-reg'>7 am to 7 pm (IST)</div>
          </div>
        </section>
        <section>
          <div className='background-img' style={{ position:'relative' }} >
            <img className='img-bg-sec' src='https://ecom-static-site.oss-ap-south-1.aliyuncs.com/seven-days/Rectangle-6-copy-5.jpg' />
            <div className="overlap-heading">OTHER POPULAR CAMPS AND WORKSHOPS</div>
          </div>
        </section>
        <div className="popular_div21">
          {CampsWorkShops.map((item, idx) => (
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
      </main>
      {modal && (
        <SevenDaysThankYou
          name={name}
          setModal={setModal}
          setFormData={setFormData}
        />
      )}
    </div>
  )
}

export default AboutCamp