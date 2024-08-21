import React, { useState, useEffect } from 'react'
import './formstyles.scss'
// import { courseArray } from '../../Constants/courses/c200hr'
import { AllCourses } from '../../Views/Courses/Constants/courses'
import { useParams } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import DisclaimerPolicy from '../DisclaimerPolicy'
import { useSelector } from 'react-redux'
import Personal from './Personal'
import { legacy2 } from '../../assets/icons/icon'
import { authBaseDomain, cmsBaseDomain, razorPayKey } from '../../../../Constants/appSettings'
import axios from 'axios'

const Enrollment = () => {
  const { user } = useSelector((state) => state.auth)
  const { courseId } = useParams()
  const [currentCourse, setCurrentCourse] = useState({})
  const [courseDate, setCourseDate] = useState(null)
  const [Params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentCourse(AllCourses.find((item) => item.key === courseId))
    setCourseDate(Params.get('date'))
    console.log(currentCourse)
    // setDate(
    //   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    // )
  }, [])

  const [empty, setEmpty] = useState(0)
  const [courseFee, setCourseFee] = useState(null)
  const [bold, setBold] = useState(0)
  const [listData, setListData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [courseAsset1, setCourseAsset1] = useState(null)
  const [courseAsset2, setCourseAsset2] = useState(null)
  const [uploadCheck, setUploadCheck] = useState(true)
  const [formData, setFormData] = useState({
    name: user?.data?.firstName,
    phone: '',
    email: user?.data?.email,
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    AGE: '',
    nationality: '',
    // gender: '',
    school: '',
    course: '',
    completion: '',
    company: '',
    worktill: '',
    workfrom: '',
    leavejob: '',
    resignation: '',
    medicalstatus: '',
    sourceinfo: '',
    source: '',
    purpose: '',
    info: '',
    mode: '',
    residental: '',
    sdate: '',
    terms: ''
  })

  const handleEmpty1 = (e) => {
    e.preventDefault()
    // if (
    //   formData.name === '' ||
    //   formData.name === undefined ||
    //   formData.name === null
    // ) {
    //   return setEmpty(1)
    // } else if (
    //   formData.phone === '' ||
    //   formData.phone.length < 6 ||
    //   formData.phone.length > 15
    // ) {
    //   return setEmpty(3)
    // } else if (!validateEmail(formData.email)) {
    //   return setEmpty(2)
    // } else if (formData.address1 === '') {
    //   return setEmpty(4)
    // } else if (formData.country === '') {
    //   return setEmpty(5)
    // } else if (formData.pincode === '') {
    //   return setEmpty(8)
    // } else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
    //   return setEmpty(9)
    // } else if (formData.nationality === '') {
    //   return setEmpty(10)
    // } else if (formData.gender === '') {
    //   return setEmpty(11)
    // } else {
    //   setEmpty(0)
    //   setBold(4)
    // }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [mail,setmail]=useState(null)
  const [isLoad, setIsLoad ] = useState(false);


  const pickMail = ()=>{
    if(formData.mode==='ONLINE'){
      setmail(currentCourse?.templateId?.templateOnline)
      return currentCourse?.templateId?.templateOnline
    }else if(formData.mode === 'OFFLINE' && formData.residental === ''){
      setmail(currentCourse?.templateId?.templateOnline)
      return currentCourse?.templateId?.templateOnline
    }else{
      if(formData.residental === 'RESIDENTIAL'){  
        console.log(currentCourse?.templateId?.templateOffline?.templateResidential)
        setmail(currentCourse?.templateId?.templateOffline?.templateResidential)
        return currentCourse?.templateId?.templateOffline?.templateResidential
      }else{
        setmail(currentCourse?.templateId?.templateOffline?.templateNonResidential)
        return currentCourse?.templateId?.templateOffline?.templateNonResidential
      }
    }
  }

  
  const handleSubmit1 = async() => {
    
    if(formData.terms === false) {
      setEmpty(19);
    } else {
      setIsLoad(true);
      let body = {
        personalDetails: {
          name: formData.name,
          emailId: formData.email,
          phone: formData.phone,
          addressLane1: formData.address1,
          addressLane2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode,
          // gender: formData.gender,
          age: formData.AGE,
          nationality: formData.nationality,
        },
        academicQualification: qualificationData,
        workExperience: listData,
        others: {
          medicalHistory: formData.medicalstatus,
          howDoYouHearAboutUs: formData.source || formData.sourceinfo,
        },
        courseDetails: {
          courseId: currentCourse.key,
          courseName:currentCourse.title,
          mode: formData.mode,
          subMode:formData.residental,
          batch:currentCourse.batch,
          imageAsset: courseAsset1,
          certificateImgAsset: courseAsset2,
          // date:courseDate,
          date: formData.sdate,
          timing:currentCourse.timing
        },
      }
      let body1 = {
        personalDetails: {
          name: formData.name,
          emailId: formData.email,
          phone: formData.phone,
          addressLane1: formData.address1,
          addressLane2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode,
          // gender: formData.gender,
          age: formData.AGE,
          nationality: formData.nationality,
        },
        academicQualification: qualificationData,
        workExperience: listData,
        others: {
          medicalHistory: formData.medicalstatus,
          howDoYouHearAboutUs: formData.source || formData.sourceinfo,
        },
        courseDetails: {
          courseId: currentCourse.key,
          courseName:currentCourse.title,
          mode: formData.mode,
          batch:currentCourse.batch,
          imageAsset: courseAsset1,
          certificateImgAsset: courseAsset2,
          // date:courseDate,
          date: formData.sdate,
          timing:currentCourse.timing
        },
      }
      // if(currentCourse.key==='batch-1-200hr'){
      //   if(formData?.residental==='RESIDENTIAL'){
      //     setmail(templateKey)
      //   }else{
      //     setmail(templateKey)
      //   }
      // }
      console.log(mail)
      
      
      let mailTemplate = {
        type: 'INFO_TYI',
        HTMLTemplate: pickMail(),
        subject: 'Enrollment Confirmation',
        data:{
          name: formData.name
        },
        receivers: [formData.email,'info@theyogainstitute.org']
      }
  
      try{
        let response
        if(formData.mode==='ONLINE' || (currentCourse.residential===false && currentCourse.nonResidential===false)){
          response = await axios.post(
            `${ cmsBaseDomain }/forms`,
            body1
          )
          // setIsLoad(false);
        }else{
          response = await axios.post(
            `${ cmsBaseDomain }/forms`,
            body
          )
          // setIsLoad(false);
        }
  
        if(response?.data?.success){
          if(currentCourse.key!=='satsang' && currentCourse.key!=='samattvam' ){
            const paymentOrderResponse =  await axios.post(`${ cmsBaseDomain }/payment/order?enrollmentFormId=${response.data.data['_id']}`, {
              amount: courseFee,
              notes: currentCourse.metaDescription,
              objectType:'ENROLLMENT'
            })
            setIsLoad(false);
            if(!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id) return 0
            
            const options = {
              // key: 'rzp_test_hWMewRlYQKgJIk', 
              // Enter the Key ID generated from the Dashboard
              key: razorPayKey,
              amount: paymentOrderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: 'INR',
              name: 'The Yoga Institute',
              description: 'Course Transaction',
              // image: 'https://example.com/your_logo', // un comment and add TYI logo
              order_id: paymentOrderResponse.data.id, // eslint-disable-line
              handler: async(res) => {
  
                
                // Navigare to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
                if(res.razorpay_payment_id && res.razorpay_order_id && res.razorpay_signature) {
                  await axios.post(`${ authBaseDomain }/ali/mail`, mailTemplate)
                  navigate(`/enrollment_thankyou/${currentCourse.key}`)
                }
              },
              prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone
              },
              notes:{
                courseName: currentCourse.title,
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
                // date: courseDate,
                date: formData.sdate,
                time : currentCourse.timing,
                mode : formData.mode,
              },
              theme: {
                color: '#3399cc' // enter theme color for our website
              },
              modal: {
                ondismiss: function () {
                  // The user closed the payment modal
                  setIsLoad(false);
                  console.log("Payment modal closed by user.");
                  // alert("Payment process was canceled.");
                  // Perform any necessary cleanup or UI updates
                },
              },
  
  
              
              
            }
  
  
            const rzp = new window.Razorpay(options)
            setIsLoad(true);
            rzp.open()  
          }else{
            await axios.post(`${ authBaseDomain }/ali/mail`, mailTemplate)
  
            if(currentCourse.key==='satsang'){
              navigate('/satsang_thankyou')
            }else if(currentCourse.key ==='samattvam'){
              navigate('/samattvam_thankyou')
            }else{
              
              navigate(`/enrollment_thankyou/${currentCourse.key}`)
              
            }
          }
        }
      } 
      catch(err){
        setIsLoad(false)
        console.error(err)
      } 
  
    }


  


}
    

  const handleSubmit = (e) => {

    if (e && e.preventDefault) {
      e.preventDefault();
    }


    if (
      formData.name === '' ||
      formData.name === undefined ||
      formData.name === null
    ) {
      setEmpty(1)
    } else if (formData.email === '' || !validateEmail(formData.email) || formData.email === undefined ||
    formData.email === null) {
      console.log('mail : ',empty);
      setEmpty(2)
    } else if (
      formData.phone === '' ||
      formData.phone?.length < 6 ||
      formData.phone?.length > 15 || 
      formData.phone === undefined
    ) {
      setEmpty(3)
    }  else if (formData.address1 === '') {
      setEmpty(4)
    } 
    else if (formData.country === '' ) {
      setEmpty(5)
    } 
    else if (formData.pincode === '') {
      setEmpty(8)
    }else if (formData.sdate === '') {
      setEmpty(18)
    }
    //  else if (formData.AGE === null || formData.AGE < 4 || formData.AGE > 99) {
    //   setEmpty(9)
    // } else if (formData.nationality === '') {
    //   setEmpty(10)
    // }
    else if (formData.gender === '') {
      setEmpty(11)
    }  else if (formData.mode === '') {
      setEmpty('mode')
    } 
    else {
      // setBold(5)
      handleSubmit1();
    }


    
    
    console.log('formData for check ', formData)

    


  }

  return (
    <>
      <div className="enrollment_container ">
        {bold < 5 && (
          <div className="header">
            <Link to="/courses">
              <button className="x">x</button>
            </Link>
            <span className="flower">{legacy2}</span>

            <div className="student">Student Enrollment</div>

            {/* <ul className="header_ul">
            <li
              style={
                bold === 0 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={() => setBold(0)}
            >
              {' '}
              Personal Details{' '}
              {bold === 0 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 1 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={handleEmpty1}
            >
              Academic Qualifications{' '}
              {bold === 1 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 2 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={handleEmpty2}
            >
              Work Experience{' '}
              {bold === 2 && <div className="bottom-line"></div>}
            </li>
            <li
              style={
                bold === 3 ? { fontWeight: '600', fontSize: '2.5rem' } : {}
              }
              onClick={() => setBold(3)}
            >
              Other{bold === 3 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 4 ? { fontWeight: 600, fontSize: '2.5rem' } : {}}
              onClick={handleEmpty4}
            >
              Course Details
              {bold === 4 && <div className="bottom-line"></div>}
            </li>
          </ul> */}
          </div>
        )}

        {bold === 0 ? (
          <>
            <Personal
              setBold={setBold}
              empty={empty}
              formData={formData}
              setFormData={setFormData}
              handleEmpty1={handleEmpty1}
              setEmpty={setEmpty}
              isLoad={isLoad}
              courseDate={courseDate}
              templateKey={currentCourse?.templateId}
              qualificationData={qualificationData}
              listData={listData}
              currentCourse={currentCourse}
              courseAsset1={courseAsset1}
              setCourseAsset1={setCourseAsset1}
              courseAsset2={courseAsset2}
              setCourseAsset2={setCourseAsset2}
              handleSubmit={handleSubmit}
              courseFee={courseFee}
              setCourseFee={setCourseFee}
              uploadCheck={uploadCheck}
              setUploadCheck={setUploadCheck}
            />
          </>
        ) : null}

        {bold === 5 ? (
          <>
            <DisclaimerPolicy
              templateKey={currentCourse?.templateId}
              formData={formData}
              qualificationData={qualificationData}
              listData={listData}
              currentCourse={currentCourse}
              courseAsset1={courseAsset1}
              courseAsset2={courseAsset2}
              setBold={setBold}
              courseFee={courseFee}
              courseDate={courseDate}
              setListData={setListData}
              setQualificationData={setQualificationData}
            />
          </>
        ) : null}
      </div>
    </>
  )
}

export default Enrollment
