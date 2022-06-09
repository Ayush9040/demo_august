import React from 'react'
import './style.scss'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'

const DisclaimerPolicy = () => {
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
          <input type="checkbox" />
          <p>I have read and agree to the above terms and conditions.</p>
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
          <input type="text" placeholder="Full Name" />
          <hr />
        </div>
        <div className="signature-section">
          <p>Upload Digital Signature (jpeg or png. Under 1MB)</p>

          <label htmlFor="signature" className="signature">
            <input name="signature" id="signature" type="file" />
          </label>
        </div>
        <div className="privacy-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPolicy
