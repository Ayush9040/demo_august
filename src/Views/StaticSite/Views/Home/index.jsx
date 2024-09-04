/* global clevertap */

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import HeroSection from '../../Components/HeroSection'
import Legacy from '../../Components/Legacy'
import Activity from '../../Components/Activity'
import OurOfferings from '../../Components/OurOfferings'
import SocialInitiatives from '../../Components/SocialInitiatives'
import Nispand from '../../Components/NispandApp'
import Facts from '../../Components/Facts'
import Experience from '../../Components/Experience'
import VideosSection from '../../Components/Videos'
import NewsLetter from '../../Components/NewsLetter'
import Footer from '../../Components/Footer'
import Blog from '../../Components/BlogSection'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import './style.scss'
// import { v4 as uuidv4 } from 'uuid';


const Home = () => {

  const route = useLocation()
  const { isLoggedIn } = useSelector((state) => state.auth)
  console.log('isLoggedIn : ', isLoggedIn);
  
  useEffect(() => {
    if (route.hash) {
      document
        .getElementById(`${route.hash.substring(1, route.hash.length)}`)
        .scrollIntoView()
    }
  })

  const clevertap = window.clevertap;

  // useEffect(() => {
  //   // Track page view event
  //   if (window?.clevertap) {
  //     window?.clevertap?.event.push('Home Page Viewed', { pageName: 'Home Page' });
      
  //   }
  //   // console.log('ppppppppppppppppppp',window?.clevertap?.event);

  //   // Trigger CleverTap's onUserLogin to create or update the user profile
  //   clevertap.onUserLogin.push({
  //     "Site": {
  //       "Name": "Jack Montana",            // String
  //       "Identity": 61026032,              // String or number
  //       "Email": "jack@gmail.com",         // Email address of the user
  //       "Phone": "+14155551234",           // Phone (with the country code)
  //       "Gender": "M",                     // Can be either M or F
  //       "DOB": new Date(),                 // Date of Birth. Date object
  //    // optional fields. controls whether the user will be sent email, push etc.
  //       "MSG-email": false,                // Disable email notifications
  //       "MSG-push": false,                  // Enable push notifications
  //       "MSG-sms": false,                   // Enable sms notifications
  //       "MSG-whatsapp": false,              // Enable WhatsApp notifications
  //     }
  //    })

  //   // You can also track an event, like "Page Visited"
  //   clevertap?.event?.push("Page Visited", {
  //     "Page Name": "Home",  // Adjust based on your current page
  //   });

  //   console.log('Clever Tap User - ',window?.clevertap);
  // }, []);


  // useEffect(() => {
  //   const initializeCleverTap = () => {
  //     if (window?.clevertap) {
  //       // Check if onUserLogin is defined
  //       if (window.clevertap.onUserLogin && typeof window.clevertap.onUserLogin.push === 'function') {
  //         // Push user login information
  //         window.clevertap.onUserLogin.push({
  //           Site: {
  //             Name: 'Test User',
  //             Identity: '123456',  // You can adjust these values based on your needs
  //             Email: 'testuser@example.com',
  //             Phone: '+1234567890'
  //           }
  //         });

  //         // Track an event
  //         window.clevertap.event.push("Page Visited", {
  //           "Page Name": "Home",
  //         });

  //         console.log('CleverTap initialized successfully.');
  //       } else {
  //         // If onUserLogin is not defined yet, retry after a short delay
  //         console.warn('CleverTap is initialized, but onUserLogin is not available yet. Retrying...');
  //         setTimeout(initializeCleverTap, 500);  // Retry after 500ms
  //       }
  //     } else {
  //       console.error('CleverTap is not initialized.');
  //     }
  //   };

  //   // Initialize CleverTap after component mounts
  //   initializeCleverTap();

  // }, []);


  // const [sessionStartTime, setSessionStartTime] = useState(null);
  // const [sessionId, setSessionId] = useState(null);
  // const [uniqueViewId, setUniqueViewId] = useState(null);


  // const [isIdle, setIsIdle] = useState(false);
  // const [idleStartTime, setIdleStartTime] = useState(null);
  // const idleTimeLimit = 120000; // 2 minutes in milliseconds
  // const idlelocation = useLocation();

  // useEffect(() => {
  //   // Set the session start time when the component mounts
  //   setSessionStartTime(Date.now());

  //   //Generate or retrieve session ID
  //   const existingSessionId = sessionStorage.getItem('sessionId');
  //   if (existingSessionId) {
  //     setSessionId(existingSessionId);
  //   } else {
  //     // const newSessionId = uuidv4(); // Generate a unique session ID
  //     // sessionStorage.setItem('sessionId', newSessionId);
  //     // setSessionId(newSessionId);
  //   }

  //  // Generate a unique view ID for this page view
  //   // const newUniqueViewId = uuidv4();
  //   // setUniqueViewId(newUniqueViewId);

  // }, []);

  // useEffect(() => {
  //   // Calculate session duration when the component unmounts
  //   const calculateSessionDuration = () => {
  //     if (sessionStartTime) {
  //       const sessionEndTime = Date.now();
  //       const sessionDurationInSeconds = (sessionEndTime - sessionStartTime) / 1000; // Convert milliseconds to seconds
        
  //       // Ensure CleverTap is loaded and initialized
  //       if (window?.clevertap) {
  //         // Track the Page View event with dynamic data
  //         window.clevertap.event.push("Home Page", {
  //           "Page_Name": "Home_test",
  //           "Last_page_url": document.referrer || "Direct Visit",
  //           "Page_Url": window.location.href,
  //            "Session Duration": sessionDurationInSeconds,
  //           "Logged In": isLoggedIn ? "Yes" : "No",
  //           // "Session ID": sessionId,
  //           // "unique_view_id": uniqueViewId
  //         });

  //         console.log('Page view event tracked with dynamic data.', window?.clevertap.event);
  //       } else {
  //         console.error('CleverTap is not initialized.');
  //       }
  //     }
  //   };

  //   // Call the function when the component unmounts
  //   return calculateSessionDuration;
  // }, [sessionStartTime, sessionId, uniqueViewId]);


  // useEffect(() => {
  //   let idleTimer;

  //   const resetIdleTimer = () => {
  //     setIsIdle(false);
  //     clearTimeout(idleTimer);
  //     idleTimer = setTimeout(() => {
  //       setIsIdle(true);
  //       setIdleStartTime(Date.now());
  //     }, idleTimeLimit);
  //   };

  //   // Start the idle timer
  //   resetIdleTimer();

  //   // Event listeners to reset the idle timer on user interaction
  //   window.addEventListener('mousemove', resetIdleTimer);
  //   window.addEventListener('keydown', resetIdleTimer);
  //   window.addEventListener('scroll', resetIdleTimer);
  //   window.addEventListener('click', resetIdleTimer);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     clearTimeout(idleTimer);
  //     window.removeEventListener('mousemove', resetIdleTimer);
  //     window.removeEventListener('keydown', resetIdleTimer);
  //     window.removeEventListener('scroll', resetIdleTimer);
  //     window.removeEventListener('click', resetIdleTimer);
  //   };
  // }, [idlelocation]);

  // useEffect(() => {
  //   if (isIdle && idleStartTime && window?.clevertap) {
  //     const timeDuration = (Date.now() - idleStartTime) / 1000; // Convert to seconds

  //     // Trigger the CleverTap event for Idle Mode
  //     window.clevertap.event.push("Idle Mode", {
  //       "Page_Name": document.title || "Unknown Page", // Page name from title or default
  //       "Page_URL": window.location.href,  // Current page URL
  //       "Target Time Duration": idleTimeLimit / 1000,  // Target idle time in seconds
  //       "Time Duration": timeDuration,  // Actual idle time in seconds
  //       "Logged In": isLoggedIn ? "Yes" : "No"  // User login status
  //     });

  //     console.log("Idle Mode event tracked:", {
  //       "Page_Name": document.title || "Unknown Page",
  //       "Page_URL": window.location.href,
  //       "Target Time Duration": idleTimeLimit / 1000,
  //       "Time Duration": timeDuration,
  //       "Logged In": isLoggedIn ? "Yes" : "No"
  //     });
  //   }
  // }, [isIdle, idleStartTime, isLoggedIn]);

  

  return (
    <>
      { metaDataObj[route.pathname] && 
    <Helmet
      title={metaDataObj[route.pathname || '']?.title || ''}
    /> }
      <HeroSection   isUserLoggedIn={isLoggedIn} />
      <Legacy />
      <OurOfferings />
      <Activity />
      <SocialInitiatives />
      <Nispand />
      <Facts />
      <Experience />
      <Blog />
      <VideosSection />
      <NewsLetter />
      <Footer />
     
    </>
  )
}

export default Home
