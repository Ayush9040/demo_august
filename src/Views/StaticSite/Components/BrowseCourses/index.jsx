import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import CourseCard from '../CourseCard'
import './style.scss'

const BrowseCourses = () => {
  return (
    <div className="browse-courses">
      <CommonBannerNavPrimary/>
      <div className="breadcrumbs">
        <p>Browse &gt; Teachers Training Course</p>
      </div>
      <div className="popular-courses">
        <div className="course-accordian">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Most Popular</p>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Teachers Training Course</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ul>
                  <li>200 Hour Courses</li>
                  <li>500 Hour Courses</li>
                  <li>900 Hour Courses</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Camps</p>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Workshops</p>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Other Classes</p>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="course-grid">
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
          <CourseCard
            color={'#cd4576'}
            index={'1'}
            courseTitle={'Course Name'}
          />
        </div>
        <div className='course-grid' >
          
        </div>
      </div>
    </div>
  )
}

export default BrowseCourses
