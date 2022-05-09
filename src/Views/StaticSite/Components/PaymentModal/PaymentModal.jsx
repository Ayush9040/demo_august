import React from 'react'
import Modal from 'react-modal'
import { cross } from '../../assets/icons/icon'
import CheckoutCard from '../CheckoutCard'
import './PaymentModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: '80%',
    borderRadius: '4rem',
    border: '1px solid black',
  },
}

Modal.setAppElement('#___gatsby')

const PaymentModal = ({ isPaymentModalOpen, setIsPaymentModalOpen }) => {
  function closeModal() {
    setIsPaymentModalOpen(false)
  }

  return (
    <div>
      <Modal
        isOpen={isPaymentModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-container">
          <div className="payment-modal-header">
            <div className="payment-modal-tabs">
              <h2 className="heading-2">
                Shiping Address &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;{' '}
              </h2>
              <h2 className="heading-1">Payment</h2>
            </div>
            <div>
              <span className="change-cross-svg-width" onClick={closeModal}>
                {cross}
              </span>
            </div>
          </div>
          <div className="payment-modal-content">
            <div className="payment-type-container">
              <button className="payment-type-active-button">
                   Credit / Debit Card
              </button>
              <button className="payment-type-button">
                  UPI
              </button>
              <button className="payment-type-button">
                   Crypto
              </button>
            </div>
            <div className="payment-input-container">
              <label className="heading-1">Card Owner Name</label>
              <input
                className="payment-modal-input"
                placeholder="Card Owner Name"
                type="text"
                id="ownerName"
                name="ownerName"
              />
            </div>
            <div className="payment-input-container">
              <label className="heading-1">Valid card number</label>
              <input
                className="payment-modal-input"
                placeholder="Valid card number"
                type="text"
                id="cardNumber"
                name="cardNumber"
              />
            </div>
            <div className="cvv-input-container">
              <div>
                <label className="heading-1">Expiration Date</label>
                <input
                  className="payment-cvv-input"
                  placeholder="MM YY"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                />
              </div>
              <div className="flex-column">
                <label className="heading-1">CVV</label>
                <input
                  className="payment-modal-input"
                  placeholder=""
                  type="text"
                  id="cvv"
                  name="cvv"
                />
              </div>
              
            </div>
            <div className="payment-input-container">
              <label className="heading-1">Issuing Bank name</label>
              <input
                className="payment-modal-input"
                placeholder="Issuing Bank name"
                type="text"
                id="bankName"
                name="bankName"
              />
            </div>
          </div>
          <div className="justify-center">
            <button className="confirm-button">Confirm</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PaymentModal
