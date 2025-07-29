import React from 'react'
import { useNavigate } from 'react-router-dom'
import { legacy1 } from '../../assets/icons/icon'
import './styles.scss'

const Pagenotfound = () => {
  const navigate = useNavigate()

  return(
    <div className='page-main'>
      <div className='legacy-icon'>{legacy1}</div>
      <h1 className='page-header'>404</h1>
      <p className='page-para'>Oops, The page you&apos;re looking for doesn&apos;t exist</p>
      {/* <p className='page-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p> */}
      <button onClick={ ()=>{ navigate('/') } } className='page-button'>Home</button>
    </div>
  )
}

export default Pagenotfound