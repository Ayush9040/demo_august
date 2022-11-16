import React from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import CommonBtn from '../../Components/commonbtn'
import './style.scss'

const LandingPage = () => {
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
              Become an Internationally Certified Yoga
              Teacher From the World’s Oldest Organised Yoga Center!
            </h1>
          </div>
          <div className='form-cta' >
            <form>
              <h2>Sign-Up for the course!</h2>
              <label htmlFor='name' >
                <input type={'text'} name='name' id='name' placeholder='Enter Name' />
              </label>
              <label htmlFor='phone' >
                <PhoneInput
                  placeholder='Enter phone number*'
                  defaultCountry='IN'
                  id='phone'
                />
              </label>
              <label htmlFor='email' >
                <input type={'email'} name='email' id='email' placeholder='Enter email' />
              </label>
              <label htmlFor='country' >
                <input type={'text'} name='country' id='country' placeholder='Enter country' />
              </label>
              <label htmlFor='city' >
                <input type={'text'} name='city' id='city' placeholder='Enter city' />
              </label>
              <CommonBtn text={'Sign Up'}/>
            </form>
          </div>
        </section>
        <section className='details-section' >
          <p>
              Course Learnings:
          </p>
          <ul>
            <li><p>Experiential Sessions of Yoga Asanas</p></li>
            <li><p>Learn, experience and transform yourself with Yogic techniques – Pranayamas, Kriyas, Meditation, Sattvic food </p></li>
            <li><p>Patanjali Yoga Sutras and Hatha Yoga Texts with special reference to Hatha Yoga Pradipika</p></li>
            <li><p>Anatomy & Physiology</p></li>
            <li><p>Yoga for Wellness and Stress Management</p></li>
          </ul>
          <p>
              Course Benefits:
          </p>
          <h4>With 200-Hrs TTC, you will get an in-depth understanding of the Yogic practices and learn the tools to master physical, mental and spiritual well-being</h4>
          <div className="benefits-grid">
            <div className='benefit' >
              <h3>PHYSICAL</h3>
              <p>Strength</p>
              <p>Stamina</p>
              <p>Flexibility</p>
              <p>Endurance</p>
              <p>Balance</p>
            </div>
            <div className='benefit' >
              <h3>MENTAL</h3>
              <p>Mindfulness</p>
              <p>Calmness</p>
              <p>Stress-relief</p>
              <p>Increased Focus</p>
              <p>Better Clarity</p>
            </div>
            <div className='benefit' >
              <h3>SPIRITUAL</h3>
              <p>Increased Happiness</p>
              <p>Optimism</p>
              <p>Inner peace</p>
            </div>
          </div>
          <p>
              Course USPs:
          </p>
          <ul>
            <li><p>Since 1954, over 1,00,000 students have been successfully certified under the 200-Hours TTC at The Yoga Institute.</p></li>
            <li><p>The students will receive triple accreditation - Yoga Certification Board (AYUSH Level-1), Yoga Alliance USA (RYT 200) and The Yoga Institute.</p></li>
            <li><p>Covering the nuances of Traditional Yoga, this course serves as a valuable ‘life school’ to those seeking balance and fulfillment in life.</p></li>
            <li><p>The Course Curriculum brings a perfect amalgamation of theory – knowledge and practical – skill.</p></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
