import React from 'react'
import CommonBannerNav from '../CommonBannerNav'
import DefaultImg from '../../assets/images/museum1_.jpg'
import './styles.scss'
const CommonBanner = ({
  Navigation,
  PageType,
  Heading,
  isOnlyBanner,
  innerNav,
  children,
  description,
  bannerImg = DefaultImg,
  overlay = '#000000',
}) => {
  //console.log(bannerImg, 'museum')
  return (
    <>
      <div
        className={`common-container ${PageType}-container ${
          !isOnlyBanner && 'common-container-responsive'
        }`}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div
          className='overlay'
          style={{
            width: '100%',
            height: '100%',
            background: `${overlay}`,
          }}
        >
          {/* <img src={bannerImg ? bannerImg : DefaultImg} /> */}
          {Navigation && (
            <div className={'navigation-container'}>
              {children ? children : <CommonBannerNav innerNav={innerNav} />}
            </div>
          )}

          <div
            className={`banner-container ${
              !isOnlyBanner && 'banner-container-responsive'
            }`}
          >
            <div className='why-text banner-text'>
              <div className='banner-heading'>
                {Heading}
                <div className='bottom-line'></div>
              </div>
              {description
                ? description
                : 'Celebrate the Joy of Giving and bring smiles and happiness to the lives of others. The Yoga Institute’s gifting initiative enables you to support the ones you love with the gift of wisdom, a new career, or the invaluable gift of health and wellness. To uplift and cheer your loved ones, choose from a variety of courses, camps, books, and other options. Gift now!'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonBanner
