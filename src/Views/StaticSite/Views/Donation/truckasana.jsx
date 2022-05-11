import React from 'react'
import SectionComponent from '../../Components/SectionComponent'
import DonationNavBar from '../../Components/donationNavbar'
import Donation from '../../Components/Donation'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
const Truckasana = () => {
  return (
    <div>
      <DonationNavBar />

      <SectionComponent
        image={baseDomain + donationAssets.truckasanaAssets}
        title="Truckasana"
        description="The transport and logistics industry is the backbone of any country and economy. Trucks get us everything we need; from food to fuel. However, the spinal and physical health of the truck-drivers is adversely affected by the very nature of their work. So we decided to bring wellness and the ease of Yoga to our truck-drivers who spend their lives on the road, serving us.  Truckasan is a Yoga Institute exclusive initiative that formulates Yoga solutions for the peculiar problems of the community. We have held _______sessions across the country and trained_________ drivers through this initiative."
      />
      <Donation />
    </div>
  )
}

export default Truckasana
