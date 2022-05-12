import React from 'react'
import CommonBannerNav from '../CommonBannerNav'
import './styles.scss'
const CommonBannerFacts = ({
  Navigation,
 
  PageType,
  Heading,
  isOnlyBanner,
 
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
              : 'Uncover both ancient and new interesting facts about your very own, "The Yoga Institute".'}
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonBannerFacts
