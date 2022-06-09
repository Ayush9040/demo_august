import React, { useEffect, useState } from 'react'
import './style.scss'
import { star, global, network, chat } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import baseDomain, { courseAssets } from '../../assets/images/imageAsset'
//import { useParams } from 'react-router-dom'

const CourseDetails = ({ pageDate }) => {
  const [detail, setDetail] = useState(1)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const {
    key,
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
    queDetails,
    Guidelines
  } = pageDate

  let options = [
    {
      id: 'ProgramID',
      title: 'Program Details',
      key: 1,
    },
    {
      id: 'CurriculamID',
      title: 'Curriculam',
      key: 2,
    },
    {
      id: 'TeachingID',
      title: 'Teaching & Certification',
      key: 3,
    },
    {
      id: 'UniqueID',
      title: 'Our Unique Offerings',
      key: 4,
    },
    {
      id: 'RegistrationID',
      title: 'Registration',
      key: 5,
    },
    {
      id: 'FaqID',
      title: 'FAQ',
      key: 6,
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
            <img src={`${baseDomain}${courseAssets.courseAsset2}`} />
          )}
        </div>
      </div>
      {key!=='CAMPS' && <div className="details-section">
        <div className="nav-options">
          <div className="career-navigation-lg">
            <ul className="innerNav">
              {options.map((item, idx) => (
                <a key={item.id} href={`#${item.id}`}>
                  <li
                    onClick={() => {
                      selectMenu(item.title)
                    }}
                    key={idx}
                  >
                    <em className={idx + 1 === detail && 'active'}>
                      {item.title}
                    </em>&nbsp;
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
                  {<b>Curriculam</b>}
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
      </div>}
      {key==='CAMPS'&& <div className='details-section' >
        {queDetails?.map(item=>
          <div className="course-about" key={item.id} id="ProgramID">
            <h3>
              <u>
                <b>{item[0]}</b>
              </u>
            </h3>
            <div>{item[1]}</div>
          </div>)}
        <div className="course-benefits" id="CurriculamID">
          {              curriculum?.points?.map(({ title, points }) => {

            return (
              <div key={title}>
                <h3><u>{title}</u></h3>
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
        <h3><u>Time</u></h3>
        <div>{duration}</div>
        <br/>
        <h3><u>Fees</u></h3>
        <div>{fees}</div>
        <div className="course-benefits" id="CurriculamID">
          <h3><u>Guidelines</u></h3>
          <ul>
            { Guidelines.points.map(itm=>{
              console.log(itm,'abcdef')
              if (typeof itm !== 'object')
                return <li key={itm}>{itm}</li>
            })}
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default CourseDetails
