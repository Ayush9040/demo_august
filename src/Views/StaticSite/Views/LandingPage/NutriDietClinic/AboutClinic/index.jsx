import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import NutriThankYou from '../ThankYouPage/Index'
import { creatForm, successMail } from '../../../LandingPage/Api'
import './style.scss'
import { CampsWorkShops } from '../../constant'
import { landingLogo } from '../../../../assets/icons/icon'
import LandingButton from '../../../../Components/LandingCourse/LandingButton'
import NutriBlogs from '../../../../Components/LandingCourse/NutriBlogs'
import Slider from 'react-slick'
import { testimonialData3 } from '../../constant'

const NutriDietClinic = () => {
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
      await creatForm({ ...formData, formType: 'NUTRIDIETCAMPAIGN' })
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'NUTRI_DIET_CAMPAIGN_CONFIRMATION_MAIL',
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
    <div className='main-nutri-clinic'>
      <nav>
        <Link to='/'>
          <div className='nutri-logo'>
            <img src='https://mail.google.com/mail/u/0?ui=2&ik=21ca1f2dc7&attid=0.1&permmsgid=msg-f:1752172342980195098&th=1850f7766899331a&view=att&disp=safe&realattid=f_lbnb8mrr0' alt='Nutri-clinic-logo' />
          </div>
        </Link>
        <div className='phone-info'>
          <h2>Book Your consultation Now</h2>
          <p>Call on<a href="tel:+919136668224">&ensp;+91-9136668224</a></p>
        </div>
      </nav>
      <main>
        <section className="section_1_2">
          <div className="bg_img_21">
            <div className="img_form_21">
              <div className="form_text">
                <div className="left_heading1">Get<span className='left_heading_text'> Customised</span></div>
                <div className="left_heading1"><span className='left_heading_bold'>Diet Plans</span> From</div>
                <div className="left_heading2">NUTRI DIET CLINIC</div>
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
        <section>
          <div className='about_clinic'>ABOUT THE CLINIC</div>
          <div className='about_clinic_info'>Nutri Diet Clinic, introduced by The Yoga Institute is a unique health clinic offering dietary
            solutions for the body as well as the mind.</div>
          <div className='about_clinic_info'>Based on our client’s lifestyle, habits, preferences and culture, we will provide professionally
            supervised customized diet plans. The nutritional plans consist of a well-balanced diet,
            homemade quick and healthy recipes and a complete workout plan.</div>
          <div className='about_clinic_info'>Our ancient scriptures have laid importance on Sattvik Diet which is pure, natural, energy-
            containing and fresh food. Our diet plans will be based on the concept of Sattvik food to help
            our clients lead a healthy life on physical, mental and emotional levels.</div>
        </section>
        <section>
          <div className='programs-info'>OUR PROGRAMS:
            <ul>
              <li>Shape-Up Program<span className='program-font'>(Weight Loss/Weight Gain/Muscle Gain)</span></li>
              <li>Hormonal Imbalance Program<span className='program-font'>(PCOS/ Thyroid)</span></li>
              <li>Gut Health Program <span className='program-font'>(Acidity/Constipation/Digestion Issues)</span></li>
              <li>Metabolic Disorder Program <span className='program-font'>(Diabetes Mellitus/Hypertension/Cholesterol)</span></li>
              <li>Pregnancy/Lactation Program</li>
              <li>Therapeutic Plans <span className='program-font'>(Respiratory/Gastroesophageal/Liver/Kidney)</span></li>
              <li>Other Types of Diet <span className='program-font'>(Vegan Diet/Keto Diet/Intermittent Fasting/Lactose Intolerant/Gluten Free Diet)</span></li>
              <li>Kids Nutrition</li>
            </ul>
            <div>
              <img className='img-programs' src='https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Nutri-Clinic/Salad.png' />
              <div className='programs-benefits'><span className='programs'>PROGRAMS BENIFITS:</span>
                <ul>
                  <li>Customized Holistic Diet Plans
                    <p>(As per the client’s routine, lifestyle, and preferences)</p>
                  </li>
                  <li>Nutritional Counselling</li>
                  <li>Personalized Workout Plan</li>
                  <li>Healthy Home-Made Recipes</li>
                  <li>Dietary Solutions &amp; Guidelines</li>
                  <li>Daily WhatsApp Support (Daily diet recall and instant problem-solving)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section_3_2">
          <div className="int_img_text21">
            <div className="int_text21">
              <div className="title_21">CONSULTATION TIMINGS</div>
            </div>
            <div className="int_img21">
              <img
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Nutri-Clinic/Thali.png"
                alt=""
              />
            </div>
          </div>
          <div className="details_21_2">
            <div className="details_text">
              10:00AM to 6:30PM (IST)
            </div>
            <div className="details_text">
              4:30 AM to 1:00 PM (GMT)
            </div>
          </div>
        </section>
        <div className="other_div21">
          <div className="other_line21"></div>
          <div className="landing_other21">Other Popular Camps and Workshops</div>
          <div className="other_line21"></div>
        </div>
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
            {testimonialData3.map((item, i) => (
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
          <NutriBlogs />
        </section>
        <section className="last_div21">
          <div className="last_logo21">{landingLogo}</div>
          <div className="last_text21">
            Address: Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai
            Maharashtra 400055
          </div>
        </section>
        <div className='bottom-img-div'>
          <img src='https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Nutri-Clinic/top-view-fruits-vegetables-with-copy-space.png'  className='bottom-image'/>
        </div>
      </main>
      {modal && (
        <NutriThankYou
          name={name}
          setModal={setModal}
          setFormData={setFormData}
        />
      )}
    </div>
  )
}

export default NutriDietClinic