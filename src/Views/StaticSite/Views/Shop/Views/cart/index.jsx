import React from 'react'
import './style.scss'

const AddToCart = () => {
  return (
    <div className="cart_div">
      <div className="cart_upper_div">
        <div className="cart_detail">
          <div className="cart_img">image</div>
          <div className="cart_title">title of the product added in the cart</div>
        </div>
        <div className="cart_price">price</div>
      </div>
      <div className="cart_lower_div"></div>
    </div>
  )
}

export default AddToCart