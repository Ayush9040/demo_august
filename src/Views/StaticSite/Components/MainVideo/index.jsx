import React, { useEffect, useRef, useState } from 'react'; // Combined imports
import './style.scss'
import { pause, play, unmute, mute } from '../../assets/icons/icon'
import { useSelector } from 'react-redux'



const MainVideo = () => {

  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [isMute, setMute] = useState(true)
  const containerRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const isInView = window.innerWidth < 500;
  const videoSrc = isInViewport
    ? isInView
      ? "https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/file/mobile-home-video-TYI.mp4"
      : "https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/file/desktop-home-video-TYI.mp4"
    : "";



      const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);

  // console.log("nameFromRedux from video ", nameFromRedux);

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px', // Load when 200px away from viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);


  // Preload video assets
  useEffect(() => {
    if (!isInViewport) return;

    const preloadVideo = document.createElement('link');
    preloadVideo.rel = 'preload';
    preloadVideo.href = videoSrc;
    preloadVideo.as = 'video';
    preloadVideo.type = 'video/mp4';
    document.head.appendChild(preloadVideo);

    return () => {
      document.head.removeChild(preloadVideo);
    };
  }, [videoSrc, isInViewport]);

  // Function to toggle play/pause and mute/unmute
  const handlePlayPause = () => {
    if (!videoRef.current) return;
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
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMute(videoRef.current.muted);
  };


  return (
    <>
      <div ref={containerRef} className={` ${isInView ? 'mobile-pop-video' : 'pop-video'}`}>
       {isInViewport && (
        <video
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
      )}
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