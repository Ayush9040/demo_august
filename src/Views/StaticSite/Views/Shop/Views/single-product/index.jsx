import React, { Fragment, useEffect, useState, useRef } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import ShopCard from '../../../../Components/ShopCard/ShopCard'
import CommonBtn from '../../../../Components/commonbtn'
import { fetchSingleProduct } from '../../Shop.api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartData } from '../../Shop.action'
import { ToastContainer, toast } from 'react-toastify'

const SingleProduct = () => {
  const { productID } = useParams()
  
  const prevRef = useRef(null)

  const singleProduct = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const dispatch = useDispatch()

  const [productDetail, setProductDetail] = useState({})
  const [thumbnail,setThumbnail] = useState()
  const [productImages,setProductImages] = useState([])
  const navigate = useNavigate()
  const { location } = useSelector(state=>state.location)
  const getSingleProducts = async() => {
    const { data } = await fetchSingleProduct(productID)
    setProductDetail(data.data)
    setThumbnail(data?.data?.productThumbnail)
    setProductImages(data?.data?.productImage)
  }

  useEffect(() => {
    getSingleProducts()
    dispatch(updateCartData(JSON.parse(localStorage.getItem('cart'))))
  }, [])

  const addLocal = (productID) => {
    if (!localStorage.getItem('cart')) return [{ productId:productID,quantity:1 }]
    const prevCart = JSON.parse(localStorage.getItem('cart'))
    if(prevCart.some(item=>item.productId===productID)){
      prevCart.forEach(element => {
        if(element.productId===productID){
          element.quantity = element.quantity + 1
        }
      })
      return prevCart
    }else{
      return [...prevCart,{ productId:productID, quantity:1 }]
    }
  }

  const addCart = (idx) => {
    console.log(addLocal(idx))
    localStorage.setItem('cart', JSON.stringify(addLocal(idx)))
    dispatch(updateCartData( JSON.parse(localStorage.getItem('cart'))))
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

  const buyProduct=()=>{
    if (!localStorage.getItem('cart')) localStorage.setItem('cart',JSON.stringify([{ productId:productDetail._id,quantity:1 }]))
    const prevCart = JSON.parse(localStorage.getItem('cart'))
    if(prevCart.some(item=>item.productId===productDetail._id)){
      prevCart.forEach(element => {
        if(element.productId===productDetail._id){
          element.quantity = element.quantity+1
        }
      })
      
      localStorage.setItem('cart',JSON.stringify(prevCart))
      dispatch(updateCartData(prevCart))
    }else{
      localStorage.setItem('cart',JSON.stringify([...prevCart,{ productId:productDetail._id, quantity:1 }]))
      dispatch(updateCartData([...prevCart,{ productId:productDetail._id, quantity:1 }]))
    }
    navigate('/shop/cart')
  }

  return (
    <div className="single_product_div">
      <InnerNavComponent abc={singleProduct} />
      <div className="product_section">
        <div className="product_background">
          <div className="single_prod_bg">
            <div className="price_prod_div">
              <div className="price_div">
                <div className="product_details">{productDetail?.name}</div>
                <div className="product_details">{ location==='IN' ? `₹${productDetail?.price}` : `$${ productDetail?.priceInternational }`}</div>
                <div className="prod_desc">{productDetail?.description}</div>
              </div>

              <div className="product_img_div">
                <div className="product_image">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="other_product_images">
                  {productImages?.map((item, i) => (
                    <div className="more_options2" onClick={()=>{ setThumbnail(item) }} key={i}>
                      <img src={item} ref={ prevRef }  alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lower_box">
              
            </div>
            <div className="buy_now_btn"  >
              <CommonBtn text="Buy Now" buttonAction={ buyProduct } />
              <CommonBtn text='Add to Cart' buttonAction={ ()=>{addCart(productDetail?._id)} } />
            </div>
          </div>
          <div className="other_similar_product">
            <div className="similar_prod"> Other Similar Product:</div>
            <div className="similar_prod_card">
              {productDetail?.similarProducts?.map((item, i)=>(
                <Fragment key={i} >
                  <ShopCard  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="view_more_btn">
            <CommonBtn text="View More" />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default SingleProduct
