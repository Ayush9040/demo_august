import React from 'react'
import CommonBtn from '../commonbtn'
import './style.scss'
import { experience } from '../../assets/icons/icon'
const Donation = ({ supportText, page }) => {
  return (
    <>
      <div className='donation-container global-padding'>
        <div className='donation-buttons'>
          <div className='input-box'>
            <h1>{supportText}</h1>
            <div className='button-flex'>
              <button>₹ 100</button>
              <button>₹ 500</button>
              <button>₹ 1000</button>
              <button>₹ 2000</button>
              <button>₹ 3000</button>
              <button>₹ 500</button>
            </div>
            <div className='enter-button'>
              <input type={'number'} placeholder='Enter Amount' />
            </div>

            <div className='checkboxes'>
              <label>
                <input type='checkbox' />
                <span>One time</span>
              </label>

              <label>
                <input type='checkbox' />
                <span>Monthly</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Annually</span>
              </label>
            </div>
            {page === 'alumni' && (
              <div className='citizen'>
                <h1>Select Citizenship:</h1>
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

          <div className='donate-button'>
            <CommonBtn text={'Donate'} />
          </div>
        </div>

        <div className='offline-option global-padding'>
          <h1>Offline Options</h1>
          <div className='offline-grid '>
            <div className='donation-logos'>
              {experience}
              <h2>ACH/ECS</h2>
              <br />
              <br />
              <p>
                All donations for The Yoga Institute projects can be made as a
                regular monthly contribution through ACH (Automatic Clearing
                House) / ECS (Electronic Clearing Service)
              </p>
            </div>
            <div className='donation-logos'>
              {experience}
              <h2>Cheque / Demand Draft</h2>
              <br />
              <br />
              <p>
                All donations are exempt from Income Tax under Section 80G of
                the Income Tax Act. Cheques and DDs are to be drawn in favour of
                The Yoga Institute.
              </p>
            </div>

            <div className='donation-logos'>
              {experience}
              <h2>In Kind Donation</h2>
              <br />
              <br />
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
          <br />
          <br />
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
