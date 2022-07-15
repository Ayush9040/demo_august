import React, { useState, useEffect } from 'react'
import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import './style.scss'
import { useParams } from 'react-router-dom'
//import { Job } from '../../../utils/JobDetails'
import { upload } from '../../../assets/icons/icon'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchJobData } from '../Career.action'
import InputComponent from '../../../Components/InputComponent'

const SingleJob = () => {
  const dispatch = useDispatch()
  const { jobPrograms } = useSelector((state) => state?.career)
  const { jobId } = useParams()
  const [job, setJob] = useState({})

  useEffect(() => {
    dispatch(fetchJobData())
  }, [])
  useEffect(() => {
    setJob(jobPrograms.find((item) => item['_id'] === jobId))
  }, [jobPrograms])
  console.log(job, 'aa')

  const [formData, setFormData] = useState({
    fName: '',
    email: ''
  })

  //  const [fName, email] = formData

  const [validate, setValidate] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault()
    if (formData.fName === '') {
      return setValidate(1)
    } else if (formData.email === '') {
      return setValidate(2)
    }
  }

  return (
    <div className="single-job">
      <CommonBannerNavPrimary innerNav={false} />
      <div className="job-details">
        <div className="job-description">
          <div className="job-img">
            <img src={job?.thumbnail} alt={'title'} />
          </div>
          <div className="job-info">
            <h1>
              {job?.title}
              <div className="bottom-line"></div>
            </h1>
            <p>
              <q>
                <i>{job?.quote}</i>
              </q>
            </p>
            <p>{job?.description}</p>
          </div>
        </div>
        <div className="job-application">
          <div className="job-requirements">
            <ul>
              {/* {Job.jobRequirements.map((item, i) => (
                <li key={i}>
                  <span>Requirement:</span>
                  {item}
                </li>
              ))} */}
            </ul>
          </div>
          <div className="job-form">
            <form onSubmit={(e)=>{submitHandler(e)}}>
              <fieldset>
                {/* <input type={'text'} placeholder={'Name'} /> */}
                <InputComponent
                  type='text'
                  placeholder='Name'
                  form={formData}

                  setField={setFormData}
                  keyName='fName'
                  errorCheck={setValidate}
                />
              </fieldset>
              <fieldset>
                {/* <input type={'email'} placeholder={'Email'} /> */}
                <InputComponent
                  type='email'
                  placeholder='Email'
                  form={formData}
                  setField={setFormData}
                  keyName='email'
                  errorCheck={setValidate}
                />
                {validate === 1 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    *Please Enter Name!
                  </small>
                )}
                {validate === 2 && (
                  <small style={{ color: 'red', marginLeft: '0' }}>
                    Please Enter Valid Email
                  </small>
                )}

              </fieldset>
              <div className="uploads">
                <fieldset>
                  <label htmlFor="image">
                    Upload Image
                    <input
                      type={'file'}
                      id="image"
                      placeholder="Upload Image"
                      accept="image/*"
                    />
                    &ensp;
                    {upload}
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
                    &ensp;
                    {upload}
                  </label>

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
    </div>
  )
}

export default SingleJob
