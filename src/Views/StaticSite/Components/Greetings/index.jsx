import React, { useState } from 'react'
import './styles.scss'
import { legacy1 } from '../../assets/icons/icon'

const Greeting = () => {
  const [greetModal, setGreetModal] = useState(true)

  //   setTimeout(() => {
  //     setGreetModal(false)
  //   }, 5000)

  return (
    <div className='greeting'>
      {greetModal && <div className='greeting-border'>
        <span className='greeting-close' onClick={() => setGreetModal(false
        )}>&times;</span>
        <div className='greeting-icon'>{legacy1}</div>
        <h1 className='greeting-heading'>Thank you</h1>
        <p className='greeting-paragraph'>for your valauble feedback</p>
      </div>}
    </div>
  )
}

export default Greeting