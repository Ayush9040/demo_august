import React, { useState } from 'react'
import CheckoutCard from '../../../Components/CheckoutCard'
import CommonBannerShop from '../../../Components/CommonBannerShop'
import PaymentModal from '../../../Components/PaymentModal/PaymentModal'
import ShipingAddressModal from '../../../Components/ShippingAddressModal/ShippingAddressModal'
import './styles.css'

const Checkout = () => {
  const [isShippingModalOpen, setIsShipppingModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  let arr = [1, 2, 3]
  return (
    <div className="checkout-container" id="checkout-container">
      <CommonBannerShop innerNav={false} />
      <br />
      <br />
      <br />
      <br />
      <div className="search-container">
        <h2 className="heading-1">Cart</h2>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          id="search"
          name="search"
        />
      </div>
      <div>
        {arr.map((item, i) => (

          <CheckoutCard key={i}/>
        ))}
      </div>
      <div className="total-container">
        <div className="align-items-end">
          <span>Subtotal (n items)&nbsp; &nbsp;</span>
          <span className="font-2">$ 1,194</span>
        </div>
        <div className="align-items-end">
          <button
            onClick={() => setIsShipppingModalOpen(true)}
            className="checkout-button"
            type="submit"
          >
            Check out
          </button>
        </div>
      </div>
      <ShipingAddressModal
        isShippingModalOpen={isShippingModalOpen}
        setIsShipppingModalOpen={setIsShipppingModalOpen}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
      />
      <PaymentModal
        isPaymentModalOpen={isPaymentModalOpen}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
      />
    </div>
  )
}

export default Checkout
