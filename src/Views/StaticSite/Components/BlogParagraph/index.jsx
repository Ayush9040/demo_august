import React from 'react'
import './style.scss'

const BlogParagraph = ({ pText }) => {
  return (
    <div className='blog-paragraph'>
      <p>{pText}</p>
    </div>
  )
}

export default BlogParagraph
