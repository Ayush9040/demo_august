import React from 'react'
import './style.scss'
import {
  harmonyImagesData,
  fondationDayImagesData,
} from '../../assets/images/media/mediaAsset'
import 'react-gallery-carousel/dist/index.css'

const GridComponent = ({ imgs = [] }) => {
  return (
    <div>
      <div className="common-gallery">
        <div className="common-gallery-grid">
          <div className="common-grid-1">
            <img src={imgs.length !== 0 ? imgs[0] : harmonyImagesData[0]} />
          </div>
          <div className="common-grid-2">
            <div className="sub-grid-1">
              <img src={imgs.length !== 0 ? imgs[1] : harmonyImagesData[1]} />
            </div>
            <div className="sub-grid-2">
              <img src={imgs.length !== 0 ? imgs[2] : harmonyImagesData[2]} />
            </div>
          </div>
          <div className="common-grid-1">
            <img src={imgs.length !== 0 ? imgs[3] : harmonyImagesData[4]} />
          </div>
          <div className="common-grid-2">
            <div className="sub-grid-1">
              <img src={imgs.length !== 0 ? imgs[4] : harmonyImagesData[3]} />
            </div>
            <div className="sub-grid-2">
              <img src={imgs.length !== 0 ? imgs[5] : harmonyImagesData[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridComponent

export const FondationDayGridComponent = () => {
  return (
    <div>
      <div className="common-gallery">
        <div className="common-gallery-grid">
          <div className="common-grid-1">
            <img src={fondationDayImagesData[0]} />
          </div>
          <div className="common-grid-2">
            <div className="sub-grid-1">
              <img src={fondationDayImagesData[1]} />
            </div>
            <div className="sub-grid-2">
              <img src={fondationDayImagesData[2]} />
            </div>
          </div>
          <div className="common-grid-1">
            <img src={fondationDayImagesData[3]} />
          </div>
          <div className="common-grid-2">
            <div className="sub-grid-1">
              <img src={fondationDayImagesData[4]} />
            </div>
            <div className="sub-grid-2">
              <img src={harmonyImagesData[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
