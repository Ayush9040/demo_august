import React,{ useEffect } from 'react'
import { useState } from 'react'
import { upload } from '../../assets/icons/icon'
import { uploadFile } from '../../Views/Courses/Helper'
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
  setCourseFee
}) => {
  useEffect(() => {
    if(formData.mode === 'ONLINE'){
      setFormData({ ...formData,residental:'' })
    }
  }, [formData.mode])

  const [pictureName,setPictureName]=useState('')
  const [certificateName,setcertificateName]=useState('')

  
 
  // const getBase64 = (file, cb)=>{
  //   let reader = new FileReader()
  //   reader.readAsDataURL(file)
  //   reader.onload = function() {
  //     cb(reader.result)
  //   }
  //   reader.onerror = function(error) {
  //     console.log('Error: ', error)
  //   }
  // }

  const uploadDoc = async(file,type, changeValue)=> {
    const url = await uploadFile( file,type )
    if(changeValue==='CERTIFICATE'){
      setCourseAsset2(url)
    }else if(changeValue==='IMAGE')
      setCourseAsset1(url)
  }

  return (
    <div className="main-container">
      <div className="course-main-container">
        <div className="course-secondary-container">
          <div className="details_box">
            <div className="details_course_box">
              <div className="detail_image_box">
                <img src={currentCourse?.image} alt="" />
              </div>
              <div className="current_duration">
                <div>
                  {currentCourse?.title}&nbsp;
                  {courseDate ? courseDate : ''}
                </div>
                { courseFee &&  <p className="current_fees"> ₹ {courseFee}</p>}
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
                  disabled={currentCourse.onCampus===false}
                  checked={formData.mode==='OFFLINE'}
                  style={
                    currentCourse.onCampus === false
                      ? { background: 'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)' }
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
                  checked={formData.mode==='ONLINE'}
                  style={
                    currentCourse.online === false ? { background: 'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)' } : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        mode: e.target.value,
                      })
                      setEmpty(0)
                      setCourseFee(currentCourse?.fees?.onlineFee)
                    }
                  }}
                />{' '}
                &nbsp; Online
              </label>
            </div>
            { empty==='mode' && <small className='mode-err' >Please select 1 mode</small>}
            <div className="last_radio_button-cols">
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="resident"
                  value="RESIDENTIAL"
                  checked={formData.mode === 'OFFLINE' && formData.residental ==='RESIDENTIAL'}
                  disabled={currentCourse.residential === false || formData.mode === 'ONLINE'}
                  style={
                    currentCourse.residential === false ? { background: 'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)' } : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                      setEmpty(0)
                      setCourseFee(currentCourse?.fees?.offlineFee?.residentialFee)
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
                  checked={formData.mode === 'OFFLINE' && formData.residental ==='NONRESIDENTIAL'}
                  disabled={currentCourse.nonResidential === false  || formData.mode === 'ONLINE'}
                  style={
                    currentCourse.nonResidential === false
                      ? { background: 'url(https://ecom-static-site.oss-ap-south-1.aliyuncs.com/icons/icons8-multiply-24.png)' }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                      setEmpty(0)
                      setCourseFee(currentCourse?.fees?.offlineFee?.nonResidentialFee)
                    }
                  }}
                />{' '}
                &nbsp; Non-Residential
              </label>
              { empty==='subMode' && <small className='mode-err' >Please select submode</small>}
            </div>
          </form>
          <div className="upload-section">
            <p className="course-details-text">
              { currentCourse.cetificate===true && 'Please upload the relevant TYI certificate pre requisite' }
              <div className="uploads">
                { currentCourse.certificate===true && <fieldset>
                  <label htmlFor="resume">
                    {courseAsset2
                      ? certificateName.substring(0, 15)
                      : 'Upload Certificate '}
                    <input
                      type={'file'}
                      onChange={(e) => {uploadDoc(e.target.files[0],'certificate','CERTFICATE');setcertificateName(e.target.files[0].name)}}
                      id="resume"
                      accept=".pdf"
                      placeholder="Upload Certificate"
                    />
                    &ensp;
                    {upload}
                  </label>
                </fieldset>}
                <fieldset>
                  <label htmlFor="image">
                    {courseAsset1
                      ? pictureName.substring(0, 15)
                      : 'Upload Passport size photo'}
                    <input
                      type={'file'}
                      id="image"
                      onChange={(e) => {uploadDoc(e.target.files[0],'user_iamge','IMAGE');setPictureName(e.target.files[0].name)}}
                      placeholder="Upload Passport size photo"
                      accept="image/*"
                    />
                    &ensp;
                    {upload}
                  </label>
                </fieldset>
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