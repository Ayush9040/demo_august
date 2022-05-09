import React from 'react'
import SeminarCard from '../SeminarCard'
import './style.scss'
import SeminarImg from '../../assets/images/seminar.png'
import { share } from '../../assets/icons/icon'

const MediaSection = ({
  subHeading,
  sectionColor,
  invert = false,
  upcomingEvents = true,
  description,
  title,
}) => {
  return (
    <div className="common-media-section">
      <div
        className={!invert ? 'media-content' : 'media-content inverted'}
        style={{ background: `${sectionColor}` }}
        id="seminar"
      >
        <div className="newsletter-content">
          <h2>
            <span className="newsletter-title">{title ? title : 'Title'}</span>
            <span className="newsletter-date">00/00/00</span>
          </h2>
          <p>
            {description
              ? description
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante id nunc vehicula pharetra necvitae est. Sed diam dui, luctus sed velit quis,placerat consequat felis. Vivamus cursus in mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus, et dignissim ligula cursus ut.'}
          </p>
          <div className="options">
            <button>View Story</button>
            <div className="share-icon">{share}</div>
          </div>
        </div>
        <div className="newsletter-image">
          <h3>{subHeading}</h3>
          <img className="seminar-iamge" src={SeminarImg} />
        </div>
      </div>
      {upcomingEvents && (
        <div className="upcoming-seminars">
          <h3 style={invert ? {} : { visibility: 'hidden' }}>
            Upcoming Seminars
          </h3>
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
      )}
    </div>
  )
}

export default MediaSection
