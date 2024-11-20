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
          Enjoy the blissful samattvam every saturday from 2.00 pm to 5.00 pm in the divine presence of Dr. Hansaji Yogendra
          </p>
        </div>
      </div>

      <div className="main-div"></div>
    </>
  )
}

export default SamattvamThankyou