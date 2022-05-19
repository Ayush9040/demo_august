import React, { useState } from 'react'
import { legacy2, cross, filler, filler1 } from '../../assets/icons/icon'
import './style.scss'
import { Link } from 'react-router-dom'

const MegaMenu = ({ setNav }) => {
  const [menuItem, setMenuItem] = useState('COURSES')

  const navItems = [
    {
      name: 'ABOUT',
      link: '/about',
      id: 1,
      key: 'ABOUT',
    },
    { name: 'COURSES', link: '/courses', id: 2, key: 'COURSES' },
    { name: 'FACILITIES', link: '/facilities', id: 3, key: 'FACILITIES' },
    { name: 'MUSEUM', link: '/museum', id: 4, key: 'MUSEUM' },
    { name: 'DONATE', link: '/donation', id: 5, key: 'DONATION' },
    { name: 'GIFTING', link: '/gifting', id: 6, key: 'GIFTING' },
    { name: 'NISPAND', link: '', id: 7, key: 'NISPAND' },
    { name: 'TYI ONLINE', link: '', id: 8, key: 'ONLINE' },
    {
      name: 'PUBLICATIONS',
      link: '/publication',
      id: 9,
      key: 'PUBLICATIONS',
    },
    { name: 'SHOP', link: '/shop', id: 10, key: 'SHOP' },
    { name: 'NEWS,EVENTS & MEDIA', link: '/media', id: 11, key: 'NEWS' },
    { name: 'ALUMNI', link: '/alumni', id: 12, key: 'ALUMNI' },
    { name: 'VOLUNTEER', link: '/join-our-team', id: 13, key: 'VOLUNTEER' },
  ]

  const subMenu = {
    ABOUT: [
      {
        menu: 'Overview',
        link: '/about',
      },
      {
        menu: 'Our Legacy',
        link: '/about/our-legacy',
      },
      {
        menu: 'Pujya Maa Dr Hansaji’s blessings',
        link: '/about/blessings',
      },
    ],
    PUBLICATIONS: [
      { menu: 'Yoga & Total Heath', link: '/publication' },
      { menu: 'Yogsattva', link: '/publication/yogasattva' },
      { menu: 'Books', link: '/publication/books' },
      { menu: 'Free E-Books', link: '/publication/e-books' },
      { menu: 'Library', link: '/publication/library' },
    ],
    MUSEUM: [
      { menu: 'Overview', link: '/museum' },
      { menu: 'Virual Tour', link: '/museum' },
      { menu: 'Gallery', link: '/museum' },
      { menu: 'location', link: '/museum' },
    ],
    FACILITIES: [
      { menu: 'Overview', link: '/facilities' },
      { menu: 'Facilities', link: '/facilities' },
      { menu: 'Rules and Regulations', link: '/facilities' },
    ],
    SHOP: [
      { menu: 'All Categories', link: '/shop' },
      { menu: 'Books', link: '/shop' },
      { menu: 'T-shirts', link: '/shop' },
      { menu: 'Mats', link: '/shop' },
      { menu: 'Bags', link: '/shop' },
      { menu: 'Snacks', link: '/shop' },
    ],
    GIFTING: [
      { menu: 'Overview', link: '/Gifting' },
      { menu: 'Gift Career', link: '/Gifting' },
      { menu: 'Gift Health and Wellness', link: '/Gifting' },
      { menu: 'Gidt wisdom', link: '/Gifting' },
      { menu: 'Gift Nispand', link: '/Gifting' },
    ],
    DONATION: [
      { menu: 'Overview', link: '/donation' },
      { menu: 'Annam brahma', link: '/donation' },
      { menu: 'Truckasana', link: '/donation' },
      { menu: 'Yoga for the Underprivileged', link: '/donation' },
      { menu: 'Yoga for Transgender Community', link: '/donation' },
      { menu: 'Yoga for Children with special needs', link: '/donation' },
      { menu: 'Underprivileged Children in BMC schools', link: '/donation' },
      { menu: 'Police', link: '/donation' },
    ],
    NEWS: [
      { menu: 'Gallery', link: '/media' },
      { menu: 'News', link: '/media/news' },
      { menu: 'Events', link: '/media/events' },
    ],
    ALUMNI: [
      { menu: 'Upcomin Events', link: '/alumni' },
      { menu: 'Alumni Gallery', link: '/alumni/gallery' },
      { menu: 'Support Your Alma Mater', link: '/alumni/support' },
    ],
    VOLUNTEER: [
      { menu: 'Volunteer with us', link: '/join-our-team' },
      { menu: 'Values', link: '/join-our-team/values' },
    ],
  }
  return (
    <div className='mega-menu-container'>
      <div className='left-menu'>
        <div
          className='cross'
          onClick={() => {
            setNav(false)
          }}
        >
          {cross}
        </div>
        <div className='menu-logo'>
          <Link to='/'>{legacy2}</Link>
        </div>
        <ul className='navigation-ul'>
          {navItems &&
            navItems.map((item, i) => {
              if (item.name !== 'LOCATE US') {
                return (
                  <Link
                    onMouseOver={() => {
                      setMenuItem(item.key)
                    }}
                    onClick={() => {
                      setNav(false)
                    }}
                    to={`${item.link}`}
                    key={i}
                  >
                    <li>
                      {item.name}
                      <div
                        style={{
                          marginTop: '0',
                          background:
                            'linear-gradient(90deg,#fff,#BC4F31,#BC4F31,#fff)',
                        }}
                        className='bottom-line'
                      ></div>
                    </li>
                  </Link>
                )
              } else {
                return (
                  <a
                    href='https://goo.gl/maps/bxH6SifrXjXAhteV7'
                    target='_blank'
                    rel='noreferrer'
                    onMouseOver={() => {
                      setMenuItem(item.key)
                    }}
                  >
                    <li>
                      {item.name}
                      <div
                        style={{
                          marginTop: '0',
                          background:
                            'linear-gradient(90deg,#fff,#BC4F31,#BC4F31,#fff)',
                        }}
                        className='bottom-line'
                      ></div>
                    </li>
                  </a>
                )
              }
            })}
        </ul>
      </div>
      <div
        className={
          menuItem === 'COURSES' ? 'right-menu' : 'right-menu sub-menu'
        }
      >
        {menuItem === 'COURSES' && (
          <>
            <div className='single-menu'>
              <h3>TEACHERS TRAINING</h3>
              <ul>
                <li className='text-bold'>200 Hour Courses</li>
                <li>Two Months Training Course - On Campus</li>
                <li>Weekend Training Course - 3 Months / Online - English</li>
                <li>One Month Training Course - Online / On Campus</li>
                <li>Two Month Training Course - Part Time/ Online - Hindi</li>
                <li style={{ marginBottom: '1.5rem' }}>
                  Teacher Training Course - Part Time/ Online- English
                </li>
                <li className='text-bold'>500 Hour Courses</li>
                <li style={{ marginBottom: '1.5rem' }} >Three Months Teacher Training Course</li>
                <li className='text-bold'>900 Hour Courses</li>
                <li>Four Months Teacher Training Course</li>
                <li>Yoga Teachers Training Course - 7 Months</li>
                <li>Yoga Teachers Training Course - 9 Months - Hindi</li>
                <li>Yoga Teachers Training Course - 12 Months - English</li>
                <li>Yoga Teachers Training Course - 24 Months</li>
                <li className='text-bold' style={{ marginBottom: '1.5rem' }} >Certificate Yoga Therapy Course</li>
                <li className='text-bold' style={{ marginBottom: '1.5rem' }} >
                  Certificate Program on Yoga for Cancer
                </li>
                <li className='text-bold' style={{ marginBottom: '1.5rem' }} >
                  Certificate Course on Advanced <br />
                  Pranayama Techniques
                </li>
              </ul>
            </div>
            <div className='single-menu'>
              <h3>CAMPS</h3>
              <ul>
                <li>Stress Management Camp</li>
                <li>Meditation Camp</li>
                <li>Diabetes Camp</li>
                <li>Pregnancy Camp for Ante & Post Natal</li>
                <li>7 Days Health Camp English</li>
                <li>7 Days Health Camp Hindi</li>
                <li>21 Days Better Living Course English - Morning</li>
                <li>21 Days Better Living Course English - Evening</li>
                <li style={{ marginBottom: '1.5rem' }} >21 Days Better Living Course Hindi - Evening</li>
                <h3>ASANA REGULAR CLASSES</h3>
                <ul>
                  <li>Asana Regular Classes for Men</li>
                  <li>Asana Regular Classes for Women</li>
                  <li>Weekend Yoga Regular Classes</li>
                  <li>Children&apos;s Regular Class</li>
                  <li>Children&apos;s Weekend Class</li>
                  <li>Yog Prayas</li>
                  <li>Meditation Course</li>
                  <li>Regular Meditation Classes</li>
                  <li style={{ marginBottom: '1.5rem' }} >
                    Advance Regular Yoga Classes <br /> – TYI Teachers
                  </li>
                </ul>
              </ul>
            </div>
            <div className='single-menu'>
              <h3>WORKSHOPS</h3>
              <ul>
                <li>Weight Management Workshop</li>
                <li>
                  Cardiac and Hypertension Health <br /> Workshop
                </li>
                <li>Wellness -Womens</li>
                <li>Food and Nutrition Workshop</li>
                <li>Back & Joint Disorder Workshop</li>
                <li>Weight Management Workshop</li>
                <li>Senior Citizen</li>
                <li>Respiratory</li>
              </ul>
              <div className='filler'>{filler}</div>
            </div>
          </>
        )}
        {menuItem !== 'COURSES' && (
          <div className='single-menu'>
            <ul className='navigation-ul'>
              {subMenu[menuItem]?.map((item, i) => {
                return (
                  <Link
                    onClick={() => {
                      setNav(false)
                    }}
                    to={`${item.link}`}
                    key={i}
                  >
                    <li>
                      {item.menu}
                      <div
                        style={{
                          marginTop: '0',
                          background:
                            'linear-gradient(90deg,#fff,#BC4F31,#BC4F31,#fff)',
                        }}
                        className='bottom-line'
                      ></div>
                    </li>
                  </Link>
                )
              })}
            </ul>
            <div style={{ position: 'fixed', bottom: '80px', width: '200px' }}>
              {filler1}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MegaMenu
