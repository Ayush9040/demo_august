import React, { useEffect, lazy, useState } from 'react'
//import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
// import CourseSection from '../../../Components/CourseSections'
import { courseCardData } from '../../../utils/courseCardData'
import { c200hr, c500hr, c900hr, campsArr, AllCourses, classesArr } from '../Constants/courses'
import baseDomain, { certificates } from '../../../assets/images/imageAsset'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion'

// import {
//   courseArray,
//   course200H,
//   camps,
//   classes,
// } from '../../../Constants/courses/c200hr'

import AlumniCarousel from '../../../Components/AluminiCarousel'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { trackCourseView } from '../../../../../CleverTap/pageViewEvents'

const CourseSection = lazy(() => import('../../../Components/CourseSections'))
// const courseCardData = lazy(() =>
//   import('../../../utils/courseCardData').then(module => ({ default: module.courseCardData }))
// );

const Courses = () => {

  const location = useLocation()
  const [sessionId, setSessionId] = useState('');
  const [startTime, setStartTime] = useState(0);
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const CoursesBan = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  let data = [[c200hr[0], c500hr[0], c900hr[0]], campsArr, classesArr, AllCourses]

  const setPathParam = (title) => {

    if (title === 'Teacher Training Courses') {

      return { path: 'ttc', sliderVal: 3 }
    }
    else if (title === 'Camps & Workshops') {

      return { path: 'camps-workshops', sliderVal: 9 }
    }
    else if (title === 'Most Popular') {

      return { path: 'most-popular', sliderVal: 3 }
    }
    else {

      return { path: 'classes', sliderVal: 3 }
    }
  }


  
  useEffect(() => {
    // Start time when the component mounts
    setStartTime(Date.now());

    // Retrieve or generate the session ID
    let session = localStorage.getItem('sessionId');
    if (!session) {
        session = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('sessionId', session);
    }
    setSessionId(session);

    return () => {
        // End time when the component unmounts
        const endTime = Date.now();

        // Calculate the session duration in seconds
        const sessionDuration = ((endTime - startTime) / 1000).toFixed(2);

        const pageName = 'Course_Intro';
        const lastPageUrl = document.referrer || 'N/A';
        const pageUrl = window.location.href;
        //const loggedIn = localStorage.getItem('isLoggedIn') === 'true' ? 'Yes' : 'No'; // Adjust based on your auth logic
        const uniqueViewId = Math.floor(Math.random() * 1000); // Replace with actual logic

        // trackCourseView({
        //     pageName,
        //     lastPageUrl,
        //     pageUrl,
        //     sessionDuration,
        //     isLoggedIn,
        //     sessionId: session,
        //     uniqueViewId,
        // });
    };
}, []);

  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <div className="courses-container">
        {/* <CommonBannerNavPrimary innerNav={false} /> */}
        <InnerNavComponent abc={CoursesBan} />
        <div className="search">
          <h1>Courses</h1>
          {/* <div className="search-bar">
          <label>
            <input type={'text'} placeholder="Search Courses" />
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </div> */}
        </div>
        <div className="popular-courses">
          <div className="course-accordian">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/most-popular">
                      <p> Most Popular</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc">
                      <p>Teachers Training</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/camps-workshops">
                      <p>Camps & Workshop</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/classes">
                      <p>Regular Classes</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/certificate-courses">
                      <p>Certificate Courses</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
            </Accordion>
          </div></div>

        <div className="courses-introduction">
          <div className="intro-text">
            <h1>More than just learning</h1>

            <p className="intro-p">
              Whether you want to revitalize your mind and body or take a break
              from your hectic lifestyle, we have you covered. To bring in a new
              you or begin a new career path, explore our countless life-changing
              courses, which have transformed millions of people over the last 10
              decades.
            </p>
            <p>
              Every course has been designed to deliver organic and holistic results by incorporating 105+ years of legacy, research, and knowledge. Choose now from our innumerable courses to get started on your journey of transformation!
            </p>
          </div>
          <div className="intro-image">

            <img src="https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/SEO-New-Images/Courses/yoga-teacher-training-courses-hero.webp" alt='more than just reading' loading='lazy' />
          </div>
        </div>

        {courseCardData && courseCardData.map((item, i) => {

            setPathParam(item.title)
            return (
              <CourseSection
                key={i}
                title={item.title}
                // color={item.color}
                data={data[i]}
                showRangeSlider={(item?.title === 'Teacher Training Courses') ? true : false}
                pathParam={setPathParam(item.title).path}
                cardData={item.cardData}
                sliderRange={setPathParam(item.title).sliderVal}
              />
            )
          })
        }

        <div className="certifications">
          <h2>
            Certified by Yoga Certification Board (YCB), Ministry of AYUSH and
            Yoga Alliance, USA.
          </h2>
          <div className="certificates">
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.IYA}`} alt='The Indian Yoga Association' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  The Indian Yoga Association is committed to promotion and
                  advancement of Yoga and its applications around the world.

                </p>
              </div>
            </div>
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.YCB}`} alt='Yoga Certification Board' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  Yoga Certification Board is the Board which has been set up by
                  Government for certification in the field of Yoga.

                </p>
              </div>
            </div>
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.YAL}`} alt='Yoga Alliance' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  Yoga Alliance is involved with advocating for self-
                  regulation in the yoga industry.

                </p>
              </div>
            </div>
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.IAYT}`} alt='International association of yoga therapists' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  IAYT supports research and education in yoga and serves as a
                  professional organization for yoga teachers and yoga therapists worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <AlumniCarousel />
      </div>
    </>
  )
}

export default Courses
