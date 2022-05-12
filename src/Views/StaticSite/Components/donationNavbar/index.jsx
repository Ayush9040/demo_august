import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import { Hamburger, User, legacy1 } from '../../assets/icons/icon'
import { Link, useLocation } from 'react-router-dom'
const DonationNavBar = ({ innerNav }) => {
  const [nav, setNav] = useState(false)
  let location = useLocation()
  const currentPathname = location.pathname
  return (
    <>
      <div className="common-nav-container">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {Hamburger}
          </div>
          <div className="main-logo">
            <Link to="/">{legacy1}</Link>
          </div>
          {innerNav && (
            <div className="career-navigation-sm">
              <ul>
                <Link to="/careers">
                  <li
                    className={`${
                      currentPathname === '/careers' && 'nav-active'
                    }`}
                  >
                    Why TYI
                  </li>
                </Link>
                <Link to="/careers/benefits">
                  <li
                    className={`${
                      currentPathname === '/careers/benefits' && 'nav-active'
                    }`}
                  >
                    Benefits
                  </li>
                </Link>
                <Link to="/careers/ourcareer">
                  <li
                    className={`${
                      currentPathname === '/careers/ourcareer' && 'nav-active'
                    }`}
                  >
                    Our Careers
                  </li>
                </Link>
                <Link to="/careers/volunteer">
                  <li
                    className={`${
                      currentPathname === '/careers/volunteer' && 'nav-active'
                    }`}
                  >
                    Volunteer with us
                  </li>
                </Link>
                <Link to="/careers/values">
                  <li
                    className={`${
                      currentPathname === '/careers/values' && 'nav-active'
                    }`}
                    style={{ borderRight: '0' }}
                  >
                    Values
                  </li>
                </Link>
              </ul>
            </div>
          )}
          <div className="user-container">{User}</div>
        </div>
        {innerNav && (
          <div className="career-navigation-lg">
            <ul>
              <Link to="/careers">
                <li
                  className={`${
                    currentPathname === '/careers' && 'nav-active'
                  }`}
                >
                  Why TYI
                </li>
              </Link>
              <Link to="/careers/benefits">
                <li
                  className={`${
                    currentPathname === '/careers/benefits' && 'nav-active'
                  }`}
                >
                  Benefits
                </li>
              </Link>
              <Link to="/careers/ourcareer">
                <li
                  className={`${
                    currentPathname === '/careers/ourcareer' && 'nav-active'
                  }`}
                >
                  Our Careers
                </li>
              </Link>
              <Link to="/careers/volunteer">
                <li
                  className={`${
                    currentPathname === '/careers/volunteer' && 'nav-active'
                  }`}
                >
                  Volunteer with us
                </li>
              </Link>
              <Link to="/careers/values">
                <li
                  className={`${
                    currentPathname === '/careers/values' && 'nav-active'
                  }`}
                  style={{ borderRight: '0' }}
                >
                  Values
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

export default DonationNavBar
