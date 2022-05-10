import React, { useState } from 'react'
// import CourseImg from '../../assets/images/course (2).png'
import './style.scss'
import { star, global, network, chat } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
// import DetailImg from '../../assets/images/detailImg.png'
import baseDomain,{ courseAssets } from '../../assets/images/imageAsset'
const CourseDetails = ({ name, heroImg, description }) => {
  const [detail, setDetail] = useState(1)

  let options = ['About', 'Benefits', 'Curriculam', 'Enrollment Options', 'FAQ']

  const selectMenu = (name) => {
    switch (name) {
    case 'About':
      setDetail(1)
      break
    case 'Benefits':
      setDetail(2)
      break
    case 'Curriculam':
      setDetail(3)
      break
    case 'Enrollment Options':
      setDetail(4)
      break
    case 'FAQ':
      setDetail(5)
      break
    default:
      setDetail(1)
    }
  }

  return (
    <div className="course-detail-page">
      <div className="main-section" style={{ background: '#C9705F' }}>
        <div className="course-info">
          <p>Browse &gt; Teacher Training Courses</p>
          <h1>
            {name ? (
              name
            ) : (
              <span>
                500 Hour
                <br />6 Months Online
                <br />
                Weekend - 18th Dec 2021
              </span>
            )}
          </h1>
          <p>
            {description
              ? description
              : 'Lorem Ipsum is simply dummy text of the printing and typesetting Industry.'}
          </p>
          <div className="ratings">
            {star}
            {star}
            {star}
            {star}
            {star}
          </div>
          <CommonBtn text={'Enroll Now'} />
        </div>
        <div className="course-cover">
          <img src={baseDomain + courseAssets.courseAsset2} />
        </div>
      </div>
      <div className="details-section">
        <div className="nav-options">
          <div className="career-navigation-lg">
            <ul className="innerNav">
              {options.map((item, idx) => (
                <li
                  onClick={() => {
                    selectMenu(item)
                  }}
                  key={idx}
                >
                  <em className={idx + 1 === detail && 'active'}>{item}</em>
                </li>
              ))}
            </ul>
          </div>
          {detail === 1 && (
            <div className="course-about">
              <div>
                With over 1,00,000 successfully certified students, the 200
                Hours Teacher Training Course at The Yoga Institute covers the
                nuances of Traditional Yoga. This includes an introduction to
                the study of principal Yoga Asanas, Pranayamas, Meditation,
                Kriyas, Patanjali’s Yoga Sutra, and Hatha Yoga Pradipika.
                Further, complete immersion into practical experiences of the
                concept studies, public speaking, the methodology of teaching,
                etc. are covered. Strategically designed by the founder Shri
                Yogendraji, Smt. Sita Devi Yogendra, Dr. Jayadeva Yogendra, and
                Dr. Hansaji J Yogendra, the course serves as a valuable ‘life
                school’ to those seeking balance and fulfilment in life.
              </div>
              <div>
                <ul>
                  <li>
                    <span className="bullet">{global}</span>Online Course
                  </li>
                  <li>
                    <span className="bullet">{network}</span>Beginner Level
                  </li>
                  <li>
                    <span className="bullet">{chat}</span>English
                  </li>
                </ul>
              </div>
            </div>
          )}
          {detail === 2 && (
            <div className="course-benefits">
              <div>
                <ul>
                  <li>
                    You will learn the tools to master your physical, mental and
                    spiritual well-being. You will see a marked improvement in
                    your life, relationships and work.
                  </li>
                  <li>
                    A new career avenue opens up for you where you can pass on
                    the knowledge to others and facilitate their wellness
                    journeys. The art of Yoga is something you can teach
                    anywhere, no matter where you are.
                  </li>
                </ul>
              </div>
              <div>
                <img src={baseDomain+courseAssets.courseAsset4} />
              </div>
            </div>
          )}
          {detail === 3 && (
            <div className="course-curriculam">
              <ul>
                <li>
                  <span>KNOWLEDGE</span>
                  <dl>
                    <dt>Introduction to Yoga and Yogic Practices.</dt>
                    <dt>Introduction to Hatha Yoga.</dt>
                    <dd>
                      Introduction to important Hatha Yoga Texts with special
                      reference to Hatha Yoga Pradipika.
                    </dd>
                    <dt>Introduction to Patanjali Yoga Sutras.</dt>
                    <dt>Bhavas of the Buddhi – Basis of Yoga Education</dt>
                    <dt>Introduction to Anatomy and Physiology</dt>
                    <dt>Introduction to Human Systems, Yoga and Health</dt>
                    <dt>
                      Yoga for wellness – prevention and promotion of positive
                      health
                    </dt>
                    <dt>Yoga and stress management.</dt>
                  </dl>
                </li>
                <li>
                  <span>SKILL</span>
                  <dl>
                    <dt>Sahajbhava Asanas</dt>
                    <dt>Shat Karmas</dt>
                    <dt>Surya Namaskar (Sun Salutation)</dt>
                    <dt>Asanas</dt>
                    <dd>
                      Knowledge of selected postures and demonstrated ability to
                      perform these postures – meditative and cultural (dynamic
                      and static versions).
                    </dd>
                    <dd>
                      Selected psychophysical and conceptual techniques
                      pioneered by The Yoga Institute.
                    </dd>
                    <dt>Pranayamas</dt>
                    <dd>
                      Knowledge, teaching, and demonstrated ability to select
                      Pranayamas.
                    </dd>
                    <dt>Practices leading to Meditation</dt>
                    <dt>Communication and Teaching Practice</dt>
                    <dd>
                      Understanding and practice of basic skills of public
                      speaking.
                    </dd>
                    <dd>
                      Familiarity and demonstration ability to apply teaching
                      methods.
                    </dd>
                    <dd>Adapt the above to unique styles of learning.</dd>
                    <dd>Provide supportive and effective feedback.</dd>
                    <dd>
                      Acknowledge the aspirant’s progress and ability to cope
                      with difficulties.
                    </dd>
                    <dt>Principles and skills for working with groups.</dt>
                  </dl>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
