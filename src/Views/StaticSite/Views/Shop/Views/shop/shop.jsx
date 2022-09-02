import React, { Fragment } from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllProductsAPI } from '../../Shop.api'
import ShopCard from '../../../../Components/ShopCard/ShopCard'

const Shop = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async() => {
    const { data } = await fetchAllProductsAPI()
    setProducts(data.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  console.log(products, 'dd')

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    autoplay: true,
    autoPlaySpeed: 5000,
  }

  const shopNav = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  return (
    <>
      <div className='shop'>
        <InnerNavComponent abc={shopNav} />
        <div className='shop-page'>
          <div className='category-search'>
            <div>All Categories</div>
            <div>Search</div>
          </div>
          <div className='products-section'>
            <div className='banner-section'>
              <Slider {...settings}>
                <div className='banner'>
                  <div className='banner-img'>Banner Image</div>
                </div>
                <div className='banner'>
                  <div className='banner-img'>Banner Image</div>
                </div>
                <div className='banner'>
                  <div className='banner-img'>Banner Image</div>
                </div>
              </Slider>
            </div>
            <div className='products-tray'>
              {products.map((item, i) => (
                <Fragment key={i}>
                  <ShopCard
                    title={item.name}
                    price={item.price}
                    thumbnail={item.productThumbnail}
                    productId={item._id}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
