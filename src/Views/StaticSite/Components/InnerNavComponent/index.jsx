import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
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
  Cart,
} from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import MegaMenu from '../MegaMenu'
import { logoutUserAction } from '../../Views/Authentication/Auth.actions'

const InnerNavComponent = ({ abc }) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [nav, setNav] = useState(false)
  const [dropdown,setDropdown]=useState(false)

  const [bold, setBold] = useState(0)
  const location = useLocation()
  const dispatch = useDispatch()
  console.log(bold,'b')

  useEffect(() => {
    if (location.pathname === '/media/video-gallery') {
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
                return (
                  <Link key={items.title} to={items.url}>
                    <li
                      className={
                        abc.title === items.innerTitle ? 'nav-active' : ''
                      }
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
          <div className="user-container" onMouseOver={()=>{setDropdown(true)}} onMouseOut={()=>{setDropdown(false)}} >
            
            {abc.title==='Shop'
              ?    <Link to='/shop'>        
                { Cart } </Link>
              :null
            }
           

            <Link to={isLoggedIn ? '/user/profile':'/user/sign-in'}>
              {abc.color === 'orange'
                ? User
                : abc.color === 'white'
                  ? CommonUser
                  : CommonUser1}
            </Link>

            <div style={dropdown===true && isLoggedIn ?{ display:'block' }:{}} className='user-dropdown'>
              <ul>
                <li onClick={()=>navigate('/user/profile')} >User Profile</li>
                <li onClick={async()=>{await dispatch(logoutUserAction());navigate('/user/sign-in')}} >Logout</li>
              </ul>
            </div>
          </div>
        </div>

        {abc.menuItems.length!==0 && <div
          className={'career-navigation-lg'}
          id={abc.title === 'gallery' ? 'toggles' : ''}
        >
          {/* {abc.title === 'gallery' && (
            <ul id="gallery-toggle">
              <Link to="/image-gallery">
                <li style={bold === 0 ? { fontWeight: 'bold' } : {}}>Images</li>
              </Link>
              <Link to="/video-gallery">
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
          )} */}
          <ul>
            {abc.menuItems.map((items) => {
              return (
                <Link key={items.title} to={items.url}>
                  <li
                    className={
                      abc.title === items.innerTitle ? 'nav-active' : ''
                    }
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
        </div>}
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
