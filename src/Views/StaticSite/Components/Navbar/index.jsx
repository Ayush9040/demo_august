import React, { useState } from 'react'
import './styles.scss'
import { Hamburger, Search, Cart, Gift, User } from '../../assets/icons/icon'
import MegaMenu from '../MegaMenu'
import { Link } from 'react-router-dom'
import { logoutUserAction } from '../../Views/Authentication/Auth.actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navbar = ({ isUserLoggedIn }) => {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const [dropdown,setDropdown]=useState(false)
  const dispatch = useDispatch()

  return (
    <div id='hero-overlay' >
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
            <Link onMouseOver={()=>{setDropdown(true)}} onMouseOut={()=>{setDropdown(false)}} to={isUserLoggedIn ? '/user/profile' : '/user/sign-in'}>
              <li>{User}
                <div style={dropdown===true && isUserLoggedIn ?{ display:'block' }:{}} className='user-dropdown'>
                  <ul>
                    <li onClick={()=>navigate('/user/profile')} >User Profile</li>
                    <li onClick={async()=>{await dispatch(logoutUserAction());navigate('/user/sign-in')}} >Logout</li>
                  </ul>
                </div>
              </li>
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
    </div>
  )
}

export default Navbar
