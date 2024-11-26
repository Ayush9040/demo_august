import React, { useEffect, useState, useRef } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
//import ShopCard from '../../../../Components/ShopCard/ShopCard'
import CommonBtn from '../../../../Components/commonbtn'
import { fetchSingleProduct, updateCart, createCart } from '../../Shop.api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartData, getActiveCartData } from '../../Shop.action'
import { ToastContainer, toast } from 'react-toastify'
import { updateLocalCart } from '../../helpers/helper'
import { handleCTAddToCart, handleCTBuyNowStep1 } from '../../../../../../CleverTap/shopEvents'
import ReactGA from 'react-ga4';

const SingleProduct = () => {
  const { productID } = useParams()
  const { activeCartId } = useSelector((state) => state.shop)
  const { isLoggedIn } = useSelector((state) => state.auth)

  const prevRef = useRef(null)

  const singleProduct = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const dispatch = useDispatch()

  const [productDetail, setProductDetail] = useState({})
  const [thumbnail, setThumbnail] = useState()
  const [productImages, setProductImages] = useState([])
  const navigate = useNavigate()
  const { location } = useSelector(state => state.location)
  const getSingleProducts = async () => {
    const { data } = await fetchSingleProduct(productID)
    setProductDetail(data.data)
    setThumbnail(data?.data?.productThumbnail)
    setProductImages(data?.data?.productImage)
  }

  useEffect(() => {
    getSingleProducts()
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
  }, [])
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    if (productDetail?.name) {
      setIsPageReady(true);
    }
  }, [productDetail?.name]);

  useEffect(() => {
    if (isPageReady) {
      ReactGA.event('view_item', {
        currency: location !== 'IN' ? 'USD' : 'INR',
        value: productDetail?.price,
        items: [{
          item_name: productDetail?.name,
          item_id: productDetail?._id,
          price: productDetail?.price,
          quantity: 1
        }]
      });
      console.log('view_item', {
        currency: location !== 'IN' ? 'USD' : 'INR',
        value: productDetail?.price,
        items: [{
          item_name: productDetail?.name,
          item_id: productDetail?._id,
          price: productDetail?.price,
          quantity: 1
        }]
      })
    }
  }, [isPageReady]);

  const addCart = (idx) => {
    localStorage.setItem('cart', JSON.stringify(updateLocalCart(idx)))
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    isLoggedIn ? activeCartId
      ? updateCart(activeCartId, {
        items: JSON.parse(localStorage.getItem('cart')),
      })
      : createCart({ items: JSON.parse(localStorage.getItem('cart')) }) : null
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
    console.log('one iddx ', idx);
    console.log('All Products Now', productDetail)


    // const product = productDetail.find(product => product._id === idx);
    // console.log('categories finding ', categories);
    // const findCategory = productDetail.find(category => product.categoryId === category._id)
    // console.log('findCategory ', findCategory);
    const qty = JSON.parse(details).find(item => item.productId === idx);
    console.log('qty ', qty)

    if (productDetail) {

      ReactGA.event('add_to_cart', {
        currency: location !== 'IN' ? 'USD' : 'INR',
        value: productDetail?.price,
        items: [{
          item_name: productDetail?.name,
          item_id: productDetail?._id,
          price: productDetail?.price,
          quantity: 1
        }]
      });
    }


    if (productDetail) {
      console.log('Product details of the clicked item:', productDetail);
      // Now you can use the `product` object to pass its details to your `addToCart` function
      // addCart(idx, event, product);
      handleCTAddToCart({
        eventName: "Add_To_Cart_Step2",
        productName: productDetail?.name,
        productId: productDetail?._id,
        productUrl: window.location.href,
        productCategory: productDetail?.categoryId?.name,
        productPrice: productDetail?.price,
        quantity: qty?.quantity,
        stockAvailability: productDetail?.stockCount,
        // checkoutUrl: '/shop/cart',
        pageName: window.location.href,
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

  const buyProduct = () => {
    localStorage.setItem(
      'cart',
      JSON.stringify(updateLocalCart(productDetail?._id))
    )
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
    isLoggedIn ? activeCartId
      ? updateCart(activeCartId, {
        items: JSON.parse(localStorage.getItem('cart')),
      })
      : createCart({ items: JSON.parse(localStorage.getItem('cart')) }) : null
    dispatch(getActiveCartData())

    const details = localStorage.getItem('cart');
    console.log('one prod ', JSON.parse(details));
    // console.log('one iddx ', idx);
    console.log('All Products Now', productDetail)


    // const product = productDetail.find(product => product._id === idx);
    // console.log('categories finding ', categories);
    // const findCategory = productDetail.find(category => product.categoryId === category._id)
    // console.log('findCategory ', findCategory);
    const qty = JSON.parse(details).find(item => item.productId === productDetail._id);
    console.log('qty ', qty)


    if (productDetail) {
      console.log('Product details of the clicked item:', productDetail);
      // Now you can use the `product` object to pass its details to your `addToCart` function
      // addCart(idx, event, product);
      handleCTBuyNowStep1({
        eventName: "Buy Now 2",
        productName: productDetail?.name,
        productId: productDetail?._id,
        productUrl: window.location.href,
        productCategory: productDetail?.categoryId?.name,
        productPrice: productDetail?.price,
        quantity: qty?.quantity,
        stockAvailability: productDetail?.stockCount,
        // checkoutUrl: '/shop/cart',
        pageName: window.location.href,
        // gender: findCategory.name, 
        // productSize: findCategory.name,
        // language,
        // material: findCategory.name,
        // color,
        // printed: findCategory.name,
      })
    } else {
      console.error('Product not found for the given ID:');
    }

    navigate('/shop/cart')
  }

  return (
    <div className='single_product_div'>
      <InnerNavComponent abc={singleProduct} />
      <div className="product_section">
        <div className="product_background">
          <div className="single_prod_bg">
            <div className="price_prod_div">
              <div className="price_div">
                <div className="product_details">{productDetail?.name}</div>
                <div className="product_details">{location === 'IN' ? `₹${productDetail?.price}` : `$${productDetail?.priceInternational}`}</div>
                <div className="prod_desc">{productDetail?.description}</div>
              </div>

              <div className='product_img_div'>
                <div className='product_image'>
                  <img src={thumbnail} alt='' />
                </div>
                <div className='other_product_images'>
                  {productImages?.map((item, i) => (
                    <div
                      className='more_options2'
                      onClick={() => {
                        setThumbnail(item)
                      }}
                      key={i}
                    >
                      {item && <img src={item} ref={prevRef} alt='' />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='lower_box'></div>
            <div className='buy_now_btn'>
              <CommonBtn text='Buy Now' buttonAction={buyProduct} />
              <CommonBtn
                text='Add to Cart'
                buttonAction={() => {
                  addCart(productDetail?._id)
                }}
              />
            </div>
          </div>
          {/* <div className='other_similar_product'>
            <div className='similar_prod'> Other Similar Product:</div>
            <div className='similar_prod_card'>
              {productDetail?.similarProducts?.map((item, i) => (
                <Fragment key={i}>
                  <ShopCard />
                </Fragment>
              ))}
            </div>
          </div> */}
          {/* <div className='view_more_btn'>
            <CommonBtn text='View More' />
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SingleProduct
