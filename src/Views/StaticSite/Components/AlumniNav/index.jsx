import React, { useState } from 'react'
import MegaMenu from '../MegaMenu'
import {
  CommonHamburger1,
  CommonHamburger,
  CommonUser1,
  CommonUser,
  MainLogo1,
  MainLogo,
} from '../../assets/icons/icon'
import './styles.scss'
import { Link } from 'react-router-dom'

const AlumiNav = ({ title }) => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <div className="alumni-nav-container">
        <div className="mega-nav">
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {title === 'Support' ? CommonHamburger : CommonHamburger1}
          </div>
          <div className="main-logo">
            <Link to="/">{title === 'Support' ? MainLogo : MainLogo1}</Link>
          </div>
          <div className={`career-navigation-sm ${title}`}>
            <ul>
              {/* <Link to="/alumni"><li className={title === 'Newsletter' ? 'nav-active' : ''}>Newsletter</li></Link> */}
              <Link to="/alumni">
                <li className={title === 'Seminar' ? 'nav-active' : ''}>
                  Upcoming Events
                </li>
              </Link>
              <Link to="/alumni/alumni-gallery">
                <li className={title === 'AlumniGallery' ? 'nav-active' : ''}>
                  Alumni Gallery
                </li>
              </Link>
              <Link to="/alumni/support">
                <li className={title === 'Support' ? 'nav-active' : ''}>
                  Support your Alma Mater
                </li>
              </Link>
              <Link to='/' >
                <li
                  className={title === 'Contact' ? 'nav-active' : ''}
                  style={{ borderRight: '0' }}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="user-container">
            {title === 'Support' ? CommonUser : CommonUser1}
          </div>
        </div>
        <div className={`career-navigation-lg ${title}`}>
          <ul>
            {/* <Link to="/alumni"><li className={title === 'Newsletter' ? 'nav-active' : ''}>Newsletter</li></Link> */}
            <Link to="/alumni">
              <li className={title === 'Seminar' ? 'nav-active' : ''}>
                Upcoming Events
              </li>
            </Link>
            <Link to="/alumni/alumni-gallery">
              <li className={title === 'AlumniGallery' ? 'nav-active' : ''}>
                Alumni Gallery
              </li>
            </Link>
            <Link to="/alumni/support">
              <li className={title === 'Support' ? 'nav-active' : ''}>
                Support your Alma Mater
              </li>
            </Link>
            <Link to='/' >
              <li
                className={title === 'Contact' ? 'nav-active' : ''}
                style={{ borderRight: '0' }}
              >
                Contact
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

export default AlumiNav
