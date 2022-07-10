import React from 'react'
import CommonBannerLegacy from '../../../Components/AboutUsLegacy'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import baseDomain,{ background } from '../../../assets/images/imageAsset'

const OurLegacy = () => {
  const AboutOurLegacy = {
    title: 'our-legacy',
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
        url: '/our-legacy',
        name: 'Our Legacy',
      },
      {
        innerTitle: 'blessings',
        url: '/blessings',
        name: 'Pujya Maa Dr Hansaji’s blessings',
      },
    ],
  }
  return (
    <div>
      <CommonBannerLegacy
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="about-legacy"
        BgImage={`${baseDomain}${background.benefits}`}
        Heading="Overview"
        isOnlyBanner={false}
        innerNav={false}
      >
        <InnerNavComponent abc={AboutOurLegacy}/>
      </CommonBannerLegacy>
    </div>
  )
}

export default OurLegacy
