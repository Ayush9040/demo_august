import React, { useEffect } from 'react'
import CommonBannerAboutUs from '../../../Components/CommonBannerAboutUs'
import benefits from '../../../assets/images/benifits.png'
import baseDomain, { aboutAssets } from '../../../assets/images/imageAsset'
import './styles.scss'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const AboutUs = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AboutOverview = {
    title: 'overview',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'overview',
        url: '/know-us-better',
        name: 'Overview',
      },
      {
        innerTitle: 'our-legacy',
        url: '/our-legacy',
        name: 'Our Legacy',
      },
      {
        innerTitle: 'blessings',
        url: '/blessings',
        name: 'Pujya Maa Dr Hansaji’s blessings',
      },
    ],
  }
  return (
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
      <div className="Overview-container">
        <CommonBannerAboutUs
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="Overview"
          BgImage={benefits}
          Heading="Overview"
          isOnlyBanner={false}
          innerNav={false}
          description="We are the oldest organized Yoga center in the world. In 1918, Shri Yogendra ji laid the foundation of our 100-year legacy which drives us forward to this day. The Yoga Institute has incorporated the essence of classical and traditional yoga systems like Karma Yoga, Bhakti Yoga, Hatha Yoga, Mantra Yoga, Laya Yoga etc., so that people can comprehensively derive the benefits from all these systems rather than a single system. Our beloved and esteemed Director, Dr. Hansaji Yogendra, spearheads the efforts of the Institute in her unique and powerful way. Hansama has touched the lives of millions through her graceful and simple teachings."
        >
          <InnerNavComponent abc={AboutOverview}/>
        </CommonBannerAboutUs>
      </div>
      <div className="content-container pd-career">
        <div className="image-content">
          <img src={`${baseDomain}${aboutAssets.aboutAsset1}`} />
        </div>
        <div className="text-content-right tyi-text-container">
          <div className="banner-heading">
            <h1>The Yoga Institute</h1>
            <div className="bottom-line"></div>
          </div>
          <p>The Enduring Foundation Spirit</p>
          <p>
            The Yoga Institute, established by Shri Yogendra Ji in 1918 is the
            world’s oldest Yoga Center. Being the world’s first established yoga
            center, the institute has served as a foundation for the evolution
            of yoga throughout the world. Its 100 year old legacy is suffused
            with the ideals, wisdom and practice of Yoga and the yogic way of
            life. This legacy is also the source of a deep, unwavering, global
            commitment to self-transformation through Yoga. As part of its
            commitment to this legacy, the Institute has trained more than
            100000 yoga teachers across the globe and has transformed the lives
            of millions who sought inner transformation, mental peace, and
            healthy living. The Institute’s significant contribution to Yoga
            education, standardization of yoga practices, research, and
            experiential learning has been widely recognized.
          </p>
          <p>
            The Yoga Institute guides people’s journey to find within themselves
            a place of calm and balance. We strive to help people create within
            themselves a center, a resolute and permanent center, a still point
            in the turning world. This then serves as the source for mental and
            physical fitness and joyous living. Our courses are specifically
            designed for various age-groups and address diverse challenges such
            as work-life balance, reducing stress and anxiety, treating
            insomnia, improving focus, concentration and productivity. Some of
            our most popular courses include the 21 Day Better Living Course,
            the Teacher Training Course, the 7 Day Healthy Living Course etc.
            Our students have repeatedly attested for the
            therapeutic value and the tangible benefits of these courses.{' '}
          </p>
          <p>
            The Yoga Institute adheres to the tenets of Classical Yoga,
            incorporating its multiple Yoga philosophies such as Karma Yoga,
            Bhakti Yoga, Hatha Yoga, Mantra Yoga, Laya Yoga etc. The Yoga
            Institute approaches Classical Yoga with the objective of making it
            accessible and relevant to the common man. We take great pride in
            the fact that we have adapted traditional yogic practices to address
            and resolve the challenges of a global, modern and even ‘woke’
            world.
          </p>
          <p>
            So come join us to know more and become part of the new Yogic
            movement.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs
