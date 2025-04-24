import React, { useEffect } from 'react'
import CommonBanner from '../../../Components/Common-banner'
import SectionComponent from '../../../Components/SectionComponent'
import { socialPageData } from '../../../utils/socialPageData'
import './style.scss'
// import GiftingImg from '../../../assets/images/gifting2a-02.png'
import baseDomain, { socialResponsibilityAssets } from '../../../assets/images/imageAsset'
// import { homeAssets } from '../../../assets/images/imageAsset'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'

const SocialResponsibility = () => {

  const location = useLocation()

  const social = {
    title: 'social-responsibility',
    color: 'white',
    menuColor: 'white',
    menuItems: []
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <div className="social-res-internal">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="gifting"
          Heading="Social Responsibility"
          isOnlyBanner={false}
          innerNav={false}
          description={
            'From the very beginning, it has been very important for TYI to balance the potential of sharing the awareness of yoga with social responsibility, as well as find and encourage a way to give back to the community. '
          }
          // bannerImg={`${baseDomain}${homeAssets.homeAsset21}`}
          // overlay="#61829DD0"
          bannerImg={`${baseDomain}${socialResponsibilityAssets.schoolChildren}`}
          overlay="#61829DD4"
        >
          <InnerNavComponent abc={social} />
        </CommonBanner>
        <div className="social-res-sections">
          {socialPageData.map((item, i) => (
            <SectionComponent
              key={i}
              title={item.title}
              image={item.image}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SocialResponsibility
