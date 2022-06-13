import React, { useState } from 'react'
import AlumniGrid from '../../Components/AlumniGrid'
import CommonBannerNav1 from '../../Components/AlumniNav'
import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import InnerNavComponent from '../../Components/InnerNavComponent'

const AlumniGallery = () => {
  const galleryImages = {
    2017: [
      `${baseDomain}${alumniAssets.galleryAssets1}`,
      `${baseDomain}${alumniAssets.galleryAssets2}`,
      `${baseDomain}${alumniAssets.galleryAssets3}`,
      `${baseDomain}${alumniAssets.galleryAssets4}`,
      `${baseDomain}${alumniAssets.galleryAssets5}`,
      `${baseDomain}${alumniAssets.galleryAssets6}`,
      `${baseDomain}${alumniAssets.galleryAssets7}`,
      `${baseDomain}${alumniAssets.galleryAssets8}`,
      `${baseDomain}${alumniAssets.galleryAssets9}`,
      `${baseDomain}${alumniAssets.galleryAssets10}`,
      `${baseDomain}${alumniAssets.galleryAssets11}`,
      `${baseDomain}${alumniAssets.galleryAssets12}`,
    ],
    2018: [
      `${baseDomain}${alumniAssets.galleryAssets13}`,
      `${baseDomain}${alumniAssets.galleryAssets14}`,
      `${baseDomain}${alumniAssets.galleryAssets15}`,
      `${baseDomain}${alumniAssets.galleryAssets16}`,
      `${baseDomain}${alumniAssets.galleryAssets17}`,
      `${baseDomain}${alumniAssets.galleryAssets18}`,
      `${baseDomain}${alumniAssets.galleryAssets19}`,
      `${baseDomain}${alumniAssets.galleryAssets20}`,
      `${baseDomain}${alumniAssets.galleryAssets21}`,
      `${baseDomain}${alumniAssets.galleryAssets22}`,
      `${baseDomain}${alumniAssets.galleryAssets23}`,
      `${baseDomain}${alumniAssets.galleryAssets24}`,
    ],
    2019: [
      `${baseDomain}${alumniAssets.galleryAssets25}`,
      `${baseDomain}${alumniAssets.galleryAssets26}`,
      `${baseDomain}${alumniAssets.galleryAssets27}`,
      `${baseDomain}${alumniAssets.galleryAssets28}`,
      `${baseDomain}${alumniAssets.galleryAssets29}`,
      `${baseDomain}${alumniAssets.galleryAssets30}`,
      `${baseDomain}${alumniAssets.galleryAssets31}`,
      `${baseDomain}${alumniAssets.galleryAssets32}`,
      `${baseDomain}${alumniAssets.galleryAssets33}`,
      `${baseDomain}${alumniAssets.galleryAssets34}`,
      `${baseDomain}${alumniAssets.galleryAssets35}`,
      `${baseDomain}${alumniAssets.galleryAssets36}`,
    ],
    2020: [
      `${baseDomain}${alumniAssets.galleryAssets37}`,
      `${baseDomain}${alumniAssets.galleryAssets38}`,
      `${baseDomain}${alumniAssets.galleryAssets39}`,
      `${baseDomain}${alumniAssets.galleryAssets40}`,
      `${baseDomain}${alumniAssets.galleryAssets41}`,
      `${baseDomain}${alumniAssets.galleryAssets42}`,
      `${baseDomain}${alumniAssets.galleryAssets43}`,
      `${baseDomain}${alumniAssets.galleryAssets44}`,
      `${baseDomain}${alumniAssets.galleryAssets45}`,
      `${baseDomain}${alumniAssets.galleryAssets46}`,
      `${baseDomain}${alumniAssets.galleryAssets47}`,
      `${baseDomain}${alumniAssets.galleryAssets48}`,
    ],
    2021: [
      `${baseDomain}${alumniAssets.galleryAssets49}`,
      `${baseDomain}${alumniAssets.galleryAssets50}`,
      `${baseDomain}${alumniAssets.galleryAssets51}`,
      `${baseDomain}${alumniAssets.galleryAssets52}`,
      `${baseDomain}${alumniAssets.galleryAssets53}`,
      `${baseDomain}${alumniAssets.galleryAssets54}`,
      `${baseDomain}${alumniAssets.galleryAssets55}`,
      `${baseDomain}${alumniAssets.galleryAssets56}`,
      `${baseDomain}${alumniAssets.galleryAssets57}`,
      `${baseDomain}${alumniAssets.galleryAssets58}`,
      `${baseDomain}${alumniAssets.galleryAssets59}`,
      `${baseDomain}${alumniAssets.galleryAssets60}`,
    ],
    2022: [
      `${baseDomain}${alumniAssets.galleryAssets61}`,
      `${baseDomain}${alumniAssets.galleryAssets62}`,
      `${baseDomain}${alumniAssets.galleryAssets63}`,
      `${baseDomain}${alumniAssets.galleryAssets64}`,
      `${baseDomain}${alumniAssets.galleryAssets65}`,
      `${baseDomain}${alumniAssets.galleryAssets66}`,
      `${baseDomain}${alumniAssets.galleryAssets67}`,
      `${baseDomain}${alumniAssets.galleryAssets68}`,
      `${baseDomain}${alumniAssets.galleryAssets69}`,
      `${baseDomain}${alumniAssets.galleryAssets70}`,
      `${baseDomain}${alumniAssets.galleryAssets71}`,
      `${baseDomain}${alumniAssets.galleryAssets72}`,
    ],
  }

  const [bold, setBold] = useState(1)
  const alumgalleryImgs = [
    `${baseDomain}${alumniAssets.alumniDayAssets1}`,
    `${baseDomain}${alumniAssets.alumniDayAssets2}`,
    `${baseDomain}${alumniAssets.alumniDayAssets3}`,
    `${baseDomain}${alumniAssets.alumniDayAssets4}`,
    `${baseDomain}${alumniAssets.alumniDayAssets5}`,
  ]
  const AlumniGalleryBar = {
    title: 'alumni-gallery',
    color: 'orange',
    menuColor: 'black',
    menuItems: [
      {
        innerTitle: 'alumni-events',
        url: '/alumni',
        name: 'Upcoming Events',
      },
      {
        innerTitle: 'alumni-gallery',
        url: '/alumni/alumni-gallery',
        name: 'Alumni Gallery',
      },
      {
        innerTitle: 'alma-master',
        url: '/alumni/support',
        name: 'Support Your Alma Master',
      },
      {
        innerTitle:'alumni-contact',
        url:'/#footer',
        name:'Contact'
      }
    ],
  }
  return (
    <div className="contact-container">
      {/* <CommonBannerNav1 title={'AlumniGallery'} /> */}
      <InnerNavComponent abc={AlumniGalleryBar}/>
      <AlumniGrid images={alumgalleryImgs} notEvent={false} />
      <div className="contact-tiles">
        <div className="tiles-container">
          <div
            className="year-nav"
            style={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}
          >
            <h4>
              <span style={{ fontWeight: 'bold', border: 'none' }}>
                Batch Year:
              </span>
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
