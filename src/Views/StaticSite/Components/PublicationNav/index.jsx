import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import { CommonHamburger, CommonUser, MainLogo } from '../../assets/icons/icon'
import './styles.scss'
import { Link } from 'react-router-dom'

const PublicationNav = ({ title }) => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <div className="common-nav-container-3">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {CommonHamburger}
          </div>
          <div className="main-logo">
            <Link to="/">{MainLogo}</Link>
          </div>
          <div className="career-navigation-sm">
            <ul>
              <Link to="/publication">
                <li className={title === 'yoga-health' ? 'nav-active' : ''}>
                  Yoga & Total Health
                </li>
              </Link>
              <Link to="/publication/yogasattva">
                <li className={title === 'yogasattva' ? 'nav-active' : ''}>
                  Yogsattva
                </li>
              </Link>
              <Link to="">
                <li className={title === 'books' ? 'nav-active' : ''}>Books</li>
              </Link>
              <Link to="">
                <li className={title === 'ebooks' ? 'nav-active' : ''}>
                  Free E-Books
                </li>
              </Link>
              <Link to="/publication/library">
                <li
                  className={title === 'library' ? 'nav-active' : ''}
                  style={{ borderRight: '0' }}
                >
                  Library
                </li>
              </Link>
            </ul>
          </div>

          <div className="user-container">
            <Link to="/sign-in"> {CommonUser}</Link>
          </div>
        </div>
        <div className="career-navigation-lg">
          <ul>
            <Link to="/publication">
              <li className={title === 'yoga-health' ? 'nav-active' : ''}>
                Yoga & Total Health
              </li>
            </Link>
            <Link to="/publication/yogasattva">
              <li className={title === 'yogasattva' ? 'nav-active' : ''}>
                Yogsattva
              </li>
            </Link>
            <Link to="">
              <li className={title === 'books' ? 'nav-active' : ''}>Books</li>
            </Link>
            <Link to="">
              <li className={title === 'ebooks' ? 'nav-active' : ''}>
                Free E-Books
              </li>
            </Link>
            <Link to="/publication/library">
              <li
                className={title === 'library' ? 'nav-active' : ''}
                style={{ borderRight: '0' }}
              >
                Library
              </li>
            </Link>
          </ul>
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

export default PublicationNav
