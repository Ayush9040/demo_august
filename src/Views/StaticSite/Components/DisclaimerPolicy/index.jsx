import React, { useState } from 'react'
import './style.scss'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { mail } from '../../assets/icons/icon'

const DisclaimerPolicy = ({
  formData,
  qualificationData,
  listData,
  currentCourse,
  courseAsset1,
  courseAsset2,
  templateKey
}) => {
  const [disData, setDisData] = useState({
    terms: 'no',
    signature: null,
    fullName: '',
  })

  

  const navigate = useNavigate()

  const [empty, setEmpty] = useState(0)

  const handleSubmit1 = async() => {
    if (disData.terms === 'no') {
      return setEmpty(1)
    } else if (disData.signature === null) {
      return setEmpty(3)
    } else if (disData.name === '') {
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
          dob: formData.DOB,
          nationality: formData.nationality,
          numberOfChildren: formData.numberOfChildren,
          ageOfChild1: formData.age1,
          ageOfChild2: formData.age2,
        },
        academicQualification: qualificationData,
        workExperience: listData,
        others: {
          medicalHistory: formData.medicalstatus,
          howDoYouHearAboutUs: formData.source || formData.sourceinfo,
        },
        courseDetails: {
          courseId: currentCourse.key,
          mode: formData.residental,
          certificateImgAsset: courseAsset1,
          certificatePdfAsset: courseAsset2,
          startDate: '10000',
          endDate: '10000',
        },
        signature: disData.signature,
      }

      const jsonBody = JSON.stringify(body)
      console.log(jsonBody, 'json-body')
      axios.post(
        'https://cms-dev-be.theyogainstituteonline.org/v1/form',
        body
      ).then((response)=>{
        console.log(response)
        if (response.data.success) {
          let mailTemplate = {
            type: null,
            HTMLTemplate: templateKey || 'COURSE200_2M_TTC2',
            subject: 'Enrollment Confirmation',
            data:{
              user: formData.name
            },
            receivers: [formData.email,'shrey@nexgsolution.com']
          }
          //let templateJson = JSON.stringify(mailTemplate)
          axios.post(
            'https://www.authserver-staging-be.theyogainstituteonline.org/v1/ali/mail',mailTemplate).then(()=>{navigate('/enrollment_thankyou')})
        }
      })
   
    }
  }

  return (
    <div className="main-container">
      <div className="heading-content">
        <img src={`${baseDomain}${homeAssets.homeAsset70}`} />
        <p>Disclaimer Policy</p>
      </div>
      <div className="mid-content">
        <div className="mid-1">
          <p>No Refund Policy :</p>
          <ol type="a">
            <li>
              The Yoga Institute has a no-refund policy for all its programmes.
              The only exception to this policy is in the event of a programme
              being cancelled by the Institute. In such an event, the
              student/participant will be offered a credit which can be utilised
              for any other programme of the Institute.
            </li>
            <li>
              In case a student/participant is forced to miss a programme due to
              medical reasons a full refund will be made, subject to supporting
              evidence from a registered medical practitioner.
            </li>
            <li>
              The decision with regards to refund lies with the Management of
              The Yoga Institute and will be final and binding.
            </li>
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
              qualified health profes- sional on any matters regarding their
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
            risk and that of my unborn child/chil- dren.
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
        <div className="signature-section">
          <p>Upload Digital Signature (jpeg or png. Under 1MB)</p>

          <label htmlFor="signature" className="signature">
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
        </div>
        <div className="privacy-button">
          <button onClick={handleSubmit1}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPolicy
