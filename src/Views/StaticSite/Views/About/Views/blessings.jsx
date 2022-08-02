import React from 'react'
import CommonBannerAboutUs from '../../../Components/CommonBannerAboutUs'
import baseDomain, { aboutAssets } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'



const Blessings = ({ location }) => {

  const pathLocation = useLocation()

  const AboutBlessings = {
    title: 'blessings',
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
      { metaDataObj[pathLocation.pathname] && 
    <Helmet
      title={metaDataObj[pathLocation.pathname || '']?.title || ''}
    /> }
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

