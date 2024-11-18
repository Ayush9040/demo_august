import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { upload } from '../../assets/icons/icon'
import { uploadFile } from '../../../../helpers/OssHelper'
import { useLocation } from 'react-router-dom';
// import DatesPopUp from '../TermsandCondition/DatesPopUp';
import UpcomingDates from './UpcomingDates';
import EditStudent from './EditStudent';
import DatePicker from 'react-datepicker';
import UpcomingDuration from './UpcomingDuration';
import 'react-datepicker/dist/react-datepicker.css';
import './formstyles.scss'


const CourseDetails = ({
  currentCourse,
  courseDate,
  formData,
  setFormData,
  courseAsset1,
  setCourseAsset1,
  courseAsset2,
  setCourseAsset2,
  empty,
  setEmpty,
  courseFee,
  setCourseFee,
  handleResidential,
  formattedDates,
  dateDurationChange,
  highlightDetailBox
}) => {

  const [optionsCount, setOptionsCount] = useState(0);
  const location = useLocation();
  const isSevenDayHindi = location.pathname === '/enrollment/7-days-camp';
  const isSevenDayEnglish = location.pathname === '/enrollment/7-days-camp-english';
  const isYogaTherapy = location.pathname === '/enrollment/certificate-yoga-therapy-course-online';
  const isTwentyOneBatchOne = location.pathname === '/enrollment/21-days-better-living-course';
  const isTwentyOneBatchTwo = location.pathname === '/enrollment/21-days-better-living-course-batch-2';
  const isTwentyOneBatchThree = location.pathname === '/enrollment/21-days-better-living-course-batch-3';
  const isChildrenRegularClass = location.pathname === '/enrollment/childrens-regular-classes';
  const isChildrenWeekendClass = location.pathname === '/enrollment/childrens-weekend-classes-on-campus';
  const isYogaPrayas = location.pathname === '/enrollment/yog-prayas-online';
  const isSatsangPage = location.pathname === '/enrollment/satsang';
  const isRegularMeditation  = '/enrollment/regular-meditation-classes-online';
  const [setDate, setSetDate] = useState(false);
  const [priceSelect, setPriceSelect] = useState(0);
  const [courseFormatInfo, setCourseFormatInfo] = useState('Select one below')
  const [courseStartDate, setCourseStartDate] = useState('Select one below')
  const [courseStartDateSelected, setCourseStartDateSelected] = useState(false)
  const [courseDuration, setCourseDuration] = useState('Select one below')
  const [courseDurationSelected, setCourseDurationSelected] = useState(false)
  const [aboveTwoDates, setAboveTwoDates] = useState(false);
  const [captureEndDate, setCaptureEndDate] = useState(null);
  const [ isRegularPrice, setIsRegularPrice] = useState(0);

  const [courseFormatSelected, setCourseFormatSelected] = useState(false)
  const [courseDateInfo, setCourseDateInfo] = useState('Select one below')
  const [courseDateSelected, setCourseDateSelected] = useState(false)
  const [showDefaultDate, setShowDefaultDate] = useState(true)
  const [showDefaultDuration, setShowDefaultDuration] = useState(true)
  const [notShowDate, setNotShowDate] = useState(true)
  const [notShowDuration, setNotShowDuration] = useState(true)
  const [openEdit, setOpenEdit] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [endDateCreated, setEndDateCreated] = useState(false);
  const [onSelectFormat, setOnSelectFormat] = useState(false);
  const [values, setValues] = useState([])
  // const location = useLocation();
  const [selectedUrlDate, setSelectedUrlDate] = useState('');
  const [ removeMb, setRemoveMb ] = useState('');
  const divRef = useRef(null);
  const residentialCurrent = useRef(null);
  const nonresidentialCurrent = useRef(null);
  const offlineCurrent = useRef(null);

  useEffect(() => {
    // Parse the URL to extract the `date` query parameter
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get('date'); // Extract the 'date' parameter
    if (date) {
      setCourseDateInfo(date);
      setFormData((prev) => ({
        ...prev,
        sdate: date,
      }));
      setSelectedUrlDate(date); // Set the extracted date as the default value
    }
  }, [location.search]);

  const toggleAccordion = () => {
    setOpenEdit(!openEdit);
  };

  const accordionRef = useRef(null);

  useEffect(() => {
    if (openEdit && accordionRef.current) {
      // Scroll to the accordion content when it opens
      accordionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [openEdit]);
  const targetDivRef = useRef(null);

  // Function to scroll to the div when button is clicked
  const scrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start', // Scroll the element to the top of the viewport
      });
    }
  };
  useEffect(() => {
    if (isSatsangPage) {
      setSetDate(true);
      // setSelectDateValue({ label: 'No date Selected', value: 'No date Selected' });

      // Set formData with 'No date Selected' only once when the path is /enrollment/satsang
      // setFormData((prev) => ({
      //   ...prev,
      //   sdate: 'No date Selected',
      //   courseDetails: {
      //     ...prev.courseDetails,
      //     date: 'No date Selected',
      //   },
      // }));

      console.log('form Data mode ', formData)

      // setFormData({
      //   ...formData,
      //   mode: 'No mode Selected',
      // })

      handleResidential(false);
      setSelectedOption('OFFLINE')
      // if (e.target.checked) {
      // Set formData with mode and subMode nested inside courseDetails
      setFormData((prevFormData) => ({
        ...prevFormData,
        mode: 'OFFLINE', // This can be at the top-level if needed
        residental: 'NONRESIDENTIAL'
      }));
      setEmpty(0)
      setCourseFee(0)
      // setCourseFee(updatedFees( currentCourse?.key,'ONLINE' ))
      // }

      console.log('form Data mode2 ', formData)
    }
  }, [isSatsangPage]);

  useEffect(() => {
    if (formData.mode === 'ONLINE') {
      setFormData({ ...formData, residental: '' })
    }
  }, [formData.mode])

  useEffect(() => {
    if (currentCourse.key === 'ma-yoga-shastra' && formData.country !== 'India' && formData?.residental === 'NONRESIDENTIAL') {
      setCourseFee(currentCourse?.fees?.internationalFee?.nonResidentialFee)
    } else if (currentCourse.key === 'ma-yoga-shastra' && formData?.residental === 'NONRESIDENTIAL') {
      setCourseFee(currentCourse?.fees?.offlineFee?.nonResidentialFee)
    }
  }, [formData])


  const [pictureName, setPictureName] = useState('')
  const [certificateName, setcertificateName] = useState('')
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [openDates, setOpenDates] = useState(false)
  const [isRegular, setIsRegular] = useState(false)
  const [minDate, setMinDate] = useState('');
  const [onClickFormatRegular, setOnClickFormatRegular] = useState(false);
  const [openDuration, setOpenDuration] = useState(false)



  useEffect(() => {
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
    const isMatch = array.includes(currentCourse?.title);
    setIsRegular(isMatch);
    localStorage.setItem('isRegular', isMatch)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow);
  }, [currentCourse])

  // const handleStartDate = (value) => {
  //   console.log(value);
  //   const day = value.getDate().toString().padStart(2, '0'); // Pad single digits with leading zero
  //   console.log(day);
  //   const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  //   console.log(month);
  //   const year = value.getFullYear();


  //   setCourseStartDate(`${day}/${month}/${year}`)

  //   setValues((prev) => {
  //     return {
  //       ...prev, startDate: `${day}/${month}/${year}`
  //     }
  //   })
  //   console.log(`${day}/${month}/${year}`);
  //   setFormData({ ...formData, startDate: `${day}/${month}/${year}` })
  //   console.log("Form dateeeee ", values)

  //   if (values.endDate) { createEndDate(`${day}/${month}/${year}`, values.endDate) }
  //   return `${day}/${month}/${year}`;
  // }

  // const createEndDate = (startDate, value) => {
  //   // alert("Hello", value)
  //   console.log("Start Date", startDate, " aaaaaaaaaaaaa Value ", value);
  //   if(startDate === undefined || startDate === null){
  //     return ;
  //   }

  //   if(value === undefined || value === null) {
  //     return ;
  //   }
  //   // alert("OK")

  //   // handleStartDate(startDate)

  //   // setFormData({ ...formData, startDate: handleStartDate(startDate) })

  //   console.log("Calling from create End Date ", startDate, value);
  //   console.log("startDate ? startDate : values?.startDate ", startDate ? startDate : values?.startDate)
  //   let endDate = formatDate(addMonths(parseDate(startDate ? startDate : values?.startDate), value))
  //   console.log("Calling from End Date ", endDate);
  //   setValues((prev) => {
  //     return {
  //       ...prev, endDate: value, endDateFormat: endDate
  //     }
  //   })
  //   localStorage.setItem('courseEndDate', endDate)
  //   setFormData({ ...formData, endDate: value, duration: value?.value })
  //   dateDurationChange(value)
  // }

  const handleStartDate = (value) => {
    console.log(value);
    const day = value.getDate().toString().padStart(2, '0'); // Pad single digits with leading zero
    const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = value.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);

    // Update `values` and `formData` states
    setValues((prev) => ({
      ...prev,
      startDate: formattedDate,
    }));

    setFormData((prev) => ({
      ...prev,
      startDate: formattedDate,
    }));

    setCourseStartDate(formattedDate);

    // If endDate exists, create it based on the new startDate
    if (values.endDate) {
      createEndDate(formattedDate, values.endDate);
    }

    return formattedDate;
  };

  const createEndDate = (startDate, value) => {
    console.log("Start Date:", startDate, "Value:", value);

    if (!startDate || !value) return;

    // Calculate the formatted end date
    const endDate = formatDate(addMonths(parseDate(startDate), value));
    console.log("Calculated End Date:", endDate);

    // Update `values` and `formData` states with the new end date
    setValues((prev) => ({
      ...prev,
      endDate: value,
      endDateFormat: endDate,
    }));

    setFormData((prev) => ({
      ...prev,
      endDate: value,
      duration: value.value,
    }));

    localStorage.setItem('courseEndDate', endDate);
    dateDurationChange(value);
    setEndDateCreated(true);
    // setIsRegularPrice(currentCourse?.fees?.onlineFee);
    // setOnClickFormatRegular(true)
  };

  // Function to remove ordinal suffixes and format the date
  function formatDate(date) {
    try {
      const day = date?.getDate().toString().padStart(2, '0'); // Day with leading zero
      const month = (date?.getMonth() + 1).toString().padStart(2, '0'); // Month with leading zero
      const year = date?.getFullYear();
      return `${day}/${month}/${year}`;
    }
    catch (err) {
      return ''
    }
  }

  // Function to add months to a given date
  function addMonths(startDate, months) {
    const date = startDate; // Create a Date object from the start date
    // date.setMonth(date.getMonth() + months); // Add the number of months
    try {
      let totalDays = months * 30
      console.log("totalDays ", totalDays, months)
      date.setDate(date.getDate() + (totalDays - 1));
      return date;
    }
    catch (err) {
      return '';
    }
  }

  function parseDate(dateStr) {
    console.log("Parse date ", dateStr)
    try {
      const [day, month, year] = dateStr.split('/').map(Number); // Split the date string and convert parts to numbers
      // Create a new Date object (months are 0-based, so subtract 1 from month)
      console.log("new Date(year, month - 1, day) ", new Date(year, month - 1, day))
      return new Date(year, month - 1, day);
    }
    catch (err) {
      return ''
    }
  }

  const durationList = [{ label: '1 Month', value: 1 }, { label: '2 Months', value: 2 }, { label: '3 Months', value: 3 }, { label: '4 Months', value: 4 }, { label: '5 Months', value: 5 }, { label: '6 Months', value: 6 }, { label: '7 Months', value: 7 }, { label: '8 Months', value: 8 }, { label: '9 Months', value: 9 }, { label: '9 Months', value: 9 }, { label: '10 Months', value: 10 }, { label: '11 Months', value: 11 }, { label: '12 Months', value: 12 }]




  const handleModeSelection = (mode) => {
    setSelectedMode(mode);

    // Append the selected mode to the currentCourse object
    const updatedCourse = {
      ...currentCourse,
      selectedMode: mode, // Add the selected mode to the object
    };

    // Update the state with the new course data
    // setCurrentCourse(updatedCourse);
  };
  // const [loading, setLoading] = useState(false)

  // const getBase64 = (file, cb)=>{
  //   let reader = new FileReader()
  //   reader.readAsDataURL(file)
  //   reader.onload = function() {
  //     cb(reader.result)
  //   }
  //   reader.onerror = function(error) {
  //   }
  // }

  const uploadDoc = async (file, type, changeValue) => {
    const url = await uploadFile(file, type)
    if (changeValue === 'CERTIFICATE') {
      setCourseAsset2(url)
      setEmpty(0)
    } else if (changeValue === 'IMAGE') setCourseAsset1(url)
  }

  const handleOpen = () => {
    setOpenDates(true);
    setTimeout(() => { scrollToDiv() }, 100)
  }

  const handleOpenDuration = () => {
    setOpenDuration(true);
    setTimeout(() => { scrollToDiv() }, 100)
  }

  const handleCloseDuration = () => {
    setOpenDuration(false);
  }

  const handleClose = () => {
    setOpenDates(false);
  };

  const handleShowEdit = () => {
    setShowEdit(true);
  }

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    setIsRegularPrice(currentCourse?.fees?.onlineFee);
    setEndDateCreated(false);
  }, [endDateCreated])


  // const updatedFees = (course, mode) => {
  //   switch (course) {
  //   case 'certificate-program-on-yoga-for-cancer':
  //     if (courseDate === '24th Nov 2023 to 30th Dec 2023') {
  //       if (mode === 'ONLINE') return 20000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //     }
  //     break

  //   case 'two-year-ttc':
  //     if (courseDate === '2nd Dec 2023') {
  //       if (mode === 'ONLINE') return 55000
  //       if (mode === 'RESIDENTIAL') return 55000
  //       if (mode === 'NONRESIDENTIAL') return 55000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //       if (mode === 'RESIDENTIAL')
  //         return currentCourse.fees.offlineFee.residentialFee
  //     }
  //     break

  //   case '21-days-better-living-course':
  //     if (
  //       courseDate === '5th Nov to 25th Nov 2023' || courseDate ===  '3rd Dec to 23rd Dec 2023'
  //     ) {
  //       if (mode === 'ONLINE') return 2100
  //       if (mode === 'NONRESIDENTIAL') return 2100
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case 'stress-management-camp':
  //     if (
  //       courseDate === '10th Dec 2023'
  //     ) {
  //       if (mode === 'ONLINE') return 500
  //       if (mode === 'NONRESIDENTIAL') return 500
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case 'seven-month-ttc':
  //     if (
  //       courseDate ==='1st Dec 2023'
  //     ) {
  //       if (mode === 'ONLINE') return 55000
  //       if (mode === 'RESIDENTIAL') return 55000
  //       if (mode === 'NONRESIDENTIAL') return 55000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'RESIDENTIAL')
  //         return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case 'one-year-ttc':
  //     if (
  //       courseDate ==='1st Dec 2023'
  //     ) {
  //       if (mode === 'ONLINE') return 55000
  //       if (mode === 'RESIDENTIAL') return 55000
  //       if (mode === 'NONRESIDENTIAL') return 55000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'RESIDENTIAL')
  //         return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case '21-days-better-living-course-batch-2':
  //     if (
  //       courseDate === '5th Nov to 25th Nov 2023' || courseDate === '3rd Dec to 23rd Dec 2023'
  //     ) {
  //       if (mode === 'ONLINE') return 2100
  //       if (mode === 'NONRESIDENTIAL') return 2100
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break
  //   case '21-days-better-living-course-batch-3':
  //     if (courseDate === '19th Nov to 9th Dec 2023') {
  //       if (mode === 'ONLINE') return 2100
  //       if (mode === 'NONRESIDENTIAL') return 2100
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case 'meditation-foundation-course-online':
  //     if (
  //       courseDate === '6th Nov to 1st Dec 2023' || courseDate === '4th Dec to 29th Dec 2023'
  //     ) {
  //       if (mode === 'ONLINE') return 1000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //     }
  //     break
  //   case 'certificate-course-on-advanced-pranayama-techniques':
  //     if (
  //       courseDate === '20th Nov to 11th Jan 2024 · Morning' || courseDate === '1st Dec to 24th Jan 2024 · Evening'
  //     ) {
  //       if (mode === 'ONLINE') return 20000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //     }
  //     break
  //   // case 'certificate-course-on-advanced-pranayama-techniques':
  //   //   if (
  //   //     (courseDate === ('1st Dec 2023 to 24th Jan 2024'))
  //   //   ) {
  //   //     if (mode === 'ONLINE') return 20000
  //   //   } else {
  //   //     if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //   //   }
  //   //   break
  //   case '200-hrs-part-time-ttc-on-campus-english':
  //     if (courseDate === '4th Dec 2023 to 27th Jan 2024') {
  //       if (mode === 'ONLINE') return 25000
  //       if (mode === 'RESIDENTIAL') return 55000
  //       if (mode === 'NONRESIDENTIAL') return 30000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'RESIDENTIAL') return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL') return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case '7-days-camp-english':
  //     if (courseDate === '25th Nov to 1st Dec 2023' || courseDate === '23rd Dec to 29th Dec 2023') {
  //       // if (mode === 'ONLINE') return 25000
  //       if (mode === 'RESIDENTIAL') return 13000
  //       if (mode === 'NONRESIDENTIAL') return 9000
  //     } else {
  //       // if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'RESIDENTIAL') return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL') return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case '7-days-camp':
  //     if (courseDate === '19th Nov to 25th Nov 2023') {
  //       // if (mode === 'ONLINE') return 25000
  //       if (mode === 'RESIDENTIAL') return 13000
  //       if (mode === 'NONRESIDENTIAL') return 9000
  //     } else {
  //       // if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'RESIDENTIAL') return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL') return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break

  //   case 'one-month-ttc':
  //     if (courseDate === '1st Dec to 30th Dec 2023') {
  //       if (mode === 'ONLINE') return 25000
  //       if (mode === 'RESIDENTIAL') return 55000
  //       if (mode === 'NONRESIDENTIAL') return 30000
  //     } else {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'RESIDENTIAL') return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL') return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //     break
  //   default:
  //     return () => {
  //       if (mode === 'ONLINE') return currentCourse.fees.onlineFee
  //       if (mode === 'OFFLINE')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //       if (mode === 'RESIDENTIAL')
  //         return currentCourse.fees.offlineFee.residentialFee
  //       if (mode === 'NONRESIDENTIAL')
  //         return currentCourse.fees.offlineFee.nonResidentialFee
  //     }
  //   }
  // }





  const shouldShowOnlineOption = () => {

    return currentCourse.online;
  };

  const shouldShowResidentialOption = () => {

    return currentCourse.residential;
  };

  const shouldShowNonResidentialOption = () => {

    return currentCourse.nonResidential;
  };

  const shouldShowOfflineOption = () => {
    const result = (currentCourse.online === false && currentCourse.residential === false && currentCourse.nonResidential === false) ? true : false;
    return result;
  };
  const handleFocus = (e) => {
    // Prevent opening the keyboard on mobile devices
    e.preventDefault();
  };
  const preventKeyboard = (e) => {
    e.preventDefault(); // Prevent focus behavior (keyboard)
    e.stopPropagation(); // Prevent other events from triggering
  };
  const handleTouchStart = (e) => {
    // Prevent the keyboard from appearing on touch (mobile behavior)
    e.preventDefault();
  };

  const getLastTrueOption = () => {
    const options = [
      { name: "Online", value: shouldShowOnlineOption() },
      { name: "Residential", value: shouldShowResidentialOption() },
      { name: "Non-Residential", value: shouldShowNonResidentialOption() },
      { name: "Offline", value: shouldShowOfflineOption() },
    ];

    // Reverse the array and find the last `true` option
    const lastTrueOption = options.reverse().find((option) => option.value);
    return lastTrueOption ? lastTrueOption.name : null;
  };

  // UseEffect to update `removeMb` and apply styles dynamically
  useEffect(() => {
    const lastOption = getLastTrueOption();
    setRemoveMb(lastOption);

    // Apply dynamic styles with `!important`
    if (divRef.current) {
      if (lastOption === "Online") {
        divRef.current.style.setProperty("margin-bottom", "0px", "important");
      } 
    }
  }, [currentCourse]);


  useEffect(() => {
    const lastOption = getLastTrueOption();
    setRemoveMb(lastOption);

    // Apply dynamic styles with `!important`
    if (residentialCurrent.current) {
      if (lastOption === "Residential") {
        residentialCurrent.current.style.setProperty("margin-bottom", "0px", "important");
      } 
    }
  }, [currentCourse]);

  useEffect(() => {
    const lastOption = getLastTrueOption();
    setRemoveMb(lastOption);

    // Apply dynamic styles with `!important`
    if (nonresidentialCurrent.current) {
      if (lastOption === "Non-Residential") {
        nonresidentialCurrent.current.style.setProperty("margin-bottom", "0px", "important");
      } 
    }
  }, [currentCourse]);

  useEffect(() => {
    const lastOption = getLastTrueOption();
    setRemoveMb(lastOption);

    // Apply dynamic styles with `!important`
    if (offlineCurrent.current) {
      if (lastOption === "Offline") {
        offlineCurrent.current.style.setProperty("margin-bottom", "0px", "important");
      } 
    }
  }, [currentCourse]);


  // Group timings by unique days
  const groupTimings = (timings) => {
    const grouped = {};
    timings.forEach(({ day, time }) => {
      if (!grouped[day]) {
        grouped[day] = [];
      }
      grouped[day].push(time);
    });
    return grouped;
  };

  // Render grouped timings
  const renderTimings = (groupedTimings) => {
    return Object.entries(groupedTimings).map(([day, times], index) => (
      <div key={index}>
        <strong className='time_header'>{day}</strong>
        {/* <ul> */}
        {times.map((time, i) => (
          <div className='times_fixed' key={i}>{time}</div>
        ))}
        {/* </ul>  */}
      </div>
    ));
  };

  const groupedTimings = groupTimings(currentCourse?.enrollInfo?.timings);


  return (
    <div className="main-container">
      <div className="course-main-container">
        <div className="course-secondary-container">
          <div className={isRegular ? "details_box details_box_regular" : "details_box"}>
            <div className="details_course_box">
              <div className="detail_image_box">
                <img src={currentCourse?.image} alt={currentCourse?.title} />
              </div>
              <div className="current_duration">
                <div>
                  <span className='details_newName'>
                    {currentCourse?.newName === '' ? currentCourse?.title : currentCourse?.newName}&nbsp;{isSevenDayHindi && <span className='to_fix_width'>Created to fix width</span> }
                    {isSevenDayEnglish && <span className='to_fix_width'>Created to fix</span> }
                    {isSatsangPage && <span className='to_fix_width'>Created to fix width too muchh</span> }
                    {isYogaTherapy && <span className='to_fix_width'>Created to fixs</span> }
                    {isTwentyOneBatchOne && <span className='to_fix_width'>Fix</span> }
                    {isTwentyOneBatchTwo && <span className='to_fix_width'>Fix</span> }
                    {isTwentyOneBatchThree && <span className='to_fix_width'>Fix</span> }
                    {isChildrenRegularClass && <span className='to_fix_width'>Created to Fix</span> }
                    {isChildrenWeekendClass && <span className='to_fix_width'>Created to F</span> }
                    {isYogaPrayas && <span className='to_fix_width'>Created to Fixs width mores </span> }
                    {isRegularMeditation && <span className='to_fix_width'>Created to Fixs width mores </span> }
                  </span>
                  {/* {courseDate !== 'null' ? courseDate : ''} */}
                </div>
                <div className='details_desc_info'>
                  <div className='details_wrapper_duration'><span className='details_duration_info'>Duration:</span> <span className='tenure_course'>{currentCourse?.enrollInfo?.duration}</span></div>
                  <div>&nbsp;&nbsp;</div>
                  <div className='details_wrapper_duration'><span className='details_lang_info'>Language:</span> <span className='lang_course'>{currentCourse?.language}</span></div>
                </div>

                <div className='time_days_wrapper'>
                  {renderTimings(groupedTimings)}
                  <div className='details_desc_days details_desc_days_2'>
                    {/* <div><span className='details_duration_info'>Days:</span> <span className='tenure_course'>{currentCourse?.days[0]}</span></div> */}

                  </div>
                  <div className='details_desc_days'>
                    {/* <div><span className='details_duration_info'>Time:</span> <span className='tenure_course'>{currentCourse?.time[0]}</span></div> */}

                  </div>
                </div>

                {/* {courseFee && <p className="current_fees"> {currentCourse.key === 'ma-yoga-shastra' && formData.country !== 'India' ? '$ 3950' : `₹ ${courseFee}`}</p>} */}
                {/* {courseFee && <p className="current_fees"> ₹ {courseFee}</p>} */}
              </div>
            </div>

            {/* <div className={isRegular ? 'btn_mode_date_regular' : 'btn_mode_date_wrapper'} style={{
              borderTop: isSatsangPage ? "none" : "1px solid rgba(96, 96, 96, 0.3)"
            }}>
            {!isSatsangPage && (
             <>

              <div className='first_wrapper_regular_btn'>
                <div className={courseFormatSelected === true ? 'details_wrapper_duration_3' : 'details_wrapper_duration_2'}><span className='details_duration_info' style={{ color: 'rgba(0, 0, 0, 1)' }}>Course format - {courseFormatInfo}</span></div>

                <div className={courseDateSelected === true ? 'details_wrapper_duration_3' : 'details_wrapper_duration_2'}><span className='details_duration_info' style={{ color: 'rgba(0, 0, 0, 1)' }}>{isRegular ? "Course Time" : "Course Date"} - {courseDateInfo}</span></div>
              </div>
             
             </>
            )}

              {
                isRegular && (
                  <div className='second_wrapper_regular_btn'>
                    <div className={courseStartDateSelected === true ? 'details_wrapper_duration_3' : 'details_wrapper_duration_2'}><span className='details_duration_info' style={{ color: 'rgba(0, 0, 0, 1)' }}>Course Start Date - {courseStartDate}</span></div>

                    <div className={courseDurationSelected === true ? 'details_wrapper_duration_3' : 'details_wrapper_duration_2'}><span className='details_duration_info' style={{ color: 'rgba(0, 0, 0, 1)' }}>Course Duration - {courseDuration}</span></div>
                  </div>
                )
              }


            </div> */}




          </div>


              {/* {removeMb} */}
          {!isSatsangPage && (
            <div className='wrapper_date_and_course'>

              <div className='course_format_wrapper'>


                <div className='details_format_date'>


                  <div className="label_format_course">
                    Select Course Format
                  </div>
                  {console.log('CC', currentCourse)}
                  <form className="residential-form check_course" >
                    <div className="last_radio_button ">
                      {shouldShowOfflineOption() &&
                        (
                          <label class="item-label item_format" ref={offlineCurrent}>
                            <input class="item-input"
                              type="radio" name="mode"
                              value="OFFLINE"
                              aria-labelledby="delivery-0-name"
                              aria-describedby="delivery-0-shipping delivery-0-price"
                              checked={selectedOption === 'OFFLINE'}

                              onChange={(e) => {
                                handleResidential(false);
                                setSelectedOption('OFFLINE')
                                setPriceSelect(currentCourse?.fees?.onlineFee)
                                setCourseFormatInfo('OFFLINE')
                                setCourseFormatSelected(true)
                                setIsRegularPrice(currentCourse?.fees?.onlineFee);
                                setOnSelectFormat(true);
                                setOnClickFormatRegular(true)
                                if (e.target.checked) {
                                  setFormData({
                                    ...formData,
                                    mode: e.target.value,
                                  })
                                  setEmpty(0)
                                  setCourseFee(currentCourse?.fees?.onlineFee)
                                  // setCourseFee(updatedFees( currentCourse?.key,'ONLINE' ))
                                }
                              }} />
                            <span class="item-info">
                              <span id="delivery-0-name" class="item-name">OFFLINE - </span>

                              {/* <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small> */}
                            </span>
                            <strong id="delivery-0-price" class="item-price">INR {isNaN(currentCourse?.fees?.onlineFee) ? localStorage.getItem('courseFee') : currentCourse?.fees?.onlineFee }</strong>
                          </label>

                        )
                      }

                      {shouldShowOnlineOption() && (
                        //    <label htmlFor="" className="course_details_text">
                        //    <input
                        //      type="radio"
                        //      name="mode"
                        //      value="ONLINE"
                        //      disabled={currentCourse.online === false}
                        //      checked={formData.mode === 'ONLINE'}
                        //      style={
                        //        currentCourse.online === false
                        //          ? {
                        //            background:
                        //                'url(https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/icons/icons8-multiply-24.png)',
                        //          }
                        //          : {}
                        //      }
                        //      onChange={(e) => {
                        //        if (e.target.checked) {
                        //          setFormData({
                        //            ...formData,
                        //            mode: e.target.value,
                        //          })
                        //          setEmpty(0)
                        //          setCourseFee(currentCourse?.fees?.onlineFee)
                        //          // setCourseFee(updatedFees( currentCourse?.key,'ONLINE' ))
                        //        }
                        //      }}
                        //    />{' '}
                        //    &nbsp; Online - {currentCourse?.fees?.onlineFee}
                        //  </label>


                        <label class="item-label item_format" ref={divRef}>
                          <input class="item-input"
                            type="radio" name="mode"
                            value="ONLINE"
                            aria-labelledby="delivery-0-name"
                            aria-describedby="delivery-0-shipping delivery-0-price"
                            checked={selectedOption === 'ONLINE'}

                            onChange={(e) => {
                              handleResidential(false);
                              setSelectedOption('ONLINE')
                              setCourseFormatInfo('ONLINE')
                              setCourseFormatSelected(true)
                              setPriceSelect(currentCourse?.fees?.onlineFee)
                              setIsRegularPrice(currentCourse?.fees?.onlineFee);
                                setOnSelectFormat(true);
                                setOnClickFormatRegular(true)
                              
                              if (e.target.checked) {
                                setFormData({
                                  ...formData,
                                  mode: e.target.value,
                                })
                                setEmpty(0)
                                setCourseFee(currentCourse?.fees?.onlineFee)
                                // setCourseFee(updatedFees( currentCourse?.key,'ONLINE' ))
                              }
                            }} />
                          <span class="item-info">
                            <span id="delivery-0-name" class="item-name">Online - </span>

                            {/* <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small> */}
                          </span>
                          <strong id="delivery-0-price" class="item-price"> INR {isNaN(currentCourse?.fees?.onlineFee) ? localStorage.getItem('courseFee') : currentCourse?.fees?.onlineFee }</strong>
                        </label>
                      )}
                    </div>
                    {empty === 'mode' && (
                      <small className="mode-err">Please select 1 format</small>
                    )}
                    <div className="last_radio_button-cols">

                      {shouldShowNonResidentialOption() && (
                        //   <label htmlFor="" className="course_details_text">
                        //   <input
                        //     type="radio"
                        //     name="resident"
                        //     value="NONRESIDENTIAL"
                        //     checked={
                        //       formData.mode === 'OFFLINE' &&
                        //       formData.residental === 'NONRESIDENTIAL'
                        //     }
                        //     disabled={
                        //       currentCourse.nonResidential === false ||
                        //       formData.mode === 'ONLINE'
                        //     }
                        //     style={
                        //       currentCourse.nonResidential === false
                        //         ? {
                        //           background:
                        //               'url(https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/icons/icons8-multiply-24.png)',
                        //         }
                        //         : {}
                        //     }
                        //     onChange={(e) => {
                        //       if (e.target.checked) {
                        //         setFormData({
                        //           ...formData,
                        //           residental: e.target.value,
                        //         })
                        //         setEmpty(0)
                        //         setCourseFee(
                        //           currentCourse?.fees?.offlineFee?.nonResidentialFee
                        //         )
                        //         // setCourseFee(updatedFees( currentCourse?.key,'NONRESIDENTIAL' ))
                        //       }
                        //     }}
                        //   />{' '}
                        //   &nbsp; Non-Residential - {currentCourse?.fees?.offlineFee?.nonResidentialFee}
                        // </label>


                        <label class="item-label item_format" ref={residentialCurrent}>
                          <input class="item-input" type="radio" name="resident" value="NONRESIDENTIAL" aria-labelledby="delivery-0-name" aria-describedby="delivery-0-shipping delivery-0-price"
                            checked={selectedOption === 'NONRESIDENTIAL'}
                            onChange={(e) => {
                              handleResidential(false);
                              setSelectedOption('NONRESIDENTIAL')
                              setCourseFormatSelected(true)
                              setCourseFormatInfo('On-Campus (without residence)')
                              setPriceSelect(currentCourse?.fees?.offlineFee?.nonResidentialFee)
                              if (e.target.checked) {
                                setFormData({
                                  ...formData,
                                  residental: e.target.value,
                                  mode: 'OFFLINE'
                                })
                                setEmpty(0)
                                setCourseFee(
                                  currentCourse?.fees?.offlineFee?.nonResidentialFee
                                )
                                // setCourseFee(updatedFees( currentCourse?.key,'NONRESIDENTIAL' ))
                              }
                            }}
                          />
                          <span class="item-info">
                            <span id="delivery-0-name" class="item-name">On-Campus (without residence)  - </span>

                            {/* <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small> */}
                          </span>
                          <strong id="delivery-0-price" class="item-price"> INR {currentCourse?.fees?.offlineFee?.nonResidentialFee}</strong>
                        </label>
                      )}


                      {empty === 'subMode' && (
                        <small className="mode-err">Please select submode</small>
                      )}

                      {shouldShowResidentialOption() && (
                        //   <label htmlFor="" className="course_details_text">
                        //   <input
                        //     type="radio"
                        //     name="resident"
                        //     value="RESIDENTIAL"
                        //     checked={
                        //        //formData.mode === 'OFFLINE' &&
                        //       formData.residental === 'RESIDENTIAL'
                        //     }
                        //     disabled={
                        //       currentCourse.residential === false ||
                        //       formData.mode === 'ONLINE' ||
                        //       (currentCourse.key === '7-days-camp-english' &&
                        //         courseDate == '24th Sept to 30th Sept 2022')
                        //     }
                        //     style={
                        //       currentCourse.residential === false ||
                        //       (currentCourse.key === '7-days-camp-english' &&
                        //         courseDate == '24th Sept to 30th Sept 2022')
                        //         ? {
                        //           background:
                        //               'url(https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/icons/icons8-multiply-24.png)',
                        //         }
                        //         : {}
                        //     }
                        //     onChange={(e) => {
                        //       if (e.target.checked) {
                        //         setFormData({
                        //           ...formData,
                        //           residental: e.target.value,
                        //         })
                        //         setEmpty(0)
                        //         if(currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India'){
                        //           setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                        //         } else {
                        //           setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                        //         }
                        //         // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                        //       }
                        //     }}
                        //   />{' '}
                        //   &nbsp; Residential - {currentCourse?.fees?.offlineFee?.residentialFee}
                        // </label>


                        <label class="item-label item_format" ref={nonresidentialCurrent}>
                          <input class="item-input" type="radio" name="resident" value="RESIDENTIAL" aria-labelledby="delivery-0-name" aria-describedby="delivery-0-shipping delivery-0-price"
                            checked={selectedOption === 'RESIDENTIAL'}
                            onChange={(e) => {
                              setSelectedOption('RESIDENTIAL');
                              handleResidential(true);
                              setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                              setCourseFormatInfo('On-Campus (residence - triple sharing)')
                              setCourseFormatSelected(true)
                              if (e.target.checked) {
                                setFormData({
                                  ...formData,
                                  residental: e.target.value,
                                  mode: 'OFFLINE'
                                })
                                setEmpty(0)
                                if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                  setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                } else {
                                  setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                }
                                // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                              }
                            }}
                          />
                          <span class="item-info">
                            <span id="delivery-0-name" class="item-name">On-Campus (residence - triple sharing) - </span>

                            {/* <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small> */}
                          </span>
                          <strong id="delivery-0-price" class="item-price">INR {currentCourse?.fees?.offlineFee?.residentialFee}</strong>

                        </label>

                      )}
                      {/* {shouldShowResidentialOption() && (
                  <div style={{ fontSize: '12px', textAlign: 'center', marginTop: '-5px', color: '#000' }}>For Single sharing and Two sharing rooms, please contact us</div>
                )} */}

                    </div>



                  </form>
                  {/* {values.startDate}{values.endDate} */}


                  {isRegular && (
                    <>
                      <div className='dates_enroll_wrapper'>

                        <div className="label_format_course">

                          Select Course Start Date

                          {empty === 21 && <div id="fill_err" style={{ float: 'right', fontSize: '11px', marginTop: '10px', color: 'red' }}>Please select course start date</div>}

                        </div>

                        <div className="form_error course_date date-input-wrapper">
                          <DatePicker
                            minDate={minDate}
                            // visiblity={'hidden'}
                            placeholderText="Choose date" // Custom placeholder text
                            dateFormat="dd/MM/YYYY"
                            value={values.startDate}
                            form={formData}
                            setField={setFormData}
                            onChange={(value) => {
                              console.log('val on change ', value)
                              setCourseStartDateSelected(true)
                              // handleStartDate(value)
                              // createEndDate(value, captureEndDate)

                              // Handle start date and chain the creation of end date
                              const formattedStartDate = handleStartDate(value);

                              // Use the updated start date for creating end date
                              if (captureEndDate) {
                                createEndDate(formattedStartDate, captureEndDate);
                              }
                              setEmpty(0)
                            }}
                            // onKeyDown={(e) => e.preventDefault()} //
                            customInput={
                              <input readOnly
                                tabIndex="-1" // Prevents focusing and the keyboard from showing
                                onClick={preventKeyboard} // Stops the keyboard from opening on mobile
                              />
                            }/>
                          {/* {empty === 18 && <small id="fill_err"> Please select start date</small>
                          } */}
                        </div>
                      </div>
                    </>
                  )}


                  {/* {selectedUrlDate} */}

                  <div className='dates_enroll_wrapper' ref={targetDivRef}>

                    <div className="label_format_course">
                      {isRegular ? "Select Course Time" : "Select Course Start Date"}

                      {empty === 18 && <div id="fill_err" style={{ float: 'right', fontSize: '11px', marginTop: '10px', color: 'red' }}> {isRegular ? "Please select course Time" : "Please select course date"} </div>}
                    </div>

                    <form className="residential-form check_course check_date_2" style={{ width: '100%' }}>
                      <div className="last_radio_button " style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

                        {
                          formattedDates.length === 0 && (
                            <div id="fill_err" style={{ fontSize: '11px', marginTop: '0px', color: 'red' }}> No Dates Available </div>
                          ) 
                        }

                        {
                          formattedDates?.slice(0, 2).map((item, index) => {
                            if (!item?.label) return null;
                            return (
                              <div key={index} className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                  <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                    <input class="item-input"
                                      type="radio" name="mode"
                                      value={item?.label}
                                      aria-labelledby="delivery-0-name"
                                      aria-describedby="delivery-0-shipping delivery-0-price"
                                      onChange={(e) => {
                                        setCourseDateInfo(e.target.value)
                                        setCourseDateSelected(true)
                                        setNotShowDate(true)
                                        if (e.target.checked) {
                                          setFormData({
                                            ...formData,
                                            sdate: e.target.value
                                          })
                                          setEmpty(0)
                                          // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                          //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                          // } else {
                                          //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                          // }
                                          // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                        }
                                      }}
                                      checked={courseDateInfo == item?.label}

                                    />
                                    <span class="item-info item_desc">
                                      <span id="delivery-0-name" class="item-name date_info">
                                        <span className='style_dates'>{item?.label}</span></span>
                                    </span>

                                    <strong id="delivery-0-price" class="item-price"></strong>
                                  </label>
                                </div>
                              </div>
                            )
                          })
                        }
                        {
                          ((formattedDates.length > 2 && (courseDateInfo == 'Select one below')) && (formattedDates[2]?.label || (courseDateInfo == formattedDates[0]?.label || courseDateInfo == formattedDates[1]?.label))) ? (
                            <div className='date_btn'>
                              <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                  <input class="item-input"
                                    type="radio" name="mode"
                                    value={formattedDates[2]?.label}
                                    aria-labelledby="delivery-0-name"
                                    aria-describedby="delivery-0-shipping delivery-0-price"
                                    // onChange={() => handleDateSelect(item)}
                                    onChange={(e) => {
                                      // setSelectedOption('RESIDENTIAL');
                                      // handleResidential(true);
                                      // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                      setCourseDateInfo(e.target.value)
                                      setCourseDateSelected(true)
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          sdate: e.target.value
                                        })
                                        setEmpty(0)
                                        // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                        //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                        // } else {
                                        //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                        // }
                                        // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                      }
                                    }}

                                  />
                                  <span class="item-info item_desc">
                                    <span id="delivery-0-name" class="item-name date_info">
                                      <span className='style_dates'>{formattedDates[2]?.label}</span></span>
                                  </span>

                                  <strong id="delivery-0-price" class="item-price"></strong>
                                </label>
                              </div>
                            </div>
                            ) : (
                              formattedDates.length > 2 && courseDateInfo != 'Select one below' && !formattedDates.slice(0, 2).some(item => item?.label === courseDateInfo) ?
                            (<div className='date_btn'>
                              <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date selected_date_popup" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                  <input class="item-input"
                                    type="radio" name="mode"
                                    value={courseDateInfo}
                                    aria-labelledby="delivery-0-name"
                                    aria-describedby="delivery-0-shipping delivery-0-price"
                                    onChange={(e) => {
                                      setCourseDateInfo(e.target.value)
                                      setCourseDateSelected(true)
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          sdate: e.target.value
                                        })
                                        setEmpty(0)
                                      }
                                    }}
                                  />
                                  <span class="item-info item_desc">
                                    <span id="delivery-0-name" class="item-name date_info">
                                      <span className='style_dates'>{courseDateInfo}</span></span>
                                  </span>

                                  <strong id="delivery-0-price" class="item-price"></strong>
                                </label>
                              </div>
                            </div>) : (
                              formattedDates.length > 2 &&
                            (  <div className='date_btn'>
                              <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                  <input class="item-input"
                                    type="radio" name="mode"
                                    value={formattedDates[2]?.label}
                                    aria-labelledby="delivery-0-name"
                                    aria-describedby="delivery-0-shipping delivery-0-price"
                                    // onChange={() => handleDateSelect(item)}
                                    onChange={(e) => {
                                      // setSelectedOption('RESIDENTIAL');
                                      // handleResidential(true);
                                      // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                      setCourseDateInfo(e.target.value)
                                      setCourseDateSelected(true)
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          sdate: e.target.value
                                        })
                                        setEmpty(0)
                                        // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                        //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                        // } else {
                                        //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                        // }
                                        // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                      }
                                    }}

                                  />
                                  <span class="item-info item_desc">
                                    <span id="delivery-0-name" class="item-name date_info">
                                      <span className='style_dates'>{formattedDates[2]?.label}</span></span>
                                  </span>

                                  <strong id="delivery-0-price" class="item-price"></strong>
                                </label>
                              </div>
                            </div>)
                            )
                            )

                        }

                        {/* {
                          showDefaultDate === true && formattedDates[2]?.label ? (
                            <div className='date_btn'>
                              <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                  <input class="item-input"
                                    type="radio" name="mode"
                                    value={formattedDates[2]?.label}
                                    aria-labelledby="delivery-0-name"
                                    aria-describedby="delivery-0-shipping delivery-0-price"
                                    // onChange={() => handleDateSelect(item)}
                                    onChange={(e) => {
                                      // setSelectedOption('RESIDENTIAL');
                                      // handleResidential(true);
                                      // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                      setCourseDateInfo(e.target.value)
                                      setCourseDateSelected(true)
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          sdate: e.target.value
                                        })
                                        setEmpty(0)
                                        // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                        //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                        // } else {
                                        //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                        // }
                                        // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                      }
                                    }}

                                  />
                                  <span class="item-info item_desc">
                                    <span id="delivery-0-name" class="item-name date_info">
                                      <span className='style_dates'>{formattedDates[2]?.label}</span></span>
                                  </span>

                                  <strong id="delivery-0-price" class="item-price"></strong>
                                </label>
                              </div>
                            </div>
                          ) : (!notShowDate) ? (
                            <div className='date_btn'>
                              <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date selected_date_popup" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                  <input class="item-input"
                                    type="radio" name="mode"
                                    value={courseDateInfo}
                                    aria-labelledby="delivery-0-name"
                                    aria-describedby="delivery-0-shipping delivery-0-price"
                                    // onChange={() => handleDateSelect(item)}
                                    onChange={(e) => {
                                      // setSelectedOption('RESIDENTIAL');
                                      // handleResidential(true);
                                      // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                      setCourseDateInfo(e.target.value)
                                      setCourseDateSelected(true)
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          sdate: e.target.value
                                        })
                                        setEmpty(0)
                                        // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                        //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                        // } else {
                                        //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                        // }
                                        // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                      }
                                    }}

                                  />
                                  <span class="item-info item_desc">
                                    <span id="delivery-0-name" class="item-name date_info">
                                      <span className='style_dates'>{courseDateInfo}</span></span>
                                  </span>

                                  <strong id="delivery-0-price" class="item-price"></strong>
                                </label>
                              </div>
                            </div>
                          ) : formattedDates[2]?.label ? (
                            <div className='date_btn'>
                              <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                  <input class="item-input"
                                    type="radio" name="mode"
                                    value={formattedDates[2]?.label}
                                    aria-labelledby="delivery-0-name"
                                    aria-describedby="delivery-0-shipping delivery-0-price"
                                    // onChange={() => handleDateSelect(item)}
                                    onChange={(e) => {
                                      // setSelectedOption('RESIDENTIAL');
                                      // handleResidential(true);
                                      // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                      setCourseDateInfo(e.target.value)
                                      setCourseDateSelected(true)
                                      if (e.target.checked) {
                                        setFormData({
                                          ...formData,
                                          sdate: e.target.value
                                        })
                                        setEmpty(0)
                                        // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                        //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                        // } else {
                                        //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                        // }
                                        // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                      }
                                    }}

                                  />
                                  <span class="item-info item_desc">
                                    <span id="delivery-0-name" class="item-name date_info">
                                      <span className='style_dates'>{formattedDates[2]?.label}</span></span>
                                  </span>

                                  <strong id="delivery-0-price" class="item-price"></strong>
                                </label>
                              </div>
                            </div>
                          ) : null
                        } */}

                        {
                          formattedDates.length > 3 && (
                            <div className='upcoming_dates'>
                              <span onClick={handleOpen}>{isRegular ? "See all timings" : "See all upcoming dates"}

                              </span>
                              <img src='/images/upcoming_dates_arrow.svg' alt='' loading='lazy' />
                            </div>
                          )
                        }

                        {openDates && (
                          // <MessageModal 
                          //   message={<TermsCondition />} 
                          //   closePopup={handleClose} 
                          //   type="Terms and Conditions" // You can pass any other props as needed
                          // /> 
                          // <TermsAndConditionsModal />
                          <UpcomingDates isShippingModalOpen={handleOpen} setIsShipppingModalOpen={handleClose} pageDate={formattedDates} setCourseDateInfo={setCourseDateInfo} setCourseDateSelected={setCourseDateSelected} setShowDefaultDate={setShowDefaultDate} setNotShowDate={setNotShowDate} formData={formData} setFormData={setFormData} isRegular={isRegular} courseDateInfo={courseDateInfo}/>
                        )}





                      </div>



                    </form>

                  </div>


                  {isRegular && (
                    <div className='dates_enroll_wrapper'>

                      <div className="label_format_course label_duration">
                        Select Course Duration

                        <div className="msg_duration">
                          <div style={{ display: 'flex' }}>
                            <img src='/images/special_offer.svg' alt='' loading='lazy' />
                          </div>
                          <div style={{ marginLeft: '2px' }}>
                            INR 2200 off for 12 months duration
                          </div>
                        </div>

                        {empty === 20 && <div id="fill_err" style={{ float: 'right', fontSize: '11px', marginTop: '10px', color: 'red' }}> Please select Duration </div>}
                      </div>

                      <form className="residential-form check_course check_date_2" style={{ width: '100%' }}>
                        <div className="last_radio_button " style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

                          {
                            durationList?.slice(0, 2).map((item, index) => {
                              return (
                                <div key={index} className='date_btn'>
                                  <div className='wrapper_center container_date_enroll'>
                                    <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                      <input class="item-input"
                                        type="radio" name="mode"
                                        value={item?.value}
                                        // value={values.endDate}
                                        aria-labelledby="delivery-0-name"
                                        aria-describedby="delivery-0-shipping delivery-0-price"
                                        // onChange={() => handleDateSelect(item)}
                                        onChange={(e) => {
                                          // setSelectedOption('RESIDENTIAL');
                                          // handleResidential(true);
                                          // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                          setCourseDuration(item?.label)
                                          setCourseDurationSelected(true)
                                          setNotShowDuration(true)
                                          if (e.target.checked) {
                                            console.log("Duration selected ", e.target.value)
                                            setCaptureEndDate(item?.value)
                                            createEndDate(values.startDate, item?.value)
                                            // setFormData({
                                            //   ...formData,
                                            //   endDate: e.target.value
                                            // })
                                            setEmpty(0)
                                            // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                            //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                            // } else {
                                            //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                            // }
                                            // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                          }
                                        }}
                                        checked={courseDuration == item?.label}
                                      />
                                      <span class="item-info item_desc">
                                        <span id="delivery-0-name" class="item-name date_info">
                                          <span className='style_dates'>{item?.label}</span></span>
                                      </span>

                                      <strong id="delivery-0-price" class="item-price"></strong>
                                    </label>
                                  </div>
                                </div>
                              )
                            })
                          }

                          {
                            ((courseDuration == 'Select one below') && durationList[2]?.label || (courseDuration == durationList[0]?.label || courseDuration == durationList[1]?.label)) ? (
                              <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                  <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                    <input class="item-input"
                                      type="radio" name="mode"
                                      value={durationList[2]?.label}
                                      aria-labelledby="delivery-0-name"
                                      aria-describedby="delivery-0-shipping delivery-0-price"
                                      // onChange={() => handleDateSelect(item)}
                                      onChange={(e) => {
                                        // setSelectedOption('RESIDENTIAL');
                                        // handleResidential(true);
                                        // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                        setCourseDuration(durationList[2]?.label)
                                        setCourseDurationSelected(true)
                                        if (e.target.checked) {
                                          setCaptureEndDate(durationList[2]?.value)
                                          createEndDate(values.startDate, durationList[2]?.value)
                                          // setFormData({
                                          //   ...formData,
                                          //   sdate: e.target.value
                                          // })
                                          setEmpty(0)
                                          // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                          //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                          // } else {
                                          //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                          // }
                                          // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                        }
                                      }}

                                    />
                                    <span class="item-info item_desc">
                                      <span id="delivery-0-name" class="item-name date_info">
                                        <span className='style_dates'>{durationList[2]?.label}</span></span>
                                    </span>

                                    <strong id="delivery-0-price" class="item-price"></strong>
                                  </label>
                                </div>
                              </div>) : (

                              <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                  <label class="item-label item_date selected_date_popup" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                    <input class="item-input"
                                      type="radio" name="mode"
                                      value={courseDuration}
                                      aria-labelledby="delivery-0-name"
                                      aria-describedby="delivery-0-shipping delivery-0-price"
                                      onChange={(e) => {
                                        setCourseDuration(courseDuration)
                                        setCourseDurationSelected(true)
                                        if (e.target.checked) {
                                          setCaptureEndDate(courseDuration)
                                          createEndDate(values.startDate, courseDuration)
                                          // setFormData({
                                          //   ...formData,
                                          //   sdate: e.target.value
                                          // })
                                          setEmpty(0)
                                        }
                                      }}
                                    />
                                    <span class="item-info item_desc">
                                      <span id="delivery-0-name" class="item-name date_info">
                                        <span className='style_dates'>{courseDuration}</span></span>
                                    </span>

                                    <strong id="delivery-0-price" class="item-price"></strong>
                                  </label>
                                </div>
                              </div>)}

                          {/* {
                            showDefaultDuration === true ? (
                              <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                  <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                    <input class="item-input"
                                      type="radio" name="mode"
                                      // value={durationList[2]?.label}
                                      value={durationList[2]?.value}
                                      // onChange={(value) => {
                                      //   createEndDate('', value)
                                      // }}
                                      aria-labelledby="delivery-0-name"
                                      aria-describedby="delivery-0-shipping delivery-0-price"
                                      // onChange={() => handleDateSelect(item)}
                                      onChange={(e) => {
                                        // setSelectedOption('RESIDENTIAL');
                                        // handleResidential(true);
                                        // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                        setCourseDuration(durationList[2]?.label)
                                        setCourseDurationSelected(true)
                                        if (e.target.checked) {
                                          setCaptureEndDate(durationList[2]?.value)
                                          createEndDate(values.startDate, durationList[2]?.value)
                                          // setFormData({
                                          //   ...formData,
                                          //   sdate: e.target.value
                                          // })
                                          setEmpty(0)
                                          // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                          //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                          // } else {
                                          //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                          // }
                                          // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                        }
                                      }}

                                    />
                                    <span class="item-info item_desc">
                                      <span id="delivery-0-name" class="item-name date_info">
                                        <span className='style_dates'>{durationList[2]?.label}</span></span>
                                    </span>

                                    <strong id="delivery-0-price" class="item-price"></strong>
                                  </label>
                                </div>
                              </div>
                            ) : (!notShowDuration) ? (
                              <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                  <label class="item-label item_date selected_date_popup" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                    <input class="item-input"
                                      type="radio" name="mode"
                                      value={courseDuration}
                                      aria-labelledby="delivery-0-name"
                                      aria-describedby="delivery-0-shipping delivery-0-price"
                                      // onChange={() => handleDateSelect(item)}
                                      onChange={(e) => {
                                        // setSelectedOption('RESIDENTIAL');
                                        // handleResidential(true);
                                        // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                        setCourseDuration(e.target.value)
                                        setCourseDurationSelected(true)
                                        if (e.target.checked) {
                                          setCaptureEndDate(courseDuration)
                                          createEndDate(values.startDate, courseDuration)
                                          // setFormData({
                                          //   ...formData,
                                          //   sdate: e.target.value
                                          // })
                                          setEmpty(0)
                                          // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                          //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                          // } else {
                                          //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                          // }
                                          // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                        }
                                      }}

                                    />
                                    <span class="item-info item_desc">
                                      <span id="delivery-0-name" class="item-name date_info">
                                        <span className='style_dates'>{courseDuration}</span></span>
                                    </span>

                                    <strong id="delivery-0-price" class="item-price"></strong>
                                  </label>
                                </div>
                              </div>
                            ) : (
                              <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                  <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                                    <input class="item-input"
                                      type="radio" name="mode"
                                      value={durationList[2]?.value}
                                      aria-labelledby="delivery-0-name"
                                      aria-describedby="delivery-0-shipping delivery-0-price"
                                      // onChange={() => handleDateSelect(item)}
                                      onChange={(e) => {
                                        // setSelectedOption('RESIDENTIAL');
                                        // handleResidential(true);
                                        // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
                                        setCourseDuration(e.target.value)
                                        setCourseDurationSelected(true)
                                        if (e.target.checked) {
                                          setCaptureEndDate(durationList[2]?.value)
                                          createEndDate(values.startDate, durationList[2]?.value)
                                          // setFormData({
                                          //   ...formData,
                                          //   sdate: e.target.value
                                          // })
                                          setEmpty(0)
                                          // if (currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India') {
                                          //   setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                                          // } else {
                                          //   setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                                          // }
                                          // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                                        }
                                      }}

                                    />
                                    <span class="item-info item_desc">
                                      <span id="delivery-0-name" class="item-name date_info">
                                        <span className='style_dates'>{durationList[2]?.label}</span></span>
                                    </span>

                                    <strong id="delivery-0-price" class="item-price"></strong>
                                  </label>
                                </div>
                              </div>
                            )
                          } */}

                          <div className='upcoming_dates'>
                            <span onClick={handleOpenDuration}>See all available Duration

                            </span>
                            <img src='/images/upcoming_dates_arrow.svg' alt='' loading='lazy' />
                          </div>

                          {openDuration && (
                            // <MessageModal 
                            //   message={<TermsCondition />} 
                            //   closePopup={handleClose} 
                            //   type="Terms and Conditions" // You can pass any other props as needed
                            // />
                            // <TermsAndConditionsModal />
                            <UpcomingDuration isShippingModalOpen={handleOpenDuration} setIsShipppingModalOpen={handleCloseDuration} pageDate={formattedDates} setCourseDuration={setCourseDuration} setCourseDurationSelected={setCourseDurationSelected} setShowDefaultDuration={setShowDefaultDuration} setNotShowDuration={setNotShowDuration} formData={formData} setFormData={setFormData} isRegular={isRegular} durationList={durationList} createEndDate={createEndDate} setCaptureEndDate={setCaptureEndDate} values={values} courseDuration={courseDuration}/>
                          )}





                        </div>



                      </form>

                    </div>
                  )}


                </div>

                <div className='img_wrapper_date_format'>
                  <img src='/images/yoga_img.png' alt='' loading='lazy' />
                </div>

              </div>

              <div className='fees_wrapper'>
                <div className='fees_show'>
                  <div className='fees_left_wrapper'>
                    <img src='/images/fees_left.png' alt='' loading='lazy' />
                  </div>
                  <div className='fees_price_wrapper'>
                    <span className='fees_label'>Fees : </span>
                    <span className='price_select'>INR {isRegular ? onSelectFormat ? isRegularPrice : 0 : priceSelect}</span>
                  </div>
                  <div className='fees_left_wrapper'>
                    <img src='/images/fees_right.png' alt='' loading='lazy' />
                  </div>
                </div>
              </div>




            </div>
          )}

          <div className="accordian_holder">

            <div onClick={toggleAccordion} className="accordion-header">
              <div>
                <div className='accordian_title'>Student details</div>
                <div className='accordian_sub-title'>Click here to edit your profile</div>
              </div>
              <div className={`${openEdit ? "rotate_icon_arrow" : ""}`}>
                <img src="/images/edit_mob_dropdown.svg" alt="" />
              </div>
            </div>
            {/* Show content if the accordion is open */}
            <div ref={accordionRef} className={`desc ${openEdit ? "show" : ""}`}>
              <div className='hidden'>
                <div className='fields_alignment fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Name</span> <span className='tenure_course'>{`${formData?.name} ${formData?.lname}`}</span></div>

                </div>
                <div className='details_desc_days fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Email Address</span> <span className='tenure_course'>{formData?.email}</span></div>

                </div>
                <div className='details_desc_days fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Mobile Number</span> <span className='tenure_course'>{formData?.phone}</span></div>

                </div>
                <div className='details_desc_days fields_alignment_bottom'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Gender</span> <span className='tenure_course'>{formData?.gender}</span></div>

                </div>
                <div className='details_desc_days'>
                  <div className='details_desc_name_info'><span className='details_duration_info'>Address</span> <span className='tenure_course'>
                    {formData?.address1}
                    {formData?.address1 && <>, </>}
                    {formData?.state}
                    {formData?.country && <>, </>}
                    {formData?.country}
                    {formData?.pincode && <> - </>}
                    {formData?.pincode}

                    {/* {`${formData?.address1} ${formData?.state}, ${formData?.country} - ${formData?.pincode}`} */}
                  </span></div>

                </div>

                <div className='edit_show'>
                  <div onClick={handleShowEdit}>
                    <span>Edit</span>
                    &nbsp;&nbsp;
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.9215 8.75992C12.7288 8.75992 12.5728 8.91598 12.5728 9.10859V12.2044C12.5721 12.7819 12.1042 13.2499 11.5268 13.2504H1.74336C1.16586 13.2499 0.698042 12.7819 0.697345 12.2044V3.11836C0.698042 2.541 1.16589 2.07304 1.74336 2.07234H4.83922C5.0318 2.07234 5.1879 1.91624 5.1879 1.72367C5.1879 1.53121 5.0318 1.375 4.83922 1.375H1.74336C0.780957 1.37608 0.00108088 2.15596 0 3.11836V12.2046C0.00108088 13.1669 0.780957 13.9468 1.74336 13.9479H11.5268C12.4891 13.9468 13.269 13.1669 13.2701 12.2046V9.10859C13.2701 8.91598 13.114 8.75992 12.9215 8.75992Z" fill="black" />
                      <path d="M13.1332 0.478122C12.5204 -0.134635 11.527 -0.134635 10.9142 0.478122L4.69363 6.69868C4.65105 6.74126 4.62023 6.79414 4.60416 6.85217L3.78614 9.80542C3.76963 9.86489 3.76921 9.92766 3.7849 9.98734C3.8006 10.047 3.83186 10.1015 3.87549 10.1451C3.91912 10.1888 3.97355 10.22 4.03323 10.2358C4.0929 10.2515 4.15568 10.2511 4.21515 10.2346L7.16841 9.41641C7.22644 9.40034 7.27932 9.36952 7.32189 9.32694L13.5423 3.10628C14.1541 2.49307 14.1541 1.50046 13.5423 0.887289L13.1332 0.478122ZM5.45336 6.92532L10.5444 1.83414L12.1863 3.47604L7.09515 8.56722L5.45336 6.92532ZM5.12539 7.58344L6.4371 8.89532L4.62268 9.39803L5.12539 7.58344ZM13.0493 2.61322L12.6795 2.98295L11.0374 1.34091L11.4074 0.971145C11.7478 0.630771 12.2996 0.630771 12.64 0.971145L13.0493 1.38028C13.3891 1.72107 13.3891 2.27257 13.0493 2.61322Z" fill="black" />
                    </svg>

                    {/* <div> */}
                    {/* <img src="/images/edit_icon.svg" alt="" /> */}
                    {/* </div> */}
                  </div>

                </div>

                {showEdit && (
                  // <MessageModal 
                  //   message={<TermsCondition />} 
                  //   closePopup={handleClose} 
                  //   type="Terms and Conditions" // You can pass any other props as needed
                  // />
                  // <TermsAndConditionsModal />
                  <EditStudent isShippingModalOpen={handleShowEdit} setIsShipppingModalOpen={handleCloseEdit} formData={formData} setFormData={setFormData} setEmpty={setEmpty} empty={empty} currentCourse={currentCourse} dateDurationChange={dateDurationChange} />)}
              </div>
            </div>

          </div>







          <form class="check_course" onsubmit="return false">





            {/* <div class="grid grid-2"> */}
            {/* <label class="item-label">
      <input class="item-input" type="radio" name="delivery" value="standard" aria-labelledby="delivery-0-name" aria-describedby="delivery-0-shipping delivery-0-price" checked />
      <span class="item-info">
        <span id="delivery-0-name" class="item-name">Standard</span>
        <br />
        <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small>
      </span>
      <strong id="delivery-0-price" class="item-price">$5.00</strong>
    </label>


    <label class="item-label">
      <input class="item-input" type="radio" name="delivery" value="fast" aria-labelledby="delivery-1-name" aria-describedby="delivery-1-shipping delivery-1-price" />
      <span class="item-info">
        <span id="delivery-1-name" class="item-name">Fast</span>
        <br />
        <small id="delivery-1-shipping" class="item-shipping">2–4 business days</small>
      </span>
      <strong id="delivery-1-price" class="item-price">$15.00</strong>
    </label> */}
            {/* </div> */}

          </form>





          {/* <div className="upload-section">
            <p className="course-details-text">
              {currentCourse.certficate === true &&
                'Please upload the relevant TYI certificate pre requisite*'}
              <div className="uploads">
                {currentCourse.certficate === true && (
                  <fieldset>
                    <label htmlFor="resume">
                      {courseAsset2
                        ? certificateName.substring(0, 15)
                        : 'Upload Certificate '}
                      <input
                        type={'file'}
                        onChange={(e) => {
                          uploadDoc(
                            e.target.files[0],
                            'applicant_certificate',
                            'CERTIFICATE'
                          )
                          setcertificateName(e.target.files[0].name)
                        }}
                        id="resume"
                        accept=".pdf"
                        placeholder="Upload Cerificate"
                      />
                      &ensp;
                      {upload}
                    </label>
                    {empty === 'certificate' && (
                      <small style={{ color: 'red' }}>
                        Please upload relevant certificate
                      </small>
                    )}
                  </fieldset>
                )}
                <fieldset>
                  <label htmlFor="image">
                    {courseAsset1
                      ? pictureName.substring(0, 15)
                      : 'Upload Passport size photo'}
                    <input
                      type={'file'}
                      name="uploadImage"
                      id="image"
                      onChange={(e) => {
                        
                        uploadDoc(e.target.files[0], 'applicant_image', 'IMAGE')
                        setPictureName(e.target.files[0].name)
                      }}
                      placeholder="Upload Passport size photo"
                      accept="image/*"
                    />
                    &ensp;
                    {upload}
                  </label> */}
          {/* {empty === 'uploadImage' && (
                    <small style={{ color: 'red' }} className="mode-err">Please upload a image</small>
                  )} */}
          {/* </fieldset>
              </div>
            </p>
          </div> */}
        </div>
        {/* <div className="footer-submit">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div> */}
      </div>
    </div>
  )
}
export default CourseDetails