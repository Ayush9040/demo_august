import React from 'react'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import SectionComponent from '../../Components/SectionComponent'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import './style.scss'

const SocialResponsibility = () => {
  return (
    <div className='social-res-internal'>
      <CommonBannerNavPrimary />
      <SectionComponent
        image={baseDomain + homeAssets.homeAsset19}
        description={'Annam Brahma is a social initiative aimed at serving fresh, nutritious, and healthy food to the underprivileged citizens of the country without discrimination. The food is served to over 1000 people daily, 365 days a year. '}
      />
    </div>
  )
}

export default SocialResponsibility
