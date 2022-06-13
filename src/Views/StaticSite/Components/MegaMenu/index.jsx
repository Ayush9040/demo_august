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
    { name: 'NISPAND', link: 'https://nispand.com/', id: 7, key: 'NISPAND' },
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
      { menu: 'Overview', link: '/museum/' },
      { menu: 'Virtual Tour', link: '/museum/#virtual_tour' },
      { menu: 'Gallery', link: '/museum/#gallery' },
      { menu: 'location', link: '/museum/#location' },
    ],
    FACILITIES: [
      { menu: 'Overview', link: '/facilities' },
      //{ menu: 'Facilities', link: '/facilities/#preview' },
      { menu: 'Hostels', link: '/facilities/#hostel' },
      { menu: 'Conference Room', link: '/facilities/#conference-room' },
      { menu: 'Library', link: '/facilities/#library' },
      { menu: 'Book Store', link: '/facilities/#book-store' },
      { menu: 'Yoga Halls', link: '/facilities/#yoga-halls' },
      { menu: 'Rooftop Space', link: '/facilities/#rooftop-space' },
      { menu: 'Dining Hall', link: '/facilities/#dining-hall' },
      { menu: 'Nature Trail', link: '/facilities/#nature-trail' },
      { menu: 'Gazebo', link: '/facilities/#gazebo' },
      { menu: 'Kailashpati Tree', link: '/facilities/#kailaspati-tree' },
      { menu: 'Rules and Regulations', link: '/facilities/#information' },
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
      { menu: 'Gift Career', link: '/Gifting/#gift-career' },
      {
        menu: 'Gift Health and Wellness',
        link: '/Gifting/#Gift-health&wellness',
      },
      { menu: 'Gift wisdom', link: '/Gifting/#gift-wisdom' },
      { menu: 'Gift Nispand', link: '/Gifting/#gift-nispand' },
    ],
    DONATION: [
      { menu: 'Overview', link: '/donation' },
      { menu: 'Annam brahma', link: '/donation/#annam-brahma' },
      { menu: 'Truckasana', link: '/donation/#truckasana' },
      {
        menu: 'Yoga for the Underprivileged',
        link: '/donation/#yoga-for-underprivileged',
      },
      {
        menu: 'Yoga for Transgender Community',
        link: '/donation/#yoga-for-transgender',
      },
      {
        menu: 'Yoga for Children with special needs',
        link: '/donation/#yoga-for-special-needs',
      },
      {
        menu: 'Underprivileged Children in BMC schools',
        link: '/donation/#underprivileged-children',
      },
      { menu: 'Police', link: '/donation/#police' },
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
    <div className="mega-menu-container">
      <div className="left-menu">
        <div
          className="cross"
          onClick={() => {
            setNav(false)
          }}
        >
          {cross}
        </div>
        <div className="menu-logo">
          <Link to="/">{legacy2}</Link>
        </div>
        <ul className="navigation-ul">
          {navItems &&
            navItems.map((item, i) => {
              if (item.name !== 'NISPAND') {
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
                        className="bottom-line"
                      ></div>
                    </li>
                  </Link>
                )
              } else {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
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
                        className="bottom-line"
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
            <div className="single-menu">
              <h3>TEACHERS TRAINING</h3>
              <ul>
                <li className="text-bold">200 Hour TTC (Basic)</li>
                <li>Batch 1 - 1 Month TTC-Online & on Campus-English</li>
                <li>Batch 2 - 2 Months TTC-On Campus-English</li>
                <li>Batch 3 - 2 Months TTC-Online-English</li>
                <li>Batch 4 - 2 Months TTC-Online-Hindi</li>
                <li>Batch 5 - 2 Months TTC-Online-English</li>
                <li>Batch 6 - 3 Months Weekend TTC-Online-English</li>

                <li className="text-bold">500 Hour Courses TTC (intermediate)</li>
                <li style={{ marginBottom: '2rem' }}>
                  3 Months TTC-Online-English
                </li>
                <li className="text-bold">900 Hour Courses</li>
                <li>3 Months TTC-On Campus-English</li>
                <li>4 Months TTC-On Campus-English</li>
                <li>7 Months TTC-Online & On Campus-English</li>
                <li>1 Year TTC-Online & On Campus-Hindi</li>
                <li>2 Years TTC-Online & On Campus-English</li>
                <li className="text-bold" style={{ marginBottom: '2rem' }}>
                  Certificate Yoga Therapy Course
                </li>
                <li className="text-bold" style={{ marginBottom: '2rem' }}>
                  Certificate Program on Yoga for Cancer
                </li>
                <li className="text-bold" style={{ marginBottom: '2rem' }}>
                  Certificate Program for Yoga for Lung Cancer - Online
                </li>
                <li className="text-bold" style={{ marginBottom: '2rem' }}>
                  Certificate Course on Advanced Pranayama Techniques
                </li>
                <li className="text-bold" style={{ marginBottom: '2rem' }}>
                  Certificate Course on Yoga Sutra-Online
                </li>
              </ul>
            </div>
            <div className="single-menu">
              <h3>21 DAYS BETTER LIVING COURSE</h3>
              <ul>
                <li>Batch 1 - 21-Days BLC - Morning  On Campus-English</li>
                <li>Batch 2 - 21-Days BLC - Evening  Online & On Campus-English</li>
                <li>Batch 3 - 21-Days BLC - Evening  Online & On Campus-Hindi</li>
                <li>Batch 4 - 21-Days BLC-Morning-Online English</li>

                <h3 style={{ marginBottom: '2rem' }}>Samattvam (Health Checkup)</h3>
                <h3 style={{ marginBottom: '2rem' }}>Satsang</h3>
                <h3 style={{ marginBottom: '2rem' }}>REGULAR CLASSES</h3>
                <ul>
                  <li>Asana Regular Classes for Men - On Campus</li>
                  <li>Asana Regular Classes for Women - On Campus</li>
                  <li>Weekend Asana Classes (Men & Women) - On Campus</li>
                  <li>Weekend Asana Classes (Men & Women) - Online</li>
                  <li>Children&apos;s Regular Clasees - On Campus</li>
                  <li>Children&apos;s Weekend Clasees - On Campus</li>
                  <li>Advanced Asana Regular Class - Online
                    (Only for TYI Teachers)</li>
                  <li>Yog-Prayas-Online</li>
                  <li>Meditation Foundation Course-Online</li>
                  <li>Regular Foundation Course-Online</li>
                  <li>Anand Sadhna Online & OnCampus</li>
                  <li>Couple&apos;s Classes-Online</li>
                </ul>
              </ul>
            </div>
            <div className="single-menu">
              <h3>7 DAYS HEALTH CAMP</h3>
              <ul>
                <li>7 Days Health Camp - On Campus - English</li>
                <li>7 Days Health Camp - On Campus - Hindi</li>
              </ul>
              <h3>CAMPS & WORKSHOPS</h3>
              <ul>
                <li>Stress Management Camp</li>
                <li>Weight Management Workshop</li>
                <li>Pregnancy Camp For Ante & Post Natal</li>
                <li>Cardiac & Hypertension Workshop</li>
                <li>Back & Joint Disorder Workshop</li>
                <li>Prayanama Workshop</li>
                <li>Women&apos;s Camp</li>
                <li>Respiratory Workshop</li>
                <li>Life Management Camp</li>
                <li>Senior citizen Workshop</li>
                <li>Diet Workshop</li>
              </ul>
              <h3 style={{ marginBottom: '2rem' }}>Corporate Workshop</h3>
              <h3 style={{ marginBottom: '2rem' }}>Home Tutions</h3>
              <div className="filler" style={{ position: 'relative', marginTop: '3rem' }}>{filler}</div>
            </div>
          </>
        )}
        {menuItem !== 'COURSES' && (
          <div className="single-menu">
            <ul className="navigation-ul">
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
                        className="bottom-line"
                      ></div>
                    </li>
                  </Link>
                )
              })}
            </ul>
            <div className='menu-filler-icon' style={{ position: 'fixed', bottom: '80px', width: '200px' }}>
              {filler1}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MegaMenu
