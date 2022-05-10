import React from 'react'
import CommonBannerNav1 from '../../Components/AlumniNav'
import { share } from '../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../Components/SeminarCard'
import baseDomain,{ alumniAssets } from '../../assets/images/imageAsset'
const Seminar = () => {
  return (
    <div className="seminar-series">
      <CommonBannerNav1 title={'Seminar'} />
      <div className="alumni-content" id="seminar">
        <div className="newsletter-content">
          <h2>
            <span className="newsletter-title">Title</span>
            <span className="newsletter-date">00/00/00</span>
          </h2>
          <p style={{ color:'black' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            ante id nunc vehicula pharetra nec vitae est. Sed diam dui, luctus
            sed velit quis, placerat consequat felis. Vivamus cursus in mauris
            at dignissim. Etiam venenatis semper pharetra. Duis ut diam eros. In
            hac habitasse platea dictumst. Nam tincidunt nisi metus, et
            dignissim ligula cursus ut.
          </p>
          <div className="options">
            <button>View Story</button>
            <div className="share-icon">{share}</div>
          </div>
        </div>
        <div className="newsletter-image">
          <h3>Upcoming Seminars</h3>
          <img
            className="seminar-iamge"
            alt="Upcoming Seminar"
            src={baseDomain + alumniAssets.eventsAssetsTitle}
          />
        </div>
      </div>
      <div className="upcoming-seminars">
        <h3>Upcoming Seminars</h3>
        <div className="seminars-card-container">
          <SeminarCard
            title={'500 hrs TTC'}
            bgImage={baseDomain + alumniAssets.eventsAssets1}
          />
          <SeminarCard
            title={'Pregnancy Camp'}
            bgImage={baseDomain + alumniAssets.eventsAssets2}
          />
          <SeminarCard
            title={'Regular Asana Class'}
            bgImage={baseDomain + alumniAssets.eventsAssets3}
          />
        </div>
      </div>
    </div>
  )
}

export default Seminar
