import React from 'react'

import './Thankyou.scss'
import { useNavigate } from 'react-router-dom'

const Thankyou = () => {

  const navigate=useNavigate()

  return (
    <>
      <div id="overlay">
        <button onClick={()=>navigate('/courses')}>X</button>
        <div id="text">
          <p className="thankyou">Thank you</p>
          <p className="message">
            Wishing you a successful yogic journey onwards
          </p>
        </div>
      </div>

      <div className="main-div"></div>
    </>
  )
}

export default Thankyou
