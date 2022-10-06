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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Pagination from 'react-js-pagination'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 10 })
  const [count, setCount] = useState(0)

  const getAllProducts = async(page, limit) => {
    const { data } = await fetchAllProductsAPI(page, limit)
    setProducts(data.data)
    setCount(data.count)
  }

  const shopPagination = (num) => {
    setPagination({ ...pagination, page: num, limit: 10 })
  }

  useEffect(() => {
    getAllProducts(pagination.page, pagination.limit)
  }, [pagination])

  const addLocal = (productDetail) => {
    if (!localStorage.getItem('cart')) return [productDetail]
    const prevCart = JSON.parse(localStorage.getItem('cart'))
    return [...prevCart, productDetail]
  }

  const addCart = (idx, e) => {
    e.stopPropagation()
    const addProduct = products.find((item) => item._id === idx)
    localStorage.setItem('cart', JSON.stringify(addLocal(addProduct)))
  }

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
      <div className="shop">
        <InnerNavComponent abc={shopNav} />
        <div className="shop-page">
          <div className="category-search">
            <div className="shop_categories">All Categories</div>
            <div className="shop_search">
              <label>
                <input type={'text'} placeholder="Search" />
                <FontAwesomeIcon icon={faSearch} />
              </label>
            </div>
          </div>
          <div className="products-section">
            <div className="banner-section">
              <Slider {...settings}>
                <div className="banner">
                  <div className="banner-img">Banner Image</div>
                </div>
                <div className="banner">
                  <div className="banner-img">Banner Image</div>
                </div>
                <div className="banner">
                  <div className="banner-img">Banner Image</div>
                </div>
              </Slider>
            </div>
            <div className="products-tray">
              {products.map((item, i) => (
                <Fragment key={i}>
                  <ShopCard
                    title={item.name}
                    price={item.price}
                    thumbnail={item.productThumbnail}
                    productId={item._id}
                    addCart={addCart}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="shop_pagination">
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={pagination.limit}
              totalItemsCount={count}
              pageRangeDisplayed={3}
              onChange={(e) => shopPagination(e)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
