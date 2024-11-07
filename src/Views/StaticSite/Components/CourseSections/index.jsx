import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard'
import './style.scss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Accordian from '../CommanAccordian'
import { Link } from 'react-router-dom'

const CourseSection = ({ title, showRangeSlider, data, pathParam, sliderRange, selectedFilters }) => {

  const [customVal, setCustomVal] = useState(1)

  console.log('Course Clicked Data ', data)
  const [anyFilterActive, setAnyFilterActive] = useState()
  useEffect(() => {
    if (selectedFilters) {
      const activeCoun = Object.values(selectedFilters).some(value => value === true);
      setAnyFilterActive(activeCoun)
    }
  }, [selectedFilters])

  useEffect(() => {
    console.log('loaded2');

  }, [data])
  const shouldDisplayLink = (points) => {// used to display the link in UI
    if (selectedFilters) {
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = selectedFilters;

      if (!anyFilterActive) {
        return true; // Show link if no filters are active
      }

      // Create an array to store conditions for filtering
      const conditions = [];

      if (online) {
        conditions.push(points.online);
      }
      if (onCampus) {
        conditions.push(points.onCampus);
      }
      if (days7) {
        conditions.push(points.days7);
      }
      if (days21) {
        conditions.push(points.days21);
      }
      if (month1) {
        conditions.push(points.month1);
      }
      if (month2) {
        conditions.push(points.month2);
      }
      if (month3) {
        conditions.push(points.month3);
      }
      if (weekends) {
        conditions.push(points.weekends);
      }
      if (weekDays) {
        conditions.push(points.weekDays);
      }

      // Check if all active conditions are met
      return conditions.length > 0 && conditions.every(Boolean);
    }

    return false; // In case selectedFilters is undefined
  };

  const shouldDisplayCard = (points) => {// used to display the card in UI
    if (selectedFilters) {
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = selectedFilters;

      if (!anyFilterActive) {
        return true; // Show link if no filters are active
      }

      // Create an array to store conditions for filtering
      const conditions = [];

      if (online) {
        conditions.push(points.online);
      }
      if (onCampus && (points?.residential || points?.nonResidential)) {
        conditions.push(true);
      }
      // if ((month1 && points?.tenure == '1 month') || month2 && points?.tenure == '2 month' || month3 && points?.tenure == '3 month') {
      //   conditions.push(true);
      // }
      if (days7) {
        conditions.push(points?.tenure == '7 days');
      }
      if (days21) {
        conditions.push(points?.tenure == '21 days');
      }
      if (month1) {
        conditions.push(points?.tenure == '1 month');
      }
      if (month2) {
        conditions.push(points?.tenure == '2 month');
      }
      if (month3) {
        conditions.push(points?.tenure == '3 month');
      }
      if (weekends) {
        conditions.push(points.weekends);
      }
      if (weekDays) {
        conditions.push(points.weekDays);
      }

      // Check if all active conditions are met
      return conditions.length > 0 && conditions.every(Boolean);
    }

    return false; // In case selectedFilters is undefined
  };
  const content = () => {

    const coursesList = [
      {
        id: 1,
        ques: '200 hours YTTC (Basic)',
        ans: [
          {
            url: '/one-month-ttc',
            text: ' 1 Month YTTC Online & On Campus - English - Batch 1 ',
            online: true, onCampus: true, month1: true, weekDays: true,
          },
          {
            url: '/200-hrs-part-time-ttc-on-campus-english',
            text: '2 Months YTTC Online & On Campus – English - Batch 2',
            online: true, onCampus: true, month2: true, weekDays: true,
          },
          {
            url: '/200-hrs-part-time-ttc-online-english',
            text: '2 Months YTTC Online – English - Batch 3 ',
            online: true, month2: true, weekDays: true,
          },
          {
            url: '/200-hrs-part-time-ttc-online',
            text: '2 Months YTTC Online – Hindi - Batch 4 ',
            online: true, month2: true, weekDays: true,
          },
          {
            url: '/weekend-teacher-training-course',
            text: '3 Months Weekend YTTC Online – English - Batch 5',
            online: true, month3: true, weekends: true,
          },
          {
            url: '/200-hrs-part-time-ttc-online-english-batch-6',
            text: '2 Months YTTC Online – English - Batch 6',
            online: true, month2: true, weekDays: true,
          },
          // {
          //   url: '/200-Hours',
          //   text: 'View more about 200 hours TTC (Basic)',
          // },
          // /200-hrs-part-time-ttc-online-english-batch-5
        ],
      },
      {
        id: 2,
        ques: '500 Hours YTTC (Intermediate)',
        ans: [
          {
            url: '/500-hrs-online-yoga-teacher-training-course-intermediate-level',
            text: ' 3 Months YTTC - Online - English',
            online: true, month3: true, weekDays: true,
          },
        ],
      },
      {
        id: 3,
        ques: '900 Hours YTTC (Advanced)',
        ans: [
          {
            url: '/3-months-advanced-teacher-training-course',
            text: '3 Months YTTC-On Campus-English',
            onCampus: true, month3: true, weekDays: true,
          },
          {
            url: '/900-hours-advanced-teacher-training-course',
            text: '4 Months YTTC-Online-English',
            online: true, weekDays: true,
          },
          {
            url: '/seven-month-ttc',
            text: '7 Months YTTC-Online & On Campus-English',
            onCampus: true, online: true, weekDays: true,
          },
          { url: '/one-year-ttc', text: '1 Year YTTC-Online & On Campus-Hindi', onCampus: true, online: true, weekDays: true, },
          {
            url: '/two-year-ttc',
            text: '2 Years YTTC-Online & On Campus-English',
            onCampus: true, online: true, weekDays: true,
          },
        ],
      },
    ]

    const campsAccordian = [
      {
        id: 1,
        ques: '21 Days Better Living Course',
        ans: [
          {
            url: '/21-days-better-living-course',
            text: 'Morning On Campus – English - Batch 1',
            onCampus: true, weekDays: true, days21: true
          },
          {
            url: '/21-days-better-living-course-batch-2',
            text: 'Evening - Online & On Campus – English - Batch 2',
            onCampus: true, online: true, weekDays: true, days21: true
          },
          {
            url: '/21-days-better-living-course-batch-3',
            text: 'Evening - Online & On Campus – Hindi - Batch 3',
            onCampus: true, online: true, weekDays: true, days21: true
          },
          // {
          //   url: '/21-days-better-living-course-batch-4',
          //   text: 'Morning - Online – English - Batch 4',
          // },
        ],
      },
      {
        id: 2,
        ques: '7 Days Health Camp',
        ans: [
          {
            url: '/7-days-camp',
            text: '7 Days Health Camp - On Campus - Hindi',
            onCampus: true, weekDays: true, days7: true
          },
          {
            url: '/7-days-camp-english',
            text: '7 Days Health Camp - On Campus - English',
            onCampus: true, weekDays: true, days7: true
          },
        ],
      },
    ]
    const yttcStatic = [
      {
        url: '/certificate-yoga-therapy-course-online',
        text: 'Certificate Yoga Therapy Course - Online & On Campus',
        onCampus: true, online: true, weekDays: true
      },
      {
        url: '/certificate-program-on-yoga-for-cancer',
        text: 'Certificate Program on Yoga for Cancer – Online & On Campus',
        onCampus: true, online: true, weekDays: true
      },
      {
        url: '/certification-program-on-yoga-for-lung-cancer-online',
        text: 'Certificate Program on Yoga for Lung Cancer - Online',
        online: true, weekDays: true
      },
      {
        url: '/certificate-course-on-advanced-pranayama-techniques',
        text: 'Certificate Course on Advanced Pranayama Techniques - Online',
        online: true, weekDays: true
      }
    ]

    const regularCourseStatic = [{
      url: '/asana-regular-classes-on-campus',
      text: 'Asana Regular Classes for Men On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/asana-regular-classes-on-campus-women',
      text: 'Asana Regular Classes for Women On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/asana-regular-classes-online',
      text: 'Asana Regular Classes (Men & Women) - Online',
      online: true, weekDays: true
    },
    {
      url: '/weekend-classes',
      text: 'Weekend Asana Classes - (Men & Women) On Campus',
      onCampus: true, weekends: true
    },
    {
      url: '/weekend-classes-online',
      text: 'Weekend Asana Classes - (Men & Women) Online',
      online: true, weekends: true
    },
    {
      url: '/childrens-regular-classes',
      text: "Children's Regular Class - On Campus",
      onCampus: true, weekDays: true
    },
    {
      url: '/childrens-weekend-classes-on-campus',
      text: "Children's Weekend Class - On Campus",
      onCampus: true, weekends: true
    },
    {
      url: '/advanced-regular-yoga-classes',
      text: ' Advance Asana Regular Class - Online (Only for TYI Teachers) ',
      online: true, weekDays: true
    },
    {
      url: '/regular-pregnacy-classes',
      text: 'Regular Pregnancy Class',
      onCampus: true, online: true, weekDays: true
    },
    {
      url: '/IBY-course',
      text: 'IBY classes - On Campus & Online',
      onCampus: true, online: true, weekDays: true
    }]

    const campsWroskshopStatic = [{
      url: '/corporate-workshops',
      text: 'Corporate Workshop - On Campus',
      onCampus: true
    },
    {
      url: '/satsang',
      text: 'Satsang - On Campus',
      onCampus: true, weekends: true
    },
    {
      url: '/samattvam',
      text: 'Samattvam(Health Checkup) - On Campus',
      onCampus: true, weekends: true
    },
    {
      url: '/couples-classes',
      text: "Couple's classes - Online",
      online: true, weekends: true
    },
    {
      url: '/home-tuitions',
      text: 'Home Tuitions',
      online: true, weekDays: true
    },
    {
      url: '/stress-management-camp',
      text: 'Stress Management Camp - On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/weight-management-workshop',
      text: 'Weight Management Workshop - On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/pregnancy-camp-for-ante-post-natal',
      text: 'Pregnancy Camp for Ante & Post Natal - On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/cardiac-hypertension-workshop',
      text: 'Cardiac & Hypertension Workshop - On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/back-joint-disorder-workshop',
      text: 'Back & Joint Disorder Workshop - On Campus',
      onCampus: true, weekDays: true
    },
    {
      url: '/pranayama-workshop',
      text: 'Pranayama Workshop',
      onCampus: true, online: true, weekDays: true
    }]

    const mostPopularStatic = [{
      url: '/7-days-camp-english',
      text: '7 Days Health Camp',
      onCampus: true, weekDays: true, days7: true
    },
    {
      url: '/21-days-better-living-course',
      text: '21 Days Better Living Course',
      onCampus: true, weekDays: true, days21: true
    },
    {
      url: '/one-month-ttc',
      text: '200 Hours 1 Month YTTC Basic Course',
      onCampus: true, online: true, month1: true, weekDays: true
    },
    {
      url: '/seven-month-ttc',
      text: "900 Hours 3 Months YTTC Advanced Course",
      onCampus: true, online: true, month3: true, weekDays: true
    },
    {
      url: '/pregnancy-camp-for-ante-post-natal',
      text: 'Pregnancy Camp',
      onCampus: true, weekDays: true
    }]

    switch (title) {
      case 'Yoga Teacher Training Courses (YTTC)':
        return (
          <>
            <Accordian sliderVal={customVal} setSliderVal={setCustomVal} data={coursesList} selectedFilters={selectedFilters} />
          </>
        )
      case 'Certified Yoga Courses':
        return (
          <div className="camp_course-list-content">
            <br />
            <Accordian sliderVal={customVal} setSliderVal={setCustomVal} data={campsAccordian} selectedFilters={selectedFilters} /></div>
        )
      case 'Regular Classes':
        return (
          <div className="course-list-content">
            <div>
              <h4>
                <ul>
                  {regularCourseStatic.map((item, i) => (
                    shouldDisplayLink(item) && (
                      <div key={i}>
                        <Link to={item.url}>
                          <li className="text-bold">
                            {item.text}
                          </li>
                        </Link></div>))
                  )}
                  {/* <Link to="/asana-regular-classes-on-campus">
                    <li>Asana Regular Classes for Men On Campus</li>
                  </Link>
                  <Link to="/asana-regular-classes-on-campus-women">
                    <li>Asana Regular Classes for Women On Campus</li>
                  </Link>
                  <Link to="/asana-regular-classes-online">
                    <li>Asana Regular Classes (Men & Women) - Online</li>
                  </Link>
                  <Link to="/weekend-classes">
                    <li>Weekend Asana Classes - (Men & Women) On Campus</li>
                  </Link>
                  <Link to="/weekend-classes-online">
                    <li>Weekend Asana Classes - (Men & Women) Online</li>
                  </Link>
                  <Link to="/childrens-regular-classes">
                    <li>Children&apos;s Regular Class - On Campus</li>
                  </Link>
                  <Link to="/childrens-weekend-classes-on-campus">
                    <li>Children&apos;s Weekend Class - On Campus </li>
                  </Link>
                  <Link to="/advanced-regular-yoga-classes">
                    <li>
                      Advance Asana Regular Class - Online (Only for TYI
                      Teachers)
                    </li>
                  </Link>
                  <Link to="/regular-pregnacy-classes">
                    <li>Regular Pregnancy Class</li>
                  </Link>
                  <Link to="/IBY-course">
                    <li>IBY classes - On Campus & Online</li>
                  </Link> */}
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
          <div className="camp_course-list-content">
            <br />
            {/* <Accordian sliderVal={customVal} setSliderVal={setCustomVal} data={campsAccordian} selectedFilters={selectedFilters} /> */}
            <div>
              <h4>
                <ul id='camps-workshop' >
                  {campsWroskshopStatic.map((item, i) => (
                    shouldDisplayLink(item) && (
                      <div key={i}>
                        <Link to={item.url}>
                          <li className="text-bold">
                            {item.text}
                          </li>
                        </Link></div>))
                  )}
                  {/* <Link to="/corporate-workshops">
                    <li>Corporate Workshop - On Campus</li>
                  </Link>
                  <Link to="/satsang">
                    <li>Satsang - On Campus</li>
                  </Link>
                  <Link to="/samattvam">
                    <li>Samattvam(Health Checkup) - On Campus</li>
                  </Link>
                  <Link to="/couples-classes">
                    <li>Couple&apos;s classes - Online</li>
                  </Link>
                  <Link to="/home-tuitions">
                    <li>Home Tuitions</li>
                  </Link>
                  <Link to="/stress-management-camp">
                    <li>Stress Management Camp - On Campus</li>
                  </Link>
                  <Link to="/weight-management-workshop">
                    <li>Weight Management Workshop - On Campus</li>
                  </Link>
                  <Link to="/pregnancy-camp-for-ante-post-natal">
                    <li>Pregnancy Camp for Ante & Post Natal - On Campus</li>
                  </Link>
                  <Link to="/cardiac-hypertension-workshop">
                    <li>Cardiac & Hypertension Workshop - On Campus</li>
                  </Link>
                  <Link to="/back-joint-disorder-workshop">
                    <li>Back & Joint Disorder Workshop - On Campus</li>
                  </Link>
                  <Link to="/pranayama-workshop">
                    <li>Pranayama Workshop</li>
                  </Link> */}


                  {/* <Link to="/kids-camp">
                  <li>Kids Yoga Summer Camp (On-Campus)</li>
                </Link> */}
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
                  {mostPopularStatic.map((item, i) => (
                    shouldDisplayLink(item) && (
                      <div key={i}>
                        <Link to={item.url}>
                          <li className="text-bold">
                            {item.text}
                          </li>
                        </Link></div>))
                  )}
                  {/* <Link to="/7-days-camp-english">
                    <li>7 Days Health Camp</li>
                  </Link>
                  <Link to="/21-days-better-living-course">
                    <li>21 Days Better Living Course</li>
                  </Link>
                  <Link to="/one-month-ttc">
                    <li>200 Hour 1 Month BTTC Course</li>
                  </Link>
                  <Link to="/seven-month-ttc">
                    <li>900 Hour 3 Month ATTC Course</li>
                  </Link>
                  <Link to="/pregnancy-camp-for-ante-post-natal">
                    <li> Pregnancy Camp</li>
                  </Link> */}
                </ul>
              </h4>
            </div>
            {/* <Link to="/courses/browse/most-popular">
            <CommonBtn text={'Explore all'} />
          </Link> */}
          </div>
        )
      case 'Special Certificate Courses (For Yoga Teachers)':
        return (
          <>
            <div style={{ marginTop: '40px' }}>

              <ul id='therapy-course' >
                {yttcStatic.map((item, i) => (
                  shouldDisplayLink(item) && (
                    <div key={i}>
                      <Link to={item.url}>
                        <li className="text-bold">
                          {item.text}
                        </li>
                      </Link></div>))
                )}

              </ul></div>

          </>
        )
    }

  }

  const selectColor = (i) => {
    if (i === 0) { return '#94B1B2' }
    else if (i === 1) { return '#7C999B' }
    else { return '#6E9596' }
  }

  return (
    <div className="course-section">

      <div className="course-list">
        <div className="course-title">
          <Link to={`/courses/browse/${pathParam}`}>
            <h1 style={{ fontSize: '2.6rem' }}>{title} </h1>
          </Link>
        </div>
        {content()}
      </div>

      {showRangeSlider && showRangeSlider === true && (
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

        {
          title === 'Most Popular' ?

            data
              .filter((item) => item.mostPopular === true).map((item, i) => {
                {console.log(item);
                }
                if (
                  item.key === '500-hrs-online-yoga-teacher-training-course-intermediate-level' ||
                  item.key === 'weekend-teacher-training-course' ||
                  item.key === 'nutri-diet'
                ) {
                  return (
                    // shouldDisplayCard(item) && (
                    <CourseCard
                      key={i}
                      color={selectColor(i)}
                      index={i}
                      courseTitle={item.title}
                      pageName={item.key}
                      tenure={item.tenure}
                      courseCategory={item.courseCategory}
                      courseSubType={item.courseSubType}
                      onlineMode={item?.onlineInfo?.courseMode}
                      residentialMode={item?.residentialInfo?.courseMode}
                      nonResidentialMode={item?.nonResidentialInfo?.courseMode}
                      residentialLocation={item?.residentialInfo?.residentialMode}
                      nonResidentialLocation={item?.nonResidentialInfo?.nonResidentialMode}
                      courseType={item?.courseType}
                      language={item?.language}
                      description={item.metaDescription}
                      path={item.key}
                      img={item.cardImage}
                      rating={item.rating}
                      dates={item.dates}
                    />)
                  // )
                }
                return
              })
            :
            data.map((item, i) => {
              // if (i < 3) {
              return (
                shouldDisplayCard(item) && (
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
                />)
              )
              // }
              // return
            })
        }
      </div>
    </div>
  )
}

export default CourseSection
