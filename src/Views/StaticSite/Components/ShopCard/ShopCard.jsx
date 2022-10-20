import React from 'react'
import './styles.scss'
import { CartButton } from '../../assets/icons/icon'
import { useNavigate } from 'react-router-dom'

const ShopCard = ({
  title = 'Yoga chakra Mat Balance your mind',
  price = '395',
  thumbnail = 'https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_1280.jpg',
  productId,
  addCart,
  buyProduct
}) => {
  let colorA = '#CE7780'
  let colorB = '#9A565B'

  const navigate = useNavigate()


  return (
    <div className="card" onClick={()=>navigate(`product/${productId}`)}>
      <div className="card-img-container">
        <img
          className="card-img"
          src={thumbnail}
          alt="Avatar"
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
          ₹ {price}
          </p>
          <div>
            <button type="button" className="cart-button" onClick={(e)=>(addCart(productId,e))}>
              <span className="svg-width">{CartButton}</span> Add to cart
            </button>
            <button type="button" className="cart-button" onClick={(e)=>(buyProduct(productId,e))}>
              <span className="svg-width">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ShopCard
