import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const BlogCard = ({ blogs }) => {

  return (
    <Link to={`/${blogs?.slug}`}>
      <div className="blog-card">
        <div className="blog-card-image">
          <img src={blogs?.coverImage || 'https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Courses/courses-hero%20%281%29.jpg'} />
        </div>
        <div className="blog-card-text">
          <p
            className="title"
            dangerouslySetInnerHTML={{ __html: `${blogs.title}` }}
          >
          </p>
          <p className='blogs_meta' dangerouslySetInnerHTML={{ __html: `${blogs.excerpt}` }}>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
