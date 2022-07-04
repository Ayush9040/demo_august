import React from 'react'
import Heading from '../Heading'
import { newsletter } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import './style.scss'
import { Link } from 'react-router-dom'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'

const NewsLetter = () => {
  return (
    <div className="newsletter-container global-padding">
      <div className="magezines">
        <div className="images">
          <div className="image">
            <Link to="/publication/yogasattva">
              <img src={`${baseDomain}${homeAssets.homeAsset67}`} />
            </Link>
            <br />
            <br />
            <p>January 2022</p>
          </div>
          <div className="image">
            <Link to="/publication/yogasattva">
              <img src={`${baseDomain}${homeAssets.homeAsset68}`} />
            </Link>
            <br />
            <br />
            <p>Feburary 2022</p>
          </div>
          <div className="image">
            <Link to="/publication/yogasattva">
              <img src={`${baseDomain}${homeAssets.homeAsset69}`} />
            </Link>
            <br />
            <br />
            <p>March 2022</p>
          </div>
        </div>
        <div className="description">
          <p>
            Yoga Sattva is The Yoga Institute’s FREE official newsletter aimed
            at spreading yoga philosophy to mankind. It has scholarly articles
            by Dr Jayadeva and Smt. Hansaji.
          </p>
          <Link to="/publication/yogasattva">
            <CommonBtn text={'Explore More'} />
          </Link>
        </div>
      </div>
      <div className="subscription">
        <Heading
          logo={newsletter}
          smallText={'Subscribe To Our'}
          largeText={'Newsletter'}
        />
        <div className="subscription-form">
          <input type={'email'} placeholder="Enter Your Email Id" />
        </div>
        <Link to="">
          <CommonBtn text={'Subscribe Now'} />
        </Link>
      </div>
    </div>
  )
}

export default NewsLetter
