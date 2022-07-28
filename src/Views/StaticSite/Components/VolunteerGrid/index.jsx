import React from 'react'
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion'
//import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import Heading from '../Heading'
import './style.scss'
const VolunteerGrid = ({ gallery, altName }) => {
  return (
    <div className="volunteer-contents">
      <Heading smallText={'Gallery'} />
      <div className="gallery-content">
        <div className="common-gallery">
          <div className="common-gallery-grid">
            <div className="common-grid-1">
              <img src={gallery?.[0]} alt={altName} className="img-main" />
            </div>
            <div className="common-grid-2">
              <div className="sub-grid-1">
                <img
                  src={gallery?.[1]}
                  alt={altName}
                />
              </div>
              <div className="sub-grid-2">
                <img
                  src={gallery?.[2]}
                  alt={altName}
                />
              </div>
            </div>
            <div className="common-grid-1">
              <img
                src={gallery?.[3]}
                className="img-main"
                alt={altName}
              />
            </div>
            <div className="common-grid-2">
              <div className="sub-grid-1">
                <img
                  src={gallery?.[4]}
                  alt={altName}
                />
              </div>
              <div className="sub-grid-2">
                <img
                  src={gallery?.[5]}
                  alt={altName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerGrid
