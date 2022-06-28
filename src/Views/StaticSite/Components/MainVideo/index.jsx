import React, { useState } from 'react'
import './style.scss'

const MainVideo = () => {
  const  [initialVideo,setInitialVideo]=useState['']
  return (
    <>
      {/* <iframe
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
        }}
        src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/TYI%20One%20Minute%20Ad%20Video.mp4"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="0"
        controls=''
        allowFullScreen
        
      ></iframe>

      <div ><button className='video-button'>Skip</button></div> */}
      <div className="starting-video">
        <video
          src=" https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/TYI%20One%20Minute%20Ad%20Video.mp4"
          control="false"
          autoPlay
          style={{ height: '100vh', width: '100%' }}
          className='popup-video'
        >
          Your browser does not support the video tag.
        </video>
        <button onClick={()=>{setInitialVideo('')}}className="video-skip-button">Skip</button>
      </div>
    </>
  )
}

export default MainVideo
