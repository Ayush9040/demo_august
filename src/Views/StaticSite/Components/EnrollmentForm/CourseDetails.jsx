import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { upload } from '../../assets/icons/icon'
import { uploadFile } from '../../../../helpers/OssHelper'
import { useLocation } from 'react-router-dom';
// import DatesPopUp from '../TermsandCondition/DatesPopUp';
import UpcomingDates from './UpcomingDates';
import EditStudent from './EditStudent';
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
  dateDurationChange
}) => {

  const [optionsCount, setOptionsCount] = useState(0);
  const location = useLocation();
  const isSatsangPage = location.pathname === '/enrollment/satsang';
  const [setDate, setSetDate ] = useState(false);
  const [priceSelect, setPriceSelect] = useState(0);
  const [courseFormatInfo, setCourseFormatInfo] = useState('Select one below')
  const [ courseFormatSelected, setCourseFormatSelected] = useState(false)
  const [courseDateInfo, setCourseDateInfo] = useState('Select one below')
  const [ courseDateSelected, setCourseDateSelected] = useState(false)
  const [ showDefaultDate, setShowDefaultDate ] = useState(true)
  const [ notShowDate, setNotShowDate] = useState(true)
  const [ openEdit, setOpenEdit] = useState(false)
  const [ showEdit, setShowEdit] = useState(false)

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


console.log("CD from formatted Addrss ", formattedDates)


  return (
    <div className="main-container">
      <div className="course-main-container">
        <div className="course-secondary-container">
          <div className="details_box">
            <div className="details_course_box">
              <div className="detail_image_box">
                <img src={currentCourse?.image} alt={currentCourse?.title} />
              </div>
              <div className="current_duration">
                <div>
                  <span className='details_newName'>
                  {currentCourse?.newName}&nbsp;
                  </span>
                  {/* {courseDate !== 'null' ? courseDate : ''} */}
                </div>
                <div className='details_desc_info'>
                  <div className='details_wrapper_duration'><span className='details_duration_info'>Duration:</span> <span className='tenure_course'>{currentCourse?.tenure}</span></div>
                  <div className='details_wrapper_duration'><span className='details_lang_info'>Language:</span> <span className='lang_course'>{currentCourse?.language}</span></div>
                </div>
                <div className='time_days_wrapper'>
                <div className='details_desc_days details_desc_days_2'>
                  <div><span className='details_duration_info'>Days:</span> <span className='tenure_course'>{currentCourse?.days[0]}</span></div>
                  
                </div>
                <div className='details_desc_days'> 
                  <div><span className='details_duration_info'>Time:</span> <span className='tenure_course'>{currentCourse?.time[0]}</span></div>
                  
                </div>
                </div>
                
                {/* {courseFee && <p className="current_fees"> {currentCourse.key === 'ma-yoga-shastra' && formData.country !== 'India' ? '$ 3950' : `₹ ${courseFee}`}</p>} */}
                {/* {courseFee && <p className="current_fees"> ₹ {courseFee}</p>} */}
              </div>
            </div>


            <div className='btn_mode_date_wrapper'>

                <div className={courseFormatSelected === true ? 'details_wrapper_duration_3' : 'details_wrapper_duration_2'}><span className='details_duration_info' style={{ color: 'rgba(0, 0, 0, 1)'}}>Course format - {courseFormatInfo}</span></div>

                <div className={courseDateSelected === true ? 'details_wrapper_duration_3' :'details_wrapper_duration_2'}><span className='details_duration_info' style={{ color: 'rgba(0, 0, 0, 1)'}}>Course Date - {courseDateInfo}</span></div>


                </div>

                


          </div>


          { !isSatsangPage && (
            <div className='wrapper_date_and_course'>

            <div className='course_format_wrapper'>


            <div className='details_format_date'>


            <div className="label_format_course">
            Select Course Format
          </div>
          {console.log('CC', currentCourse)}
          <form className="residential-form check_course">
            <div className="last_radio_button ">
              {shouldShowOfflineOption() &&
                (
                  <label class="item-label item_format">
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
                    <strong id="delivery-0-price" class="item-price">INR {currentCourse?.fees?.onlineFee}</strong>
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


                <label class="item-label item_format">
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
                  <strong id="delivery-0-price" class="item-price"> INR {currentCourse?.fees?.onlineFee}</strong>
                </label>
              )}
            </div>
            {empty === 'mode' && (
              <small className="mode-err">Please select 1 mode</small>
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


                <label class="item-label item_format">
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


                <label class="item-label item_format">
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


          <div className='dates_enroll_wrapper'>

          <div className="label_format_course">
            Select Course Start Date 

            {empty === 18 && <div id="fill_err" style={{ float: 'right', fontSize: '10px', marginTop: '10px', color: 'red'}}> Please select course date</div>}
          </div>

          <form className="residential-form check_course check_date_2" style={{ width: '100%'}}>
            <div className="last_radio_button " style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

                {
                    formattedDates?.slice(0, 2).map((item, index) => {
                        return (
                            <div key={index} className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                            <input class="item-input"
                              type="radio" name="mode"
                              value={item.label}
                              aria-labelledby="delivery-0-name"
                              aria-describedby="delivery-0-shipping delivery-0-price"
                              // onChange={() => handleDateSelect(item)}
                              onChange={(e) => {
                                // setSelectedOption('RESIDENTIAL');
                                // handleResidential(true);
                                // setPriceSelect(currentCourse?.fees?.offlineFee?.residentialFee)
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
                        
                              />
                            <span class="item-info item_desc">
                              <span id="delivery-0-name" class="item-name date_info">
                                <span className='style_dates'>{item.label}</span></span>    
                            </span>
                            
                            <strong id="delivery-0-price" class="item-price"></strong>
                          </label>
                                </div>
                            </div>
                        )
                    })
                }

                {
                  showDefaultDate === true ? (
                    <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                            <input class="item-input"
                              type="radio" name="mode"
                              value={formattedDates[2].label}
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
                                <span className='style_dates'>{formattedDates[2].label}</span></span>    
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
                  ) : (
                    <div className='date_btn'>
                                <div className='wrapper_center container_date_enroll'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '25px' }}>
                            <input class="item-input"
                              type="radio" name="mode"
                              value={formattedDates[2].label}
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
                                <span className='style_dates'>{formattedDates[2].label}</span></span>    
                            </span>
                            
                            <strong id="delivery-0-price" class="item-price"></strong>
                          </label>
                                </div>
                            </div>
                  )
                }

                <div className='upcoming_dates'>
                  <span onClick={handleOpen}>See all upcoming dates
                     
                     </span>
                     <img src='/images/upcoming_dates_arrow.svg' alt='' loading='lazy' />
                </div>

                {openDates && (
              // <MessageModal 
              //   message={<TermsCondition />} 
              //   closePopup={handleClose} 
              //   type="Terms and Conditions" // You can pass any other props as needed
              // />
              // <TermsAndConditionsModal />
              <UpcomingDates isShippingModalOpen={handleOpen} setIsShipppingModalOpen={handleClose} pageDate={formattedDates} setCourseDateInfo={setCourseDateInfo} setCourseDateSelected={setCourseDateSelected} setShowDefaultDate={setShowDefaultDate} setNotShowDate={setNotShowDate} formData={formData} setFormData={setFormData} />
            )}
              
                
                 

              
            </div>

            

          </form>

          </div>


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
                  <span className='price_select'>{priceSelect}</span>
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
            <div className='details_desc_name_info'><span className='details_duration_info'>Address</span> <span className='tenure_course'>{`${formData?.address1}, ${formData?.state}, ${formData?.country} - ${formData?.pincode}`}</span></div>
            
          </div>

          <div className='edit_show'>
            <div onClick={handleShowEdit}>
              <span>Edit</span>
              <div>
              <img src="/images/edit_icon.svg" alt="" />
              </div>
            </div>
            
          </div>

          {showEdit && (
              // <MessageModal 
              //   message={<TermsCondition />} 
              //   closePopup={handleClose} 
              //   type="Terms and Conditions" // You can pass any other props as needed
              // />
              // <TermsAndConditionsModal />
              <EditStudent isShippingModalOpen={handleShowEdit} setIsShipppingModalOpen={handleCloseEdit}  formData={formData} setFormData={setFormData} setEmpty={setEmpty} empty={empty} currentCourse={currentCourse} dateDurationChange={dateDurationChange} />)}
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