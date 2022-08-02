import React from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import digitalMedia from '../../Constants/digitalMedia'
import { videos2 } from '../../../../assets/icons/icon'
import './style.scss'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const DigitalMedia = () => {

  const location = useLocation()

  const [ videoPlayerData,setVideoPlayerData ]=useState()
  

  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
    ],
  }

  return (<>
    { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }
    <div className='digital-media-container' >
      <InnerNavComponent abc={MediaNews} />
      <h1>Digital Media
        <div className='bottom-line' ></div>
      </h1>
      <div className='digital-media-cards' >
        { digitalMedia.map((item,idx)=><div onClick={()=>{ setVideoPlayerData(item.video) }} key={idx} >
          <div className="svg-container">{videos2}</div>
          <img src={item.thumbnail} alt='youtube-video' />
        </div>) }
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
  </>
  )
}

export default DigitalMedia