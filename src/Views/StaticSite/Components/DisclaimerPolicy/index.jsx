import React, { useState, useEffect } from 'react'
import './style.scss'
//import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { legacydisclaimer } from '../../assets/icons/icon'
import { authBaseDomain, cmsBaseDomain } from '../../../../Constants/appSettings'
//import { mail } from '../../assets/icons/icon'

const DisclaimerPolicy = ({
  formData,
  qualificationData,
  listData,
  currentCourse,
  courseAsset1,
  courseAsset2,
  templateKey,
  setBold,
  courseFee,
  courseDate
}) => {
  const [disData, setDisData] = useState({
    terms: 'no',
    signature: null,
    fullName: '',
  })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [mail,setmail]=useState(null)

  

  const navigate = useNavigate()

  const pickMail = ()=>{
    if(formData.mode==='ONLINE'){
      setmail(templateKey?.templateOnline)
      return templateKey?.templateOnline
    }else if(formData.mode === 'OFFLINE' && formData.residental === ''){
      setmail(templateKey?.templateOnline)
      return templateKey?.templateOnline
    }else{
      if(formData.residental === 'RESIDENTIAL'){  
        console.log(templateKey?.templateOffline?.templateResidential)
        setmail(templateKey?.templateOffline?.templateResidential)
        return templateKey?.templateOffline?.templateResidential
      }else{
        setmail(templateKey?.templateOffline?.templateNonResidential)
        return templateKey?.templateOffline?.templateNonResidential
      }
    }
  }

  const [empty, setEmpty] = useState(0)

  const handleSubmit1 = async() => {
    if (disData.terms === 'no') {
      return setEmpty(1)
    }else if (disData.name === '') {
      return setEmpty(2)
    } else {
      setEmpty(0)
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
          gender: formData.gender,
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
          date:courseDate,
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
          gender: formData.gender,
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
          date:courseDate,
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
            `${ cmsBaseDomain }/form`,
            body1
          )
        }else{
          response = await axios.post(
            `${ cmsBaseDomain }/form`,
            body
          )
        }

        if(response?.data?.success){
          if(currentCourse.key!=='satsang' && formData?.residental!=='RESIDENTIAL'){
            const paymentOrderResponse =  await axios.post(`${ cmsBaseDomain }/payment/order?enrollmentFormId=${response.data.data['_id']}`, {
              amount: courseFee,
              notes: currentCourse.metaDescription,
              objectType:'ENROLLMENT'
            })
            if(!paymentOrderResponse?.data?.amount && !paymentOrderResponse?.data?.id) return 0
            
            const options = {
              key: 'rzp_live_KyhtrIyJ546bd2', // Enter the Key ID generated from the Dashboard
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
                date: courseDate,
                time : currentCourse.timing,
                mode : formData.mode,
              },
              theme: {
                color: '#3399cc' // enter theme color for our website
              }
              
            }
            const rzp = new window.Razorpay(options)
            rzp.open()  
          }else{
            await axios.post(`${ authBaseDomain }/ali/mail`, mailTemplate)

            if(currentCourse.key==='satsang'){
              navigate('/satsang_thankyou')
            }else{
              
              navigate(`/enrollment_thankyou/${currentCourse.key}`)
              
            }
          }
        }
      } 
      catch(err){
        console.error(err)
      } 
    }

  
  }
 
  return (
    <div className="disclaimer-container">
      <button className="close" onClick={()=>setBold(4)} >x</button>
      <div className="disclaimer-heading">
        <div className='legacy1'>
          {legacydisclaimer}
        </div>
        <p className='disclaimer-policy'>Disclaimer Policy</p>
      </div>
      <div className="mid-content">
        <div className="mid-1">
          <p>No Refund Policy :</p>
          <ol>
          The Yoga Institute has no-refund policy for all its programmes.
              The only exception to this policy is in the event of a programme
              cancelled by the Institute. In such cases, the
              student/participant will be offered a credit that can be used
              for any other institute programme or a refund of the event fee.
          </ol>
        </div>
        <div className="mid-2">
          <p>Website :</p>
          <ol>
            All information on our websites is provided for information purposes
            only and does not constitute a legal contract between the Institute
            and any person or entity. Information on our official websites is
            sub- ject to change without prior notice. Although every reasonable
            effort is made to present current and accu- rate information. The
            Yoga Institute makes no guarantees of any kind.
          </ol>
        </div>
        <div className="mid-3">
          <p>General Health & Medical Condition of Students/Participants :</p>
          <ol>
            <li>
              Any health related advice and suggestions should not be used for
              diagnosing purposes or be substituted for medical advice.
              Students/participants must always consult their own doctor or
              qualified health professional on any matters regarding their
              health.
            </li>
            <li>
              It is the sole responsibility of the students/participants to
              consult a physician prior to and regarding their participation in
              the programmes offered by The Yoga Institute.
            </li>
            <li>
              Our classes, by default, are not suitable for pregnant students,
              excepting the Pregnancy Camp. If a par- ticipant is pregnant, and
              wish to participate in any other programme it is mandatory for
              them to discuss their medical history/background.
            </li>
            <li>
              Students/participants are responsible for their own well-being
              during the class and are advised to prac- tice at their own pace,
              understanding their limitations. The participants are advised to
              inform their teacher if there have been any changes in their
              medical / health condition which might affect their participation.
            </li>
          </ol>
        </div>
      </div>
      <div className="mid-bottom">
        <p>
          NOT WITHSTANDING ANYTHING WRITTEN EARLIER, THE RIGHT OF REJECTION OR,
          TERMINATION FROM THE COURSE, SOLELY RESTS WITH THE MANAGEMENT OF THE
          INSTITUTE.
        </p>
        <div className="terms-conditions">
          <input
            type="checkbox"
            onChange={() => setDisData({ ...disData, terms: 'yes' })}
          />

          <p>I have read and agree to the above terms and conditions.</p>
          {empty === 1 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please agree to the condition!
            </small>
          )}
        </div>
      </div>
      <div className="bottom-content">
        <p>I ALSO CONFIRM THAT</p>
        <ol>
          <li>
            I am participating in the programme of The Yoga Institute and I
            hereby take full and sole responsibility from any liability of loss
            or damage to personal property associated with the programme or any
            other events.
          </li>
          <li>
            If I am pregnant, I understand that I participate fully at my own
            risk and that of my unborn child/children.
          </li>
          <li>
            In submitting the registration form I have read the above release
            and waiver of liability and fully under- stand its contents.
          </li>
        </ol>
        <p className="voluntarily">
          I voluntarily agree to the terms and conditions stated above under my
          own free will.
        </p>
      </div>
      <div className="last-section">
        <div className="last">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setDisData({ ...disData, fullName: e.target.value })
            }
          />
          {empty === 2 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please Enter your full name!
            </small>
          )}
          <hr />
        </div>
        {/* <div className="signature-section">
          <p>Upload Digital Signature (jpeg or png. Under 1MB)</p>

          <label htmlFor="signature" className="signature" id='sign'>
            {disData.signature ? disData.signature.substring(0,15): 'Upload Signature'}
           
            <input
            
              name="signature"
              id="signature"
              type={'file'}
              accept="image/png, image/jpeg"
              onChange={(e) =>
                setDisData({ ...disData, signature: e.target.files[0].name })
              }
            />
          </label>
          {empty === 3 && (
            <small style={{ color: 'red', marginLeft: '0' }}>
              *Please Enter email signature!
            </small>
          )}
        </div> */}
        <div className="privacy-button">
          <button onClick={handleSubmit1}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPolicy
