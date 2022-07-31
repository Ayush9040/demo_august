import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const MessageModal = ({ message,type, nav }) => {

  const navigate = useNavigate()

  return (
    <div className={`messsage-modal ${type}`} >
      <div className='modal-body' >
        <div className='close-popup' onClick={
          ()=>{ nav ? navigate(`${nav}`) : navigate('/volunteer') }} >X</div>
        <h1>{type}</h1>
        <h3>{message}</h3>
      </div>
    </div>
  )
}

export default MessageModal