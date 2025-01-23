import React, { useEffect, useRef, useState } from 'react'; // Combined imports
import './style.scss'
import { pause, play, unmute, mute } from '../../assets/icons/icon'
import { useSelector } from 'react-redux'



const MainVideo = () => {

  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [isMute, setMute] = useState(true)
  // useEffect(() => {
  //   // Load YouTube Iframe API script dynamically
  //   const script = document.createElement('script');
  //   script.src = 'https://www.youtube.com/iframe_api';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // Callback function when the API is ready
  //   window.onYouTubeIframeAPIReady = () => {
  //     new window.YT.Player('player', {
  //       height: '100%',
  //       width: '100%',
  //       videoId: 'jwDhDbeShQw',
  //       playerVars: {
  //         start: 52,           // Start video at 52 seconds
  //         autoplay: 1,         // Autoplay video
  //         controls: 0,         // Hide default controls (no play/pause, volume, or share)
  //         modestbranding: 1,   // Limit YouTube branding (no YouTube logo)
  //         rel: 0,              // Prevent related videos at the end
  //         showinfo: 0,         // Hide video title and uploader info (deprecated)
  //         iv_load_policy: 3,   // Disable annotations and info cards
  //         fs: 0,               // Disable fullscreen button
  //         cc_load_policy: 0,   // Disable closed captions
  //         mute: 1,             // Mute the video to bypass autoplay restrictions
  //       },
  //       events: {
  //         onReady: onPlayerReady,
  //         onStateChange: onPlayerStateChange,
  //       },
  //     });
  //   };

  //   // Cleanup the script tag when component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);


  // Called when the player is ready
  const onPlayerReady = (event) => {
    // Custom behavior can be added here
  };

  // Called when the player's state changes (play, pause, etc.)
  const onPlayerStateChange = (event) => {
    // Custom behavior based on player state can be added here
  };

  const isInView = window.innerWidth < 500;
  // const videoSrc =
  //   isInView ?
  //     "https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/Home/PlayVideo/tyi-home-bg-mobile.mp4"
  //     : "https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/Home/PlayVideo/tyi-home-bs.mp4";


  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);

  // console.log("nameFromRedux from video ", nameFromRedux);

  // Preload video assets
  // useEffect(() => {
  //   const preloadVideo = document.createElement('link');
  //   preloadVideo.rel = 'preload';
  //   preloadVideo.href = videoSrc;
  //   preloadVideo.as = 'video';
  //   preloadVideo.type = 'video/mp4';
  //   document.head.appendChild(preloadVideo);

  //   return () => {
  //     document.head.removeChild(preloadVideo);
  //   };
  // }, [videoSrc]);

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
        {/* <video
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
        </video> */}
        <div id="player">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jwDhDbeShQw?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&cc_load_policy=0&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            // allowFullScreen
            // title="YouTube Video Player"
          ></iframe>
        </div>

        {/* <button id='play-pause' onClick={handlePlayPause}>
          {playing ? pause : play}
        </button>
        <button id='mute-unmute' onClick={handleMuteUnmute}>
          {isMute ? mute : unmute}
        </button> */}
      </div>


    </>
  )
}

export default MainVideo