import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import {
  Hamburger,
  CommonHamburger,
  User,
  CommonUser,
  legacy1,
  MainLogo,
} from '../../assets/icons/icon'
import './style.scss'
import { Link } from 'react-router-dom'

const MediaNav = ({ title }) => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <div className="media-nav-container">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {title === 'Gallery' ? CommonHamburger : Hamburger}
          </div>
          <div className="main-logo">
            <Link to="/">{title === 'Gallery' ? MainLogo : legacy1}</Link>
          </div>
          <div className={`career-navigation-sm ${title}`}>
            <ul>
              {/* <Link to="/alumni"><li className={title === 'Newsletter' ? 'nav-active' : ''}>Newsletter</li></Link> */}
              <Link to="/media">
                <li className={title === 'Gallery' ? 'nav-active' : ''}>
                  Gallery
                </li>
              </Link>
              <Link to="/media/news">
                <li className={title === 'News' ? 'nav-active' : ''}>News</li>
              </Link>
              <Link to="/media/events">
                <li
                  className={title === 'Events' ? 'nav-active' : ''}
                  style={{ borderRight: '0' }}
                >
                  Events
                </li>
              </Link>
            </ul>
          </div>
          <div className="user-container">
            {title === 'Gallery' ? CommonUser : User}
          </div>
        </div>
        <div className={`career-navigation-lg ${title}`}>
          <ul>
            {/* <Link to="/alumni"><li className={title === 'Newsletter' ? 'nav-active' : ''}>Newsletter</li></Link> */}
            <Link to="/media">
              <li className={title === 'Gallery' ? 'nav-active' : ''}>
                Gallery
              </li>
            </Link>
            <Link to="/media/news">
              <li className={title === 'News' ? 'nav-active' : ''}>News</li>
            </Link>
            <Link to="/media/events">
              <li
                className={title === 'Events' ? 'nav-active' : ''}
                style={{ borderRight: '0' }}
              >
                Events
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

export default MediaNav
