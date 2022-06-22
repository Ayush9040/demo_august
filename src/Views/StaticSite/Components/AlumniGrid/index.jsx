import React from 'react'
import './style.scss'
import CommonBtn from '../commonbtn'

const AlumniGrid = ({ notEvent, images=[] }) => {
  return (
    <div className='alumni-grid'> 
      {!notEvent && <p>Alumni Day</p>}
      {!notEvent && <h4>01/01/22</h4>}
      <div className='alumni-event-grid'>
        <div className='grid-element-1'>
          <div className='event-1'>
            {images[0] &&<img src={images[0]} />}
          </div>
          <div className='event-2'>
            {images[1] && <img src={images[1]} />}
          </div>
        </div>
        <div className='grid-element-2'>
          <div className='event-3'>
            {images[2] && <img src={images[2]} />}
          </div>
        </div>
        <div className='grid-element-3'>
          <div className='event-4'>
            {images[3] && <img src={images[3]} />}
          </div>
          <div className='event-5'>
            {images[4] && <img src={images[4]} />}
          </div>
        </div>
      </div>
      {!notEvent && <CommonBtn text={'View Album'} />}
    </div>
  )
}

export default AlumniGrid
