import React,{ useState } from 'react'
import CommonBtn from '../../../../../Components/commonbtn'
import './style.scss'

const Delivered = ({ orderDetails,products,totalAmount }) => {

  const date = new Date( orderDetails?.createdAt )
  const [cancel, setCancel] = useState(false)

  return (
    <>
      <div className="order_history_div">
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
                {/* <img src={item?.productThumbnail} alt="" /> */}
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
              <div className="request_btn" onClick={() => setCancel(true)}>
                <CommonBtn text="RETURN OR REPLACE ITEMS" />
              </div>
              <div className="request_btn">
                <CommonBtn text="REQUEST REFUND" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {cancel !== false && (
        <div className="order_history_div">
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
                    <select name="" id="" className="quantity_dropdown">
                      <option value="">Quantity</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="track_package">
                <div className="request_btn">
                  <CommonBtn text="RETURN OR REPLACE ITEMS" />
                </div>
                {/* <div className="request_btn" onClick={() => setCancel(true)}>
                <CommonBtn text="REQUEST CANCELLATION" />
              </div> */}
              </div>
            </div>

            <div className="retrun_order">
              <div>
                <div className="option_btn">
                  <CommonBtn text="Option 1" />
                </div>
                <div className="option_btn">
                  <CommonBtn text="Option 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ >
  )
}

export default Delivered