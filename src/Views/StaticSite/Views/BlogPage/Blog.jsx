import React from 'react'
import CommonBannerNav from '../../Components/CommonBannerNav'
import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import './style.scss'
import Heading from '../../Components/Heading'
import BlogGallery from './BlogGallery'
const Blog = () => {
  return (
    <>
      <div className="blog-page-container">
        <br />
        <CommonBannerNav />
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
                luctus sed velit quis, placerat consequat felis. Vivamus cursus
                in mauris at dignissim. Etiam venenatis semper pharetra. Duis ut
                diam eros. In hac habitasse platea dictumst. Nam tincidunt nisi
                metus, et dignissim ligula cursus ut.
              </p>
            </div>
            <div className="newsletter-image">
              <img
                className="blog-iamge"
                alt="Upcoming Seminar"
                src={baseDomain + alumniAssets.eventsAssetsTitle}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          <div className="blog-image">
            <img src={baseDomain + alumniAssets.eventsAssetsTitle} alt="" />
          </div>
          <div className="blog-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec ante id nunc vehicula pharetra nec vitae est. Sed diam dui,
              luctus sed velit quis, placerat consequat felis. Vivamus cursus in
              mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam
              eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus,
              et dignissim ligula cursus ut.
            </p> <br />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec ante id nunc vehicula pharetra nec vitae est. Sed diam dui,
              luctus sed velit quis, placerat consequat felis. Vivamus cursus in
              mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam
              eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus,
              et dignissim ligula cursus ut.
            </p>
          </div>
        </div>
      </div>
      <BlogGallery/>
    </>
  )
}

export default Blog
