import React, { useState } from 'react'
import './styles.scss'
import { Hamburger, Search, Cart, Gift, User } from '../../assets/icons/icon'
import MegaMenu from '../MegaMenu'
import { Link } from 'react-router-dom'

const Navbar = ({ isUserLoggedIn }) => {
  const [nav, setNav] = useState(false)

  return (
    <div className="navbar-container">
      <div
        className="hamburger"
        onClick={() => {
          setNav(true)
        }}
      >
        {Hamburger}
      </div>
      <div className="title-logo">
        <div className="header-logo">
          <img
            style={{ transition: 'none !important' }}
            placeholder="none"
            src="http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/tyi.png"
          />
        </div>
        <div className="header-title"></div>
      </div>
      <div className="quick-actions">
        <ul>
          <li>{Search}</li>
          <Link to="/shop/checkout">
            <li>{Cart}</li>
          </Link>
          <Link to="/gifting">
            <li>{Gift}</li>
          </Link>
          <Link to={isUserLoggedIn ? '/user/profile' : '/user/sign-in'}>
            <li>{User}</li>
          </Link>
        </ul>
      </div>
      <>
        {nav && (
          <div
            style={{
              position: 'fixed',
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
    </div>
  )
}

export default Navbar
