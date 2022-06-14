import React, { useState } from 'react'
import './style.scss'
import { ACH, cheque, donation } from '../../../assets/icons/icon'
import InputComponent from '../../InputComponent'

const CsrModal = ({ showModal, setShowModal }) => {
  const [modalvalue, setModalValue] = useState(0)
  const [amount, setAmount] = useState(0)
  const [csrForm, setCsrForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
  })

  if (showModal === false) {
    return null
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="close-btn-container">
            <button
              onClick={() => {
                setShowModal(false)
                setModalValue(0)
              }}
              className="close-btn"
            >
              X
            </button>
          </div>
          {modalvalue === 0 ? (
            <>
              <div className="modal-header">
                <h1>Tree Plantation Drive</h1>
                <div className="bottom-line"></div>
              </div>
              <div className="input-data">
                
                <div className='modal_input'>
                  <InputComponent
                    placeholder="Name"
                    type="text"
                    form={csrForm}
                    setField={setCsrForm}
                    keyName="name"
                  />
                </div>
                <div className='modal_input'>
                  <InputComponent
                    placeholder="Email ID"
                    type="email"
                    form={csrForm}
                    setField={setCsrForm}
                    keyName="email"
                  />
                </div>
                <div className='modal_input'>
                  <InputComponent
                    placeholder="Contact Number"
                    type="number"
                    form={csrForm}
                    setField={setCsrForm}
                    keyName="phone"
                  />
                </div>
                <div className='modal_input'>
                  <InputComponent
                    placeholder="Organisation"
                    type="text"
                    form={csrForm}
                    setField={setCsrForm}
                    keyName="organisation"
                  />
                </div>
              </div>
              <button onClick={() => setModalValue(1)}>Next</button>
            </>
          ) : modalvalue === 1 ? (
            <>
              <div className="donation-buttons">
                <div className="csr-block">
                  <div className="input-box">
                    <h1>
                      I wish to support the trees plantation drive initiative of
                      The Yoga Institute:
                    </h1>
                    <div className="button-flex">
                      <button
                        onClick={() => setAmount(100)}
                        style={
                          amount === 100
                            ? {
                              color: 'black',
                              fontWeight: 'bolder',
                              border: '3px solid black',
                            }
                            : {}
                        }
                      >
                        ₹ 100
                      </button>
                      <button
                        onClick={() => setAmount(500)}
                        style={
                          amount === 500
                            ? {
                              color: 'black',
                              fontWeight: 'bolder',
                              border: '3px solid black',
                            }
                            : {}
                        }
                      >
                        ₹ 500
                      </button>
                      <button
                        onClick={() => setAmount(1000)}
                        style={
                          amount === 1000
                            ? {
                              color: 'black',
                              fontWeight: 'bolder',
                              border: '3px solid black',
                            }
                            : {}
                        }
                      >
                        ₹ 1000
                      </button>
                      <button
                        onClick={() => setAmount(2000)}
                        style={
                          amount === 2000
                            ? {
                              color: 'black',
                              fontWeight: 'bolder',
                              border: '3px solid black',
                            }
                            : {}
                        }
                      >
                        ₹ 2000
                      </button>
                      <button
                        onClick={() => setAmount(3000)}
                        style={
                          amount === 3000
                            ? {
                              color: 'black',
                              fontWeight: 'bolder',
                              border: '3px solid black',
                            }
                            : {}
                        }
                      >
                        ₹ 3000
                      </button>
                      <button
                        onClick={() => setAmount(5000)}
                        style={
                          amount === 5000
                            ? {
                              color: 'black',
                              fontWeight: 'bolder',
                              border: '3px solid black',
                            }
                            : {}
                        }
                      >
                        ₹ 5000
                      </button>
                    </div>
                    <div className="enter-button">
                      <input
                        type={'number'}
                        value={amount}
                        placeholder="Enter Amount"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>

                    <div className="checkboxes">
                      <label>
                        <input type="checkbox" />
                        <span>One time</span>
                      </label>

                      <label>
                        <input type="checkbox" />
                        <span>Monthly</span>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <span>Annually</span>
                      </label>
                    </div>
                    {/* {page === 'alumni' && (
                  <div className="citizen">
                    <h1>Select Citizenship:</h1>
                    <div className="checkboxes">
                      <label>
                        <input type="checkbox" />
                        <span>Indian Citizen</span>
                      </label>

                      <label>
                        <input type="checkbox" />
                        <span>Foreign Citizen</span>
                      </label>
                    </div>
                  </div>
                )} */}
                  </div>
                  <div
                    className="arrow-right"
                    onClick={() => setModalValue(3)}
                  ></div>
                </div>

                <button className="support-btn">Support the cause</button>
              </div>
            </>
          ) : (
            <>
              <div className="main-container-last">
                <div className="last-sub-container">
                  <div className="main-text">
                    <p>
                      I wish to support the trees plantation drive initiative of
                      The Yoga Institute:
                    </p>
                  </div>
                  <div className="mid-section">
                    <div className="payment-one">
                      {ACH}
                      <p className="header">ACH/ECS</p>
                      <p>
                        All donations for The Yoga Institute projects can be
                        made as a regular monthly contribution through ACH
                        (Automatic Clearing House) / ECS (Electronic Clearing
                        Service)
                      </p>
                    </div>
                    <div className="payment-one">
                      {cheque}
                      <p className="header">Cheque / Demand Draft</p>
                      <p>
                        All donations are exempt from Income Tax under Section
                        80G of the Income Tax Act. Cheques and DDs are to be
                        drawn in favour of The Yoga Institute.
                      </p>
                    </div>
                    <div className="payment-one">
                      {donation}
                      <p className="header">In Kind Donation</p>
                      <p>
                        Another way to help The Yoga Institute activities is
                        through in-kind, non-cash donations.
                      </p>
                    </div>
                  </div>
                  <div className="enquiry-btn">
                    <button>Make an enquiry</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default CsrModal
