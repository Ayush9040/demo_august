import React, { useState } from 'react'
import InputComponent from '../../../../Components/InputComponent'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import CommonBtn from '../../../../Components/commonbtn'

const ShippingAdd = () => {
  const shipping = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  const [empty, setEmpty] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    add1: '',
    add2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    saveAdd: '',
    discount: '',
  })

  return (
    <>
      <InnerNavComponent abc={shipping} />
      <div className="ship_main_div">
        <div className="ship_grid">
          <div className="ship_left_div">
            <div className="ship_add">Shipping Address</div>
            <form>
              <div className="form_error">
                <InputComponent
                  type="text"
                  placeholder="Name*"
                  form={formData}
                  setField={setFormData}
                  keyName="name"
                  errorCheck={setEmpty}
                />
                {empty === 1 && <small> Please enter your name</small>}
              </div>
              <div className="form_error">
                <InputComponent
                  type="text"
                  placeholder="Address Line 1*"
                  form={formData}
                  setField={setFormData}
                  keyName="add1"
                  errorCheck={setEmpty}
                />
                {empty === 2 && <small> Please enter address</small>}
              </div>
              <div className="form_error">
                <InputComponent
                  type="text"
                  placeholder="Address Line 2"
                  form={formData}
                  setField={setFormData}
                  keyName="add2"
                  // errorCheck={setEmpty}
                />
                {/* {empty === 3 && <small> Please enter your name</small>} */}
              </div>
              <div className="form_error">
                <InputComponent
                  type="text"
                  placeholder="Country*"
                  form={formData}
                  setField={setFormData}
                  keyName="country"
                  errorCheck={setEmpty}
                />
                {empty === 3 && <small> Please enter your country*</small>}
              </div>
              <div className="form_error">
                <InputComponent
                  type="text"
                  placeholder="State*"
                  form={formData}
                  setField={setFormData}
                  keyName="state"
                  errorCheck={setEmpty}
                />
                {empty === 4 && <small> Please enter your state*</small>}
              </div>
              <div className="form_error">
                <InputComponent
                  type="text"
                  placeholder="City*"
                  form={formData}
                  setField={setFormData}
                  keyName="city"
                  errorCheck={setEmpty}
                />
                {empty === 5 && <small> Please enter your city*</small>}
              </div>
              <div className="form_error">
                <InputComponent
                  type="number"
                  placeholder="Pincode*"
                  form={formData}
                  setField={setFormData}
                  keyName="pincode"
                  errorCheck={setEmpty}
                />
                {empty === 6 && <small> Please enter your pincode*</small>}
              </div>
              <div>
                <label className="save_add">
                  <input
                    type="checkbox"
                    value="address"
                    name="saveAdd"
                    // checked={formData.gender==='address'}
                    // onChange={(e) => {
                    //   if (e.target.checked) {
                    //     setFormData({ ...formData, gender: e.target.value })
                    //     setEmpty(0)
                    //   }
                    // }}
                  />
                  &nbsp;Save address for future
                </label>
              </div>
            </form>
            <div className="optional_add">
              <div className="opt_add1">
                <div className="opt_name">Jonathan Adriel</div>
                <div className="opt_house">684/A,</div>
                <div className="opt_house">
                  5th Main Road, Hal 3rd Stage, New Thippasandra
                </div>
                <div className="opt_house">BENGALURU, KARNATAKA 560075</div>
              </div>
            </div>
          </div>
          <div>
            <div className="ship_right_div">
              <div className="ship_product_detail">
                <div className="ship_order_detail">
                  <div className="ship_order_img">
                    {/* <img src={item?.productThumbnail} alt="" /> */}
                  </div>
                  <div className="ship_title_div">
                    <div className="ship_title">New Logo - 1918 T-Shirt</div>
                    <div className="ship_del">Delivery: dd/mm/yyyy</div>
                  </div>
                </div>
                <div className="ship_order_sum">
                  <div className="ship_price">Order summary</div>
                  <div className="price">Price</div>
                  <div className="ship_price">299</div>
                </div>
              </div>
            </div>
            <div className="discount">
              <form>
                <div className="form_error">
                  <InputComponent
                    type="text"
                    placeholder="Discount*"
                    form={formData}
                    setField={setFormData}
                    keyName="city"
                    // errorCheck={setEmpty}
                  />
                  {/* {empty === 1 && <small> Please enter your name</small>} */}
                </div>
              </form>
            </div>
            <div className="check_out_div">
              <div className='check_out'>
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
      </div>
    </>
  )
}

export default ShippingAdd
