import React from 'react'
import './style.scss'

import image1 from '../../assets/images/alumniGallery0.jpg'
import image2 from '../../assets/images/alumniGallery1.png'
import image3 from '../../assets/images/alumniGallery2.jpg'
import image4 from '../../assets/images/alumniGallery3.jpg'
import image5 from '../../assets/images/alumniGallery4.jpg'

const AlumniGrid = ({ notEvent }) => {
  return (
    <div className="alumni-grid">
      {!notEvent && <p>Alumni Day</p>}
      {!notEvent && <h4>01/01/22</h4>}
      <div className="alumni-event-grid">
        <div className="grid-element-1">
          <div className="event-1">
            <img src={image1} />
          </div>
          <div className="event-2">
            <img src={image2} />
          </div>
        </div>
        <div className="grid-element-2">
          <div className="event-3">
            <img src={image3} />
          </div>
        </div>
        <div className="grid-element-3">
          <div className="event-4">
            <img src={image4} />
          </div>
          <div className="event-5">
            <img src={image5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniGrid
