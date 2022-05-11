import React from 'react'
import CommonBannerLegacy from '../../../Components/AboutUsLegacy'
import benefits from '../../../assets/images/benifits.png'

const OurLegacy = () => {
  return (
    <div>
      <CommonBannerLegacy
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="about-legacy"
        BgImage={benefits}
        Heading="Overview"
        isOnlyBanner={false}
        innerNav={true}
      />
    </div>
  )
}

export default OurLegacy
