import React, { useEffect, useState } from 'react'
import MegaMenu from '../MegaMenu'
import {
  Hamburger,
  CommonHamburger,
  User,
  CommonUser,
  legacy1,
  MainLogo,
  // title,
} from '../../assets/icons/icon'
import './style.scss'
import { Link, useLocation } from 'react-router-dom'

const MediaNav = ({ title }) => {
  const [nav, setNav] = useState(false)

  const [bold, setBold] = useState(0)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/media/video') {
      setBold(1)
    } else {
      setBold(0)
    }
  }, [])

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
            <Link to="/sign-in">{title === 'Gallery' ? CommonUser : User}</Link>
          </div>
        </div>
        <div className={`career-navigation-lg ${title}`}>
          {title === 'Gallery' && (
            <ul id="gallery-toggle">
              <Link to="/media">
                <li style={bold === 0 ? { fontWeight: 'bold' } : {}}>Images</li>
              </Link>
              <Link to="/media/video">
                <li
                  style={
                    bold === 1
                      ? { borderRight: '0', fontWeight: 'bold' }
                      : { borderRight: '0' }
                  }
                >
                  Videos
                </li>
              </Link>
            </ul>
          )}
          <ul>
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
