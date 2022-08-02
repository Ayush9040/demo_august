import React from 'react'
import CommonBannerLegacy from '../../../Components/AboutUsLegacy'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import baseDomain,{ background } from '../../../assets/images/imageAsset'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const OurLegacy = () => {

  const location = useLocation()

  const AboutOurLegacy = {
    title: 'our-legacy',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'overview',
        url: '/know-us-better',
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
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
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
    </>
  )
}

export default OurLegacy
