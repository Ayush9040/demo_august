import React from 'react'
import './style.scss'
import Heading from '../Heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import baseDomain,{ museumAssets } from '../../assets/images/imageAsset'

const CommonGrid = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    autoplay: true,
    autoPlaySpeed: 5000,
  }
  return (
    <>
      <div className="gallery-container">
        <div className="museum-heading global-padding">
          <Heading largeText={'Gallery'} />
          
        </div>
        <div className="museum-text">
          <p>
            Get a closer look at The Yoga Institute’s beautiful campus, the
            greenery, the peaceful atmosphere and the powerful vibrations that
            instantly bring about tranquility and stillness. You can also see
            glimpses of our events, sessions, and classes over here.
          </p>
        </div>
        <Slider {...settings}>
        
          <div className="common-gallery">
            <div className="common-gallery-grid">
              <div className="common-grid-1">
                <img src={`${baseDomain}${museumAssets.meseumAssets5}`} alt="yagna" className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  {' '}
                  <img src={`${baseDomain}${museumAssets.meseumAssets1}`} alt='russian-scientist'/>
                </div>
                <div className="sub-grid-2">
                  {' '}
                  <img src={`${baseDomain}${museumAssets.meseumAssets3}`} alt='chappa' />
                </div>
              </div>
              <div className="common-grid-1">
                <img src={`${baseDomain}${museumAssets.meseumAssets4}`} alt='pooja-plate' className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={`${baseDomain}${museumAssets.meseumAssets2}`} alt='granth' />
                </div>
                <div className="sub-grid-2">
                  <img src={`${baseDomain}${museumAssets.meseumAssets6}`} alt='tree-bark'/>
                </div>
              </div>
            </div>
          </div>

          <div className="common-gallery">
            <div className="common-gallery-grid">
              <div className="common-grid-1">
                <img src={`${baseDomain}${museumAssets.meseumAssets7}`} className="img-main" alt='shaleegrama' />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={`${baseDomain}${museumAssets.meseumAssets8}`} alt='kartal' />
                </div>
                <div className="sub-grid-2">
                  <img src={`${baseDomain}${museumAssets.meseumAssets9}`}alt='khanjani' />
                </div>
              </div>
              <div className="common-grid-1">
                <img src={`${baseDomain}${museumAssets.meseumAssets10}`} alt='sankha' className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={`${baseDomain}${museumAssets.meseumAssets11}`} alt='havan-kund'/>
                </div>
                <div className="sub-grid-2">
                  <img src={`${baseDomain}${museumAssets.meseumAssets12}`}  alt='shiva-linga'/>
                </div>
              </div>
            </div>
          </div>

          <div className="common-gallery">
            <div className="common-gallery-grid">
              <div className="common-grid-1">
                <img src={`${baseDomain}${museumAssets.meseumAssets13}`} className="img-main" alt='rudraksha' />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={`${baseDomain}${museumAssets.meseumAssets14}`}  alt='karnal-mala'/>
                </div>
                <div className="sub-grid-2">
                  <img src={`${baseDomain}${museumAssets.meseumAssets15}`} alt='karnal-mala2' />
                </div>
              </div>
              <div className="common-grid-1">
                <img src={`${baseDomain}${museumAssets.meseumAssets16}`} alt='namavali-jholi' className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={`${baseDomain}${museumAssets.meseumAssets17}`} alt='rudraksha-mala'/>
                </div>
                <div className="sub-grid-2">
                  <img src={`${baseDomain}${museumAssets.meseumAssets18}`} alt='yantras' />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default CommonGrid
