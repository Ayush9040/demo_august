import React, { useEffect } from 'react'
import { legacy2, cross, filler } from '../../assets/icons/icon'
import './style.scss'
import { Link } from 'react-router-dom'

const MegaMenu = ({ setNav }) => {
  const navItems = [
    { name: 'COURSES', link: '/courses', id: 1 },
    { name: 'PUBLICATIONS', link: '/publication', id: 2 },
    { name: 'ABOUT', link: '/about', id: 3 },
    { name: 'NEWS,EVENTS & MEDIA', link: '/media', id: 4 },
    { name: 'MUSEUM OF CLASSICAL YOGA', link: '/museum', id: 5 },
    { name: 'FACILITIES', link: '/facilities', id: 6 },
    { name: 'SHOP', link: '/shop', id: 7 },
    { name: 'GIFTING', link: '/gifting', id: 8 },
    { name: 'DONATION', link: '/donation', id: 9 },
    { name: 'NISPAND', link: '', id: 10 },
    { name: 'TYI ONLINE', link: '', id: 11 },
    { name: 'ALUMNI', link: '/alumni', id: 12 },
    { name: 'JOIN OUR TEAM', link: '/join-our-team', id: 13 },
    { name: 'FAQs', link: '/faq', id: 14 },
    {
      name: 'LOCATE US',
      link: 'https://goo.gl/maps/bxH6SifrXjXAhteV7',
      id: 15,
    },
  ]

  useEffect(() => {
    console.log(document.getElementsByClassName('navigation-ul'))
  })

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
              if (item.name !== 'LOCATE US') {
                return (
                  <Link to={`${item.link}`} key={i}>
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
                    href="https://goo.gl/maps/bxH6SifrXjXAhteV7"
                    target="_blank"
                    rel="noreferrer"
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
      <div className="right-menu">
        <div className="single-menu">
          <h3>TEACHERS TRAINING</h3>
          <ul>
            <li className="text-bold">200 Hour Courses</li>
            <li>Two Months Training Course - On Campus</li>
            <li>Weekend Training Course - 3 Months / Online - English</li>
            <li>One Month Training Course - Online / On Campus</li>
            <li>Two Month Training Course - Part Time/ Online - Hindi</li>
            <li>Teacher Training Course - Part Time/ Online- English</li>
            <li className="text-bold">500 Hour Courses</li>
            <li>Three Months Teacher Training Course</li>
            <li className="text-bold">900 Hour Courses</li>
            <li>Four Months Teacher Training Course</li>
            <li>Yoga Teachers Training Course - 7 Months</li>
            <li>Yoga Teachers Training Course - 9 Months - Hindi</li>
            <li>Yoga Teachers Training Course - 12 Months - English</li>
            <li>Yoga Teachers Training Course - 24 Months</li>
            <li className="text-bold">Certificate Yoga Therapy Course</li>
            <li className="text-bold">
              Certificate Program on Yoga for Cancer
            </li>
            <li className="text-bold">
              Certificate Course on Advanced <br />
              Pranayama Techniques
            </li>
          </ul>
        </div>
        <div className="single-menu">
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
            <li>21 Days Better Living Course Hindi - Evening</li>
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
              <li>
                Advance Regular Yoga Classes <br /> – TYI Teachers
              </li>
            </ul>
          </ul>
        </div>
        <div className="single-menu">
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
          <div className="filler">{filler}</div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu
