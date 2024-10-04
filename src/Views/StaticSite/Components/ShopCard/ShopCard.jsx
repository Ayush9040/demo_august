import React from 'react'
import './styles.scss'
import { CartButton } from '../../assets/icons/icon'
import { useNavigate } from 'react-router-dom'
import { trackProductClicked } from '../../../../CleverTap/shopEvents'
const ShopCard = ({
  title = 'Yoga chakra Mat Balance your mind',
  price = '395',
  thumbnail = 'https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_1280.jpg',
  productId,
  addCart,
  buyProduct,
  currency,
  discount,
  stockCount
}) => {
  let colorA = '#CE7780'
  let colorB = '#9A565B'

  const navigate = useNavigate()


  const viewDetailsProduct = () => {
    trackProductClicked({
      productName: title,
      productId: productId,
      // category: product.category,
      productPrice: price,
      // quantity: product.quantity,
      stockAvailability: stockCount,
      // nextPageUrl: '/next-page-url', 
      productUrl: window.location.href,
      // checkoutUrl: '/checkout-url', 
      // color: product.color,
      discount: discount,
      discountedPrice: price - discount,
      // gender: product.gender,
      // productSize: product.size,
      // language: product.language,
      // material: product.material,
      // printed: product.printed,
  });
 
    navigate(`product/${productId}`)
  }


  return (
    <div className="card" onClick={viewDetailsProduct}>
      <div className="card-img-container">
        <img
          className="card-img"
          src={thumbnail}
          alt="Avatar"
          loading='lazy'
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
            { currency==='INR'? `₹ ${price}`:`$ ${price}`}
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
