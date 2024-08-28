// usePageLoadEvents.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to track route changes
import {
  trackPageExitEvent,
  trackPageTimeSpentEvent,
  trackSessionStartEvent,
  trackSessionEndEvent,
  trackSearchEvent,
  trackSectionClickEvent,
} from './overallWebsiteEvents'; // Update this path based on your file structure

const usePageLoadEvents = () => {
  const location = useLocation(); // Get current location object from React Router
  const startTimeRef = useRef(null); // Ref to track start time of the current page
  const sessionIdRef = useRef(null); // Ref to store the unique session ID

  useEffect(() => {
    // Function to generate a unique session ID
    const generateSessionId = () => `session_${Math.floor(Math.random() * 1000000).toString()}`;

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
    };

    // Function to handle exit and calculate actual time spent
    const handlePageExit = () => {
      const endTime = new Date();
      const timeSpent = Math.floor((endTime - startTimeRef.current) / 1000); // Calculate time spent in seconds

      // Track page time spent with the actual time
      trackPageTimeSpentEvent(
        document.title, // Page name
        timeSpent + ' seconds', // Actual time spent on the page
        sessionStorage.getItem('unique_view_id'), // Unique view ID
        endTime.toISOString(), // Actual end time in ISO format
        window.location.href // Page URL
      );

      // Optional: Track page exit event
      trackPageExitEvent({
        pageName: document.title,
        lastPageUrl: document.referrer || 'Direct Visit',
        pageUrl: window.location.href,
      });

      // Track session end with dynamic session ID and actual end time
      trackSessionEndEvent(sessionIdRef.current, endTime.toISOString());
    };

    // Call the route change handler initially
    handleRouteChange();

    // Add event listener to capture when the page unloads
    window.addEventListener('beforeunload', handlePageExit);

    // Cleanup function
    return () => {
      // Handle page exit and remove event listeners
      handlePageExit();
      window.removeEventListener('beforeunload', handlePageExit);
    };
  }, [location]); // Dependency on location ensures this effect runs on every route change

  return null;
};

export default usePageLoadEvents;
