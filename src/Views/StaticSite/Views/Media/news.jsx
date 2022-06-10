import React from 'react'
import InnerNavComponent from '../../Components/InnerNavComponent'
import MediaNav from '../../Components/MediaNav'
import MediaSection from '../../Components/MediaSection'

const News = () => {
  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
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
  let description =
    'Get a quick peek at what\'s going on at The Yoga Institute\'s International and National branches. From Hansaji receiving the Prime Minister award by P.M Modi Ji to her being designated as the new President of the Indian Yoga Association. There\'s a lot more significant news in this section!'

  return (
    <div className="news-container">
      {/* <MediaNav title={'News'} /> */}
      <InnerNavComponent abc={MediaNews} />
      <MediaSection
        description={description}
        title={'News'}
        subHeading={'Highligths'}
        sectionColor={'#D58173'}
      />
    </div>
  )
}

export default News
