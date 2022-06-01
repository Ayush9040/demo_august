import React, { useState } from 'react'
import { data } from './data'
import './style.scss'

const MediaVideo = () => {
  const [videoURL, setvideoURL] = useState(
    'https://www.youtube.com/embed/tgbNymZ7vqY'
  )
  console.log(videoURL,'url')
  return (
    <div className="main-div">
      <div className="Featured">Featured Video</div>
      <div className="all-videos">
        <div className="play-setion">
          <iframe
            className="iframe-video"
            src={videoURL}
          ></iframe>
          <div className="Intro">Introduction Heading to Holistic Approach</div>
          <h5>200k views</h5>
        </div>

        <div className="right-video">
          {data.map((point, idx) => {
            console.log(idx)
            return (
              <div className="more-videos"onClick={() => setvideoURL(point.link)} key={point.id}>
                <img src={point.thumbnail} />
                <div>
                  <h4>{point.title}</h4>
                  <h6>{point.views}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MediaVideo
