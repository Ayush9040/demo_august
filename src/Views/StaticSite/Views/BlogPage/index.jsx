import React from 'react'
import Heading from '../../Components/Heading'
import { share } from '../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../Components/SeminarCard'
import baseDomain, { alumniAssets, homeAssets } from '../../assets/images/imageAsset'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import { Link } from 'react-router-dom'
const BlogPage = () => {
  return (
    <div className="main-blog">
      <CommonBannerNavPrimary innerNav={false} /> <br /> <br />
      <Heading largeText={'Blog'} />
      <div className="blog-series">
        <div className="alumni-content" id="seminar">
          <div className="newsletter-content">
            <h2>
              <span className="newsletter-title">7 home remedies for anaemia</span>
              <span className="newsletter-date">01/01/2022</span>
            </h2>
            <p>
            If you want to get your anaemia under control, do give these amazing and effective home remedies a try!
            If you want to get your anaemia under control, do give these amazing and effective home remedies a try!
            If you want to get your anaemia under control, do give these amazing and effective home remedies a try!

            </p>
            <div className="options">
              <Link to="/blogs/blog-name">
                <button>Read Story</button>
              </Link>
              <div className="share-icon">{share}</div>
            </div>
          </div>
          <div className="newsletter-image">
            <img
              className="blog-image"
              alt="Upcoming Seminar"
              src={baseDomain + homeAssets.homeAsset60}
            />
          </div>
        </div>

        <div className="upcoming-blogs">
          <h3>Other Blogs</h3>
          <div className="blog-card-container">
            <SeminarCard
              title={'7 home remidies for Anaemia'}
              bgImage={baseDomain + homeAssets.homeAsset60}
              desc={'If you want to get your anaemia under control, do give these amazing and effective home remedies a try!'}
            />
            <SeminarCard
              title={'How to increase lung capacity'}
              bgImage={baseDomain + homeAssets.homeAsset62}
              desc={'The lungs are our givers of life. To increase their capacity, here’s what you can do!'}
            />
            <SeminarCard
              title={'Yoga for back pain'}
              bgImage={baseDomain + homeAssets.homeAsset63}
              desc={'Want to relieve your back troubles? You can do it in no time with these amazing yoga poses!'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
