import React from 'react'
import baseDomain,{ mediaAssets } from '../../assets/images/imageAsset'
import GridComponent from '../GridComponent'
import './style.scss'

const GalleryModal = ({ setGallery }) => {
  return (
    <div className="gallery-modal">
      <div className="close">
        <span onClick={setGallery(false)}>X</span>
      </div>
      <div className="gallery-content">
        <div className="main-image">
          <img src={baseDomain+mediaAssets.igCeremony} alt="inagural-ceremony" />
        </div>
        <div className="other-images">
          <GridComponent />
          <GridComponent />
          <GridComponent />
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
