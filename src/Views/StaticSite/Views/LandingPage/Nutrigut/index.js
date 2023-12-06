import React from 'react'
import './style.css'
import First from '../../../assets/images/1.png'
import Second from '../../../assets/images/2.png'
import Third from '../../../assets/images/3.png'
import Fourth from '../../../assets/images/4.png'
import Fifth from '../../../assets/images/5.png'
import Sixth from '../../../assets/images/6.png'
import Seventh from '../../../assets/images/7.png'
import Eighth from '../../../assets/images/8.png'
import Ninth from '../../../assets/images/9.png'
import Model from '../../../assets/images/model.png'
import { creatForm, successMail } from '../Api'
import CampaignThankYou from '../ThankYouPage'
import NutriGutLogo from '../../../assets/images/nutrigut_logo.png'

import { useState } from 'react'

const Nutrigut = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    mode: [],
    country: '',
  })
  const [modal, setModal] = useState(false)
  const { name, email, contact, mode, country } = formData
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      let updatedMode = [...formData.mode]
      if (checked) {
        updatedMode = [...updatedMode, value]
      } else {
        updatedMode = updatedMode.filter((mode) => mode !== value)
      }
      // Convert the array to a string before updating the state
      setFormData({ ...formData, mode: updatedMode.join(', ') }) // You can use any other delimiter as needed
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleForm = async(e) => {
    e.preventDefault()
    try {
      await creatForm({
        name: name,
        contact: contact,
        email: email,
        country: country,
        mode: mode,
        formType: 'DETOXCAMPAIGN',
      })
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'DETOX_CAMPAIGN_FORM_CONFIRMATION_MAIL',
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

  return (
    <>
      <div className="main-container">
        <div className="header">
          <div class="header-logo-nutrigut">
            <img className='logo-nutrigut'
              placeholder="none"
              alt="The Yoga Institute"
              src={NutriGutLogo}
            />
          </div>
          <div className="model-container">   
            <img className="model-image" src={Model} />
          </div>

          <div className="content-container"></div>
        </div>
        <div className="bg-container">
          <div className="head-content">
            <p>
              <span className="first-order">WELCOME TO OUR</span>
            </p>
            <p>
              <span className="third-order">GUT CLEANSE</span>
            </p>
            <p>
              <span className="third-order">DETOX WORKSHOP!</span>
            </p>
            <div className="empty-bar"></div>
            <div className="workshop-details">
              Join our workshop to discover effective startegies for restoring
              gut health. Learn
              <br />
              about nourishing foods,mindful eating practices, and simple detox
              techniques to
              <br />
              promote digestion, reduce bloating and rejuvenate your overall
              well-being.
            </div>
            <div className="workshop-details-res">
              Join our workshop to discover effective startegies for restoring
              gut health. Learn
              
              about nourishing foods,mindful eating practices, and simple detox
              techniques to
              
              promote digestion, reduce bloating and rejuvenate your overall
              well-being.
            </div>
            <div className="durations">
              <span className="slogan">
                Let&apos;s kick start the healthier you after the festive
                celeberations!
              </span>
              <div className="grid-container">
                <div className="flex-items">
                  <div className="flex-border">
                    <div className="flex-1">
                      <span className="pop">&gt;</span>DATE
                    </div>
                  </div>
                  <div className="flex-content1">16th December 2023</div>
                </div>
                <div className="flex-items">
                  <div className="flex-border">
                    <div className="flex-1">
                      <span className="pop">&gt;</span>MODE
                    </div>
                  </div>
                  <div className="flex-content1">Online/On-Campus</div>
                </div>
                <div className="flex-items">
                  <div className="flex-border">
                    <div className="flex-1">
                      <span className="pop">&gt;</span>TIME
                    </div>
                  </div>
                  <div className="flex-content1">10:30 AM to 12:30 PM</div>
                </div>
                <div className="flex-items">
                  <div className="flex-border">
                    <div className="flex-1">
                      <span className="pop">&gt;</span>LOCATION
                    </div>
                  </div>
                  <div className="flex-content1">
                    The Yoga Institute,Santacruz[East]
                  </div>
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
          <div className="form-pad"></div>
          <div className="form-details">
            <form>
              <div className="form-field">
                <label htmlFor="name">Full Name:&nbsp;&nbsp;</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInput}
                  // required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact">Contact No:&nbsp;</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={contact}
                  onChange={handleInput}
                  // required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email ID:&nbsp;&nbsp;</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  // required
                />
              </div>
              <div className="form-field">
                <div className="mode-options">
                  <label>Mode:&nbsp;&nbsp;</label>
                  <label htmlFor="mode">
                    <input
                      type="checkbox"
                      id="online"
                      name="mode"
                      value="ONLINE"
                      checked={mode.includes('ONLINE')}
                      onChange={handleChange}
                    />
                    Online
                  </label>
                  <label htmlFor="offline">
                    <input
                      type="checkbox"
                      id="offline"
                      name="mode"
                      value="OFFLINE"
                      checked={mode.includes('OFFLINE')}
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
                  value={country}
                  onChange={handleInput}
                  // required
                />
                {/* <hr className="line-after" /> */}
              </div>
              <div className="submit-btn">
                <button
                  onClick={(e) => handleForm(e)}
                  type="submit"
                  className="st-btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="insights">
          <div className="flex-head">
            <div className="start-head-end"></div>
            <div className="start-head">
              <span className="form">INSIGHTS OF </span>WORKSHOP
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
                Gut Health
              </div>
              <hr className="line-break" />
              <div className="insight-content">
                Explore the importance of healthy gut and its impact on overall
                well-being.
              </div>
            </div>
            <div className="microbiome">
              <div className="image-container">
                <img className="micro-img" src={Second} />
              </div>
              <div className="head-health">
                Balancing <br />
                the Microbiome
              </div>
              <hr className="line-break" />
              <div className="insight-content">
                Understand the role of gut bacteria in digestion and immune
                function,and discover ways to promote a balanced microbiome.
              </div>
            </div>
            <div className="gut-yoga">
              <div className="images-container">
                <img className="micro-imagess" src={Third} />
              </div>
              <div className="head-health-right">
                Yoga for <br />
                Better Gut Health
              </div>
              <hr className="line-break-last" />
              <div className="insight-content-right">
                Understand importance of certain asanas and paranayam that
                invokes in better digestion and certain kriyas which helps in
                inner cleansing.
              </div>
            </div>
          </div>
          <div className="work-insight">
            <div className="health-container">
              <div className="img-container">
                <img className="micro-image" src={Fourth} />
              </div>
              <div className="head-health">
                &nbsp;&nbsp;Nutrition for <br />
                &nbsp;&nbsp;Gut Renewal
              </div>
              <hr className="line-break" />
              <div className="insight-content">
                Explore the gut friendly diet with emphasison on foods that
                support digestion reduce inflammation, and aid in nutrient
                absorption.
              </div>
            </div>
            <div className="microbiome">
              <div className="image-container">
                <img className="micro-img" src={Fifth} />
              </div>
              <div className="head-health">
                Detoxification <br />
                Techniques
              </div>
              <hr className="line-break" />
              <div className="insight-content">
                Learn about different detoxification <br /> methods that are
                believed to help
                <br />
                cleanse the gut
              </div>
            </div>
            <div className="gut-yoga">
              <div className="images-container">
                <img className="micro-imagess" src={Sixth} />
              </div>
              <div className="head-health-right">
                Herbal Support <br />
                and Supplements
              </div>
              <hr className="line-break-last" />
              <div className="insight-content-right">
                Explore natural supplements and herbal remedies that can aid in
                gut health and support the body`s detoxification processes.
              </div>
            </div>
          </div>
          <div className="work-insight">
            <div className="health-container">
              <div className="img-container">
                <img className="micro-image" src={Seventh} />
              </div>
              <div className="head-health">
                Mindful <br />
                Eating Practices
              </div>
              <hr className="line-break" />
              <div className="insight-content">
                Discover the connection between mindfulness and digestive
                health, & learn techniques for cultivating mindful eating
                habits.
              </div>
            </div>
            <div className="microbiome">
              <div className="image-container">
                <img className="micro-img" src={Eighth} />
              </div>
              <div className="head-health">
                Creating
                <br />
                Sustainable Habits
              </div>
              <hr className="line-break" />
              <div className="insight-content">
                Recieve guidance on incorporating long term habits that promote
                ongoing gut health,ensuring lasting benefits beyond the
                workshop.
              </div>
            </div>
            <div className="gut-yoga">
              <div className="images-container-last">
                <img className="micro-imagess" src={Ninth} />
              </div>
              <div className="head-health-right">
                Q&A and <br />
                Personalized Guidance
              </div>
              <hr className="line-break-last" />
              <div className="insight-content-right-last">
                Engage in discussions, ask questions, and receive personalized
                tips for implementing a post-Diwali gut cleanse based on
                indiviual needs.
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
            AT OUR &apos;FREE WORKSHOP&apos; AND RECEIVE AN
            <br />
            INFORMATIVE TAKEAWAY PAMPHLET.
          </div>
        </div>
        <div className="reg-banner">
          <hr className="banner-line" />
          <div className="banner-head">PRIOR REGISTERATION IS MANDATORY</div>
        </div>
      </div>
      {modal && (
        <CampaignThankYou
          name={name}
          setModal={setModal}
          setFormData={setFormData}
        />
      )}
    </>
  )
}

export default Nutrigut
