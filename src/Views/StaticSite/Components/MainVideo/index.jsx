import React from 'react'
import './style.scss'
import { useRef, useState } from 'react'
import { pause, play, unmute, mute } from '../../assets/icons/icon'


const MainVideo = () => {

  const videoRef = useRef(null)
  const [playing,setPlaying]=useState(true)

  const [isMute,setMute]=useState(true)
 
  const playVideo = ()=>{
    if(videoRef.current.paused){
      videoRef.current.play()
      setPlaying(true)
    }else{
      videoRef.current.pause()
      setPlaying(false)
    }
  }
  const muteVideo = ()=>{
    if(videoRef.current.muted){
      videoRef.current.muted=false
      setMute(false)
    }else{
      videoRef.current.muted=true
      setMute(true)
    }
  }

  return (
    <>
      <div className='pop-video' >
        <video
          ref={videoRef}
          src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bs.mp4"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate"
          nofullscreen 
          loop
          autoPlay={true}
          muted={true}
          id='video-desk'
        // fullscreen
        >
          Your browser does not support the video tag.
        </video>
        <button id='play-pause' onClick={ muteVideo } >{ isMute ?  mute : unmute  }</button>
        <button id='mute-unmute' onClick={ playVideo } >{ playing ?  pause : play  }</button>
      </div>
      <div className='mobile-pop-video' >
        <video
          ref={videoRef}
          src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bg-mobile.mp4"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate"
          nofullscreen 
          loop
          autoPlay={true}
          muted={true}
        >
          Your browser does not support the video tag.
        </video>
        <button id='play-pause' onClick={ muteVideo } >{ isMute ?  mute : unmute  }</button>
        <button id='mute-unmute' onClick={ playVideo } >{ playing ?  pause : play  }</button>
      </div>
    </>
  )
}

export default MainVideo
