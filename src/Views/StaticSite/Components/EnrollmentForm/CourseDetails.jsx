import React, { useEffect } from 'react'
import { useState } from 'react'
import { upload } from '../../assets/icons/icon'
import { uploadFile } from '../../../../helpers/OssHelper'
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

}) => {
  useEffect(() => {
    if (formData.mode === 'ONLINE') {
      setFormData({ ...formData, residental: '' })
    }
  }, [formData.mode])

  useEffect(()=>{
    if (currentCourse.key === 'ma-yoga-shastra' && formData.country !== 'India' && formData?.residental === 'NONRESIDENTIAL') {
      setCourseFee(currentCourse?.fees?.internationalFee?.nonResidentialFee)
    } else if (currentCourse.key === 'ma-yoga-shastra' && formData?.residental === 'NONRESIDENTIAL'){
      setCourseFee(currentCourse?.fees?.offlineFee?.nonResidentialFee)
    }
  }, [formData])


  const [pictureName, setPictureName] = useState('')
  const [certificateName, setcertificateName] = useState('')
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

  const uploadDoc = async(file, type, changeValue) => {
    const url = await uploadFile(file, type)
    if (changeValue === 'CERTIFICATE') {
      setCourseAsset2(url)
      setEmpty(0)
    } else if (changeValue === 'IMAGE') setCourseAsset1(url)
  }


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
                  {currentCourse?.title}&nbsp;
                  {courseDate !== 'null' ? courseDate : ''}
                </div>
                {courseFee && <p className="current_fees"> {currentCourse.key === 'ma-yoga-shastra' && formData.country !== 'India' ? '$ 3950' : `₹ ${courseFee}`}</p>}
                {/* {courseFee && <p className="current_fees"> ₹ {courseFee}</p>} */}
              </div>
            </div>
          </div>
          <div className="course-details-text">
            Please select one of these options*
          </div>
          <form className="residential-form">
            <div className="last_radio_button">
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="mode"
                  value="OFFLINE"
                  disabled={currentCourse.onCampus === false}
                  checked={formData.mode === 'OFFLINE'}
                  style={
                    currentCourse.onCampus === false
                      ? {
                        background:
                            'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)',
                      }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        mode: e.target.value,
                      })
                      setEmpty(0)
                      setCourseFee(currentCourse?.fees?.onlineFee)
                      // setCourseFee(updatedFees( currentCourse?.key,'OFFLINE' ))
                    }
                  }}
                />
                &nbsp;Offline
              </label>
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="mode"
                  value="ONLINE"
                  disabled={currentCourse.online === false}
                  checked={formData.mode === 'ONLINE'}
                  style={
                    currentCourse.online === false
                      ? {
                        background:
                            'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)',
                      }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        mode: e.target.value,
                      })
                      setEmpty(0)
                      setCourseFee(currentCourse?.fees?.onlineFee)
                      // setCourseFee(updatedFees( currentCourse?.key,'ONLINE' ))
                    }
                  }}
                />{' '}
                &nbsp; Online
              </label>
            </div>
            {empty === 'mode' && (
              <small className="mode-err">Please select 1 mode</small>
            )}
            <div className="last_radio_button-cols">
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="resident"
                  value="RESIDENTIAL"
                  checked={
                    formData.mode === 'OFFLINE' &&
                    formData.residental === 'RESIDENTIAL'
                  }
                  disabled={
                    currentCourse.residential === false ||
                    formData.mode === 'ONLINE' ||
                    (currentCourse.key === '7-days-camp-english' &&
                      courseDate == '24th Sept to 30th Sept 2022')
                  }
                  style={
                    currentCourse.residential === false ||
                    (currentCourse.key === '7-days-camp-english' &&
                      courseDate == '24th Sept to 30th Sept 2022')
                      ? {
                        background:
                            'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)',
                      }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                      setEmpty(0)
                      if(currentCourse?.key === 'ma-yoga-shastra' && currentCourse.country !== 'India'){
                        setCourseFee(currentCourse?.fees?.internationalFee?.residentialFee)
                      } else {
                        setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
                      }
                      // setCourseFee(updatedFees( currentCourse?.key,'RESIDENTIAL' ))
                    }
                  }}
                />{' '}
                &nbsp; Residential
              </label>
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="resident"
                  value="NONRESIDENTIAL"
                  checked={
                    formData.mode === 'OFFLINE' &&
                    formData.residental === 'NONRESIDENTIAL'
                  }
                  disabled={
                    currentCourse.nonResidential === false ||
                    formData.mode === 'ONLINE'
                  }
                  style={
                    currentCourse.nonResidential === false
                      ? {
                        background:
                            'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)',
                      }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                      setEmpty(0)
                      setCourseFee(
                        currentCourse?.fees?.offlineFee?.nonResidentialFee
                      )
                      // setCourseFee(updatedFees( currentCourse?.key,'NONRESIDENTIAL' ))
                    }
                  }}
                />{' '}
                &nbsp; Non-Residential
              </label>
              {empty === 'subMode' && (
                <small className="mode-err">Please select submode</small>
              )}
            </div>
          </form>
          <div className="upload-section">
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
                  </label>
                  {/* {empty === 'uploadImage' && (
                    <small style={{ color: 'red' }} className="mode-err">Please upload a image</small>
                  )} */}
                </fieldset>
              </div>
            </p>
          </div>
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