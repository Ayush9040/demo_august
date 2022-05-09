import React, { useState } from 'react'
import Heading from '../Heading'
import './style.scss'
import { videos, videos2 } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'

const VideosSection = () => {

  const [videoPlayerData, setVideoPlayerData] = useState(null)

  return (
    <div className="videos-container global-padding">
      <div className="video-background">
        <div className="videos-header">
          <Heading logo={videos} smallText={'Featured'} largeText={'Videos'} />
          <div className="videos-description">
            <p>
              a magnificent collection of Dr. Hansaji Yogendra’s wisdom, all in
              one place
            </p>
          </div>
        </div>
        <div className="featured-videos">
          <div
            className="image-cont"
            role="button"
            onClick={() =>
              setVideoPlayerData('https://www.youtube.com/embed/8YLHdDQTWrY')
            }
          >
            <div className="svg-container">{videos2}</div>
            <img src={baseDomain+homeAssets.homeAsset64} />
          </div>
          <div
            className="image-cont"
            role="button"
            onClick={() =>
              setVideoPlayerData('https://www.youtube.com/embed/EJ7aeYm-nLg')
            }
          >
            <div className="svg-container">{videos2}</div>
            <img src={baseDomain+homeAssets.homeAsset65} />
          </div>
          <div
            className="image-cont"
            role="button"
            onClick={() =>
              setVideoPlayerData('https://www.youtube.com/embed/NAScYOAeBmo')
            }
          >
            <div className="svg-container">{videos2}</div>
            <img src={baseDomain+homeAssets.homeAsset65}/>
          </div>
        </div>
        <a
          href="https://www.youtube.com/c/theyogainstituteofficial"
          target="_blank"
          rel="noreferrer"
        >
          <CommonBtn text={'Explore More'} />
        </a>
      </div>
      {videoPlayerData && (
        <div className="video-overlay">
          <div className="video-player-container">
            <div
              className="close-btn"
              role="button"
              onClick={() => setVideoPlayerData(null)}
            >
              close
            </div>
            <iframe
              src={videoPlayerData}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideosSection
