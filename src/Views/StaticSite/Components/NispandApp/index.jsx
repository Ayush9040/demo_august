import React from 'react'
import CommonBtn from '../commonbtn'
import './style.scss'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import { Link } from 'react-router-dom'

const Nispand = () => {
  return (
    <div className='nispand-app-container global-padding'>
      <div className='nispand-content'>
        <div className='heading-container'>
          <div className='heading-content'>
            <div className='heading-logo'>
              <img src={baseDomain + homeAssets.homeAsset25} />
            </div>
            <div className='heading-text'>
              <h2>The Yoga Institute</h2>
              <h1>Nispand</h1>
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
        <a href='https://nispand.com/'>
          <CommonBtn text={'Explore More'} />
        </a>
        <div className='download-options'>
          <h4>GET IT NOW!</h4>
          <div className='google-app-store'>
            <div className='google'>
              <img src={baseDomain + homeAssets.homeAsset22} />
            </div>
            <div className='apple'>
              <img width={'93%'} src={baseDomain + homeAssets.homeAsset23} />
            </div>
          </div>
        </div>
      </div>
      <div className='app-preview'>
        <img src={baseDomain + homeAssets.homeAsset24} />
      </div>
    </div>
  )
}

export default Nispand
