import React, { useEffect, useState } from 'react'
import './style.scss'
//import { star, global, network, chat } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import baseDomain, { courseAssets } from '../../assets/images/imageAsset'
import { Link } from 'react-router-dom'
import CoursePara from '../CourseComponents/CoursePara'
import CourseULIst from '../CourseComponents/CourseUList'
import CourseTable from '../CourseComponents/CourseTable'
import CourseQuote from '../CourseComponents/CourseQuote'
import CourseURL from '../CourseComponents/CourseURL'
//import { useParams } from 'react-router-dom'

const CourseDetails = ({ pageDate }) => {
  const [detail, setDetail] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {
    id,
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
    Guidelines,
  } = pageDate

  console.log(pageDate,'pageData')

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

  const selectComponent = (type,content)=>{
    switch(type){
    case 'paragraph': return <CoursePara content={content} />
    case 'u-list': return <CourseULIst content={content}/>
    case 'table': return <CourseTable content={content}/>
    case 'quote': return <CourseQuote content={content}/>
    case 'url': return <CourseURL content={content}/>
    }
  }
  let timing = pageDate?.details?.find(item=>item.content.title==='Date')?.content?.text[0]

  return (
    <div className="course-detail-page">
      <div className="main-section" style={{ background: '#C9705F' }}>
        <div className="course-info">
          <h1>
            {pageDate?.title ? (
              <span>
                {pageDate?.title}
              </span>
            ) : (
              <span>
                <p>500 Hour</p>

                <p>6 Months Online</p>

                <p>Weekend - 18th Dec 2021</p>
              </span>
            )}
          </h1>
          <p>
            {timing}
          </p>
          <p style={{ marginTop:'20px' }} >
            {pageDate.metaDescription || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
          </p>
          <div className="course-options">
            <Link to={`/enrollment/${pageDate.key}`}><CommonBtn text={'Enroll Now'} /></Link>
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
      <div className='details-section' >
        <h1>Program Details</h1>
        {pageDate?.details?.map(({ type,content })=>{return selectComponent(type,content)})}
      </div>
      <div className='details-section' >
        <h1>Curriculam</h1>
        {pageDate?.curriculam?.map(({ type,content })=>{return selectComponent(type,content)})}
      </div>
    </div>
  )
}

export default CourseDetails
