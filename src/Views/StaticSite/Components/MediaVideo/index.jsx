import React, { useState } from 'react'
import { data } from './data'
import './style.scss'
// import MediaNav from '../MediaNav'
import InnerNavComponent from '../InnerNavComponent'

const MediaVideo = () => {
  const [videoURL, setvideoURL] = useState(
    'https://www.youtube.com/embed/jwDhDbeShQw'
  )
  console.log(videoURL, 'url')
  const GalleryVideo = {
    title: 'gallery',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'gallery',
        url: '/media',
        name: 'Gallery',
      },
      {
        innerTitle: 'news',
        url: '/media/news',
        name: 'News',
      },
      {
        innerTitle: 'events',
        url: '/media/events',
        name: 'Events',
      },
    ],
  }
  return (
    <>
      <div className="media-main-div">
        {/* <MediaNav title="Gallery" /> */}
        <InnerNavComponent abc={GalleryVideo}/>
        <div className="Featured">Featured Video</div>
        <div className="all-videos">
          <div className="play-setion">
            <iframe className="iframe-video" src={videoURL}></iframe>
            <div className="Intro">
              Introduction Heading to Holistic Approach
            </div>
            <h5>200k views</h5>
          </div>

          <div className="right-video">
            {data.map((point) => {
              return (
                <div
                  className="more-videos"
                  onClick={() => setvideoURL(point.link)}
                  key={point.id}
                >
                  <div className="right_side_video">
                    <img  src={point.thumbnail} />
                  </div>
                  <div style={{ width:'100%' }} >
                    <h4>{point.title}</h4>
                    <h6>{point.views}</h6>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MediaVideo
