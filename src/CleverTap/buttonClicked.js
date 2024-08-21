
export const handleCTCourseClick = ({
  courseTitle,
  description,
  key,
  fees,
  timing
}) => {
    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Course_Clicked", {
        "Course_name": courseTitle,
        // "Enrollmentdate": "15 July - 7 Sept",
        // "Start_Date": "15 July",
        // "End_date": "7 Sept",
        "Page_name": "TTC -200 HRS - 1 MONTH",
        "Fees_Residential_OnCampus": fees.offlineFee.residentialFee,
        "Fees_Non_Residential_OnCampus": fees.offlineFee.nonResidentialFee,
        "Fees_Online": fees.onlineFee,
        "Timings": timing,
        "Page_Url": window.location.href,
        "Tenure": "1/2/3 Month",
        "Course Category": "Self Learning/Educational",
        "Course-SubType": "Workshop",
        "Course Mode": "Online/Offline",
        "Course Location": "Residential/ Non- Residential/NA",
        "Course Type": "7 Day/21 Day/TTC/Camps & Workshops",
        "Language": "English/Hindi",
        "Day_Type": "Weekend/Weekday",
        "Batch_No": "1,2,3",
        "date_time_timestamp": "28.06.24"
      });

      console.log("Course_Clicked event tracked", window.clevertap);
      console.log("Course_Clicked event tracked timing", timing);
    } else {
      console.error("CleverTap is not initialized.");
    }
  };