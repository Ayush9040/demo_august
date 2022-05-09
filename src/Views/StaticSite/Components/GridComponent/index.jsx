import React from 'react'
import './style.scss'
import {harmonyImagesData,fondationDayImagesData} from "../../Views/Media"
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'

const GridComponent = ({ imgs = [] }) => {
  return (
    <div>
      <div className="common-gallery">
        <div className="common-gallery-grid">
          <img className="common-grid-1" src={harmonyImagesData[0]}  />
          <div className="common-grid-2">
            <img className="sub-grid-1"  src={harmonyImagesData[1]}  />
            <img className="sub-grid-2"  src={harmonyImagesData[2]}  />
          </div>
          <img className="common-grid-1"  src={harmonyImagesData[4]}  />
          <div className="common-grid-2">
            <img className="sub-grid-1"   src={harmonyImagesData[3]}  /> 
            <img className="sub-grid-2"  src={harmonyImagesData[5]}   /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridComponent

export const FondationDayGridComponent = ({ imgs }) => {
  return (
    <div>
      <div className="common-gallery">
        <div className="common-gallery-grid">
          <img className="common-grid-1" src={fondationDayImagesData[0]}  />
          <div className="common-grid-2">
            <img className="sub-grid-1"  src={fondationDayImagesData[1]}  />
            <img className="sub-grid-2"  src={fondationDayImagesData[2]}  />
          </div>
          <img className="common-grid-1"  src={fondationDayImagesData[3]}  />
          <div className="common-grid-2">
            <img className="sub-grid-1"   src={fondationDayImagesData[4]}  /> 
            <img className="sub-grid-2"  src={harmonyImagesData[4]}   /> 
          </div>
        </div>
      </div>
    </div>
  )
}





