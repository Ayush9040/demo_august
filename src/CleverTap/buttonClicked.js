import { phone } from "../Views/StaticSite/assets/icons/icon";

export const handleCTCourseClick = ({
  courseTitle,
  description,
  key,
  fees,
  timing,
  tenure,
  category,
  pageName,
  courseCategory,
  courseSubType,
  onlineMode,
  residentialMode,
  nonResidentialMode,
  residentialLocation,
  nonResidentialLocation,
  courseType,
  language,
  batch,
  coursesList,
  nonResidential,
  residential,
  online
}) => {
    // Trigger CleverTap event on button click
    const urlPath = window.location.pathname; // Get the pathname from the URL
    // const pageName = urlPath.split('/').filter(Boolean).pop() || 'Home'; // Extract the last segment or default to 'Home'

      // Determine the course mode
      let courseMode = "";
      if (onlineMode) {
        courseMode = "Online";
        if (residentialMode || nonResidentialMode) {
          courseMode += ", OnCampus";
        }
      } else {
        courseMode = "OnCampus";
      }


      // Determine the course location
    let courseLocation = "NA";
    if (residentialLocation && nonResidentialLocation) {
      courseLocation = "Residential, Non-Residential";
    } else if (residentialLocation) {
      courseLocation = "Residential";
    } else if (nonResidentialLocation) {
      courseLocation = "Non-Residential";
    }

    // tenure
    if(tenure === '') {
      tenure = 'NA'
    }

    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/${pageName}`;

    if (window?.clevertap) {
      window.clevertap.event.push("Course_Clicked", {
        "Course_name": courseTitle,
        // "Enrollmentdate": "15 July - 7 Sept",
        // "Start_Date": "15 July",
        // "End_date": "7 Sept",
        "Page_name": pageName,
        "Fees_Residential_OnCampus": fees.offlineFee.residentialFee,
        "Fees_Non_Residential_OnCampus": fees.offlineFee.nonResidentialFee,
        "Fees_Online": fees.onlineFee,
        "Timings": timing,
        "Page_Url": fullUrl,
        "Tenure": tenure,
        "Course Category": courseCategory,
        "Course-SubType": courseSubType,
        "Course Mode": courseMode,
        "Course Location": courseLocation,
        "Course Type": courseType,
        "Language": language,
        // "Day_Type": "Weekend/Weekday",
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
    tenure,
    courseCategory,
    courseSubType,
    onlineMode,
    residentialMode,
    nonResidentialMode,
    residentialLocation,
    nonResidentialLocation,
    courseType,
    language,
    category,
    batch,
    nonResidential,
    residential,
    online
  }) => {

    const currentPath = window.location.pathname;

    const urlPath = window.location.pathname; // Get the pathname from the URL
    const pageName = urlPath.split('/').filter(Boolean).pop() || 'Home'; // Extract the last segment or default to 'Home'

    // Extract the portion after the last '/' and remove the leading '/'
    const extractedKey = currentPath.split('/').pop().replace(/-/g, ' ');
       // Trigger the course_viewed event when the component mounts
   // Determine the course mode
   let courseMode = "";
   if (onlineMode) {
     courseMode = "Online";
     if (residentialMode || nonResidentialMode) {
       courseMode += ", OnCampus";
     }
   } else {
     courseMode = "OnCampus";
   }


   // Determine the course location
 let courseLocation = "NA";
 if (residentialLocation && nonResidentialLocation) {
   courseLocation = "Residential, Non-Residential";
 } else if (residentialLocation) {
   courseLocation = "Residential";
 } else if (nonResidentialLocation) {
   courseLocation = "Non-Residential";
 }

 // tenure
 if(tenure === '') {
   tenure = 'NA'
 }


    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Course_Enroll_Click", {
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
        "Tenure": tenure,
        "Course Category": courseCategory,
        "Course-SubType": courseSubType,
        "Course Mode": courseMode,
        "Course Location": courseLocation,
        "Course Type": courseType,
        "Language": language,
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
    courseFee,
    mode,
    timing,
    tenure,
    courseCategory,
    courseSubType,
    onlineMode,
    residentialMode,
    nonResidentialMode,
    residentialLocation,
    nonResidentialLocation,
    courseType,
    language,
    PreRequisite,
    category,
    batch,
    nonResidential,
    residential,
    online,
    age,
    nationality,
    date
  }) => {

    const currentPath = window.location.pathname;

    // Extract the portion after the last '/' and remove the leading '/'
    const extractedKey = currentPath.split('/').pop().replace(/-/g, ' ');
       // Trigger the course_viewed event when the component mounts


  let startDate = "";
  let endDate = "";
  if (date && typeof date === 'string') {
    const dateParts = date.split(' to ');
    if (dateParts.length === 2) {
      startDate = dateParts[0]?.trim() || "";  // e.g., "3rd Jun"
      endDate = dateParts[1]?.trim() || "";    // e.g., "28th Jun 2024"
    }
  }
  
  let courseMode = "";
  if (onlineMode) {
    courseMode = "Online";
    if (residentialMode || nonResidentialMode) {
      courseMode += ", OnCampus";
    }
  } else {
    courseMode = "OnCampus";
  }


  // Determine the course location
let courseLocation = "NA";
if (residentialLocation && nonResidentialLocation) {
  courseLocation = "Residential, Non-Residential";
} else if (residentialLocation) {
  courseLocation = "Residential";
} else if (nonResidentialLocation) {
  courseLocation = "Non-Residential";
}

// tenure
if(tenure === '') {
  tenure = 'NA'
}


    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("Proceed_to_Payment", {
        "Course_name": courseTitle,
        "Enrollmentdate": date,
        "Start_Date": startDate,
        "End_date": endDate,
        "Page_name": extractedKey,
        // "Fees_Residential_OnCampus": fees.offlineFee.residentialFee,
        // "Fees_Non_Residential_OnCampus": fees.offlineFee.nonResidentialFee,
        // "Fees_Online": fees.onlineFee,
        "Fees": courseFee,
        "Timings": timing,
        "Page_Url": window.location.href,
        "Tenure": tenure,
        "Course Category": courseCategory,
        "Course-SubType": courseSubType,
        "Course Mode": mode,
        "Course Location": courseLocation,
        "Course Type": courseType,
        "Language": language,
        "PreRequisite": PreRequisite,
        // "Day_Type": "Weekend/Weekday",
        "Batch_No": batch,
        "Residential/Non-Residential": mode,
        "Age": age,
        "Nationality": nationality,
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
      window.clevertap.event.push("SignUp", {
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
    firstName,
    email,
    IsLoggedIn,
    phone,
    city,
    country,
    gender,
    dialCode
  }) => {

    const res = (email) => {
      const ans = `"${email}"`;
      console.log(ans);
      
      return ans;
    }

    const convertToInternationalFormat = (phoneNumber, dialCode) => {
      // Ensure that phoneNumber is cleaned of any non-digit characters (if needed)
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    
      // Combine the dialCode with the phoneNumber
      return `+${dialCode}${cleanedPhoneNumber}`;
    };

    let num = convertToInternationalFormat(phone,dialCode);

    let Gender;

    if(gender === "Male") {
      Gender = "M";
    }

    if(gender === "Female") {
      Gender = "F";
    }

    if(gender === "Others") {
      Gender = "O";
    }

    if (window.clevertap) {
      // User profile data


      const userProfile = {
        "Site": {
           "Name": firstName || "",                    // User's name
          "Identity": num,                  // Unique identity (User ID)
          "Email": email || "",                  // Email address
          "Phone": num || "",                  // Phone number in international format
          "Gender": Gender || "",                // Gender ("M", "F", "O")
          // "DOB": user.dob || "",                      // Date of birth in "YYYY-MM-DD" format
          // "City": user.city || "",     
          // "Age": '25',               // City
          // "Country": user.country || "",              // Country
          // "Photo": user.photoUrl || "",               // URL to the user's profile photo
          // "Custom_Property1": user.property1 || "",   // Additional custom properties
          // "Custom_Property2": user.property2 || "",
          // Add more properties as required
          "MSG-email": true,                // Disable email notifications
          "MSG-push": true,                  // Enable push notifications
          "MSG-sms": true,                   // Enable sms notifications
          "MSG-whatsapp": true,   
        }
      };


     

       const userProfile19 = {
        "Site": {
          // "Course Name": "200 Hours",
          "id_name": firstName,
          "id_email": res(email),
          "id_phone": phone,
          "City": city,
          "Country": country,
          // "Lead_Type": "SALES",
          // "Nationality": "Indian",
          //  "MSG-email": true,                // Disable email notifications
          //  "MSG-push": true,                  // Enable push notifications
          //  "MSG-sms": true,                   // Enable sms notifications
          //  "MSG-whatsapp": true,  
        },
        "Identity": num,  // This is the unique identifier for the user
        // "ObjectID": "25b08803c1af4e00839f530264dac6f8", // Optional
        "Type": "profile"
      };
  
      // Check if `onUserLogin` method is correctly set up
      if (typeof window.clevertap.onUserLogin === "object") {
        window.clevertap.onUserLogin.push(userProfile);
        window.clevertap.profile.push(userProfile19)
        console.log("User profile sent to CleverTap:", userProfile);
        console.log("profile sent to CleverTap:", userProfile19);
      } else {
        console.error("CleverTap onUserLogin is not set up correctly.");
      }
    } else {
      console.error("CleverTap is not initialized.");
    }

    // Trigger CleverTap event on button click
    if (window?.clevertap) {
      window.clevertap.event.push("SignUp", {
        "Name":firstName,
        "Email ID": email,
        "IsLoggedIn": IsLoggedIn,
        "date_time_timestamp": new Date().toISOString()
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
  fee,
  feesResidential,
  feesNonResidential,
  feesOnline,
  timings,
  tenure,
  onlineMode,
    residentialMode,
    nonResidentialMode,
    residentialLocation,
    nonResidentialLocation,
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
  date
}) => {

  let courseMode = "";
  if (onlineMode) {
    courseMode = "Online";
    if (residentialMode || nonResidentialMode) {
      courseMode += ", OnCampus";
    }
  } else {
    courseMode = "OnCampus";
  }

  let startDate1 = "";
  let endDate1 = "";
  if (date && typeof date === 'string') {
    const dateParts = date.split(' to ');
    if (dateParts.length === 2) {
      startDate1 = dateParts[0]?.trim() || "";  // e.g., "3rd Jun"
      endDate1 = dateParts[1]?.trim() || "";    // e.g., "28th Jun 2024"
    }
  }


  // Determine the course location
let courseLocation = "NA";
if (residentialLocation && nonResidentialLocation) {
  courseLocation = "Residential, Non-Residential";
} else if (residentialLocation) {
  courseLocation = "Residential";
} else if (nonResidentialLocation) {
  courseLocation = "Non-Residential";
}

// tenure
if(tenure === '') {
  tenure = 'NA'
}

  if (window?.clevertap) {
    window.clevertap.event.push("Payment_Completed_Course", {
      "Cost": cost,
      "Date of Payment":  new Date().toISOString(),
      "Centre": centre,
      "Mode of Payment": modeOfPayment,
      "Payment status": paymentStatus,
      "Course_name": courseName,
      "Course Category": courseCategory,
      "Start_Date": startDate1,
      "End_date": endDate1,
      "Page_name": pageName,
      "checkout_url": checkoutUrl,
      "Page_Url": pageUrl,
      // "Fees_Residential": feesResidential,
      // "Fees_Non_Residential": feesNonResidential,
      // "Fees_Online": feesOnline,
      "Fees": fee,
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
  fee,
  mode,
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
  date
}) => {

  let startDate1 = "";
  let endDate1 = "";
  if (date && typeof date === 'string') {
    const dateParts = date.split(' to ');
    if (dateParts.length === 2) {
      startDate1 = dateParts[0]?.trim() || "";  // e.g., "3rd Jun"
      endDate1 = dateParts[1]?.trim() || "";    // e.g., "28th Jun 2024"
    }
  }

  if (window?.clevertap) {
    window.clevertap.event.push("Payment_Failed_Course", {
      "Cost": cost,
      "Date of Payment":  new Date().toISOString(),
      "Centre": centre,
      "Mode of Payment": modeOfPayment,
      "Payment status": paymentStatus,
      "Course_name": courseName,
      "Course Category": courseCategory,
      "Start_Date": startDate1,
      "End_date": endDate1,
      "Page_name": pageName,
      "checkout_url": checkoutUrl,
      "Page_Url": pageUrl,
      // "Fees_Residential": feesResidential,
      // "Fees_Non_Residential": feesNonResidential,
      // "Fees_Online": feesOnline,
      "Fee": fee,
      "Timings": timings,
      "Tenure": tenure,
      "Course Mode": mode,
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
      "Residential/Non-Residential": mode,
    });
    console.log("Payment_Failed event tracked", window.clevertap);
  } else {
    console.error("CleverTap is not initialized.");
  }
};

export const setupUserProfile = (user) => {
  if (window.clevertap) {
    // User profile data
    const userProfile = {
      "Site": {
        "Name": user.name || "",                    // User's name
        "Identity": user.email || "",                  // Unique identity (User ID)
        "Email": user.email || "",                  // Email address
        "Phone": user.phone || "",                  // Phone number in international format
        "Gender": user.gender || "",                // Gender ("M", "F", "O")
        // "DOB": user.dob || "",                      // Date of birth in "YYYY-MM-DD" format
        "City": user.city || "",     
        "Age": '25',               // City
        "Country": user.country || "",              // Country
        // "Photo": user.photoUrl || "",               // URL to the user's profile photo
        // "Custom_Property1": user.property1 || "",   // Additional custom properties
        // "Custom_Property2": user.property2 || "",
        // Add more properties as required
        "MSG-email": true,                // Disable email notifications
        "MSG-push": true,                  // Enable push notifications
        "MSG-sms": true,                   // Enable sms notifications
        "MSG-whatsapp": true,   
      }
    };

    const userProfile2 = {
      "Site": {
        "Name": "Jack Montana",            // String
        "Identity": "AAA",              // String or number
        "Email": "jack@gmail.com",         // Email address of the user
        "Phone": "+14155551234",           // Phone (with the country code)
        "Gender": "M",                     // Can be either M or F
        "DOB": new Date(),                 // Date of Birth. Date object
     // optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": false,                // Disable email notifications
        "MSG-push": true,                  // Enable push notifications
        "MSG-sms": true,                   // Enable sms notifications
        "MSG-whatsapp": true,              // Enable WhatsApp notifications
      }
     };

    // Check if `onUserLogin` method is correctly set up
    if (typeof window.clevertap.onUserLogin === "object") {
      window.clevertap.profile.push(userProfile);
      console.log("User profile sent to CleverTap:", userProfile);
    } else {
      console.error("CleverTap onUserLogin is not set up correctly.");
    }
  } else {
    console.error("CleverTap is not initialized.");
  }
};


export const createGuestUserProfileEvent = (guest) => {
  // Check if CleverTap is available
  if (window.clevertap) {
    // Define the event properties with the provided details
    const eventProperties = {
      "Name": guest.name || '',                 // Guest User's Name
      "Email_ID": guest.email || '',            // Email Address
      "Phone_Number": guest.phone  || '',        // Phone Number
      "Address 1": guest.address1 || '',        // Address Line 1
      "Address 2": guest.address2 || '',        // Address Line 2
      "State": guest.state,               // State
      "City": guest.city,                 // City
      "Pin Code": guest.pinCode,          // Pin Code
      "Gender": guest.gender,             // Gender
      "Age": guest.age,                   // Age
      "Nationality": guest.nationality,   // Nationality
      "Medical Issues": guest.medicalIssues, // Medical Issues
      "IsRegistered": guest.isRegistered  // Registration Status (Yes/No)
      // Add more custom fields if needed
    };

    // Push the custom event to CleverTap
    window.clevertap.event.push("Guest_User_Profile", eventProperties);
  } else {
    console.error("CleverTap is not initialized.");
  }
};


export const handleCTSectionClick = ({ sectionName, pageUrl }) => {
  if (window?.clevertap) {
    window.clevertap.event.push("Section_Click", {
      "Section Name": sectionName,
      "Page_Url": pageUrl,
    });
    console.log("Section_Click event tracked successfully", window.clevertap);
  } else {
    console.error("CleverTap is not initialized.");
  }
};


export const handleAlreadySignedUpUser = ({
  phone
}) => {
  if (window.clevertap) {
    // User profile data
    const userProfile = {
      "Site": {
        // "Name": user.name || "",                    // User's name
        "Identity": phone || "",                  // Unique identity (User ID)
        // "Email": user.email || "",                // Email address
        // "Phone": phone || "",                  // Phone number in international format
        // "Gender": user.gender || "",                // Gender ("M", "F", "O")
        // "DOB": user.dob || "",                      // Date of birth in "YYYY-MM-DD" format
        // "City": user.city || "",     
        // "Age": '25',               // City
        // "Country": user.country || "",              // Country
        // "Photo": user.photoUrl || "",               // URL to the user's profile photo
        // "Custom_Property1": user.property1 || "",   // Additional custom properties
        // "Custom_Property2": user.property2 || "",
        // Add more properties as required
        // "MSG-email": true,                // Disable email notifications
        // "MSG-push": true,                  // Enable push notifications
        // "MSG-sms": true,                   // Enable sms notifications
        // "MSG-whatsapp": true,   
      }
    };

    

    // Check if `onUserLogin` method is correctly set up
    if (typeof window.clevertap.onUserLogin === "object") {
      window.clevertap.profile.push(userProfile);
      console.log("User profile sent to CleverTap:", userProfile);
    } else {
      console.error("CleverTap onUserLogin is not set up correctly.");
    }
  } else {
    console.error("CleverTap is not initialized.");
  }

   // Trigger CleverTap event on button click
   if (window?.clevertap) {
    window.clevertap.event.push("SignIn", {
      // "Name":firstName,
      // "Email ID": email,
      "phone": phone,
      // "IsLoggedIn": IsLoggedIn,
      "date_time_timestamp": new Date().toISOString()
    });

   
    
  } else {
    console.error("CleverTap is not initialized.");
  }
}


export const handleCTOnUserLoginCalled = ({
  firstName,
  email,
  IsLoggedIn,
  phone,
  city,
  country,
  gender,
  dialCode
}) => {

  const res = (email) => {
    const ans = `"${email}"`;
    console.log(ans);
    
    return ans;
  }
// console.log("firstName from handle ", firstName);
  function convertToInternationalFormat(phoneNumber, dialCode) {
    // Add a check to ensure phoneNumber and dialCode are not undefined
    if (phoneNumber && dialCode) {
      return phoneNumber.replace(dialCode, `+${dialCode}`);
    } else {
      console.error("Phone number or dial code is missing.");
      return phoneNumber; // Or handle it in another way
    }
  }

  let num = convertToInternationalFormat(phone,dialCode);

  let Gender;

  if(gender === "Male") {
    Gender = "M";
  }

  if(gender === "Female") {
    Gender = "F";
  }

  if(gender === "Others") {
    Gender = "O";
  }

  if (window.clevertap) {
    // User profile data


    const userProfile = {
      "Site": {
         "Name": firstName || "",                    // User's name
        "Identity": num,                  // Unique identity (User ID)
        "Email": email || "",                  // Email address
        "Phone": num || "",                  // Phone number in international format
        "Gender": Gender || "",                // Gender ("M", "F", "O")
        // "DOB": user.dob || "",                      // Date of birth in "YYYY-MM-DD" format
        // "City": user.city || "",     
        // "Age": '25',               // City
        // "Country": user.country || "",              // Country
        // "Photo": user.photoUrl || "",               // URL to the user's profile photo
        // "Custom_Property1": user.property1 || "",   // Additional custom properties
        // "Custom_Property2": user.property2 || "",
        // Add more properties as required
        "MSG-email": true,                // Disable email notifications
        "MSG-push": true,                  // Enable push notifications
        "MSG-sms": true,                   // Enable sms notifications
        "MSG-whatsapp": true,   
      }
    };


   

     const userProfile19 = {
      "Site": {
        // "Course Name": "200 Hours",
        "id_name": firstName,
        "id_email": res(email),
        "id_phone": phone,
        "City": city,
        "Country": country,
        // "Lead_Type": "SALES",
        // "Nationality": "Indian",
        //  "MSG-email": true,                // Disable email notifications
        //  "MSG-push": true,                  // Enable push notifications
        //  "MSG-sms": true,                   // Enable sms notifications
        //  "MSG-whatsapp": true,  
      },
      "Identity": num,  // This is the unique identifier for the user
      // "ObjectID": "25b08803c1af4e00839f530264dac6f8", // Optional
      "Type": "profile"
    };

    // Check if `onUserLogin` method is correctly set up
    if (typeof window.clevertap.onUserLogin === "object") {
      window.clevertap.onUserLogin.push(userProfile);
      window.clevertap.profile.push(userProfile19)
      console.log("User profile sent to CleverTap:", userProfile);
      console.log("profile sent to CleverTap:", userProfile19);
    } else {
      console.error("CleverTap onUserLogin is not set up correctly.");
    }
  } else {
    console.error("CleverTap is not initialized.");
  }

  // Trigger CleverTap event on button click
  // if (window?.clevertap) {
  //   window.clevertap.event.push("on User login called", {
  //     "Name":firstName,
  //     "Email ID": email,
  //     "IsLoggedIn": IsLoggedIn,
  //     "date_time_timestamp": new Date().toISOString()
  //   });

   
    
  // } else {
  //   console.error("CleverTap is not initialized.");
  // }

 
}

