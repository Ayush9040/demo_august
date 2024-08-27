
export const handleCTCourseClick = ({
  courseTitle,
  description,
  key,
  fees,
  timing,
  category,
  batch,
  coursesList
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
        "Course Category": category,
        "Course-SubType": "Workshop",
        "Course Mode": "Online/Offline",
        "Course Location": "Residential/ Non- Residential/NA",
        "Course Type": "7 Day/21 Day/TTC/Camps & Workshops",
        "Language": "English/Hindi",
        "Day_Type": "Weekend/Weekday",
        "Batch_No": batch,
        "date_time_timestamp": new Date().toISOString()
      });

      console.log("Course_Clicked event tracked", window.clevertap);
      console.log("Course_Clicked event tracked timing", timing);
      console.log("Course_Clicked event tracked coursesList", coursesList);
    } else {
      console.error("CleverTap is not initialized.");
    }
  };

  export const handleCTEnrollNowClick = ({
    courseTitle,
    fees,
    timing,
    category,
    batch,
    nonResidential,
    residential,
    online
  }) => {

    const currentPath = window.location.pathname;

    // Extract the portion after the last '/' and remove the leading '/'
    const extractedKey = currentPath.split('/').pop().replace(/-/g, ' ');
       // Trigger the course_viewed event when the component mounts
  
       // Determine the course mode
    let courseMode = "";
    if (online) {
      courseMode = "Online";
      if (nonResidential || residential) {
        courseMode += ", Offline";
      }
    } else {
      courseMode = "Offline";
    }
  
    // Determine the course location
    let courseLocation = "NA";
    if (residential && nonResidential) {
      courseLocation = "Residential, Non-Residential";
    } else if (residential) {
      courseLocation = "Residential";
    } else if (nonResidential) {
      courseLocation = "Non-Residential";
    }
    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Enroll_Now_Clicked", {
        "Course_name": courseTitle,
        // "Enrollmentdate": "15 July - 7 Sept",
        // "Start_Date": "15 July",
        // "End_date": "7 Sept",
        "Page_name": extractedKey,
        "Fees_Residential_OnCampus": fees.offlineFee.residentialFee,
        "Fees_Non_Residential_OnCampus": fees.offlineFee.nonResidentialFee,
        "Fees_Online": fees.onlineFee,
        "Timings": timing,
        "Page_Url": window.location.href,
        // "Tenure": "1/2/3 Month",
        "Course Category": category,
        // "Course-SubType": "Workshop",
        "Course Mode": courseMode,
        "Course Location": courseLocation,
        // "Course Type": "7 Day/21 Day/TTC/Camps & Workshops",
        // "Language": "English/Hindi",
        // "Day_Type": "Weekend/Weekday",
        "Batch_No": batch,
        "date_time_timestamp": new Date().toISOString()
      });

      console.log("Course_Clicked event tracked", window.clevertap);
      console.log("Course_Clicked event tracked timing", timing);
      
    } else {
      console.error("CleverTap is not initialized.");
    }
  }


  export const handleCTProccedToPayment = ({
    courseTitle,
    fees,
    timing,
    category,
    batch,
    nonResidential,
    residential,
    online,
    date
  }) => {

    const currentPath = window.location.pathname;

    // Extract the portion after the last '/' and remove the leading '/'
    const extractedKey = currentPath.split('/').pop().replace(/-/g, ' ');
       // Trigger the course_viewed event when the component mounts


  let startDate = "";
  let endDate = "";
  if (date) {
    const dateParts = date.split(' to ');
    startDate = dateParts[0].trim();  // e.g., "3rd Jun"
    endDate = dateParts[1].trim();    // e.g., "28th Jun 2024"
  }
  
       // Determine the course mode
    let courseMode = "";
    if (online) {
      courseMode = "Online";
      if (nonResidential || residential) {
        courseMode += ", Offline";
      }
    } else {
      courseMode = "Offline";
    }
  
    // Determine the course location
    let courseLocation = "NA";
    if (residential && nonResidential) {
      courseLocation = "Residential, Non-Residential";
    } else if (residential) {
      courseLocation = "Residential";
    } else if (nonResidential) {
      courseLocation = "Non-Residential";
    }
    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Procced_To_Payment_Clicked", {
        "Course_name": courseTitle,
        // "Enrollmentdate": "15 July - 7 Sept",
        "Start_Date": startDate,
        "End_date": endDate,
        "Page_name": extractedKey,
        "Fees_Residential_OnCampus": fees.offlineFee.residentialFee,
        "Fees_Non_Residential_OnCampus": fees.offlineFee.nonResidentialFee,
        "Fees_Online": fees.onlineFee,
        "Timings": timing,
        "Page_Url": window.location.href,
        // "Tenure": "1/2/3 Month",
        "Course Category": category,
        // "Course-SubType": "Workshop",
        "Course Mode": courseMode,
        "Course Location": courseLocation,
        // "Course Type": "7 Day/21 Day/TTC/Camps & Workshops",
        // "Language": "English/Hindi",
        // "Day_Type": "Weekend/Weekday",
        "Batch_No": batch,
        "date_time_timestamp": new Date().toISOString()
      });

      console.log("Course_Clicked event tracked", window.clevertap);
      console.log("Course_Clicked event tracked timing", timing);
      
    } else {
      console.error("CleverTap is not initialized.");
    }
  }

  export const handleCTSignUp = ({
    firstName,
    email
  }) => {

    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Sign_UP_Clicked", {
        "Name":firstName,
        "Email ID": email,
        "IsLoggedIn": "False"
        // "date_time_timestamp": new Date().toISOString()
      });

     
      
    } else {
      console.error("CleverTap is not initialized.");
    }
  }

  export const handleCTSignIn = ({
    // firstName,
    email,
    IsLoggedIn
  }) => {

    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Sign_In_Clicked", {
        // "Name":firstName,
        "Email ID": email,
        "IsLoggedIn": IsLoggedIn
        // "date_time_timestamp": new Date().toISOString()
      });

     
      
    } else {
      console.error("CleverTap is not initialized.");
    }
  }


  export const handleCTCoursePaymentPageVisit = (pageUrl) => {
    if (window?.clevertap) {
        window.clevertap.event.push("Course_Payment_Page_Visit", {
            "Page_URL": pageUrl,
        });

        console.log("Course_Payment_Page_Visit event tracked", window.clevertap);
    } else {
        console.error("CleverTap is not initialized.");
    }
};


