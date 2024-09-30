import React, { Fragment } from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllProductsAPI,getProductByCategory, getAllCategories, searchProduct, updateCart, createCart, getBanner } from '../../Shop.api'
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
// import baseDomain from '../../../../assets/images/imageAsset'
// import { banner } from '../../../../assets/images/imageAsset'
import { updateLocalCart } from '../../helpers/helper'
import Footer from '../../../../Components/Footer'
import { handleCTAddToCart, handleCTBuyNowStep1 } from '../../../../../../CleverTap/shopEvents'
import ReactGA from 'react-ga';

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
  const { location } = useSelector(state=>state.location)
  const [banner, setBanner] = useState([])
  const [ page, setPage] = useState(1)
 
  const fetchAllCategories = async()=>{
    const { data } = await getAllCategories()
    setCategories(data.data)
  }

  const getAllProducts = async(page, limit) => {
    if(Params.get('category')){
      const { data } = await getProductByCategory(Params.get('category'), page, limit)
      setProducts(data.data)
      setCount(data.count)
      if(data?.data?.length <= 24 && data?.data?.length >= 12) {
        setPage(2)
      } else if (data?.data?.length <12){setPage(1)}
      else {setPage(3) }
      return
    }
    
    const { data } = await fetchAllProductsAPI(page, limit)
    setProducts(data.data)
    console.log(data,'cat')
    setCount(data.count)
    setPage(3)
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

  const onEnter = (e) =>{
    if (e.keyCode === 13) {
      searchProductAction()
    }
  }

  const getAllBanner = async()=>{
    const { data } = await getBanner()
    setBanner(data.data)
    console.log(data.data,'banner')
  }
  
  useEffect(() => {
    fetchAllCategories()
    getAllProducts(pagination.page, pagination.limit)
    if(localStorage.getItem('cart')){
      dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    }
    window.scrollTo(0,0)
  }, [ pagination,Params.get('category') ])


  useEffect(()=>{
    console.log('test')
  },[ categories ])

  useEffect(()=>{getAllBanner()},[])

  // const gtag = window.google_tag_manager;

  const addCart = async(idx, e) => {
    e.stopPropagation()
    localStorage.setItem('cart',JSON.stringify(updateLocalCart(idx)))
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    isLoggedIn ? activeCartId ?  await updateCart(activeCartId,{ items:JSON.parse(localStorage.getItem('cart')) }) : await createCart({ items:JSON.parse(localStorage.getItem('cart')) }):null
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

    const details = localStorage.getItem('cart');
    console.log('one prod ', JSON.parse(details));
    console.log('one iddx ', idx, e);
    console.log('All Products', products)


    const product = products.find(product => product._id === idx);
    // console.log('categories finding ', categories);
    const findCategory = categories.find(category => product.categoryId === category._id)
    // console.log('findCategory ', findCategory);
    const qty = JSON.parse(details).find(item => item.productId === idx);
    console.log('qty ', qty)

   

    if(product) {
      // ReactGA.initialize('374034779', { debug: true })
      console.log("react GA", ReactGA);
      ReactGA.pageview(window.location.href);
      ReactGA.event({
        action: 'add_to_cart',
       currency: location !=='IN'?'USD':'INR',
        value: product?.price * qty?.quantity,
        items: [{
          item_name: product?.name,
          item_id: product?._id,
          price: product?.price,
          quantity: qty?.quantity
        }]
      });

    }

    

if (product) {
    console.log('Product details of the clicked item:', product);
    // Now you can use the `product` object to pass its details to your `addToCart` function
    // addCart(idx, event, product);
    handleCTAddToCart({
      eventName: "Add_To_Cart_Step1",
      productName: product?.name,
      productId: product?._id,
      productUrl: 'product/'+product?._id,
      productCategory: findCategory?.name,
      productPrice: product?.price,
      quantity: qty?.quantity,
      stockAvailability: product?.stockCount,
      checkoutUrl: '/shop/cart',
      pageName: "Shop Page",
      // gender: findCategory.name, 
      // productSize: findCategory.name,
      // language,
      // material: findCategory.name,
      // color,
      // printed: findCategory.name,
  })
} else {
    console.error('Product not found for the given ID:', idx);
}
    

  }
  const buyProduct = async(idx,e) => {
    e.stopPropagation()
    localStorage.setItem('cart',JSON.stringify(updateLocalCart(idx)))
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    isLoggedIn ? activeCartId ?  await updateCart(activeCartId,{ items:JSON.parse(localStorage.getItem('cart')) }) : await createCart({ items:JSON.parse(localStorage.getItem('cart')) }):null
    dispatch(getActiveCartData())


    const details = localStorage.getItem('cart');
    console.log('one prod ', JSON.parse(details));
    console.log('one iddx ', idx, e);
    console.log('All Products', products)


    const product = products.find(product => product._id === idx);
    // console.log('categories finding ', categories);
    const findCategory = categories.find(category => product.categoryId === category._id)
    // console.log('findCategory ', findCategory);
    const qty = JSON.parse(details).find(item => item.productId === idx);
    console.log('qty ', qty)
    

if (product) {
    console.log('Product details of the clicked item:', product);
    // Now you can use the `product` object to pass its details to your `addToCart` function
    // addCart(idx, event, product);
    handleCTBuyNowStep1({
      eventName: "Buy Now 1",
      productName: product?.name,
      productId: product?._id,
      category: findCategory?.name,
      productPrice: product?.price,
      quantity: qty?.quantity,
      stockAvailability: product?.stockCount,
      // checkoutUrl,
      pageName: "Shop Page",
      productUrl: 'product/'+product?._id,
      // gender,
      // color,
      discount: product?.discount,
      // discountedPrice,
      // productSize,
      // language,
      // material,
      // printed
    })
} else {
    console.error('Product not found for the given ID:', idx);
}
    


    navigate('/shop/cart')
  }

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    autoplay: true,
    autoPlaySpeed: 500,
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
            <div className="shop_search" onKeyDown={(e)=>{onEnter(e)}} >
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
                {banner.map((item, idx)=>{
                  return(
                    <>
                      {
                        item.type === 'CATEGORY' && <Link to={`/shop/?category=${item.categoryId}`}>
                          <img key={idx} className='banner-img' src={item.imageLink} />
                        </Link>
                      }
                      {
                        item.type === 'PRODUCT' && <Link to={`/shop/product/${item.productId}`}>
                          <img key={idx} className='banner-img' src={item.imageLink} />
                        </Link>
                      }
                      
                    </>)
                })}
              </Slider>
            </div>
            {!searched && <div className="products-tray">
              {products.map((item, i) => (
                <Fragment key={i}>
                  <ShopCard
                    title={item.name}
                    price={location==='IN' ?item.price : item.priceInternational}
                    thumbnail={item.productThumbnail}
                    productId={item._id}
                    addCart={addCart}
                    currency = { location==='IN'?'INR':'USD' }
                    buyProduct={buyProduct}
                    discount={item.discount}
                    stockCount={item.stockCount}
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
                {products.map((item, i) =>  (
                 
                  
                  <Fragment key={i}>
                    <ShopCard
                      title={item.name}
                      price={ location==='IN' ?item.price : item.priceInternational }
                      thumbnail={item.productThumbnail}
                      productId={item._id}
                      addCart={addCart}
                      currency = { location==='IN'?'INR':'USD' }
                      buyProduct={buyProduct}
                      discount={item.discount}
                      stockCount={item.stockCount}
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
              pageRangeDisplayed={page}
              onChange={(e) => shopPagination(e)}
            />
          </div>}
        </div>
        <Footer/>
      </div>
      {modal && <MessageModal type='WARNING' message='Please login first!' nav='/user/sign-in' closePopup={setModal} /> }
    </>
  )
}

export default Shop
