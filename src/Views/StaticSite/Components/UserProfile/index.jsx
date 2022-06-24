import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import HistoryList from '../HistoryList'
import InnerNavComponent from '../InnerNavComponent'
import './style.scss'


const UserProfile = () => {
  const [module, setModule] = useState(0)
  const { user } = useSelector((state) => state.auth)
  const navItems = [
    { option: user.data.firstName||'firstName', key: 0 },
    { option: 'Courses', key: 1 },
    { option: 'Orders', key: 2 },
    { option: 'Alumni', key: 3 },
  ]

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [
    ],
  }

  

  return (
    <div className='user-profile'>
      <InnerNavComponent abc={UserNav} />
      <div className='profile-grid'>
        <div className='profile-nav'>
          <div className='profile-nav-container'>
            <div id='profile-picture'></div>
            <ul>
              {navItems.map((item) => (
                <li
                  onClick={() => {
                    setModule(item.key)
                  }}
                  key={item.key}
                >
                  {item.option}
                  <div style={module===item.key ? { visibility:'visible' }:{}} className='bottom-line'></div>
                </li>
              ))}
            </ul>
            <div id='edit-account'>
              <span>Edit Account|FAQs</span>{' '}
            </div>
          </div>
        </div>
        <div className='profile-data'>
          {module === 0 && (
            <div className='profile-overview'>
              <h1 style={{ display: 'inline-block' }}>Overview</h1>
              <div id='order-list'>
                <HistoryList
                  title='Courses'
                  data={[]}
                  options={['All', 'Completed', 'On-going']}
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
            <div className='user-courses profile-overview'>
              <HistoryList
                title='Courses'
                data={[]}
                options={['All', 'Completed', 'On-going']}
              />
            </div>
          )}
          {module === 2 && (
            <div className='user-orders profile-overview'>
              {/* <HistoryList
                title='Orders'
                data={[]}
                options={['All', 'Delivered', 'On-going']}
              /> */}
            </div>
          )}
          {module === 3 && (
            <div className='user-testimony profile-overview' >
              <div id='testimony' >
                <h1 className='Alumini-heading'>Alumini</h1>
                <p className='Alumini-paragraph'>Write a testimony</p>
                <textarea rows='8' cols='40' className='Alumini-text' />
                <button className='Alumini-button'>Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
