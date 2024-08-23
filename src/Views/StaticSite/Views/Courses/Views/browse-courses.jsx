import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useParams } from 'react-router-dom'
// import { courseArray } from '../../../Constants/courses/c200hr'
import {
  AllCourses,
  c200hr,
  c500hr,
  c900hr,
  campsArr,
  certificateArr,
  classesArr,
} from '../Constants/courses'
import CourseCard from '../../../Components/CourseCard'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import './style.scss'

const BrowseCourses = () => {
  const browseCourse = {
    title: 'browse-course',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

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
    } else if (type === 'certificate-course') {
      setBreadcrumbs('Certificate Courses')
    }
    return breadcrumbs
  }
  useEffect(() => {
    if (type === 'ttc') {
      setCategory([...c200hr, ...c500hr, ...c900hr])
    } else if (type === 'most-popular') {
      setCategory(AllCourses.filter((item) => item.mostPopular === true))
    } else if (type === 'camps-workshops') {
      setCategory([...campsArr])
    } else if (type === 'classes') {
      setCategory([...classesArr])
    } else {
      setCategory([...certificateArr])
    }
    ChangeContent()
  }, [type])

  return (
    <>
      {metaDataObj['/courses'] && (
        <Helmet title={metaDataObj['/courses']?.title} />
      )}
      <div className="browse-courses">
        <InnerNavComponent abc={browseCourse} />
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
                        setCategory([...c200hr])
                      }}
                    >
                      200 Hour Courses{' '}
                    </li>
                    <li
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setCategory([...c500hr])
                      }}
                    >
                      500 Hour Courses
                    </li>
                    <li
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setCategory([...c900hr])
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
          </div>
          <div className="course-grid">
            {category?.slice(0, 5).map((item, i) => (
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
                fees={item?.fees}
                timing={item?.timing}
                category={item?.category}
                batch={item?.batch}
                nonResidential={item?.nonResidential}
                    residential={item?.residential}
                    online={item?.online}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BrowseCourses
