import React from 'react'
import './style.scss'
import { useRef, useState } from 'react'
import { pause, play, unmute, mute } from '../../assets/icons/icon'


const MainVideo = () => {

  const videoRef = useRef(null)
  const videoRef1 = useRef(null)
  const [playing,setPlaying]=useState(true)

  const [isMute,setMute]=useState(true)
 
  const playVideo = ()=>{
    if(videoRef.current.paused){
      videoRef.current.play()
      setPlaying(true)
    }else{
      videoRef.current.pause()
      setPlaying(false)
      videoRef.current.muted=true
      setMute(true)
    }
  }
  const muteVideo = ()=>{
    if( videoRef.current.paused===true){
      videoRef.current.muted=true
      setMute(true)
    }else{
      if(videoRef.current.muted){
        videoRef.current.muted=false
        setMute(false)
      }else{
        videoRef.current.muted=true
        setMute(true)
      }
    }
  }

  const playVideo1 = ()=>{
    if(videoRef1.current.paused){
      videoRef1.current.play()
      setPlaying(true)
      
    }else{
      videoRef1.current.pause()
      setPlaying(false)
      videoRef1.current.muted=true
      setMute(true)
    }
  }
  const muteVideo1 = ()=>{
    if( videoRef1.current.paused===true){
      videoRef1.current.muted=true
      setMute(true)
    }else{
      if(videoRef1.current.muted){
        videoRef1.current.muted=false
        setMute(false)
      }else{
        videoRef1.current.muted=true
        setMute(true)
      }
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
          nofullscreen="true" 
          playsInline
          loop
          autoPlay={true}
          muted={isMute}
          id='video-desk'
        // fullscreen
        >
          Your browser does not support the video tag.
        </video>
        <button id='play-pause' onClick={  muteVideo } >{ isMute ?  mute : unmute  }</button>
        <button id='mute-unmute' onClick={ playVideo } >{ playing ?  pause : play  }</button>
      </div>
      <div className='mobile-pop-video' >
        <video
          ref={videoRef1}
          src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/PlayVideo/tyi-home-bg-mobile.mp4"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate"
          nofullscreen="true" 
          playsInline
          loop
          autoPlay={true}
          muted={isMute}
        >
          Your browser does not support the video tag.
        </video>
        <button id='play-pause' onClick={ muteVideo1 } >{ isMute ?  mute : unmute  }</button>
        <button id='mute-unmute' onClick={ playVideo1 } >{ playing ?  pause : play  }</button>
      </div>
    </>
  )
}

export default MainVideo
