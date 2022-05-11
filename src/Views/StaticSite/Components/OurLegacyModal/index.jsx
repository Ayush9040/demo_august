import React from 'react'

import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import GridComponent from '../GridComponent'
import './style.scss'

const OurLegacyModal = ({ data }) => {



  return (
    <>
      <CommonBannerNavPrimary />
      <div className="our-legacy-modal">
        <div className="about-details-container">
          <div className="detail-main-image">
            <img src={data.leftImg} alt="" />
          </div>
          <div className="detail-text">
            <div className="detail-top-text">
              <div className="detail-container-top">
                <div className="name-left">
                  {data.name}
                  <div className="bottom-line"></div>
                </div>
                <div className="position-right">
                  <p>{data.founder}</p>
                  <br />
                  {data.year}
                </div>
              </div>
              <p>{data.desc[0]}</p>
              <p>{data.desc[1]}</p>
            </div>
          </div>
        </div>

        <div className="about-details-container2">
          <div className="detail-text">
            <div className="detail-top-text">
              <p>{data.desc[2]}</p>
              <p>{data.desc[3]}</p>
            </div>
          </div>
          <div className="detail-main-image">
            <img src={data.rightImg} alt="" />
          </div>
        </div>
        <GridComponent imgs={data.gallery} />
      </div>
    </>
  )
}

export default OurLegacyModal
