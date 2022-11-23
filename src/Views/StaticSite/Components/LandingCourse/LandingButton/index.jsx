import React from 'react'
import './style.scss'

const LandingButton = ({ text,isColor, btnBorder, textColor,btnAction }) => {
  return (
    <div className='btn_div'>
      <button
        className='global_btn'
        style={{ background: isColor , border:btnBorder, color:textColor }}
        onClick={btnAction}
      >
        <div className="global_btn_text">
          {text}
        </div>
      </button>
    </div>
  )
}

export default LandingButton
