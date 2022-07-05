import React from 'react'
import './style.scss'

const MainVideo = () => {
 
  return (
    <>
      {/* <iframe
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
        src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/TYI%20One%20Minute%20Ad%20Video.mp4"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="0"
        controls={false}
        allowFullScreen
        
      ></iframe> */}

      {/* <div ><button className='video-button'>Skip</button></div> */}

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
