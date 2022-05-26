import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [breadcrumbs, setBreadcrumbs] = useState()
  const ChangeContent = () => {
    if (type === 'ttc') {
      setBreadcrumbs('Teacher Training Course')
    } else if (type === 'most-popular') {
      setBreadcrumbs('Most Popular')
    } else if (type === 'camps-workshops') {
      setBreadcrumbs('Camps & Workshops')
    } else if (type === 'classes') {
      setBreadcrumbs('Classes')
    }
    return breadcrumbs

  }
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
    ChangeContent()
  }, [type])

  console.log(category, 'category')

  return (
    <div className="browse-courses">
      <CommonBannerNavPrimary />
      <div className="breadcrumbs">
        <p>Browse &gt; {breadcrumbs}</p>
      </div>
      <div className="popular-courses">
        <div className="course-accordian">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Link to="/courses/browse/most-popular">
                    <p> Most Popular Course </p>
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Link to="/courses/browse/ttc">
                    <p>Teachers Training Course</p>
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ul>
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCategory(
                        courseArray.filter((item) => item.key === 'c200Hr')
                      )
                    }}
                  >
                    200 Hour Courses{' '}
                  </li>
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCategory(
                        courseArray.filter((item) => item.key === 'c500Hr')
                      )
                    }}
                  >
                    500 Hour Courses
                  </li>
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCategory(
                        courseArray.filter((item) => item.key === 'c900Hr')
                      )
                    }}
                  >
                    900 Hour Courses
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Link to="/courses/browse/camps-workshops">
                    <p>Camps & Workshops</p>
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Link to="/courses/browse/classes">
                    <p>Classes</p>
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="course-grid">
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
