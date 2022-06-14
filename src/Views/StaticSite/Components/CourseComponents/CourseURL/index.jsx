import React from 'react'

const CourseURL = ({ content }) => {

  return (
    <div className='CourseURL'>
      <p>{content.text}
        <a href={content.url}>{content.url}</a>
      </p>
    </div>
  )
}

export default CourseURL