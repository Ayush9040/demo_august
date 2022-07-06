import React, { useEffect } from 'react'
// import CommonBannerNav1 from '../../Components/AlumniNav'
import { share } from '../../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../../Components/SeminarCard'
import baseDomain, { alumniAssets } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
const Seminar = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AlumniBar = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [
      // {
      //   innerTitle: 'alumni-events',
      //   url: '/alumni/upcoming-events',
      //   name: 'Upcoming Events',
      // },
      {
        innerTitle: 'alumni-gallery',
        url: '/alumni/alumni-gallery',
        name: 'Alumni Gallery',
      },
      {
        innerTitle: 'alma-mater',
        url: '/alumni/support',
        name: 'Support Your Alma Mater',
      },
      {
        innerTitle:'alumni-contact',
        url:'/#footer',
        name:'Contact'
      }
    ],
  }
  return (
    <div className="seminar-series">
      {/* <CommonBannerNav1 title={'Seminar'} /> */}
      <InnerNavComponent abc={AlumniBar}/>
      <div className="alumni-content" id="seminar">
        <div className="newsletter-content">
          <h2>
            <span className="newsletter-title">Know our Family / Our Alumni</span>
            <span className="newsletter-date">02/07/22</span>
          </h2>
          <p>
          The Yoga Institute has been at the forefront of spreading Yoga around the world. Our mission has connected us to more than 1 lakh+ students who are now part of the family at the Yoga Institute. Our students come from all walks of life and most often continue to share the essence of our teachings in Yoga and the Yogic way of life long after the official completion of their courses. We are proud to say that many of our alumni find a sense of belonging and an immovable belief in our work that compels them to actively collaborate with us in all our endeavours.
          </p>
          <div className="options">
            <button>View Story</button>
            <div className="share-icon">{share}</div>
          </div>
        </div>
        <div className="newsletter-image">
          <img
            className="seminar-iamge"
            alt="Upcoming Seminar"
            src={`${baseDomain}${alumniAssets.eventsAssetsTitle}`}
          />
        </div>
      </div>
      <div className="upcoming-seminars">
        <h3>Upcoming Events</h3>
        <div className="seminars-card-container">
          <SeminarCard
            title={'500 hrs TTC'}
            bgImage={`${baseDomain}${alumniAssets.eventsAssets1}`}
            btnText={'View Details'}
          />
          <SeminarCard
            title={'Pregnancy Camp'}
            bgImage={`${baseDomain}${alumniAssets.eventsAssets2}`}
            btnText={'View Details'}
          />
          <SeminarCard
            title={'Regular Asana Class'}
            bgImage={`${baseDomain}${alumniAssets.eventsAssets3}`}
            btnText={'View Details'}
          />
        </div>
      </div>
    </div>
  )
}

export default Seminar
