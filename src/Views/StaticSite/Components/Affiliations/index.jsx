import React from 'react'
import CommonBanner from '../Common-banner'
import Heading from '../Heading'
import './style.scss'
import baseDomain, {
  certificates,
  background,
} from '../../assets/images/imageAsset'
import { useEffect } from 'react'
//import AffiliationImg from '../../assets/images/why_tyi.png'
const Affiliations = () => {

  useEffect(()=>{
    scrollTo(0,0)
  },[])

  let desc =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
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
          description={desc}
          bannerImg={`${baseDomain}${background.volunteer}`}
        />
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
