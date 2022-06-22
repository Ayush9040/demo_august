import React, { useState } from 'react'
import CourseCard from '../CourseCard'
import './style.scss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Accordian from '../CommanAccordian'
import { Link } from 'react-router-dom'

const CourseSection = ({ title, showRangeSlider, data, pathParam }) => {
  const [customVal, setCustomVal] = useState(0)

  console.log(data, 'course-data')

  const content = () => {
    const coursesList = [
      {
        id: 1,
        ques: '200 hours TTC (Basic)',
        ans: [
          {
            url: '/courses/course/batch-1-200hr/',
            text: ' Batch 1 - 1 Month TTC - Online & On Campus - English',
          },
          {
            url: '/courses/course/batch-2-200hr/',
            text: ' Batch 2 - 2 Months TTC - On Campus - English',
          },
          {
            url: '/courses/course/batch-3-200hr/',
            text: 'Batch 3 - 2 Months TTC - Online - English',
          },
          {
            url: '/courses/course/batch-4-200hr/',
            text: 'Batch 4 - 2 Months TTC - Online - Hindi',
          },
          {
            url: '/courses/course/batch-5-200hr/',
            text: 'Batch 5 - 2 Months TTC - Online - English',
          },
          {
            url: '/courses/course/batch-6-200hr/',
            text: 'Batch 6 - 3 Months Weekend TTC - Online - English ',
          },
        ],
      },
      {
        id: 2,
        ques: '500 Hours TTC (Intermediate)',
        ans: [
          {
            url: '/courses/course/3-months-500hr/',
            text: ' 3 Months TTC - Online - English',
          },
        ],
      },
      {
        id: 3,
        ques: '900 Hour Courses',
        ans: [{ url: '/courses/course/3%20Months%20TTC/', text: '3 Months TTC-On Campus-English' },
          { url: '/courses/course/4-Months-900hr/', text: '4 Months TTC-On Campus-English' },
          { url: '/courses/course/7-Months-900hr/', text: '7 Months TTC-Online & On Campus-English' },
          { url: '/courses/course/1-year-900hr/', text: '1 Year TTC-Online & On Campus-Hindi' },
          { url: '/courses/course/2-year-900hr/', text: '2 Years TTC-Online & On Campus-English' },],
      },
    ]
    switch (title) {
    case 'Teacher Training Courses':
      return <Accordian data={coursesList} />
    case 'Regular Classes':
      return (
        <div className="course-list-content">
          <div>
            <h4>
              <ul>
                <Link to='/courses/course/asana-regular-classes-men-on-campus/'><li>Asana Regular Classes for Men On Campus</li></Link>
                <Link to='/courses/course/asana-regular-classes-for-women/'><li>Asana Regular Classes for Women On Campus</li></Link>
                <Link to='/courses/course/asana-regular-classes-men-on-campus/'><li>Weekend Asana Classes - (Men & Women) On Campus</li></Link>
                <Link to='/courses/course/asana-regular-classes-men-women/'><li>Weekend Asana Classes - (Men & Women) Online</li></Link>
                <Link to='/courses/course/children&apos;s-regular-class-oncampus/'><li>Children&apos;s Regular Class - On Campus</li></Link>
                <Link to='/courses/course/children&apos;s-weeken-class-oncampus/'><li>Children&apos;s Weekend Class - On Campus </li></Link>
                <Link to='/courses/course/advance-asana-regular-class/'><li>
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
                <Link to='/courses/course/bhava-workshop/'><li>Corporate Workshop</li></Link>
                <Link to="/courses/course/stress-management-camp/">
                  <li>Stress Management Camp</li>
                </Link>
                <Link to='/courses/course/weight-management-workshop/'><li>Weight Management Workshop</li></Link>
                <Link to='/courses/course/pregnancy-camp-for-ante-post-natal/'><li>Pregnancy Camp for Ante & Post Natal</li></Link>
                <Link to='/courses/course/cardiac-hypertension-workshop/'><li>Cardiac & Hypertension Workshop</li></Link>
                <Link to='/courses/course/back-joint-disorder-workshop/'><li>Back & Joint Disorder Workshop</li></Link>
                <Link to='/courses/course/pranayama-workshop/'><li>Pranayama Workshop</li></Link>
              </ul>
            </h4>
          </div>
          <div className="vertical-scrollbar" style={{ paddingLeft: '5rem' }}>
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
                <Link to=''><li>7 Days Health Camp</li></Link>
                <Link to=''><li>21 Days Better Living Course</li></Link>
                <Link to='/courses/course/batch-1-200hr/'><li>200 Hour 1 Month BTTC Course</li></Link>
                <Link to='/courses/course/7-Months-900hr/'><li>900 Hour 3 Month ATTC Course</li></Link>
                <Link to='/courses/course/pranayama-workshop/'><li> Pregnancy Camp</li></Link>
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
                    color={selectColor(i)}
                    index={i}
                    courseTitle={item.title}
                    description={item.metaDescription}
                    path={item.key}
                    img={item.image}
                    rating={item.rating}
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
                  img={item.image}
                  rating={item.rating}
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
