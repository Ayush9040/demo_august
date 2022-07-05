import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import { useParams } from 'react-router-dom'
// import { courseArray } from '../../../Constants/courses/c200hr'
import { AllCourses, c200hr,c500hr,c900hr,campsArr,classesArr } from '../Constants/courses'
import CourseCard from '../../../Components/CourseCard'
import './style.scss'

const BrowseCourses = () => {
  const { type } = useParams()
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
        [...c200hr,...c500hr,...c900hr]
      )
    } else if (type === 'most-popular') {
      setCategory(AllCourses.filter((item) => item.mostPopular === true))
    } else if (type === 'camps-workshops') {
      setCategory([...campsArr])
    } else {
      setCategory([...classesArr])
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
              <AccordionItemPanel>
                <ul>
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCategory(
                        [...c200hr]
                      )
                    }}
                  >
                    200 Hour Courses{' '}
                  </li>
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCategory(
                        [...c500hr]
                      )
                    }}
                  >
                    500 Hour Courses
                  </li>
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCategory(
                        [...c900hr]
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
          </Accordion>
        </div>
        <div className="course-grid">
          {category?.map((item, i) => (
            <CourseCard
              key={i}
              color={item.colorCode}
              index={i}
              courseTitle={item.title}
              description={item.metaDescription}
              path={item.key}
              img={item.cardImage}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseCourses
