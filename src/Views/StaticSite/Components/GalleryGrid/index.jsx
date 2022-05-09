import React from 'react'
import './style.scss'
import Heading from '../Heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import m1 from '../../assets/images/m_1.jpg'
import m2 from '../../assets/images/m_2.jpg'
import m3 from '../../assets/images/m_3.jpg'
import m4 from '../../assets/images/m_4.jpg'
import m5 from '../../assets/images/m_5.jpg'
import m6 from '../../assets/images/m_6.jpg'
import m7 from '../../assets/images/m_7.jpg'
import m8 from '../../assets/images/m_8.jpg'
import m9 from '../../assets/images/m_9.jpg'
import m10 from '../../assets/images/m_10.jpg'
import m11 from '../../assets/images/m_11.jpg'
import m12 from '../../assets/images/m_12.jpg'
import m13 from '../../assets/images/m_13.jpg'
import m14 from '../../assets/images/m_14.jpg'
import m15 from '../../assets/images/m_15.jpg'
import m16 from '../../assets/images/m_16.jpg'
import m17 from '../../assets/images/m_17.jpg'
import m18 from '../../assets/images/m_18.jpg'
const CommonGrid = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
  }
  const numberofSlides = [1, 2, 3]
  return (
    <>
      <div className="gallery-container">
        <div className="museum-heading global-padding">
          <Heading largeText={'Gallery'} />
          <br />
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
          {/* {numberofSlides.map(() => {
            return ( */}
          <div className="common-gallery">
            <div className="common-gallery-grid">
              <div className="common-grid-1">
                <img src={m1} alt="" className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  {' '}
                  <img src={m2} />
                </div>
                <div className="sub-grid-2">
                  {' '}
                  <img src={m3} />
                </div>
              </div>
              <div className="common-grid-1">
                <img src={m4} className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={m5} />
                </div>
                <div className="sub-grid-2">
                  <img src={m6} />
                </div>
              </div>
            </div>
          </div>

          <div className="common-gallery">
            <div className="common-gallery-grid">
              <div className="common-grid-1">
                <img src={m7} className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={m8} />
                </div>
                <div className="sub-grid-2">
                  <img src={m9} />
                </div>
              </div>
              <div className="common-grid-1">
                <img src={m10} className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={m11} />
                </div>
                <div className="sub-grid-2">
                  <img src={m12} />
                </div>
              </div>
            </div>
          </div>

          <div className="common-gallery">
            <div className="common-gallery-grid">
              <div className="common-grid-1">
                <img src={m13} className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={m14} />
                </div>
                <div className="sub-grid-2">
                  <img src={m15} />
                </div>
              </div>
              <div className="common-grid-1">
                <img src={m16} className="img-main" />
              </div>
              <div className="common-grid-2">
                <div className="sub-grid-1">
                  <img src={m17} />
                </div>
                <div className="sub-grid-2">
                  <img src={m18} />
                </div>
              </div>
            </div>
          </div>

          {/* )
          })} */}
        </Slider>
      </div>
    </>
  )
}

export default CommonGrid
