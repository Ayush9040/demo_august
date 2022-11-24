import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const LandingButton = ({
  text,
  isColor,
  btnBorder,
  textColor,
  btnAction,
  url,
}) => {
  return (
    <div className="btn_div">
      <Link to={ `${ url }`}>
        <button
          className="global_btn"
          style={{ background: isColor, border: btnBorder, color: textColor }}
          onClick={btnAction}
        >
          <div className="global_btn_text">{text}</div>
        </button>
      </Link>
    </div>
  )
}

export default LandingButton
