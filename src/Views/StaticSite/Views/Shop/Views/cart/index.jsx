import React, { useEffect, useState } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { deleteIcon } from '../../../../assets/icons/icon'
import CommonBtn from '../../../../Components/commonbtn'
import { fetchSingleProduct } from '../../Shop.api'

const AddToCart = () => {

  const cart = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const [addCart, setAddCart] = useState([])

  const displayCart =async( products )=>{
    const arr =[]
    for await (let item  of products){
      const { data } = await fetchSingleProduct(item.product)
      arr.push(data.data)
    }
    setAddCart(arr)
  }
  
    
  

 

  useEffect(() => {
    const cartItems = localStorage.getItem('cart')
    displayCart(JSON.parse(cartItems))
  }, [])

  const deleteProduct = (idx) => {
    localStorage.getItem('cart')
    const removeProduct = JSON.parse(localStorage.getItem('cart'))
    displayCart(removeProduct.filter((item) => item.product !== idx))
    localStorage.setItem(
      'cart',
      JSON.stringify(removeProduct.filter((item) => item.product !== idx))
    )
  }

  console.log(addCart,'addCart')
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
                      <select value={item?.quantity} name="" id="" className="quantity_dropdown">
                        <option selected={item.quantity===1} value={1}>1</option>
                        <option selected={item.quantity===2} value={2}>2</option>
                        <option selected={item.quantity===3} value={3}>3</option>
                        <option selected={item.quantity===4} value={4}>4</option>
                        <option selected={item.quantity===5} value={5}>5</option>
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

        <div className="cart_lower_div">
          <div className="check_out_div">
            <div className="check_out">
              <div>Subtotal (1 item)</div>
              <div className="check_out_price">₹ 299</div>
              <div>Inclusive of all taxes</div>
            </div>
            <div className="check_out_btn">
              <CommonBtn text="Check Out" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToCart
