import React from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import './style.scss'

const DigitalMedia = () => {

  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
      // {
      //   innerTitle: 'gallery',
      //   url: '/media/media-gallery',
      //   name: 'Gallery',
      // },
      // {
      //   innerTitle: 'news',
      //   url: '/media/news',
      //   name: 'News',
      // },
      // {
      //   innerTitle: 'events',
      //   url: '/media/events',
      //   name: 'Events',
      // },
    ],
  }

  return (
    <div className='digital-media-container' >
      <InnerNavComponent abc={MediaNews} />
      <h1>Digital Media
        <div className='bottom-line' ></div>
      </h1>
      <div className='digital-media-cards' >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kbZzBee50o4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kbZzBee50o4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kbZzBee50o4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kbZzBee50o4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <video
          src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bs.mp4"
        // fullscreen
        />
        <video
          src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bs.mp4"
        // fullscreen
        />
        <video
          src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bs.mp4"
        // fullscreen
        /> */}
      </div>
    </div>
  )
}

export default DigitalMedia