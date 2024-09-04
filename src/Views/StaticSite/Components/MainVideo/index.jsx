import React, { useEffect, useRef, useState } from 'react'; // Combined imports
import './style.scss'
import { pause, play, unmute, mute } from '../../assets/icons/icon'


const MainVideo = () => {

  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [isMute, setMute] = useState(true)

  const isInView = window.innerWidth < 500;
  const videoSrc ='https://vjs.zencdn.net/v/oceans.webm'
  //  isInView ?
  //   "https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/Home/PlayVideo/tyi-home-bg-mobile.mp4"
  //   : "https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/Home/PlayVideo/tyi-home-bs.mp4";


  // Preload video assets
  useEffect(() => {
    const preloadVideo = document.createElement('link');
    preloadVideo.rel = 'preload';
    preloadVideo.href = videoSrc;
    preloadVideo.as = 'video';
    preloadVideo.type = 'video/mp4';
    document.head.appendChild(preloadVideo);

    return () => {
      document.head.removeChild(preloadVideo);
    };
  }, [videoSrc]);

  // Function to toggle play/pause and mute/unmute
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
      videoRef.current.muted = true;
      setMute(true);
    }
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setMute(videoRef.current.muted);
  };


  return (
    <>
      <div className={` ${isInView ? 'mobile-pop-video' : 'pop-video'}`}>
        <video
          fetchpriority="low"
          ref={videoRef}
          src={videoSrc}
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate"
          playsInline
          loop
          autoPlay
          muted={isMute}
          id="video-element"
        >
          Your browser does not support the video tag.
        </video>
        <button id='play-pause' onClick={handlePlayPause}>
          {playing ? pause : play}
        </button>
        <button id='mute-unmute' onClick={handleMuteUnmute}>
          {isMute ? mute : unmute}
        </button>
      </div>


    </>
  )
}

export default MainVideo