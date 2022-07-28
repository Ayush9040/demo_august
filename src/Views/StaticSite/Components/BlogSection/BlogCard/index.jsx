import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const BlogCard = ({ blogs }) => {
  return (
    <Link to={`/${blogs?.slug}`}>
      <div className="blog-card">
        <div className="blog-card-image">
          <img src={blogs?.coverImage} />
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
