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
              {/* A magnificent collection of Dr. Hansaji Yogendra’s wisdom, all in
              one place */}
              Explore Dr. Hansaji Yogendra’s timeless wisdom on health, wellness, diet, yoga, beauty, and more, all in one place for a happy, healthy life.
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
            <img src='https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/PG-image/v1ce562371-309e-40a7-b103-e870c2e4ca83_11zon859ac867-c895-4ab9-9312-115305f5cb24.webp'
            alt='featured-vedio1' />
          </div>
          <div
            className="image-cont"
            role="button"
            onClick={() =>
              setVideoPlayerData('https://www.youtube.com/embed/EJ7aeYm-nLg')
            }
          >
            <div className="svg-container">{videos2}</div>
            <img src='https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/PG-image/v262700330-7734-448b-b301-4b75f3ec2dce.webp' alt='featured-vedio-2'/>
          </div>
          <div
            className="image-cont"
            role="button"
            onClick={() =>
              setVideoPlayerData('https://www.youtube.com/embed/NAScYOAeBmo')
            }
          >
            <div className="svg-container">{videos2}</div>
            <img src='https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/PG-image/v3_11zond8def76c-ee44-4a07-94de-3848c34d76c4.webp' alt='featured-vedio-3'/>
          </div>
        </div>
        <a
          href="https://www.youtube.com/c/theyogainstituteofficial"
          target="_blank"
          rel="noopener noreferrer"
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
