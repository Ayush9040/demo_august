import React from 'react'
import CommonBanner from '../../Components/Common-banner'
import './styles.scss'
import baseDomain, { volunteerAssets, background } from '../../assets/images/imageAsset'
//import ValuesImg from '../../assets/images/values.png'
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
          bannerImg={`${baseDomain}${background.volunteer}`}
          overlay='#C88068D4'
        />
      </div>
      <div className='content-container pd-career'>
        <div className='text-content'>
          <p>
          Life is not measured by how much you have attained for yourself; but rather by how much you have given to others. - Dr. Hansaji.J.Yogendra

          </p>
          <p>
            Volunteer for social causes or for the Institute&apos;s internal
            activities by selflessly sharing your most valuable resources: Time
            and Care. Volunteering activities at The Yoga Institute are based on
            this concept of giving to uplift the poor and underprivileged in
            society.
          </p>
          <p>
            These programmes function only on the concept of selflessness and
            kindness. Along with helping the needy, volunteers engage in a
            variety of additional activities that assist to keep the institute
            running smoothly and promote the benefits of yoga at all times.
            Volunteers dedicate their time to activities like teaching, admin
            work, kitchen work, and much more. Explore the numerous social
            initiatives and institutional activities carried out and choose to
            volunteer for the ones in which you believe you can make the most
            difference. Volunteers who are assured they can devote time and
            energy to serving others are welcome to participate in the
            Institute&apos;s volunteer programs.
          </p>
        </div>
        <div className='image-content'>
          <img src={`${baseDomain}${volunteerAssets.valuesAssets}`} />
        </div>
      </div>
    </>
  )
}

export default Values
