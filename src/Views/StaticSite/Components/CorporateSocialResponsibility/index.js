import React from 'react'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import CommonBanner from '../../Components/Common-banner'
import './style.scss'

const CorporateSocialResponsibilty = () => {
  return (
    <div className="csr-main-div">
      <CommonBanner
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType="privacy"
        Heading="Corporate Social Responsibilty"
        description="For over many decades, The Yoga Institute has been conducting CSR initiatives on behalf of corporations and organizations who are looking to make a difference in their society and the people who are in need of it. If you are an organization looking to make an impact, please consider associating with us for the same. We are mindful to keep administrative and other organizational costs low so that a major chunk of your resources is well utilized for those who are actually in need. Our uniqueness we utilize maximum resources for maximum welfare and benefit of humanity. We focus on the Sustainable Development Goals specified by the United Nations’ General Assembly."
        // bannerImg={`${baseDomain}${background.volunteer}`}
        overlay="#E38F73"
      />
      <div className="csr-main-section">
        <div className="main-top-section">
          Our Objective
          <div className="bottom-line"></div>
        </div>
        <div className="csr-svg-section">
          <div className="svg-one">
            <img src="" />
            <p>Zero Hunger</p>
          </div>
          <div className="svg-one">
            <img src="" />
            <p>Good health and well-being</p>
          </div>
          <div className="svg-one">
            <img src="" />
            <p>Responsible consumption and production</p>
          </div>
          <div className="svg-one">
            <img src="" />
            <p>Peace, justice and strong institutions</p>
          </div>
        </div>
        <div className="csr-mid-last">
          <p>
            The Yoga Institute has been working selflessly for people all around
            the world in accor- dance with the Founder&apos;s values. We conduct
            CSR programs where a large number of volunteers and sadhakas from
            the global landscape come together for social activities. We are in
            collaboration with several non-profit organizations to create
            impact.
          </p>
          <p>Please get in touch with us so we can help you meet your goals.</p>
        </div>
      </div>
      <div className="last-container">
        <div className="content-container-section">
          <div className="image-container">
            <img src={`${baseDomain}${homeAssets.homeAsset10}`} />
          </div>
          <div className="description-content">
            <div className="header">
              <div className="header-title">
                <h1>Trees plantation drive</h1>
                <div className="bottom-line"></div>
              </div>
              <div className="header-btn">
                <button>Support Us</button>
              </div>
            </div>
            <div className="description">
              We are aware of the immediate need to protect our environment.
              Campaigns are conducted throughout the year for public aware- ness
              and multiple initiatives are undertaken to plant more trees and to
              expand the green cover. Through these efforts, we raise awareness
              locally and work to preserve our environment for gen- erations to
              come.
            </div>
            <div className="last-btn">
              <span className="btn-div">
                <button>View Story</button>
              </span>
            </div>
          </div>
        </div>
        <div className="content-container-section">
          <div className="image-container">
            <img src={`${baseDomain}${homeAssets.homeAsset10}`} />
          </div>
          <div className="description-content">
            <div className="header">
              <div className="header-title">
                <h1>Anna Bhramam</h1>
                <div className="bottom-line"></div>
              </div>
              <div className="header-btn">
                <button>Support Us</button>
              </div>
            </div>
            <div className="description">
              Hunger still remains a fact of life for many people in our country
              and around the world despite unprecedented economic growth. Even
              in Mumbai, the maximum city and the financial capital of the
              country there are many who cannot afford two-square meals a day or
              the food they eat hardly has any nutritious value. We de- cided to
              change this. To work against the scourge of Hunger, The Yoga
              Institute launched the Annam Brahma initiative in 2018.
            </div>
            <div className="last-btn">
              <span className="btn-div">
                <button>View Story</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateSocialResponsibilty
