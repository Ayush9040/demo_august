import React from 'react'
import CommonBtn from '../commonbtn'
import './style.scss'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import nispand_1 from './images/nispand_1.png'
//import { Link } from 'react-router-dom'

const Nispand = () => {
  return (
    <div className='nispand-app-container global-padding'>
      <div className='nispand-content'>
        <div className='heading-container'>
          <div className='heading-content'>
            <div className='heading-logo'>
              <img src={`${baseDomain}${homeAssets.homeAsset25}`} alt='Nispand' />
            </div>
            <div className='heading-text'>
              <h1>Nispand</h1>
              <h2>Meditation App</h2>
            </div>
          </div>
          <div className='custom-border global-top-margin'></div>
        </div>
        <div className='app-description'>
          <p>
            Nispand, created with knowledge of over 100 years, is the premium
            meditation and sleep app with the world’s largest collection of
            meditation clips, binaural beats, solfeggio frequencies, mantras,
            sleep music and the world’s first of its kind intelligent stress
            monitor.
          </p>
        </div>
        <a href='https://nispand.com/' rel="noreferrer"  target='_blank' >
          <CommonBtn text={'Explore More'} />
        </a>
        <div className='download-options'>
          <h4>GET IT NOW!</h4>
          <div className='google-app-store'>
            <a href='https://play.google.com/store/apps/details?id=com.nispand.com' rel='noreferrer' target="_blank"  >
              <div className='google'>
                <img src={`${baseDomain}${homeAssets.homeAsset22}`} alt='google-play' />
              </div>
            </a>
            <a href='https://apps.apple.com/in/app/nispand-meditation-and-sleep/id1609608907' rel='noreferrer' target="_blank" >
              <div className='apple'>
                <img width={'93%'} src={`${baseDomain}${homeAssets.homeAsset23}`} alt='app-store' />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='app-preview'>
        <img src={nispand_1} alt='Nispand-app'/>
      </div>
    </div>
  )
}

export default Nispand
