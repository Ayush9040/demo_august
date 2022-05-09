import React from 'react'
import InaguralCeremony from '../../assets/images/igceremony.jpg'
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
          <img src={InaguralCeremony} alt="inagural-ceremony" />
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
