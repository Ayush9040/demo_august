import React from 'react'
import CommonBanner from '../../Components/Common-banner'
import './styles.scss'
import baseDomain, { volunteerAssets } from '../../assets/images/imageAsset'

const Values = () => {
  return (
    <>
      <div className='Benefits-container'>
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType='Values'
          Heading='Values'
          isOnlyBanner={false}
          innerNav={true}
        />
      </div>
      <div className='content-container pd-career'>
        <div className='text-content'>
          <div className='banner-heading'>
            <h1>Title</h1>
            <div className='bottom-line'></div>
          </div>
          <p>
            {`Life is not measured by how much you have attained for yourself; but rather by how much you have given to others. - Dr. Hansaji.J.Yogendra
              Volunteer for social causes or for the Institute's internal activities by selflessly sharing your most valuable resources: Time and Care. 
              Volunteering activities at The Yoga Institute are based on this concept of giving to uplift the poor and underprivileged in society. These programmes function only on the concept of selflessness and kindness. Along with helping the needy, volunteers engage in a variety of additional activities that assist to keep the institute running smoothly and promote the benefits of yoga at all times. Volunteers dedicate their time to activities like teaching, admin work, kitchen work, and much more. 
              Explore the numerous social initiatives and institutional activities carried out and choose to volunteer for the ones in which you believe you can make the most difference. Volunteers who are assured they can devote time and energy to serving others are welcome to participate in the Institute's volunteer programs.
           `}
          </p>
        </div>
        <div className='image-content'>
          <img src={baseDomain + volunteerAssets.valuesAssets} />
        </div>
      </div>
    </>
  )
}

export default Values
