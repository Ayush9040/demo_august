import React, { useState } from 'react'
import './style.scss'
import { star, global, network, chat } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import baseDomain, { courseAssets } from '../../assets/images/imageAsset'
//import { useParams } from 'react-router-dom'

const CourseDetails = ({ pageDate }) => {
  const [detail, setDetail] = useState(1)

  const {
    image,
    name,
    details,
    benefits,
    duration,
    date,
    timings,
    fees,
    prerequisites,
    curriculum,
    unique,
    TeachingAndCertification,
  } = pageDate

  let options = [
    {
      id: 'ProgramID',
      title: 'Program Details',
    },
    {
      id: 'CurriculamID',
      title: 'Curriculam',
    },
    {
      id: 'TeachingID',
      title: 'Teaching & Certification',
    },
    {
      id: 'UniqueID',
      title: 'Our Unique Offerings',
    },
    {
      id: 'RegistrationID',
      title: 'Registration',
    },
    {
      id: 'FaqID',
      title: 'FAQ',
    },
  ]
  console.log(benefits)
  console.log(fees)
  console.log(prerequisites)
  console.log(unique)
  const selectMenu = (name) => {
    switch (name) {
    case 'Program Details':
      setDetail(1)
      break
    case 'Curriculam':
      setDetail(2)
      break
    case 'Teaching & Certification':
      setDetail(3)
      break
    case 'Our Unique Offerings':
      setDetail(4)
      break
    case 'Registration':
      setDetail(5)
      break
    case 'FAQ':
      setDetail(6)
      break
    default:
      setDetail(1)
    }
  }

  return (
    <div className="course-detail-page">
      <div className="main-section" style={{ background: '#C9705F' }}>
        <div className="course-info">
          {/* <p>Browse &gt; Teacher Training Courses</p> */}
          <h1>
            {name ? (
              <span>
                {name}
                <br />
                {duration}
                <br />
                {date}
              </span>
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
            {timings
              ? timings
              : 'Lorem Ipsum is simply dummy text of the printing and typesetting Industry.'}
          </p>
          <div className="ratings">
            {star}
            {star}
            {star}
            {star}
            {star}
          </div>
          <div className="course-options">
            <CommonBtn text={'Enroll Now'} />
            <CommonBtn text={'Gift Course'} />
          </div>
        </div>
        <div className="course-cover">
          {image ? (
            <img src={image} />
          ) : (
            <img src={baseDomain + courseAssets.courseAsset2} />
          )}
        </div>
      </div>
      <div className="details-section">
        <div className="nav-options">
          <div className="career-navigation-lg">
            <ul className="innerNav">
              {options.map((item, idx) => (
                <a key={item.id} href={`#${item.id}`}>
                  <li
                    onClick={() => {
                      selectMenu(item)
                    }}
                    key={idx}
                  >
                    <em className={idx + 1 === detail && 'active'}>
                      {item.title}
                    </em>
                  </li>
                </a>
              ))}
            </ul>
          </div>

          <div className="course-about" id="ProgramID">
            <h3>
              <u>
                <b>Program Details</b>
              </u>
            </h3>
            <div>{details}</div>
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

          <div className="course-benefits" id="CurriculamID">
            <div>
              <h3 style={{ textAlign: 'left' }}>
                <u>
                  <b>Curriculam</b>
                </u>
              </h3>
              <p style={{ textAlign: 'left' }}>{curriculum?.description}</p>
              {curriculum?.points?.map(({ title, points }) => {
                console.log(points, 'p')
                console.log(title, 'title')
                return (
                  <div key={title}>
                    <h4>{title}</h4>
                    <ul>
                      {points?.map((itm) => {
                        if (typeof itm !== 'object')
                          return <li key={itm}>{itm}</li>
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="course-curriculam" id="TeachingID">
            <h3>
              <u>
                <b>Teaching & Certification</b>
              </u>
            </h3>
            <p>{TeachingAndCertification?.description}</p>

            <ul>
              {TeachingAndCertification?.points?.map(
                ({ title, points, description }) => {
                  console.log(points, 'tcpoints')
                  return (
                    <li key={title}>
                      <span>{title || description}</span>
                      <dl>
                        {points?.map((itm) => {
                          if (typeof itm !== 'object') {
                            return <dt key={itm}>{itm}</dt>
                          }
                          return
                        })}
                      </dl>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
          <div className="our-offerings" id="UniqueID">
            <h3>
              <u>
                <b>Our Unique Offerings</b>
              </u>
            </h3>
            <ul>
              <li>
                You will have an opportunity to directly interact with spiritual
                Guru Dr. Hansaji Yogendra. She is available to attend to your
                queries and give counsel.
              </li>
              <li>
                Our expert trainers for the course, over 40 in number, have
                mastered the yogic way of life and are proficient in passing on
                their learnings in a simple and practical way. Armed with
                decades of experience, they offer tremendous value and insight
                to new learners.
              </li>
              <li>
                Apart from the main yoga curriculum, you will learn immensely
                from the class experience itself. You will meet people with
                diverse backgrounds and experiences that you can gain insights
                from. There will be sadhakas of all age groups – right from
                teenagers to senior citizens. Every person has had a unique
                experience in life and it will be enriching to know all these
                stories.
              </li>
              <li>
                This one-of-a-kind experience will groom you to calmly and
                mindfully handle people and situations
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="mob-view">
          <div className="course-about">
            <h2 id='ProgramID'>Program Details</h2>
            <div>
              With over 1,00,000 successfully certified students, the 200 Hours
              Teacher Training Course at The Yoga Institute covers the nuances
              of Traditional Yoga. This includes an introduction to the study of
              principal Yoga Asanas, Pranayamas, Meditation, Kriyas, Patanjali’s
              Yoga Sutra, and Hatha Yoga Pradipika. Further, complete immersion
              into practical experiences of the concept studies, public
              speaking, the methodology of teaching, etc. are covered.
              Strategically designed by the founder Shri Yogendraji, Smt. Sita
              Devi Yogendra, Dr. Jayadeva Yogendra, and Dr. Hansaji J Yogendra,
              the course serves as a valuable ‘life school’ to those seeking
              balance and fulfilment in life.
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
          <div className="course-benefits">
            <div>
              <h2 id='curriculumID'>Curriculum</h2>
              <ul>
                <li>
                  You will learn the tools to master your physical, mental and
                  spiritual well-being. You will see a marked improvement in
                  your life, relationships and work.
                </li>
                <li>
                  A new career avenue opens up for you where you can pass on the
                  knowledge to others and facilitate their wellness journeys.
                  The art of Yoga is something you can teach anywhere, no matter
                  where you are.
                </li>
              </ul>
            </div>
            <div>
              <img src={baseDomain + courseAssets.courseAsset4} />
            </div>
          </div>
          <div className="course-curriculam">
            <ul>
              <h2 id='TeachingID'>Teaching and Certification</h2>
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
                    Selected psychophysical and conceptual techniques pioneered
                    by The Yoga Institute.
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
                    Acknowledge the aspirant’s progress and ability to cope with
                    difficulties.
                  </dd>
                  <dt>Principles and skills for working with groups.</dt>
                </dl>
              </li>
            </ul>
          </div>
          <div className="our-offerings">
            <h2 id='UniqueID'>Our Unique Offerings</h2>
            <ul>
              {unique?.points?.map(({ itm }) => (
                <li key={itm}>{itm}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default CourseDetails
