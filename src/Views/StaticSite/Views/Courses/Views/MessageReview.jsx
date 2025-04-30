import React from 'react'
import './MessageReview.scss'
import { useNavigate } from 'react-router-dom'

const MessageReview = ({ message, type, nav, closePopup, button, buttonAction }) => {
  const navigate = useNavigate()

  return (
    <div className={`messsage-modal ${type}`}>
      <div className="modal-body">
        <div
          className="close-popup"
          onClick={closePopup}
        >
          &#10005; 
        </div>
        <h1 className='msg-title'>{type}</h1>
        <h2 className='message' style={{marginTop: '1rem'}}>{message}</h2>
     
      </div>
    </div>
  )
}

export default MessageReview
