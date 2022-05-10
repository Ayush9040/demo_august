import React from 'react'
import Heading from '../../Components/Heading'
import { share } from '../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../Components/SeminarCard'
import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
const BlogPage = () => {
  return (
    <div className="main-blog">
      <CommonBannerNavPrimary innerNav={false} /> <br /> <br />
      <Heading largeText={'Blog'} />
      <div className="blog-series">
        <div className="alumni-content" id="seminar">
          <div className="newsletter-content">
            <h2>
              <span className="newsletter-title">Title</span>
              <span className="newsletter-date">01/01/2022</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec ante id nunc vehicula pharetra nec vitae est. Sed diam dui,
              luctus sed velit quis, placerat consequat felis. Vivamus cursus in
              mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam
              eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus,
              et dignissim ligula cursus ut.
            </p>
            <div className="options">
              <button>Read Story</button>
              <div className="share-icon">{share}</div>
            </div>
          </div>
          <div className="newsletter-image">
            <img
              className="blog-image"
              alt="Upcoming Seminar"
              src={baseDomain + alumniAssets.eventsAssetsTitle}
            />
          </div>
        </div>

        <div className="upcoming-blogs">
          <h3>Other Blogs</h3>
          <div className="blog-card-container">
            <SeminarCard
              title={'Title'}
              bgImage={baseDomain + alumniAssets.eventsAssets1}
            />
            <SeminarCard
              title={'Title'}
              bgImage={baseDomain + alumniAssets.eventsAssets2}
            />
            <SeminarCard
              title={'Title'}
              bgImage={baseDomain + alumniAssets.eventsAssets3}
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default BlogPage
