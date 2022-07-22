import React from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import digitalMedia from '../../Constants/digitalMedia'
import './style.scss'

const DigitalMedia = () => {

  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
    ],
  }

  return (
    <div className='digital-media-container' >
      <InnerNavComponent abc={MediaNews} />
      <h1>Digital Media
        <div className='bottom-line' ></div>
      </h1>
      <div className='digital-media-cards' >
        { digitalMedia.map((item,idx)=><iframe key={idx} width="560" height="315" src={item} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>) }
      </div>
    </div>
  )
}

export default DigitalMedia