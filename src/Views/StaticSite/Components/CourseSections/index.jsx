import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard'
import './style.scss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Accordian from '../CommanAccordian'
import { Link } from 'react-router-dom'
import SliderCourses from './SliderCourses'

const CourseSection = ({ title, showRangeSlider, data, pathParam, sliderRange, selectedFilters }) => {

  const [customVal, setCustomVal] = useState(1)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log('Course Clicked Data ', data)
  const [anyFilterActive, setAnyFilterActive] = useState()
  useEffect(() => {
    if (selectedFilters) {
      const activeCoun = Object.values(selectedFilters).some(value => value === true);
      setAnyFilterActive(activeCoun)
    }
  }, [selectedFilters])

  useEffect(() => {
    console.log('loaded2', data);

  }, [data])
  useEffect(() => {
    // Check if there is a hash in the URL
    const hash = window.location.hash;

    // If there's a hash and it matches a section, scroll to it
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);

        // Check if the screen width is smaller than or equal to 768px (considered mobile)
        const isMobile = window.innerWidth <= 768;

        // Depending on the screen size, scroll to different divs
        if (isMobile) {
          // Scroll to mobile-specific div
          const mobileDiv = document.querySelector('#mobileDiv'); // Replace with actual mobile div ID
          if (mobileDiv) {
            mobileDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // Scroll to desktop-specific div
          const desktopDiv = document.querySelector('#desktopDiv'); // Replace with actual desktop div ID
          if (desktopDiv) {
            desktopDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);

    }
  }, []);
  const shouldDisplayLink = (points) => {// used to display the link in UI
    if (selectedFilters) {
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays, year1, year2, month7, month4, days1, days2 } = selectedFilters;

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
      // if (days7 && points.days7) {
      //   conditions.push(points.days7);
      // }
      // if (days21 && points.days21) {
      //   conditions.push(points.days21);
      // }
      // if (month1 && points.month1) {
      //   conditions.push(points.month1);
      // }
      // if (month2 && points.month2) {
      //   conditions.push(points.month2);
      // }
      // if (month3 && points.month3) {
      //   conditions.push(points.month3);
      // }

      if (days7 || days21 || month1 || month2 || month3 || year1 || year2 || month7 || month4 || days1 || days2) {
        if ((days7 && points.days7) || (days21 && points.days21) ||
          (month1 && points.month1) || (month2 && points.month2) || (month3 && points.month3) || (year1 && points.year1)
          || (year2 && points.year2) || (month7 && points.month7) || (month4 && points.month4) || (days1 && points.days1) || (days2 && points.days2) || points?.isRegular) {
          conditions.push(true);
        }
        else {
          conditions.push(false)
        }
      }
      if (weekends) {
        conditions.push(points.weekends);
      }
      if (weekDays) {
        conditions.push(points.weekDays);
      }
      console.log(conditions);

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
            url: '/200-hrs-part-time-ttc-online-batch-6',
            text: '3 Months YTTC Online – English - Batch 6',
            online: true, month2: true, weekDays: true,
          },
          {
            url: '/courses/browse/ttc?type=200',//200-Hours
            text: 'View all 200 hours YTTC (Basic)',
          },
          // {
          //   url: '/200-allcourses',//200-Hours
          //   text: 'View all',
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
          {
            url: '/courses/browse/ttc?type=500',
            text: 'View all 500 Hours YTTC (Intermediate)',
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
            online: true, weekDays: true, month4: true
          },
          {
            url: '/seven-month-ttc',
            text: '7 Months YTTC-Online & On Campus-English',
            onCampus: true, online: true, weekDays: true, month7: true
          },
          { url: '/one-year-ttc', text: '1 Year YTTC-Online & On Campus-Hindi', onCampus: true, online: true, weekDays: true, year1: true },
          {
            url: '/two-year-ttc',
            text: '2 Years YTTC-Online & On Campus-English',
            onCampus: true, online: true, weekDays: true, year2: true
          },
          {
            url: '/courses/browse/ttc?type=900',
            text: 'View all 900 Hours YTTC (Advanced)',
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
            text: 'Morning Online & On Campus – English - Batch 1',
            onCampus: true, weekDays: true, days21: true, online: true,
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
        onCampus: true, online: true, weekDays: true, days2: true
      },
      {
        url: '/certification-program-on-yoga-for-lung-cancer-online',
        text: 'Certificate Program on Yoga for Lung Cancer - Online',
        online: true, weekDays: true, days2: true
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
      onCampus: true, weekDays: true, isRegular: true
    },
    {
      url: '/asana-regular-classes-on-campus-women',
      text: 'Asana Regular Classes for Women On Campus',
      onCampus: true, weekDays: true, isRegular: true
    },
    {
      url: '/asana-regular-classes-online',
      text: 'Asana Regular Classes (Men & Women) - Online',
      online: true, weekDays: true, isRegular: true
    },
    {
      url: '/weekend-classes',
      text: 'Weekend Asana Classes - (Men & Women) On Campus',
      onCampus: true, weekends: true, isRegular: true
    },
    {
      url: '/weekend-classes-online',
      text: 'Weekend Asana Classes - (Men & Women) Online',
      online: true, weekends: true, isRegular: true
    },
    {
      url: '/childrens-regular-classes',
      text: "Children's Regular Class - On Campus",
      onCampus: true, weekDays: true, isRegular: true
    },
    {
      url: '/childrens-weekend-classes-on-campus',
      text: "Children's Weekend Class - On Campus",
      onCampus: true, weekends: true, isRegular: true, days2: true
    },
    {
      url: '/advanced-regular-yoga-classes',
      text: ' Advance Asana Regular Class - Online (Only for TYI Teachers) ',
      online: true, weekDays: true, isRegular: true
    },
    {
      url: '/regular-pregnacy-classes',
      text: 'Regular Pregnancy Class',
      onCampus: true, online: true, weekDays: true, isRegular: true
    },
    {
      url: '/department-of-rehabilitation-and-physiotherapy',
      text: 'Department of Rehabilitation and Physiotherapy',
      onCampus: true, online: true, weekDays: true, isRegular: true
    },
    {
      url: '/iby-course',
      text: 'IBY classes - On Campus & Online',
      onCampus: true, online: true, weekDays: true, isRegular: true
    },
    {
      url: '/meditation-foundation-course-online',
      text: 'Online Meditation Course (Foundation Course)',
      onCampus: false, online: true, weekDays: true, isRegular: true
    },
    {
      url: '/regular-meditation-classes-online',
      text: 'Regular Online Meditation Classes',
      onCampus: false, online: true, weekDays: true, weekends: true, isRegular: true
    },
    {
      url: '/couples-classes',
      text: 'Couples Classes - Online',
      onCampus: false, online: true, weekDays: false, weekends: true, isRegular: true
    },
    // {
    //   url: '/home-tuitions',
    //   text:'ONLINE HOME TUITIONS (YOGA TUITIONS)',
    //   onCampus: false, online: true, weekDays: true, weekends: true, isRegular: true
    // }
  ]

    const campsWroskshopStatic = [{
      url: '/corporate-workshops',
      text: 'Corporate Workshop - On Campus',
      onCampus: true
    },

    // {
    //   url: '/couples-classes',
    //   text: "Couple's classes - Online",
    //   online: true, weekends: true, days1: true
    // },
    // {
    //   url: '/home-tuitions',
    //   text: 'Home Tuitions',
    //   online: true, weekDays: true
    // },
    {
      url: '/stress-management-camp',
      text: 'Stress Management Camp - Online & On Campus',
      onCampus: true, weekDays: true, days1: true, online: true
    },
    {
      url: '/weight-management-workshop',
      text: 'Weight Loss Workshop - Online & On Campus',
      onCampus: true, weekDays: true, days1: true, online: true
    },
    {
      url: '/pregnancy-camp-for-ante-post-natal',
      text: 'Pregnancy Camp for Ante & Post Natal - Online & On Campus',
      onCampus: true, weekDays: true, days2: true, online: true
    },
    {
      url: '/cardiac-hypertension-workshop',
      text: 'Cardiac & Hypertension Workshop - Online & On Campus',
      onCampus: true, weekDays: true, days1: true, online: true
    },
    {
      url: '/back-joint-disorder-workshop',
      text: 'Back & Joint Disorder Workshop - Online & On Campus',
      onCampus: true, weekDays: true, days1: true, online: true
    },
    {
      url: '/pranayama-workshop',
      text: 'Pranayama Workshop - Online & On Campus',
      onCampus: true, online: true, weekDays: true, days1: true
    },
    {
      url: '/deep-sleep-workshop',
      text: 'Deep Sleep Workshop - Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/emotional-wellness-workshop',
      text: 'Emotional Wellness Workshop Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/gut-health-workshop',
      text: 'Gut Health Workshop Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/healthy-sattvik-cooking-workshop',
      text: 'Healthy & Sattvik Cooking Workshop Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/menopause-wellness-workshop',
      text: 'Menopause Wellness Workshop Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/pcod-pcos-wellness-workshop',
      text: 'PCOD & PCOS Wellness Workshop Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/total-body-detox-workshop',
      text: 'Total Body Detox Workshop Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    },
    {
      url: '/diabetes-camp',
      text: 'Diabetes Yoga Camp - Online & On Campus',
      onCampus: true, weekDays: false, weekends: true, days1: true, online: true
    }
  ]

    const mostPopularStatic = [
      {
      // url: '/7-days-camp-english',
      title: '7 Days Health Camp',
      onCampus: true, weekDays: true, days7: true, online: false,
      subItems: [
        {
          url: '/7-days-camp',
          text: '7 Days Health Camp - On Campus - Hindi',
          onCampus: true, weekDays: true, days7: true, online: false
        },
        {
          url: '/7-days-camp-english',
          text: '7 Days Health Camp - On Campus - English',
          onCampus: true, weekDays: true, days7: true, online: false
        },
      ],
    },

    {
      // url: '/7-days-camp-english',
      title: '21 Days Better Living Course',
      onCampus: true, weekDays: true, days21: true, online: true,
      subItems: [
        {
          url: '/21-days-better-living-course',
          text: 'Morning Online & On Campus – English - Batch 1',
          onCampus: true, weekDays: true, days21: true, online: true,
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
      ],
    },
    // {
    //   url: '/21-days-better-living-course',
    //   text: '21 Days Better Living Course',
    //   onCampus: true, weekDays: true, days21: true
    // },
    // {
    //   url: '/one-month-ttc',
    //   text: '200 Hours 1 Month YTTC Basic Course',
    //   onCampus: true, online: true, month1: true, weekDays: true
    // },
    // {
    //   url: '/seven-month-ttc',
    //   text: "900 Hours 3 Months YTTC Advanced Course",
    //   onCampus: true, online: true, month3: true, weekDays: true
    // },
    // {
    //   url: '/pregnancy-camp-for-ante-post-natal',
    //   text: 'Pregnancy Camp',
    //   onCampus: true, weekDays: true, days2: true
    // },
    {
      url: '/samattvam',
      title: 'Samattvam',
      onCampus: true, weekends: true, days1: true
    }
  ]
    const specialEventsStatic = [
      {
        url: '/satsang',
        text: 'Satsang - On Campus',
        onCampus: true, weekends: true, days1: true
      },
      {
        url: '/samattvam',
        text: 'Samattvam(Health Checkup) - On Campus',
        onCampus: true, weekends: true, days1: true
      },
      {
        url: '/yoga-by-the-bay',
        text: 'Yoga by the bay',
        online: true, onCampus: true, days1: true
      },
      {
        url: '/fullmoon-meditation',
        text: 'Full moon meditation',
        online: true, onCampus: true, days1: true
      }
    ]

    const  additionalCertifications= [
      {
        url: '/certificate-yoga-therapy-course-online',
        text: 'Certificate Yoga Therapy Course - Online & On Campus',
        onCampus: true, online: true, weekends: false, weekDays: true
      },
      {
        url: '/certificate-program-on-yoga-for-cancer',
        text: 'Certificate Program on Yoga for Cancer - Online',
        onCampus: false, online: true, weekends: true, weekDays: true, days2: true
      },
      {
        url: '/certification-program-on-yoga-for-lung-cancer-online',
        text: 'Certificate Program on Yoga for Lung Cancer - Online',
        onCampus: false, online: true, weekends: true, weekDays: true, days2: true
      },
      {
        url: '/certificate-course-on-advanced-pranayama-techniques',
        text: 'Certificate Course on Advanced Pranayama Techniques - Online',
        onCampus: false, online: true, weekends: true, weekDays: true
      },
      {
        url: '/ma-yoga-shastra',
        text: 'MA Yogashastra',
        onCampus: true, online: true, weekends: true, weekDays: true, year2: true
      },
      {
        url: '/ba-yoga-shastra',
        text: 'BA Yogashastra',
        onCampus: true, online: false, weekends: false, weekDays: true
      }
    ]


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
      case 'Regular Yoga Classes':
        return (
          <div className="course-list-content fixing_scroll" >
            <br />
            <div>
              {/* <h4> */}
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
              {/* </h4> */}
            </div>
            {/* <Link to="/courses/browse/classes">
            <CommonBtn text={'Explore all'} />
          </Link> */}
          </div>
        )
      case 'Camps & Workshops':
        return (
          <div className="camp_course-list-content fixing_scroll">
            <br />
            {/* <Accordian sliderVal={customVal} setSliderVal={setCustomVal} data={campsAccordian} selectedFilters={selectedFilters} /> */}
            <div>
              {/* <h4> */}
              <ul  >
                {/* id='camps-workshop' */}
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
              {/* </h4> */}
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

      case 'Most Popular Yoga Courses':
        return (
          <div className="course-list-content">
            <div>
    <ul>
      {mostPopularStatic.map((item, i) => (
        shouldDisplayLink(item) &&
       (
        <li key={i}>
        {/* Only clickable if item.url exists */}
        {item.url ? (
          <Link to={item.url}>
            <strong>{item.title}</strong>
          </Link>
        ) : (
          <strong>{item.title}</strong>
        )}

        {/* Map over subItems if available */}
        {item.subItems?.length > 0 && (
          <ul>
            {item.subItems.map((subItem, j) => (
              <li key={j}>
                <Link to={subItem.url}>{subItem.text}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
       )
      ))}
    </ul>
  </div>
           
          </div>
        )
      case 'Special Certificate Courses (For Yoga Teachers)':
        return (
          <>
            <div style={{ marginTop: '40px' }}>

              <ul>
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
            <div id="desktopDiv"></div>
          </>
        )
      case 'Special Events':
        return (
          <>
            <div style={{ marginTop: '1.75rem' }} id="mobileDiv">
              <ul>
                {/*  id='therapy-course'  */}
                {specialEventsStatic.map((item, i) => (
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
        case 'Additional Certifications':
        return (
          <>
            <div style={{ marginTop: '1.75rem' }} id="mobileDiv">
              <ul>
                {/*  id='therapy-course'  */}
                {additionalCertifications.map((item, i) => (
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

  const selectColor = (i, title) => {
    if (title == 'Yoga Teacher Training Courses (YTTC)') {
      return '#c8705f'
    }
    else if (title == 'Certified Yoga Courses') { return '#edbe66' }
    else if (title == 'Regular Yoga Classes') { return '#b77e7e' }
    else if (title == 'Most Popular Yoga Courses') { return '#6e9596' }
    else if (title == 'Camps & Workshops') { return '#ce9b51' }
    else if (title == 'Special Certificate Courses (For Yoga Teachers)') { return '#ba7e7e' }
    else if (title == 'Special Events') { return '#c8705f' }
    else if (title == 'Additional Certifications') { return 'rgba(117, 159, 128, 1)' }
    else { return '' }
    // if (i === 0) { return '#94B1B2' }
    // else if (i === 1) { return '#7C999B' }
    // else { return '#6E9596' }
  }

  return (
    <div className="course-section">

      <div className="course-list">
        <div className="course-title">
          {pathParam != 'ttc' ?

            (title != 'Special Events' ? <Link to={`/courses/browse/${pathParam}`}>
              <h1 style={{ fontSize: '2.6rem' }}>{title}</h1>
              {/* // for special evens no nee of link */}
            </Link> : <h1 style={{ fontSize: '2.6rem', pointerEvents: 'none' }}>{title}</h1>)
            :
            <Link to={`/courses/browse/ttc?type=200`}>
              <h1 style={{ fontSize: '2.6rem', fontWeight: '700' }}>{title}</h1></Link>
          }

        </div>
        {content()}
      </div>

      {showRangeSlider && showRangeSlider === true && (
        <div className="vertical-scrollbar" style={{ display: 'none'}}>
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
          isMobile ? (
            <SliderCourses data={data} title={title} />
          ) : (
            <>
            
            {
          title === 'Most Popular Yoga Courses' ?
            data
              .filter((item) => item.mostPopular === true).map((item, i) => {
                {
                  console.log(item);
                }
                // if (
                //   item.key === '500-hrs-online-yoga-teacher-training-course-intermediate-level' ||
                //   item.key === 'weekend-teacher-training-course' ||
                //   item.key === 'nutri-diet'
                // ) {
                return (
                  // shouldDisplayCard(item) && (
                  <CourseCard
                    key={i}
                    color={selectColor(i, title)}
                    index={i}
                    courseTitle={item?.title}
                    pageName={item?.key}
                    tenure={item?.tenure}
                    courseCategory={item?.courseCategory}
                    courseSubType={item?.courseSubType}
                    onlineMode={item?.onlineInfo?.courseMode}
                    residentialMode={item?.residentialInfo?.courseMode}
                    nonResidentialMode={item?.nonResidentialInfo?.courseMode}
                    residentialLocation={item?.residentialInfo?.residentialMode}
                    nonResidentialLocation={item?.nonResidentialInfo?.nonResidentialMode}
                    courseType={item?.courseType}
                    language={item?.language}
                    description={item?.metaDescription}
                    path={item?.key}
                    img={item?.cardImage}
                    rating={item?.rating}
                    dates={item?.dates}
                    online={item?.online}
                    onCampus={item?.onCampus}
                    residential={item?.residential}
                    nonResidential={item?.nonResidential}
                    weekends={item?.weekends}
                  />)
                // )
                // }
                // return
              })
            :
            data.map((item, i) => {
              if (item?.key == 'samattvam') {
                console.log(item);
              }

              // if (i < 3) {
              return (
                // shouldDisplayCard(item) && (
                <CourseCard
                  key={i}
                  color={selectColor(i, title)}
                  index={i}
                  courseTitle={item?.title}
                  description={item?.metaDescription}
                  path={item?.key}
                  img={item?.cardImage}
                  rating={item?.rating}
                  dates={item?.dates}
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
                  weekends={item?.weekends}
                  onCampus={item?.onCampus}
                />)
              // )
              // }
              // return
            })
        }
            
            </>
          )
        }
      </div>
    </div>
  )
}

export default CourseSection
