import React,{ useState } from 'react'
import CommonBtn from '../../../../../Components/commonbtn'
import StepProgessBar from '../../../../../Components/StepProgressBar'
import './style.scss'

const InProgress = ( { orderDetails,products,totalAmount, currency } ) => {

  const date = new Date( orderDetails?.createdAt )

  const [trackPackage, setTrackPackage] = useState(false)
  
  const address = orderDetails?.addressId

  const checkOrderStatus = (product)=>{
    switch(product?.deliveryStatus){
    case 'ORDER_PLACED': return 0
    case 'SHIPPED': return 34
    case 'OUT_FOR_DELIVERY': return 67
    case 'DELIVERED': return 100
    }
  }




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
              <div>{ currency==='INR' ? `₹ ${totalAmount }`:`$ ${totalAmount }`}</div>
            </div>
            <div className="order_date">
              <div>SHIP TO:</div>
              <div>{ address?.name }</div>
            </div>
          </div>
          <div className="order_num"> ORDER #{ orderDetails?.orderId }</div>
        </div>
        <div className="order_line"></div>
        { products.map(item=>{
          console.log(item,'items')
          return <>
            <div key={item._id} className="product_detail">
              <div className="order_detail">
                <div className="order_img">
                  <img src={item.productThumbnail} alt="" />
                </div>
                <div className="order_title_div">
                  <div className="order_title"><><p >{ item.name }</p><h4 style={{ textAlign:'right' }} >Quantity:{ item.quantity }</h4></></div>
                  {/* <div className="order_dropdown">
              <select name="" id="" className="quantity_dropdown">
                <option value="">Quantity</option>
              </select>
            </div> */}
                </div>
              </div>
              <div className="track_package">
                <div className="track_btn" onClick={() => setTrackPackage(item._id)}>
                  <CommonBtn text="TRACK PACKAGE" />
                </div>
              </div>
            </div>
            {trackPackage=== item._id && (
              <div className="track_order">
                <div className="contact_delivery">
                  <div className="contact_btn"  >
                    {/* <CommonBtn text="Contact Delivery Personnel" /> */}
                    <p style={{ color:'#00000080' }} >Delivery Partner:<span style={{ color:'#000000' }} >{ item.deliveryPartner }</span><br/>TrackingId:<span style={{ color:'#000000' }} >{ item.trackingId }</span></p>
                  </div>
                  <StepProgessBar status={ checkOrderStatus() }  />
              
                </div>
              </div>
            )}
            <br/>
            <div className="order_line"></div>
          </>})}
        <div className="order_add">
          <div>Shipping Address</div>
          <div>{ address?.name }</div>
          <div>{address?.houseNo}</div>
          <div>{address?.street},{address?.landmark}</div>
          <div>{address?.city},{address?.country} - {address?.pincode}</div>
        </div>
      </div>
    </div>
  )
}

export default InProgress
