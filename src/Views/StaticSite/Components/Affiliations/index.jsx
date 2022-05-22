import React from 'react'
import CommonBanner from '../Common-banner'
import Heading from '../Heading'
import './style.scss'
import baseDomain, { giftingAssets } from '../../assets/images/imageAsset'
import AffiliationImg from '../../assets/images/why_tyi.png'
const Affiliations = () => {
  let desc= 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
  return (
    <>
      <div className="affiliation-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="affiliation"
          Heading="Affiliations"
          isOnlyBanner={true}
          innerNav={false}
          description={desc}
          bannerImg={AffiliationImg}
        />
      </div>
      <div className="affiliation-content">
        <div className="affiliation-text">
          <Heading largeText={'The Indian Yoga Association'} />
          <p>
            The Indian Yoga Association is a self-regulatory body of leading
            yoga organizations of India. It is committed to promotion and
            advancement of Yoga and its applications around the world and
            industry-cum-self-regulatory body to facilitate activities of member
            institutions.
          </p>
        </div>
        <div className="affiliation-logos">
          <img src={baseDomain + giftingAssets.careerAssets} alt="" />
        </div>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-logos">
          <img src={baseDomain + giftingAssets.careerAssets} alt="" />
        </div>
        <div className="affiliation-text">
          <Heading largeText={'Yoga Certification Board'} />
          <p>
            YCB (Yoga Certification Board) established by Ministry of AYUSH,
            Government of India, is the Board which has been set up by
            Government for certification in the field of Yoga.
          </p>
        </div>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-text">
          <Heading largeText={'Yoga Alliance'} />
          <p>
            Yoga Alliance is the largest nonprofit association representing the
            yoga community, with over 7,000 Registered Yoga Schools. It is
            involved with advocating for self-regulation in the yoga indus- try
            and universal access to high quality, safe, accessible, and eq-
            uitable yoga practices.
          </p>
        </div>
        <div className="affiliation-logos">
          <img src={baseDomain + giftingAssets.careerAssets} alt="" />
        </div>
      </div>
      <div className="affiliation-content">
        <div className="affiliation-logos">
          <img src={baseDomain + giftingAssets.careerAssets} alt="" />
        </div>
        <div className="affiliation-text">
          <Heading
          
            smallText={'The International Association'}
            largeText={'of Yoga Therapists'}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi
          </p>
        </div>
      </div>
    </>
  )
}

export default Affiliations
