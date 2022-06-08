/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { arrowIcon } from '../../assets/icons/icon'
import CommonBannerNav1 from '../../Components/CommonBannerShop'
import MenuToolTip from '../../Components/MenuTooltip/MenuTooltip'
import ShopCard from '../../Components/ShopCard/ShopCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './styles.css'
import axios from 'axios'

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [key, setKey] = useState()

  const [product, setProduct] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://ecom-dev-be.theyogainstituteonline.org/v1/product/publishedproduct'
      )
      .then((data) => data.data)
      .then((data) => {
        setProduct(data.data)
        return data.data
      })
    axios
      .get('https://ecom-dev-be.theyogainstituteonline.org/v1/category')
      .then((data) => data.data)
      .then((data) => {
        setCategories(data.data)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="shop-container">
      <CommonBannerNav1 innerNav={false} />
     
      <div className="search-container">
        <MenuToolTip setKey={setKey} />
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          id="search"
          name="search"
        />
      </div>
      <div className="shop-card-container">
        <Slider {...settings}>
          <div className="banner-section">
            <h1 className="text-align-center shop-header-text">
              Featured Banner Section
            </h1>
          </div>
          <div className="banner-section">
            <h1 className="text-align-center shop-header-text">
              Featured Banner Section
            </h1>
          </div>
          <div className="banner-section">
            <h1 className="text-align-center shop-header-text">
              Featured Banner Section
            </h1>
          </div>
        </Slider>
        <div className="sort-container">
          <h3 className="heading-2">Sort By</h3>
          <span className="change-svg-width">{arrowIcon}</span>
        </div>
        <div className="render-cards">
          {product?.map((item, i) => {
            return (
              <ShopCard
                key={i}
                title={item.name}
                currency={item.currency}
                thumbnail={item.productThumbnail}
                price={item.price}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Shop
