import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import Heading from '../Heading'
import './style.scss'
const VolunteerGrid = () => {

  return (
    <div className="volunteer-contents">
      <Heading smallText={'Gallery'} />
      <div className="gallery-content">
        <div className="common-gallery">
          <div className="common-gallery-grid">
            <div className="common-grid-1">
              <img
                src={baseDomain + alumniAssets.supportAssets1}
                alt=""
                className="img-main"
              />
            </div>
            <div className="common-grid-2">
              <div className="sub-grid-1">
                <img
                  src={baseDomain + alumniAssets.supportAssets2}
                  alt="gallery"
                />
              </div>
              <div className="sub-grid-2">
                <img
                  src={baseDomain + alumniAssets.supportAssets3}
                  alt="gallery"
                />
              </div>
            </div>
            <div className="common-grid-1">
              <img
                src={baseDomain + alumniAssets.supportAssets4}
                className="img-main"
              />
            </div>
            <div className="common-grid-2">
              <div className="sub-grid-1">
                <img src={baseDomain + alumniAssets.supportAssets5} alt="" />
              </div>
              <div className="sub-grid-2">
                <img src={baseDomain + alumniAssets.supportAssets6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerGrid
