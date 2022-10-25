import React, { useState, useEffect } from 'react'
import InputComponent from '../../../../Components/InputComponent'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import CommonBtn from '../../../../Components/commonbtn'
import {
  fetchSingleProduct,
  createCart,
  addAddress,
  getAddress,
  createOrder,
  getCoupon,
  orderCallback,
} from '../../Shop.api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { authServerClientId } from '../../../../../../Constants/appSettings'
import { useNavigate } from 'react-router-dom'
import { updateCartData } from '../../Shop.action'

const ShippingAdd = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

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
    discount: '',
  })

  const [isLoading, setIsLoading] = useState(null)
  const [cart, setCart] = useState([])
  const [prevAdd, setPrevAdd] = useState([])
  const [cartId, setCartId] = useState()
  const [addresId, setAddressId] = useState(null)
  const [discountAmt, setDiscountAmt] = useState()
  const [isCouponAdded, setIsCouponAdded] = useState()

  const fetchAddress = async() => {
    const { data } = await getAddress(user?.data?.userId)
    setPrevAdd(data.data)
  }

  const displayCart = async(products) => {
    setIsLoading(true)
    const arr = []
    for await (let item of products) {
      try {
        const { data } = await fetchSingleProduct(item.productId)
        arr.push({ ...data.data, quantity: item.quantity })
      } catch (err) {
        console.log(err)
      }
    }
    setCart(arr)
    setIsLoading(false)
  }

  const getTotal = () => {
    if (cart.length === 0) return
    let sum = 0
    cart.forEach((item) => {
      sum += item.price * item.quantity
    })
    return sum
  }

  const calcDiscount = () => {
    if (!discountAmt) return 0
    if (discountAmt?.type !== 'PERCENTAGE') return discountAmt?.value
    let total = getTotal()
    let discount = total * (discountAmt?.value / 100)
    return discount
  }

  const postCart = async(finalCart, couponId) => {
    try {
      const { data } = await createCart({
        items: finalCart,
        user: user?.data?.userId,
        coupon: couponId,
      })
      setCartId(data.data._id)
      return data.data._id
    } catch (err) {
      console.log(err)
    }
  }

  const usePrevAddress = (addData) => {
    if (addresId === addData._id) return setAddressId(null)
    setAddressId(addData?._id)
  }

  const postNewAddress = async() => {
    try {
      const { data } = await addAddress({
        userId: user?.data?.userId,
        name: formData.name,
        clientId: authServerClientId,
        houseNo: formData.add1,
        street: formData.add2,
        landmark: '',
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        country: formData.country,
      })
      setAddressId(data.data._id)
      return data.data._id
    } catch (err) {
      toast.error(err.message, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        icon: false,
      })
    }
  }

  const applyCoupon = async() => {
    try{
      const { data } = await getCoupon(formData.discount)
      setDiscountAmt({
        type: data?.data?.[0]?.discountType,
        value: data?.data?.[0]?.couponDiscount,
        id: data?.data?.[0]?._id,
      })
      setIsCouponAdded(true)
      return {
        type: data?.data?.discountType,
        value: data?.data?.couponDiscount,
        id: data?.data?._id,
      }
    }catch(err){
      console.log(err)
    }
  }

  const makePayment = async() => {
    const localCart = localStorage.getItem('cart')
    const finalCart = JSON.parse(localCart)
    const finalDiscount = discountAmt ? discountAmt.id : await applyCoupon()
    const orderCartId = cartId
      ? cartId
      : await postCart(finalCart, finalDiscount)
    const finalAddId = addresId ? addresId : await postNewAddress()
    if( !finalAddId ) return
    const { data } = await createOrder(orderCartId, {
      notes: {
        description: finalAddId,
      },
    })
    localStorage.removeItem('cart')
    const options = {
      key: 'rzp_test_udmmUPuH3rTJe8', // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'The Yoga Institute',
      description: 'Order Placed',
      // image: 'https://example.com/your_logo', // un comment and add TYI logo
      order_id: data.id, // eslint-disable-line
      handler: async(res) => {
        // Navigare to Success if razorpay_payment_id, razorpay_order_id, razorpay_signature is there
        if (
          res.razorpay_payment_id &&
          res.razorpay_order_id &&
          res.razorpay_signature
        ) {
          orderCallback({   
            razorpay_payment_id:res.razorpay_payment_id,// eslint-disable-line
            razorpay_order_id:res.razorpay_order_id,// eslint-disable-line
            razorpay_signature:res.razorpay_signature,// eslint-disable-line
            userId:user?.data?.userId,
            cartId:orderCartId
          })
          navigate('/shop/thank-you')
        }
      },
      prefill: {
        name: user?.data?.name,
        email: user?.data?.email,
        contact: user?.data?.phone,
      },
      theme: {
        color: '#3399cc', // enter theme color for our website
      },
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const checkout = async() => {
    if (!usePrevAddress) {
      if (formData.name === '') return setEmpty(1)
      if (formData.add1 === '') return setEmpty(2)
      if (formData.city === '') return setEmpty(3)
      if (formData.state === '') return setEmpty(4)
      if (formData.country === '') return setEmpty(5)
      if (formData.pincode === '') return setEmpty(6)
    }
    await makePayment()
  }

  useEffect(() => {
    fetchAddress()
    const cartItems = localStorage.getItem('cart')
    displayCart(JSON.parse(cartItems))
    dispatch(updateCartData(JSON.parse(cartItems)))
  }, [user?.data])

  return (
    <>
      <InnerNavComponent abc={shipping} />
      {isLoading ? (
        <div className='global-loader'>Loading...</div>
      ) : (
        <div className='ship_main_div'>
          <div className='ship_grid'>
            <div className='ship_left_div'>
              <div className='ship_add'>Shipping Address</div>
              <form>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='Name*'
                    form={formData}
                    setField={setFormData}
                    keyName='name'
                    errorCheck={setEmpty}
                    blocked={addresId ? true : false}
                  />
                  {empty === 1 && <small> Please enter your name</small>}
                </div>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='Address Line 1*'
                    form={formData}
                    setField={setFormData}
                    keyName='add1'
                    errorCheck={setEmpty}
                    blocked={addresId ? true : false}
                  />
                  {empty === 2 && <small> Please enter address</small>}
                </div>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='Address Line 2'
                    form={formData}
                    setField={setFormData}
                    keyName='add2'
                    blocked={addresId ? true : false}
                    // errorCheck={setEmpty}
                  />
                  {/* {empty === 3 && <small> Please enter your name</small>} */}
                </div>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='Country*'
                    form={formData}
                    setField={setFormData}
                    keyName='country'
                    errorCheck={setEmpty}
                    blocked={addresId ? true : false}
                  />
                  {empty === 3 && <small> Please enter your country*</small>}
                </div>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='State*'
                    form={formData}
                    setField={setFormData}
                    keyName='state'
                    errorCheck={setEmpty}
                    blocked={addresId ? true : false}
                  />
                  {empty === 4 && <small> Please enter your state*</small>}
                </div>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='City*'
                    form={formData}
                    setField={setFormData}
                    keyName='city'
                    errorCheck={setEmpty}
                    blocked={addresId ? true : false}
                  />
                  {empty === 5 && <small> Please enter your city*</small>}
                </div>
                <div className='form_error'>
                  <InputComponent
                    type='text'
                    placeholder='Pincode*'
                    form={formData}
                    setField={setFormData}
                    keyName='pincode'
                    errorCheck={setEmpty}
                    blocked={addresId ? true : false}
                  />
                  {empty === 6 && <small> Please enter your pincode*</small>}
                </div>
                {/* <div>
                <label className='save_add'>
                  <input
                    type='checkbox'
                    value='address'
                    name='saveAdd'
                  />
                  &nbsp;Save address for future
                </label>
              </div> */}
              </form>
              {prevAdd.length > 0 &&
                prevAdd.map((item, i) => (
                  <div
                    key={i}
                    style={
                      item._id === addresId
                        ? { boxShadow: '0px 0px 20px 0px rgba(46,92,230,1)' }
                        : {}
                    }
                    onClick={() => {
                      usePrevAddress(item)
                    }}
                    className='optional_add'
                  >
                    <div className='opt_add1'>
                      <div className='opt_name'>{item?.name}</div>
                      <div className='opt_house'>{item?.houseNo}</div>
                      <div className='opt_house'>
                        {item?.street},{item?.landmark}
                      </div>
                      <div className='opt_house'>
                        {item?.city} - {item?.pincode}
                      </div>
                      <div className='opt_house'>
                        {item?.state},{item?.country}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {cart.length > 0 &&
                cart.map((item, i) => (
                  <div key={i} className='ship_right_div'>
                    <div className='ship_product_detail'>
                      <div className='ship_order_detail'>
                        <div className='ship_order_img'>
                          <img src={item?.productThumbnail} alt='' />
                        </div>
                        <div className='ship_title_div'>
                          <div className='ship_title'>{item?.name}</div>
                        </div>
                      </div>
                      <div className='ship_order_sum'>
                        <div className='ship_price'>Order summary</div>
                        <div className='price'>Price</div>
                        <div className='ship_price'>₹ {item.price}</div>
                        <div className='price'>Qunatity</div>
                        <div className='ship_price'>{item.quantity}</div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className='discount'>
                <form>
                  <div className='form_error'>
                    <InputComponent
                      type='text'
                      placeholder='Discount'
                      form={formData}
                      setField={setFormData}
                      keyName='discount'
                      blocked={ isCouponAdded ? true:false }
                    />
                  </div>
                  {isCouponAdded && (
                    <small style={{ textAlign: 'right' }}>
                      {discountAmt
                        ? discountAmt.type === 'PERCENTAGE'
                          ? `${discountAmt.value}% is applied`
                          : `Rs.${discountAmt.value} off`
                        : 'Invalid discount code'}
                    </small>
                  )}
                </form>
                <div className='apply_discount' style={ formData.discount!=='' ? { color:'#121212' }:{} }  onClick={applyCoupon}>
                  Apply
                </div>
              </div>
              <div className='check_out_div'>
                <div className='check_out'>
                  <div>Subtotal ({cart.length} item(s))</div>
                  <br />
                  {discountAmt && <div>Total: ₹{getTotal()}</div>}
                  {discountAmt && <div>Discount: - ₹{calcDiscount()}</div>}
                  <div className='check_out_price'>
                    ₹ {getTotal() - calcDiscount()}
                  </div>
                  <div>Inclusive of all taxes</div>
                </div>
                <div className='check_out_btn'>
                  <CommonBtn text='Check Out' buttonAction={checkout} />
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  )
}

export default ShippingAdd
