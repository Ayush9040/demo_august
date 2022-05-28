import React from 'react'
import './style.scss'
import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import CommonBtn from '../commonbtn'

const AlumniGrid = ({ notEvent }) => {
  return (
    <div className='alumni-grid'> 
      {!notEvent && <p>Alumni Day</p>}
      {!notEvent && <h4>01/01/22</h4>}
      <div className='alumni-event-grid'>
        <div className='grid-element-1'>
          <div className='event-1'>
            <img src={baseDomain + alumniAssets.alumniDayAssets1} />
          </div>
          <div className='event-2'>
            <img src={baseDomain + alumniAssets.alumniDayAssets2} />
          </div>
        </div>
        <div className='grid-element-2'>
          <div className='event-3'>
            <img src={baseDomain + alumniAssets.alumniDayAssets3} />
          </div>
        </div>
        <div className='grid-element-3'>
          <div className='event-4'>
            <img src={baseDomain + alumniAssets.alumniDayAssets4} />
          </div>
          <div className='event-5'>
            <img src={baseDomain + alumniAssets.alumniDayAssets5} />
          </div>
        </div>
      </div>
      <CommonBtn text={'View Album'} />
    </div>
  )
}

export default AlumniGrid
