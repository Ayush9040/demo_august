import React from 'react'
import { useState } from 'react'
import InnerNavComponent from '../../Components/InnerNavComponent'
import IBYform from './IBYform'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import CommonBtn from '../../Components/commonbtn'
import './style.scss'
import baseDomain from '../../assets/images/imageAsset'
import { iybCourse } from '../../assets/images/imageAsset'
import { useEffect } from 'react'

const IBYcourse = () => {

  useEffect(()=>{
    scrollTo(0,0)
  },[])

  const [ openForm,setOpenForm ] = useState(false)

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }


  return (
    <div>
      { metaDataObj[location.pathname] && <Helmet  title={metaDataObj[location.pathname]?.title || ''}/> }
      <div className="IBY-sections">
        <InnerNavComponent abc={highlight}/>
        <div className="main-container">
          <div className="highlight-info">
            <h1>IBY Class (Only for TYI TTC Teachers) - Online & On Campus</h1>
            <p>One of the most-awaited and popular classes of The Yoga Institute, IBY Class is back. The classes has been running for more than two decades. </p>
            <CommonBtn text='Enroll Now' buttonAction={ ()=>setOpenForm(true) }   />
          </div>
          <div className="highlight-cover">
            <img src={`${baseDomain}${iybCourse.main}`} alt="IYB-image" />
          </div>
        </div>
        <div className="about-section">
          <p> Come and immerse yourself in the in-depth knowledge of asanas, pranayamas, kriyas and meditation. This class will help you in mastering the techniques, acquiring a deeper understanding of the self, others and the universe. </p>
          <div className="sattvik-section">
            <p className='nutri-page-bold'>USP of the IBY Class:</p>
            <ul>
              <li>This class will be held by our senior teacher Ramendra Sir.</li>
              <li>The teachers can imbibe wisdom from Dr. Hansaji’s rich experiences and teachings. </li>
              <li>This interactive session will give participants the opportunity to get their queries resolved and get insights from Hansa Maa on various subjects. </li>
            </ul>

            <p className='nutri-page-bold'> Timings & Fees (Online & On campus) </p>
            <ul>
              <li><span className='nutri-page-semi-bold' > Date: </span>Starting from 10th March, 2023</li>
              <li><span className='nutri-page-semi-bold' > Time: </span> Every Friday, 3:30 pm to 5:00 pm (IST)</li>
              <li><span className='nutri-page-semi-bold' > Annual Fees:: </span>Rs. 2,000/-</li>
            </ul>
            <p className='nutri-page-bold'>Open to all the teachers who have completed Basic TTC, Intermediate TTC and Advanced TTC from the institute</p>
          </div>
        </div>
        
       
        {openForm && <IBYform  setOpenForm={setOpenForm} />}
      </div>
       
    </div>
  )
}

export default IBYcourse