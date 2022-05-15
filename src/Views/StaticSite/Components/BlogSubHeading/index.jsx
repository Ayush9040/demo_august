import React from 'react'
import './style.scss'

const BlogSubHeaing = ({ boldText }) => {
  return (
    <div className='blog-sub-heading'>
      <p>
        <b>
          <u>{boldText}</u>
        </b>
      </p>
    </div>
  )
}

export default BlogSubHeaing
