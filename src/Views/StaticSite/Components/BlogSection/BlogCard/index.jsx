import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const BlogCard = ({ blogs }) => {

  const navigate = useNavigate()

  return (
    <div className="blog-card" onClick={ ()=>{navigate(`/${ blogs?.slug }`)} } >
      <div className="blog-card-image">
        <img src={blogs?.coverImage || 'https://ecom-static-site-prod.oss-ap-southeast-1.aliyuncs.com/SEO-New-Images/Courses/yoga-teacher-training-courses-hero.webp'} />
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
  )
}

export default BlogCard
