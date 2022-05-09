import React from 'react'
import SectionComponent from '../../Components/SectionComponent'
import DonationNavBar from '../../Components/donationNavbar'
import Donation from '../../Components/Donation'
import Polices from '../../assets/images/police.jpg'

const Police = () => {
  return (
    <div>
      <DonationNavBar />
      <SectionComponent
        image={Polices}
        title="Police"
        description="The Mumbai Police Force is on its toes 24X7, 365 days a year protecting us all and serving the city selflessly. The high stress levels of their jobs expose them to various severe health concerns such as cardiac and coronary diseases, stress induced obesity, diabetes, blood-pressure etc.  The Yoga Institute has teamed up with Mumbai Police to train more than 13,000 men and women of the force in yoga techniques. This has helped them fight their daily stress-induced challenges, improve their overall physical health and become more focused and mindful. "
      />
      <Donation />
    </div>
  )
}

export default Police
