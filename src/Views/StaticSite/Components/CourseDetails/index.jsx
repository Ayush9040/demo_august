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
import SelectDropDown from '../Select Dropdown'
//import { useParams } from 'react-router-dom'

const CourseDetails = ({ pageDate }) => {
  const [detail, setDetail] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const {
  //   id,
  //   key,
  //   image,
  //   name,
  //   details,
  //   benefits,
  //   duration,
  //   date,
  //   timings,
  //   fees,
  //   prerequisites,
  //   curriculum,
  //   unique,
  //   TeachingAndCertification,
  //   queDetails,
  //   Guidelines,
  // } = pageDate

  console.log(pageDate, 'pageData')
  const [selectDate, setSetselectDate] = useState()
  localStorage.setItem('selectedDate',selectDate)

  let options = [
    {
      id: 'program-details',
      title: 'Program Details',
      key: 1,
    },
    {
      id: 'curriculum',
      title: 'Curriculum',
      key: 2,
    },
    {
      id: 'teaching',
      title: 'Teaching & Certification',
      key: 3,
    },
    {
      id: 'offering',
      title: 'Our Unique Offerings',
      key: 4,
    },
    {
      id: 'registration',
      title: 'Registration',
      key: 5,
    },
    {
      id: 'faq-section',
      title: 'FAQ',
      key: 6,
    },
  ]

  const selectStyles = {
    cursor: 'pointer',
    background: 'white',
    borderColor: 'black',
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop:'2rem',
    marginLeft:'10rem'
  }

  const selectMenu = (name) => {
    switch (name) {
    case 'Program Details':
      setDetail(1)
      break
    case 'curriculum':
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

  const selectComponent = (type, content) => {
    switch (type) {
    case 'paragraph':
      return <CoursePara content={content} />
    case 'u-list':
      return <CourseULIst content={content} />
    case 'table':
      return <CourseTable content={content} />
    case 'quote':
      return <CourseQuote content={content} />
    case 'url':
      return <CourseURL content={content} />
    }
  }

  return (
    <div className="course-detail-page">
      <div className="main-section" style={{ background: '#C9705F' }}>
        <div className="course-info">
          <h1>
            {pageDate?.title ? (
              <span>{pageDate?.title}</span>
            ) : (
              <span>
                <p>500 Hour</p>

                <p>6 Months Online</p>

                <p>Weekend - 18th Dec 2021</p>
              </span>
            )}
          </h1>
          <p>{pageDate?.timing}</p>
          <p style={{ marginTop: '20px' }}>
            {pageDate.metaDescription ||
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
          </p>
          <div className="course-options">
            <Link to={`/user/sign-in/${pageDate.key}/`}>
              <CommonBtn text={'Enroll Now'} />
            </Link>
            {/* <CommonBtn text={'Gift Course'} /> */}
          </div>
        </div>
        <div className="course-cover">
          {pageDate?.image ? (
            <img src={pageDate?.image} />
          ) : (
            <img src={`${baseDomain}${courseAssets.courseAsset2}`} />
          )}
        </div>
      </div>
      <SelectDropDown  currentValue={selectDate} changeCurrentValue={setSetselectDate} text={'Select Dates'} isStyles={selectStyles} dates={pageDate.dates}/>
      {pageDate.category === 'ttc' && (
        <div className="career-navigation-lg-div">
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
                    </em>
                    &nbsp;
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    


      {<div className="details-section" id='program-details' >
        <h1>
            Program Details
        </h1>
        {pageDate?.details?.map(({ type, content }) => {
          return selectComponent(type, content)
        })}
      </div>}
      {(pageDate?.category === 'ttc' && pageDate?.curriculum?.length !== 0) && <div className="details-section" id='curriculum' >
        <h1>
            Curriculum
            
        </h1>
        {pageDate?.curriculum?.map(({ type, content }) => {
          return selectComponent(type, content)
        })}
      </div>}
      {(pageDate?.category === 'ttc' && pageDate?.teaching?.length !== 0) && <div className="details-section" id='teaching' >
        <h1>
            Teaching
        </h1>
        {pageDate?.teaching?.map(({ type, content }) => {
          return selectComponent(type, content)
        })}
      </div>}
      {(pageDate?.category ==='ttc' && pageDate?.offerings?.length !==0) && <div className="details-section" id='offering' >
        <h1>
          Our Offerings
        </h1>
        {pageDate?.offerings?.map(({ type, content }) => {
          return selectComponent(type, content)
        })}
      </div>}
    </div>
  )
}

export default CourseDetails
