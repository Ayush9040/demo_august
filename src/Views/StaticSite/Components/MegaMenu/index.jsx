import React, { useState } from 'react'
import { legacy2, cross, filler } from '../../assets/icons/icon'
import './style.scss'
import { Link } from 'react-router-dom'

const MegaMenu = ({ setNav }) => {
  const [menuItem, setMenuItem] = useState()

  const navItems = [
    {
      name: 'ABOUT',
      link: '/about/overview',
      id: 1,
      key: 'ABOUT',
    },
    { name: 'COURSES', link: '/courses', id: 2, key: 'COURSES' },
    { name: 'FACILITIES', link: '/facilities', id: 3, key: 'FACILITIES' },
    { name: 'MUSEUM', link: '/museum', id: 4, key: 'MUSEUM' },
    { name: 'DONATE (Coming Soon)', link: '', id: 5, key: 'DONATION' },
    { name: 'GIFTING (Coming Soon)', link: '', id: 6, key: 'GIFTING' },
    { name: 'NISPAND', link: 'https://nispand.com/', id: 7, key: 'NISPAND' },
    { name: 'TYI ONLINE (Coming Soon)', link: '', id: 8, key: 'ONLINE' },
    {
      name: 'PUBLICATIONS',
      link: '/publication/yoga-health',
      id: 9,
      key: 'PUBLICATIONS',
    },
    { name: 'SHOP (Coming Soon)', link: '/', id: 10, key: 'SHOP' },
    {
      name: 'NEWS, EVENTS & MEDIA',
      link: '/media/media-gallery',
      id: 11,
      key: 'NEWS',
    },
    { name: 'ALUMNI', link: '/alumni/alumni-gallery', id: 12, key: 'ALUMNI' },
    { name: 'VOLUNTEER', link: '/volunteer', id: 13, key: 'VOLUNTEER' },
  ]

  const subMenu = {
    ABOUT: [
      {
        menu: 'Overview',
        link: '/about/overview',
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
      { menu: 'Yoga & Total Heath', link: '/publication/yoga-health' },
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
      // { menu: 'All Categories', link: '/shop' },
      // { menu: 'Books', link: '/shop' },
      // { menu: 'T-shirts', link: '/shop' },
      // { menu: 'Mats', link: '/shop' },
      // { menu: 'Bags', link: '/shop' },
      // { menu: 'Snacks', link: '/shop' },
    ],
    GIFTING: [
      // { menu: 'Overview', link: '/Gifting' },
      // { menu: 'Gift Career', link: '/Gifting/#gift-career' },
      // {
      //   menu: 'Gift Health and Wellness',
      //   link: '/Gifting/#Gift-health&wellness',
      // },
      // { menu: 'Gift wisdom', link: '/Gifting/#gift-wisdom' },
      // { menu: 'Gift Nispand', link: '/Gifting/#gift-nispand' },
    ],
    DONATION: [
      // { menu: 'Overview', link: '/donation' },
      // { menu: 'Annam brahma', link: '/donation/#annam-brahma' },
      // { menu: 'Truckasana', link: '/donation/#truckasana' },
      // {
      //   menu: 'Yoga for the Underprivileged',
      //   link: '/donation/#yoga-for-underprivileged',
      // },
      // {
      //   menu: 'Yoga for Transgender Community',
      //   link: '/donation/#yoga-for-transgender',
      // },
      // {
      //   menu: 'Yoga for Children with special needs',
      //   link: '/donation/#yoga-for-special-needs',
      // },
      // {
      //   menu: 'Underprivileged Children in BMC schools',
      //   link: '/donation/#underprivileged-children',
      // },
      // { menu: 'Police', link: '/donation/#police' },
    ],
    NEWS: [
      { menu: 'Gallery', link: '/media/media-gallery' },
      // { menu: 'News', link: '/media/news' },
      // { menu: 'Events', link: '/media/events' },
    ],
    ALUMNI: [
      // { menu: 'Upcomin Events', link: '/alumni/upcoming-events' },
      { menu: 'Alumni Gallery', link: '/alumni/gallery' },
      { menu: 'Support Your Alma Mater', link: '/alumni/support' },
    ],
    VOLUNTEER: [
      { menu: 'Volunteer with us', link: '/volunteer' },
      { menu: 'Values', link: '/volunteer/values' },
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
                    <li >
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
                <Link onClick={() => {setNav(false)}} to="/courses/course/batch-1-200hr/">
                  <li>Batch 1 - 1 Month TTC-Online & on Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}} to="/courses/course/batch-2-200hr/">
                  <li>Batch 2 - 2 Months TTC-On Campus-English</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/courses/course/batch-3-200hr/">
                  <li>Batch 3 - 2 Months TTC-Online-English</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/courses/course/batch-4-200hr/">
                  <li>Batch 4 - 2 Months TTC-Online-Hindi</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/courses/course/batch-5-200hr/">
                  <li>Batch 5 - 2 Months TTC-Online-English</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/courses/course/batch-6-200hr/">
                  <li>Batch 6 - 3 Months Weekend TTC-Online-English</li>
                </Link>

                <li className="text-bold">
                  500 Hour Courses TTC (Intermediate)
                </li>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/3-months-500hr/">
                  <li style={{ marginBottom: '2rem' }}>
                    3 Months TTC-Online-English
                  </li>
                </Link>
                <li className="text-bold">900 Hour Courses</li>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/3-months-ttc/">
                  <li>3 Months TTC-On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/4-months-900hr/">
                  <li>4 Months TTC-Online-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/7-months-900hr/">
                  <li>7 Months TTC-Online & On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/1-year-900hr/">
                  <li>1 Year TTC-Online & On Campus-Hindi</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/2-year-900hr/">
                  <li>2 Years TTC-Online & On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/certificate-yoga-therapy-course-online/">
                  <li className="text-bold" style={{ marginBottom: '2rem' }}>
                    Certificate Yoga Therapy Course
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/certification-program-on-yoga-cancer-online/">
                  <li className="text-bold" style={{ marginBottom: '2rem' }}>
                    Certificate Program on Yoga for Cancer
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/certification-program-on-yoga-for-lung-cancer-online/">
                  <li className="text-bold" style={{ marginBottom: '2rem' }}>
                    Certificate Program on Yoga for Lung Cancer - Online
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/certification-course-on-advanced-pranayam/">
                  <li className="text-bold" style={{ marginBottom: '2rem' }}>
                    Certificate Course on Advanced Pranayama Techniques
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/certification-course-on-yoga-sutra-online/">
                  <li className="text-bold" style={{ marginBottom: '2rem' }}>
                    Certificate Course on Yoga Sutra-Online
                  </li>
                </Link>
              </ul>
            </div>
            <div className="single-menu">
              <h3>21 DAYS BETTER LIVING COURSE</h3>
              <ul>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/batch1-21days-morning-oncampus/">
                  <li>Batch 1 - 21-Days BLC - Morning On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/21-days-blc-batch2/">
                  <li>
                    Batch 2 - 21-Days BLC - Evening Online & On Campus-English
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/21-days-blc-batch3/">
                  <li>
                    Batch 3 - 21-Days BLC - Evening Online & On Campus-Hindi
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/courses/course/21-days-blc-batch4/">
                  <li>Batch 4 - 21-Days BLC-Morning-Online English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to='/courses'>
                  <h3 style={{ marginBottom: '2rem' }}>
                  Samattvam (Health Checkup)
                  </h3>
                </Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/satsang/'>
                  <h3 style={{ marginBottom: '2rem' }}>Satsang</h3></Link>
                <h3 style={{ marginBottom: '2rem' }}>REGULAR CLASSES</h3>
                <ul>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/asana-regular-classes-men-on-campus/">
                    <li>Asana Regular Classes for Men - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/asana-regular-classes-for-women/">
                    <li>Asana Regular Classes for Women - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/asana-regular-classes-men-women/">
                    <li>Weekend Asana Classes (Men & Women) - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/asana-regular-classes-men-women/">
                    <li>Weekend Asana Classes (Men & Women) - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/children's-regular-class-oncampus/">
                    <li>Children&apos;s Regular Clasees - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/children's-weekend-class-oncampus/">
                    <li>Children&apos;s Weekend Clasees - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/advance-asana-regular-class/">
                    <li>
                      Advanced Asana Regular Class - Online (Only for TYI
                      Teachers)
                    </li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/yog-prayas-online/">
                    <li>Yog Prayas-Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/meditation-foundation-course-online/">
                    <li>Meditation Foundation Course-Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/regular-meditation-classes-online/">
                    <li>Regular Meditation Classes-Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/courses/course/anand-sadhna/">
                    <li>Anand Sadhna-Online & On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="">
                    <li>Couple&apos;s Classes-Online</li>
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="single-menu">
              <h3>7 DAYS HEALTH CAMP</h3>
              <ul>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/7-days-heath-camp-on-campus-english/'><li>7 Days Health Camp - On Campus - English</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/7-days-heath-camp-on-campus/'><li>7 Days Health Camp - On Campus - Hindi</li></Link>
              </ul>
              <h3>CAMPS & WORKSHOPS</h3>
              <ul>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/stress-management-camp/'><li>Stress Management Camp</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/weight-management-workshop/'><li>Weight Management Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/pregnancy-camp-for-ante-post-natal/'><li>Pregnancy Camp For Ante & Post Natal</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/cardiac-hypertension-workshop/'><li>Cardiac & Hypertension Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/back-joint-disorder-workshop/'><li>Back & Joint Disorder Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/pranayama-workshop/'><li>Prayanama Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/womens-camp/'><li>Women&apos;s Camp</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/respiratory-workshop/'><li>Respiratory Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/life-management-camp/'><li>Life Management Camp</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/senior-citizen-workshop/'><li>Senior citizen Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/courses/course/diet-workshop/'><li>Diet Workshop</li></Link>
              </ul>
              <Link onClick={() => {setNav(false)}}  to=''>
                <h3 style={{ marginBottom: '2rem' }}>Corporate Workshop</h3></Link>
              <Link onClick={() => {setNav(false)}}  to=''>
                <h3 style={{ marginBottom: '2rem' }}>Home Tutions</h3></Link>
              <div
                className="filler"
                style={{ position: 'relative', marginTop: '3rem' }}
              >
                {filler}
              </div>
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
          </div>
        )}
        <div className="menu-filler-icon">{filler}</div>
      </div>
    </div>
  )
}

export default MegaMenu
