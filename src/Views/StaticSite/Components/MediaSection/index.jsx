import React from 'react'
import SeminarCard from '../SeminarCard'
import './style.scss'
//import { share } from '../../assets/icons/icon'
import baseDomain, {
  mediaAssets,
  alumniAssets,
} from '../../assets/images/imageAsset'
//import { setViewCarousel,setViewCarousel } from '../home/nex-g/Desktop/tyi-user-webapp/src/Views/StaticSite/Views/Media/index.jsx'

const MediaSection = ({
  subHeading,
  sectionColor,
  invert = false,
  upcomingEvents = true,
  description,
  title,
  setViewCarousel,
  setModalData,
  itemImages,
  itemId,
  
  // image,
}) => {
  return (
    <div className="common-media-section">
      <div
        className={`${!invert ? 'media-content' : 'media-content inverted'} ${title == 'Events' && 'media-content-events'}`}
        style={{ background: `${sectionColor}` }}
        id="seminar"
      >
        <div className="newsletter-content">
          <h2>
            <div className="newsletter-title">{title ? title : 'Title'}</div>
            <div className="newsletter-date">01/01/2022</div>
          </h2>
          <p>
            {description
              ? description
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante id nunc vehicula pharetra necvitae est. Sed diam dui, luctus sed velit quis,placerat consequat felis. Vivamus cursus in mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus, et dignissim ligula cursus ut.'}
          </p>
          <div className="options">
            <button onClick={()=>{
              setViewCarousel && setViewCarousel(itemId)
              setModalData && setModalData(itemImages?.map(number=>({ src:number })))
            }} >View Album</button>
            {/* <div className="share-icon">{share}</div> */}
          </div>
        </div>
        <div className="newsletter-image">
          <h3 className={`${title == 'Events' && 'event-h3'}`}>{subHeading}</h3>
          <img
            className={`${title == 'Events' && 'event-img'} 'seminar-iamge'`}
            src={`${baseDomain}${mediaAssets.igCeremony}`}
            alt={title}
          />
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
              bgImage={`${baseDomain}${alumniAssets.eventsAssets1}`}
            />
            <SeminarCard
              title={'Pregnancy Camp'}
              bgImage={`${baseDomain}${alumniAssets.eventsAssets2}`}
            />
            <SeminarCard
              title={'Regular Asana Class'}
              bgImage={`${baseDomain}${alumniAssets.eventsAssets3}`}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MediaSection
