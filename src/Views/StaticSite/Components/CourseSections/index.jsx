import React, { useState } from 'react'
import CourseCard from '../CourseCard'
import './style.scss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Accordian from '../CommanAccordian'
import { Link } from 'react-router-dom'

const CourseSection = ({ title, showRangeSlider, data, pathParam, sliderRange }) => {
  const [customVal, setCustomVal] = useState(1)

  const content = () => {
    const coursesList = [
      {
        id: 1,
        ques: '200 hours TTC (Basic)',
        ans: [
          {
            url: '/one-month-ttc',
            text: ' Batch 1 - 1 Month TTC - Online & On Campus - English',
          },
          {
            url: '/200-hrs-part-time-ttc-on-campus-english',
            text: ' Batch 2 - 2 Months TTC - On Campus - English',
          },
          {
            url: '/200-hrs-parttime-ttc-online-english',
            text: 'Batch 3 - 2 Months TTC - Online - English',
          },
          {
            url: '/200-hrs-part-time-ttc-online',
            text: 'Batch 4 - 2 Months TTC - Online - Hindi',
          },
          {
            url: '/200-hrs-parttime-ttc-online-english-batch-5',
            text: 'Batch 5 - 2 Months TTC - Online - English',
          },
          {
            url: '/weekend-teacher-training-course',
            text: 'Batch 6 - 3 Months Weekend TTC - Online - English ',
          },
        ],
      },
      {
        id: 2,
        ques: '500 Hours TTC (Intermediate)',
        ans: [
          {
            url: '/500-hrs-online-yoga-teacher-training-course-intermediate-level',
            text: ' 3 Months TTC - Online - English',
          },
        ],
      },
      {
        id: 3,
        ques: '900 Hour Courses',
        ans: [{ url: '/3-months-advanced-teacher-training-course', text: '3 Months TTC-On Campus-English' },
          { url: '/900-hours-advanced-teacher-training-course', text: '4 Months TTC-On Campus-English' },
          { url: '/seven-month-ttc', text: '7 Months TTC-Online & On Campus-English' },
          { url: '/one-year-ttc', text: '1 Year TTC-Online & On Campus-Hindi' },
          { url: '/two-year-ttc', text: '2 Years TTC-Online & On Campus-English' },],
      },
    ]
    switch (title) {
    case 'Teacher Training Courses':
      return (
        <Accordian sliderVal={customVal} setSliderVal={setCustomVal} data={coursesList} />
      )
    case 'Regular Classes':
      return (
        <div className="course-list-content">
          <div>
            <h4>
              <ul>
                <Link to='/asana-regular-classes-on-campus'><li>Asana Regular Classes for Men On Campus</li></Link>
                <Link to='/asana-regular-classes-on-campus-women'><li>Asana Regular Classes for Women On Campus</li></Link>
                <Link to='/weekend-classes'><li>Weekend Asana Classes - (Men & Women) On Campus</li></Link>
                <Link to='/weekend-classes-online'><li>Weekend Asana Classes - (Men & Women) Online</li></Link>
                <Link to='/childrens-regular-classes'><li>Children&apos;s Regular Class - On Campus</li></Link>
                <Link to='/childrens-regular-classes-on-campus'><li>Children&apos;s Weekend Class - On Campus </li></Link>
                <Link to='/advanced-regular-yoga-classes'><li>
                    Advance Asana Regular Class - Online (Only for TYI Teachers)
                </li>
                </Link>
              </ul>
            </h4>
          </div>
          {/* <Link to="/courses/browse/classes">
            <CommonBtn text={'Explore all'} />
          </Link> */}
        </div>
      )
    case 'Camps & Workshops':
      return (
        <div className="course-list-content">
          <div>
            <h4>
              <ul>
                <Link to='/corporate-workshops'><li>Corporate Workshop</li></Link>
                <Link to="/stress-management-camp">
                  <li>Stress Management Camp</li>
                </Link>
                <Link to='/weight-management-workshop'><li>Weight Management Workshop</li></Link>
                <Link to='/pregnancy-camp-for-ante-post-natal'><li>Pregnancy Camp for Ante & Post Natal</li></Link>
                <Link to='/cardiac-hypertension-workshop'><li>Cardiac & Hypertension Workshop</li></Link>
                <Link to='/back-joint-disorder-workshop'><li>Back & Joint Disorder Workshop</li></Link>
                <Link to='/pranayama-workshop'><li>Pranayama Workshop</li></Link>
              </ul>
            </h4>
          </div>
          <div className="vertical-scrollbar" style={{ paddingLeft: '5rem' }}>
            {/* <Slider
              min={1}
              max={sliderRange}
              orientation="vertical"
              value={customVal}
              onChange={(value) => setCustomVal(value)}
              reverse={true}
            /> */}
          </div>
        </div>
      )

    case 'Most Popular':
      return (
        <div className="course-list-content">
          <div>
            <h4>
              <ul>
                <Link to='/7-days-camp-english'><li>7 Days Health Camp</li></Link>
                <Link to='/21-days-better-living-course'><li>21 Days Better Living Course</li></Link>
                <Link to='/one-month-ttc'><li>200 Hour 1 Month BTTC Course</li></Link>
                <Link to='/seven-month-ttc'><li>900 Hour 3 Month ATTC Course</li></Link>
                <Link to='/pregnancy-camp-for-ante-post-natal'><li> Pregnancy Camp</li></Link>
              </ul>
            </h4>
          </div>
          {/* <Link to="/courses/browse/most-popular">
            <CommonBtn text={'Explore all'} />
          </Link> */}
        </div>
      )
    }
  }

  const selectColor = (i)=>{
    if(i===0){
      return '#94B1B2'
    }else if(i===1){
      return '#7C999B'
    }else{
      return '#6E9596'
    }
  }
  return (
    <div className="course-section">
      <div className="course-list">
        <div className="course-title">
          <Link to={`/courses/browse/${pathParam}`}>
            <h1>{title}</h1>
          </Link>
        </div>
        {content()}
      </div>
      {showRangeSlider === true && (
        <div className="vertical-scrollbar">
          <Slider
            min={1}
            max={sliderRange}
            orientation="vertical"
            value={customVal}
            onChange={(value) => setCustomVal(value)}
            reverse={true}
          />
        </div>
      )}
      <div className="course-cards">
        {title === 'Most Popular'
          ? data
            .filter((item) => item.mostPopular === true)
            .map((item, i) => {
              if (i < 3) {
                return (
                  <CourseCard
                    key={i}
                    color={selectColor(i)}
                    index={i}
                    courseTitle={item.title}
                    description={item.metaDescription}
                    path={item.key}
                    img={item.cardImage}
                    rating={item.rating}
                    dates={item.dates}
                  />
                )
              }
              return
            })
          : data.map((item, i) => {
            if (i < 3) {
              return (
                <CourseCard
                  key={i}
                  color={item.colorCode}
                  index={i}
                  courseTitle={item.title}
                  description={item.metaDescription}
                  path={item.key}
                  img={item.cardImage}
                  rating={item.rating}
                  dates={item.dates}
                />
              )
            }
            return
          })}
      </div>
    </div>
  )
}

export default CourseSection
