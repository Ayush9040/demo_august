const clevertap = window?.clevertap;




export const trackPageExitEvent = ({ pageName, lastPageUrl, pageUrl, End_Session_Duration, sessionDuration, exitTime, uniqueViewId, timestamp }) => {

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      };
    
    
      const calculateSessionDuration = (sessionStartTime) => {
        const currentTime = new Date();
        return Math.floor((currentTime - sessionStartTime) / 1000); // Convert milliseconds to seconds
      };

const sessionStartTime = new Date();

// Generate a unique view ID for the session, if not already present
const ViewId = sessionStorage.getItem('unique_view_id') || Math.floor(Math.random() * 1000000).toString();
sessionStorage.setItem('unique_view_id', ViewId);


    clevertap.event.push('Page_Exit', {
      Page_Name: pageName,
      Last_page_url: lastPageUrl,
      Page_Url: pageUrl,
      End_Session_Duration: End_Session_Duration,
      // Session_Duration: calculateSessionDuration(sessionStartTime),
      exit_time: formatTime(new Date()),
      unique_view_id: ViewId,
      timestamp: new Date().toLocaleDateString(),
    });
  };
  
  export const trackPageTimeSpentEvent = (pageName, timeSpent, uniqueViewId, timestamp, pageUrl) => {
    clevertap.event.push('Page_Time_Spent', {
      page_name: pageName,
      time_spent: timeSpent,
      unique_view_id: uniqueViewId,
      timestamp: timestamp,
      Page_Url: pageUrl,
    });
  };


  export const trackSessionStartEvent = (sessionId, timestamp) => {
    clevertap.event.push('Session_Start', {
      session_id: sessionId,
      timestamp: timestamp,
    });
  };


  export const trackSessionEndEvent = (sessionId, timestamp) => {
    clevertap.event.push('Session_End', {
      session_id: sessionId,
      timestamp: timestamp,
    });
  };


  export const trackSearchEvent = (keyword, numberOfSearchResults) => {
    clevertap.event.push('Search', {
      Keyword: keyword,
      Number_of_Search_Results: numberOfSearchResults,
    });
  };


  export const trackSectionClickEvent = (sectionName, pageUrl) => {
    clevertap.event.push('Section_Click', {
      Section_Name: sectionName,
      Page_Url: pageUrl,
    });
  };
  
  
  
  
  