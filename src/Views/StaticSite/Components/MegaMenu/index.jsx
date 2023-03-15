import React, { useState } from 'react'
import { legacy2, cross, filler } from '../../assets/icons/icon'
import './style.scss'
import { Link } from 'react-router-dom'

const MegaMenu = ({ setNav }) => {
  const [menuItem, setMenuItem] = useState()

  const navItems = [
    {
      name: 'ABOUT',
      link: '/know-us-better',
      id: 1,
      key: 'ABOUT',
    },
    { name: 'COURSES', link: '/courses', id: 2, key: 'COURSES' },
    { name: 'FACILITIES', link: '/facilities', id: 3, key: 'FACILITIES' },
    { name: 'MUSEUM', link: '/museum-of-classical-yoga', id: 4, key: 'MUSEUM' },
    { name: 'BLOGS', link:'/blogs',id:'14',key:'BLOGS' },
    { name: 'DONATE', link: '', id: 5, key: 'DONATION' },
    // { name: 'GIFTING', link: '', id: 6, key: 'GIFTING' },
    { name: 'NISPAND', link: 'https://nispand.com/', id: 7, key: 'NISPAND' },
    // { name: 'TYI ONLINE', link: '', id: 8, key: 'ONLINE' },
    {
      name: 'PUBLICATIONS',
      link: '/yoga-and-total-health',
      id: 9,
      key: 'PUBLICATIONS',
    },
    { name: 'SHOP', link: '/shop', id: 10, key: 'SHOP' },
    {
      name: 'NEWS, EVENTS & MEDIA',
      link: '/image-gallery',
      id: 11,
      key: 'NEWS',
    },
    { name: 'ALUMNI', link: '/alumni-gallery', id: 12, key: 'ALUMNI' },
    { name: 'VOLUNTEER', link: '/volunteer', id: 13, key: 'VOLUNTEER' },
    { name: 'LOCATE US', link:'/our-branches', id: 14, key: 'LOCATE' },
  ]

  const subMenu = {
    ABOUT: [
      {
        menu: 'Overview',
        link: '/know-us-better',
      },
      {
        menu: 'Our Legacy',
        link: '/our-legacy',
      },
      {
        menu: 'Pujya Maa Dr Hansaji’s blessings',
        link: '/blessings',
      },
    ],
    PUBLICATIONS: [
      { menu: 'Yoga & Total Heath', link: '/yoga-and-total-health' },
      { menu: 'Yogsattva', link: '/yogasattva' },
      // { menu: 'Books', link: '/books' },
      // { menu: 'Free E-Books', link: '/e-books' },
      { menu: 'Library', link: '/library' },
    ],
    MUSEUM: [
      { menu: 'Overview', link: '/museum-of-classical-yoga' },
      { menu: 'Virtual Tour', link: '/museum-of-classical-yoga/#virtual_tour' },
      { menu: 'Gallery', link: '/museum-of-classical-yoga/#gallery' },
      { menu: 'Location', link: '/museum-of-classical-yoga/#location' },
    ],
    FACILITIES: [
      { menu: 'Overview', link: '/facilities' },
      //{ menu: 'Facilities', link: '/facilities/#preview' },
      { menu: 'Hostels', link: '/hostels/#hostel' },
      { menu: 'Conference Room', link: '/conference-room/#conference-room' },
      { menu: 'Library', link: '/yoga-library/#library' },
      { menu: 'Book Store', link: '/book-store/#book-store' },
      { menu: 'Yoga Halls', link: '/yoga-halls-rooftop-space/#yoga-halls' },
      { menu: 'Rooftop Space', link: '/yoga-halls-rooftop-space/#rooftop-space' },
      { menu: 'Dining Hall', link: '/dining-hall/#dining-hall' },
      { menu: 'Nature Trail', link: '/nature-trail/#nature-trail' },
      { menu: 'Gazebo', link: '/gazebo/#gazebo' },
      { menu: 'Kailashpati Tree', link: '/kailaspati-tree/#kailaspati-tree' },
      { menu: 'Rules and Regulations', link: '/Rules-and-Regulations/#information' },
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
      { menu: 'Gallery', link: '/image-gallery' },
      { menu: 'News', link: '/media' },
      // { menu: 'Events', link: '/media/events' },
    ],
    ALUMNI: [
      // { menu: 'Upcomin Events', link: '/alumni/upcoming-events' },
      { menu: 'Alumni Gallery', link: '/alumni-gallery' },
      { menu: 'Support Your Alma Mater', link: '/support-your-alma-mater' },
    ],
    VOLUNTEER: [
      { menu: 'Volunteer with us', link: '/volunteer' },
      { menu: 'Values', link: '/values' },
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
           
              if((item.key==='DONATION'||item.key==='GIFTING'||item.key==='ONLINE')){
                return(
                 
                  <div
                    // style={{
                    //   marginTop: '0',
                    //   background:
                    //         'linear-gradient(90deg,#fff,#BC4F31,#BC4F31,#fff)',

                    // }}
                    //className="bottom-line"
                    onMouseOver={() => {
                      setMenuItem(item.key)
                    }}
                    // onClick={() => {
                    //   setNav(false)
                    // }}
                    // to={`${item.link}`}
                    key={i}
                    className='coming-soon'
                  >
                    <li  >
                      {item.name}
                      <div className='bottom-line' ></div>
                    </li>
                  </div>
                  
                )
              }
              else if (item.key !== 'NISPAND') {
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
                    // className={ (item.key==='DONATION'||item.key==='GIFTING'||item.key==='ONLINE'||item.key==='SHOP') ? 'coming-soon':'' }

                  >
                    <li >
                      {item.name}
                      <div
                        // style={{
                        //   marginTop: '0',
                        //   background:
                        //     'linear-gradient(90deg,#fff,#BC4F31,#BC4F31,#fff)',
                        // }}
                        className="bottom-line"
                      ></div>
                    </li>
                  </Link>
                )
              } 
              else  {
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
              <h3>TEACHERS TRAINING COURSES</h3>
              <ul>
                <li className="text-bold">Basic TTC (200 Hour Courses)</li>
                <Link onClick={() => {setNav(false)}} to="/one-month-ttc">
                  <li>Batch 1 - 1 Month TTC-Online & On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}} to="/200-hrs-part-time-ttc-on-campus-english">
                  <li>Batch 2 - 2 Months TTC-Online & On Campus-English</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/200-hrs-part-time-ttc-online-english">
                  <li>Batch 3 - 2 Months TTC-Online-English</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/200-hrs-part-time-ttc-online">
                  <li>Batch 4 - 2 Months TTC-Online-Hindi</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/200-hrs-part-time-ttc-online-english-batch-5">
                  <li>Batch 5 - 2 Months TTC-Online-English</li>
                </Link>
                <Link  onClick={() => {setNav(false)}} to="/weekend-teacher-training-course">
                  <li>Batch 6 - 3 Months Weekend TTC-Online-English</li>
                </Link>

                <li className="text-bold">
                   Intermediate TTC (500 Hour Courses) 
                </li>
                <Link onClick={() => {setNav(false)}}  to="/500-hrs-online-yoga-teacher-training-course-intermediate-level">
                  <li >
                    3 Months TTC - Online-English
                  </li>
                </Link>
                <li className="text-bold">
                  Advance TTC (900 Hour Courses)</li>
                <Link onClick={() => {setNav(false)}}  to="/3-months-advanced-teacher-training-course">
                  <li>3 Months TTC - On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/900-hours-advanced-teacher-training-course">
                  <li>4 Months TTC - Online-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/seven-month-ttc">
                  <li>7 Months TTC - Online & On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/one-year-ttc">
                  <li>1 Year TTC - Online & On Campus-Hindi</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/two-year-ttc">
                  <li>2 Years TTC - Online & On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/certificate-yoga-therapy-course-online">
                  <li className="text-bold" >
                    Certificate Yoga Therapy Course
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/certificate-program-on-yoga-for-cancer">
                  <li className="text-bold" >
                    Certificate Program on Yoga for Cancer
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/certification-program-on-yoga-for-lung-cancer-online">
                  <li className="text-bold" >
                    Certificate Program on Yoga for Lung Cancer - Online
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/certificate-course-on-advanced-pranayama-techniques">
                  <li className="text-bold" >
                    Certificate Course on Advanced Pranayama Techniques
                  </li>
                </Link>
                {/* <Link onClick={() => {setNav(false)}}  to="/certification-course-on-yoga-sutra-online">
                  <li className="text-bold" >
                    Certificate Course on Yoga Sutra-Online
                  </li>
                </Link> */}
              </ul>
            </div>
            <div className="single-menu">
              <h3>21 DAYS BETTER LIVING COURSE</h3>
              <ul>
                <Link onClick={() => {setNav(false)}}  to="/21-days-better-living-course">
                  <li>Batch 1 - 21-Days BLC - Morning On Campus-English</li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/21-days-better-living-course-batch-2">
                  <li>
                    Batch 2 - 21-Days BLC - Evening Online & On Campus-English
                  </li>
                </Link>
                <Link onClick={() => {setNav(false)}}  to="/21-days-better-living-course-batch-3">
                  <li>
                    Batch 3 - 21-Days BLC - Evening Online & On Campus-Hindi
                  </li>
                </Link>
                {/* <Link onClick={() => {setNav(false)}}  to="/21-days-better-living-course-batch-4">
                  <li>Batch 4 - 21-Days BLC-Morning-Online English</li>
                </Link> */}
                <Link onClick={() => {setNav(false)}}  to='/samattvam'>
                  <h3 >
                  SAMATTVAM (HEALTH CHECKUP)
                  </h3>
                </Link>
                <Link onClick={() => {setNav(false)}}  to='/satsang'>
                  <h3 style={{ marginTop:'0.75rem' }} >SATSANG</h3></Link>
                <h3 style={{ marginTop:'0.75rem' }} >REGULAR CLASSES</h3>
                <ul>
                  <Link onClick={() => {setNav(false)}}  to="/asana-regular-classes-on-campus">
                    <li>Asana Regular Classes for Men - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/asana-regular-classes-on-campus-women">
                    <li>Asana Regular Classes for Women - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/asana-regular-classes-online">
                    <li>Asana Regular Classes (Men & Women) - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/weekend-classes">
                    <li>Weekend Asana Classes (Men & Women) - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/weekend-classes-online">
                    <li>Weekend Asana Classes (Men & Women) - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/childrens-regular-classes">
                    <li>Children&apos;s Regular Classes - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/childrens-weekend-classes-on-campus">
                    <li>Children&apos;s Weekend Classes - On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/advanced-regular-yoga-classes">
                    <li>
                      Advanced Asana Regular Class - Online (Only for TYI
                      Teachers)
                    </li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/yog-prayas-online">
                    <li>Yog Prayas - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/meditation-foundation-course-online">
                    <li>Meditation Foundation Course - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/regular-meditation-classes-online">
                    <li>Regular Meditation Classes - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/anand-sadhna">
                    <li>Anand Sadhna - Online & On Campus</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/couples-classes">
                    <li>Couples&apos; Classes - Online</li>
                  </Link>
                  <Link onClick={() => {setNav(false)}}  to="/IBY-course">
                    <li>IBY Class (Only for TYI TTC Teachers)</li>
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="single-menu">
              <h3>7 DAYS HEALTH CAMP</h3>
              <ul>
                <Link onClick={() => {setNav(false)}}  to='/7-days-camp-english'><li>7 Days Health Camp - On Campus - English</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/7-days-camp'><li>7 Days Health Camp - On Campus - Hindi</li></Link>
              </ul>
              <h3>CAMPS & WORKSHOPS</h3>
              <ul>
                <Link onClick={() => {setNav(false)}}  to='/stress-management-camp'><li>Stress Management Camp</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/weight-management-workshop'><li>Weight Management Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/pregnancy-camp-for-ante-post-natal'><li>Pregnancy Camp For Ante & Post Natal</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/cardiac-hypertension-workshop'><li>Cardiac & Hypertension Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/back-joint-disorder-workshop'><li>Back & Joint Disorder Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/pranayama-workshop'><li>Prayanama Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/womens-camp'><li>Women&apos;s Camp</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/respiratory-workshop'><li>Respiratory Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/life-management-camp'><li>Life Management Camp</li></Link> 
                <Link onClick={() => {setNav(false)}}  to='/senior-citizen-workshop'><li>Senior citizen Workshop</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/diabetes-camp'><li>Diabetes Camp</li></Link>
                <Link onClick={() => {setNav(false)}}  to='/regular-pregnacy-classes'><li>Pregnancy Camp</li></Link>
              </ul>
              <Link onClick={() => {setNav(false)}}  to='/nutri-diet'>
                <h3 style={{ marginTop:'0.75rem' }} >NUTRI DIET CLINIC</h3></Link>
              <Link onClick={() => {setNav(false)}}  to='/corporate-workshops'>
                <h3 style={{ marginTop:'0.75rem' }} >CORPORATE WORKSHOP</h3></Link>
              <Link onClick={() => {setNav(false)}}  to='/home-tuitions'>
                <h3 style={{ marginTop:'0.75rem' }} >HOME TUITIONS</h3></Link>
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
          <>
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
              <div className="menu-filler-icon">{filler}</div>
            </div>
            <div className='close-menu-div' onClick={()=>{ setNav(false) }} ></div>
          </>
        )}
      </div>
    </div>
  )
}

export default MegaMenu
