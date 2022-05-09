import React from 'react'
import SeminarImg from '../../assets/images/seminar.png'
import CommonBannerNav1 from '../../Components/AlumniNav'
import { share } from '../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../Components/SeminarCard'

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
          <p>
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
            src={SeminarImg}
          />
        </div>
      </div>
      <div className="upcoming-seminars">
        <h3>Upcoming Seminars</h3>
        <div className="seminars-card-container">
          <SeminarCard
            title={'500 hrs TTC'}
            bgImage={require('../../assets/images/upcoming-event-1.jpg')}
          />
          <SeminarCard
            title={'Pregnancy Camp'}
            bgImage={require('../../assets/images/upcoming-event-2.jpg')}
          />
          <SeminarCard
            title={'Regular Asana Class'}
            bgImage={require('../../assets/images/upcoming-event-3.jpg')}
          />
        </div>
      </div>
    </div>
  )
}

export default Seminar
