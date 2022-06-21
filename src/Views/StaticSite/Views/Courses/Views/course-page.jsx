import React, { useEffect } from 'react'
//import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import CourseSection from '../../../Components/CourseSections'
import { courseCardData } from '../../../utils/courseCardData'

import {
  courseArray,
  course200H,
  camps,
  classes,
} from '../../../Constants/courses/c200hr'
import AlumniCarousel from '../../../Components/AluminiCarousel'
import InnerNavComponent from '../../../Components/InnerNavComponent'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const CoursesBan = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  //let hourCourse = [...course200H,...course900H]

  let data = [course200H, camps, courseArray, classes]

  const setPathParam = (title) => {
    if (title === 'Teacher Training Courses') {

      return { path:'ttc',sliderVal:3 }
    } else if (title === 'Camps & Workshops') {
      return { path:'camps-workshops',sliderVal:9 }
    } else if (title === 'Most Popular') {
      return { path:'most-popular',sliderVal:3 }
    } else {
      return { path:'classes',sliderVal:3 }
    }
  }

  setPathParam()

  return (
    <div className="courses-container">
      {/* <CommonBannerNavPrimary innerNav={false} /> */}
      <InnerNavComponent abc={CoursesBan} />
      <div className="search">
        <h1>Courses</h1>
        <div className="search-bar">
          <label>
            <input type={'text'} placeholder="Search Courses" />
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </div>
      </div>
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
            Every course has been precisely created to provide you with the
            best-desired results by incorporating 103 years of legacy, research,
            and knowledge. Choose now from our innumerable courses to get
            started on your journey of transformation!
          </p>
        </div>
        <div className="intro-image">
          <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/courses-hero%20%281%29.jpg" />
        </div>
      </div>
      {courseCardData &&
        courseCardData.map((item, i) => {
          setPathParam(item.title)
          return (
            <CourseSection
              key={i}
              title={item.title}
              color={item.color}
              data={data[i]}
              showRangeSlider={
                (item.title === 'Teacher Training Courses' || item.title === 'Regular Classes') ? true : false
               
              }
              pathParam={setPathParam(item.title).path}
              cardData={item.cardData}
              sliderRange={setPathParam(item.title).sliderVal}
            />
          )
        })}
      <div className="certifications">
        <h2>
          Certified by Yoga Certification Board (YCB), Ministry of AYUSH and
          Yoga Alliance, USA.
        </h2>
        <div className="certificates">
          <div className="certificate">
            <div className="certificate-logo">
              <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/Certificate/Yoga%20Certification%20Board.png" />
            </div>
            <div className="certificate-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ndustry.
              </p>
            </div>
          </div>
          <div className="certificate">
            <div className="certificate-logo">
              <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/Certificate/Yoga%20Alliance.png" />
            </div>
            <div className="certificate-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ndustry.
              </p>
            </div>
          </div>
          <div className="certificate">
            <div className="certificate-logo">
              <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/Certificate/Department%20of%20Ayush.png" />
            </div>
            <div className="certificate-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ndustry.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='course-alumni-section'>
        <div className='courses-alumni-content'>
          <h1>Alumni</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            ndustry.
          </p>
          <div className="alumins">
            <div className="alum-card">
              <img
                className="alum-image"
                src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/TTC/Alumni/Almuni_pictures_and_word_file/Madan_Bahal.jpg"
                alt="Madan Bahal"
              />
              
              <h4 className="alum-name">Madan Bahal</h4>
              
              <p className="alum-designation"> MD, Adfactors</p>
              <p className="alum-year">1989</p>
            </div>
            <div className="alum-card">
              <img
                className="alum-image"
                src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/TTC/Alumni/Almuni_pictures_and_word_file/Nirmal-Gangwal.png"
                alt="Nirmal"
              />
              
              <h4 className="alum-name">Nirmal Gangwal</h4>
              
              <p className="alum-designation">MD,Brescon Corporate Advisor</p>
              <p className="alum-year">Year</p>
            </div>
            <div className="alum-card">
              <img
                className="alum-image"
                src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/TTC/Alumni/Almuni_pictures_and_word_file/Sukhwinder_Singh.jpg"
                alt="Sukhwinder"
              />
              
              <h4 className="alum-name">Sukhwinder Singh</h4>
              
              <p className="alum-designation">Playback singer</p>
              <p className="alum-year">Year</p>
            </div>
            <div className="alum-card">
              <img
                className="alum-image"
                src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/TTC/Alumni/Almuni_pictures_and_word_file/Shivkumar_Sharma.jpg"
                alt="Pt. Shivkumar Sharma"
              />
              
              <h4 className="alum-name">Pt. Shivkumar Sharma</h4>
              
              <p className="alum-designation">Renowned Santoor Maestro</p>
              <p className="alum-year">Year</p>
            </div>
          </div>
        </div>
        <Link to="">
          <CommonBtn text={'Explore all'} />
        </Link>
      </div> */}
      <AlumniCarousel />
    </div>
  )
}

export default Courses
