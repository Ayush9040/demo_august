import React, { Fragment } from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllProductsAPI,getProductByCategory, getAllCategories } from '../../Shop.api'
import ShopCard from '../../../../Components/ShopCard/ShopCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Pagination from 'react-js-pagination'
import MessageModal from '../../../../Components/MessageModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 10 })
  const [count, setCount] = useState(0)
  const [categories,setCategories] = useState([])
  const [ modal,setModal ] = useState(false)

  const getAllProducts = async(page, limit) => {
    const { data } = await fetchAllProductsAPI(page, limit)
    setProducts(data.data)
    setCount(data.count)
  }
  const fetchAllCategories = async()=>{
    const { data } = await getAllCategories()
    console.log(data,'categories')
    setCategories(data.data)
  }

  const shopPagination = (num) => {
    setPagination({ ...pagination, page: num, limit: 10 })
  }

  useEffect(() => {
    getAllProducts(pagination.page, pagination.limit)
    fetchAllCategories()
  }, [pagination])

  const addLocal = (productID) => {
    if (!localStorage.getItem('cart')) return [{ productId:productID,quantity:1 }]
    const prevCart = JSON.parse(localStorage.getItem('cart'))
    if(prevCart.some(item=>item.productId===productID)){
      prevCart.forEach(element => {
        if(element.productId===productID){
          element.quantity = element.quantity+1
        }
      })
      return prevCart
    }else{
      return [...prevCart,{ productId:productID, quantity:1 }]
    }
  }

  const addCart = async(idx, e) => {
    e.stopPropagation()
    const addProduct = await products.find((item) => item._id === idx)
    await localStorage.setItem('cart', JSON.stringify(addLocal(addProduct._id)))
    toast.success('Item Added to Cart Successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

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

  const productByCategory = async(category)=> {
    
    if(category==='all')return getAllProducts() 
    // navigate(`/shop/?category=${ categories?.find(item=>item._id===category)?.name }`)
    const { data } = await getProductByCategory(category)
    setProducts(data.data)
  }

  return (
    <>
      <div className="shop">
        <InnerNavComponent abc={shopNav} />
        <div className="shop-page">
          <div className="category-search">
            <select onChange={ (e)=>{ productByCategory(e.target.value) } } className="shop_categories">
              <option value='all' >All Categories</option>
              { categories.map((item,i)=><option key={i} value={item._id} >{ item.name }</option>) }
            </select>
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
                  <ToastContainer
                    // position="top-right"
                    // autoClose={3000}
                    // hideProgressBar={false}
                    // newestOnTop={false}
                    // closeOnClick
                    // rtl={false}
                    // pauseOnFocusLoss
                    // draggable
                    // pauseOnHover
                    // theme="light"
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
      {modal && <MessageModal type='WARNING' message='Please login first!' nav='/user/sign-in' closePopup={setModal} /> }
    </>
  )
}

export default Shop
