import React from 'react'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import VolunteerGrid from '../../Components/VolunteerGrid'
// import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
// import './style.scss'
// import Amitabh from '../../../assets/images/Amitabh-Bachchan.jpg';
import { Volunteer } from '../../utils/JobDetails'

const VolunteerJob = () => {
  return (
    <div className="single-job">
      <CommonBannerNavPrimary innerNav={false} /> <br />
      <div className="job-details">
        <div className="job-description">
          <div className="job-img">
            <img src={Volunteer.jobThumbnail} alt={'title'} />
          </div>
          <div className="job-info">
            <h1>
              {Volunteer.jobTitle}
              <div className="bottom-line"></div>
            </h1>
            <p>{Volunteer.jobDescription}</p>
          </div>
        </div>
        <div className="job-application">
          <div className="job-requirements">
            <ul>
              {Volunteer.jobRequirements.map((item, i) => (
                <li key={i}>
                  <span>Requirement:</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="job-form">
            <form>
              <fieldset>
                <input type={'text'} placeholder={'Name'} />
              </fieldset>
              <fieldset>
                <input type={'email'} placeholder={'Email'} />
              </fieldset>
              <div className="uploads">
                <fieldset>
                  <label htmlFor="image">
                    Upload Image
                    <input
                      type={'image'}
                      id="image"
                      placeholder="Upload Image"
                    />
                  </label>
                </fieldset>
                <fieldset>
                  <label htmlFor="resume">
                    Upload Resume
                    <input
                      type={'file'}
                      id="resume"
                      placeholder="Upload Resume"
                    />
                  </label>
                  <br />
                  <small>Please ensure the file is under 2 MB</small>
                </fieldset>
              </div>
              <fieldset>
                <input id="apply" type={'submit'} />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <VolunteerGrid/>
    </div>
  )
}

export default VolunteerJob
