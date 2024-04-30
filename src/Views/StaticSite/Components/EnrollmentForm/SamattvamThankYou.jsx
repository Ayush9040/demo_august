import React from 'react'
import './formstyles.scss'
import { useNavigate } from 'react-router-dom'

const SamattvamThankyou = () => {

  const navigate=useNavigate()

  return (
    <>
      <div id="overlay">
        <button onClick={()=>navigate('/courses')}>X</button>
        <div id="text">
          <p className="thankyou">Thank you</p>
          <p className="message">
          Enjoy the blissful samattvam every sunday from 2.00am to 5.00am in the divine presence of Dr. Hansaji Yogendra
          </p>
        </div>
      </div>

      <div className="main-div"></div>
    </>
  )
}

export default SamattvamThankyou