import React from 'react'
import { upload } from '../../assets/icons/icon'

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
}) => {
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
                <p className="current_fees"> ₹ {currentCourse?.fees}</p>
              </div>
            </div>
          </div>
          <div className="course-details-text">
            Please select one of these options
          </div>
          <form className="residential-form">
            <div className="last_radio_button">
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="resident"
                  value="OFFLINE"
                  disabled={currentCourse.onCampus === false ? true : false}
                  style={
                    currentCourse.onCampus === false
                      ? { background: 'grey' }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                    }
                  }}
                />
                &nbsp;Offline
              </label>
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="resident"
                  value="ONLINE"
                  disabled={currentCourse.online === false ? true : false}
                  style={
                    currentCourse.online === false ? { background: 'grey' } : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                    }
                  }}
                />{' '}
                &nbsp; Online
              </label>
            </div>
            <div className="last_radio_button-cols">
              <label htmlFor="" className="course_details_text">
                <input
                  type="radio"
                  name="resident"
                  value="RESIDENTIAL"
                  disabled={currentCourse.residential === false ? true : false}
                  style={
                    currentCourse.residential === false
                      ? { background: 'grey' }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
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
                  disabled={
                    currentCourse.nonResidential === false ? true : false
                  }
                  style={
                    currentCourse.nonResidential === false
                      ? { background: 'grey' }
                      : {}
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        residental: e.target.value,
                      })
                    }
                  }}
                />{' '}
                &nbsp; Non-Residential
              </label>
            </div>
          </form>
          <div className="upload-section">
            <p className="course-details-text">
              Please upload the relevant TYI certificate pre requisite
              <div className="uploads">
                <fieldset>
                  <label htmlFor="resume">
                    {courseAsset2
                      ? courseAsset2.substring(0, 15)
                      : 'Upload Certificate '}
                    <input
                      type={'file'}
                      onChange={(e) => setCourseAsset2(e.target.files[0].name)}
                      id="resume"
                      accept=".pdf"
                      placeholder="Upload Certificate"
                    />
                    &ensp;
                    {upload}
                  </label>
                </fieldset>
                <fieldset>
                  <label htmlFor="image">
                    {courseAsset1
                      ? courseAsset1.substring(0, 15)
                      : 'Upload Passport size photo'}
                    <input
                      type={'file'}
                      id="image"
                      onChange={(e) => setCourseAsset1(e.target.files[0].name)}
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
