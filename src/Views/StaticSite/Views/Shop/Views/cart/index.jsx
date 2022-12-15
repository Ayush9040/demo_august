import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { deleteIcon } from '../../../../assets/icons/icon'
import { useDispatch, useSelector } from 'react-redux'
import CommonBtn from '../../../../Components/commonbtn'
import { fetchSingleProduct,updateCart } from '../../Shop.api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { updateCartData, getActiveCartData } from '../../Shop.action'

const AddToCart = () => {

  const navigate = useNavigate()

  const cartNav = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const [addCart, setAddCart] = useState([])
  const [ isLoading,setIsLoading ] = useState(null)
  const dispatch = useDispatch()

  let { isLoggedIn } = useSelector(item=>item.auth)
  let { activeCartId,cart } = useSelector(item=>item.shop)
  let { location } = useSelector(item=>item.location)

  const displayCart =async( )=>{
    await dispatch(getActiveCartData())
    setIsLoading(true)
    const arr =[]
    const products = cart.length >0 ? cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[]
    for await (let item  of products){
      const { data } = await fetchSingleProduct(item.productId)
      arr.push({ ...data.data,quantity:item.quantity })
    }
    setAddCart(arr)
    setIsLoading(false)
  }
  
    
  

 

  useEffect(() => {
    displayCart()
  }, [ activeCartId ])

  const updateQuantity = async( quantity,item )=>{
    const cartItems = localStorage.getItem('cart')
    const prevCart = JSON.parse(cartItems)
    await prevCart.forEach(element => {
      if(element.productId===item){
        element.quantity = parseInt(quantity)
      }
    })
    await localStorage.setItem('cart',JSON.stringify(prevCart))
    dispatch(updateCartData(prevCart))
    isLoggedIn && activeCartId &&  await updateCart(activeCartId,{ items:JSON.parse(localStorage.getItem('cart')) })
    dispatch(getActiveCartData())
    window.location.reload()
  }

  const deleteProduct = async(idx) => {
    localStorage.getItem('cart')
    const removeProduct = await JSON.parse(localStorage.getItem('cart'))
    await displayCart(removeProduct.filter((item) => item.productId !== idx))
    await localStorage.setItem(
      'cart',
      JSON.stringify(removeProduct.filter((item) => item.productId !== idx))
    )
    dispatch(updateCartData(removeProduct.filter((item) => item.productId !== idx)))
    isLoggedIn && activeCartId && await updateCart(activeCartId,{ items:JSON.parse(localStorage.getItem('cart')) })
    dispatch(getActiveCartData())
    
    toast.error('Item Removed from cart!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      icon:false
    })
    window.location.reload()
  }

  const getTotal = ()=>{
    if(addCart.length===0) return
    let sum = 0
    addCart.forEach((item) => {
      if(location==='IN'){
        sum += item.price * item.quantity
      }else{
        sum += item.priceInternational * item.quantity
      }
    })
    return sum
  }

  const checkout = async()=>{
    if(!isLoggedIn) return navigate('/user/sign-in/?location=cart')
    navigate('/shop/checkout')
  }

  return (
    <>
      <InnerNavComponent abc={cartNav} />
      <div className="cart_div">
        <div className="cart_search">
          <div className="cart">Cart</div>
          <div className="cart_search_bar">
            <label>
              <input type={'text'} placeholder="Search" />
              <FontAwesomeIcon icon={faSearch} />
            </label>
          </div>
        </div>
        { isLoading ? <div className='global-loader' >Loading...</div>: addCart?.map((item, i) => {
          return (
            <Fragment key={i} >
              <div className="cart_upper_div">
                <div className="cart_detail">
                  <div className="cart_img">
                    <img src={item?.productThumbnail} alt="" />
                  </div>
                  <div className="cart_title_div">
                    <div className="cart_title">{item?.name}</div>
                    <div className="cart_dropdown">
                      <span>
                        <select value={item?.quantity} onChange={(e)=>{ updateQuantity(e.target.value, item._id) } } name="" id="" className="quantity_dropdown">
                          <option selected={ item.quantity===1 } value={1}>1</option>
                          <option selected={ item.quantity===2 } value={2}>2</option>
                          <option selected={ item.quantity===3 } value={3}>3</option>
                          <option selected={ item.quantity===4 } value={4}>4</option>
                          <option selected={ item.quantity===5 } value={5}>5</option>
                        </select>
                      </span>
                      <span
                        className="cart_delete"
                        onClick={() => {
                          deleteProduct(item._id)
                        }}
                      >
                        {deleteIcon}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cart_price">
                Price
                  <div className="cart_amount">{ location ==='IN' ? `₹ ${item?.price}`:`$ ${item?.priceInternational}`}</div>
                </div>
              </div>
              <ToastContainer/>
            </Fragment>
          )
        })}
        { isLoading==false && addCart.length===0 && <h1 className='empty_cart' >Your cart is Empty!</h1> }
        { addCart.length>0 && <div className="cart_lower_div">
          <div className="check_out_div">
            <div className="check_out">
              <div>Subtotal  ({addCart.length} item(s))</div>
              <div className="check_out_price">{ location ==='IN' ? `₹ ${getTotal()}`:`$ ${getTotal()}`}</div>
              <div>Inclusive of all taxes</div>
            </div>
            <div className="check_out_btn">
              <CommonBtn text="Check Out" buttonAction={ checkout } />
            </div>
          </div>
        </div>}
      </div>
    </>
  )
}

export default AddToCart
