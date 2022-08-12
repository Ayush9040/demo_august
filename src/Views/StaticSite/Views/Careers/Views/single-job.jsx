import React, { useState, useEffect } from 'react'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import './style.scss'
import { useParams } from 'react-router-dom'
//import { Job } from '../../../utils/JobDetails'
import { upload } from '../../../assets/icons/icon'
import { validateEmail } from '../../../../../helpers'
import { uploadFile } from '../../../../../helpers/OssHelper'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchJobData, postApplicantionData } from '../Career.action'
import InputComponent from '../../../Components/InputComponent'
import MessageModal from '../../../Components/MessageModal'
const SingleJob = () => {

  const singleJob = {
    title:'single-job',
    color:'orange',
    menuColor:'orange',
    menuItems:[]
  }
  
  const dispatch = useDispatch()
  const { jobPrograms } = useSelector((state) => state?.career)
  const { jobId } = useParams()
  const [job, setJob] = useState({})
  const [formData, setFormData]= useState({
    name:'',
    email:'',
  })
  const[validate, setValidate]=useState(0)
  const [imageName, setImageName]= useState('')
  const [sizeError, setSizeError]= useState()
  const [imageAssest, setImageAssest]= useState(null)
  const [certificateAssest, setCertificateAssest] = useState(null)
  const [certificateName, setCertificateName]= useState('')
  const [modal, setModal] = useState()
  useEffect(() => {
    dispatch(fetchJobData())
  },[])
  useEffect(()=>{
    console.log(jobPrograms)
    setJob(jobPrograms.find((item) => item['_id'] === jobId))
  },[jobPrograms])
  console.log(job)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if (formData.firstName === '') {
      setValidate(1)
    } else if (!validateEmail(formData.email)) {
      setValidate(2)
    } else if (imageAssest === null) {
      setValidate(3)
    } else if (certificateAssest === null) {
      setValidate(4)
    }else {
      let careerPost = {
        name: formData.name,
        email: formData.email,
        image: imageAssest,
        pdf: certificateAssest,
        profileId: job['_id'],
      }
      await dispatch(postApplicantionData(careerPost))
      setModal(true)
    }
  }
  const uploadImage = async(file, type, changeData) => {
    if (file.size / 1024 / 1024 > 2) {
      if (changeData === 'RESUME') {
        setSizeError(1)
      } else if (changeData === 'IMAGE') {
        setSizeError(2)
      }
    } else {
      const url = await uploadFile(file, type)
      if (changeData === 'RESUME') setCertificateAssest(url)
      else if (changeData === 'IMAGE')
        setImageAssest(url)
    }
  }
  return (
    <div className="single-job">
      <InnerNavComponent abc={ singleJob } />
      <div className="job-details">
        <div className="job-description">
          <div className="job-img">
            <img src={job?.thumbnail} alt={job?.title} />
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
            <form onSubmit={(e)=>{handleSubmit(e)}} className='job_input'>
              <fieldset>
                {/* <input type={'text'} placeholder={'Name'} /> */}
                <InputComponent
                  type='text'
                  placeholder='Name'
                  form={formData}
                  setField={setFormData}
                  keyName='name'
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
                  <small style={{ color: 'red', marginLeft: '2rem' }}>
                    *Please Enter Name!
                  </small>
                )}
                {validate === 2 && (
                  <small style={{ color: 'red', marginLeft: '2rem' }}>
                    Please Enter Valid Email
                  </small>
                )}
              </fieldset>
              <div className="uploads">
                <fieldset>
                  <label htmlFor="image">
                    {imageAssest ? imageName.substring (0, 15) : 'upload image'}
                    <input
                      type={'file'}
                      id="image"
                      placeholder="Upload Image"
                      onChange={(e)=> {
                        uploadImage(e.target.files[0], 'image', 'IMAGE')
                        setImageName(e.target.files[0].name)
                      }}
                      accept="image/*"
                      errorCheck={setValidate}
                    />
                    &ensp;
                    {upload}
                  </label>
                  {validate === 1 && (
                    <small style={{ color: 'red', marginLeft: '2rem' }}>
                    *Please Enter Name!
                    </small>
                  )}
                  {sizeError === 2 && (
                    <small style={{ color: 'red', marginLeft: '2rem' }}>Please upload image less than 2 MB </small>
                  )}
                </fieldset>
                <fieldset>
                  <label htmlFor="resume">
                    {certificateName
                      ? certificateName.substring(0, 15)
                      : 'Upload Resume'}
                    <input
                      type={'file'}
                      id="resume"
                      onChange={(e) => {
                        uploadImage(e.target.files[0], 'resume', 'RESUME')
                        setCertificateName(e.target.files[0].name)
                      }}
                      accept='pdf'
                      placeholder="Upload Resume"
                      errorCheck={setValidate}
                      pdf = {certificateAssest}
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
                </fieldset>
              </div>
              <fieldset>
                <input id="apply"  type={'submit'} />
                {validate === 5 && (
                  <small style={{ color: 'green', marginLeft: '2rem' }}>
                      Form submitted succesfully
                  </small>
                )}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      { modal && <MessageModal type='SUCCESSS' message='Application submitted successfully!' closePopup={ setModal } /> }
    </div>
  )
}
export default SingleJob
