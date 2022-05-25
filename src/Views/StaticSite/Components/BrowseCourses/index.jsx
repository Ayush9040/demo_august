import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import { useParams } from 'react-router-dom'
import { courseArray } from '../../Constants/courses/c200hr'
import CourseCard from '../CourseCard'
import './style.scss'

const BrowseCourses = () => {
  const { type } = useParams()
  console.log(type, 'type')
  const [category, setCategory] = useState()
  useEffect(() => {
    if (type === 'ttc') {
      setCategory(
        courseArray.filter(
          (item) => item.key === 'c200Hr' || item.key === 'c900Hr'
        )
      )
    } else if (type === 'most-popular') {
      setCategory(courseArray.filter((item) => item.mostPopular === true))
    } else if (type === 'camps-workshops') {
      setCategory(courseArray.filter((item) => item.key === 'CAMPS'))
    } else {
      setCategory(courseArray.filter((item) => item.key === type))
    }
  }, [])

  return (
    <div className='browse-courses'>
      <CommonBannerNavPrimary />
      <div className='breadcrumbs'>
        <p>Browse &gt; Teachers Training Course</p>
      </div>
      <div className='popular-courses'>
        <div className='course-accordian'>
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
                  <p>Camps & Workshops</p>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Classes</p>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='course-grid'>
          {category?.map((item, i) => (
            <CourseCard
              key={i}
              color={item.colorCode}
              index={i}
              courseTitle={item.name}
              description={item.deatils}
              path={item.id}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseCourses
