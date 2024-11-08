import React, { useEffect, lazy, useState, useRef } from 'react'
//import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
// import CourseSection from '../../../Components/CourseSections'
import { courseCardData } from '../../../utils/courseCardData'
import { c200hr, c500hr, c900hr, campsArr, AllCourses, classesArr, certificateArr, mostPopular } from '../Constants/courses'
import baseDomain, { certificates } from '../../../assets/images/imageAsset'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion'

// import {
//   courseArray,
//   course200H,
//   camps,
//   classes,
// } from '../../../Constants/courses/c200hr'

import AlumniCarousel from '../../../Components/AluminiCarousel'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { trackCourseView } from '../../../../../CleverTap/pageViewEvents'

const CourseSection = lazy(() => import('../../../Components/CourseSections'))
// const courseCardData = lazy(() =>
//   import('../../../utils/courseCardData').then(module => ({ default: module.courseCardData }))
// );

const Courses = () => {

  const location = useLocation()
  const [sessionId, setSessionId] = useState('');
  const [startTime, setStartTime] = useState(0);
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [filters, setFilters] = useState({ online: false, onCampus: false, days7: false, days21: false, month1: false, month2: false, month3: false, weekDays: false, weekends: false });
  const [selectedFilters, setSelectedFilters] = useState({ online: false, onCampus: false, days7: false, days21: false, month1: false, month2: false, month3: false, weekDays: false, weekends: false });
  const filtersToloop = [{ label: 'Online', value: 'online' }, { label: 'On-Campus', value: 'onCampus' }, { label: '1 Month', value: 'month1' }, { label: '21 days', value: 'days21' }, { label: '7 days', value: 'days7' },
  { label: '2 Months', value: 'month2' }, { label: '3 Months', value: 'month3' }, { label: 'Weekdays', value: 'weekDays' }, { label: 'Weekends', value: 'weekends' }
  ]
  const clearFilters = () => {
    setIsFilterOpened(false)
    setFilters({ online: false, onCampus: false, days7: false, days21: false, month1: false, month2: false, month3: false, weekDays: false, weekends: false });
    setSelectedFilters({ online: false, onCampus: false, days7: false, days21: false, month1: false, month2: false, month3: false, weekDays: false, weekends: false });
    setData([dataMaster[0].slice(0, 3), dataMaster[1].slice(0, 3), dataMaster[2].slice(0, 3), dataMaster[3].slice(0, 3), dataMaster[4].slice(0, 3), dataMaster[5].slice(0, 3)])

  }

  const anyFilterActive = Object.values(filters).some(value => value === true);

  const applyFilters = (selectedValues) => {
    console.log(selectedValues);

    setIsFilterOpened(false)
    setSelectedFilters(selectedValues)
    let val = JSON.parse(JSON.stringify((selectedValues)))
    updateJsonData(val)
  }
  const countTrueFilters = Object.values(selectedFilters).filter(value => value === true).length;
  const shouldDisplayCard = (points) => {// used to display the card in UI
    console.log(points);

    if (selectedFilters) {
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = selectedFilters;

      if (!anyFilterActive) {
        return true; // Show link if no filters are active
      }
      console.log(points);

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

    return true; // In case selectedFilters is undefined
  };


  let dataMaster = [[c200hr[0], c500hr[0], c900hr[0], c200hr[1], c900hr[1], c200hr[2], c900hr[2], c200hr[3], c900hr[3], c200hr[4], c900hr[4], c200hr[5], c900hr[5]],
  [campsArr[13], campsArr[11], campsArr[14], campsArr[12], campsArr[15]],
    classesArr, mostPopular, campsArr,
  [certificateArr[3], certificateArr[1], certificateArr[0]]]

  const [data, setData] = useState([dataMaster[0].slice(0, 3), dataMaster[1].slice(0, 3),
  dataMaster[2].slice(0, 3), dataMaster[3].slice(0, 3),
  dataMaster[4].slice(0, 3), dataMaster[5].slice(0, 3)])
  // Convert shouldDisplayCard to async for handling any async logic

  function shouldDisplayCardNew(points, filters) {
    return new Promise((resolve, reject) => {
      console.log(filters);

      if (Object.values(filters).some(value => value === true)) {
        // setTimeout(() => {
        const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = filters;

        if (!anyFilterActive) {
          resolve('true') // Show link if no filters are active
        }

        // Create an array to store conditions for filtering
        const conditions = [];
        console.log(points);

        if (online) {
          conditions.push(points?.online);
        }
        if (onCampus && (points?.residential || points?.nonResidential)) {
          conditions.push(true);
        }
        if (days7 && points?.tenure?.toLowerCase() === '7 days') {
          conditions.push(points?.tenure?.toLowerCase() === '7 days');
        }
        if (days21 && points?.tenure?.toLowerCase() === '21 days') {
          conditions.push(points?.tenure?.toLowerCase() === '21 days');
        }
        if (month1 && points?.tenure === '1 month') {
          conditions.push(points?.tenure === '1 month');
        }
        if (month2 && points?.tenure === '2 month') {
          conditions.push(points?.tenure === '2 month');
        }
        if (month3 && points?.tenure === '3 month') {
          conditions.push(points?.tenure === '3 month');
        }
        // if (month3) {
        //   conditions.push(points?.tenure === '3 month');
        // }
        if (weekends) {
          conditions.push(points?.weekends);
        }
        if (weekDays) {
          conditions.push(points?.weekDays);
        }
        console.log(conditions);

        if (conditions.length > 0 && conditions.every(Boolean)) {
          resolve('true')
        }
        else {
          resolve('false')
        }

        // Check if all active conditions are met

        // }, 100);
      }
      else {
        console.log('else');

        resolve('true') // In case selectedFilters is undefined
      }
    })
  }

  // Refactor updateJsonData to handle async operations correctly
  const updateJsonData = async (selectedValues) => {
    if (Object.values(selectedValues).some(value => value === true)) {
      let rawArr1 = dataMaster[0]
      let rawArr2 = dataMaster[1]
      let rawArr3 = dataMaster[2]
      let rawArr4 = dataMaster[3]
      let rawArr5 = dataMaster[4]
      let rawArr6 = dataMaster[5]
      let arr1 = []
      let arr2 = []
      let arr3 = []
      let arr4 = []
      let arr5 = []
      let arr6 = []
      let count1 = 0
      for (let j1 = 0; j1 < rawArr1.length; j1++) {
        const shouldDisplay = await shouldDisplayCardNew(rawArr1[j1], selectedValues);
        console.log(shouldDisplay, rawArr1[j1]);

        if (shouldDisplay == 'true') {
          arr1.push(rawArr1[j1]);
          count1 += 1
        }
        if (count1 > 3) {
          break;
        }
      }

      let count2 = 0
      for (let j2 = 0; j2 < rawArr2.length; j2++) {
        const shouldDisplay = await shouldDisplayCardNew(rawArr2[j2], selectedValues);
        if (shouldDisplay == 'true') {
          arr2.push(rawArr2[j2]);
          count2 += 1
        }
        if (count2 > 3) {
          break;
        }
      }

      let count3 = 0
      for (let j3 = 0; j3 < rawArr3.length; j3++) {
        const shouldDisplay = await shouldDisplayCardNew(rawArr3[j3], selectedValues);
        if (shouldDisplay == 'true') {
          arr3.push(rawArr3[j3]);
          count3 += 1
        }
        if (count3 > 3) {
          break;
        }
      }

      let count4 = 0
      for (let j4 = 0; j4 < rawArr4.length; j4++) {
        const shouldDisplay = await shouldDisplayCardNew(rawArr4[j4],selectedValues);
        if (shouldDisplay == 'true') {
          arr4.push(rawArr4[j4]);
          count4 += 1
        }
        if (count4 > 3) {
          break;
        }
      }

      let count5 = 0
      for (let j5 = 0; j5 < rawArr5.length; j5++) {
        const shouldDisplay = await shouldDisplayCardNew(rawArr5[j5], selectedValues);
        if (shouldDisplay == 'true') {
          arr5.push(rawArr5[j5])
          count5 += 1
        }
        if (count5 > 3) {
          break;
        }
      }

      let count6 = 0
      for (let j6 = 0; j6 < rawArr6.length; j6++) {
        const shouldDisplay = await shouldDisplayCardNew(rawArr6[j6], selectedValues);
        if (shouldDisplay == 'true') {
          arr6.push(rawArr6[j6]);
          count6 += 1
        }
        if (count6 > 3) {
          break;
        }
      }
      let finalArr = [arr1?.length > 0 ? arr1.slice(0, 3) : [], arr2?.length > 0 ? arr2.slice(0, 3) : [],
      arr3?.length > 0 ? arr3.slice(0, 3) : [],arr4?.length > 0 ? arr4.slice(0, 3) : [],
      arr5?.length > 0 ? arr5.slice(0, 3) : [], arr6?.length > 0 ? arr6.slice(0, 3) : []]
      console.log(finalArr);

      setData(finalArr)
    }
    else {
      clearFilters()
    }

  };



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // useEffect(() => {
  //   console.log('loaded1');

  // }, [data])
  const CoursesBan = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const setPathParam = (title) => {

    if (title === 'Teacher Training Courses') {

      return { path: 'ttc', sliderVal: 3 }
    }
    else if (title === 'Camps & Workshops') {

      return { path: 'camps-workshops', sliderVal: 9 }
    }
    else if (title === 'Most Popular') {

      return { path: 'most-popular', sliderVal: 3 }
    }
    else {

      return { path: 'classes', sliderVal: 3 }
    }
  }



  useEffect(() => {
    // Start time when the component mounts
    setStartTime(Date.now());

    // Retrieve or generate the session ID
    let session = localStorage.getItem('sessionId');
    if (!session) {
      session = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('sessionId', session);
    }
    setSessionId(session);

    return () => {
      // End time when the component unmounts
      const endTime = Date.now();

      // Calculate the session duration in seconds
      const sessionDuration = ((endTime - startTime) / 1000).toFixed(2);

      const pageName = 'Course_Intro';
      const lastPageUrl = document.referrer || 'N/A';
      const pageUrl = window.location.href;
      //const loggedIn = localStorage.getItem('isLoggedIn') === 'true' ? 'Yes' : 'No'; // Adjust based on your auth logic
      const uniqueViewId = Math.floor(Math.random() * 1000); // Replace with actual logic

      // trackCourseView({
      //     pageName,
      //     lastPageUrl,
      //     pageUrl,
      //     sessionDuration,
      //     isLoggedIn,
      //     sessionId: session,
      //     uniqueViewId,
      // });
    };
  }, []);
  const shouldDisplayMainBlock = (index) => {

    if (Object.values(selectedFilters).some(value => value === true)) {
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = selectedFilters;

      if (!anyFilterActive) {
        return true; // Show block if no filters are active
      }

      // Extract the points from obj
      var points = []
      //Here kept staic data based on each section to hide the complete section if there is no matched data
      if (index == 0) {
        points = [
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

          {
            url: '/500-hrs-online-yoga-teacher-training-course-intermediate-level',
            text: ' 3 Months YTTC - Online - English',
            online: true, month3: true, weekDays: true,
          }, {
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
          }
        ]
      }
      else if (index == 1) {
        points = [{
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
        {
          url: '/7-days-camp',
          text: '7 Days Health Camp - On Campus - Hindi',
          onCampus: true, weekDays: true, days7: true
        },
        {
          url: '/7-days-camp-english',
          text: '7 Days Health Camp - On Campus - English',
          onCampus: true, weekDays: true, days7: true
        }
        ]
      }
      else if (index == 2) {
        points = [{
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
      }
      else if (index == 3) {
        points = [
          {
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
          }
        ]
      }
      else if (index == 4) {
        points = [{
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
      }
      else if (index == 5) {
        points = [{
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
        }]
      }

      // Create an array to store conditions for filtering
      const conditions = [];

      // Check if points exist and are not empty
      if (points) {
        console.log(points);

        if (online) {
          const bool = points.some(obj => obj.online === true);
          conditions.push(!!bool);
        }
        if (onCampus) {
          const bool = points.some(obj => obj.onCampus === true);
          conditions.push(!!bool);
        }
        if (days7) {
          const bool = points.some(obj => obj.days7 === true);
          conditions.push(!!bool);
        }
        if (days21) {
          const bool = points.some(obj => obj.days21 === true);
          conditions.push(!!bool);
        }
        if (month1) {
          const bool = points.some(obj => obj.month1 === true);
          conditions.push(!!bool);
        }
        if (month2) {
          const bool = points.some(obj => obj.month2 === true);
          conditions.push(!!bool);
        }
        if (month3) {
          const bool = points.some(obj => obj.month3 === true);
          conditions.push(!!bool);
        }
        if (weekends) {
          const bool = points.some(obj => obj.weekends === true);
          conditions.push(!!bool);
        }
        if (weekDays) {
          const bool = points.some(obj => obj.weekDays === true);
          conditions.push(!!bool);
        }
      }

      // Check if all active conditions are met and not empty
      return conditions.length > 0 && conditions.every(Boolean);
    }

    return true; // In case selectedFilters is undefined
  }


  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <div className="courses-container" onClick={() => setIsFilterOpened(false)}>
        {/* <CommonBannerNavPrimary innerNav={false} /> */}
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          padding: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Smoother, softer shadow
          zIndex: 10, // Makes sure it stays above the content
        }}>
          <InnerNavComponent abc={CoursesBan} />
          <div className="search">
            <h1>Courses</h1>
            <div className='filter-section'>
              <div className='filter-btn' onClick={(event) => { event.stopPropagation(); setIsFilterOpened(isFilterOpened ? false : true) }}>
                <span>
                  <img src="icons/filter-icon.png" alt="filter-icon" />
                </span>
                <span style={{ padding: '0 20px 0 4px' }}>
                  Filters
                  {countTrueFilters > 0 && <span className='count-badge'>{countTrueFilters}</span>}</span>
                <span style={{ position: 'relative', top: '-2px' }}>
                  {isFilterOpened ? <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 4.75L5 1.25L1.5 4.75" stroke="#CA4625" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                    :
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#CA4625" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
                </span>
              </div>
              {isFilterOpened &&
                <div className="filter-values" onClick={(event) => event.stopPropagation()}>
                  <div className='filter-head'>Course Format</div>
                  <div className='filter-data'>
                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, onCampus: false, online: true }) }}>
                      {filters.online ?
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4.25C5.93 4.25 4.25 5.93 4.25 8C4.25 10.07 5.93 11.75 8 11.75C10.07 11.75 11.75 10.07 11.75 8C11.75 5.93 10.07 4.25 8 4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#CA4625" />
                        </svg>
                        :
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#818184" />
                        </svg>
                      }
                    </span>&nbsp;<span className={filters.online ? "label-head active-label-head" : "label-head"}>Online </span>&nbsp;&nbsp;
                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, onCampus: true, online: false }) }}>
                      {filters.onCampus ?
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4.25C5.93 4.25 4.25 5.93 4.25 8C4.25 10.07 5.93 11.75 8 11.75C10.07 11.75 11.75 10.07 11.75 8C11.75 5.93 10.07 4.25 8 4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#CA4625" />
                        </svg>
                        :
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#818184" />
                        </svg>}
                    </span>&nbsp;<span className={filters.onCampus ? "label-head active-label-head" : "label-head"}>On-Campus</span></div>

                  <div className='filter-head'>Duration</div>
                  <div className='filter-data'>
                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, days7: !filters.days7 }) }}>
                      {filters.days7 ?
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.95 10.15L11.2375 4.8625L10.1875 3.8125L5.95 8.05L3.8125 5.9125L2.7625 6.9625L5.95 10.15ZM1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#CA4625" />
                        </svg> :
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#818184" />
                        </svg>}
                    </span>&nbsp;<span className={filters.days7 ? "label-head active-label-head" : "label-head"}>7 days</span> &nbsp;&nbsp;
                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, days21: !filters.days21 }) }}>
                      {filters.days21 ?
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.95 10.15L11.2375 4.8625L10.1875 3.8125L5.95 8.05L3.8125 5.9125L2.7625 6.9625L5.95 10.15ZM1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#CA4625" />
                        </svg> :
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#818184" />
                        </svg>}
                    </span>&nbsp;<span className={filters.days21 ? "label-head active-label-head" : "label-head"}>21 days</span>&nbsp;&nbsp;

                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, month1: !filters.month1 }) }}>
                      {filters.month1 ?
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.95 10.15L11.2375 4.8625L10.1875 3.8125L5.95 8.05L3.8125 5.9125L2.7625 6.9625L5.95 10.15ZM1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#CA4625" />
                        </svg> :
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#818184" />
                        </svg>}
                    </span>&nbsp;<span className={filters.month1 ? "label-head active-label-head" : "label-head"}>1 month</span> &nbsp;&nbsp;
                    <br />
                    <div style={{ marginTop: '10px' }}>
                      <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, month2: !filters.month2 }) }}>
                        {filters.month2 ?
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.95 10.15L11.2375 4.8625L10.1875 3.8125L5.95 8.05L3.8125 5.9125L2.7625 6.9625L5.95 10.15ZM1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#CA4625" />
                          </svg> :
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#818184" />
                          </svg>}
                      </span>&nbsp;<span className={filters.month2 ? "label-head active-label-head" : "label-head"}>2 months</span>&nbsp;&nbsp;
                      <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, month3: !filters.month3 }) }}>
                        {filters.month3 ?
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.95 10.15L11.2375 4.8625L10.1875 3.8125L5.95 8.05L3.8125 5.9125L2.7625 6.9625L5.95 10.15ZM1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#CA4625" />
                          </svg> :
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 12.25H12.25V1.75H1.75V12.25Z" fill="#818184" />
                          </svg>}
                      </span>&nbsp;<span className={filters.month3 ? "label-head active-label-head" : "label-head"}>3 months</span></div>
                  </div>
                  <div className='filter-head'>Schedule</div>
                  <div className='filter-data'>
                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, weekDays: true, weekends: false }) }}>
                      {filters.weekDays ?
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4.25C5.93 4.25 4.25 5.93 4.25 8C4.25 10.07 5.93 11.75 8 11.75C10.07 11.75 11.75 10.07 11.75 8C11.75 5.93 10.07 4.25 8 4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#CA4625" />
                        </svg>
                        :
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#818184" />
                        </svg>}
                    </span>&nbsp;<span className={filters.weekDays ? "label-head active-label-head" : "label-head"}>Weekdays</span> &nbsp;&nbsp;
                    <span style={{ cursor: 'pointer' }} onClick={() => { setFilters({ ...filters, weekDays: false, weekends: true }) }}>
                      {filters.weekends ?
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4.25C5.93 4.25 4.25 5.93 4.25 8C4.25 10.07 5.93 11.75 8 11.75C10.07 11.75 11.75 10.07 11.75 8C11.75 5.93 10.07 4.25 8 4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#CA4625" />
                        </svg>
                        :
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z" fill="#818184" />
                        </svg>}
                    </span>&nbsp;<span className={filters.weekends ? "label-head active-label-head" : "label-head"}>Weekends</span></div>
                  <div className='filter-footer'>
                    <div className='clear' onClick={() => clearFilters()}>Clear Filters</div>
                    <div className={anyFilterActive ? 'apply' : 'apply opacity-btn'} onClick={() => { applyFilters(filters) }}>Apply Filters</div>
                  </div>
                </div>}

            </div>
            <div className='list-sele-filters'> {filtersToloop.map(fil => (
              <>
                {selectedFilters[fil.value] && <div key={fil.label}>{fil.label}
                  <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedFilters({ ...selectedFilters, [fil.value]: false }); setFilters({ ...filters, [fil.value]: false }); applyFilters(filters) }}>&nbsp;
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.08341 1.73913L8.26091 0.916626L5.00008 4.17746L1.73925 0.916626L0.916748 1.73913L4.17758 4.99996L0.916748 8.26079L1.73925 9.08329L5.00008 5.82246L8.26091 9.08329L9.08341 8.26079L5.82258 4.99996L9.08341 1.73913Z" fill="#CA4625" />
                    </svg>
                  </span></div>}
              </>
            ))}</div>

            {/* <div className="search-bar">
          <label>
            <input type={'text'} placeholder="Search Courses" />
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </div> */}
          </div></div>
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

              {/* <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc">
                      <p>Yoga Teacher Training Courses (YTTC)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem> */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc?type=200">
                      <p>200 hours YTTC (Basic)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc?type=500">
                      <p>500 Hours YTTC (Intermediate)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/ttc?type=900">
                      <p>900 Hours YTTC (Advanced)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/certificate-courses">
                      <p>Certified Yoga Courses</p>
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
                    <Link to="/courses/browse/camps-workshops">
                      <p>Camps & Workshop</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to="/courses/browse/special-certificate-courses">
                      <p>Special Certificate Courses (For Yoga Teachers)</p>
                    </Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
            </Accordion>
          </div></div>

        <div className="courses-introduction">
          <div className="intro-text">
            <h1>More than just learning</h1>

            <p className="intro-p">
              Whether you want to revitalize your mind and body or take a break
              from your hectic lifestyle, we have you covered. To bring in a new
              you or begin a new career path, explore our countless life-changing
              courses, which have transformed millions of people over the last 10
              decades.
            </p>
            <p>
              Every course has been designed to deliver organic and holistic results by incorporating 105+ years of legacy, research, and knowledge. Choose now from our innumerable courses to get started on your journey of transformation!
            </p>
          </div>
          <div className="intro-image">

            <img src="https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/SEO-New-Images/course/21-days+-better-living-course.webp" alt='more than just reading' loading='lazy' />
          </div>
        </div>

        {courseCardData && courseCardData.map((item, i) => {



          // setPathParam(item.title)
          return (
            <>
              {shouldDisplayMainBlock(i) &&
                <CourseSection
                  key={i}
                  title={item.title}
                  // color={item.color}
                  data={data[i]}
                  showRangeSlider={(item?.title === 'Yoga Teacher Training Courses (YTTC)') ? true : false}
                  pathParam={setPathParam(item.title).path}
                  cardData={item.cardData}
                  sliderRange={setPathParam(item.title).sliderVal}
                  selectedFilters={selectedFilters}
                />}</>
          )


        })
        }

        <div className="certifications">
          <h2>
            Certified by Yoga Certification Board (YCB), Ministry of AYUSH and
            Yoga Alliance, USA.
          </h2>
          <div className="certificates">
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.IYA}`} alt='The Indian Yoga Association' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  The Indian Yoga Association is committed to promotion and
                  advancement of Yoga and its applications around the world.

                </p>
              </div>
            </div>
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.YCB}`} alt='Yoga Certification Board' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  Yoga Certification Board is the Board which has been set up by
                  Government for certification in the field of Yoga.

                </p>
              </div>
            </div>
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.YAL}`} alt='Yoga Alliance' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  Yoga Alliance is involved with advocating for self-
                  regulation in the yoga industry.

                </p>
              </div>
            </div>
            <div className="certificate">
              <div className="certificate-logo">
                <img src={`${baseDomain}${certificates.IAYT}`} alt='International association of yoga therapists' loading='lazy' />
              </div>
              <div className="certificate-text">
                <p>
                  IAYT supports research and education in yoga and serves as a
                  professional organization for yoga teachers and yoga therapists worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <AlumniCarousel />
      </div >
    </>
  )
}

export default Courses
