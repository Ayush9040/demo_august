import React from 'react'
import Heading from '../Heading'
import { legacy, filler } from '../../assets/icons/icon'
import baseDomain,{ homeAssets } from '../../assets/images/imageAsset'
import './style.scss'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'

const Legacy = () => {

  return (
    <>
      <div className="legacy-container global-padding">
        <Heading
          logo={legacy}
          smallText={'World’s Oldest'}
          largeText={'Yoga Institute'}
        />
       
        <div className="legacy-text">
          <p>
            {`The Yoga Institute, world's first yoga center, was established in
            1918 by the legendary yogi Shri Yogendra Ji also known as the father
            of the modern yoga Renaissance. Our life-changing courses have
            transformed millions of lives and created more than 100000+ teachers
            worldwide. We provide modern-day solutions to all life situations
            and physical & mental ailments. The Institute has won the
            prestigious prime minister's award for its outstanding service to
            the science of yoga.`}
          </p>
        </div>
        <div className="photo-container global-top-margin">
          <div className="legacy-card">
            <img src={`${baseDomain}${homeAssets.homeAsset1}`}/>
            <div className="legacy-card-content">
              <h4>Paramhamsa Madhavdasji</h4>
              <h5>Founder&apos;s Guru</h5>
              <h6>1798-1921</h6>
            </div>
          </div>
          <div className="legacy-card">
            <img src={`${baseDomain}${homeAssets.homeAsset2}`} />
            <div className="legacy-card-content">
              <h4>Shri Yogendra ji</h4>
              <h5>Founder</h5>
              <h6>1897 - 1989</h6>
            </div>
          </div>
          <div className="legacy-card">
            <img src={`${baseDomain}${homeAssets.homeAsset3}`} />
            <div className="legacy-card-content">
              <h4>Smt. Sitadevi Yogendra</h4>
              <h5>Mother</h5>
              <h6>1912 - 2008</h6>
            </div>
          </div>
          <div className="legacy-card">
            <img src={`${baseDomain}${homeAssets.homeAsset4}`} />
            <div className="legacy-card-content">
              <h4>Dr. Jayadeva Yogendra</h4>
              <h5>President</h5>
              <h6>1929 - 2018</h6>
            </div>
          </div>
          <div className="legacy-card">
            <img src={`${baseDomain}${homeAssets.homeAsset5}`} />
            <div className="legacy-card-content">
              <h4>Smt. Hansaji J Yogendra</h4>
              <h5>Director</h5>
              <h6>1947</h6>
            </div>
          </div>
          <div className="legacy-card">
            <img src={`${baseDomain}${homeAssets.homeAsset6}`} />
            <div className="legacy-card-content">
              <h4>Shri Hrishi J Yogendra</h4>
              <h5>Assistant Director</h5>
              <h6>1988</h6>
            </div>
          </div>
        </div>
        <div className="filler-logo">{filler}</div>
        <div className="know-our-legacy-button">
          <Link to="/our-legacy">
            <CommonBtn text="Know Our Legacy" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Legacy
