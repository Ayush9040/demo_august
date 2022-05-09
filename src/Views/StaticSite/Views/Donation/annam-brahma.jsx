import React from 'react'
import Donation from '../../Components/Donation'
import DonationNavBar from '../../Components/donationNavbar'
import AnnamBrahma from '../../assets/images/annam-brahma.jpg'
import SectionComponent from '../../Components/SectionComponent'
const AnnamBrahmha = () => {
  return (
    <div className="annam-page">
      <DonationNavBar />
      <br />
      <br />
      <br />
      <br />
      <SectionComponent
        image={AnnamBrahma}
        title="Annam Brahma"
        description="Annam Brahma, since 2018, has served more than 25, 00,000 meals, working 365 days a year.  We serve pure, satvik, hygienic meals twice a day. Many of those who share the joy of food with us do not have access to healthy food even once a day.  Annam Brahma strives to serve with the gift of healthy, nutritious meals all through the year and our aim is to serve ____________ meals a year, all across the city by ____________."
      />

      <Donation />
    </div>
  )
}

export default AnnamBrahmha
