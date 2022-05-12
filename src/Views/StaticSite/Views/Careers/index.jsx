import React from 'react'
import CommonBanner from '../../Components/Common-banner/index'
import CareerCard from '../../Components/CommonCareerCard'
import './style.scss'
import { career } from '../../utils/careerData'

const Careers = () => {
  return (
    <div className='careers-page' >
      <CommonBanner
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="OurCareers"
        // BgImage={benefits}
        Heading="Our Careers"
        isOnlyBanner={false}
        innerNav={false}
      />
      <div className='jobs-container' >
        <h1>Join us<div className='bottom-line' ></div></h1>
        <div className='jobs-card-container' >
          {career?.map((item,i)=>{ return <CareerCard key={i} cardTitle={item.jobTitle} bgImg={item.bgImage} />})}
        </div>
      </div>

    </div>
  )
}

export default Careers