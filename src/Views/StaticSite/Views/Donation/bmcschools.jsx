import React from 'react'

import SectionComponent from '../../Components/SectionComponent'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
import DonationNavBar from '../../Components/donationNavbar'
import Donation from '../../Components/Donation'
const Bmcschools = () => {
  return (
    <div>
      <DonationNavBar />
      <SectionComponent
        image={`${baseDomain}${donationAssets.bmcAssets}`}
        title="Underprivileged Children in BMC schools"
        description="The Yoga Institute’s Scholarship Programs is aimed at transforming children’s lives by ensuring quality education and training them in the ways of yogic life. In association with BMC, The Yoga Institute educated 10000 students in 60 schools. And by 2025, the Institute aspires to adopt 500 schools, educating over 200000 lakh students. This initiative helps students focus on their studies better and achieve an overall balance in life."
      />
      <Donation />
    </div>
  )
}

export default Bmcschools
