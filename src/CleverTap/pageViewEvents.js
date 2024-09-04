export const trackCourseView = ({
    pageName,
    lastPageUrl,
    pageUrl,
    sessionDuration,
    isLoggedIn,
    sessionId,
    uniqueViewId,
}) => {


    if (window?.clevertap) {
        // Track the Page View event with dynamic data
        window.clevertap.event.push(pageName, {
          "Page_Name": pageName,
          "Last_page_url": lastPageUrl || "Direct Visit",
          "Page_Url": pageUrl,
           "Session Duration": sessionDuration,
          "Logged In": isLoggedIn,
          "Session ID": sessionId,
          "unique_view_id": uniqueViewId
        });

        console.log('Page view event tracked with dynamic data.', window?.clevertap.event);
      } else {
        console.error('CleverTap is not initialized.');
      }

    // Trigger the event (replace this with your actual event tracking logic, e.g., sending it to CleverTap)
    // console.log('Page View Event:', pageViewEvent);
}



export const idleMode = ({
    pageName,
    pageUrl,
    targetTimeDuration,
    timeDuration,
    isLoggedIn
}) => {


    if (window?.clevertap) {
        // Track the Page View event with dynamic data
        window.clevertap.event.push(pageName, {
          "Page_Name": pageName,
          "Page_Url": pageUrl,
          "Target Time Duration": targetTimeDuration,
          "Time Duration": timeDuration,
          "Logged In": isLoggedIn,
        });

        console.log('Page view event tracked with dynamic data.', window?.clevertap.event);
      } else {
        console.error('CleverTap is not initialized.');
      }

    // Trigger the event (replace this with your actual event tracking logic, e.g., sending it to CleverTap)
    // console.log('Page View Event:', pageViewEvent);
}