export const handleCTLocateUsDetails = ({
  instituteName,
  address,
  phoneNumber,
  websiteLink,
  emailAddress
}) => {
  if (window?.clevertap) {
      window.clevertap.event.push("LocateUs_Details", {
          "Institute_Name": instituteName,
          "Address": address,
          "Phone_Number": phoneNumber,
          "Website_Link": websiteLink,
          "Email_Address": emailAddress,
      });

      console.log("LocateUs_Details event tracked", window.clevertap);
  } else {
      console.error("CleverTap is not initialized.");
  }
};


export const handleCTPaymentCompletedCourse = ({
  cost,
  centre,
  modeOfPayment,
  paymentStatus,
  courseName,
  courseCategory,
  startDate,
  endDate,
  pageName,
  checkoutUrl,
  pageUrl,
  feesResidential,
  feesNonResidential,
  feesOnline,
  timings,
  tenure,
  courseMode,
  courseType,
  courseSubType,
  language,
  dayType,
  batchNo,
  dateTimeTimestamp,
  preRequisite,
  status,
  name,
  emailId,
  phoneNumber,
  state,
  city,
  pinCode,
  gender,
  age,
  nationality,
  medicalIssues,
  residentialStatus,
}) => {
  if (window?.clevertap) {
    window.clevertap.event.push("Payment_Completed_Course", {
      "Cost": cost,
      "Date of Payment":  new Date().toISOString(),
      "Centre": centre,
      "Mode of Payment": modeOfPayment,
      "Payment status": paymentStatus,
      "Course_name": courseName,
      "Course Category": courseCategory,
      "Start_Date": startDate,
      "End_date": endDate,
      "Page_name": pageName,
      "checkout_url": checkoutUrl,
      "Page_Url": pageUrl,
      "Fees_Residential": feesResidential,
      "Fees_Non_Residential": feesNonResidential,
      "Fees_Online": feesOnline,
      "Timings": timings,
      "Tenure": tenure,
      "Course Mode": courseMode,
      "Course Type": courseType,
      "Course-SubType": courseSubType,
      "Language": language,
      "Day_Type": dayType,
      "Batch_No": batchNo,
      "date_time_timestamp": dateTimeTimestamp,
      "Pre-requisite": preRequisite,
      "status": status,
      "Name": name,
      "Email_ID": emailId,
      "Phone_Number": phoneNumber,
      "State": state,
      "City": city,
      "Pin Code": pinCode,
      "Gender": gender,
      "Age": age,
      "Nationality": nationality,
      "Medical Issues": medicalIssues,
      "Residential/Non-Residential": residentialStatus,
    });
    console.log("Payment_Completed_Course event tracked", window.clevertap);
  } else {
    console.error("CleverTap is not initialized.");
  }
};


export const handleCTPaymentFailed = ({
  cost,
  centre,
  modeOfPayment,
  paymentStatus,
  courseName,
  courseCategory,
  startDate,
  endDate,
  pageName,
  checkoutUrl,
  pageUrl,
  feesResidential,
  feesNonResidential,
  feesOnline,
  timings,
  tenure,
  courseMode,
  courseType,
  courseSubType,
  language,
  dayType,
  batchNo,
  dateTimeTimestamp,
  preRequisite,
  status,
  name,
  emailId,
  phoneNumber,
  state,
  city,
  pinCode,
  gender,
  age,
  nationality,
  medicalIssues,
  residentialStatus,
}) => {
  if (window?.clevertap) {
    window.clevertap.event.push("Payment_Failed", {
      "Cost": cost,
      "Date of Payment":  new Date().toISOString(),
      "Centre": centre,
      "Mode of Payment": modeOfPayment,
      "Payment status": paymentStatus,
      "Course_name": courseName,
      "Course Category": courseCategory,
      "Start_Date": startDate,
      "End_date": endDate,
      "Page_name": pageName,
      "checkout_url": checkoutUrl,
      "Page_Url": pageUrl,
      "Fees_Residential": feesResidential,
      "Fees_Non_Residential": feesNonResidential,
      "Fees_Online": feesOnline,
      "Timings": timings,
      "Tenure": tenure,
      "Course Mode": courseMode,
      "Course Type": courseType,
      "Course-SubType": courseSubType,
      "Language": language,
      "Day_Type": dayType,
      "Batch_No": batchNo,
      "date_time_timestamp": dateTimeTimestamp,
      "Pre-requisite": preRequisite,
      "status": status,
      "Name": name,
      "Email_ID": emailId,
      "Phone_Number": phoneNumber,
      "State": state,
      "City": city,
      "Pin Code": pinCode,
      "Gender": gender,
      "Age": age,
      "Nationality": nationality,
      "Medical Issues": medicalIssues,
      "Residential/Non-Residential": residentialStatus,
    });
    console.log("Payment_Failed event tracked", window.clevertap);
  } else {
    console.error("CleverTap is not initialized.");
  }
};

