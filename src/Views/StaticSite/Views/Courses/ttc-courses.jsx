import React from 'react'
import baseDomain, { courseAssets } from '../../assets/images/imageAsset'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import CourseDetails from '../../Components/CourseDetails'
// import TTC from '../../assets/images/900hrs.jpg'

const TTCCourse = () => {
  let TTC = baseDomain + courseAssets.courseAsset2
  return (
    <div>
      <CommonBannerNavPrimary innerNav={false} />
      <br />
      <br />
      <CourseDetails
        name={
          <span>
            900 hours
            <br />7 Months Online-English
            <br />
            1st Feburary 2022
          </span>
        }
        description="Enrich yourself with deep knowledge and hands on experience on traditional yoga concepts and techniques."
        heroImg={TTC}
      />
    </div>
  )
}

export default TTCCourse
