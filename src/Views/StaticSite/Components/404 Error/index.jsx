import React from 'react'
import { legacy1 } from '../../assets/icons/icon'
import './styles.scss'

const Pagenotfound = () => {
  return(
    <div className='page-main'>
      <div className='legacy-icon'>{legacy1}</div>
      <h1 className='page-header'>404</h1>
      <p className='page-para'>Oops, The page you&apos;re looking for doesn&apos;t exist</p>
      <p className='page-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      <button className='page-button'>Home</button>
    </div>
  )
}

export default Pagenotfound