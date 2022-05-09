import React from 'react'
import './style.scss'

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Blogs/blog1.jpg" />
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

export default BlogCard
