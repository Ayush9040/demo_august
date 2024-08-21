
export const handleCTCourseClick = () => {
    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Course_Clicked", {
        "Course_name": "200-Hour Yoga Teacher Training Online Course - 2 Months TTC Online - English - Batch 3",
        "Enrollmentdate": "15 July - 7 Sept",
        "Start_Date": "15 July",
        "End_date": "7 Sept",
        "Page_name": "TTC -200 HRS - 1 MONTH",
        "Fees_Residential_OnCampus": "27,500",
        "Fees_Non_Residential_OnCampus": "33,000",
        "Fees_Online": "60,000",
        "Timings": "Morning: 7:00 am - 8:30 am (IST) and Evening: 6:30 pm - 8:30 pm",
        "Page_Url": "https://theyogainstitute.org/one-month-ttc",
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
    } else {
      console.error("CleverTap is not initialized.");
    }
  };