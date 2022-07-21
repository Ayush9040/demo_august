import React from 'react'
import CommonBannerAboutUs from '../../../Components/CommonBannerAboutUs'
import baseDomain, { aboutAssets } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'



const Blessings = ({ location }) => {

  const AboutBlessings = {
    title: 'blessings',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'overview',
        url: '/about/overview',
        name: 'Overview',
      },
      {
        innerTitle: 'our-legacy',
        url: '/about/our-legacy',
        name: 'Our Legacy',
      },
      {
        innerTitle: 'blessings',
        url: '/about/blessings',
        name: 'Pujya Maa Dr Hansaji’s blessings',
      },
    ],
  }
  return (
    <>
      <div className="blessings-container">
        <CommonBannerAboutUs
          location={location}
          Logo={false}
          Navigation={true}
          PageType="blessings"
          BgImage={`${baseDomain}${aboutAssets.aboutAsset43}`}
          Heading="Dr Hansaji’s Blessings"
          isOnlyBanner={false}
          innerNav={false}
          isBlessing={true}
        >
          <InnerNavComponent abc={AboutBlessings}/>
        </CommonBannerAboutUs>
        
      </div>
    </>
  )
}

export default Blessings

