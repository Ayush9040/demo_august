import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const SectionComponent = ({
  page = 'Donation',
  image = '',
  title = 'Annam Brahma',
  description = 'Annam Brahma, since 2018, has served more than 25, 00,000 meals, working 365 days a year.  We serve pure, satvik, hygienic meals twice a day. Many of those who share the joy of food with us do not have access to healthy food even once a day.  Annam Brahma strives to serve with the gift of healthy, nutritious meals all through the year and our aim is to serve ____________ meals a year, all across the city by ____________.',
  url,
  sectionId
}) => {
  return (
    <div id={`${sectionId}`} >
      <div className="content-container pd-career">
        <div className="image-content">
          <img src={image} />
        </div>
        <div className="text-content-right right-container">
          <div className="text-part">
            <div className="banner-heading">
              <h1>
                {title}
                <div className="bottom-line"></div>
              </h1>
            </div>
            <p>{description}</p>
          </div>
          {page === 'Donation' ? (
            <Link to={url ? url:''}>
              <button className="donate-button-new">Donate</button>
            </Link>
          ) : (
            <button className="donate-button-new">Gift Now</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionComponent
