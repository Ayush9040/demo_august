import React, { useState } from 'react'
import AlumiNav from '../../Components/AlumniNav'
import CommonBanner from '../../Components/Common-banner'
import Donation from '../../Components/Donation'
import SocialInitiatives from '../../Components/SocialInitiatives'
import SocialInitiativesGallery from '../../Components/SocialInitiatives/SocialInitiativesGallery'
//import SupportImg from '../../assets/images/gifting2a-02.png'
import baseDomain, { background } from '../../assets/images/imageAsset'
const Support = () => {
  const [imageChanger, setImageChanger] = useState(0)

  return (
    <div className="support-alma-container">
      <CommonBanner
        Logo={false}
        Navigation={true}
        PageType="support"
        Heading="Support Your Alma Mater"
        isOnlyBanner={false}
        innerNav={true}
        bannerImg={`${baseDomain}${background.volunteer}`}
        description='Every act counts and sometimes it’s just the intention that matters. Help us serve others by Volunteering in our many initiatives across the city and the country. All that we need from you is a deep sense of commitment from you and that you show up when you say you will. Together we can make a real difference in many lives and that is the best and only guru dakshina we will ask from you. Let’s begin a new circle of goodness and service.'
      >
        <AlumiNav title={'Support'} />
      </CommonBanner>
      <SocialInitiatives
        setImageChanger={setImageChanger}
        imageChanger={imageChanger}
        alumni={true}
      />
      <SocialInitiativesGallery notEvent={true} imageChanger={imageChanger} />
      <Donation
        page={'alumni'}
        supportText={
          'I wish to support the responsibilities and the goals of The Yoga Institute:'
        }
      />
    </div>
  )
}

export default Support
