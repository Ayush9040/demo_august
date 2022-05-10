import React from 'react'
import CommonBannerAboutUs from '../../Components/CommonBannerAboutUs'
import Tyi from '../../assets/images/why_tyi.png'
import baseDomain, { aboutAssets } from '../../assets/images/imageAsset'



const Blessings = ({ location }) => {
  console.log('tyi', Tyi)
  return (
    <>
      <div className="blessings-container">
        <CommonBannerAboutUs
          location={location}
          Logo={false}
          Navigation={true}
          PageType="blessings"
          BgImage={baseDomain+aboutAssets.aboutAsset43}
          Heading="Dr Hansaji’s Blessings"
          isOnlyBanner={false}
          innerNav={true}
          isBlessing={true}
        />
      </div>
    </>
  )
}

export default Blessings

