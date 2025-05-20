import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
      if (location.search == '?type=200') {
        setCategory([...c200hr])
        setBreadcrumbs('200 hours YTTC (Basic)')
      }
      else if (location.search == '?type=500') {
        setCategory([...c500hr])
        setBreadcrumbs('500 hours YTTC (Intermediate)')
      }
      else if (location.search == '?type=900') {
        setCategory([...c900hr])
        setBreadcrumbs('900 hours YTTC (Advanced)')
      }
    } else if (type === 'most-popular') {
      setCategory([campsArr[8], campsArr[9], campsArr[10], campsArr[11], campsArr[12], classesArr[10]])
      setBreadcrumbs('Most Popular Yoga Courses')
    } else if (type === 'camps-workshops') {
      setCategory([...campsArr])
      setBreadcrumbs('Camps & Workshops')
    } else if (type === 'classes') {
      setCategory([classesArr[2], classesArr[3], classesArr[1], classesArr[9], classesArr[12], classesArr[4],
        classesArr[5], classesArr[0], classesArr[6], classesArr[7], classesArr[11], classesArr[13],
        classesArr[15]])
      setBreadcrumbs('Regular Yoga Classes')
    } else if (type === 'certificate-courses') {
      setCategory([...certificateArr])
      setBreadcrumbs('Certified Yoga Courses')
    } else if (type === 'special-certificate-courses') {
      setCategory([certificateArr[3], certificateArr[1], certificateArr[0]])
      setBreadcrumbs('Special Certificate Courses (For Yoga Teachers)')
    } else if (type === 'additional-certificates') {
      setCategory([certificateArr[3], certificateArr[2], certificateArr[1], certificateArr[0], classesArr[14], classesArr[16]])
      setBreadcrumbs('Additional Certificate Courses')
    } else if (type === 'personal-development-programs') {
      setCategory([certificateArr[5], certificateArr[6], certificateArr[7], certificateArr[8], certificateArr[9]])
      setBreadcrumbs('Yoga - Continuing Personal Development')
    }
    return breadcrumbs
  }

  // certificateArr[4], certificateArr[2], certificateArr[1], certificateArr[0], classesArr[21], classesArr[23]

  const location = useLocation();
  useEffect(() => {
    if (type === 'ttc') {
      //to set data
      if (location.search == '?type=200') {
        setCategory([...c200hr])
      }
      else if (location.search == '?type=500') {
        setCategory([...c500hr])
      }
      else if (location.search == '?type=900') {
        setCategory([...c900hr])
      }
      // else {
      //   setCategory([...c200hr])
      //   // setCategory([...c200hr, ...c500hr, ...c900hr])
      // }
    } else if (type === 'most-popular') {
      setCategory(AllCourses.filter((item) => item.mostPopular === true))
    } else if (type === 'camps-workshops') {
      setCategory([...campsArr])
    } else if (type === 'classes') {
      setCategory([...classesArr])
    } else {
      setCategory([certificateArr[3], certificateArr[1], certificateArr[0]])
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
            {/* <Accordion allowZeroExpanded>
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
            </Accordion> */}
            <Accordion allowZeroExpanded>
              


              <AccordionItem style={{
                border: breadcrumbs == '200 hours YTTC (Basic)' && '2px solid #CA4625',
                borderRadius: breadcrumbs == '200 hours YTTC (Basic)' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc">
                      <p onClick={() => {
                        setBreadcrumbs('200 hours YTTC (Basic)'), setCategory([...c200hr])
                      }}>200 Hours YTTC (Basic)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              <AccordionItem style={{
                border: breadcrumbs == '500 hours YTTC (Intermediate)' && '2px solid #CA4625',
                borderRadius: breadcrumbs == '500 hours YTTC (Intermediate)' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc">
                      <p onClick={() => {
                        setBreadcrumbs('500 hours YTTC (Intermediate)'), setCategory([...c500hr])
                      }}>500 Hours YTTC (Intermediate)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem style={{
                border: breadcrumbs == '900 hours YTTC (Advanced)' && '2px solid #CA4625',
                borderRadius: breadcrumbs == '900 hours YTTC (Advanced)' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc">
                      <p onClick={() => {
                        setBreadcrumbs('900 hours YTTC (Advanced)'), setCategory([...c900hr])
                      }}>900 Hours YTTC (Advanced)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              <AccordionItem
                style={{
                  border: breadcrumbs == 'Additional Certificate Courses' && '2px solid #CA4625',
                  borderRadius: breadcrumbs == 'Additional Certificate Courses' && '8px'
                }}
              >
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/additional-certificates">
                      <p>Additional Certificates</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              {/* <AccordionItem style={{
                border: breadcrumbs == 'Certified Yoga Courses' && '2px solid #CA4625',
                borderRadius: breadcrumbs == 'Certified Yoga Courses' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/certificate-courses">
                      <p>Certified Yoga Courses</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem> */}
              <AccordionItem style={{
                border: breadcrumbs == 'Regular Yoga Classes' && '2px solid #CA4625',
                borderRadius: breadcrumbs == 'Regular Yoga Classes' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/classes">
                      <p>Regular Yoga Classes</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              <AccordionItem style={{
                border: breadcrumbs == 'Most Popular Yoga Courses' && '2px solid #CA4625',
                borderRadius: breadcrumbs == 'Most Popular Yoga Courses' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/most-popular">
                      <p> Most Popular Yoga Courses</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>



              <AccordionItem style={{
                border: breadcrumbs == 'Camps & Workshops' && '2px solid #CA4625',
                borderRadius: breadcrumbs == 'Camps & Workshops' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/camps-workshops">
                      <p>Camps & Workshop</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              <AccordionItem style={{
                border: breadcrumbs == 'Yoga - Continuing Personal Development' && '2px solid #CA4625',
                borderRadius: breadcrumbs == 'Yoga - Continuing Personal Development' && '8px'
              }}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/personal-development-programs">
                      <p>Yoga - Continuing Personal Development</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              {/* <AccordionItem
                style={{
                  border: breadcrumbs == 'Special Certificate Courses (For Yoga Teachers)' && '2px solid #CA4625',
                  borderRadius: breadcrumbs == 'Special Certificate Courses (For Yoga Teachers)' && '8px'
                }}
              >
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/special-certificate-courses">
                      <p>Special Certificate Courses (For Yoga Teachers)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem> */}

              
            </Accordion>
          </div>
          <div className="course-grid">
            {category?.slice(0, 50).map((item, i) => (

              item.title &&
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
                tenure={item?.tenure}
                pageName={item?.key}
                courseCategory={item?.courseCategory}
                courseSubType={item?.courseSubType}
                onlineMode={item?.onlineInfo?.courseMode}
                residentialMode={item?.residentialInfo?.courseMode}
                nonResidentialMode={item?.nonResidentialInfo?.courseMode}
                residentialLocation={item?.residentialInfo?.residentialMode}
                nonResidentialLocation={item?.nonResidentialInfo?.nonResidentialMode}
                courseType={item?.courseType}
                language={item?.language}
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
