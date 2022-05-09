import React from 'react'
import baseDomain, { homeAssets } from '../../../assets/images/imageAsset'
import './style.scss'

const BlogCard2 = () => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={baseDomain+homeAssets.homeAsset59} />
      </div>
      <div className="blog-card-text">
        <h2>Title</h2>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  )
}

export default BlogCard2
