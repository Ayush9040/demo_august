import React from 'react'
import './style.scss'
import baseDomain,{ courseAssets } from '../../assets/images/imageAsset'

const HistoryCard = ({ productImg = `${baseDomain}${courseAssets.courseAsset1}`,itemName='500 Hour 6 Months Online Weekend - 18th Dec 2021', timeline='18th December 2021 - 18th May 2022', status='On-going' }) => {
  return (
    <div style={status==='On-going' ? { border:'1px solid #BE4F31',background:'#fff' }:{}} className='history-card' >
      <div className='purchase-img' >
        <img  src={ productImg } />
      </div>
      <div className='purchase-details' >
        <p>{ itemName }</p>
        <h4>{ timeline }</h4>
      </div>
      <h3 className='purchase-status' >{ status }</h3>
    </div>
  )
}

export default HistoryCard