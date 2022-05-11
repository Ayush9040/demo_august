import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import { CommonHamburger, CommonUser, MainLogo } from '../../assets/icons/icon'
import './styles.scss'
import { Link, useLocation } from 'react-router-dom'
const CommonBannerNav = ({ innerNav }) => {
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
      
                <Link to="/join-our-team">
                  <li
                    className={`${
                      currentPathname === '/join-our-team' && 'nav-active'
                    }`}
                  >
                    Volunteer with us
                  </li>
                </Link>
                <Link to="/join-our-team/values">
                  <li
                    className={`${
                      currentPathname === '/join-our-team/values' &&
                      'nav-active'
                    }`}
                    style={{ borderRight: '0' }}
                  >
                    Values
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
          <div className="career-navigation-lg ">
            <ul>
              {/* <Link to="/careers"><li className={`${currentPathname === "/careers" && "nav-active"}`}>Why TYI</li></Link>
          <Link to="/careers/benefits"><li className={`${currentPathname === "/careers/benefits" && "nav-active"}`}>Benefits</li></Link>
          <Link to="/careers/ourcareer"><li className={`${currentPathname === "/careers/ourcareer" && "nav-active"}`}>Our Careers</li></Link> */}
              <Link to="/join-our-team">
                <li
                  className={`${
                    currentPathname === '/join-our-team' && 'nav-active'
                  }`}
                >
                  Volunteer with us
                </li>
              </Link>
              <Link to="/join-our-team/values">
                <li
                  className={`${
                    currentPathname === '/join-our-team/values' && 'nav-active'
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

export default CommonBannerNav
