import React, { useState } from 'react'
import CommonBanner from '../../../Components/Common-banner'
//import Donation from '../../../Components/Donation'
import SocialInitiatives from '../../../Components/SocialInitiatives'
import SocialInitiativesGallery from '../../../Components/SocialInitiatives/SocialInitiativesGallery'
import baseDomain, { background } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
const Support = () => {
  const [imageChanger, setImageChanger] = useState(0)
  const AlumniSupportBar = {
    title: 'alma-mater',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      // {
      //   innerTitle: 'alumni-events',
      //   url: '/alumni/upcoming-events',
      //   name: 'Upcoming Events',
      // },
      {
        innerTitle: 'alumni-gallery',
        url: '/alumni/alumni-gallery',
        name: 'Alumni Gallery',
      },
      {
        innerTitle: 'alma-mater',
        url: '/alumni/support',
        name: 'Support Your Alma Mater',
      },
      {
        innerTitle:'alumni-contact',
        url:'/#footer',
        name:'Contact'
      }
    ],
  }
  return (
    <div className="support-alma-container">
      <CommonBanner
        Logo={false}
        Navigation={true}
        PageType="support"
        Heading="Support Your Alma Mater"
        isOnlyBanner={false}
        innerNav={true}
        bannerImg={`${baseDomain}${background.alma}`}
        overlay="#61829DD4"
        description='Every act counts and sometimes it’s just the intention that matters. Help us serve others by Volunteering in our many initiatives across the city and the country. All that we need from you is a deep sense of commitment from you and that you show up when you say you will. Together we can make a real difference in many lives and that is the best and only guru dakshina we will ask from you. Let’s begin a new circle of goodness and service.'
      >
        {/* <AlumiNav title={'Support'} /> */}
        <InnerNavComponent abc={AlumniSupportBar}/>
      </CommonBanner>
      <SocialInitiatives
        setImageChanger={setImageChanger}
        imageChanger={imageChanger}
        alumni={true}
      />
      <SocialInitiativesGallery notEvent={true} imageChanger={imageChanger} />
      {/* <Donation
        page={'alumni'}
        supportText={
          'I wish to support the responsibilities and the goals of The Yoga Institute:'
        }
      /> */}
    </div>
  )
}

export default Support
