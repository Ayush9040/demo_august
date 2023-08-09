import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { landingLogo } from '../../../assets/icons/icon'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import LandingButton from '../../../Components/LandingCourse/LandingButton'
import ImageProp from '../../../../StaticSite/assets/images/museum1_.jpg'
import Flower from '../../../assets/images/flower.jpg'
import GroupImg from '../../../assets/images/overview-bg.jpg'
import CoverImage from '../../../assets/images/cover.png'
import FirstImage from '../../../assets/images/first.png'
import SecondImage from '../../../assets/images/second.png'
import FounderImage from '../../../assets/images/founder.png'
import Course1 from '../../../assets/images/popCo1.png'
import Course2 from '../../../assets/images/popCo2.png'
import Course3 from '../../../assets/images/popCo3.png'
import Course4 from '../../../assets/images/popCo4.png'

const LandingPageTyi = () => {
  const [modal, setModal] = useState(false)
  const [err, setErr] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    country: '',
  })

  const { name, email, city, contact, country } = formData
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
                  SIGNUP FOR THE COURSE
                </h5>
                <label htmlFor="name">
                  <input
                    type={'text'}
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    value={name}
                    // onChange={handleInput}
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
                    // onChange={handleInput}
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
                    // onChange={handleInput}
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
                    // onChange={handleInput}
                  />
                  {err === 5 && <small> Please enter your city</small>}
                </label>
                <button className="submit-btn">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="overlap-container">
        <div className="img-container">
          <img src={FirstImage} alt="image" />
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
          <img src={SecondImage} alt="image" />
        </div>
      </div>
      <div className="gradient-container">
        <div className="grad-label"> WHAT WILL YOU LEARN ? </div>
        <div className="label-list">
          <ul>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Experiential Yoga Asana Sessions
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Quintessence of Bhagavad Gita <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and Samkhya Philosophy.
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Yogic Techniques: Pranayams,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kriyas and importance of Sattvik{' '}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Anatomy and Physiology
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Patanjali Yoga Sutras and Hatha <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yoga Texts, with an emphasis on
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hatha Yoga Pradipika
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Yoga for Wellness and Stress <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;management
            </li>
          </ul>
        </div>
      </div>
      <div className="gradient-container2">
        <div className="grad-label2"> COURSE BENEFITS </div>
        <div className="label-list2">
          <ul>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Triple Accreditation
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Practical Experience <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
              Learning.
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Personal Growth
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              In-Depth Knoweledge <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and
              Practice
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Physical and Mental <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Well-being
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Attitude Training
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Internationally <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recognized{' '}
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certification
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
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
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Over 1,00,000 students certified since 1954, a testament to our
              rich legacy and expertise <br />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in yoga education.
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Triple accreditation: Yoga Certification Board ( AYUSH Level-1
              ),Yoga Alliance USA (RYT 200),
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and The Yoga Institute,
              ensuring international recognition and credibility.
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
              Embracing the essence of Traditional Yoga, this course serves as a
              transformative <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              journey,guiding individuals towards balance and fulfillment in all
              aspects of life.
            </li>
            <li>
              <img src={Flower} alt="Flower Icon" className="flowerIcon" />
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
          <img src={FounderImage} alt="founderImage" />
        </div>
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
            Dr. Hansaji Yogendra, to find solutions to your
            <br />
            challenges and deepen your Yogic journey.
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
        <div className="popCourses">
          <img src={Course1} alt="course1" />
          {/* <div className="popCo1Text">Advance TTC</div> */}
        </div>
        <div className="popCourses">
          <img src={Course2} alt="course1" />
          {/* <div className="popCo1Text">Advance TTC</div> */}
        </div>
        <div className="popCourses">
          <img src={Course3} alt="course1" />
          {/* <div className="popCo1Text">Advance TTC</div> */}
        </div>
        <div className="popCourses">
          <img src={Course4} alt="course1" />
          {/* <div className="popCo1Text">Advance TTC</div> */}
        </div>
        <div className="popCourses">
          <img src={Course1} alt="course1" />
          {/* <div className="popCo1Text">Advance TTC</div> */}
        </div>
      </div>
      <div className="popCoText">
        <div className="popCo1Text">Advance TTC<br/>&nbsp;&nbsp;(200-Hrs)</div>
        <div className="popCo1Text">21 Days Better<br/>Living course</div>
        <div className="popCo1Text">7 Days Health<br/>Camp</div>
        <div className="popCo1Text">Certificate Yoga<br/>Therapy Course</div>
        <div className="popCo1Text">Nutri Diet Clinic</div>
      </div>
      <div className='testimonials'>
        <div className='testHead'>TESTIMONIALS</div>
        <div className='testText'>Discover the invaluable feedback and firsthand experiences<br/>
        shared by our students, offering insights into the transformative <br/>
        journey they have embarked upon at The Yoga Institute.</div>
      </div>
      <div className='testimonials2'>
        <div className='testHead2'>FEATURED BLOGS</div>
        <div className='testText2'>Expand your knowledge on Yoga, Asanas, Pranayams,<br/>
        and more through our insightful and informative blogs, <br/>
        empowering you to delve deeper into the world of yoga.</div>
      </div>
      <div className='underline'><u>______________________________________________________________________________________________________________________________________</u></div>
    </div>
  )
}

export default LandingPageTyi
