import React from 'react'
import InnerNavComponent from '../../../Components/InnerNavComponent'
// import MediaNav from '../../Components/MediaNav'
import MediaSection from '../../../Components/MediaSection'

const MediaEvents = () => {
  let description = `Take a look at The Yoga Institute's worldwide and national holistic wellness events. Each event is well thought out, uniquely planned, and conducted to provide each participant with an opportunity to experience well-being while also learning about the various and interesting aspects of yoga. On a global scale, these events serve as a means of contributing to the betterment of society and spreading peace and prosperity.
  `
  const Events = {
    title: 'events',
    color: 'black',
    menuColor: 'black',
    menuItems: [
      {
        innerTitle: 'gallery',
        url: '/image-gallery',
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
    <div className="media-page-container">
      {/* <MediaNav title={'Events'} /> */}
      <InnerNavComponent abc={Events}/>
      <MediaSection
        title={'Events'}
        description={description}
        invert={true}
        subHeading={'Featured Events'}
        sectionColor={'#DFB066'}
      />
    </div>
  )
}

export default MediaEvents
