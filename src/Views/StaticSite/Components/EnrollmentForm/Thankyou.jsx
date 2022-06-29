import React from 'react'
import { Link } from 'react-router-dom'
import './Thankyou.scss'

const Thankyou = () => {
  return (
    <>
      <div className="background-img">
        <div className="cross">
          <Link to="/courses">
            <span>X</span>
          </Link>
        </div>
        <div className="thank-you">
          <h2>Thank You</h2>

          <p>Wishing you a successful yogic journey onwards</p>
        </div>
        
      </div>
    </>
  )
}

export default Thankyou
