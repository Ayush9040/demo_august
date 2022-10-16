import React, { useState } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import { deleteIcon } from '../../../../assets/icons/icon'
import CommonBtn from '../../../../Components/commonbtn'

const OrderHistroy = () => {
  const order = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const [trackPackage, setTrackPackage] = useState(0)

  return (
    <>
      <InnerNavComponent abc={order} />
      <div className="order_history_div">
        <div className="order_heading">Order History</div>
        <div className="order_history">
          <div className="order_placed">
            <div className="order_date_div">
              <div className="order_date">
                <div>ORDER PLACED</div>
                <div>DD/MM/YYYY</div>
              </div>
              <div className="order_date">
                <div>TOTAL</div>
                <div>299</div>
              </div>
              <div className="order_date">
                <div>SHIP TO:</div>
                <div> Jonathan Adriel</div>
              </div>
            </div>
            <div className="order_num"> ORDER # 404-9345430-7522718</div>
          </div>
          <div className="order_line"></div>
          <div className="product_detail">
            <div className="order_detail">
              <div className="order_img">
                {/* <img src={item?.productThumbnail} alt="" /> */}
              </div>
              <div className="order_title_div">
                <div className="order_title">name</div>
                <div className="order_dropdown">
                  <span>
                    <select name="" id="" className="quantity_dropdown">
                      <option value="">Quantity</option>
                    </select>
                  </span>
                  <span
                    className="order_delete"
                    // onClick={() => {
                    //   deleteProduct(item._id)
                    // }}
                  >
                    {deleteIcon}
                  </span>
                </div>
              </div>
            </div>
            <div className="track_package">
              <div className="track_btn" onClick={()=>setTrackPackage(1)}>
                <CommonBtn text="TRACK PACKAGE" />
              </div>
              <div className="request_btn">
                <CommonBtn text="REQUEST CANCELLATION" />
              </div>
            </div>
          </div>
          {trackPackage === 1 && (
            <div className="track_order">
              <div className="contact_delivery">
                <div className="contact_btn">
                  <CommonBtn text="Contact Delivery Personnel" />
                </div>
                <div>track line</div>
              </div>
              <div className="order_add">
                <div>Shipping Address</div>
                <div>Jonathan Adriel</div>
                <div>684/A,</div>
                <div>5th Main Road, Hal 3rd Stage, New Thippasandra</div>
                <div>BENGALURU, KARNATAKA 560075</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OrderHistroy
