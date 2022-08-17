import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Volunteer } from '../../utils/JobDetails'
//import { volunteerData } from '../../../utils/volunteerData'
import { useParams } from 'react-router-dom'
import { validateEmail } from '../../../../../helpers'
import { uploadFile } from '../../../../../helpers/OssHelper'
import { upload } from '../../../assets/icons/icon'
//import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import FAQ from '../../../Components/Faq'
import InputComponent from '../../../Components/InputComponent'
import MessageModal from '../../../Components/MessageModal'
import VolunteerGrid from '../../../Components/VolunteerGrid'
import { fetchProgramsData, postApplicationData } from '../Volunteer.action'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import Loader from '../../../Components/Loader'
import './style.scss'

const VolunteerJob = () => {
  const dispatch = useDispatch()
  const [imageAssest, setImageAssest] = useState(null)
  const [certificateAssest, setCertificateAssest] = useState(null)
  const [imageName, setImageName] = useState('')
  const [certificateName, setCertificateName] = useState('')
  const [sizeError, setSizeError] = useState(0)
  const { id } = useParams()
  const [program, setProgram] = useState({})
  const [modal, setModal] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [resumeLoading , setResumeLoading] = useState(false)
  const uploadImage = async(file, type, changeData) => {
    if (file.size / 1024 / 1024 > 2) {
      if (changeData === 'RESUME') {
        setSizeError(1)
      } else if (changeData === 'IMAGE') {
        setSizeError(2)
      }
    } else {
      const url = await uploadFile(file, type)
      if (changeData === 'RESUME') {
        setCertificateAssest(url)
        setSizeError(0)
      } else if (changeData === 'IMAGE') {
        setImageAssest(url)
        setSizeError(0)
      }
      setImageLoading(false)
      setResumeLoading(false)
    }
  }
  const volJob = {
    title: 'Volunteer Job',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
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
  console.log(imageAssest, 'imgAsset')

  const clickHandler = async(e) => {
    e.preventDefault()
    if (formData.firstName === '') {
      setValidate(1)
    } else if (!validateEmail(formData.email)) {
      setValidate(2)
    } else if (imageAssest === null) {
      setValidate(3)
    } else if (certificateAssest === null) {
      setValidate(4)
    } else {
      let volunteerPost = {
        name: formData.firstName,
        email: formData.email,
        image: imageAssest,
        pdf: certificateAssest,
        profileId: program['_id'],
      }
      await dispatch(postApplicationData(volunteerPost))

      // await axios.post('https://www.authserver-staging-be.theyogainstituteonline.org/v1/ali/mail', {
      //   type: null,
      //   HTMLTemplate:'JOBVOLUNTEER_APPLICATION',
      //   subject: 'Application for Volunteer Program',
      //   data:{
      //     user: formData.firstName
      //   },
      //   receivers: [formData.email,'info@theyogainstitute.org']
      // })
      setModal(true)
    }
  }

  return (
    <div className="single-job">
      <InnerNavComponent abc={volJob} />
      {/* <CommonBannerNavPrimary innerNav={false} /> */}
      <div className="job-details">
        <div className="job-description">
          <div className="job-img">
            <img src={program?.thumbnail} alt={program?.name} />
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
          <div className="job-requirements"></div>
          <div className="job-form">
            <form
              onSubmit={(e) => {
                clickHandler(e)
              }}
            >
              <fieldset>
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
              <fieldset>
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
                {imageLoading ? (
                  <Loader />
                ) : (
                  <fieldset>
                    <label htmlFor="image">
                      {imageAssest
                        ? imageName.substring(0, 15)
                        : 'Upload Image '}
                      <input
                        type={'file'}
                        id="image"
                        onChange={(e) => {
                          e.target.files[0].size / 1024 / 1024 > 2 ?'': setImageLoading(true)
                          uploadImage(e.target.files[0], 'image', 'IMAGE')
                          setImageName(e.target.files[0].name)
                        }}
                        placeholder="Upload Image"
                        accept="image/*"
                      />
                      &ensp;
                      {upload}
                    </label>
                    {sizeError === 2 && (
                      <small style={{ color: 'red', marginLeft: '2rem' }}>
                        Please Enter Image Under 2MB
                      </small>
                    )}
                    {validate === 3 && (
                      <small style={{ color: 'red', marginLeft: '2rem' }}>
                        Please update image under 2MB
                      </small>
                    )}
                  </fieldset>
                )}
                {resumeLoading ? (
                  <Loader />
                ) : (
                  <fieldset>
                    <label htmlFor="resume">
                      {certificateAssest
                        ? certificateName.substring(0, 15)
                        : 'Upload Resume'}
                      <input
                        type={'file'}
                        id="resume"
                        accept=".pdf"
                        onChange={(e) => {
                          e.target.files[0].size / 1024 / 1024 > 2 ?'':setResumeLoading(true)
                          uploadImage(e.target.files[0], 'resume', 'RESUME')
                          setCertificateName(e.target.files[0].name)
                        }}
                        placeholder="Upload Resume"
                      />
                      &ensp;
                      {upload}
                    </label>
                    {sizeError === 1 && (
                      <small style={{ color: 'red', marginLeft: '2rem' }}>
                        Please Enter Resume under 2MB
                      </small>
                    )}
                    {validate === 4 && (
                      <small style={{ color: 'red', marginLeft: '2rem' }}>
                        Please update resume under 2MB
                      </small>
                    )}
                    { sizeError===0 &&  <small>Please ensure the file is under 2 MB</small>}
                  </fieldset>
                )}
              </div>
              <fieldset>
                <input id="volunteer_apply" type={'submit'} />
              </fieldset>
              {validate === 5 && (
                <small style={{ color: 'green', marginLeft: '2rem' }}>
                  Form submitted succesfully
                </small>
              )}
            </form>
          </div>
        </div>
      </div>
      <VolunteerGrid altName={program?.name} gallery={program?.gallery} />
      <FAQ questions={program?.faq} />
      {modal && (
        <MessageModal
          type="SUCCESS"
          message="Application submitted successfully!"
          closePopup={setModal}
        />
      )}
    </div>
  )
}

export default VolunteerJob
