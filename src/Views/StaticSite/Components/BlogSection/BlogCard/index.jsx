import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const BlogCard = ({ blogs }) => {
  return (
    <Link to={`/blogs/blog/${blogs?.id}`}>
      <div className='blog-card'>
        <div className='blog-card-image'>
          <img src={blogs?.image} />
        </div>
        <div className='blog-card-text'>
          <p className='title'>
            {blogs?.title?.length > 20
              ? blogs.title.substring(0, 20) + '...'
              : blogs.title}
          </p>
          <p>
            {blogs.metaDescription.length > 40
              ? blogs.metaDescription.substring(0, 40) + '...'
              : blogs.metaDescription}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
