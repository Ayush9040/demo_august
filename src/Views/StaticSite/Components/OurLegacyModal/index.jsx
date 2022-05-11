import React, { useState } from 'react'
import CommonBannerNavAboutUs from '../CommonBannerNavAboutUs'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import GridComponent from '../GridComponent'
import './style.scss'

const OurLegacyModal = ({ data }) => {


  const [activeFouderTile, setActiveFouderTile] = useState(0)

  const founderData = {}

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
                  <p>Founder</p>
                  <br />
                  1897 - 1989
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
              {/* <p>
          Shri Yogendra Ji published the world’s first yoga journal. He pioneered the use of yoga for therapeutic purposes. His concept of breath and movement co-ordination has impacted millions. He has written many authoritative texts on yoga based on his experience, research work and ancient scriptures. Some of his books are preserved in the Crypt of Civilization for posterity; they are to be opened after 6000 years. His one thought of starting The Yoga Institute has contributed to the growth of yoga, as well as peace, harmony, wellbeing, and positivity, across nations.
          </p>
          <p>
          Millions of lives have been touched and benefitted from this purity of vision. Generations later, the torch of yoga lit by Shri Yogendraji continues to illuminate the path of humanity. The legacy continues…
          </p> */}
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
