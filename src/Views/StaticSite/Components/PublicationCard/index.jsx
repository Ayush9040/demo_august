import React from 'react'
import CommonBtn from '../commonbtn'
import './style.scss'
const PublicationCard = ({ color, name= 'Name', price, productImg, currency }) => {
  return (
    <div className='publication-card' >
      <div className='book-image' >
        <img src={productImg} />
        <h4>{currency === 'INR' ? '₹' : '$'}&nbsp;{price}</h4>
      </div>
      <div className='book-details' style={{ backgroundColor:`${color}` }} >
        <p>{name}</p>
        <CommonBtn text={'Add to cart'} />
      </div>
    </div>
  )
}

export default PublicationCard