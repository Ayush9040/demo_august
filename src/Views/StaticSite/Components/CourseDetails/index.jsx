import React, { useEffect, useState } from 'react'
import './style.scss'
//import { star, global, network, chat } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import baseDomain, { courseAssets } from '../../assets/images/imageAsset'
import { Link, useSearchParams } from 'react-router-dom'
import CoursePara from '../CourseComponents/CoursePara'
import CourseULIst from '../CourseComponents/CourseUList'
import CourseTable from '../CourseComponents/CourseTable'
import CourseQuote from '../CourseComponents/CourseQuote'
import CourseURL from '../CourseComponents/CourseURL'
import SelectDropDown from '../Select Dropdown'
import { useSelector } from 'react-redux'
import CourseOList from '../CourseComponents/CourseOLList'
//import { useParams } from 'react-router-dom'


const CourseDetails = ({ pageDate }) => {
  const [detail, setDetail] = useState(1)
  const [error, setError] = useState()
  const [Params] = useSearchParams()

  // const [courseDate, setCourseDate] = useState()

  // useEffect(() => {
  //   setCourseDate(localStorage.getItem('selectedDate'))
  // }, [])
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [selectDate, setSetselectDate] = useState(null)

  const checkHandler = () => {
    if (pageDate.dates.length !== 0) {
      if (selectDate === null) {
        setError(1)
      } else {
        setError(0)
      }
    }
  }

  // localStorage.setItem('selectedDate',selectDate)
  useEffect(() => {
    setSetselectDate(Params.get('date'))

    window.scrollTo(0, 0)
    console.log(pageDate?.key,'heoo')
    // {Params.get('date')===null? window.scrollTo(0, 0): document.getElementById('date-select').scrollIntoView()}
  }, [])

  const scroll = () => {
    // document.getElementById('date-select').scrollIntoView()
    return <CommonBtn text={'Enroll Now'} />
  }

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
    marginTop: '2rem',
    marginLeft: '10rem',
  }
  const selectStyles1 = {
    cursor: 'pointer',
    background: '#c9705f',
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop: '2rem',
    //marginLeft:'10rem'
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
    case 'o-list':
      return <CourseOList content={content} />
    case 'table':
      return <CourseTable content={content} />
    case 'quote':
      return <CourseQuote content={content} />
    case 'url':
      return <CourseURL content={content} />
    }
  }



  return (
    <>
      <div className="course-detail-page" id="registration">
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
            <p>{pageDate?.textdescription1}</p>
            <p>{pageDate?.textdescription2}</p>
            <p>{pageDate?.textdescription3}</p>
            <p>{pageDate?.textdescription4}</p>
            <p>{pageDate?.textdescription5}</p>
            {pageDate?.metaDescription?.split('¿').map((para,i)=> {
              return <p key={i} style={{ marginTop: '20px' }}>{para}</p>
            })}
            
            <p>{pageDate?.textdescription6}</p>
            <p>{pageDate?.textdescription7}</p>
            <p>{pageDate?.textdescription8}</p>
            <p>{pageDate?.textdescription9}</p>
            <p>{pageDate?.textdescription10}</p>
            {/* 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry.'} */}
            {pageDate?.key === 'respiratory-workshop'  && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This camp is designed specifically for individuals who are currently facing respiratory issues. It is tailored to provide support, guidance, and exercises to help improve respiratory health.</p>
            )}
            {pageDate?.key === 'respiratory-workshop' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'stress-management-camp'   && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This camp is uniquely crafted for individuals currently experiencing stress-related challenges. Its focus is on offering specialized assistance, direction, and techniques to address issues stemming from stress.</p>
            )}
            {pageDate?.key === 'stress-management-camp' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'weight-management-workshop'  && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This camp is thoughtfully designed for individuals who face challenges in weight loss and achieving their ideal weight. Our emphasis is on providing a comprehensive strategy for weight management, incorporating yoga postures, pranayamas, and a nourishing diet. </p>
            )}
            {pageDate?.key === 'weight-management-workshop' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'pregnancy-camp-for-ante-post-natal'  && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This camp is tailored exclusively for pregnant women. Our goal is to offer you an enriching journey towards a joyful and healthy pregnancy, along with a smooth delivery, achieved through yoga techniques and practical guidance. </p>
            )}
            {pageDate?.key === 'pregnancy-camp-for-ante-post-natal' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'cardiac-hypertension-workshop'  && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This workshop is exclusively crafted for people presently dealing with heart and hypertension concerns. Our objective is to offer assistance, guidance, and yogic practices to effectively address these concerns. </p>
            )}
            {pageDate?.key === 'cardiac-hypertension-workshop' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'back-joint-disorder-workshop'  && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This workshop is uniquely created for individuals presently experiencing back and joint issues. It is custom-tailored to offer support, guidance, and specialized exercises aimed at addressing and alleviating these concerns. </p>
            )}
            {pageDate?.key === 'back-joint-disorder-workshop' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'diabetes-camp'  && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>This camp is exclusively designed for individuals currently managing diabetes. It is customized to offer support, guidance, and equip you with essential resources to improve your quality of life. </p>
            )}
            {pageDate?.key === 'diabetes-camp' && (
              <p style={{ marginTop: '1.5rem' , fontSize:'1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}

            
            <div
              id="date-select-mobile"
              style={
                pageDate?.dates?.length !== 0
                  ? { visibility: 'visible' }
                  : { display : 'none' }
              }
            >
              <SelectDropDown
                currentValue={selectDate}
                changeCurrentValue={setSetselectDate}
                text={'Select Date/Time'}
                isStyles={selectStyles1}
                dates={pageDate.dates}
              />{' '}
            </div>
            <div className="course-options">
              {/* {selectDate ? <Link to={ isLoggedIn ? `/enrollment/${pageDate.key}/?date=${selectDate}`:`/user/sign-in/${pageDate.key}/?date=${selectDate}`}>
              <CommonBtn text={'Enroll Now'} />
            </Link> :  scroll() } */}

              <div onClick={checkHandler}>
                {pageDate?.dates?.length !== 0 ? 
                  (
                    selectDate ? (
                      <Link
                        to={
                          isLoggedIn
                            ? `/enrollment/${pageDate.key}/?date=${selectDate}`
                            : `/user/sign-in/?location=${pageDate.key}&date=${selectDate}`
                        }
                      >
                        <CommonBtn text={'Enroll Now'} />
                      </Link>
                    ) : (
                      scroll()
                    )
                  ) : 
                  ( pageDate?.key === 'samattvam' || pageDate?.key === 'satsang' ? <Link
                    to={
                      isLoggedIn
                        ? `/enrollment/${pageDate.key}/?date=${selectDate}`
                        : `/user/sign-in/?location=${pageDate.key}&date=${selectDate}`
                    }
                  >
                    <CommonBtn text={'Enroll Now'} />
                  </Link> : 
                    ( <div > 
                      <div style={{ opacity : '0.4' }}> 
                        <CommonBtn text={'Enroll Now'} /> 
                      </div>
                      <div style={{ fontSize:'1.5rem' , padding : '1.5rem' }}>No dates available for this course</div>
                    </div>)
                  
                  )
                }
                
                {error === 1 && (
                  <small
                    style={{
                      color: 'white',
                      marginLeft: '0',
                      position: 'relative',
                      top: '1rem',
                      left: '2rem',
                      fontSize: '1.2rem',
                    }}
                  >
                  *Please Select Date/Time!
                  </small>
                )}
              </div>

              {/* <CommonBtn text={'Gift Course'} /> */}
            </div>
          </div>
          <div className="course-cover course-cover-2">
            {pageDate?.image ? (
              <img src={pageDate?.image} alt={pageDate.title} />
            ) : (
              <img
                src={`${baseDomain}${courseAssets.courseAsset2}`}
                alt="course-image"
              />
            )}
          </div>
        </div>

        <div
          id="date-select"
          style={
            pageDate?.dates?.length !== 0
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        >
          <SelectDropDown
            currentValue={selectDate}
            changeCurrentValue={setSetselectDate}
            text={'Select Date/Time'}
            isStyles={selectStyles}
            dates={pageDate.dates}
          />{' '}
        </div>

        {pageDate.category === 'ttc' && (
          <div className="career-navigation-lg-div">
            <div className="career-navigation-lg">
              <ul className="innerNav">
                {options.map((item, idx) => (
                  <a
                    key={item.id}
                    id={item.title === 'FAQ' ? 'comingsoon' : ''}
                    href={`#${item.id}`}
                  >
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

        {
          <div className="details-section" id="program-details">
            <h1>Program Details</h1>
            {pageDate?.details?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        }
        {pageDate?.category === 'ttc' && pageDate?.curriculum?.length !== 0 && (
          <div className="details-section" id="curriculum">
            <h1>Curriculum</h1>
            {pageDate?.curriculum?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        )}
        {pageDate?.category === 'ttc' && pageDate?.teaching?.length !== 0 && (
          <div className="details-section" id="teaching">
            <h1>Teaching & Certification</h1>
            {pageDate?.teaching?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        )}
        {pageDate?.category === 'ttc' && pageDate?.offerings?.length !== 0 && (
          <div className="details-section" id="offering">
            <h1>Our Unique Offerings</h1>
            {pageDate?.offerings?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default CourseDetails
