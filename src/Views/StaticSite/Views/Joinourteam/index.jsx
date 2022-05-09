import React from 'react'
import CommonBanner from '../../Components/Common-banner'
import benefits from '../../assets/images/benifits.png'
import './styles.scss'
import CareerCard from '../../Components/CommonCareerCard'
// import "../../Components/Common-banner/styles.scss"

const Volunteer = () => {
  return (
    <>
      <div className="Benefits-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="Volunteer"
          BgImage={benefits}
          Heading="Volunteer with us"
          isOnlyBanner={false}
          innerNav={true}
        />
      </div>
      <div className="our-container pd-career">
        <div className="banner-heading bh-center">
          Volunteer Programmes
          <div className="bottom-line"></div>
        </div>
        <div className="career-cards">
          <CareerCard cardTitle="Annam Brahma" index={1} />
          <CareerCard cardTitle="BMC Schools" index={2} />
          <CareerCard cardTitle="Traffic Police" index={3} />
          <CareerCard cardTitle="Tree Plantation" index={4} />
        </div>
      </div>
    </>
  )
}

export default Volunteer
