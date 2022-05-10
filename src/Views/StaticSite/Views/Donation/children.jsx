import React from 'react'
import SectionComponent from '../../Components/SectionComponent'
import DonationNavBar from '../../Components/donationNavbar'
import Donation from '../../Components/Donation'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
const Children = () => {
  return (
    <div>
      <DonationNavBar />
      <SectionComponent
        image={baseDomain + donationAssets.childrenAssets}
        title="Yoga for Children with special needs"
        description="Children are the heart of The Yoga Institute. We believe that every child contains the seed of a vibrant future within him and it has been our constant effort to nurture this. We are even more committed to the growth and well-being of children with special needs. We dedicate our patient and persistent efforts to assist them with their health and well-being needs through our customized and curated courses for them.  We also conduct special sessions, workshops and programmes for parents, to help them better understand and fulfill their parenting roles. We have organized _____ sessions for special children and ____workshops for parents.Help us grow our specialized and custom-made Yoga programs for Children with Special Needs. 
        They are our collective future!
        "
      />

      <Donation />
    </div>
  )
}

export default Children
