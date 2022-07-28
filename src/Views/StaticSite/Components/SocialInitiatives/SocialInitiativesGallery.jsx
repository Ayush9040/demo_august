import React from 'react'
import './style.scss'
import baseDomain,{ alumniAssets } from '../../assets/images/imageAsset'

const SocialInitiativesGallery = ({ notEvent }) => {

  return (
    <>
      {<div className='alumni-grid' >
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent &&<h4>01/01/22</h4>}
        <div className='alumni-event-grid' >
          <div className='grid-element-1' >
            <div className='event-1'>
              <img src={`${baseDomain}${alumniAssets.supportAssets1}`} alt="children" />
            </div>
            <div className='event-2'>
              <img src={`${baseDomain}${alumniAssets.supportAssets2}`} alt="police" />
            </div>
          </div>
          <div className='grid-element-2' >
            <div className='event-3' >
              <img src={`${baseDomain}${alumniAssets.supportAssets3}`} alt="anna brahma" />
            </div>
          </div>
          <div className='grid-element-3' >
            <div className='event-4' >
              <img src={`${baseDomain}${alumniAssets.supportAssets4}`} alt="yoga-for-transgender" />
            </div>
            <div className='event-5' >
              <img src={`${baseDomain}${alumniAssets.supportAssets5}`} alt="plants"/>
            </div>
          </div>
        </div>
        {/* </div> : (imageChanger===1?<div className='alumni-grid' >
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent &&<h4>01/01/22</h4>}
        <div className='alumni-event-grid' >
          <div className='grid-element-1' >
            <div className='event-1'>
              <img src={`${baseDomain}${alumniAssets.supportAssets6}`} alt="gallery"/>
            </div>
            <div className='event-2'>
              <img src={`${baseDomain}${alumniAssets.supportAssets7}`} alt="gallery"/>
            </div>
          </div>
          <div className='grid-element-2' >
            <div className='event-3' >
              <img src={`${baseDomain}${alumniAssets.supportAssets8}`} alt="gallery"/>
            </div>
          </div>
          <div className='grid-element-3' >
            <div className='event-4' >
              <img src={`${baseDomain}${alumniAssets.supportAssets9}`} alt="gallery"/>
            </div>
            <div className='event-5' >
              <img src={`${baseDomain}${alumniAssets.supportAssets10}`} alt="gallery"/>
            </div>
          </div>
        </div>
      </div> :  <div className='alumni-grid' >
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent &&<h4>01/01/22</h4>}
        <div className='alumni-event-grid' >
          <div className='grid-element-1' >
            <div className='event-1'>
              <img src={`${baseDomain}${alumniAssets.supportAssets11}`} alt="gallery"/>
            </div>
            <div className='event-2'>
              <img src={`${baseDomain}${alumniAssets.supportAssets12}`} alt="gallery"/>
            </div>
          </div>
          <div className='grid-element-2' >
            <div className='event-3' >
              <img src={`${baseDomain}${alumniAssets.supportAssets13}`} alt="gallery"/>
            </div>
          </div>
          <div className='grid-element-3' >
            <div className='event-4' >
              <img src={`${baseDomain}${alumniAssets.supportAssets14}`} alt="gallery"/>
            </div>
            <div className='event-5' >
              <img src={`${baseDomain}${alumniAssets.supportAssets15}`} alt="gallery"/>
            </div>
          </div>
        </div>
      </div> )} */}
      </div>}
    </>
  )
}

export default SocialInitiativesGallery