import React from 'react'
import './style.css'
import BgImage from '../../../assets/images/nutrigut.svg'
import First from '../../../assets/images/1.png'
import Second from '../../../assets/images/2.png'
import Third from '../../../assets/images/3.png'
import Fourth from '../../../assets/images/4.png'
import Fifth from '../../../assets/images/5.png'
import Sixth from '../../../assets/images/6.png'
import Seventh from '../../../assets/images/7.png'
import Eighth from '../../../assets/images/8.png'
import Ninth from '../../../assets/images/9.png'

import { useState } from 'react'

const Nutrigut = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    mode: [],
    country: '',
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      let updatedMode = [...formData.mode]
      if (checked) {
        updatedMode = [...updatedMode, value]
      } else {
        updatedMode = updatedMode.filter((mode) => mode !== value)
      }
      setFormData({ ...formData, mode: updatedMode })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="main-container">
      <div className="head">
        <div className="bg-image">
          <img src={BgImage} />
        </div>
        <div className="head-content">
          <p>
            <span className="first-order">WELCOME TO OUR</span>
          </p>
          <p>
            <span className="second-order">GUT CLEANSE</span>
          </p>
          <p>
            <span className="third-order">DETOX WORKSHOP!</span>
          </p>
          <div className="empty-bar"></div>
          <div className="workshop-details">
            Join our workshop to discover effective startegies for restoring gut
            health.Learn
            <br />
            about nourishing foods,mindful eating practices, and simple detox
            techniques to
            <br />
            promote digestion, reduce bloating and rejuvenate your overall
            well-being.
          </div>
          <div className="durations">
            <span className="slogan">
              Lets kickstart the healthier you after the festive celeberations.
            </span>
            <div className="flex-items">
              <div className="flex-1"> DATE</div>
              <div className="flex-1"> MODE</div>
            </div>
            <div className="flex-content">
              <div className="flex-content1">2nd December 2023</div>
              <div className="flex-content1">Online/On-Campus</div>
            </div>
            <div className="flex-items">
              <div className="flex-1"> TIME</div>
              <div className="flex-1"> LOCATION</div>
            </div>
            <div className="flex-content">
              <div className="flex-content1">10:30 AM to 12:30 PM</div>
              <div className="flex-content1">
                The Yoga Institute,Santacruz [East]
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="enroll-form">
        <div className="flex-head">
          <div className="start-head-bar"></div>
          <div className="start-head">
            <span className="form">ENROLLMENT</span>&nbsp;FORM
          </div>
          <div className="start-head-end"></div>
        </div>
        <div className="form-details">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="fullName">Full Name:&nbsp;&nbsp;</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contactNumber">Contact No:&nbsp;</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email ID:&nbsp;&nbsp;</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <div className="mode-options">
                <label>Mode:&nbsp;&nbsp;</label>
                <label htmlFor="online">
                  <input
                    type="checkbox"
                    id="online"
                    name="mode"
                    value="online"
                    checked={formData.mode.includes('online')}
                    onChange={handleChange}
                  />
                  Online
                </label>
                <label htmlFor="offline">
                  <input
                    type="checkbox"
                    id="offline"
                    name="mode"
                    value="offline"
                    checked={formData.mode.includes('offline')}
                    onChange={handleChange}
                  />
                  Offline
                </label>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Country:&nbsp;&nbsp;</label>
              <input
                type="country"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
              {/* <hr className="line-after" /> */}
            </div>
            <div className="submit-btn">
              <button className="st-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="insights">
        <div className="flex-head">
          <div className="start-head-end"></div>
          <div className="start-head">
            <span className="form">INSIGHTS</span>&nbsp;WORKSHOP
          </div>
          <div className="start-head-bar"></div>
        </div>
        <div className="work-insight">
          <div className="health-container">
            <div className="img-container">
              <img className="micro-image" src={First} />
            </div>
            <div className="head-health">
              Understanding <br />
              &nbsp;&nbsp;Gut Health
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Explore the importance of healthy gut <br /> and its impact on
              overall well-being.
            </div>
          </div>
          <div className="microbiome">
            <div className="image-container">
              <img className="micro-img" src={Second} />
            </div>
            <div className="head-health">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balancing <br />
              &nbsp;&nbsp;the Microbiome
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Understand the role of gut bacteria in <br /> digestion and immune
              function,and <br />
              discover ways to promote a balanced
              <br />
              microbiome overall well-being.
            </div>
          </div>
          <div className="gut-yoga">
            <div className="images-container">
              <img className="micro-imagess" src={Third} />
            </div>
            <div className="head-health">
              Understanding <br />
              &nbsp;&nbsp;Gut Health
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Explore the importance of healthy gut <br /> and its impact on
              overall well-being.
            </div>
          </div>
        </div>
        <div className="work-insight">
          <div className="health-container">
            <div className="img-container">
              <img className="micro-image" src={Fourth} />
            </div>
            <div className="head-health">
              Understanding <br />
              &nbsp;&nbsp;Gut Health
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Explore the importance of healthy gut <br /> and its impact on
              overall well-being.
            </div>
          </div>
          <div className="microbiome">
            <div className="image-container">
              <img className="micro-img" src={Fifth} />
            </div>
            <div className="head-health">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balancing <br />
              &nbsp;&nbsp;the Microbiome
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Understand the role of gut bacteria in <br /> digestion and immune
              function,and <br />
              discover ways to promote a balanced
              <br />
              microbiome overall well-being.
            </div>
          </div>
          <div className="gut-yoga">
            <div className="images-container">
              <img className="micro-imagess" src={Sixth} />
            </div>
            <div className="head-health">
              Understanding <br />
              &nbsp;&nbsp;Gut Health
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Explore the importance of healthy gut <br /> and its impact on
              overall well-being.
            </div>
          </div>
        </div>
        <div className="work-insight">
          <div className="health-container">
            <div className="img-container">
              <img className="micro-image" src={Seventh} />
            </div>
            <div className="head-health">
              Understanding <br />
              &nbsp;&nbsp;Gut Health
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Explore the importance of healthy gut <br /> and its impact on
              overall well-being.
            </div>
          </div>
          <div className="microbiome">
            <div className="image-container">
              <img className="micro-img" src={Eighth} />
            </div>
            <div className="head-health">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balancing <br />
              &nbsp;&nbsp;the Microbiome
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Understand the role of gut bacteria in <br /> digestion and immune
              function,and <br />
              discover ways to promote a balanced
              <br />
              microbiome overall well-being.
            </div>
          </div>
          <div className="gut-yoga">
            <div className="images-container">
              <img className="micro-imagess" src={Ninth} />
            </div>
            <div className="head-health">
              Understanding <br />
              &nbsp;&nbsp;Gut Health
            </div>
            <hr className="line-break" />
            <div className="insight-content">
              Explore the importance of healthy gut <br /> and its impact on
              overall well-being.
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-head">
          WORKSHOP WILL BE CONDUCTED BY YOGA EXPERT
          <br />
          HAVING MORE THAN 25 YEARS OF EXPERIENCE AND QUALIFIED
          <br />
          NUTRIRIONIST/CLINICAL DIETICIAN.
        </div>
        <hr className="partition" />
        <div className="footer-foot">
          EMPOWER YOURSELF WITH KNOWLEDGE
          <br />
          AT OUR `FREE WORKSHOP` AND RECEIVE AN
          <br />
          INFORMATIVE TAKEAWAY PAMPHLET.
        </div>
      </div>
      <div className="reg-banner">
        <hr className="banner-line" />
        <div className="banner-head">PRIOR REGISTERATIONS ARE MANDATORY</div>
      </div>
    </div>
  )
}

export default Nutrigut
