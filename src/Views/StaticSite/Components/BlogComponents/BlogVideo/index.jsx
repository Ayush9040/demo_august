import React from 'react'

const BlogVideo = ({ url }) => {
  return (
    <div className='blog-video'>
      <iframe
        width={'100%'}
        height={'500px'}
        src={url}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default BlogVideo
