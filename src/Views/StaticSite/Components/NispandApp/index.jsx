import React from 'react'
import CommonBtn from '../commonbtn'
import NispandIcon from '../../assets/images/nispand-icon.png'
import './style.scss'

const Nispand = () => {
  return (
    <div className="nispand-app-container global-padding">
      <div className="nispand-content">
        <div className="heading-container">
          <div className="heading-content">
            <div className="heading-logo">
              <img src={NispandIcon} />
            </div>
            <div className="heading-text">
              <h2>The Yoga Institute</h2>
              <h1>Nispand</h1>
            </div>
          </div>
          <div className="custom-border global-top-margin"></div>
        </div>
        <div className="app-description">
          <p>
            Nispand, created with knowledge of over 100 years, is the premium
            meditation and sleep app with the world’s largest collection of
            meditation clips, binaural beats, solfeggio frequencies, mantras,
            sleep music and the world’s first of its kind intelligent stress
            monitor.
          </p>
        </div>
        <CommonBtn text={'Explore More'} />
        <div className="download-options">
          <h4>GET IT NOW!</h4>
          <br />
          <br />
          <div className="google-app-store">
            <div className="google">
              <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Nispand/google-play-logo-10628.png" />
            </div>
            <div className="apple">
              <img
                width={'93%'}
                src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Nispand/AppStore.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="app-preview">
        <img src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Nispand/nispandApp.png" />
      </div>
    </div>
  )
}

export default Nispand
