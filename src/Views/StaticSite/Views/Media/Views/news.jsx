import React from 'react'
import { Link } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
//import MediaSection from '../../../Components/MediaSection'

const News = () => {
  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
      {
        innerTitle: 'gallery',
        url: '/media/media-gallery',
        name: 'Gallery',
      },
      // {
      //   innerTitle: 'news',
      //   url: '/media/news',
      //   name: 'News',
      // },
      // {
      //   innerTitle: 'events',
      //   url: '/media/events',
      //   name: 'Events',
      // },
    ],
  }
 

  return (
    <div className="news-container">
      {/* <MediaNav title={'News'} /> */}
      <InnerNavComponent abc={MediaNews} />
      <div className='media-categories' >
        <Link to='/print-media' >
          <div className='print-media' >
            <img src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg' />
            <p>Print Media</p>
          </div>
        </Link>
        <Link to='/digital-media' >
          <div className='digital-media' >
            <img src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg' />
            <p>Digital Media</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default News
