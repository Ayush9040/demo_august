import React from 'react'
import Donation from '../../Components/Donation'
import DonationNavBar from '../../Components/donationNavbar'
import SectionComponent from '../../Components/SectionComponent'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
const AnnamBrahmha = () => {
  return (
    <div className="annam-page">
      <DonationNavBar />
      <div style={{ height:'50px' }} ></div>
      <SectionComponent
        image={`${baseDomain}${donationAssets.annamAssets}`}
        title="Annam Brahma"
        description="Annam Brahma, since 2018, has served more than 25, 00,000 meals, working 365 days a year.  We serve pure, satvik, hygienic meals twice a day. Many of those who share the joy of food with us do not have access to healthy food even once a day.  Annam Brahma strives to serve with the gift of healthy, nutritious meals all through the year and our aim is to serve ____________ meals a year, all across the city by ____________."
      />

      <Donation />
    </div>
  )
}

export default AnnamBrahmha
