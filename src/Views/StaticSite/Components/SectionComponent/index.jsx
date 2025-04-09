import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const SectionComponent = ({
  page,
  image,
  title,
  description,
  url,
  sectionId,
}) => {
  return (
    <div id={`${sectionId}`}>
      <div className="content-container pd-career">
        <div className="image-content">
          <img src={image} alt={title} />
        </div>
        <div className="text-content-right right-container">
          <div className="text-part">
            <div className="banner-heading">
              <h1>
                {url ? <Link to={url}>{title}</Link> : <>{title}</>}

                {/* {title} */}
                <div className="bottom-line"></div>
              </h1>
            </div>
            <p>{description}</p>
          </div>
          {page === 'donation' ? (
            <Link to={url ? url : ''}>
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
