// usePageLoadEvents.js
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageExitEvent,
  trackPageTimeSpentEvent,
  trackSessionStartEvent,
  trackSessionEndEvent,
} from './overallWebsiteEvents'; // Update this path based on your file structure

const usePageLoadEvents = () => {
  const location = useLocation();
  const startTimeRef = useRef(null);
  const sessionIdRef = useRef(null);
  const [isIdle, setIsIdle] = useState(false);
  const [idleStartTime, setIdleStartTime] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(Date.now());
  const idleTimeLimit = 120000; // Idle time limit in milliseconds (e.g., 2 minutes)
  const isLoggedIn = true; // Replace with your actual login status check

  // Function to generate a unique session ID
  const generateSessionId = () => `session_${Math.floor(Math.random() * 1000000).toString()}`;

  // Function to track the Page View event
  const trackPageViewEvent = (sessionDurationInSeconds) => {
    if (window?.clevertap) {
      window.clevertap.event.push("Page View", {
        "Page_Name": document.title || "Unknown Page",
        "Last_page_url": document.referrer || "Direct Visit",
        "Page_Url": window.location.href,
        "Session Duration": sessionDurationInSeconds,
        "Logged In": isLoggedIn ? "Yes" : "No",
      });
      console.log('Page view event tracked with dynamic data.', window?.clevertap.event);
    } else {
      console.error('CleverTap is not initialized.');
    }
  };

  // Function to track the Idle Mode event
  const trackIdleModeEvent = (timeDuration) => {
    if (window?.clevertap) {
      window.clevertap.event.push("Idle Mode", {
        "Page_Name": document.title || "Unknown Page",
        "Page_URL": window.location.href,
        "Target Time Duration": idleTimeLimit / 1000,  // Target idle time in seconds
        "Time Duration": timeDuration,  // Actual idle time in seconds
        "Logged In": isLoggedIn ? "Yes" : "No",
      });

      console.log("Idle Mode event tracked:", {
        "Page_Name": document.title || "Unknown Page",
        "Page_URL": window.location.href,
        "Target Time Duration": idleTimeLimit / 1000,
        "Time Duration": timeDuration,
        "Logged In": isLoggedIn ? "Yes" : "No",
      });
    } else {
      console.error('CleverTap is not initialized.');
    }
  };

  // Function to handle CleverTap events when the route changes
  const handleRouteChange = () => {
    const pageName = document.title;
    const lastPageUrl = document.referrer || 'Direct Visit';
    const pageUrl = window.location.href;

    // Generate a session ID if not already created
    if (!sessionIdRef.current) {
      sessionIdRef.current = generateSessionId();
    }

    // Record the start time when the route changes
    startTimeRef.current = new Date();

    // Track session start with dynamic session ID and actual start time
    trackSessionStartEvent(sessionIdRef.current, startTimeRef.current.toISOString());

    // Call page view event on route change
    trackPageViewEvent(0); // Initially, duration is 0 as the user just loaded the page
  };

  // Function to handle exit and calculate actual time spent
  const handlePageExit = () => {
    const endTime = new Date();
    const timeSpent = Math.floor((endTime - startTimeRef.current) / 1000); // Calculate time spent in seconds

    // Track page time spent with the actual time
    trackPageTimeSpentEvent(
      document.title,
      timeSpent + ' seconds',
      sessionStorage.getItem('unique_view_id'),
      endTime.toISOString(),
      window.location.href
    );

    // Track page exit event
    trackPageExitEvent({
      pageName: document.title,
      lastPageUrl: document.referrer || 'Direct Visit',
      pageUrl: window.location.href,
    });

    // Track session end with dynamic session ID and actual end time
    trackSessionEndEvent(sessionIdRef.current, endTime.toISOString());

    // Track page view event with session duration
    const sessionDurationInSeconds = (endTime - sessionStartTime) / 1000;
    trackPageViewEvent(sessionDurationInSeconds);
  };

  // Effect to handle route change events
  useEffect(() => {
    handleRouteChange();
    window.addEventListener('beforeunload', handlePageExit);
    return () => {
      handlePageExit();
      window.removeEventListener('beforeunload', handlePageExit);
    };
  }, [location]);

  // Effect to handle idle mode detection and event tracking
  useEffect(() => {
    let idleTimer;

    const resetIdleTimer = () => {
      setIsIdle(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setIsIdle(true);
        setIdleStartTime(Date.now());
      }, idleTimeLimit);
    };

    // Start the idle timer
    resetIdleTimer();

    // Event listeners to reset the idle timer on user interaction
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);
    window.addEventListener('click', resetIdleTimer);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      window.removeEventListener('scroll', resetIdleTimer);
      window.removeEventListener('click', resetIdleTimer);
    };
  }, [location]);

  // Effect to track idle mode when the user is idle
  useEffect(() => {
    if (isIdle && idleStartTime) {
      const timeDuration = (Date.now() - idleStartTime) / 1000; // Convert to seconds
      trackIdleModeEvent(timeDuration);
    }
  }, [isIdle, idleStartTime]);

  return null;
};

export default usePageLoadEvents;
