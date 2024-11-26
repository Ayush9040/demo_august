import React, { useState, useEffect } from 'react'
import './formstyles.scss'
// import { courseArray } from '../../Constants/courses/c200hr'
import { AllCourses } from '../../Views/Courses/Constants/courses'
import { useParams } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import DisclaimerPolicy from '../DisclaimerPolicy'
import { useSelector } from 'react-redux'
import Personal from './Personal'
import { legacy2 } from '../../assets/icons/icon'
import { authBaseDomain, cmsBaseDomain, razorPayKey } from '../../../../Constants/appSettings'
import axios from 'axios'
import { handleCTProccedToPayment } from '../../../../CleverTap/buttonClicked'
import { trackPageView } from '../../../../CleverTap/pageViewEvents'
import { handleCTCoursePaymentPageVisit, handleCTPaymentCompletedCourse, handleCTPaymentFailed, setupUserProfile } from '../../../../CleverTap/buttonClicked'
import EnrollmentForm from './EnrollmentForm'
import ReactGA from 'react-ga4';

const Enrollment = () => {
  const { user } = useSelector((state) => state.auth)
  const { courseId } = useParams()
  const [currentCourse, setCurrentCourse] = useState({})
  const [courseDate, setCourseDate] = useState(null)
  const [Params] = useSearchParams()
  const navigate = useNavigate()
  const [isEditStudentOpen, setEditStudentOpen] = useState(false);
  const addressLine1 = useSelector((state) => state.auth.user.data?.addressLine1);
  const pincodeFromRedux = useSelector((state) => state.auth.user.data?.pincode);
  const countryFromRedux = useSelector((state) => state.auth.user.data?.country);
  const stateFromRedux = useSelector((state) => state.auth.user.data?.state);
  const genderFromRedux = useSelector((state) => state.auth.user.data?.gender);

  useEffect(() => {
    let currentCrs = AllCourses.find((item) => item.key === courseId)
    setCurrentCourse(currentCrs)
    setCourseDate(Params.get('date'))
    localStorage.removeItem('courseEndDate')
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
    // if (
    //   formData.name === '' ||
    //   formData.name === undefined ||
    //   formData.name === null
    // ) {
    //   return setEmpty(1)
    // } else if (
    //   formData.phone === '' ||
    //   formData.phone.length < 6 ||
    //   formData.phone.length > 15
    // ) {
    //   return setEmpty(3)
    // } else if (!validateEmail(formData.email)) {
    //   return setEmpty(2)
    // } else if (formData.address1 === '') {
    //   return setEmpty(4)
    // } else if (formData.country === '') {
    //   return setEmpty(5)
    // } else if (formData.pincode === '') {
    //   return setEmpty(8)
    // } else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
    //   return setEmpty(9)
    // } else if (formData.nationality === '') {
    //   return setEmpty(10)
    // } else if (formData.gender === '') {
    //   return setEmpty(11)
    // } else {
    //   setEmpty(0)
    //   setBold(4)
    // }
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
    // console.log(endDate);
    // alert(endDate)

    // setFormData({ ...formData, endDate: endDate })
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
      let body = {
        personalDetails: {
          name: formData.name,
          emailId: formData.email,
          phone: formData.phone,
          addressLane1: formData.address1,
          addressLane2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode,
          gender: formData.gender?.toUpperCase(),
          age: formData.AGE,
          nationality: formData.nationality,
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
          phone: formData.phone,
          addressLane1: formData.address1,
          addressLane2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode,
          gender: formData.gender?.toUpperCase(),
          age: formData.AGE,
          nationality: formData.nationality,
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
          date: formData.sdate,
          timing: currentCourse.timing
        },
        userId: localStorage.getItem('userAppId') ? localStorage.getItem('userAppId') : null
      }
      // if(currentCourse.key==='batch-1-200hr'){
      //   if(formData?.residental==='RESIDENTIAL'){
      //     setmail(templateKey)
      //   }else{
      //     setmail(templateKey)
      //   }
      // }
      console.log(mail)


      let mailTemplate = {
        type: 'INFO_TYI',
        HTMLTemplate: pickMail(),
        subject: 'Enrollment Confirmation',
        data: {
          name: formData.name
        },
        receivers: [formData.email, 'info@theyogainstitute.org']
      }

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
          if (currentCourse.key !== 'satsang' && currentCourse.key !== 'samattvam') { //for residential no payment required
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
                  await axios.post(`${authBaseDomain}/ali/mail`, mailTemplate)
                  console.log(courseFee);

                  handleCTPaymentCompletedCourse({
                    // cost,
                    // centre,
                    // modeOfPayment,
                    paymentStatus: "Success",
                    courseName: formData.courseName,
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

                  ReactGA.event('purchase', {
                    currency: 'INR',
                    value: courseFee,
                    transaction_id:res.razorpay_payment_id,
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
                    transaction_id:res.razorpay_payment_id,
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


  const handleSubmit = (e) => {
    // alert(JSON.stringify(formData))
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
    } else if (isMatch && formData.startDate === '') {
      // alert(formData.startDate)

      setEmpty(21)
    } else if (formData.sdate === '' || formData.sdate === 'No date Selected') {
      // alert("8")
      setEmpty(18)
    }
    // else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
    //   setEmpty(9)
    // }
    // else if (formData.nationality === '') {
    //   setEmpty(10)
    // }
    // else if (formData.mode === '') {
    //   setEmpty('mode')
    // }
    // else if (isMatch && formData.startDate === '') {
    //   setEmpty(21)
    // }
    else if (isMatch && formData.endDate === '') {
      console.log("Form Data Start Date ", formData.startDate)
      // alert("12")
      setEmpty(20)
    }
    else {
      // alert(formData.endDate)
      if (localStorage.getItem('isRegular') == 'true') {//end date caculate for Regular courses 
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

      // trackPageView({
      //     pageName,
      //     lastPageUrl,
      //     pageUrl,
      //     sessionDuration,
      //     isLoggedIn,
      //     sessionId: session,
      //     uniqueViewId,
      // });
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

            <div className="student">Your Selected Yoga Course Details<br /> <span className='enroll_subtitle'>A step towards inner transformation🧘‍✨</span> </div>

            {/* <ul className="header_ul">
            <li
              style={
                bold === 0 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={() => setBold(0)}
            >
              {' '}
              Personal Details{' '}
              {bold === 0 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 1 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={handleEmpty1}
            >
              Academic Qualifications{' '}
              {bold === 1 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 2 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={handleEmpty2}
            >
              Work Experience{' '}
              {bold === 2 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 3 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={() => setBold(3)}
            >
              Other{bold === 3 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 4 ? { fontWeight: 600, fontSize: '2.5rem' } : {}}
              onClick={handleEmpty4}
            >
              Course Details
              {bold === 4 && <div className="bottom-line"></div>}
            </li>
          </ul> */}
          </div>
        )}

        {bold === 0 ? (
          <>
            {/* <Personal
              setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              handleEmpty1={handleEmpty1}
              setEmpty={setEmpty}
              isLoad={isLoad}
              courseDate={courseDate}
              templateKey={currentCourse?.templateId}
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
            /> */}

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
