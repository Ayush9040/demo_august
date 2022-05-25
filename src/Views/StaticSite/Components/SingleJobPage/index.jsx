import React, { useState, useEffect } from 'react'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import './style.scss'
import { useParams } from 'react-router-dom'
import { Job } from '../../utils/JobDetails'

const SingleJob = () => {
  const { jobid } = useParams()
  const[job, setJob] = useState({})

  useEffect(() => {
    setJob(Job.find((item) => item.jobId === jobid))
  })

  return (
    <div className='single-job'>
      <CommonBannerNavPrimary innerNav={false} />
      <div className='job-details'>
        <div className='job-description'>
          <div className='job-img'>
            <img src={job.jobThumbnail} alt={'title'} />
          </div>
          <div className='job-info'>
            <h1>
              {job.jobTitle}
              <div className='bottom-line'></div>
            </h1>
            <p>{job.jobDescription}</p>
          </div>
        </div>
        <div className='job-application'>
          <div className='job-requirements'>
            <ul>
              {/* {Job.jobRequirements.map((item, i) => (
                <li key={i}>
                  <span>Requirement:</span>
                  {item}
                </li>
              ))} */}
            </ul>
          </div>
          <div className='job-form'>
            <form>
              <fieldset>
                <input type={'text'} placeholder={'Name'} />
              </fieldset>
              <fieldset>
                <input type={'email'} placeholder={'Email'} />
              </fieldset>
              <div className='uploads'>
                <fieldset>
                  <label htmlFor='image'>
                    Upload Image
                    <input
                      type={'image'}
                      id='image'
                      placeholder='Upload Image'
                    />
                  </label>
                </fieldset>
                <fieldset>
                  <label htmlFor='resume'>
                    Upload Resume
                    <input
                      type={'file'}
                      id='resume'
                      placeholder='Upload Resume'
                    />
                  </label>
                  <br />
                  <small>Please ensure the file is under 2 MB</small>
                </fieldset>
              </div>
              <fieldset>
                <input id='apply' type={'submit'} />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleJob
