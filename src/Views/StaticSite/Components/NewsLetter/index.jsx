import React from 'react'
import Heading from '../Heading'
import { newsletter } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import './style.scss'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className="newsletter-container global-padding">
      <div className="magezines">
        <div className="images">
          <div className="image">
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/NewsLetter/Yogasattva-jan.jpg' />
            <br />
            <br />
            <p>January 2022</p>
          </div>
          <div className="image">
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/NewsLetter/Yogasattva-Feb.jpg' />
            <br />
            <br />
            <p>Feburary 2022</p>
          </div>
          <div className="image">
            <img src='http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/NewsLetter/Yogasattva-March.jpg' />
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
        <Link to="/publication/yogasattva">
          <CommonBtn text={'Subscribe Now'} />
        </Link>
      </div>
    </div>
  )
}

export default NewsLetter
