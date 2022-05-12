import React from 'react'
import { deleteIcon } from '../../assets/icons/icon'
import './styles.css'
import { productData } from '../../utils/productData'

const CheckoutCard = () => {
  let quantity = 2
  return (
    <div className="checkout-card-container">
      <div className="checkout-card-img-container">
        <img
          className="checkout-card-img"
          src={productData.img}
          alt="Avatar"
        />
      </div>
      <div className="checkout-card-right-section">
        <div className="space-between-content">
          <div>
            <h3 className="heading-2">{productData.name}</h3>
            <h3 className="heading-2">{productData.category}</h3>
          </div>
          <div className="quantity-button-wrapper">
            <button className="quantity-button" type="button">
              {quantity}
            </button>
            <span style={{ cursor: 'pointer' }} className="change-svg-width">
              {deleteIcon}
            </span>
          </div>
        </div>
        <div>
          <b>Price</b>
          <h2 className="checkout-price-text">{productData.price}</h2>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCard
