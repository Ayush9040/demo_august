import React, { useRef } from 'react'
import './styles.scss'

const AlertModal = ({ message }) => {

  const backgroundRef = useRef()
  const modalRef = useRef()

  const modalHandler = (status, type) => {
    if (status) {
      if (type == 'success') {
        modalRef.current.style.backgroundColor = '#54a851'
        modalRef.current.style.color = 'white'
      } else if (type == 'warning') {
        modalRef.current.style.backgroundColor = '#cf973e'
        modalRef.current.style.color = 'white'
      } else {
        modalRef.current.style.backgroundColor = '#fc4935'
        modalRef.current.style.color = 'white'
      }
      backgroundRef.current.style.display = 'block'
    } else
      backgroundRef.current.style.display = 'none'
  }

  return (
    <>
      <div className='modal-background' ref={backgroundRef}>
        <div className='modal-main' ref={modalRef}>
          <span className="close-popup" onClick={() => { modalHandler(false) }}>&times;</span>
          <header className='modal-header'>
            <h3>{message.type}</h3>
          </header>
          <div className='modal-message'>
            <p>{message.message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertModal