import React, { useEffect } from 'react'
import { useState } from 'react'
import { upload } from '../../assets/icons/icon'
import { uploadFile } from '../../../../helpers/OssHelper'
import Loader from '../Loader'
const CourseDetails = ({
  currentCourse,
  courseDate,
  formData,
  setFormData,
  courseAsset1,
  setCourseAsset1,
  courseAsset2,
  setCourseAsset2,
  handleSubmit,
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

  const [pictureName, setPictureName] = useState('')
  const [certificateName, setcertificateName] = useState('')
  const [loading, setLoading] = useState(false)

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
    setLoading(false)
  }

  const updatedFees = (course, mode) => {
    switch (course) {
    case 'one-month-ttc':
      if (courseDate === '1st Dec to 31st Dec 2022') {
        if (mode === 'ONLINE') return 22000
        if (mode === 'RESIDENTIAL') return 50000
        if (mode === 'NONRESIDENTIAL') return 28000
      } else {
        if (mode === 'ONLINE') return currentCourse.onlineFee
        if (mode === 'RESIDENTIAL')
          return currentCourse.offlineFee.residentialFee
        if (mode === 'NONRESIDENTIAL')
          return currentCourse.offlineFee.nonResidentialFee
      }
      break
    case '200-hrs-part-time-ttc-online-english':
      if (courseDate === '12th Dec to 4th Feb 2023') {
        if (mode === 'ONLINE') return 22000
      } else {
        if (mode === 'ONLINE') return currentCourse.onlineFee
      }
      break
    case '200-hrs-part-time-ttc-on-campus-english':
      if (courseDate === '26th Dec to 17th Feb 2023') {
        if (mode === 'ONLINE') return 22000
        if (mode === 'RESIDENTIAL') return 70000
        if (mode === 'NONRESIDENTIAL') return 28000
      } else {
        if (mode === 'ONLINE') return currentCourse.onlineFee
        if (mode === 'RESIDENTIAL')
          return currentCourse.offlineFee.residentialFee
        if (mode === 'NONRESIDENTIAL')
          return currentCourse.offlineFee.nonResidentialFee
      }
      break
    case '200-hrs-part-time-ttc-online': if(courseDate === '19th Dec to 11th Feb 2023') {
      if (mode === 'ONILINE') return 22000
    }else {
      if (mode === 'ONLINE') return currentCourse.onlineFee
    }
      break
    case 'cardiac-hypertension-workshop': if(courseDate === '24th December 2022'){
      if (mode==='ONLINE') return true
    } else { if (mode === 'ONLINE') return false }
      break
    case 'pregnancy-camp-for-ante-post-natal': if(courseDate === '17th Dec to 18th Dec 2022'){
      if (mode==='ONLINE') return true
    } else { if (mode === 'ONLINE') return false }
      break
    case 'back-joint-disorder-workshop': if(courseDate === '25th December 2022'){
      if (mode==='ONLINE') return true
    } else { if (mode === 'ONLINE') return false }
      break
    case 'pranayama-workshop': if(courseDate === '18th December 2022'){
      if (mode==='ONLINE') return true
    } else { if (mode === 'ONLINE') return false }
    }
  }
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
                {courseFee && <p className="current_fees"> ₹ {courseFee}</p>}
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
                      // setCourseFee(currentCourse?.fees?.onlineFee)
                      setCourseFee(updatedFees)
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
                      // setCourseFee(currentCourse?.fees?.onlineFee)
                      setCourseFee(updatedFees)
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
                      // setCourseFee(
                      //   currentCourse?.fees?.offlineFee?.residentialFee
                      // )
                      setCourseFee(updatedFees)
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
                      // setCourseFee(
                      //   currentCourse?.fees?.offlineFee?.nonResidentialFee
                      // )
                      setCourseFee(updatedFees)
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
                {loading ? (
                  <Loader />
                ) : (
                  <fieldset>
                    <label htmlFor="image">
                      {courseAsset1
                        ? pictureName.substring(0, 15)
                        : 'Upload Passport size photo'}
                      <input
                        type={'file'}
                        id="image"
                        onChange={(e) => {
                          setLoading(true)
                          uploadDoc(
                            e.target.files[0],
                            'applicant_image',
                            'IMAGE'
                          )
                          setPictureName(e.target.files[0].name)
                        }}
                        placeholder="Upload Passport size photo"
                        accept="image/*"
                      />
                      &ensp;
                      {upload}
                    </label>
                  </fieldset>
                )}
              </div>
            </p>
          </div>
        </div>
        <div className="footer-submit">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
export default CourseDetails
