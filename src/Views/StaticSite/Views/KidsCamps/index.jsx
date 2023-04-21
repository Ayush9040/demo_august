import React from 'react'
import './style.scss'
import KidsCampForm from './KidsCampForm'
import InnerNavComponent from '../../Components/InnerNavComponent'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import CommonBtn from '../../Components/commonbtn'
import baseDomain from '../../assets/images/imageAsset'
import { courseAssets } from '../../assets/images/imageAsset'
const KidsCamp = () => {
  const [modal, setModal] = useState(false)

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  return (
    <div>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname]?.title || ''} />
      )}

      <div className="kids-camp-sections">
        <InnerNavComponent abc={highlight} />
        <div className="main-container">
          <div className="highlight-info">
            <h1>Kids Yoga Summer Camp (On-Campus)</h1>
            <CommonBtn text="Enroll Now" buttonAction={() => setModal(true)} />
          </div>
          <div className="highlight-cover">
            <img
              src={`${baseDomain}${courseAssets.courseAssets116}`}
              alt="Kids-camp-image"
            />
          </div>
        </div>
        <div className="about-section">
          <p>
          Introducing your children to the world of Yoga through enlightening, fun, creative activities. Yoga practices and technique helps in skill development and enhancement. It also uplifts and strengthens them on physical, emotional and mental level. This summer, give the gift of Yoga to your children through this yoga for kids camp.
          </p>
        </div>
        <div className="about-section">
          <h5>Camp Details:</h5>
          <p>
          This 3-day Kids Yoga Summer Camp comes packed with various activities that present your child with an opportunity to learn about ‘Classical - Ashtanga Yoga’. The practice of yoga will help the child to develop confidence and self-esteem, learn life skills, develop physical and mental fitness, instill kindness and calmness.
          </p>
          <p>
          The kids yoga camp activities are tailored to ensure that the child learns to make optimum utilization of his/her potential. They are taught about importance of discipline and duty through activities, games and storytelling. These yoga  techniques helps the child to understand the true meaning of life which will help them grow and be better prepared for the outside world.
          </p>
          <p>
          Additionally, the yoga for kids camp helps to develop the social skills of a child, increases their focus, sharpens their memory, improves immunity and behavioral skills and trains them to cope with stress.
          </p>
          <div className="sattvik-section">
            <p className="nutri-page-bold">Camp Activities</p>
            <ul>
              <li>Yoga Asanas</li>
              <li>Pranayamas</li>
              <li>Relaxation Techniques</li>
              <li>Concentration Techniques</li>
              <li>Yamas and Niyamas</li>
              <li>Craft Activity</li>
              <li>Concept Games</li>
              <li>Fun Games for Co-ordination and Team Work</li>
              <li>Pottery</li>
              <li>Storytelling Through Songs</li>
              <li></li>
            </ul>
          </div>
          <div className="sattvik-section">
            <p className="nutri-page-bold">Camp Benefits</p>
            <ul>
              <li>Increased Focus</li>
              <li>Improved Physical Stamina &amp; Strength</li>
              <li>Better Memory</li>
              <li>Develops Confidence</li>
              <li>Becoming Active, Joyful and Creative</li>
              <li>Strengthens Immune System</li>
              <li>Brings Calmness</li>
            </ul>
          </div>
          <div className="sattvik-section">
            <p className="nutri-page-bold">Camp Date, Timings &amp; Fees:</p>
          </div>
          <div className='online_table'>
            <table>
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Time</th>
                  <th>Dates</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4-8 years</td>
                  <td>10am – 3pm</td>
                  <td>10,11 and 12 April 2023</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>9-13 years</td>
                  <td>10am – 3pm</td>
                  <td>13,14 and 15 April 2023</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>4-8 years</td>
                  <td>10am – 3pm</td>
                  <td>1,2, 3 May 2023</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>9-13 years</td>
                  <td>10am – 3pm</td>
                  <td>4,5,6 May 2023</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>4-8 years</td>
                  <td>10am – 3pm</td>
                  <td>29,30,31 May 2023</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>9-13 years</td>
                  <td>10am – 3pm</td>
                  <td>1,2,3 June 2023</td>
                  <td>1500</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modal && <KidsCampForm setModal={setModal} />}
    </div>
  )
}

export default KidsCamp
