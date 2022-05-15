import React from 'react'
import SectionComponent from '../../Components/SectionComponent'
import DonationNavBar from '../../Components/donationNavbar'
import Donation from '../../Components/Donation'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
const Community = () => {
  return (
    <div>
      <DonationNavBar />
      <SectionComponent
        image={baseDomain + donationAssets.communityAssets}
        title="Yoga for transgender community"
        description="Inclusion is fundamental to Yoga and with this belief we take pride in introducing Yoga to the transgender community in Mumbai.  Our outreach programme for the transgender community applies the fundamentals of Yoga to address not only the physical challenges but also the mental challenges of anxiety disorders, mood-disorders, gender-identity anxiety etc among the transgender community. We have organized _________ sessions for members of the transgender community and continue to increase our efforts towards them."
      />
      <Donation />
    </div>
  )
}

export default Community
