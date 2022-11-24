import React, { Fragment } from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllProductsAPI,getProductByCategory, getAllCategories, searchProduct, updateCart, createCart } from '../../Shop.api'
import ShopCard from '../../../../Components/ShopCard/ShopCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Pagination from 'react-js-pagination'
import MessageModal from '../../../../Components/MessageModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getActiveCartData, updateCartData } from '../../Shop.action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate,useSearchParams } from 'react-router-dom'
import baseDomain from '../../../../assets/images/imageAsset'
import { banner } from '../../../../assets/images/imageAsset'
import { updateLocalCart } from '../../helpers/helper'

const Shop = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { activeCartId } = useSelector(state=>state.shop)
  const { isLoggedIn } = useSelector(state=>state.auth)
  const [Params] = useSearchParams()

  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 12 })
  const [count, setCount] = useState(0)
  const [categories,setCategories] = useState([])
  const [ modal,setModal ] = useState(false)
  const [search,setSearch] =useState('')
  const [searched,isSearched] = useState(false)

  

  const fetchAllCategories = async()=>{
    const { data } = await getAllCategories()
    setCategories(data.data)
  }

  const getAllProducts = async(page, limit) => {
    if(Params.get('category')){
      const { data } = await getProductByCategory(Params.get('category'))
      setProducts(data.data)
      return
    }
    const { data } = await fetchAllProductsAPI(page, limit)
    setProducts(data.data)
    setCount(data.count)
  }

  const productByCategory = async(category)=> {

    if(category==='all'){
      getAllProducts()
      navigate('/shop')
    }
    else{
      navigate(`/shop/?category=${ categories?.find(item=>item._id===category)?._id }`)
      const { data } = await getProductByCategory(category)
      setProducts(data.data)
    }
  }

  const shopPagination = (num) => {
    setPagination({ ...pagination, page: num, limit: 12 })
  }
  const searchProductAction = async()=>{
    try{
      const { data } = await searchProduct( search )
      setProducts(data.data)
      // setPagination({ page:1,limit:100 })
      setCount(10)
      isSearched(true)
    }catch(err){
      getAllProducts(1,10)
    }
  }

  useEffect(() => {
    fetchAllCategories()
    getAllProducts(pagination.page, pagination.limit)
    if(localStorage.getItem('cart')){
      dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    }
  }, [ pagination,Params.get('category') ])


  useEffect(()=>{
    console.log('test')
  },[ categories ])


  const addCart = (idx, e) => {
    e.stopPropagation()
    localStorage.setItem('cart',JSON.stringify(updateLocalCart(idx)))
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    isLoggedIn && activeCartId ?  updateCart(activeCartId,{ items:JSON.parse(localStorage.getItem('cart')) }) : createCart({ items:JSON.parse(localStorage.getItem('cart')) })
    dispatch(getActiveCartData())
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
  const buyProduct = (idx,e) => {
    e.stopPropagation()
    localStorage.setItem('cart',JSON.stringify(updateLocalCart(idx)))
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    isLoggedIn && activeCartId ?  updateCart(activeCartId,{ items:JSON.parse(localStorage.getItem('cart')) }) : createCart({ items:JSON.parse(localStorage.getItem('cart')) })
    dispatch(getActiveCartData())
    navigate('/shop/cart')
  }

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
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
            <select onChange={ (e)=>{ productByCategory(e.target.value) } } className="shop_categories">
              <option value='all' >All Categories</option>
              { categories.map((item,i)=><option key={i} selected={ item._id===Params.get('category') } value={item._id} >{ item.name }</option>) }
            </select>
            <div className="shop_search">
              <label>
                <input type={'text'} value={ search } onChange={(e)=>{ setSearch(e.target.value) }}  placeholder="Search" />
                <span onClick={searchProductAction} >
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </label>
            </div>
          </div>
          <div className="products-section">
            <div className="banner-section">
              <Slider {...settings}>
                <Link to='/shop/?category=626c33ed9a61db0013224fad' >
                  <img className="banner-img" src={`${baseDomain}${banner.storeMats}`} />
                </Link>
                <Link to='/shop/?category=626cbc599a61db001322518e' >
                  <img className="banner-img" src={`${baseDomain}${banner.storeTshirts}`}/>
                </Link>
                <Link to='/shop/?category=626bb3a23916070012713dd1' >
                  <img className="banner-img" src={`${baseDomain}${banner.storeBooks}`} />
                </Link>
              </Slider>
            </div>
            {!searched && <div className="products-tray">
              {products.map((item, i) => (
                <Fragment key={i}>
                  <ShopCard
                    title={item.name}
                    price={item.price}
                    thumbnail={item.productThumbnail}
                    productId={item._id}
                    addCart={addCart}
                    buyProduct={buyProduct}
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
            </div>}
            {searched && products.length>0 ?
              <div className="products-tray">
                {products.map((item, i) => (
                  <Fragment key={i}>
                    <ShopCard
                      title={item.name}
                      price={item.price}
                      thumbnail={item.productThumbnail}
                      productId={item._id}
                      addCart={addCart}
                      buyProduct={buyProduct}
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
              </div>:<h1 style={{ textAlign:'center' }} >{searched && 'No result found'}</h1>}
          </div>
          {!searched && <div className="shop_pagination">
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={pagination.limit}
              totalItemsCount={count}
              pageRangeDisplayed={3}
              onChange={(e) => shopPagination(e)}
            />
          </div>}
        </div>
      </div>
      {modal && <MessageModal type='WARNING' message='Please login first!' nav='/user/sign-in' closePopup={setModal} /> }
    </>
  )
}

export default Shop
