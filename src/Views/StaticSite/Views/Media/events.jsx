import React from 'react'
import MediaNav from '../../Components/MediaNav'
import MediaSection from '../../Components/MediaSection'

const MediaEvents = () => {
  let description = `Take a look at The Yoga Institute's worldwide and national holistic wellness events. Each event is well thought out, uniquely planned, and conducted to provide each participant with an opportunity to experience well-being while also learning about the various and interesting aspects of yoga. On a global scale, these events serve as a means of contributing to the betterment of society and spreading peace and prosperity.
  `

  return (
    <div className="media-page-container">
      <MediaNav title={'Events'} />
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
