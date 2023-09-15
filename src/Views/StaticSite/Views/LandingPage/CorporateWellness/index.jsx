import React, { useState } from 'react'
import CommonBanner from '../../../Components/Common-banner'
import baseDomain, {
  CorporateWellnessLogos,
  courseAssets,
} from '../../../assets/images/imageAsset'
import CorporateWellnessNavComponent from '../../../Components/CorporateWellnessNavComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import CampaignThankYou from '../ThankYouPage'
import './style.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import InputComponent from '../../../Components/InputComponent'
import { CreateForm, successMail } from './Api'

const corporateWellness = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
    designation: '',
    message: '',
  })
  const [videoPlayerData, setVideoPlayerData] = useState(null)
  const [modal, setModal] = useState(false)

  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await CreateForm({
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        companyName: formData.company,
        designation: formData.designation,
        message: formData.message,
      })
      setFormData({
        name: '',
        contact: '',
        email: '',
        company: '',
        designation: '',
        message: '',
      })
      await successMail({
        type: 'INFO_TYI',
        HTMLTemplate: 'CORPORATE_ENQUIRY_FORM_COFIRMATION_MAIL',
        subject: 'Thank you from The Yoga Institute',
        data: {
          name: formData.name,
        },
        receivers: [formData.email],
      })

      setModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 3000,
  }

  let description =
    'Revolutionize Your Corporate Wellness Culture Focused on building a healthier, happier and more productive workforce !'

  const CorporateWellessProgram = {
    title: 'Holistic Workplace Wellness Program',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  return (
    <>
      <div className="corporate-wellness-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="corporate"
          Heading="Holistic Workplace Wellness Program"
          isOnlyBanner={false}
          innerNav={false}
          description={description}
          bannerImg={`${baseDomain}${courseAssets.courseAsset118}`}
          overlay="rgba(59, 78, 74, 0.80)"
        >
          <CorporateWellnessNavComponent abc={CorporateWellessProgram} />
        </CommonBanner>
        <div className="trusted-companies-container">
          <div className="trusted-companies-heading">
            <h1>Trusted by 500+ Leading Corporate Companies</h1>
            <div className="line-heading"></div>
            <p>
              A pioneer in the workplace wellness space with more than 104 years
              of experience.
            </p>
          </div>
          <div className="company-logos">
            <p class="marquee">
              <span>
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.pFizer}`}
                  className="pFizerImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.unionBank}`}
                  className="unionBankImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.BankOfBarodaNew}`}
                  className="bankOfBarodaImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.indianOil}`}
                  className="indianOilImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.siemens}`}
                  className="siemensImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.deutscheBank}`}
                  className="deutscheBankImg"
                />
              </span>
            </p>
            <p class="marquee marquee2">
              <span>
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.pFizer}`}
                  className="pFizerImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.unionBank}`}
                  className="unionBankImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.BankOfBarodaNew}`}
                  className="bankOfBarodaImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.indianOil}`}
                  className="indianOilImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.siemens}`}
                  className="siemensImg"
                />
                <img
                  src={`${baseDomain}${CorporateWellnessLogos.deutscheBank}`}
                  className="deutscheBankImg"
                />
              </span>
            </p>

            {/* <p class="marquee marquee3">
              <span>
                <img src={`${baseDomain}${CorporateWellnessLogos.pFizer}`} className='pFizerImg'/>
                <img src={`${baseDomain}${CorporateWellnessLogos.unionBank}`} className='unionBankImg' />
                <img src={`${baseDomain}${CorporateWellnessLogos.BankOfBarodaNew}`} className='bankOfBarodaImg'/>
                <img src={`${baseDomain}${CorporateWellnessLogos.indianOil}`} className='indianOilImg'/>
                <img src={`${baseDomain}${CorporateWellnessLogos.siemens}`} className='siemensImg'/>
                <img src={`${baseDomain}${CorporateWellnessLogos.deutscheBank}`} className='deutscheBankImg' />
              </span>
            </p> */}
          </div>
          <div className="transformed-container">
            <h1 className="tronsformed-light">
              Transformed and Enriched Lives
            </h1>
            <h1>of 10+ Million Employees</h1>
            <div className="line-heading-1"></div>
          </div>
          <div className="tranformed-companies-corosuel">
            <div className="company-corosuel">
              &nbsp;&nbsp;&nbsp;&nbsp;Physical &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Well-being
            </div>
            <div className="company-corosuel">Emotional Balance</div>
            <div className="company-corosuel">Mental Health</div>
            <div className="company-corosuel">Spiritual Growth</div>
            <div className="company-corosuel">Social Engagement</div>
            <div className="company-corosuel">Financial Wellness</div>
          </div>
        </div>
        <div className="wellness-support-features">
          <h1 className="wellness1">What Makes Our </h1>
          <h1 className="wellness2">Corporate Wellness Programs Unique?</h1>
          <div className="line-heading-2"></div>
          <div className="wellness-support">
            <div className="wellness-features">Customized Programs</div>
            <div className="wellness-features">
              Internationally Certified Yoga Experts
            </div>
            <div className="wellness-features">Comprehensive Approach</div>
            <div className="wellness-features">
              Strong Legacy & Expertise of 104 Years
            </div>
            <div className="wellness-features">Flexibile & Practical</div>
            <div className="wellness-features">Year-Long Programs</div>
            <div className="wellness-features">Evidence Based Approach</div>
            <div className="wellness-features">Provision of Sattvik Food</div>
            <div className="wellness-features">
              Integration with Company Culture
            </div>
            <div className="wellness-features">Social Support Networks</div>
          </div>
          {/* <div className='filler-main-logo'>{filler1}</div> */}
        </div>
        <div className="workplace-challenges-container">
          <div className="line-heading-second"></div>
          <div className="workplace-challenges-div">
            <div className="Workplace-challenges-img">
              <img src={`${baseDomain}${CorporateWellnessLogos.workspace}`} />
            </div>
            <div className="workplace-challenges-reasons">
              <h2>Workplace Challenges</h2>
              {/* <div className='line-heading-3'></div> */}
              <div className="workspace-parts">
                <p>Burnout Stress</p>
                <p>Performance Issues</p>
                <p>High Absenteeism</p>
                <p>Work-Life Balance</p>
                <p>Teamwork Challenges</p>
                <p>Sedentary Lifestyle</p>
                <p>Low Motivation</p>
                <p>Poor Self-Care</p>
                <p>Workplace Conflicts</p>
                <p>Less Productivity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="holistic-corporate-wellness-program-container">
          <h1>
            Our Holistic Corporate Wellness Programs{' '}
            <div className="line-heading-4"></div>
          </h1>
          <div className="line-heading-second"></div>
          <Slider {...settings}>
            <div className="holistic-corporate-div-container">
              <div className="holistic-corporate-div">
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      'https://www.youtube.com/embed/eid5I1XwVp0'
                    )
                  }
                >
                  <img
                    src={`${baseDomain}${CorporateWellnessLogos.holisticFourth}`}
                  />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className="holistic-corporate-div">
                  <ul>
                    <h1>Lifestyle and Disease Management</h1>
                    <li>Weight Loss Support</li>
                    <li>Chronic Disease</li>
                    <li>Heart Health Program</li>
                    <li>Cancer Care</li>
                    <li>Diabetes Camp</li>
                    <li>Posture Improvement</li>
                    <li>Smoking Cessation Program</li>
                    <li>Women’s Health Coaching – PCOS, Menopause</li>
                    <li>Stress Reduction & Relaxation Program</li>
                    <li>Bone and Joint Health</li>
                    <li>Sleep Hygiene Education</li>
                    <li>Immunity Building Workshop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holistic-corporate-div-container">
              <div className="holistic-corporate-div">
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      'https://www.youtube.com/embed/1NEBL7deSHk'
                    )
                  }
                >
                  <img
                    src={`${baseDomain}${CorporateWellnessLogos.holisticFirst}`}
                  />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className="holistic-corporate-div">
                  <ul>
                    <h1>Personalized Wellness Plans</h1>
                    <li>Customized Fitness Plans</li>
                    <li>Wellness Check-ins</li>
                    <li>Personalized Health Coaching</li>
                    <li>Lifestyle Modification Program</li>
                    <li>Relaxation Techniques Training</li>
                    <li>Mindfulness-based Stress Reduction Program</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holistic-corporate-div-container">
              <div className="holistic-corporate-div">
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      'https://www.youtube.com/embed/qzXybp2I3oo'
                    )
                  }
                >
                  <img
                    src={`${baseDomain}${CorporateWellnessLogos.holisticSecond}`}
                  />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className="holistic-corporate-div">
                  <ul>
                    <h1>Health and Nutrition Workshops</h1>
                    <li>Healthy Eating 101</li>
                    <li>Nutrition for Optimal Health</li>
                    <li>Cooking Demonstrations</li>
                    <li>Weight Loss Strategies</li>
                    <li>Mindful Eating</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holistic-corporate-div-container">
              <div className="holistic-corporate-div">
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData(
                      'https://www.youtube.com/embed/OjHiahL1V94'
                    )
                  }
                >
                  <img
                    src={`${baseDomain}${CorporateWellnessLogos.holisticThird}`}
                  />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className="holistic-corporate-div">
                  <ul>
                    <h1>Yoga and Meditation Sessions</h1>
                    <li>Mindfulness Meditation</li>
                    <li>Asanas for Physical Strength</li>
                    <li>Breath and Balance</li>
                    <li>Inner Peace Yoga</li>
                    <li>Yoga for Mind-Body Balance</li>
                    <li>Relaxation Asanas for Stress-Relief</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.lifeStyle}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Health Screening</h1>
                    <li>Employee Health Check</li>
                    <li>Wellness Assessment</li>
                    <li>Health Insights</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.ManageStress}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Counselling</h1>
                    <li>Emotional Wellness Support</li>
                    <li>Personalized and Group Counselling</li>
                    <li>Mindfulness Program</li>
                    <li>Life Coaching</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.WorkpaceProgram}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>On-Site Clinics</h1>
                    <li>Occupational Health Clinic</li>
                    <li>Preventive Care Clinic</li>
                    <li>MiChronic Disease Management Clinic</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.WellnessProgram}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Employee Engagement Initiatives</h1>
                    <li>Social Events and Activities</li>
                    <li>Happiness at Work Program</li>
                    <li>Health and Wellness Challenges</li>
                    <li>Employee Volunteer Progra</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.WorkpaceProgram}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Diet Consultations</h1>
                    <li>Mindful Eating Program</li>
                    <li>Nutritional Counselling</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.lifeStyle}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Customized Coaching Program</h1>
                    <li>Health and Wellness Guidance</li>
                    <li>Relationship Building</li>
                    <li>Leadership Development</li>
                    <li>Career Coaching</li>
                    <li>Personal Growth</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.ManageStress}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Interpersonal Communication &amp; Relationship Building</h1>
                    <li>Effective Communication Workshop</li>
                    <li>Team Building Retreat</li>
                    <li>Emotional Intelligence Program</li>
                    <li>Conflict Resolution Training</li>
                    <li>Feedback Mastery Coaching</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.WellnessProgram}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Leadership Development</h1>
                    <li>Leading with Impact</li>
                    <li>Connect and Collaborate</li>
                    <li>Yoga and Leadership Mastery</li>
                    <li>Conflict Resolution Training</li>
                    <li>Relationship Building Seminar</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='holistic-corporate-div-container'>
              <div className='holistic-corporate-div'>
                <div
                  role="button"
                  onClick={() =>
                    setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
                  }>
                  <img src={`${baseDomain}${CorporateWellnessLogos.WorkpaceProgram}`} />
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                  </div>
                </div>
                <div className='holistic-corporate-div'>
                  <ul>
                    <h1>Critical Thinking &amp; Problem Solving</h1>
                    <li>Analytical Agility</li>
                    <li>The Art of Critical Thinking</li>
                    <li>Problem-Solving Pro</li>
                    <li>Creative Solutions</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
        <div className="corporate-wheel-container">
          <div className="corporate-wheel">
            <img
              src={`${baseDomain}${CorporateWellnessLogos.corporateWheel}`}
              alt="corporate wheel"
            />
            <div className="list-data">
              <ul>
                <li> 89% witnessed decrease in stress levels</li>
                <li> 82% observed improve physical stamina</li>
                <li> 75% reported higher employee satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="happy-customer-experience">
          <h1>Experience Shared by Our Happy Clients</h1>
          <div className="line-heading-second"></div>
          <Slider {...settings}>
            <div className="expierence">
              <h3>
                It was a pleasure to attend the 1-day Yoga camp at The Yoga
                Institute. We learnt about asanas, pranayamas, and yogic
                practices. The session by Hansa Maa was rejuvenating and it made
                me realize and recapture the basic things that we usually tend
                to forget in our daily lives. We lead a sedentary lifestyle
                where we fail to exercise regularly, leading to diseases and
                stress. Practicing Yoga in such a simple way and practicing to
                channelize our thoughts through meditation will help us to be
                happy and healthy. We also had a session on recreation and, most
                importantly, we were served Sattvik food, which was quite simple
                and yet so delicious and healthy. The staff and other team
                members were very supportive and helped us to practice asanas
                and pranayamas in an easy yet efficient way. We really enjoyed
                it a lot and it was a pleasure to be here at the institute,
                which has a beautiful campus full of greenery.
              </h3>
              <p>
                Chetana Pandey, Deputy General Manager HR, Union Bank of India
              </p>
            </div>
            <div className="expierence">
              <h3>
                Our association with The Yoga Institute extends over many years.
                The Bank conducts Yoga sessions twice a week for staff members
                at its premises. It is our belief that mentally and physically
                fit employees result in a more productive workforce. Many staff
                members have since joined these sessions and benefited
                immensely. Not only by improving their physical fitness levels
                but also by relieving stress and regaining mental peace. They
                have also inculcated a sense of discipline and transformed as
                mind and body come together during meditation. We would like to
                thank The Yoga Institute for its continued support and
                especially Ms. Swati Bhatt, who has been conducting our sessions
                without fail throughout the lockdown, with equal enthusiasm.
              </h3>
              <p>Deepali Agarwal, Chief General Manager, Exim Bank</p>
            </div>
            <div className="expierence">
              <h3>
                My first visit to The Yoga Institute was in November 1989. Back
                then, I was going through unusual circumstances and was in a
                state of depression. The 2-days Stress Management Camp that I
                attended and a meeting with Dr. Jayadeva altered the course of
                my life. Today I’ve staff members who have stayed with me for
                over 30 years now and this is because of the ideals that the
                Institute has inculcated in me.
              </h3>
              <p>Madan Bahal, Managing Director, Adfactors</p>
            </div>
            <div className="expierence">
              <h3>
                Our employees found the online session conducted by The Yoga
                Institute to be an authentic experience. Initially, they had
                doubts about doing Yoga on a virtual platform but found it very
                effective in the end. We have received much positive feedback
                from our employees. The sessions were conducted very
                professionally.
              </h3>
              <p>
                Sonia Banz - Rodrigues Vice President - Learning &amp;
                Development at BNP Paribas Bank
              </p>
            </div>
            <div className="expierence">
              <h3>
                The global pandemic has made many of us change our perspective
                towards the way we look at our lives. This past year, aspects of
                health and wellness gained more prominence than ever before. We
                felt that facilitating a yoga workshop for our residents would
                help them rejuvenate the mind, body and soul during these
                testing times and reached out to The Yoga Institute. During the
                workshop, instructors from the Institute taught our residents
                asanas to strengthen muscles, pranayama to improve breathing and
                kriyas to detox the body. Our thanks and compliments to The Yoga
                Institute for conducting such a wonderful workshop - we received
                excellent feedback from our residents. We look forward to many
                such collaborations in the future.
              </h3>
              <p>Shreya Ramaswamy, Manager, Godrej</p>
            </div>
            <div className="expierence">
              <h3>
                Learning from The Yoga Institute Teacher has been an enriching
                and transforming experience. The teacher’s passion for Yoga and
                the good intent of seeing me benefiting from it is what keeps me
                going on. Practicing Asanas and Pranayama with meticulous
                guidance is helping me connect to Yoga with ease. In short span
                of time, it has proved to be beneficial for my current
                lifestyle.
              </h3>
              <p>
                Cherag Merchant, Manager, Financial Accounts &amp; Costing,
                Castrol India Ltd
              </p>
            </div>
          </Slider>
        </div>
        <div className="corporate-wellness-blog-section">
          <h1>Enhance Your Knowledge</h1>
          <div className="line-heading-5"></div>
          <p>Read Our Latest Blogs and Educate Yourself.</p>
          <div className="blog-card-container">
            <div className="blog-card">
              <img
                src="https://theyogainstitute.oss-ap-south-1.aliyuncs.com/uploads/2020/01/Blog-Thumbnail_01.jpg"
                alt=""
              />
              <p>
                Ease Neck and Back Pain at Work with these Simple Techniques{' '}
                <a
                  href="https://theyogainstitute.org/ease-neck-and-back-pain-at-work-with-these-simple-techniques"
                  className="read-me-btn-new"
                >
                  Read
                </a>
              </p>
            </div>
            <div className="blog-card">
              <img
                src="https://theyogainstitute.oss-ap-south-1.aliyuncs.com/uploads/2021/07/Do-this-to-Protect-your-Eyes-from-the-Screen.jpg"
                alt=""
              />
              <p>
                Do this to Protect your Eyes from the Screen{' '}
                <a
                  href="https://theyogainstitute.org/do-this-to-protect-your-eyes-from-the-screen"
                  className="read-me-btn"
                >
                  Read
                </a>
              </p>
            </div>
            <div className="blog-card">
              <img
                src="https://theyogainstitute.oss-ap-south-1.aliyuncs.com/uploads/2017/10/work-blog.jpg"
                alt=""
              />
              <p>
                Resolve Work Conflict the Yogic Way{' '}
                <a
                  href="https://theyogainstitute.org/resolve-work-conflict-the-yogic-way"
                  className="read-me-btn"
                >
                  Read
                </a>
              </p>
            </div>
          </div>
          <div className="viewblogs-btn-container">
            <button className="viewblogs-btn">
              <a href="https://theyogainstitute.org/blogs">View all Blogs</a>
            </button>
          </div>
        </div>
        <div className="corporate-wellness-form-container" id="#hoverOverthis">
          <div className="corporate-wellness-form-heading">
            <h1>
              Have Questions?<div className="line-heading-6"></div>
            </h1>
            <p>Get in Touch with Us!</p>
          </div>
          <div className="corporate-wellness-form-input-container">
            <div className="corporate-wellness-form-input">
              <InputComponent
                css={{ boxShadow: '0px 0px 3px #000000BF', color: '#919191;' }}
                placeholder="Name"
                type="text"
                value={name}
                form={formData}
                setField={setFormData}
                keyName="name"
              />
            </div>
            <div className="corporate-wellness-form-input">
              <InputComponent
                className="input"
                css={{ boxShadow: '0px 0px 3px #000000BF', color: '#919191;' }}
                placeholder="Contact"
                type="number"
                form={formData}
                setField={setFormData}
                keyName="contact"
              />
            </div>
          </div>
          <div className="corporate-wellness-form-input-container">
            <div className="corporate-wellness-form-input">
              <InputComponent
                css={{ boxShadow: '0px 0px 3px #000000BF', color: '#919191;' }}
                placeholder="Email Address"
                type="email"
                form={formData}
                setField={setFormData}
                keyName="email"
              />
            </div>
            <div className="corporate-wellness-form-input">
              <InputComponent
                css={{ boxShadow: '0px 0px 3px #000000BF', color: '#919191;' }}
                placeholder="Company Name"
                type="text"
                form={formData}
                setField={setFormData}
                keyName="company"
              />
            </div>
          </div>
          <div className="corporate-wellness-form-input-container">
            <div className="corporate-wellness-form-input">
              <InputComponent
                css={{ boxShadow: '0px 0px 3px #000000BF', color: '#919191;' }}
                placeholder="Designation"
                type="text"
                form={formData}
                setField={setFormData}
                keyName="designation"
              />
            </div>
          </div>
          <div className="corporate-wellness-form-textArea">
            <textarea
              value={formData.message}
              className="responsive-textarea"
              placeholder="Message"
              onChange={handleMessageChange}
            />
          </div>
          <div className="form-btn-container">
            <button className="form-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {modal && (
            <CampaignThankYou
              name={name}
              setModal={setModal}
              setFormData={setFormData}
            />
          )}
        </div>
        {videoPlayerData && (
          <div className="video-overlay">
            <div className="video-player-container">
              <div
                className="close-btn"
                role="button"
                onClick={() => setVideoPlayerData(null)}
              >
                close
              </div>
              <iframe
                src={videoPlayerData}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default corporateWellness
