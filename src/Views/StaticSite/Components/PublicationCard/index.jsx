import React from 'react'
import CommonBtn from '../commonbtn'
import './style.scss'
const PublicationCard = ({ color, name= 'Name' }) => {
  return (
    <div className='publication-card' >
      <div className='book-image' >
        <div></div>
        <h4>$ 299</h4>
      </div>
      <div className='book-details' style={{ backgroundColor:`${color}` }} >
        <h2>{name}</h2>
        <CommonBtn text={'Add to cart'} />
      </div>
    </div>
  )
}

export default PublicationCard