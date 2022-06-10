import React from 'react'
import SectionComponent from '../../Components/SectionComponent'
import DonationNavBar from '../../Components/donationNavbar'
import Donation from '../../Components/Donation'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
const Underprivileged = () => {
  return (
    <div>
      <DonationNavBar />
      <SectionComponent
        image={`${baseDomain}${donationAssets.underprivilegedAssets}`}
        title="Yoga for the Underprivileged"
        description="Being exposed to harsh realities of life can be detrimental to the mental and physical health; with effects ranging from reduced life-spans to limited productivity and reduced earning capacity. The Yoga Institute has special outreach initiatives for the underprivileged to help them address the challenges unique to their situation.  We have conducted ________ sessions/ workshops for this objective. With a combined focus on physical and mental well-being we try to improve the lives of those on the margins, those who are often invisible."
      />
      <Donation />
    </div>
  )
}

export default Underprivileged
