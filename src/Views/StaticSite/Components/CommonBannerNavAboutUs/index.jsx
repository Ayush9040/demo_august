import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import { CommonHamburger, CommonUser, MainLogo } from '../../assets/icons/icon'
import './styles.scss'
import { Link,useLocation } from 'react-router-dom'
const CommonBannerNavAboutUs = ({ innerNav }) => {
  const [nav, setNav] = useState(false)

  let location = useLocation()

  const currentPathname = location.pathname
  return (
    <>
      <div className="common-nav-container">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {CommonHamburger}
          </div>
          <div className="main-logo">
            <Link to="/">{MainLogo}</Link>
          </div>
          {innerNav && (
            <div className="career-navigation-sm">
              <ul>
                <Link to="/about">
                  <li
                    className={`${
                      currentPathname === '/about' && 'nav-active'
                    }`}
                  >
                    Overview
                  </li>
                </Link>
                <Link to="/about/our-legacy">
                  <li
                    className={`${
                      currentPathname === '/about/our-legacy' && 'nav-active'
                    }`}
                  >
                    Our Legacy
                  </li>
                </Link>
                <Link to="/about/blessings">
                  <li
                    className={`${
                      currentPathname === '/about/blessings' && 'nav-active'
                    }`}
                  >
                    {' '}
                    Pujya Maa Dr Hansaji’s blessings
                  </li>
                </Link>
              </ul>
            </div>
          )}
          <Link to="/sign-in">
            <div className="user-container">{CommonUser}</div>
          </Link>
        </div>
        {innerNav && (
          <div className="career-navigation-lg">
            <ul>
              <Link to="/about">
                <li
                  className={`${currentPathname === '/about' && 'nav-active'}`}
                >
                  Overview
                </li>
              </Link>
              <Link to="/about/our-legacy">
                <li
                  className={`${
                    currentPathname === '/about/our-legacy' && 'nav-active'
                  }`}
                >
                  Our Legacy
                </li>
              </Link>
              <Link to="/about/blessings">
                <li
                  className={`${
                    currentPathname === '/about/blessings' && 'nav-active'
                  }`}
                  style={{ border: 'none' }}
                >
                  Pujya Maa Dr Hansaji’s blessings
                </li>
              </Link>
            </ul>
          </div>
        )}
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

export default CommonBannerNavAboutUs
