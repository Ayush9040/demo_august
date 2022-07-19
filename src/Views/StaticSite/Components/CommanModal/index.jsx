import React, { useState } from 'react'
import './style.scss'

const CommanModal = ({ image, closeModal }) => {
  return (
    <div className="alumni_modal_main">
      <div className="alumni_image_box">
        <img src={image} alt="" />
      </div>
      <button onClick={()=>closeModal(false)} className="cross_button">
        x
      </button>
    </div>
  )
}

export default CommanModal
