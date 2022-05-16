import React, { useState } from 'react'
import CourseCard from '../CourseCard'
import './style.scss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'

const CourseSection = ({ title, showRangeSlider, color, cardData }) => {
  const [customVal, setCustomVal] = useState(0)

  const content = () => {
    switch (title) {
    case 'Teacher Training Courses':
      return (
        <Accordion allowZeroExpanded allowMultipleExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p>200 Hour Courses</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h4>
                <ul>
                  <Link to='/courses/2-month'>
                    <li>Two Months Training Course - On Campus</li>
                  </Link>
                  <Link to='/courses/3-months'>
                    <li>
                        Weekend Training Course - 3 Months / Online - English
                    </li>
                  </Link>
                  <Link to='/courses/1-month'>
                    <li>One Month Training Course - Online / On Campus</li>
                  </Link>
                  <Link to='/courses/2-month'>
                    <li>
                        Two Month Training Course - Part Time/ Online - Hindi
                    </li>
                  </Link>
                  <Link to='/courses/ttc'>
                    <li>
                        Teacher Training Course - Part Time/ Online- English
                    </li>
                  </Link>
                </ul>
              </h4>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p>500 Hour Courses</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h4>
                <ul>
                  <li>Three Months Training Course - On Campus</li>
                </ul>
              </h4>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p>900 Hour Courses</p>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        </Accordion>
      )
    case 'Camps & Workshops':
      return (
        <div className='course-list-content'>
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
      )
    case 'Most Popular':
      return (
        <div className='course-list-content'>
          <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndustry.
          </p>
          <CommonBtn text={'Explore all'} />
        </div>
      )
    case 'Classes':
      return (
        <div className='course-list-content'>
          <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndustry.
          </p>
          <CommonBtn text={'Explore all'} />
        </div>
      )
    }
  }

  return (
    <div className='course-section'>
      <div className='course-list'>
        <div className='course-title'>
          <h1>{title}</h1>
          {(title === 'Most Popular' || title === 'Classes') && (
            <div className='concave-border'></div>
          )}
        </div>
        {content()}
      </div>
      {showRangeSlider === true && (
        <div className='vertical-scrollbar'>
          <Slider
            min={1}
            max={5}
            orientation='vertical'
            value={customVal}
            onChange={(value) => setCustomVal(value)}
            reverse={true}
          />
        </div>
      )}
      <div className='course-cards'>
        {cardData.map((item, i) => {
          return (
            <CourseCard
              key={i}
              color={color}
              index={i}
              courseTitle={item.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CourseSection
