import React, { useState } from 'react'
import AlumniGrid from '../../Components/AlumniGrid'
import CommonBannerNav1 from '../../Components/AlumniNav'

// gallery-images
// 2017

import alumnigallery1 from '../../assets/images/alumni/gallery/2017/2017-1.jpg'
import alumnigallery2 from '../../assets/images/alumni/gallery/2017/2017-2.jpg'
import alumnigallery3 from '../../assets/images/alumni/gallery/2017/2017-3.jpg'
import alumnigallery4 from '../../assets/images/alumni/gallery/2017/2017-4.jpg'
import alumnigallery5 from '../../assets/images/alumni/gallery/2017/2017-5.jpg'
import alumnigallery6 from '../../assets/images/alumni/gallery/2017/2017-6.jpg'
import alumnigallery7 from '../../assets/images/alumni/gallery/2017/2017-7.jpg'
import alumnigallery8 from '../../assets/images/alumni/gallery/2017/2017-8.jpg'
import alumnigallery9 from '../../assets/images/alumni/gallery/2017/2017-9.jpg'
import alumnigallery10 from '../../assets/images/alumni/gallery/2017/2017-10.jpg'
import alumnigallery11 from '../../assets/images/alumni/gallery/2017/2017-11.jpg'
import alumnigallery12 from '../../assets/images/alumni/gallery/2017/2017-12.jpg'

//

// 2018
import alumnigallery13 from '../../assets/images/alumni/gallery/2018/2018-1.jpg'
import alumnigallery14 from '../../assets/images/alumni/gallery/2018/2018-2.jpg'
import alumnigallery15 from '../../assets/images/alumni/gallery/2018/2018-3.jpg'
import alumnigallery16 from '../../assets/images/alumni/gallery/2018/2018-4.jpg'
import alumnigallery17 from '../../assets/images/alumni/gallery/2018/2018-5.jpg'
import alumnigallery18 from '../../assets/images/alumni/gallery/2018/2018-6.jpg'
import alumnigallery19 from '../../assets/images/alumni/gallery/2018/2018-7.jpg'
import alumnigallery20 from '../../assets/images/alumni/gallery/2018/2018-8.jpg'
import alumnigallery21 from '../../assets/images/alumni/gallery/2018/2018-9.jpg'
import alumnigallery22 from '../../assets/images/alumni/gallery/2018/2018-10.jpg'
import alumnigallery23 from '../../assets/images/alumni/gallery/2018/2018-11.jpg'
import alumnigallery24 from '../../assets/images/alumni/gallery/2018/2018-12.jpg'

// 2019
import alumnigallery25 from '../../assets/images/alumni/gallery/2019/2019-1.jpg'
import alumnigallery26 from '../../assets/images/alumni/gallery/2019/2019-2.jpg'
import alumnigallery27 from '../../assets/images/alumni/gallery/2019/2019-3.jpg'
import alumnigallery28 from '../../assets/images/alumni/gallery/2019/2019-4.jpg'
import alumnigallery29 from '../../assets/images/alumni/gallery/2019/2019-5.jpg'
import alumnigallery30 from '../../assets/images/alumni/gallery/2019/2019-6.jpg'
import alumnigallery31 from '../../assets/images/alumni/gallery/2019/2019-7.jpg'
import alumnigallery32 from '../../assets/images/alumni/gallery/2019/2019-8.jpg'
import alumnigallery33 from '../../assets/images/alumni/gallery/2019/2019-9.jpg'
import alumnigallery34 from '../../assets/images/alumni/gallery/2019/2019-10.jpg'
import alumnigallery35 from '../../assets/images/alumni/gallery/2019/2019-11.jpg'
import alumnigallery36 from '../../assets/images/alumni/gallery/2019/2019-12.jpg'

// 2020

import alumnigallery37 from '../../assets/images/alumni/gallery/2020/2020-1.jpg'
import alumnigallery38 from '../../assets/images/alumni/gallery/2020/2020-2.jpg'
import alumnigallery39 from '../../assets/images/alumni/gallery/2020/2020-3.jpg'
import alumnigallery40 from '../../assets/images/alumni/gallery/2020/2020-4.jpg'
import alumnigallery41 from '../../assets/images/alumni/gallery/2020/2020-5.jpg'
import alumnigallery42 from '../../assets/images/alumni/gallery/2020/2020-6.jpg'
import alumnigallery43 from '../../assets/images/alumni/gallery/2020/2020-7.jpg'
import alumnigallery44 from '../../assets/images/alumni/gallery/2020/2020-8.jpg'
import alumnigallery45 from '../../assets/images/alumni/gallery/2020/2020-9.jpg'
import alumnigallery46 from '../../assets/images/alumni/gallery/2020/2020-10.jpg'
import alumnigallery47 from '../../assets/images/alumni/gallery/2020/2020-11.jpg'
import alumnigallery48 from '../../assets/images/alumni/gallery/2020/2020-12.jpg'

// 2021

import alumnigallery49 from '../../assets/images/alumni/gallery/2021/2021-1.jpg'
import alumnigallery50 from '../../assets/images/alumni/gallery/2021/2021-2.jpg'
import alumnigallery51 from '../../assets/images/alumni/gallery/2021/2021-3.jpg'
import alumnigallery52 from '../../assets/images/alumni/gallery/2021/2021-4.jpg'
import alumnigallery53 from '../../assets/images/alumni/gallery/2021/2021-5.jpg'
import alumnigallery54 from '../../assets/images/alumni/gallery/2021/2021-6.jpg'
import alumnigallery55 from '../../assets/images/alumni/gallery/2021/2021-7.jpg'
import alumnigallery56 from '../../assets/images/alumni/gallery/2021/2021-8.jpg'
import alumnigallery57 from '../../assets/images/alumni/gallery/2021/2021-9.jpg'
import alumnigallery58 from '../../assets/images/alumni/gallery/2021/2021-10.jpg'
import alumnigallery59 from '../../assets/images/alumni/gallery/2021/2021-11.jpg'
import alumnigallery60 from '../../assets/images/alumni/gallery/2021/2021-12.jpg'

