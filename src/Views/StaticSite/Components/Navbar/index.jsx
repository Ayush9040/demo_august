import React, { useState, lazy, useEffect } from 'react'
import './styles.scss'
import { Hamburger, Cart, User, Search } from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import { logoutUserAction } from '../../Views/Authentication/Auth.actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  CartBlack,
  CartWhite,
} from '../../assets/icons/icon'

const MegaMenu = lazy(() => import('../MegaMenu'))

const Navbar = ({ isUserLoggedIn, abc }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [scrollClass, setScrollClass] = useState(false)
  const [scrollImg, setScrollClImg] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const dispatch = useDispatch()
  const [bold, setBold] = useState(0)
  const [cartItems, setCartItems] = useState(0)

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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 150) {
        setScrollClass(true)
        setScrollClImg(true)
      } else {
        setScrollClass(false)
        setScrollClImg(false)
      }
    })
  }, [])

  const hasItems = cartItems && cartItems > 0;

  useEffect(() => {
    setCartItems(getTotal())
    if (location.pathname === '/media/video-gallery') {
      setBold(1)
    } else {
      setBold(0)
    }
  }, [cart])

  useEffect(() => {
    if (location.pathname === '/blogs') {
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }, [showSearch])


  console.log('hasItems', hasItems);
  console.log('cartItems from Nav', cartItems);


  return (
    <>
      <div id='hero-overlay' >
        <div className={`navbar-container ${scrollClass ? 'navigation-color' : ''}`}>
          <div
            className="hamburger"
            onClick={() => {
              setNav(true)
            }}
          >

            {Hamburger}
          </div>
          <div className="title-logo" >
            <span className='mobile-search' onClick={() => { navigate('/') }} >{Search}</span>
            <div className={`header-logo ${scrollImg ? 'navigation-img' : ''}`}>
              <img
                style={{ transition: 'none !important' }}
                alt='The Yoga Institute'
                src="https://ecom-oss-bucket-prod.s3.ap-south-1.amazonaws.com/PG-image/tyi31f6b294-a040-40c6-b68a-688ded55f9a2.webp"
                width={'100px'}
                height={'100px'}
                fetchpriority="high"
              />
            </div>
            <div className="header-title"></div>
          </div>
          <div className="quick-actions">
            <ul>
              {
                showSearch && (
                  <Link to='/search'>
                <li onClick={() => { navigate('/') }} >{<img src='/images/search.svg' alt='' className='down-arrow' loading='lazy' />}</li></Link>
                )
              }
              {/* <Link to="/shop">
                <li>{Cart}</li>
              </Link> */}

              {hasItems == true && (
                <Link to='/shop/cart'>
                  <li>{abc.color === 'white' ? Cart : abc.color === 'orange' ? CartWhite : CartBlack}  <span style={{ color: '#CA4625' }} className='cart-count' >{cartItems}</span></li></Link>
              )}



              {/* <Link className='comingSoon' to="/">
                <li>{Gift}</li>
              </Link> */}
              {/* <Link onMouseOver={() => { setDropdown(true) }} onMouseOut={() => { setDropdown(false) }} to={isUserLoggedIn ? '/user/profile' : '/user/sign-in'}>
                <li className='cover'>{isUserLoggedIn ? (
                  <div className='wrapper_logo'>
                    <div>
                    <img src="/images/user_login.svg" alt="primary-logo" loading="lazy" />
                    </div>
                    <div>
                      <p style={{fontSize: '10px', fontWeight: '400', color: '#CA4625'}}>Namaste</p>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: '#CA4625'}}>{truncatedName}</p>
                    </div>
                    <div>
                      <img src='/images/Chevron down.svg' alt='' className='down-arrow' loading='lazy' />
                    </div>
                  </div>
                ) : User}
                  <div style={dropdown === true && isUserLoggedIn ? { display: 'block' } : {}} className='user-dropdown'>
                    <ul style={{ borderRadius: '8px', boxShadow: '0px -2px 2px 0px rgba(0, 0, 0, 0.1)'}}>
                      <li style={{ borderRadius: '8px 8px 0px 0px'}} onClick={() => navigate('/user/profile')} >User Profile</li>
                      <li style={{ borderRadius: '0px 0px 8px 8px'}} onClick={async () => { await dispatch(logoutUserAction()); navigate('/user/sign-in') }} >Logout</li>
                    </ul>
                  </div>
                </li>
              </Link> */}
              {
                isUserLoggedIn ? (
                  <li
                    className='cover'
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
                      <div style={{ paddingRight: '5px' }} className='chevr-bd'>
                        <img src='/images/Chevron down.svg' alt='' className='down-arrow' loading='lazy' />
                      </div>
                    </div>

                    {dropdown ? (
                      <div style={dropdown && isLoggedIn ? { display: 'block' } : {}} className='user-dropdown'>
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
                    ) : ''}
                  </li>
                ) : <li><Link to={'/user/sign-in'}>{User}</Link></li>
              }

            </ul>
          </div>
        </div>
      </div >
      {nav && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '200',
            overflow: 'auto'
          }}
        >
          <MegaMenu setNav={setNav} />
        </div>
      )
      }
    </>
  )
}

export default Navbar
