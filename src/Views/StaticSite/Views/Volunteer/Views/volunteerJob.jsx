import React, { useEffect, useState } from 'react'
import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import VolunteerGrid from '../../../Components/VolunteerGrid'
// import { Volunteer } from '../../utils/JobDetails'
//import { volunteerData } from '../../../utils/volunteerData'
import { useParams } from 'react-router-dom'
import FAQ from '../../../Components/Faq'
import { upload } from '../../../assets/icons/icon'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProgramsData } from '../Volunteer.action'

const VolunteerJob = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [program, setProgram] = useState({})
  const { volunteerPrograms } = useSelector(state=>state.volunteer)
  useEffect(() => {
    dispatch(fetchProgramsData())
  }, [])

  useEffect(()=>{
    setProgram(volunteerPrograms.find((item) => id === item['_id']))
  },[])

  console.log(program?.faq,'faq')

  return (
    <div className="single-job">
      <CommonBannerNavPrimary innerNav={false} />
      <div className="job-details">
        <div className="job-description">
          <div className="job-img">
            <img src={program?.thumbnail} alt={'title'} />
          </div>
          <div className="job-info">
            <h1>
              {program?.title}
              <div className="bottom-line"></div>
            </h1>
            <p>{program?.description}</p>
          </div>
        </div>
        <div className="job-application">
          <div className="job-requirements">
            {/* <ul>
              {program?.reqirements?.map((item, i) => {
                return (
                  <li key={i}>
                    <span>Requirement:</span>
                    {item}
                  </li>
                )
              })}
            </ul> */}
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
      <VolunteerGrid gallery={ program?.gallery } />
      <FAQ questions={program?.faq} />
    </div>
  )
}

export default VolunteerJob
