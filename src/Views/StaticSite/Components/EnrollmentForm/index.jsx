import React, { useState, useEffect } from 'react'
import './formstyles.scss'
// import { courseArray } from '../../Constants/courses/c200hr'
import { AllCourses, alibaugArr } from '../../Views/Courses/Constants/courses'
import { useParams } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import DisclaimerPolicy from '../DisclaimerPolicy'
import { useDispatch, useSelector } from 'react-redux'
import Personal from './Personal'
import { legacy2 } from '../../assets/icons/icon'
import { authBaseDomain, cmsBaseDomain, razorPayKey } from '../../../../Constants/appSettings'
import axios from 'axios'
import { handleCTProccedToPayment } from '../../../../CleverTap/buttonClicked'
import { trackPageView } from '../../../../CleverTap/pageViewEvents'
import { handleCTCoursePaymentPageVisit, handleCTPaymentCompletedCourse, handleCTPaymentFailed, setupUserProfile, triggerCourseEvent, triggerCourseEventFor21DaysCourse, triggerCourseEventFor7DaysCourse } from '../../../../CleverTap/buttonClicked'
import EnrollmentForm from './EnrollmentForm'
import ReactGA from 'react-ga4';
import { fetchUserData } from '../../Views/Authentication/Auth.actions'

const Enrollment = () => {
  const { user } = useSelector((state) => state.auth)
  const { courseId } = useParams()
  const [currentCourse, setCurrentCourse] = useState({})
  const [courseDate, setCourseDate] = useState(null)
  const [Params] = useSearchParams()
  const navigate = useNavigate()
  const [isEditStudentOpen, setEditStudentOpen] = useState(false);
  const addressLine1 = useSelector((state) => state.auth.user.data?.addressLine1);
  const addressLine2 = useSelector((state) => state.auth.user.data?.addressLine2);
  const pincodeFromRedux = useSelector((state) => state.auth.user.data?.pincode);
  const countryFromRedux = useSelector((state) => state.auth.user.data?.country);
  const stateFromRedux = useSelector((state) => state.auth.user.data?.state);
  const genderFromRedux = useSelector((state) => state.auth.user.data?.gender);
  const dispatch = useDispatch();
  useEffect(() => {
    let currentCrs = AllCourses.find((item) => item.key === courseId)
    if (!currentCrs) {
      let aliCourse = alibaugArr.find((item) => item.key === courseId)
      setCurrentCourse(aliCourse)
      setCourseDate(Params.get('date'))
      localStorage.removeItem('courseEndDate')
    }
    else {
      setCurrentCourse(currentCrs)
      setCourseDate(Params.get('date'))
      localStorage.removeItem('courseEndDate')
    }
    // setDate(
    //   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    // )
  }, [])

  const [empty, setEmpty] = useState(0)
  const [courseFee, setCourseFee] = useState(null)
  const [bold, setBold] = useState(0)
  const [listData, setListData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [courseAsset1, setCourseAsset1] = useState(null)
  const [courseAsset2, setCourseAsset2] = useState(null)
  const [uploadCheck, setUploadCheck] = useState(true)


  const [sessionId, setSessionId] = useState('');
  const [startTime, setStartTime] = useState(0);
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    name: user?.data?.firstName,
    lname: '',
    phone: '',
    email: user?.data?.email,
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    AGE: '',
    nationality: '',
    gender: '',
    school: '',
    course: '',
    completion: '',
    company: '',
    worktill: '',
    workfrom: '',
    leavejob: '',
    resignation: '',
    medicalstatus: '',
    sourceinfo: '',
    source: '',
    purpose: '',
    info: '',
    mode: '',
    residental: '',
    sdate: '',
    terms: '',
    startDate: '',
    endDate: '',
    months: '',
    endDateFormat: ''
  })

  const handleEmpty1 = (e) => {
    e.preventDefault()
  }
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number); // Split the date string and convert parts to numbers
    // Create a new Date object (months are 0-based, so subtract 1 from month)
    return new Date(year, month - 1, day);
  }

  function dateDurationChange(months) {
    console.log("Months ", months);
    let originalFee = AllCourses.find((item) => item.key === courseId)
    // alert(originalFee?.fees?.onlineFee,months )
    if (originalFee?.fees?.onlineFee && months) {
      let newAmnt = originalFee?.fees?.onlineFee * months
      if (months == 12) {
        newAmnt = newAmnt - 2200
      }

      setCurrentCourse(prevData => ({
        ...prevData,
        fees: {
          ...prevData.fees,
          onlineFee: newAmnt,
          nonResidentialFee: newAmnt,
        }
      }));
      setCourseFee(newAmnt)
    }
  }

  const setEndDate = (months, startDate) => {
    let endDate = formatDate(addMonths(parseDate(startDate), months))
    let originalFee = AllCourses.find((item) => item.key === courseId)
    let newAmnt = originalFee?.fees?.onlineFee * months
    if (months == 12) {
      newAmnt = newAmnt - 2200
    }

    setCurrentCourse(prevData => ({
      ...prevData,
      fees: {
        ...prevData.fees,
        onlineFee: newAmnt,
        nonResidentialFee: newAmnt,
      }
    }));
    setFormData((prev) => {
      return { ...prev, endDateFormat: endDate }
    })
    // alert(endDate)
    setCourseFee(newAmnt)
  }
  // Function to add months to a given date
  function addMonths(startDate, months) {
    const date = startDate; // Create a Date object from the start date
    // date.setMonth(date.getMonth() + months); // Add the number of months
    // console.log(date);
    let totalDays = months * 30
    date.setDate(date.getDate() + (totalDays - 1));
    return date;
  }
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0'); // Day with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month with leading zero
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    localStorage.setItem('addressDataNew', JSON.stringify({
      address1: addressLine1 || '',
      address2: addressLine2 || '',
      country: countryFromRedux || '',
      state: stateFromRedux || '',
      pincode: pincodeFromRedux || '',
      gender: genderFromRedux || ''
    }));
  }, [])

  const [mail, setmail] = useState(null)
  const [isLoad, setIsLoad] = useState(false);


  const pickMail = () => {
    if (formData.mode === 'ONLINE') {
      setmail(currentCourse?.templateId?.templateOnline)
      return currentCourse?.templateId?.templateOnline
    } else if (formData.mode === 'OFFLINE' && formData.residental === '') {
      setmail(currentCourse?.templateId?.templateOnline)
      return currentCourse?.templateId?.templateOnline
    } else {
      if (formData.residental === 'RESIDENTIAL') {
        console.log(currentCourse?.templateId?.templateOffline?.templateResidential)
        setmail(currentCourse?.templateId?.templateOffline?.templateResidential)
        return currentCourse?.templateId?.templateOffline?.templateResidential
      } else {
        setmail(currentCourse?.templateId?.templateOffline?.templateNonResidential)
        return currentCourse?.templateId?.templateOffline?.templateNonResidential
      }
    }
  }


  const handleSubmit1 = async () => {
    const allowedUrls = [
      "/asana-regular-classes-on-campus",
      "/asana-regular-classes-on-campus-women",
      "/asana-regular-classes-online",
      "/weekend-classes",
      "/weekend-classes-online",
      "/childrens-regular-classes",
      "/childrens-weekend-classes-on-campus",
      "/advanced-regular-yoga-classes",
      "/meditation-foundation-course-online",
      "/regular-meditation-classes-online",
      "/couples-classes",
      // "/IBY-course",
      "/regular-pregnacy-classes",
      "/department-of-rehabilitation-and-physiotherapy",
      // "/healthy-weightloss-wellness-retreat",
      // "/deep-dive-yoga-meditation-retreat",
      // "/forest-yoga-retreat"
    ];

    const list21DaysCourse = [
      "/21-days-better-living-course",
      "/21-days-better-living-course-batch-2",
      "/21-days-better-living-course-batch-3",
    ]

    const list7DaysCourse = [
      "/7-days-camp-english",
      "/7-days-camp",
    ]

    const isOneMonthTTC = () => {
      return window.location.pathname.includes('/one-month-ttc');
    }

    const isPartTimeTTCOnCampusEnglish = () => {
      return window.location.pathname === '/enrollment/200-hrs-part-time-ttc-on-campus-english';
    }

    const isPartTimeTTCOnlineEnglish = () => {
      return window.location.pathname === '/enrollment/200-hrs-part-time-ttc-online-english';
    }


    const isPartTimeTTCOnline = () => {
      return window.location.pathname === '/enrollment/200-hrs-part-time-ttc-online';
    }

    const isWeekendTeacherTraining = () => {
      return window.location.pathname.includes('/weekend-teacher-training-course');
    }

    const isTwoYearTTC = () => {
      return window.location.pathname.includes('/two-year-ttc');
    }

    const isOneYearTTC = () => {
      return window.location.pathname.includes('/one-year-ttc');
    }

    const isThreeMonthAdvanceTTC = () => {
      return window.location.pathname.includes('/3-months-advanced-teacher-training-course');
    }

    

    const isNineHundredHourAdvanceTTC = () => {
      return window.location.pathname.includes('/900-hours-advanced-teacher-training-course');
    }

    const isSevenMonthTTC = () => {
      return window.location.pathname.includes('/seven-month-ttc');
    }

    const isFiveOnlineTTC = () => {
      return window.location.pathname.includes('/500-hrs-online-yoga-teacher-training-course-intermediate-level');
    }

    const isChildRegular = () => {
      return window.location.pathname === '/enrollment/childrens-regular-classes';
    }

    const isWeekendAsanaClasses = () => {
      return window.location.pathname === '/enrollment/childrens-weekend-classes-on-campus';
    }

    const isAdvanceRegular = () => {
      return window.location.pathname === '/enrollment/advanced-regular-yoga-classes';
    }

    const isSevenDayCamp = () => {
      return window.location.pathname === '/enrollment/7-days-camp';
    }

    const isSevenDayEnglish = () => {
      return window.location.pathname === '/enrollment/7-days-camp-english';
    }

    const isTwentyOneBetterLiving = () => {
      return window.location.pathname === '/enrollment/21-days-better-living-course';
    }

    const isTwentyOneBetterLivingBatchTwo = () => {
      return window.location.pathname === '/enrollment/21-days-better-living-course-batch-2';
    }

    const isTwentyOneBetterLivingBatchThree = () => {
      return window.location.pathname === '/enrollment/21-days-better-living-course-batch-3';
    }

    const isBatchSix = () => {
      return window.location.pathname === '/enrollment/200-hrs-part-time-ttc-online-batch-6';
    }

    

    


    
    
    // Function to check if the current URL includes any allowed URL
    const shouldTriggerEvent = () => {
      return allowedUrls.some(path => window.location.pathname.includes(path));
    };

    const is21DaysCourseshouldTriggerEvent = () => {
      return list21DaysCourse.some(path => window.location.pathname.includes(path));
    };

    const is7DaysCourseshouldTriggerEvent = () => {
      return list7DaysCourse.some(path => window.location.pathname.includes(path));
    };

    

    // alert('RAzor')
    localStorage.setItem('courseName', currentCourse.title)
    if (!isNaN(courseFee)) {
      localStorage.setItem('courseFee', courseFee)
    }

    localStorage.setItem('courseStartDate', formData.sdate)
    console.log("From Razor ", formData)
    if (formData.terms === false) {
      // alert("20")
      setEmpty(19);
    } else {
      setIsLoad(true);
      const identityKey = `+${user.data.dialCode}${user.data.phoneNumber}`;
      // const identityKey = '++919035435720';
      const identityVerified = identityKey.includes('++')
  ? `+${user.data.dialCode}${user.data.phoneNumber}`
  : `+${user.data.dialCode}${user.data.phoneNumber}`;
      let body = {
        personalDetails: {
          name: formData.name,
          emailId: formData.email,
          phone: identityVerified,
          addressLane1: formData.address1,
          addressLane2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode,
          gender: formData.gender?.toUpperCase(),
          age: formData.AGE,
          nationality: formData.nationality,
          identity: identityVerified
        },
        startDate: formData.startDate,
        // endDate: formData.endDateFormat,
        endDate: localStorage.getItem('courseEndDate') ? localStorage.getItem('courseEndDate') : null,
        academicQualification: qualificationData,
        workExperience: listData,
        others: {
          medicalHistory: formData.medicalstatus,
          howDoYouHearAboutUs: formData.source || formData.sourceinfo,
        },
        courseDetails: {
          courseId: currentCourse.key,
          courseName: currentCourse.title,
          mode: formData.mode,
          subMode: formData.residental,
          batch: currentCourse.batch,
          imageAsset: courseAsset1,
          certificateImgAsset: courseAsset2,
          // date:courseDate,
          date: formData.sdate,
          timing: currentCourse.timing
        },
        userId: localStorage.getItem('userAppId') ? localStorage.getItem('userAppId') : null
      }
      let body1 = {
        personalDetails: {
          name: formData.name,
          emailId: formData.email,
          phone: identityVerified,
          addressLane1: formData.address1,
          addressLane2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode,
          gender: formData.gender?.toUpperCase(),
          age: formData.AGE,
          nationality: formData.nationality,
          identity:identityVerified
        },
        startDate: formData.startDate,
        endDate: localStorage.getItem('courseEndDate') ? localStorage.getItem('courseEndDate') : null,
        academicQualification: qualificationData,
        workExperience: listData,
        others: {
          medicalHistory: formData.medicalstatus,
          howDoYouHearAboutUs: formData.source || formData.sourceinfo,
        },
        courseDetails: {
          courseId: currentCourse.key,
          courseName: currentCourse.title,
          mode: formData.mode,
          batch: currentCourse.batch,
          imageAsset: courseAsset1,
          certificateImgAsset: courseAsset2,
          // date:courseDate,
          date: formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
          timing: currentCourse.timing
        },
        userId: localStorage.getItem('userAppId') ? localStorage.getItem('userAppId') : null
      }

      console.log(mail)

      let mailTemplate;

      // let mailTemplate = {
      //   type: 'INFO_TYI',
      //   HTMLTemplate: pickMail(),
      //   subject: 'Enrollment Confirmation',
      //   data: {
      //     name: formData.name
      //   },
      //   receivers: [formData.email, 'info@theyogainstitute.org']
      // }

      const identityKey2 = `+${user.data.dialCode}${user.data.phoneNumber}`;

      const identityVerified2 = identityKey2.includes('++')
  ? `+${user.data.dialCode}${user.data.phoneNumber}`
  : `+${user.data.dialCode}${user.data.phoneNumber}`;



if (isOneMonthTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE200_1M_ONLINE_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"200-Hour Yoga Teacher Training Course - 1 Month Yoga TTC Online & On Campus - English - Batch 1",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "10:00 am to 6:00 pm ",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}

  
} else if (isPartTimeTTCOnCampusEnglish()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE_200_HRS_ONLINE_CONFIRMATION_MAIL",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"200 Hours Yoga Teacher Training Course - 2 Months Yoga TTC Online and On Campus - English - Batch 2",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Friday",
        time: "12:00 noon - 4:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if (isPartTimeTTCOnlineEnglish()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE200_2M_ONLINE_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"200-Hour Yoga Teacher Training Online Course - 2 Months TTC Online - English - Batch 3",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Friday",
        time: "Morning: 7:00 am - 8:30 am and Evening : 6:30 pm - 8:30 pm ",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if (isPartTimeTTCOnline()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE200_2M_ONLINE_HINDI_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"200 Hours Hindi Teacher Training Course - 2 Months TTC Online - Hindi - Batch 4",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "1:00 pm - 4:30 pm ",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if (isWeekendTeacherTraining()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE200_WEEKEND_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"200 Hours Yoga TTC  - 3 Months Weekend Yoga Teacher Training Course Online - English - Batch 5",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Saturday & Sunday",
        saturdayTime: "10:00 am – 8:30 pm ",
        sundayTime: "10:00 am – 1:30 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
 
} else if (isTwoYearTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE900_2Y_ON_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"900 Hours YTTC - 2 Years Advanced Yoga Teacher Training Certificate Course Online & On Campus - English",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Saturday & Sunday",
        saturdayTime: "4:30 pm – 7.30 pm ",
        sundayTime: "9:30 am – 1:30 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if (isOneYearTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE900_1Y_ON_HINDI_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"900 Hours Yoga TTC - 1 Year Advanced Yoga Teacher Training Course Online & On-Campus - Hindi",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Friday",
        time: "1:30 pm - 4:00 pm ",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
 
} else if(isThreeMonthAdvanceTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE900_3M_ONLINE_NONRES_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"900 Hours Yoga TTC - 3 Months Teacher Training Course On Campus - English",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "6:30 am to 8:00 pm ",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}

} else if(isNineHundredHourAdvanceTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE900_4M_ON_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"900 Hours Yoga TTC - 4 Months Online Yoga Teacher Training Course - English",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "7:00 am to 9:00 am ",
        eveningTime: "4:30 pm to 8:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isSevenMonthTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE900_7M_ON_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"900 Hours Yoga TTC - 7 Months Yoga Teacher Training Course Online & On Campus - English",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "5:00 p.m. - 8:00 p.m.",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isFiveOnlineTTC()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE500_3M_ON_TTC",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"500-Hour Yoga Teacher Training Online Course - 3 Months Yoga TTC - English",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "7:00 am - 8:30 am ",
        eveningTime: "4:30 pm - 8:30 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isChildRegular()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE_ADVANCED_CHILDREN",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"Children\'s Yoga Classes (Regular) - On Campus",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Mon, Tues, Thurs, Fri",
        time: "4:00 pm -5:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isWeekendAsanaClasses()) {
  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE_ADVANCED_CHILDREN_WEEKEND",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"Children\'s Weekend Yoga Class - On Campus",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Saturday & Sunday",
        time: "8:00 am - 9:30 am",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
} else if(isAdvanceRegular()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "ADVANCED_REGULAR_YOGA_CLASS_1",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday, Wednesday, Friday, Tuesday, Thursday & Saturday",
        time: "Morning: 6:30 am - 8:00 am, Evening: 5:30 pm - 7:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}

} else if(isSevenDayCamp()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "CAMP_FOR_7_DAYS_HEALTH_HINDI",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"7 Days Health Camp - On Campus - Yoga Camp - Hindi",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Saturday to Friday",
        time: "7:00 am - 7:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isSevenDayEnglish()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "CAMP_FOR_7_DAYS_HEALTH",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"7 Days Health Camp - On Campus - Yoga Camp - English",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Saturday to Friday",
        time: "7:00 am - 7:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isTwentyOneBetterLiving()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "CAMP_FOR_21_DAYS_BATCH_1",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"21-Days Better Living Yoga Course - Morning Online and On Campus – English - Batch 1",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Sunday to Saturday",
        time: "Morning: 7:00 am – 8:30 am",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isTwentyOneBetterLivingBatchTwo()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "CAMP_FOR_21_DAYS_BATCH_2",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"21-Days Better Living Yoga Course - Evening - Online & On Campus – English - Batch 2",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Sunday to Saturday",
        time: "Evening 6:30 pm – 8:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}
  
} else if(isTwentyOneBetterLivingBatchThree()) {
  
  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "CAMP_FOR_21_DAYS_BATCH_3",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"21-Days Better Living Yoga Course - Evening - Online & On Campus – Hindi - Batch 3",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Sunday to Saturday",
        time: "Evening 6:30 pm – 8:00 pm",
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}

} else if(isBatchSix()) {

  mailTemplate = {
    type: "INFO_TYI",
    HTMLTemplate: "COURSE200_2M_ONLINE_TTC_BATCH_6",
    subject: "🧘‍♂️ Your Yogic Journey Begins Here – The Yoga Institute Welcomes You 🌿",
    data: {
      fullName: formData.name,
        emailId: formData.email,
        phoneNumber:identityVerified2,
        gender: formData.gender?.toUpperCase(),
        country:formData.country,
        courseName:"200-Hour Yoga Teacher Training Online Course - 3 Months TTC Online - English - Batch 6",
        modeOfAttending:formData.mode,
        batchStartDate:formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate,
        days:"Monday to Saturday",
        time: "5:00 am to 7:30 am", 
        timeZone:'IST'

    },
    receivers: [
      formData.email
    ]
}

}
 else {

  mailTemplate = {
    type: 'INFO_TYI',
    HTMLTemplate: pickMail(),
    subject: 'Enrollment Confirmation',
    data: {
      name: formData.name
    },
    receivers: [formData.email, 'info@theyogainstitute.org']
  }

}


      
      


      // let mailTemplate = {
      //   type: 'INFO_TYI',
      //   HTMLTemplate: pickMail(),
      //   subject: 'Enrollment Confirmation',
      //   data: {
      //     name: formData.name
      //   },
      //   receivers: [formData.email, 'info@theyogainstitute.org']
      // }

      try {
        let response
        if (formData.mode === 'ONLINE' || (currentCourse.residential === false && currentCourse.nonResidential === false)) {
          response = await axios.post(
            `${cmsBaseDomain}/forms`,
            body1
          )
          // setIsLoad(false);
        } else {
          response = await axios.post(
            `${cmsBaseDomain}/forms`,
            body
          )
          // setIsLoad(false);
        }

        if (response?.data?.success) {
          if (currentCourse.key !== 'satsang' && currentCourse.key !== 'samattvam' && currentCourse.key !== 'fullmoon-meditation' && currentCourse.key !== 'yoga-by-the-bay' && currentCourse.key != 'department-of-rehabilitation-and-physiotherapy') { //for residential no payment required
            //  && localStorage.getItem('isResidential') == 'false'
            const paymentOrderResponse = await axios.post(`${cmsBaseDomain}/payment/order?enrollmentFormId=${response.data.data['_id']}`, {
              amount: localStorage.getItem('courseFee'),
              notes: currentCourse.metaDescription,
              objectType: 'ENROLLMENT'
            })
            setIsLoad(false);
            if (!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id) return 0
            const options = {
              // key: 'rzp_test_hWMewRlYQKgJIk', 
              // Enter the Key ID generated from the Dashboard
              key: razorPayKey,
              amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: 'INR',
              name: 'The Yoga Institute',
              description: 'Course Transaction',
              // image: 'https://example.com/your_logo', // un comment and add TYI logo
              order_id: paymentOrderResponse.data.id, // eslint-disable-line
              handler: async (res) => {
                // Navigare to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
                if (res.razorpay_payment_id && res.razorpay_order_id && res.razorpay_signature) {
                  if (currentCourse.key !== 'detox-cleanse-yoga-retreat' && currentCourse.key !== 'deep-dive-yoga-meditation-retreat' && currentCourse.key !== 'forest-yoga-retreat' && currentCourse.key !== 'healthy-weightloss-wellness-retreat' && currentCourse.key != '2-days-relax-restore-yoga-retreat') {//no need to send mail 
                    await axios.post(`${authBaseDomain}/ali/mail`, mailTemplate)

                  }
                  // console.log('sssssssss',currentCourse?.courseName);

                  

                  handleCTPaymentCompletedCourse({
                    // cost,
                    // centre,
                    // modeOfPayment,
                    paymentStatus: "Success",
                    courseName: currentCourse?.courseName,
                    courseCategory: currentCourse?.courseCategory,
                    startDate: formData.sdate,
                    endDate: formData.sdate,
                    date: formData.sdate,
                    pageName: window.location.href,
                    checkoutUrl: window.location.href,
                    pageUrl: window.location.href,
                    // feesResidential: currentCourse?.fees?.offlineFee.residentialFee,
                    // feesNonResidential: currentCourse?.fees?.offlineFee.nonResidentialFee,
                    // feesOnline: currentCourse?.fees?.onlineFee,
                    fee: courseFee,
                    timings: currentCourse.timing,
                    tenure: currentCourse?.tenure,
                    onlineMode: currentCourse?.onlineInfo?.courseMode,
                    residentialMode: currentCourse?.residentialInfo?.courseMode,
                    nonResidentialMode: currentCourse?.nonResidentialInfo?.courseMode,
                    residentialLocation: currentCourse?.residentialInfo?.residentialMode,
                    nonResidentialLocation: currentCourse?.nonResidentialInfo?.nonResidentialMode,
                    courseType: currentCourse?.courseType,
                    courseSubType: currentCourse?.courseSubType,
                    language: currentCourse?.language,
                    mode: formData.mode,
                    // dayType,
                    batchNo: currentCourse.batch,
                    // dateTimeTimestamp,
                    preRequisite: currentCourse?.preRequisite,
                    status: "Success",
                    name: formData.name,
                    emailId: formData.email,
                    phoneNumber: formData.phone,
                    state: formData.state,
                    city: formData.city,
                    pinCode: formData.pincode,
                    gender: formData.gender?.toUpperCase(),
                    age: formData.AGE,
                    nationality: formData.nationality,
                    // medicalIssues,
                    // residentialStatus,
                  })

                  if(shouldTriggerEvent()) {
                    triggerCourseEvent({
                      userName: formData.name, 
                      startTime: formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate, 
                      endTime: formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate, 
                      startDate: formData.startDate, 
                      endDate: localStorage.getItem('courseEndDate') ? localStorage.getItem('courseEndDate') : null, 
                      selectedTime: formData.sdate != 'No date Selected' ? formData.sdate : formData.startDate, 
                      courseName: currentCourse.title, 
                      courseUrl: window.location.href,
                    })
                  }

                  if(is21DaysCourseshouldTriggerEvent()) {
                    triggerCourseEventFor21DaysCourse({
                      userName: formData.name, 
                      startDate: formData.sdate, 
                      endDate: formData.sdate, 
                      courseName: currentCourse.title, 
                      courseUrl: window.location.href,
                    })
                  }

                  if(is7DaysCourseshouldTriggerEvent()) {
                    triggerCourseEventFor7DaysCourse({
                      userName: formData.name, 
                      startDate: formData.sdate, 
                      endDate: formData.sdate, 
                      courseName: currentCourse.title, 
                      courseUrl:window.location.href
                    })
                  }

                  

                  ReactGA.event('purchase', {
                    currency: 'INR',
                    value: courseFee,
                    transaction_id: res.razorpay_payment_id,
                    items: [{
                      item_name: currentCourse?.title,
                      item_id: currentCourse?.courseCategory,
                      price: courseFee,
                      quantity: 1
                    }]
                  });
                  console.log('purchase', {
                    currency: 'INR',
                    value: courseFee,
                    transaction_id: res.razorpay_payment_id,
                    items: [{
                      item_name: currentCourse?.title,
                      item_id: currentCourse?.courseCategory,
                      price: courseFee,
                      quantity: 1
                    }]
                  });
                  navigate(`/enrollment_thankyou/${currentCourse.key}`)
                } else {
                  handleCTPaymentFailed({
                    // cost,
                    // centre,
                    // modeOfPayment,
                    paymentStatus: "Failure",
                    courseName: formData.courseName,
                    courseCategory: formData.category,
                    startDate: formData.sdate,
                    endDate: formData.sdate,
                    date: formData.sdate,
                    pageName: window.location.href,
                    checkoutUrl: window.location.href,
                    pageUrl: window.location.href,
                    // feesResidential,
                    // feesNonResidential,
                    // feesOnline,
                    fee: courseFee,
                    mode: formData.mode,
                    timings: currentCourse.timing,
                    // tenure,
                    // courseMode,
                    // courseType,
                    // courseSubType,
                    // language,
                    // dayType,
                    batchNo: currentCourse.batch,
                    // dateTimeTimestamp,
                    // preRequisite,
                    status: "Failure",
                    name: formData.name,
                    emailId: formData.email,
                    phoneNumber: formData.phone,
                    state: formData.state,
                    city: formData.city,
                    pinCode: formData.pincode,
                    gender: formData.gender?.toUpperCase(),
                    age: formData.AGE,
                    nationality: formData.nationality,
                    // medicalIssues,
                    // residentialStatus,
                  })
                }
              },
              prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone
              },
              notes: {
                courseName: currentCourse.title,
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
                // date: courseDate,
                date: formData.sdate,
                time: currentCourse.timing,
                mode: formData.mode,
              },
              theme: {
                color: '#3399cc' // enter theme color for our website
              },
              modal: {
                ondismiss: function () {
                  // The user closed the payment modal
                  setIsLoad(false);
                  console.log("Payment modal closed by user.");
                  // alert("Payment process was canceled.");
                  // Perform any necessary cleanup or UI updates
                },
              },
            }
            const rzp = new window.Razorpay(options)
            setIsLoad(true);
            rzp.open()
          } else {
            if (currentCourse.key === 'satsang') {
              await axios.post(`${authBaseDomain}/ali/mail`, mailTemplate);
              navigate('/satsang_thankyou')
            }
            else if (currentCourse.key == 'department-of-rehabilitation-and-physiotherapy') {
              await axios.post(`${authBaseDomain}/ali/mail`, mailTemplate);
              navigate(`/enrollment_submitted/${currentCourse.key}`)
            } else if (currentCourse.key === 'samattvam') {
              // await axios.post(`${authBaseDomain}/ali/mail`, mailTemplate)
              navigate('/samattvam_thankyou')
            } else if (localStorage.getItem('isResidential') == 'true') {//only for residential course without payment navigate to success screen
              navigate(`/enrollment_submitted/${currentCourse.key}`)
            }
            else {
              navigate(`/enrollment_thankyou/${currentCourse.key}`)
            }
          }
        }


      }
      catch (err) {
        setIsLoad(false)
        console.error(err)
      }

    }





  }


  const handleSubmit = async (e) => {
    // alert(JSON.stringify(formData))
    // alert(formData.name)
    const array = ["Yoga Classes for Men (Regular Asana) - On Campus",
      "Yoga Classes for Women (Regular Asana) - On Campus",
      "Yoga Asana Regular Classes - (Men & Women) - Online Yoga Classes",
      "Weekend Yoga Asana Classes - (Men & Women) - On Campus",
      "Weekend Yoga Asana Classes - (Men & Women) - Online",
      "Children's Yoga Classes (Regular) - On Campus",
      "Children's Weekend Yoga Class - On Campus",
      "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      "Regular Pregnancy Yoga Classes - Online & On Campus",
      "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      "Healing Yoga Movement & Rhythm - Online",
      "Yog Prayas - Online",
      "Online Meditation Course  (Foundation Course)",
      "Regular Online Meditation Classes",
      "Couples’ Yoga Classes  - Online"
    ]
    let updatedData = JSON.parse(localStorage.getItem('addressDataNew'))
    let formDataConst = formData;
    formDataConst['gender'] = updatedData?.gender
    // setFormData(prevFormData => ({
    //   ...prevFormData,
    //   gender: updatedData?.gender

    // }));
    const isPhysio = currentCourse?.title == 'Department of Rehabilitation and Physiotherapy'
    console.log("form data from sdate ", formData.sdate)
    const isMatch = array.includes(currentCourse?.title);
    console.log("isMatchhhhhh ", isMatch)
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // setEndDate(formData.endDate?.value, formData.startDate)
    if (
      formData.name === '' ||
      formData.name === undefined ||
      formData.name === null
    ) {
      // alert("1")
      setEmpty(1)
      setEditStudentOpen(true);
    } else if (formData.email === '' || !validateEmail(formData.email) || formData.email === undefined ||
      formData.email === null) {
      // alert("2")
      setEmpty(2)
      setEditStudentOpen(true);
    } else if (
      formData.phone === '' ||
      formData.phone?.length < 6 ||
      formData.phone?.length > 15 ||
      formData.phone === undefined
    ) {
      // alert("3")
      setEmpty(3)

    } else if (formData.address1 === '') {
      // alert("4")
      setEmpty(4)

      setEditStudentOpen(true);
    }
    else if (formData.country === '') {
      // alert("5")
      setEmpty(5)
      setEditStudentOpen(true);
    }
    else if (formData.pincode === '') {
      // alert("6")
      setEmpty(8)
      setEditStudentOpen(true);
    } else if (formData.gender === '') {
      // alert("7")
      console.log(formData);

      setEmpty(11)
      setEditStudentOpen(true);
    } else if (formData.mode === '') {
      // alert("11")
      setEmpty('mode')
    } else if ((isMatch || isPhysio) && formData.startDate === '') {
      // alert(formData.startDate)

      setEmpty(21)
    } else if ((formData.sdate === '' || formData.sdate === 'No date Selected') && !isPhysio) {
      // alert("8")
      setEmpty(18)
    }

    else if (isMatch && formData.endDate === '' && !isPhysio) {
      console.log("Form Data Start Date ", formData.startDate)
      // alert("12")
      setEmpty(20)
    }
    else {
      // alert(formData.endDate)
      if (localStorage.getItem('isRegular') == 'true' && !isPhysio) {//end date caculate for Regular courses 
        setEndDate(formData.endDate, formData.startDate)
      }
      handleSubmit1();
      handleCTProccedToPayment({
        courseTitle: currentCourse?.title,
        date: formData.sdate,
        fees: currentCourse?.fees,
        courseFee: courseFee,
        mode: formData.mode,
        timing: currentCourse?.timing,
        tenure: currentCourse?.tenure,
        courseCategory: currentCourse?.courseCategory,
        courseSubType: currentCourse?.courseSubType,
        onlineMode: currentCourse?.onlineInfo?.courseMode,
        residentialMode: currentCourse?.residentialInfo?.courseMode,
        nonResidentialMode: currentCourse?.nonResidentialInfo?.courseMode,
        residentialLocation: currentCourse?.residentialInfo?.residentialMode,
        nonResidentialLocation: currentCourse?.nonResidentialInfo?.nonResidentialMode,
        courseType: currentCourse?.courseType,
        language: currentCourse?.language,
        PreRequisite: currentCourse?.preRequisite,
        category: currentCourse?.category,
        batch: currentCourse?.batch,
        nonResidential: currentCourse?.nonResidential,
        residential: currentCourse?.residental,
        online: currentCourse?.online,
        age: formData.AGE,
        nationality: formData.nationality
      })
      ReactGA.event('begin_checkout', {
        currency: 'INR',
        value: courseFee ? courseFee : 0,
        items: [{
          item_name: currentCourse?.title,
          item_id: currentCourse?.courseCategory,
          price: courseFee ? courseFee : 0,
          quantity: 1
        }]
      });
      console.log('begin_checkout', {
        currency: 'INR',
        value: courseFee ? courseFee : 0,
        items: [{
          item_name: currentCourse?.title,
          item_id: currentCourse?.courseCategory,
          price: courseFee ? courseFee : 0,
          quantity: 1
        }]
      });
      setupUserProfile(formData);
      try {
        let token = localStorage.getItem('authorizationToken')
        if (token && !axios.defaults.headers?.Authorization) {
          // console.log('Current Request Headers: 2', axios.defaults.headers);
          axios.defaults.headers['Authorization'] = `Bearer ${token}`;
          delete axios.defaults.headers.common['authorization'];
        }

        let payload = {
          firstName: formData?.name, lastName: formData?.lname,
          addressLine1: formData?.address1, addressLine2: formData?.address2,
          country: formData?.country, state: formData?.state,
          city: formData?.city, pincode: formData?.pincode,
          gender: formData?.gender
        }
        // alert(JSON.stringify(payload))
        await axios.put(`${authBaseDomain}/user/update`, payload, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        dispatch(fetchUserData());
      } catch (err) {
        console.log(err);
      }
    }
  }


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

      const pageName = currentCourse?.title + " Enrollment Form";
      const lastPageUrl = document.referrer || 'N/A';
      const pageUrl = window.location.href;
      //const loggedIn = localStorage.getItem('isLoggedIn') === 'true' ? 'Yes' : 'No'; // Adjust based on your auth logic
      const uniqueViewId = Math.floor(Math.random() * 1000); // Replace with actual logic

    };
  }, [sessionId, startTime]);


  useEffect(() => {
    const currentPageUrl = window.location.href;
    handleCTCoursePaymentPageVisit(currentPageUrl);
  }, []);

  return (
    <>
      <div className="enrollment_container ">
        {bold < 5 && (
          <div className="header">
            <Link to="/courses">
              <button className="x">
                <img src='/images/close.svg' style={{ position: 'relative', top: '2px' }} alt='' loading='lazy' />
                <span className='close_label'>Close</span>
              </button>
            </Link>
            <span className="flower">{legacy2}</span>

            <div className="student">Your Selected Yoga Course Details<br />
            </div>

          </div>
        )}

        {bold === 0 ? (
          <>
            <EnrollmentForm

              setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              handleEmpty1={handleEmpty1}
              setEmpty={setEmpty}
              isLoad={isLoad}
              courseDate={courseDate}
              templateKey={currentCourse?.templateId}
              isEditStudentOpen={isEditStudentOpen}
              setEditStudentOpen={setEditStudentOpen}
              qualificationData={qualificationData}
              listData={listData}
              currentCourse={currentCourse}
              courseAsset1={courseAsset1}
              setCourseAsset1={setCourseAsset1}
              courseAsset2={courseAsset2}
              setCourseAsset2={setCourseAsset2}
              handleSubmit={handleSubmit}
              courseFee={courseFee}
              setCourseFee={setCourseFee}
              uploadCheck={uploadCheck}
              setUploadCheck={setUploadCheck}
              dateDurationChange={dateDurationChange}
            />

          </>
        ) : null}

        {bold === 5 ? (
          <>
            <DisclaimerPolicy
              templateKey={currentCourse?.templateId}
              formData={formData}
              qualificationData={qualificationData}
              listData={listData}
              currentCourse={currentCourse}
              courseAsset1={courseAsset1}
              courseAsset2={courseAsset2}
              setBold={setBold}
              courseFee={courseFee}
              courseDate={courseDate}
              setListData={setListData}
              setQualificationData={setQualificationData}
            />
          </>
        ) : null}
      </div>
    </>
  )
}

export default Enrollment
