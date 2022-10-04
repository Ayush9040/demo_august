import React, { useEffect, useState } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { deleteIcon } from '../../../../assets/icons/icon'

const AddToCart = () => {
  const cart = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const [addCart, setAddCart] = useState([])

  useEffect(() => {
    const cartItems = localStorage.getItem('cart')
    setAddCart(JSON.parse(cartItems))
  }, [ ])

  const deleteProduct=(idx)=>{
    localStorage.getItem('cart')
    const removeProduct = JSON.parse(localStorage.getItem('cart'))
    setAddCart(removeProduct.filter((item)=> (item._id !== idx)))
    localStorage.setItem('cart',JSON.stringify((removeProduct.filter((item)=> (item._id !== idx)))))
    console.log(removeProduct,'qwerty')
  }

  return (
    <>
      <InnerNavComponent abc={cart} />
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
        {addCart?.map((item, i) => {
          return (
            <div key={i} className="cart_upper_div">
              <div className="cart_detail">
                <div className="cart_img">
                  <img src={item?.productThumbnail} alt="" />
                </div>
                <div className="cart_title_div">
                  <div className="cart_title">{item?.name}</div>
                  <div className="cart_dropdown">
                    <span>
                      <select name="" id="" className="quantity_dropdown">
                        <option value="">Quantity</option>
                      </select>
                    </span>
                    <span className="cart_delete" onClick={()=>{deleteProduct(item._id)}} >{deleteIcon}</span>
                  </div>
                  <div className="cart_date">Delivery: dd/mm/yyyy</div>
                </div>
              </div>
              <div className="cart_price">
                Price
                <div className="cart_amount">{item?.price}</div>
              </div>
            </div>
          )
        })}

        <div className="cart_lower_div"></div>
      </div>
    </>
  )
}

export default AddToCart
