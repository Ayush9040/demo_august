import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import { Hamburger, User, legacy1, Cart } from '../../assets/icons/icon'
import './styles.scss'
import { Link } from 'react-router-dom'

const CommonBannerNav2 = ({ title }) => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <div className="common-nav-container-2">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {Hamburger}
          </div>
          <div className="main-logo">
            <Link to="/">{legacy1}</Link>
          </div>
          <div className="user-container">
            <div>{Cart}</div>
            <div>{User}</div>
          </div>
        </div>
      </div>

      {nav && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '200',
          }}
        >
          <MegaMenu setNav={setNav} />
        </div>
      )}
    </>
  )
}

export default CommonBannerNav2
