import React, { useEffect, useState } from 'react'
import './style.scss'
//import { star, global, network, chat } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import baseDomain, { courseAssets } from '../../assets/images/imageAsset'
import { Link, useSearchParams } from 'react-router-dom'
import CoursePara from '../CourseComponents/CoursePara'
import CourseULIst from '../CourseComponents/CourseUList'
import CourseTable from '../CourseComponents/CourseTable'
import CourseQuote from '../CourseComponents/CourseQuote'
import CourseURL from '../CourseComponents/CourseURL'
import SelectDropDown from '../Select Dropdown'
import { useSelector } from 'react-redux'
import CourseOList from '../CourseComponents/CourseOLList'
import EnrollBtn from '../enrollBtn'
//import { useParams } from 'react-router-dom'
import { handleCTEnrollNowClick } from '../../../../CleverTap/buttonClicked'
import { trackPageView } from '../../../../CleverTap/pageViewEvents'
import { useLocation } from 'react-router-dom';
import DatesPopUp from '../TermsandCondition/DatesPopUp'


const CourseDetails = ({ pageDate }) => {
  const [detail, setDetail] = useState(1)
  const [error, setError] = useState()
  const [Params] = useSearchParams()

  // const [courseDate, setCourseDate] = useState()

  // useEffect(() => {
  //   setCourseDate(localStorage.getItem('selectedDate'))
  // }, [])
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [selectDate, setSetselectDate] = useState('null')
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [eventTriggered, setEventTriggered] = useState(false);
  const location = useLocation();
  const [showDiv, setShowDiv] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [open, setOpen] = useState(false);


  useEffect(() => {
    // Check if the current location matches the required URL
    if (location.pathname === '/regular-meditation-classes-online') {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  }, [location]);


  // const handleScroll = () => {
  //   const enrollButton = document.getElementById("enrollButton");
  //   const enrollButtonPosition = enrollButton.getBoundingClientRect().bottom;

  //   // Show fixed div when the enrollButton crosses a certain point
  //   if (enrollButtonPosition < 0) {
  //     setShowFixedDiv(true);
  //   } else {
  //     setShowFixedDiv(false);
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      const enrollButton = document.getElementById("enrollButton");
      if (enrollButton) {
        const enrollButtonPosition = enrollButton.getBoundingClientRect().bottom;
        setShowFixedDiv(enrollButtonPosition < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const checkHandler = () => {
    if (pageDate.dates.length !== 0) {
      if (selectDate === null) {
        setError(0)//1
      } else {
        setError(0)
      }
    }
  }

  // localStorage.setItem('selectedDate',selectDate)
  useEffect(() => {
    setSetselectDate(Params.get('date'))

    window.scrollTo(0, 0)
    console.log(pageDate?.key, 'heoo')
    // {Params.get('date')===null? window.scrollTo(0, 0): document.getElementById('date-select').scrollIntoView()}
  }, [])

  const scroll = () => {
    // document.getElementById('date-select').scrollIntoView()
    return <CommonBtn text={'Enroll Now'} />
  }

  // useEffect(() => {
  //   if (window.innerWidth <= 768) {
  //     window.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const clevertap = window.clevertap;

  // useEffect(()=> {

  //   // Get the current URL path
  // const currentPath = window.location.pathname;

  // // Extract the portion after the last '/' and remove the leading '/'
  // const extractedKey = currentPath.split('/').pop().replace(/-/g, ' ');
  //    // Trigger the course_viewed event when the component mounts

  //    // Determine the course mode
  // let courseMode = "";
  // if (pageDate?.onlineInfo?.courseMode) {
  //   courseMode = "Online";
  //   if (pageDate?.nonResidentialInfo?.courseMode || pageDate?.residentialInfo?.courseMode ) {
  //     courseMode += ", OnCampus";
  //   }
  // } else {
  //   courseMode = "OnCampus";
  // }

  // // Determine the course location
  // let courseLocation = "NA";
  // if (pageDate?.residentialInfo?.residentialMode && pageDate?.nonResidentialInfo?.nonResidentialMode) {
  //   courseLocation = "Residential, Non-Residential";
  // } else if (pageDate?.residentialInfo?.residentialMode) {
  //   courseLocation = "Residential";
  // } else if (pageDate?.nonResidentialInfo?.nonResidentialMode) {
  //   courseLocation = "Non-Residential";
  // }

  // let tenure = pageDate?.tenure;

  // if(pageDate?.tenure === '') {
  //   tenure = 'NA'
  // }
     
  //    if (pageDate) {
  //     clevertap.event.push("course_viewed", {
  //         "course_name": pageDate.title,
  //         "Page_name": extractedKey,
  //         "Fees_Residential": pageDate?.fees?.offlineFee?.residentialFee,
  //         "Fees_Non_Residential": pageDate?.fees?.offlineFee?.nonResidentialFee,
  //         "Fees_Online": pageDate?.fees?.onlineFee,
  //         "timing": pageDate?.timing,
  //         "Page_Url": window.location.href,
  //         "Tenure": tenure,
  //         "Course Category ": pageDate?.courseCategory,
  //         "Course-SubType": pageDate?.courseSubType,
  //         "Course Type": pageDate?.courseType,
  //         "Course Mode": courseMode,
  //         "Course Location": courseLocation,
  //         "Language": pageDate?.language,
  //         "Batch_No": pageDate?.batch,
  //         "date_time_timestamp": new Date().toISOString()
  //     });
  // }
  // console.log('Course Viewed Event', pageDate, extractedKey);
 
  // }, [pageDate])


  useEffect(() => {
    // Ensure pageDate is fully populated and the event hasn't been triggered yet
    if (pageDate && !eventTriggered && pageDate.title && pageDate.fees && pageDate.timing && pageDate.language) {
      
      // Get the current URL path
      const currentPath = window.location.pathname;

      // Extract the portion after the last '/' and remove the leading '/'
      const extractedKey = currentPath.split('/').pop().replace(/-/g, ' ');

      // Determine the course mode
      let courseMode = "";
      if (pageDate?.onlineInfo?.courseMode) {
        courseMode = "Online";
        if (pageDate?.nonResidentialInfo?.courseMode || pageDate?.residentialInfo?.courseMode) {
          courseMode += ", OnCampus";
        }
      } else {
        courseMode = "OnCampus";
      }

      // Determine the course location
      let courseLocation = "NA";
      if (pageDate?.residentialInfo?.residentialMode && pageDate?.nonResidentialInfo?.nonResidentialMode) {
        courseLocation = "Residential, Non-Residential";
      } else if (pageDate?.residentialInfo?.residentialMode) {
        courseLocation = "Residential";
      } else if (pageDate?.nonResidentialInfo?.nonResidentialMode) {
        courseLocation = "Non-Residential";
      }

      let tenure = pageDate?.tenure;
      if (pageDate?.tenure === '') {
        tenure = 'NA';
      }

      // Trigger the CleverTap event
      clevertap.event.push("course_viewed", {
        "course_name": pageDate.title,
        "Page_name": extractedKey,
        "Fees_Residential": pageDate?.fees?.offlineFee?.residentialFee,
        "Fees_Non_Residential": pageDate?.fees?.offlineFee?.nonResidentialFee,
        "Fees_Online": pageDate?.fees?.onlineFee,
        "timing": pageDate?.timing,
        "Page_Url": window.location.href,
        "Tenure": tenure,
        "Course Category": pageDate?.courseCategory,
        "Course-SubType": pageDate?.courseSubType,
        "Course Type": pageDate?.courseType,
        "Course Mode": courseMode,
        "Course Location": courseLocation,
        "Language": pageDate?.language,
        "Batch_No": pageDate?.batch,
        "date_time_timestamp": new Date().toISOString()
      });

      console.log('Course Viewed Event', pageDate, extractedKey);

      // Set flag to prevent re-triggering
      setEventTriggered(true);
    }
  }, [pageDate, eventTriggered]);

  
  


  



  

  // console.log('Course Viewed Event', pageDate);


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

        const pageName = pageDate?.title;
        const lastPageUrl = document.referrer || 'N/A';
        const pageUrl = window.location.href;
        //const loggedIn = localStorage.getItem('isLoggedIn') === 'true' ? 'Yes' : 'No'; // Adjust based on your auth logic
        const uniqueViewId = Math.floor(Math.random() * 1000); // Replace with actual logic

        // trackPageView({
        //     pageName,
        //     lastPageUrl,
        //     pageUrl,
        //     sessionDuration,
        //     isLoggedIn,
        //     sessionId: session,
        //     uniqueViewId,
        // });
    };
}, [sessionId, startTime]);


  let options = [
    {
      id: 'program-details',
      title: 'Program Details',
      key: 1,
    },
    {
      id: 'curriculum',
      title: 'Curriculum',
      key: 2,
    },
    {
      id: 'teaching',
      title: 'Teaching & Certification',
      key: 3,
    },
    {
      id: 'offering',
      title: 'Our Unique Offerings',
      key: 4,
    },
    {
      id: 'registration',
      title: 'Registration',
      key: 5,
    },
    {
      id: 'faq-section',
      title: 'FAQ',
      key: 6,
    },
    {
      id: 'refund-policy',
      title: 'Refund Policy',
      key: 7,
    },
  ]

  const selectStyles = {
    cursor: 'pointer',
    background: 'white',
    borderColor: 'black',
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop: '2rem',
    marginLeft: '10rem',
  }
  const selectStyles1 = {
    cursor: 'pointer',
    background: '#c9705f',
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop: '2rem',
    //marginLeft:'10rem'
  }

  const selectMenu = (name) => {
    switch (name) {
      case 'Program Details':
        setDetail(1)
        break
      case 'curriculum':
        setDetail(2)
        break
      case 'Teaching & Certification':
        setDetail(3)
        break
      case 'Our Unique Offerings':
        setDetail(4)
        break
      case 'Registration':
        setDetail(5)
        break
      case 'FAQ':
        setDetail(6)
        break
      case 'Refund Policy':
        setDetail(7)
        break
      default:
        setDetail(1)
    }
  }

  const selectComponent = (type, content) => {
    switch (type) {
      case 'paragraph':
        return <CoursePara content={content} />
      case 'u-list':
        return <CourseULIst content={content} />
      case 'o-list':
        return <CourseOList content={content} />
      case 'table':
        return <CourseTable content={content} />
      case 'quote':
        return <CourseQuote content={content} />
      case 'url':
        return <CourseURL content={content} />
    }
  }

  useEffect(() => {
    // Assuming `pageDate?.dates` is your array of dates
    const datesArray = pageDate?.dates;

    if (datesArray && datesArray.length > 0) {
      // Extract the first date range
      const firstDateRange = datesArray[0];

      // Split to extract start date
      const startDateString = firstDateRange.split(' to ')[0]; // "30th September"
      
      // Remove ordinal suffix (like "th") and split the date
      const cleanedDateArray = startDateString.replace(/\d+(st|nd|rd|th)/, match => match.slice(0, -2)).split(' ');

      const day = cleanedDateArray[0]; // e.g. "30"
      const fullMonth = cleanedDateArray[1]; // e.g. "September"
      
      // Create a mapping of full month names to their short forms
      const monthShortForm = {
        January: 'Jan',
        February: 'Feb',
        March: 'Mar',
        April: 'Apr',
        May: 'May',
        June: 'Jun',
        July: 'Jul',
        August: 'Aug',
        September: 'Sep',
        October: 'Oct',
        November: 'Nov',
        December: 'Dec'
      };

      // Get the short form of the month
      const shortMonth = monthShortForm[fullMonth] || fullMonth;

      // Update the state with day and short month
      setStartDate(`${day} ${shortMonth}`);
    }
  }, [pageDate]);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <>
      <div className="course-detail-page" id="registration">
        <div className="main-section" style={{ background: '#C9705F' }}>
          <div className="course-info">
            <h1>
              {pageDate?.title ? (
                <span>
                  {pageDate?.title}
                </span>
              ) : (
                <span>
                  <p>500 Hour</p>

                  <p>6 Months Online</p>

                  <p>Weekend - 18th Dec 2021</p>
                </span>
              )}
            </h1>
            <p>{pageDate?.timing}</p>
            <p>{pageDate?.textdescription1}</p>
            <p>{pageDate?.textdescription2}</p>
            <p>{pageDate?.textdescription3}</p>
            <p>{pageDate?.textdescription4}</p>
            <p>{pageDate?.textdescription5}</p>
            {pageDate?.metaDescription?.split('¿').map((para, i) => {
              return <p key={i} style={{ marginTop: '20px' }}>{para}</p>
            })}

            <p>{pageDate?.textdescription6}</p>
            <p>{pageDate?.textdescription7}</p>
            <p>{pageDate?.textdescription8}</p>
            <p>{pageDate?.textdescription9}</p>
            <p>{pageDate?.textdescription10}</p>
            {/* 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry.'} */}
            {pageDate?.key === 'respiratory-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This camp is designed specifically for individuals who are currently facing respiratory issues. It is tailored to provide support, guidance, and exercises to help improve respiratory health.</p>
            )}
            {pageDate?.key === 'respiratory-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'stress-management-camp' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This camp is uniquely crafted for individuals currently experiencing stress-related challenges. Its focus is on offering specialized assistance, direction, and techniques to address issues stemming from stress.</p>
            )}
            {pageDate?.key === 'stress-management-camp' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'weight-management-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This camp is thoughtfully designed for individuals who face challenges in weight loss and achieving their ideal weight. Our emphasis is on providing a comprehensive strategy for weight management, incorporating yoga postures, pranayamas, and a nourishing diet. </p>
            )}
            {pageDate?.key === 'weight-management-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'pregnancy-camp-for-ante-post-natal' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This camp is tailored exclusively for pregnant women. Our goal is to offer you an enriching journey towards a joyful and healthy pregnancy, along with a smooth delivery, achieved through yoga techniques and practical guidance. </p>
            )}
            {pageDate?.key === 'pregnancy-camp-for-ante-post-natal' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'cardiac-hypertension-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This workshop is exclusively crafted for people presently dealing with heart and hypertension concerns. Our objective is to offer assistance, guidance, and yogic practices to effectively address these concerns. </p>
            )}
            {pageDate?.key === 'cardiac-hypertension-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'back-joint-disorder-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This workshop is uniquely created for individuals presently experiencing back and joint issues. It is custom-tailored to offer support, guidance, and specialized exercises aimed at addressing and alleviating these concerns. </p>
            )}
            {pageDate?.key === 'back-joint-disorder-workshop' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}
            {pageDate?.key === 'diabetes-camp' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>This camp is exclusively designed for individuals currently managing diabetes. It is customized to offer support, guidance, and equip you with essential resources to improve your quality of life. </p>
            )}
            {pageDate?.key === 'diabetes-camp' && (
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>*Kindly Note: The camp is not available to the general public who might be interested in attending for the purpose of gaining general knowledge.</p>
            )}


            {/* <div
              id="date-select-mobile"
              style={
                pageDate?.dates?.length !== 0
                  ? { visibility: 'visible' }
                  : { display : 'none' }
              }
            >
              <SelectDropDown
                currentValue={selectDate}
                changeCurrentValue={setSetselectDate}
                text={'Select Date/Time'}
                isStyles={selectStyles1}
                dates={pageDate.dates}
              />{' '}
            </div> */}
            <div className="course-options">
              {/* {selectDate ? <Link to={ isLoggedIn ? `/enrollment/${pageDate.key}/?date=${selectDate}`:`/user/sign-in/${pageDate.key}/?date=${selectDate}`}>
              <CommonBtn text={'Enroll Now'} />
            </Link> :  scroll() } */}

              <div onClick={checkHandler} >
                {pageDate?.dates?.length !== 0 ?
                  (
                    selectDate ? (
                      <Link

                        to={
                          isLoggedIn
                            ? `/enrollment/${pageDate.key}`///?date=${selectDate}
                            : `/user/sign-in/?location=${pageDate.key}`//&date=${selectDate}
                        }
                      >
                        {/* <CommonBtn text={'Enroll Now'} /> */}
                        <EnrollBtn text={'Enroll Now'} buttonAction={ () => handleCTEnrollNowClick({
              courseTitle: pageDate?.title,
              fees: pageDate?.fees,
              timing: pageDate?.timing,
              tenure: pageDate?.tenure,
              courseCategory: pageDate?.courseCategory,
              courseSubType: pageDate?.courseSubType,
              courseType: pageDate?.courseType,
              onlineMode: pageDate?.onlineInfo?.courseMode,
              residentialMode: pageDate?.residentialInfo?.courseMode,
              nonResidentialMode: pageDate?.nonResidentialInfo?.courseMode,
              residentialLocation: pageDate?.residentialInfo?.residentialMode,
              nonResidentialLocation: pageDate?.nonResidentialInfo?.nonResidentialMode,
              language: pageDate?.language,
              category: pageDate?.category,
              batch: pageDate?.Batch_No,
              nonResidential: pageDate?.nonResidential,
              residential: pageDate?.residential,
              online: pageDate?.online
            }) } />
                      </Link>
                    ) : (
                      // scroll()
                      <Link
                        to={
                          isLoggedIn
                            ? `/enrollment/${pageDate.key}`///?date=${selectDate}
                            : `/user/sign-in/?location=${pageDate.key}`//&date=${selectDate}
                        }
                      >
                        {/* <CommonBtn text={'Enroll Now'} /> */}
                        <EnrollBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
              courseTitle: pageDate?.title,
              fees: pageDate?.fees,
              timing: pageDate?.timing,
              tenure: pageDate?.tenure,
              courseCategory: pageDate?.courseCategory,
              courseSubType: pageDate?.courseSubType,
              courseType: pageDate?.courseType,
              onlineMode: pageDate?.onlineInfo?.courseMode,
              residentialMode: pageDate?.residentialInfo?.courseMode,
              nonResidentialMode: pageDate?.nonResidentialInfo?.courseMode,
              residentialLocation: pageDate?.residentialInfo?.residentialMode,
              nonResidentialLocation: pageDate?.nonResidentialInfo?.nonResidentialMode,
              language: pageDate?.language,
              category: pageDate?.category,
              batch: pageDate?.Batch_No,
              nonResidential: pageDate?.nonResidential,
              residential: pageDate?.residential,
              online: pageDate?.online
            }) } />
                      </Link>
                    )
                  ) :
                  (pageDate?.key === 'samattvam' || pageDate?.key === 'satsang' || pageDate?.key === 'ma-yoga-shastra' ? <Link
                    to={
                      isLoggedIn
                        ? `/enrollment/${pageDate.key}`///?date=${selectDate}
                        : `/user/sign-in/?location=${pageDate.key}`//&date=${selectDate}
                    }
                  >
                    {/* <CommonBtn text={'Enroll Now'} /> */}
                    <EnrollBtn text={'Enroll Now'} />
                  </Link> :
                    (<div >
                      <div style={{ opacity: '0.4' }}>
                        {/* <CommonBtn text={'Enroll Now'} /> */}
                        <EnrollBtn text={'Enroll Now'} />
                      </div>
                      <div style={{ fontSize: '1.5rem', padding: '1.5rem' }}>No dates available for this course</div>
                    </div>)

                  )
                }

                {/* {error === 1 && (
                  <small
                    style={{
                      color: 'white',
                      marginLeft: '0',
                      position: 'relative',
                      top: '1rem',
                      left: '2rem',
                      fontSize: '1.2rem',
                    }}
                  >
                  *Please Select Date/Time!
                  </small>
                )} */}
              </div>

              <div className='wrapper_dates'>
                <span className='date-label-new'>Upcoming Dates:</span> <span className='start-date-glimse'> &nbsp;{startDate} | </span>  &nbsp;
                <div className='view_wrapper'>
                <a 
                onClick={handleOpen}
                style={{  marginLeft: "0.5px", textDecoration: "underline", cursor: "pointer", display: 'flex', alignItems: 'center' }} >
                <span className='view_all_dates'>View all </span>
                <div><img src="/images/Arrow right.svg" alt="" /></div>
                </a>
                </div>
              </div>

              {/* <CommonBtn text={'Gift Course'} /> */}
            </div>

            {open && (
              // <MessageModal 
              //   message={<TermsCondition />} 
              //   closePopup={handleClose} 
              //   type="Terms and Conditions" // You can pass any other props as needed
              // />
              // <TermsAndConditionsModal />
              <DatesPopUp isShippingModalOpen={handleOpen} setIsShipppingModalOpen={handleClose} pageDate={pageDate} />
            )}
          </div>
          <div className="course-cover course-cover-2">
            {pageDate?.image ? (
              <img src={pageDate?.image} alt={pageDate.title} loading='lazy' />
            ) : (
              <img
                src={`${baseDomain}${courseAssets.courseAsset2}`}
                alt="course-image"
                 loading='lazy'
              />
            )}
          </div>
        </div>

        <div
          id="date-select"
          style={
            pageDate?.dates?.length !== 0
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        >
          {/* {pageDate.key === 'ma-yoga-shastra' ? '' : 
          <SelectDropDown
            currentValue={selectDate}
            changeCurrentValue={setSetselectDate}
            text={'Select Date/Time'}
            isStyles={selectStyles}
            dates={pageDate.dates}
          />
          } */}
          {' '}
        </div>

        {pageDate.category === 'ttc' && (
          <div className="career-navigation-lg-div">
            <div className="career-navigation-lg">
              <ul className="innerNav">
                {options.map((item, idx) => (
                  <a
                    key={item.id}
                    id={item?.title === 'FAQ' ? 'comingsoon' : ''}
                    href={`#${item.id}`}
                  >
                    <li
                      onClick={() => {
                        selectMenu(item.title)
                      }}
                      key={idx}
                    >
                      <em className={idx + 1 === detail && 'active'}>
                        {item.title}
                      </em>
                      &nbsp;
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        )}

        {
          <div className="details-section" id="program-details">
            <h1>Program Details</h1>
            {pageDate?.details?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        }
        {/* {
          <div className="details-section" id="program-details">
          {<h1>Batches</h1>}
          
          <ul type="disc" style={{ marginLeft: '40px', marginTop: '20px'}}>
        {pageDate?.dates?.map((item, i) => {
          return <li key={i} style={{marginBottom: '5px'}}>{item}</li>
        })}
      </ul>
        </div>
        } */}
        {pageDate?.category === 'ttc' && pageDate?.curriculum?.length !== 0 && (
          <div className="details-section" id="curriculum">
            <h1>Curriculum</h1>
            {pageDate?.curriculum?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        )}
        {pageDate?.category === 'ttc' && pageDate?.teaching?.length !== 0 && (
          <div className="details-section" id="teaching">
            <h1>Teaching & Certification</h1>
            {pageDate?.teaching?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        )}
        {pageDate?.category === 'ttc' && pageDate?.offerings?.length !== 0 && (
          <div className="details-section" id="offering">
            <h1>Our Unique Offerings</h1>
            {pageDate?.offerings?.map(({ type, content }) => {
              return selectComponent(type, content)
            })}
          </div>
        )}
        <div className="details-section " id="refund-policy">
          <h1>Refund Policy</h1>
          {selectComponent('u-list', { title: '', points: [{ listItem:"The Yoga Institute has a strict no-refund policy for all its programmes. The only exception is if a programme is canceled by the institute, in which case the student will be offered a credit for any other programme or a refund of the event fee.",subItems:[] }] }) }
          {showDiv && selectComponent('u-list', { title: '', points: [{ listItem:"Enroll today in our online meditation classes and start your journey toward a peaceful and balanced life. Our online meditation courses are designed to make it easier for you to practice regularly. Learn meditation online with the support of our expert instructors and fellow meditators.",subItems:[] }] }) }
          {/* {pageDate?.offerings?.map(({ type, content }) => {
            return selectComponent(type, content)
          })} */}
         
        </div>

        {showDiv && (
          <div className="details-section " id="refund-policy">
          <h1>Enroll Now!</h1>
          <p style={{marginTop:'20px'}}>Feel free to let me know if you&apos;d like further adjustments!</p>
         
        </div>
        ) }

        
      </div>

      {showFixedDiv && (
        <div className="fixed-div">
          <span>{pageDate?.title}</span>
          {/* <button className="enroll-now-button">Enroll Now</button> */}
          <div onClick={checkHandler} className='common-btn-footer'>
            {pageDate?.dates?.length !== 0 ?
              (
                selectDate ? (
                  <Link

                    to={
                      isLoggedIn
                        ? `/enrollment/${pageDate.key}`///?date=${selectDate}
                        : `/user/sign-in/?location=${pageDate.key}`//&date=${selectDate}
                    }
                  >
                    {/* <CommonBtn text={'Enroll Now'} /> */}
                    <EnrollBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
              courseTitle: pageDate?.title,
              fees: pageDate?.fees,
              timing: pageDate?.timing,
              tenure: pageDate?.tenure,
              courseCategory: pageDate?.courseCategory,
              courseSubType: pageDate?.courseSubType,
              courseType: pageDate?.courseType,
              onlineMode: pageDate?.onlineInfo?.courseMode,
              residentialMode: pageDate?.residentialInfo?.courseMode,
              nonResidentialMode: pageDate?.nonResidentialInfo?.courseMode,
              residentialLocation: pageDate?.residentialInfo?.residentialMode,
              nonResidentialLocation: pageDate?.nonResidentialInfo?.nonResidentialMode,
              language: pageDate?.language,
              category: pageDate?.category,
              batch: pageDate?.Batch_No,
              nonResidential: pageDate?.nonResidential,
              residential: pageDate?.residential,
              online: pageDate?.online
            }) } />
                  </Link>
                ) : (
                  // scroll()
                  <Link
                    to={
                      isLoggedIn
                        ? `/enrollment/${pageDate.key}`///?date=${selectDate}
                        : `/user/sign-in/?location=${pageDate.key}`//&date=${selectDate}
                    }
                  >
                    {/* <CommonBtn text={'Enroll Now'} /> */}
                    <EnrollBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
              courseTitle: pageDate?.title,
              fees: pageDate?.fees,
              timing: pageDate?.timing,
              tenure: pageDate?.tenure,
              courseCategory: pageDate?.courseCategory,
              courseSubType: pageDate?.courseSubType,
              courseType: pageDate?.courseType,
              onlineMode: pageDate?.onlineInfo?.courseMode,
              residentialMode: pageDate?.residentialInfo?.courseMode,
              nonResidentialMode: pageDate?.nonResidentialInfo?.courseMode,
              residentialLocation: pageDate?.residentialInfo?.residentialMode,
              nonResidentialLocation: pageDate?.nonResidentialInfo?.nonResidentialMode,
              language: pageDate?.language,
              category: pageDate?.category,
              batch: pageDate?.Batch_No,
              nonResidential: pageDate?.nonResidential,
              residential: pageDate?.residential,
              online: pageDate?.online
            }) }  />
                  </Link>
                )
              ) :
              (pageDate?.key === 'samattvam' || pageDate?.key === 'satsang' || pageDate?.key === 'ma-yoga-shastra' ? <Link
                to={
                  isLoggedIn
                    ? `/enrollment/${pageDate.key}`///?date=${selectDate}
                    : `/user/sign-in/?location=${pageDate.key}`//&date=${selectDate}
                }
              >
                {/* <CommonBtn text={'Enroll Now'} /> */}
                <EnrollBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
              courseTitle: pageDate?.title,
              fees: pageDate?.fees,
              timing: pageDate?.timing,
              tenure: pageDate?.tenure,
              courseCategory: pageDate?.courseCategory,
              courseSubType: pageDate?.courseSubType,
              courseType: pageDate?.courseType,
              onlineMode: pageDate?.onlineInfo?.courseMode,
              residentialMode: pageDate?.residentialInfo?.courseMode,
              nonResidentialMode: pageDate?.nonResidentialInfo?.courseMode,
              residentialLocation: pageDate?.residentialInfo?.residentialMode,
              nonResidentialLocation: pageDate?.nonResidentialInfo?.nonResidentialMode,
              language: pageDate?.language,
              category: pageDate?.category,
              batch: pageDate?.Batch_No,
              nonResidential: pageDate?.nonResidential,
              residential: pageDate?.residential,
              online: pageDate?.online
            }) } />
              </Link> :
                (<div >
                  <div style={{ opacity: '0.4' }}>
                    {/* <CommonBtn text={'Enroll Now'} /> */}
                    <EnrollBtn text={'Enroll Now'} buttonAction={() => handleCTEnrollNowClick({
              courseTitle: pageDate?.title,
              fees: pageDate?.fees,
              timing: pageDate?.timing,
              tenure: pageDate?.tenure,
              courseCategory: pageDate?.courseCategory,
              courseSubType: pageDate?.courseSubType,
              courseType: pageDate?.courseType,
              onlineMode: pageDate?.onlineInfo?.courseMode,
              residentialMode: pageDate?.residentialInfo?.courseMode,
              nonResidentialMode: pageDate?.nonResidentialInfo?.courseMode,
              residentialLocation: pageDate?.residentialInfo?.residentialMode,
              nonResidentialLocation: pageDate?.nonResidentialInfo?.nonResidentialMode,
              language: pageDate?.language,
              category: pageDate?.category,
              batch: pageDate?.Batch_No,
              nonResidential: pageDate?.nonResidential,
              residential: pageDate?.residential,
              online: pageDate?.online
            }) } />
                  </div>
                  <div style={{ fontSize: '1.5rem', padding: '1.5rem' }}>No dates available for this course</div>
                </div>)

              )
            }

            {/* {error === 1 && (
                  <small
                    style={{
                      color: 'white',
                      marginLeft: '0',
                      position: 'relative',
                      top: '1rem',
                      left: '2rem',
                      fontSize: '1.2rem',
                    }}
                  >
                  *Please Select Date/Time!
                  </small>
                )} */}
          </div>
        </div>
      )}
    </>
  )
}

export default CourseDetails
