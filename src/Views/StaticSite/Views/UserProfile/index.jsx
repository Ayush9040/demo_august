import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import HistoryList from './HistoryList'
import InnerNavComponent from '../../Components/InnerNavComponent'
import { fetchUserOrders } from './Profile.api'
import './style.scss'

const UserProfile = () => {
  let navigate = useNavigate()
  const [module, setModule] = useState(0)
  const { user,isLoggedIn } = useSelector((state) => state.auth)
  const [ orders,setOrders ] = useState([])
  const navItems = [
    { option: user?.data?.firstName || 'firstName', key: 0 },
    { option: 'Courses', key: 1 },
    { option: 'Orders', key: 2 },
    { option: 'Alumni', key: 3 },
  ]

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }



  const getOrderData = async() => {
    const { data } = await fetchUserOrders(user?.data?._id)
    setOrders(data.data)
  }




  useEffect(() => {
    isLoggedIn ? getOrderData():navigate('/user/sign-in')
  }, [ user ])
  return (
    <div className="user-profile">
      <InnerNavComponent abc={UserNav} />
      <div className="profile-grid">
        <div className="profile-nav">
          <div className="profile-nav-container">
            <div id="profile-picture"></div>
            <ul>
              {navItems.map((item) => {
                if (item.key === 1) {
                  return (
                    <div
                      onClick={() => setModule(item.key)}
                      key={item.key}
                      className="coming-soon"
                    >
                      <li>
                        {item.option}
                        <div className="bottom-line"></div>
                      </li>
                    </div>
                  )
                } 
                else {
                  return (
                    <div key={item.key} >
                      <li
                        onClick={() => {
                          setModule(item.key)
                        }}
                        
                        style={
                          module === item.key || item.key === 0
                            ? { fontWeight: '700' }
                            : {}
                        }
                      >
                        {item.option}
                        <div
                          style={
                            module === item.key ? { visibility: 'visible' } : {}
                          }
                          className="bottom-line"
                        ></div>
                      </li>
                    </div>
                  )
                }
              })}
            </ul>
            <div id="edit-account">
              <Link to={'/user/edit-account'}>Edit Account</Link>|
              <Link to={'/faqs'}>FAQs</Link>
            </div>
          </div>
        </div>
        <div className="profile-data">
          {module === 0 && (
            <div className="profile-overview">
              <h1 style={{ display: 'inline-block' }}>Overview</h1>
              <div id="order-list">
                <HistoryList
                  title='Orders'
                  data={orders}
                  options={['All', 'Placed', 'Shipped','Out_for_Delivery','Delivered']}
                />
                {/* <HistoryList
                  title='Orders'
                  data={[]}
                  options={['All', 'Delivered', 'On-going']}
                /> */}
              </div>
            </div>
          )}
          {module === 1 && (
            <div className="user-courses profile-overview">
              {/* <HistoryList
                title='Courses'
                data={[]}
                options={['All', 'Completed', 'On-going']}
              /> */}
            </div>
          )}
          {module === 2 && (
            <div className="user-orders profile-overview">
              <HistoryList
                title='Orders'
                data={orders}
                options={['All', 'Placed', 'Shipped','Out_for_Delivery','Delivered']}
              />
            </div>
          )}
          {module === 3 && (
            <div className="user-testimony profile-overview">
              <div id="testimony">
                <h1 className="Alumini-heading">Alumini</h1>
                <p className="Alumini-paragraph">Write a testimony</p>
                <textarea rows="8" cols="40" className="Alumini-text" />
                <button className="Alumini-button">Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
