import React from 'react'
import CommonBanner from '../../../Components/Common-banner'
import './style.scss'
import baseDomain, { volunteerAssets, background } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'
//import ValuesImg from '../../assets/images/values.png'
const Values = () => {

  const location = useLocation()

  const ValuesBar = {
    title: 'volunteer-values',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'volunteer-with-us',
        url: '/volunteer',
        name: 'Volunteer With Us',
      },
      {
        innerTitle: 'volunteer-values',
        url: '/values',
        name: 'Values',
      },
    ],
  }
  return (
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
      <div className='Benefits-container'>
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType='Values'
          Heading='Values'
          isOnlyBanner={false}
          innerNav={true}
          description={'Volunteering with The Yoga Institute is value-based and thus experience rich. At our core is the value of joy of giving. We ask that you give richly of your kindness and your time. Sometimes what maybe a small act of kindness for you might be life-turning for the one who receives it. So come join us in celebrating these rich values. Discover more through our volunteer experiences.'}
          bannerImg={`${baseDomain}${background.volunteer}`}
          overlay='#C88068D4'
        >
          <InnerNavComponent abc={ValuesBar}/>
        </CommonBanner>
      </div>
      <div className='content-container pd-values'>
        <div className='text-content'>
          <p>
            {' “Life is not measured by how much you have attained for yourself but rather by how much you have given to others.” - Dr. Hansaji. J. Yogendra'}
          </p>
          <p>
            {'Volunteer for the Institute\'s social outreach programmes or any of our in-house programmes by selflessly sharing your most valuable resources: Time and Care. Volunteering activities at The Yoga Institute are based on this concept of giving to uplift the poor and underprivileged in society. These programmes function only on the concept of selflessness and kindness. Along with helping the needy, volunteers engage in a variety of additional activities that help  to keep the institute running smoothly and promote the benefits of yoga. Volunteers dedicate their time to activities like teaching, admin work, kitchen work, and much more. Explore our numerous social initiatives and institutional activities out and choose to volunteer for the ones that call out to you the most. Volunteers who are sure that  they can devote time and energy to serving others are welcome to participate in the Institute\'s volunteer programs.'}
          </p>
        </div>
        <div className='image-content'>
          <img src={`${baseDomain}${volunteerAssets.valuesAssets}`} alt='our values'/>
        </div>
      </div>
    </>
  )
}

export default Values
