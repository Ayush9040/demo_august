import React, { useState, useEffect, lazy } from 'react'
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
  Search,
  SearchBlack,
  SearchWhite,
  Cart,
  CartBlack,
  CartWhite,
} from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
const MegaMenu = lazy(() => import('../MegaMenu'))
import { logoutUserAction } from '../../Views/Authentication/Auth.actions'
import nutri_diet_logo from '../../Views/Courses/Views/images/nutri_diet_logo.svg'
import User_nutri_diet from '../../Views/Courses/Views/images/user_nutri_diet.svg'
import Nutridiet_logo_landing from '../../Views/Courses/Views/images/Nutridiet_logo_landing.png'

const InnerNavComponent = ({ abc }) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [nav, setNav] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [bold, setBold] = useState(0)  // eslint-disable-line
  const [cartItems, setCartItems] = useState(0)
  const location = useLocation()
  const dispatch = useDispatch()
  
  

  const { cart } = useSelector((state) => state.shop)

  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);
  const truncatedName = nameFromRedux && nameFromRedux.length > 10
    ? `${nameFromRedux.slice(0, 12)}...`
    : nameFromRedux;

  const getTotal = () => {
    if (cart?.length === 0) return
    let sum = 0
    cart?.forEach(item => {
      sum += item.quantity
    })
    console.log(sum, 'sum')
    return sum
  }

  const hasItems = cart && cart.length > 0;


  useEffect(() => {
    setCartItems(getTotal())
    if (location.pathname === '/media/video-gallery') {
      setBold(1)
    } else {
      setBold(0)
    }
  }, [cart])

  
  

  const isNutriDietLanding = location.pathname.includes("/nutri-diet_landing");

  // console.log(bold,'bold')
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

          <div className="main-logo" id={`${abc.color}`} >

          {isNutriDietLanding && (
              <div className='nutri_diet_nav_modify'>

                    <Link to="/">
                    {abc.color === 'orange'
                      ? legacy1
                      : abc.color === 'black'
                        ? MainLogo1
                        : MainLogo}
                  </Link>

                      <div className='vertical_line'></div>

                  <div style={{width: '117px', flexShrink: '0'}}>
                  <img src={nutri_diet_logo} alt="" style={{width: '100%'}} />
                  </div>

            </div>
          )
      }

            <span className='mobile-search' onClick={() => { navigate('/') }} >{abc.color === 'orange' ? Search : abc.color === 'black' ? SearchBlack : SearchWhite}</span>

            <Link className='mobile-search mobile-cart' style={{ marginLeft: '15px' }} to='/shop/cart'>
              {abc.color === 'orange' ? Cart : abc.color === 'white' ? CartWhite : CartBlack}  <span style={{ color: '#CA4625' }} className='cart-count' >{cartItems}</span></Link>

            {
              !isNutriDietLanding && (
                
                

                <Link to="/">
              {abc.color === 'orange'
                ? legacy1
                : abc.color === 'black'
                  ? MainLogo1
                  : MainLogo}
                </Link> 

                

            
              )
            }
          </div>
          <div className="career-navigation-sm">
            <ul>
              {abc.menuItems.map((items) => {
                return (
                  <Link key={items.title} to={items.url}>
                    <li
                      className={
                        abc?.title === items.innerTitle ? 'nav-active' : ''
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
          <div className="user-container">
            {/* <div onClick={ ()=>{navigate('/search')} } >{ abc.color === 'orange' ? Search:abc.color === 'black' ? SearchBlack : SearchWhite }</div> */}

            {
              !isNutriDietLanding && (
                <div onClick={() => { navigate('/search') }} ><img src='/images/search.svg' alt='' loading='lazy' /></div>
              )
            }


            {hasItems && (
              <Link to='/shop/cart'>

                {abc.color === 'orange' ? Cart : abc.color === 'white' ? CartWhite : CartBlack}  <span style={{ color: '#CA4625' }} className='cart-count' >{cartItems}</span></Link>
            )}

            {/* <div className='profile-container' onMouseOver={()=>{setDropdown(true)}} onMouseOut={()=>{setDropdown(false)}}  >
              <Link to={isLoggedIn ? '/user/profile':'/user/sign-in'} >
                {isLoggedIn ? (
                  <div className='wrapper_logo'>
                    <div>
                    <img src="/images/user_login.svg" alt="primary-logo" loading="lazy" />
                    </div>
                    <div>
                      <p style={{fontSize: '10px', fontWeight: '400', color: '#CA4625'}}>Namaste</p>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: '#CA4625'}}>{truncatedName}</p>
                    </div>
                    <div className='icon-rotate'>
                      <img src='/images/Chevron down.svg' alt='' loading='lazy' />
                    </div>
                  </div>
                ) : abc.color === 'orange'
                  ? User
                  : abc.color === 'white'
                    ? CommonUser
                    : CommonUser1}
              </Link>
              <div style={dropdown===true && isLoggedIn ?{ display:'block' }:{}} className='user-dropdown'>
                <ul style={{ borderRadius: '8px', boxShadow: '0px -2px 2px 0px rgba(0, 0, 0, 0.1)'}} >
                  <li style={{ borderRadius: '8px 8px 0px 0px'}} onClick={()=>navigate('/user/profile')} >User Profile</li>
                  <li style={{ borderRadius: '0px 0px 8px 8px'}} onClick={async()=>{await dispatch(logoutUserAction());navigate('/user/sign-in')}} >Logout</li>
                </ul>
              </div>
            </div> */}

            {
              isLoggedIn ? (
                <div
                  className='profile-container'
                  onMouseOver={() => setDropdown(true)}
                  onMouseOut={() => setDropdown(false)}
                >
                  <div className='wrapper_logo'>
                    <div>
                      <img src="/images/user_login.svg" alt="primary-logo" loading="lazy" />
                    </div>
                    <div className='namastetext'>
                      <p style={{ fontSize: '10px', fontWeight: '400', color: '#CA4625' }}>Namaste</p>
                      <p style={{
                        fontSize: '14px', fontWeight: '700', color: '#CA4625', whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '110px'
                      }}>{truncatedName}</p>
                    </div>
                    <div className='icon-rotate chevr-bd' style={{ width: '22px' }} >
                      <img src='/images/Chevron down.svg' alt='' loading='lazy' />
                    </div>
                  </div>

                  <div style={dropdown && isLoggedIn ? { display: 'block',zIndex:11 } : {zIndex:11}} className='user-dropdown' >
                    <ul style={{ borderRadius: '8px', boxShadow: '0px -2px 2px 0px rgba(0, 0, 0, 0.1)' }}>
                      <li
                        style={{ borderRadius: '8px 8px 0px 0px' }}
                        onClick={() => navigate('/user/profile')}
                      >
                        User Profile
                      </li>
                      <li
                        style={{ borderRadius: '0px 0px 8px 8px' }}
                        onClick={async () => {
                          await dispatch(logoutUserAction());
                          navigate('/user/sign-in');
                        }}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (isNutriDietLanding ? (<Link to={'/user/sign-in'}><img src={User_nutri_diet} /></Link>) :( <Link to={'/user/sign-in'}>{User}</Link>))
            }


          </div>
        </div>


        {abc.menuItems.length !== 0 && <div
          className={'career-navigation-lg'}
          id={abc?.title === 'gallery' ? 'toggles' : ''}
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
                      abc?.title === items.innerTitle ? 'nav-active' : ''
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
