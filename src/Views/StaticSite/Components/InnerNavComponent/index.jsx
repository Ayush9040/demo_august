import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './style.scss'
import {
  Hamburger,
  User,
  legacy1,
  CommonHamburger,
  CommonHamburger1,
  CommonUser,
  CommonUser1,
  // legacy2,
  MainLogo,
  MainLogo1,
} from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import MegaMenu from '../MegaMenu'

const InnerNavComponent = ({ abc }) => {
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
      <div className="inner-nav-container">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {abc.color === 'black'
              ? CommonHamburger1
              : abc.color === 'white'
                ? CommonHamburger
                : Hamburger}
          </div>
          <div className="main-logo">
            <Link to="/">
              {abc.color === 'orange'
                ? legacy1
                : abc.color === 'black'
                  ? MainLogo1
                  : MainLogo}
            </Link>
          </div>
          <div className="career-navigation-sm">
            <ul>
              {abc.menuItems.map((items) => {
                console.log(items.name, 'sahil rana')
                return (
                  <Link key={items.title} to={items.url}>
                    <li
                      className={
                        abc.title === items.innerTitle ? 'nav-active' : ''
                      }
                    >
                      {items.name}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className="user-container">
            <Link to="/sign-in">
              {abc.color === 'orange'
                ? User
                : abc.color === 'white'
                  ? CommonUser
                  : CommonUser1}
            </Link>
          </div>
        </div>

        <div className={'career-navigation-lg'} id={abc.title==='gallery' ? 'toggles' :''} >
          {abc.title === 'gallery' && (
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
            {abc.menuItems.map((items) => {
              return (
                <Link key={items.title} to={items.url}>
                  <li
                    className={abc.title === items.innerTitle ? 'nav-active' : ''}
                    style={
                      abc.menuColor === 'black'
                        ? { color: 'black', borderRight: '1px solid black' }
                        : { color: 'white', borderRight: '1px solid white' }
                    }
                  >
                    {items.name}
                  </li>
                </Link>
              )
            })}
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

export default InnerNavComponent
