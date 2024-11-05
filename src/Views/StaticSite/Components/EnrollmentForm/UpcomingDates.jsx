import React from 'react'
import { cross } from '../../assets/icons/icon'
import CheckoutCard from '../CheckoutCard'
import Modal from "react-modal"
import TermsCondition from './index'
import './popup.scss'
import UpcomingDatesView from './UpcomingDatesView'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '60%',
    width: '38%',
    borderRadius: '20px',
    // border: '1px solid black',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    padding: '15px'
  },
}

// Modal.setAppElement('#___gatsby')

const UpcomingDates = ({ isShippingModalOpen, setIsShipppingModalOpen, pageDate, setCourseDateInfo, setCourseDateSelected, setShowDefaultDate, setNotShowDate, formData, setFormData}) => {
  
  function closeModal() {
    setIsShipppingModalOpen(false)
  }

  return (
    <div className='bg_date'>
      <Modal
        isOpen={isShippingModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-container">
          <div className="shipping-modal-header">
            <div className="shipping-modal-tabs">
              {/* <h2 className="heading-1">

              </h2> */}
              {/* <h2 className="heading-2">Payment</h2> */}
              <div className='banner-heading upcoming_dates_heading' style={{ textAlign: 'left', margin: '0px' }}>
            Course Upcoming Dates
            <p className='upcoming_sub_heading'>Choose your preferred course start date from the list below</p>
            </div>

            </div>
            <div style={{width: '12px', height: '12px'}}>
            
              <span className="change-cross-svg-width" style={{cursor: 'pointer'}} onClick={closeModal}>
                {cross}

              </span>
            </div>
          
          </div>
          <div className="modal-content" style={{ gridTemplateColumns: '1fr', marginTop: '0rem' }}>
            {<UpcomingDatesView pageDate={pageDate} setCourseDateInfo={setCourseDateInfo} setCourseDateSelected={setCourseDateSelected} closeModal={closeModal} setShowDefaultDate={setShowDefaultDate} setNotShowDate={setNotShowDate} formData={formData} setFormData={setFormData} />}
            {/* <div>
              <input
                className="modal-input"
                type="text"
                id="name"
                name="name"
              />
              <input
                className="modal-input"
                placeholder="Address Line 1"
                type="text"
                id="ad1"
                name="ad1"
              />
              <input
                className="modal-input"
                placeholder="Address Line 2"
                type="text"
                id="ad2"
                name="ad2"
              />
              <input
                className="modal-input"
                placeholder="Country"
                type="text"
                id="country"
                name="country"
              />
              <input
                className="modal-input"
                placeholder="State"
                type="text"
                id="state"
                name="state"
              />
              <input
                className="modal-input"
                placeholder="City"
                type="text"
                id="city"
                name="city"
              />
              <input
                className="modal-input"
                placeholder="Pincode"
                type="text"
                id="pincode"
                name="pincode"
              />
            </div> */}
            {/* <div className="modal-content-right-section">
              <span className="heading-1 flex-end ">Order Summary</span>
              <div className="mt-2">
                <CheckoutCard />
                <CheckoutCard />
              </div>
              <div className="mt-2">
                <div className="flex-end">
                  <span>Subtotal (2 items) &nbsp;</span>
                  <span className="heading-1">$ 1,194</span>
                </div>
                <div className="flex-end">
                  <input
                    className="discount-input"
                    placeholder="Discount Code"
                    type="text"
                    id="pincode"
                    name="pincode"
                  />
                </div>
                <div className="flex-end">
                  <input
                    className="address-checkbox"
                    type="checkbox"
                    id="address"
                    name="address"
                    value="Address"
                  />
                  <label className="address-label" htmlFor="address">
                    {' '}
                    Save address for future
                  </label>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="justify-center">
            <button
              className="next-button">
              Next
            </button>
          </div> */}
        </div>
      </Modal>
    </div>
  )
}

export default UpcomingDates
