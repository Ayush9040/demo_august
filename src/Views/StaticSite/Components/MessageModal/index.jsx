import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const MessageModal = ({ message, type, nav, closePopup }) => {
  const navigate = useNavigate()

  return (
    <div className={`messsage-modal ${type}`}>
      <div className="modal-body">
        <div
          className="close-popup"
          onClick={() => {
            nav ? navigate(`${nav}`) : closePopup(false)
          }}
        >
          X
        </div>
        <h1>{type}</h1>
        <h2>{message}</h2>
      </div>
    </div>
  )
}

export default MessageModal
