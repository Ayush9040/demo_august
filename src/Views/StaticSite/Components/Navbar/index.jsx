import React, { useState,lazy, useEffect } from 'react'
import './styles.scss'
import { Hamburger, Cart, User, Search } from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import { logoutUserAction } from '../../Views/Authentication/Auth.actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const MegaMenu = lazy(()=>import('../MegaMenu'))

const Navbar = ({ isUserLoggedIn }) => {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const [dropdown,setDropdown]=useState(false)
  const [scrollClass,setScrollClass] = useState(false)
  const [scrollImg,setScrollClImg] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset >= 150) {
        setScrollClass(true)
        setScrollClImg(true)
      }else {
        setScrollClass(false)
        setScrollClImg(false)
      }
    })
  }, [])
  return (
    <>
      <div id='hero-overlay' >
        <div className={`navbar-container ${scrollClass? 'navigation-color' : '' }`}>
          <div
            className="hamburger"
            onClick={() => {
              setNav(true)
            }}
          >
          
            {Hamburger}
          </div>
          <div className="title-logo" >
            <span className='mobile-search' onClick={ ()=>{navigate('/')} } >{ Search }</span>
            <div className={`header-logo ${scrollImg? 'navigation-img' : ''}`}>
              <img
                style={{ transition: 'none !important' }}
                placeholder="none"
                alt='The Yoga Institute'
                src="https://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/tyi.png"
              />
            </div>
            <div className="header-title"></div>
          </div>
          <div className="quick-actions">
            <ul>
              <Link to='/search'>
                <li onClick={ ()=>{navigate('/')} } >{Search}</li></Link>
              <Link to="/shop">
                <li>{Cart}</li>
              </Link>
              {/* <Link className='comingSoon' to="/">
                <li>{Gift}</li>
              </Link> */}
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
        </div>
      </div>
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
  )
}

export default Navbar
