import React from 'react'
import { Link } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import baseDomain,{ newsAssets } from '../../../assets/images/imageAsset'
import './style.scss'
//import MediaSection from '../../../Components/MediaSection'

const News = () => {
  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
      {
        innerTitle: 'gallery',
        url: '/image-gallery',
        name: 'Gallery',
      },
      {
        innerTitle: 'news',
        url: '/media',
        name: 'News',
      },
      // {
      //   innerTitle: 'events',
      //   url: '/media/events',
      //   name: 'Events',
      // },
    ],
  }
 

  return (
    <div className="news-container">
      <InnerNavComponent abc={MediaNews} />
      <div className='media-categories' >
        <Link to='/print-media' >
          <div className='print-media' >
            <img src={`${baseDomain}${newsAssets.printMedia}`} />
            <p>Print Media</p>
          </div>
        </Link>
        <Link to='/digital-media' >
          <div className='digital-media' >
            <img src={`${baseDomain}${newsAssets.digitalMedia}`} />
            <p>Digital Media</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default News
