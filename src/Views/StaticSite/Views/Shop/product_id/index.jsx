import { Link } from 'gatsby'
import React from 'react'
import CommonBannerShop from '../../../Components/CommonBannerShop'
import MenuToolTip from '../../../Components/MenuTooltip/MenuTooltip'
import ShopCard from '../../../Components/ShopCard/ShopCard'
import { productData } from '../../../utils/productData'
import './styles.css'

const ProductDetail = () => {
  let colors = ['red', 'green', 'yellow', 'black', 'white', 'violet']

  return (
    <div className="details-container">
      <CommonBannerShop innerNav={false} />
      <br />
      <br />
      <br />
      <br />
      <div className="details-search-container">
        <MenuToolTip />
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          id="search"
          name="search"
        />
      </div>
      <div>
        <span
          style={{
            color: 'grey',
            fontSize: '1.2rem',
            marginTop: '-1rem',
            marginBottom: '2rem',
          }}
        >
          {productData.category} &gt; {productData.name}
        </span>
      </div>
      <br />
      <div className="details-card-container">
        <div className="details-card">
          <div className="details-card-first-section">
            <div className="product-details-text">
              <h2 className="heading-1">{productData.name}</h2>
              <h2 className="heading-1">{productData.category}</h2>
              <h2 className="heading-1">{productData.price}</h2>
            </div>
            <div></div>
          </div>
          <div className="details-card-middle-section">
            <div>
              <h5 style={{ color: 'white', marginTop: '3rem' }}>
                {productData.description}
              </h5>
              <h5 style={{ color: 'white', marginTop: '1rem' }}>
                Available in multiple colours
              </h5>
              <div>
                {colors.map((item,i) => (
                  <span key={i}
                    className="dot"
                    style={{ backgroundColor: `${item}` }}
                  ></span>
                ))}
              </div>
            </div>
            <div className="big-image-container">
              <img src={productData.img} alt="Avatar" className="big-image" />
            </div>
          </div>
          <div className="details-card-last-section">
            <div className="buy-now-button-container">
              <Link to="/shop/checkout">
                <button className="buy-now-button">Buy Now</button>
              </Link>
            </div>
            <div className="details-card-image-container">
              <img src={productData.img} alt="Avatar" className="small-image" />
              <img src={productData.img} alt="Avatar" className="small-image" />
              <img src={productData.img} alt="Avatar" className="small-image" />
            </div>
          </div>
        </div>
        <div className="details-card-mobile">
          <div className="mobile-first-section">
            <h2 className="heading-1">{productData.name}</h2>
            <h2 className="heading-1">{productData.category}</h2>
            <h2 className="heading-1">{productData.price}</h2>
          </div>
          <div className="mobile-second-section">
            <h5 style={{ color: 'white', marginTop: '3rem' }}>
              {productData.description}
            </h5>
            <h5 style={{ color: 'white', marginTop: '1rem' }}>
              Available in multiple colours
            </h5>
            <div>
              <span className="dot" style={{ backgroundColor: 'red' }}></span>
              <span className="dot" style={{ backgroundColor: 'green' }}></span>
              <span
                className="dot"
                style={{ backgroundColor: 'yellow' }}
              ></span>
              <span className="dot" style={{ backgroundColor: 'black' }}></span>
              <span className="dot" style={{ backgroundColor: 'white' }}></span>
              <span
                className="dot"
                style={{ backgroundColor: 'violet' }}
              ></span>
            </div>
          </div>
          <div className="mobile-last-section">
            <img src={productData.img} alt="Avatar" className="small-image" />
            <img src={productData.img} alt="Avatar" className="small-image" />
            <img src={productData.img} alt="Avatar" className="small-image" />
          </div>
          <div className="mobile-button-section">
            <Link to="/shop/checkout">
              <button className="buy-now-button">Buy Now</button>
            </Link>
          </div>
        </div>
        <div>
          <span className="heading-1">Other similar items :</span>
          <div className="details-render-cards">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
        </div>
        <div>
          <button className="view-more-button">View More</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
