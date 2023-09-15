import React, { useState, useEffect,lazy } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Hamburger,
  User,
  legacy1,
  CommonHamburger,
  CommonHamburger1,
  CommonUser,
  CommonUser1,
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
const MegaMenu = lazy(()=>import('../MegaMenu'))
import { logoutUserAction } from '../../Views/Authentication/Auth.actions'

const CorporateWellnessNavComponent = ({ abc }) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [nav, setNav] = useState(false)
  const [dropdown,setDropdown]=useState(false)
  const [bold, setBold] = useState(0)  // eslint-disable-line
  const [ cartItems,setCartItems ] = useState(0)
  const location = useLocation()
  const dispatch = useDispatch()
 
  const { cart } = useSelector((state)=>state.shop)

  const getTotal = ()=>{
    if(cart?.length===0) return
    let sum = 0
    cart?.forEach(item=>{
      sum+= item.quantity  
    })
    console.log(sum,'sum')
    return sum
  }


  useEffect(() => {
    setCartItems(getTotal())
    if (location.pathname === '/media/video-gallery') {
      setBold(1)
    } else {
      setBold(0)
    }
  }, [ cart ] )

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
          <div className="main-logo" id={`${ abc.color }`} >
            <span className='mobile-search' onClick={ ()=>{navigate('/')} } >{ abc.color === 'orange' ? Search:abc.color === 'black' ? SearchBlack : SearchWhite }</span>
            <Link className='mobile-search search-cart' style={{ marginLeft:'15px' }} to='/shop/cart'>        
              { abc.color === 'orange' ? Cart : abc.color === 'white' ? CartWhite : CartBlack }  <span  style={{ color:'#CA4625' }} className='cart-count' >{ cartItems }</span></Link>
              
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
          <div className="user-container">
            <button style={{ border: '0.5px solid #fff', backgroundColor: 'transparent', fontSize:'18px', fontWeight:'600', cursor:'pointer', borderRadius:'20px', color:'#fff', padding: '7px 16px' }} className='getinTouchbtn'>Get in Touch</button>
            <div className='profile-container' onMouseOver={()=>{setDropdown(true)}} onMouseOut={()=>{setDropdown(false)}}  >
              <Link to={isLoggedIn ? '/user/profile':'/user/sign-in'} >
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
        </div>

        {abc.menuItems.length!==0 && <div
          className={'career-navigation-lg'}
          id={abc.title === 'gallery' ? 'toggles' : ''}
        >
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

export default CorporateWellnessNavComponent