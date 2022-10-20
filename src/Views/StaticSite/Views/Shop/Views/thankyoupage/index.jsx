import React from 'react'

import './style.scss'
import { useNavigate } from 'react-router-dom'
import { legacy1 } from '../../../../assets/icons/icon'

const ShopThankyou = () => {
  const greetModal= true

  const navigate = useNavigate()

  
  return (
    <div className="greeting-thankyou">
      {greetModal && (
        <div className="greeting-border">
          <span className="greeting-close" onClick={() => navigate('/shop')}>
            &times;
          </span>
          <div className="greeting-icon">{legacy1}</div>
          <h1 className="greeting-heading">Order Placed Successfully</h1>
          <p className="greeting-paragraph">Thank you for shopping with us</p>

          <button className="browse-more" onClick={() => navigate('/shop')}>
            Browse More Products
          </button>
        </div>
      )}
    </div>
  )
}

export default ShopThankyou
