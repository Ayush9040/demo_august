import React from 'react'
import CommonBannerNav from '../CommonBannerNav'
import './styles.scss'
const CommonBanner = ({
  Navigation,
  BgImage,
  PageType,
  Heading,
  isOnlyBanner,
  isLeftContent,
  innerNav,
  children,
  description,
}) => {
  return (
    <>
      <div
        className={`common-container ${PageType}-container ${
          !isOnlyBanner && 'common-container-responsive'
        }`}
      >
        {Navigation && (
          <div className={'navigation-container'}>
            {children ? children : <CommonBannerNav innerNav={innerNav} />}
          </div>
        )}
        {/* <div className='img-container'> */}
        {/* {!isOnlyBanner && <img src={BgImage} />} */}
        {/* <Image fluid={BgImage} /> */}
        {/* </div> */}
        <div
          className={`banner-container ${
            !isOnlyBanner && 'banner-container-responsive'
          }`}
        >
          <div className="why-text banner-text">
            <div className="banner-heading">
              {Heading}
              <div className="bottom-line"></div>
            </div>
            {description
              ? description
              : 'The Yoga Institute campus is filled with spiritual energy, power and positive vibrations developed over 103 years of goodness and positivity. Being in the Institute campus is enough to purify your aura and calm your mind. The energies of legendary yogis Shri Yogendraji and Dr. Sahab permeate the senses. Every element here is full of this vibrant energy. Over the years, many yogis and rishis have visited the Institute and added their own spiritual aura. Whoever visits The Yoga Institute, benefits in a special spiritual way. They feel a deep connect with the energy of this place. The campus has positive energies which positively impacts the brain waves. This is a place of silence, positivity and spiritual vibrations which are strong enough to cleanse your aura and stabilize your mind. Every element of The Yoga Institute campus radiates mystical vibrations which can permeate deep into yourself.'}
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonBanner
