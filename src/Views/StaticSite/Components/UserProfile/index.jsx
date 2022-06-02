import React from 'react'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import './style.scss'

const UserProfile = () => {
  return (
    <div className='user-profile' >
      <CommonBannerNavPrimary/>
      <div className='profile-grid' >
        <div className='profile-nav' >
          <div className='profile-nav-container' >
            <div id='profile-picture' ></div>
            <ul>
              <li>Full Name
                <div className="bottom-line"></div>
              </li>
              <li>Courses<div className="bottom-line"></div></li>
              <li>Orders<div className="bottom-line"></div></li>
              <li>Alumni<div className="bottom-line"></div></li>
            </ul>
            <div id='edit-account' ><span>Edit Account|FAQs</span> </div>
          </div>
        </div>
        <div className='profile-data' >
          <div className='profile-overview' >
            <h1 style={{ display:'inline-block' }} >Overview</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile