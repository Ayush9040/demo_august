import React, { useState } from 'react'
import CourseCard from '../CourseCard'
import './style.scss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Accordian from '../CommanAccordian'
import { Link } from 'react-router-dom'

const CourseSection = ({ title, showRangeSlider, color, data, pathParam }) => {
  const [customVal, setCustomVal] = useState(0)

  console.log(data, 'course-data')


  const content = () => {
    const coursesList = [
      {
        id: 1,
        ques: '200 hours TTC (Basic)',
        ans: [
          {
            url: '/abcs',
            text: ' Batch 1 - 1 Month TTC - Online & On Campus - English',
          },
          {
            url: '/abcs',
            text: ' Batch 2 - 2 Months TTC - On Campus - English',
          },
          { url: '/abcs', text: 'Batch 3 - 2 Months TTC - Online - English' },
          { url: '/abcs', text: 'Batch 4 - 2 Months TTC - Online - Hindi' },
          { url: '/abcs', text: 'Batch 5 - 2 Months TTC - Online - English' },
          {
            url: '/abcs',
            text: 'Batch 6 - 3 Months Weekend TTC - Online - English ',
          },
        ],
      },
      {
        id: 2,
        ques: '500 Hours TTC (Intermediate)',
        ans: [{ url: '/abcs', text: ' 3 Months TTC - Online - English' }],
      },
      {
        id: 3,
        ques: '900 Hour Courses',
        ans: [{ url: '/abc', text: '' }],
      },
    ]
    switch (title) {
    case 'Teacher Training Courses':
      return (
        <Accordian data={coursesList} />
      )
    case 'Regular Classes':
      return (
        <div className="course-list-content">
          <div>
            <h4>
              <ul>
                <li>Asana Regular Classes for Men On Campus</li>
                <li>Asana Regular Classes for Women On Campus</li>
                <li>Weekend Asana Classes - (Men & Women) On Campus</li>
                <li>Weekend Asana Classes - (Men & Women) Online</li>
                <li>Children&apos;s Regular Class - On Campus</li>
                <li>Children&apos;s Weekend Class - On Campus </li>
                <li>Advance Asana Regular Class - Online (Only for TYI Teachers)</li>
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
                <li>Stress Management Camp</li>
                <li>Meditation Camp</li>
                <li>Diabetes Camp</li>
                <li>Pregnancy Camp for Ante & Post Natal</li>
                <li>7 Days Health Camp English</li>
                <li>7 Days Health Camp Hindi</li>
                <li>21 Days Better Living Course English - Morning</li>
                <li>21 Days Better Living Course English - Evening</li>
                <li>21 Days Better Living Course Hindi - Evening</li>
              </ul>
            </h4>
          </div>
          <div className="vertical-scrollbar" style={{ paddingLeft:'5rem' }}>
            <Slider
              min={0}
              max={3}
              orientation="vertical"
              value={customVal}
              onChange={(value) => setCustomVal(value)}
              reverse={true}
            />
          </div>
        </div>
      )

    case 'Most Popular':
      return (
        <div className="course-list-content">
          <div>
            <h4>
              <ul>
                <li>7 Days Health Camp</li>
                <li>21 Days Better Living Course</li>
                <li>200 Hour 1 Month BTTC Course</li>
                <li>900 Hour 3 Month ATTC Course</li>
                <li> Pregnancy Camp</li>
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
            min={0}
            max={3}
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
                    color={item.colorCode}
                    index={i}
                    courseTitle={item.title}
                    description={item.metaDescription}
                    path={item.key}
                    img={item.image}
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
                  description={item.details}
                  path={item.key}
                  img={item.image}
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
