import React from 'react'
import './styles.css'
import { CartButton } from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import { productData } from '../../utils/productData'

const ShopCard = ({
  title = 'Yoga chakra Mat Balance your mind',
  price = '395',
  thumbnail = 'https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_1280.jpg',
  currency,
}) => {
  let colorA = '#CE7780'
  let colorB = '#9A565B'
  console.log(currency)

  return (
    <div className="card">
      <div className="card-img-container">
        <img
          className="card-img"
          src={thumbnail}
          alt="Avatar"
          // style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        className="text-container"
        style={{
          background: `transparent linear-gradient(90deg, ${colorA} 0%, ${colorB} 100%) 0% 0% `,
        }}
      >
        <div className="card-title">
          <h4 className="text-white">{title}</h4>
        </div>
        <div className="price-container">
          <p className="text-white">
            {currency === 'INR' ? '₹' : '$'}&nbsp;{price}
          </p>
          <Link to="/shop/checkout">
            <button type="button" className="cart-button">
              <span className="svg-width">{CartButton}</span> Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShopCard
