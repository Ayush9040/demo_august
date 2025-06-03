import React from 'react'
import './style.scss'

const BlogLink = ({ url, text }) => {
  return (
    <div className='blog-link' >
      <a href={url} target='_blank' rel="noopener noreferrer" >{text}</a>
    </div>
  )
}

export default BlogLink