import React, { useEffect, useState } from 'react'
import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import VolunteerGrid from '../../../Components/VolunteerGrid'
// import { Volunteer } from '../../utils/JobDetails'
//import { volunteerData } from '../../../utils/volunteerData'
import { useParams } from 'react-router-dom'
import FAQ from '../../../Components/Faq'
import { upload } from '../../../assets/icons/icon'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProgramsData, postApplicationData } from '../Volunteer.action'
import { uploadFile } from '../../../../../helpers/OssHelper'
import InputComponent from '../../../Components/InputComponent'
import { validateEmail } from '../../../../../helpers'
import './style.scss'

const VolunteerJob = () => {
  const dispatch = useDispatch()
  const [imageAssest, setImageAssest] = useState(null)
  const [certificateAssest, setCertificateAssest] = useState(null)
  const [imageName, setImageName] = useState('')
  const [certificateName, setCertificateName] = useState('')
  const { id } = useParams()
  const [program, setProgram] = useState({})
  const uploadImage = async(file, type, changeData) => {
    const url = await uploadFile(file, type)
    console.log(url,'url')
    if (changeData === 'RESUME') setCertificateAssest(url)
    else changeData === 'IMAGE'
    setImageAssest(url)
  }

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  })

  const [validate, setValidate] = useState(0)

  const { volunteerPrograms } = useSelector((state) => state.volunteer)
  useEffect(() => {
    dispatch(fetchProgramsData())
  }, [])

  useEffect(() => {
    setProgram(volunteerPrograms.find((item) => id === item['_id']))
  }, [volunteerPrograms])

  //console.log(program?.faq, 'faq')
  console.log(imageAssest,'imgAsset')

  const clickHandler = (e) => {
    e.preventDefault()
    if (formData.firstName === '') {
      return setValidate(1)
    } else if (!validateEmail(formData.email)) {
      return setValidate(2)
    } else {
      let volunteerPost={
        name: formData.firstName,
        email :  formData.email,
        image  : imageAssest,
        pdf : certificateAssest,
        profileId: program['_id']
      }
      dispatch(postApplicationData(volunteerPost))
    }
  }

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
            <form
              onSubmit={(e) => {
                clickHandler(e)
              }}
            >
              <fieldset >
                {/* <input type={'text'} placeholder={'Name'} /> */}
                <InputComponent
                  type="text"
                  placeholder="Name"
                  form={formData}
                  setField={setFormData}
                  keyName="firstName"
                  errorCheck={setValidate}
                />{' '}
                {validate === 1 && (
                  <small style={{ color: 'red', marginLeft: '2rem' }}>
                    Please Enter Name
                  </small>
                )}
              </fieldset>
              <fieldset >
                {/* <input type={'email'} placeholder={'Email'} /> */}
                <InputComponent
                  type="text"
                  placeholder="Email"
                  form={formData}
                  setField={setFormData}
                  keyName="email"
                  errorCheck={setValidate}
                />

                {validate === 2 && (
                  <small style={{ color: 'red', marginLeft: '2rem' }}>
                    Please Enter Email Id
                  </small>
                )}
              </fieldset>
              <div className="volunteer_uploads">
                <fieldset>
                  <label htmlFor="image">
                    {imageAssest ? imageName.substring(0, 15) : 'Upload Image '}
                    <input
                      type={'file'}
                      id="image"
                      onChange={(e) => {
                        uploadImage(e.target.files[0],'image', 'IMAGE')
                        setImageName(e.target.files[0].name)
                      }}
                      placeholder="Upload Image"
                      accept="image/*"
                    />
                    &ensp;
                    {upload}
                  </label>
                </fieldset>
                <fieldset>
                  <label htmlFor="resume">
                    {certificateName
                      ? certificateName.substring(0, 15)
                      : 'Upload Resume'}
                    <input
                      type={'file'}
                      id="resume"
                      accept='.pdf'
                      onChange={(e) => {
                        uploadImage(e.target.files[0], 'resume', 'RESUME')
                        setCertificateName(e.target.files[0].name)
                      }}
                      placeholder="Upload Resume"
                    />
                    &ensp;
                    {upload}
                  </label>
                  <small>Please ensure the file is under 2 MB</small>
                </fieldset>
              </div>
              <fieldset>
                <input id="volunteer_apply" type={'submit'} />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <VolunteerGrid gallery={program?.gallery} />
      <FAQ questions={program?.faq} />
    </div>
  )
}

export default VolunteerJob
