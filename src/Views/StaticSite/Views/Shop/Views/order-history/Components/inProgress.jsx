import React,{ useState } from 'react'
import CommonBtn from '../../../../../Components/commonbtn'
import StepProgessBar from '../../../../../Components/StepProgressBar'
import './style.scss'

const InProgress = ( { orderDetails,products,totalAmount } ) => {

  const date = new Date( orderDetails?.createdAt )

  const [trackPackage, setTrackPackage] = useState(false)

  const checkOrderStatus = ()=>{
    switch(orderDetails?.deliveryStatus){
    case 'ORDER_PLACED': return 0
    case 'SHIPPED': return 33.35
    case 'OUT_FOR_DELIVERY': return 66.67
    case 'DELIVERED': return 100
    }
  }

  console.log(products,'s')

  return (
    <div className="order_history_div">
      <div className="order_heading">Order History</div>
      <div className="order_history">
        <div className="order_placed">
          <div className="order_date_div">
            <div className="order_date">
              <div>ORDER PLACED</div>
              <div>{ date.toLocaleDateString() }</div>
            </div>
            <div className="order_date">
              <div>TOTAL</div>
              <div>₹ {totalAmount }</div>
            </div>
            <div className="order_date">
              <div>SHIP TO:</div>
              <div> Jonathan Adriel</div>
            </div>
          </div>
          <div className="order_num"> ORDER #{ orderDetails?.orderId }</div>
        </div>
        <div className="order_line"></div>
        <div className="product_detail">
          <div className="order_detail">
            <div className="order_img">
              <img src={products?.[0]?.productThumbnail} alt="" />
            </div>
            <div className="order_title_div">
              <div className="order_title">{ products?.map((item,i)=><><p key={i} >{ item.name }</p><h4 style={{ textAlign:'right' }} >Quantity:{ item.quantity }</h4></>) }</div>
              {/* <div className="order_dropdown">
              <select name="" id="" className="quantity_dropdown">
                <option value="">Quantity</option>
              </select>
            </div> */}
            </div>
          </div>
          <div className="track_package">
            <div className="track_btn" onClick={() => setTrackPackage(!trackPackage)}>
              <CommonBtn text="TRACK PACKAGE" />
            </div>
            {/* <div className="request_btn">
              <CommonBtn text="REQUEST CANCELLATION" />
            </div> */}
          </div>
        </div>
        {trackPackage && (
          <div className="track_order">
            <div className="contact_delivery">
              <div className="contact_btn"  >
                {/* <CommonBtn text="Contact Delivery Personnel" /> */}
                <h4>Delivery Partner:{ orderDetails.deliveryPartner }<br/>TrackingId:{ orderDetails.trackingId }</h4>
              </div>
              <StepProgessBar status={ checkOrderStatus() }  />
              
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
  )
}

export default InProgress
