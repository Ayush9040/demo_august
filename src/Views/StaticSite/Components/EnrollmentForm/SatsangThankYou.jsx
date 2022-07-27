import React from 'react'
import './formstyles.scss'
import { useNavigate } from 'react-router-dom'

const SatsangThankyou = () => {

  const navigate=useNavigate()

  return (
    <>
      <div id="overlay">
        <button onClick={()=>navigate('/courses')}>X</button>
        <div id="text">
          <p className="thankyou">Thank you</p>
          <p className="message">
          Enjoy the blissful satsang every sunday from 9.30am to 10.30am in the divine presence of Dr. Hansaji Yogendra
          </p>
        </div>
      </div>

      <div className="main-div"></div>
    </>
  )
}

export default SatsangThankyou