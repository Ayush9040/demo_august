import React from 'react'
import './style.scss'

const MainVideo = () => {
 
  return (
    <>

      <video
        src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bs.mp4"
        controls={true}
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
        nofullscreen 
        loop
        autoPlay={false}
        muted={false}
        className='pop-video'
        // fullscreen
      >
          Your browser does not support the video tag.
      </video>
      <video
        src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bg-mobile.mp4"
        controls={true}
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
        nofullscreen 
        loop
        autoPlay={false}
        muted={false}
        className='mobile-pop-video'
      >
          Your browser does not support the video tag.
      </video>
  
    </>
  )
}

export default MainVideo