// 2022
import alumnigallery61 from '../../assets/images/alumni/gallery/2020/2020-1.jpg'
import alumnigallery62 from '../../assets/images/alumni/gallery/2020/2020-2.jpg'
import alumnigallery63 from '../../assets/images/alumni/gallery/2020/2020-3.jpg'
import alumnigallery64 from '../../assets/images/alumni/gallery/2020/2020-4.jpg'
import alumnigallery65 from '../../assets/images/alumni/gallery/2020/2020-5.jpg'
import alumnigallery66 from '../../assets/images/alumni/gallery/2020/2020-6.jpg'
import alumnigallery67 from '../../assets/images/alumni/gallery/2020/2020-7.jpg'
import alumnigallery68 from '../../assets/images/alumni/gallery/2020/2020-8.jpg'
import alumnigallery69 from '../../assets/images/alumni/gallery/2020/2020-9.jpg'
import alumnigallery70 from '../../assets/images/alumni/gallery/2020/2020-10.jpg'
import alumnigallery71 from '../../assets/images/alumni/gallery/2020/2020-11.jpg'
import alumnigallery72 from '../../assets/images/alumni/gallery/2020/2020-12.jpg'

const AlumniGallery = () => {
  const galleryImages = {
    2017: [
      alumnigallery1,
      alumnigallery2,
      alumnigallery3,
      alumnigallery4,
      alumnigallery5,
      alumnigallery6,
      alumnigallery7,
      alumnigallery8,
      alumnigallery9,
      alumnigallery10,
      alumnigallery11,
      alumnigallery12,
    ],
    2018: [
      alumnigallery13,
      alumnigallery14,
      alumnigallery15,
      alumnigallery16,
      alumnigallery17,
      alumnigallery18,
      alumnigallery19,
      alumnigallery20,
      alumnigallery21,
      alumnigallery22,
      alumnigallery23,
      alumnigallery24,
    ],
    2019: [
      alumnigallery25,
      alumnigallery26,
      alumnigallery27,
      alumnigallery28,
      alumnigallery29,
      alumnigallery30,
      alumnigallery31,
      alumnigallery32,
      alumnigallery33,
      alumnigallery34,
      alumnigallery35,
      alumnigallery36,
    ],
    2020: [
      alumnigallery37,
      alumnigallery38,
      alumnigallery39,
      alumnigallery40,
      alumnigallery41,
      alumnigallery42,
      alumnigallery43,
      alumnigallery44,
      alumnigallery45,
      alumnigallery46,
      alumnigallery47,
      alumnigallery48,
    ],
    2021: [
      alumnigallery49,
      alumnigallery50,
      alumnigallery51,
      alumnigallery52,
      alumnigallery53,
      alumnigallery54,
      alumnigallery55,
      alumnigallery56,
      alumnigallery57,
      alumnigallery58,
      alumnigallery59,
      alumnigallery60,
    ],
    2022: [
      alumnigallery61,
      alumnigallery62,
      alumnigallery63,
      alumnigallery64,
      alumnigallery65,
      alumnigallery66,
      alumnigallery67,
      alumnigallery68,
      alumnigallery69,
      alumnigallery70,
      alumnigallery71,
      alumnigallery72,
    ],
  }

  const [bold, setBold] = useState(1)

  return (
    <div className="contact-container">
      <CommonBannerNav1 title={'AlumniGallery'} />
      <AlumniGrid />
      <div className="contact-tiles">
        <div className="tiles-container">
          <div
            className="year-nav"
            style={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}
          >
            <h4>
              <span style={{ fontWeight: 'bold', border: 'none' }}>Batch:</span>
              &ensp;
              <span
                style={
                  bold === 1 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
                }
                onClick={() => setBold(1)}
              >
                2022
              </span>
              <span
                style={
                  bold === 2 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
                }
                onClick={() => setBold(2)}
              >
                2021
              </span>
              <span
                style={
                  bold === 3 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
                }
                onClick={() => setBold(3)}
              >
                2020
              </span>
              <span
                style={
                  bold === 4 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
                }
                onClick={() => setBold(4)}
              >
                2019
              </span>
              <span
                style={
                  bold === 5 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
                }
                onClick={() => setBold(5)}
              >
                2018
              </span>
              <span
                style={
                  bold === 6
                    ? { fontWeight: 'bold', border: 'none' }
                    : { fontWeight: 'normal', border: 'none' }
                }
                onClick={() => setBold(6)}
              >
                2017...
              </span>
            </h4>
          </div>
          <div className="tiles-grid">
            {bold === 1 ? (
              <>
                {galleryImages[2022].map((image) => (
                  <div className="tile" key={image}>
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 2 ? (
              <>
                {galleryImages[2021].map((image) => (
                  <div className="tile" key={image}>
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 3 ? (
              <>
                {galleryImages[2020].map((image) => (
                  <div className="tile" key={image}>
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 4 ? (
              <>
                {galleryImages[2019].map((image) => (
                  <div className="tile" key={image}>
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : bold === 5 ? (
              <>
                {galleryImages[2018].map((image) => (
                  <div className="tile" key={image}>
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            ) : (
              <>
                {galleryImages[2017].map((image) => (
                  <div className="tile" key={image}>
                    <img src={image} alt="root-image" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniGallery
