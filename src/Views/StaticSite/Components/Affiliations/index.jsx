import React from 'react'
import CommonBanner from '../Common-banner'
import Heading from '../Heading'
import './style.scss'
import baseDomain, {
  certificates,
  background,
} from '../../assets/images/imageAsset'
import { useEffect } from 'react'
import InnerNavComponent from '../InnerNavComponent'
//import AffiliationImg from '../../assets/images/why_tyi.png'
const Affiliations = () => {

  useEffect(()=>{
    scrollTo(0,0)
  },[])

  const Affiliation = {
    title: 'affiliations',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  
  return (
    <>
      <div className="affiliation-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="affiliation"
          Heading="Affiliations"
          isOnlyBanner={false}
          innerNav={false}
          description={'The Yoga Institute offers a variety of online as well as offline courses which caters to students all across the Globe. Our curriculum comprises a variety of topics and subjects and practical applications of yogic ideals in daily life  that contributes to better living and a truly transformed you! Our courses are also recognised and affiliated by various Government and International bodies.'}
          bannerImg={`${baseDomain}${background.affiliations}`}
          overlay='#44776Ad4'
        >
          <InnerNavComponent abc={Affiliation} />
        </CommonBanner>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-text">
          <Heading largeText={'The Indian Yoga Association'} />
          <p>
            The Indian Yoga Association is committed to promotion and
            advancement of Yoga and its applications around the world.
          </p>
        </div>
        <div className="affiliation-logos">
          <img src={`${baseDomain}${certificates.IYA}`} alt="" />
        </div>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-logos">
          <img src={`${baseDomain}${certificates.YCB}`} alt="" />
        </div>
        <div className="affiliation-text">
          <Heading largeText={'Yoga Certification Board'} />
          <p>
            Yoga Certification Board is the Board which has been set up by
            Government for certification in the field of Yoga.
          </p>
        </div>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-text">
          <Heading largeText={'Yoga Alliance'} />
          <p>
            Yoga Alliance is involved with advocating for self- regulation in
            the yoga industry.
          </p>
        </div>
        <div className="affiliation-logos">
          <img src={`${baseDomain}${certificates.YAL}`} alt="" />
        </div>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-logos">
          <img src={`${baseDomain}${certificates.IAYT}`} alt="" />
        </div>
        <div className="affiliation-text">
          <Heading
            smallText={'The International Association'}
            largeText={'of Yoga Therapists'}
          />
          <p>
            IAYT supports research and education in yoga and serves as a
            professional organization for yoga teachers and yoga therapists
            worldwide.
          </p>
        </div>
      </div>
    </>
  )
}

export default Affiliations
