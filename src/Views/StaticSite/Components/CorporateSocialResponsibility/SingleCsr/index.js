import React, { useState } from 'react'
import './style.scss'
import baseDomain, { homeAssets } from '../../../assets/images/imageAsset'
import CsrModal from '../CsrModal'
import CommonBannerNavPrimary from '../../CommonBannerNavPrimary'

const SingleCsr = () => {

  const [showModal,setShowModal]=useState(false)
  return (
    <div className="csr-main-container">
      <CommonBannerNavPrimary/>
      <div className="csr-heading">
        <h1>Tree Plantation drive</h1>
        <div className="csr-bottom-line"></div>
      </div>
      <div className="sub-div">
        <div className="sub-div-img">
          <img src={`${baseDomain}${homeAssets.homeAsset10}`} />
        </div>
      </div>
      <div className="last-div">
        <p>
          We are aware of the immediate need to protect our environment.
          Campaigns are conducted throughout the year for public awareness and
          multiple initiatives are undertaken to plant more trees and to expand
          the green cover. Through these efforts, we raise awareness locally and
          work to preserve our environment for generations to come.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          ante id nunc vehicula pharetra nec vitae est. Sed diam dui, luctus sed
          velit quis, placerat consequat felis. Vivamus cursus in mauris at
          dignissim. Etiam venenatis semper pharetra. Duis ut diam eros. In hac
          habitasse platea dictumst. Nam tincidunt nisi metus, et dignissim
          ligula cursus ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          ante id nunc vehicula pharetra nec vitae est. Sed diam dui, luctus sed
          velit quis, placerat consequat felis. Vivamus cursus in mauris at
          dignissim. Etiam venenatis semper pharetra. Duis ut diam eros. In hac
          habitasse platea dictumst. Nam tincidunt nisi metus, et dignissim
          ligula cursus ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          ante id nunc vehicula pharetra nec vitae est. Sed diam dui, luctus sed
          velit quis, placerat consequat felis. Vivamus cursus in mauris at
          dignissim. Etiam venenatis semper pharetra. Duis ut diam eros. In hac
          habitasse platea dictumst. Nam tincidunt nisi metus, et dignissim
          ligula cursus ut.
        </p>
      </div>
      <div className="csr-single-btn">
        <button onClick={()=>setShowModal(true)}> Support Us</button>
      </div>
      <CsrModal  setShowModal={setShowModal} showModal={showModal}/>
    </div>
  )
}

export default SingleCsr
