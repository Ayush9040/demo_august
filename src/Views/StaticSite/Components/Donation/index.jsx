import React, { useState } from 'react'
import CommonBtn from '../commonbtn'
import './style.scss'
import { ACH, cheque, donation } from '../../assets/icons/icon'
const Donation = ({ supportText, page }) => {
  const [amount, setAmount] = useState(0)

  return (
    <>
      <div className='donation-container-1 global-padding'>
        <div className='donation-buttons'>
          <div className='input-box'>
            <h1>{supportText}</h1>
            <div className='button-flex'>
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
            <div className='enter-button'>
              <input
                type={'number'}
                value={amount}
                placeholder='Enter Amount'
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className='checkboxes'>
              <label>
                <input type='radio' value="One" name="gender"/>
                <span>One time</span>
              </label>

              <label>
                <input type='radio' value="Monthly" name="gender" />
                <span>Monthly</span>
              </label>
              <label>
                <input type='radio' value="Annually" name="gender" />
                <span>Annually</span>
              </label>
            </div>
            {page === 'alumni' && (
              <div className='citizen'>
                <h1>Select Citizenship</h1>
                <div className='checkboxes'>
                  <label>
                    <input type='checkbox' />
                    <span>Indian Citizen</span>
                  </label>

                  <label>
                    <input type='checkbox' />
                    <span>Foreign Citizen</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          {page === 'alumni' && (
            <h4 style={{ fontWeight:'bolder' }} >
              Select the option `&quot;Indian citizen`&quot; if you want to
              donate using debit card/credit card/net banking issued in India or
              else select the option `&quot;Foreign citizen`&quot;
            </h4>
          )}
          <div className='donate-button'>
            <CommonBtn text={'Donate'} />
          </div>
        </div>

        <div className='offline-option global-padding'>
          <h1>Offline Options</h1>
          <div className='offline-grid '>
            <div className='donation-logos'>
              {ACH}
              <h2>ACH/ECS</h2>
             
              <p>
                All donations for The Yoga Institute projects can be made as a
                regular monthly contribution through ACH (Automatic Clearing
                House) / ECS (Electronic Clearing Service)
              </p>
            </div>
            <div className='donation-logos'>
              {cheque}
              <h2>Cheque / Demand Draft</h2>
             
              <p>
                All donations are exempt from Income Tax under Section 80G of
                the Income Tax Act. Cheques and DDs are to be drawn in favour of
                The Yoga Institute.
              </p>
            </div>

            <div className='donation-logos'>
              {donation}
              <h2>In Kind Donation</h2>
              
              <p>
                Another way to help The Yoga Institute activities is through
                in-kind, non-cash donations.
              </p>
            </div>
          </div>
          <div className='enquire-button'>
            <CommonBtn text={'Enquire now'} />
          </div>
        </div>

        <div className='terms-condition'>
          <h1>Terms and conditions:</h1>
          <p>
            {`            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </p>
        </div>
      </div>
    </>
  )
}

export default Donation
