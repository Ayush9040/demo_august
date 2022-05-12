import React from 'react'
import './style.scss'

const BlogCard = ({ blogs }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={blogs.img} />
      </div>
      <div className="blog-card-text">
        <p className='title'>{blogs.title.length>20?blogs.title.substring(0,20)+'...':blogs.title}</p>
        <br />
        <p>
          {blogs.description.length>40?blogs.description.substring(0,40)+'...':blogs.description}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
