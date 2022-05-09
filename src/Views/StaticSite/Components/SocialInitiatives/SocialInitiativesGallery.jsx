import React from 'react'
import './style.scss'


// annam bharma

import image1 from '../../assets/images/alumni/support/Annam Brahma/img-1.jpg'
import image2 from '../../assets/images/alumni/support/Annam Brahma/img-2.jpg'
import image3 from '../../assets/images/alumni/support/Annam Brahma/img-3.jpg'
import image4 from '../../assets/images/alumni/support/Annam Brahma/img-4.jpg'
import image5 from '../../assets/images/alumni/support/Annam Brahma/img-5.jpg'




const myImages={
  slide1:[image1,image2, image3,image4,image5]
}

const SocialInitiativesGallery = ({ notEvent,imageChanger }) => {

  console.log(imageChanger,'GridChanges')
  return (
    <>
      {imageChanger===0?<div className='alumni-grid' >
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent &&<h4>01/01/22</h4>}
        <div className='alumni-event-grid' >
          <div className='grid-element-1' >
            <div className='event-1'>
              <img src={image1} alt="gallery" />
            </div>
            <div className='event-2'>
              <img src={image2} alt="gallery" />
            </div>
          </div>
          <div className='grid-element-2' >
            <div className='event-3' >
              <img src={image3} alt="gallery" />
            </div>
          </div>
          <div className='grid-element-3' >
            <div className='event-4' >
              <img src={image4} alt="gallery" />
            </div>
            <div className='event-5' >
              <img src={image5 } alt="gallery"/>
            </div>
          </div>
        </div>
      </div> : (imageChanger===1?<div className='alumni-grid' >
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent &&<h4>01/01/22</h4>}
        <div className='alumni-event-grid' >
          <div className='grid-element-1' >
            <div className='event-1'>
              <img src={image1} alt="gallery" />
            </div>
            <div className='event-2'>
              <img src={image2} alt="gallery" />
            </div>
          </div>
          <div className='grid-element-2' >
            <div className='event-3' >
              <img src={image3} alt="gallery" />
            </div>
          </div>
          <div className='grid-element-3' >
            <div className='event-4' >
              <img src={image4} alt="gallery" />
            </div>
            <div className='event-5' >
              <img src={image5} alt="gallery" />
            </div>
          </div>
        </div>
      </div> :  <div className='alumni-grid' >
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent &&<h4>01/01/22</h4>}
        <div className='alumni-event-grid' >
          <div className='grid-element-1' >
            <div className='event-1'>
              <img src={image1} alt="gallery" />
            </div>
            <div className='event-2'>
              <img src={image2} alt="gallery" />
            </div>
          </div>
          <div className='grid-element-2' >
            <div className='event-3' >
              <img src={image3} alt="gallery" />
            </div>
          </div>
          <div className='grid-element-3' >
            <div className='event-4' >
              <img src={image4} alt="gallery" />
            </div>
            <div className='event-5' >
              <img src={image5} alt="gallery" />
            </div>
          </div>
        </div>
      </div> )}
    </>
  )
}

export default SocialInitiativesGallery