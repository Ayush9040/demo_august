import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import HistoryList from './HistoryList'
import InnerNavComponent from '../../Components/InnerNavComponent'
import { fetchUserCourses, fetchUserOrders } from './Profile.api'
import './style.scss'

const UserProfile = () => {
  let navigate = useNavigate()
  const [module, setModule] = useState(0)
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const [orders, setOrders] = useState([])
  const [courses, setCourses] = useState([])
  const navItems = [
    { option: user?.data?.firstName || 'firstName', key: 0 },
    { option: 'Courses', key: 1 },
    { option: 'Orders', key: 2 },
    { option: 'Alumni', key: 3 },
    { option: 'Edit Account', key: 4 },
  ]

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // If no token, navigate to login
      navigate('/user/sign-in');
    }
  }, [navigate])

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [],
  }
  useEffect(() => {

    if (user?.data?._id) {
      getPurchasedCourses();
    }
    if (isLoggedIn) return
    navigate('/user/sign-in')

  }, [])

  const getPurchasedCourses = async () => {
    try {
      const { data } = await fetchUserCourses(user?.data?._id)
      setCourses(data.data)
    }
    catch (err) {
      console.log(err);
    }
  }

  const getOrderData = async () => {
    try {
      const { data } = await fetchUserOrders(user?.data?._id)
      setOrders(data.data)
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isLoggedIn ? getOrderData() : navigate('/user/sign-in')
  }, [user])
  return (
    <div className="user-profile">
      <InnerNavComponent abc={UserNav} />
      <div className="profile-grid">
        <div className="profile-nav">
          <div className="profile-nav-container">
            <div id="profile-picture"></div>
            <ul>
              {navItems.map((item) => {
                // if (item.key === 1) {
                //   return (
                //     <div
                //       onClick={() => setModule(item.key)}
                //       key={item.key}
                //       className="coming-soon"
                //     >
                //       <li>
                //         {item.option}
                //         <div className="bottom-line"></div>
                //       </li>
                //     </div>
                //   )
                // } 
                // else {
                return (
                  <div key={item.key} >
                    <li
                      onClick={() => {
                        setModule(item.key)
                        if (item.key === 4) {
                          navigate('/user/edit-account'); // Step 3: Navigate if key is 4
                        }
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
                // }
              })}
            </ul>
            <div id="edit-account">
              {/* <Link to={'/user/edit-account'}>Edit Account</Link>| */}
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
                  options={['All', 'Placed', 'Shipped', 'Out_for_Delivery', 'Delivered']}
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
              <div className='history-list' >
                <div className='filter-history' >
                  <p>Courses</p></div>
                <div>
                  {Array.isArray(courses) && courses.map((item, index) => (<div className='course-card-de' key={item.courseName}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#FFF0ED" />
                        <g clip-path="url(#clip0_2551_8532)">
                          <path d="M16.1212 9.59703C16.1229 9.55612 16.113 9.51557 16.0927 9.47999C16.0725 9.44442 16.0426 9.41524 16.0066 9.39578C15.9751 9.37872 15.2963 9.02413 14.2144 9.12672C14.6398 8.06075 14.7022 7.04881 14.3924 6.11453C14.3792 6.07465 14.3548 6.03941 14.3221 6.01303C14.2894 5.98665 14.2498 5.97025 14.208 5.96578C14.1415 5.95835 12.7315 5.82513 11.6312 6.87425C11.4693 4.9241 10.2263 3.77413 10.1583 3.71266C10.1173 3.67561 10.0638 3.65546 10.0085 3.65627C9.95321 3.65709 9.90029 3.67879 9.86037 3.71703C8.65681 4.87094 8.26809 6.00209 8.20968 6.90838C7.13934 5.87019 5.85812 5.96031 5.79731 5.96513C5.75459 5.9687 5.71386 5.98474 5.68018 6.01126C5.6465 6.03779 5.62136 6.07362 5.60787 6.11431C5.29812 7.04903 5.36068 8.06119 5.78593 9.1265C4.70378 9.02413 4.025 9.37872 3.99372 9.39556C3.95766 9.41504 3.92779 9.44425 3.90753 9.47987C3.88726 9.51549 3.87741 9.55609 3.87909 9.59703C3.99809 12.5648 6.38334 13.3042 7.06147 13.4547V14.1107C6.48943 14.1742 6.07053 14.6919 6.11537 15.2725C6.11537 15.8631 6.59597 16.3439 7.18681 16.3439H12.8244C14.1787 16.3256 14.2809 14.2811 12.9498 14.1105V13.4521C13.6423 13.2963 16.0027 12.5488 16.1212 9.59703ZM15.6761 9.72828C15.5059 12.1728 13.6345 12.8426 12.9498 13.0067C12.9358 12.6447 12.9946 11.6073 12.8879 11.272C13.0837 11.0533 13.5962 10.4386 14.0077 9.59528C14.8295 9.46469 15.4306 9.63488 15.6761 9.72828ZM11.7036 11.7819C11.6455 11.7819 11.5899 11.805 11.5489 11.846C11.5079 11.887 11.4848 11.9426 11.4848 12.0007V14.098H8.5389V12.0007C8.53475 11.7134 8.10578 11.713 8.1014 12.0007V14.098H7.49897V11.7611C7.49897 10.8807 8.21537 10.1643 9.09584 10.1643C9.6239 10.1675 10.3873 10.1664 10.9154 10.1643C11.7959 10.1643 12.5123 10.8807 12.5123 11.7611V14.0978H11.9223V12.0004C11.9223 11.9424 11.8993 11.8868 11.8582 11.8458C11.8172 11.8047 11.7616 11.7819 11.7036 11.7819ZM10.1139 9.72675C9.5364 9.788 9.00025 9.33431 9.00506 8.73953C9.04706 7.42069 10.9648 7.42091 11.0066 8.73953C11.0066 9.25294 10.6144 9.67228 10.1139 9.72675ZM14.0208 6.39344C14.4961 7.8011 13.6244 9.75519 12.7105 10.8052C12.5468 10.499 12.3075 10.2398 12.0154 10.0522C11.7232 9.86454 11.3879 9.75478 11.0414 9.73331C11.291 9.47516 11.4342 9.13244 11.4424 8.77344C11.5655 8.32675 11.6274 7.90544 11.6441 7.51038C12.4532 6.46738 13.6176 6.386 14.0208 6.39344ZM10.0102 4.18406C10.4018 4.60997 11.417 5.92947 11.1705 7.90063C11.0374 7.71611 10.8625 7.56581 10.66 7.46211C10.4575 7.3584 10.2333 7.30424 10.0058 7.3041C9.74952 7.30422 9.49789 7.37281 9.27695 7.50275C9.05602 7.6327 8.87379 7.8193 8.74912 8.04325C8.53912 7.25575 8.45709 5.76803 10.0102 4.18406ZM5.97865 6.39847C6.36365 6.40722 7.42743 6.53366 8.22456 7.58169C8.29325 8.21322 8.49647 8.65575 8.57062 8.79991C8.58496 9.1494 8.7271 9.48146 8.97006 9.7331C8.62201 9.7548 8.28537 9.86558 7.99245 10.0548C7.69953 10.244 7.46015 10.5054 7.29728 10.8137C6.38072 9.76022 5.50572 7.81619 5.97843 6.39847H5.97865ZM4.32447 9.72785C4.57056 9.63378 5.17103 9.46447 5.99287 9.59506C6.41134 10.4523 6.93306 11.0721 7.12118 11.2816C7.01859 11.606 7.07525 12.6608 7.06168 13.0098C6.38662 12.8527 4.49575 12.194 4.32447 9.72785ZM6.55265 15.2725C6.50825 14.8396 6.8449 14.4933 7.28 14.5355H10.5087C10.463 14.6713 10.3758 14.7894 10.2594 14.8731C10.1431 14.9569 10.0035 15.002 9.86015 15.0023C9.268 14.9455 8.71084 15.3289 8.60256 15.9064H7.18703C7.01895 15.9063 6.85781 15.8394 6.73896 15.7206C6.62011 15.6017 6.55326 15.4406 6.55309 15.2725H6.55265ZM13.4582 15.1697C13.5002 15.5521 13.2202 15.9091 12.8244 15.9064H9.05734C9.10315 15.7707 9.19028 15.6528 9.30652 15.5691C9.42276 15.4854 9.56227 15.4402 9.7055 15.4398C10.2979 15.4967 10.855 15.1133 10.9633 14.5355H12.731C13.1108 14.4962 13.4612 14.7792 13.4584 15.1695L13.4582 15.1697Z" fill="#C9705F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2551_8532">
                            <rect width="14" height="14" fill="white" transform="translate(3 3)" />
                          </clipPath>
                        </defs>
                      </svg></div>
                      {item?.courseName}
                    </div>
                    {/* <br /> */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                      <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#FFF0ED" />
                          <path d="M14.5938 4.9375H14.0312V4H13.0938V4.9375H6.90625V4H5.96875V4.9375H5.40625C4.63084 4.9375 4 5.56834 4 6.34375V14.5938C4 15.3692 4.63084 16 5.40625 16H14.5938C15.3692 16 16 15.3692 16 14.5938V6.34375C16 5.56834 15.3692 4.9375 14.5938 4.9375ZM15.0625 14.5938C15.0625 14.8522 14.8522 15.0625 14.5938 15.0625H5.40625C5.14778 15.0625 4.9375 14.8522 4.9375 14.5938V8.40625H15.0625V14.5938ZM15.0625 7.46875H4.9375V6.34375C4.9375 6.08528 5.14778 5.875 5.40625 5.875H5.96875V6.8125H6.90625V5.875H13.0938V6.8125H14.0312V5.875H14.5938C14.8522 5.875 15.0625 6.08528 15.0625 6.34375V7.46875Z" fill="#C9705F" />
                          <path d="M5.78125 9.39062H6.71875V10.3281H5.78125V9.39062ZM7.65625 9.39062H8.59375V10.3281H7.65625V9.39062ZM9.53125 9.39062H10.4688V10.3281H9.53125V9.39062ZM11.4062 9.39062H12.3438V10.3281H11.4062V9.39062ZM13.2812 9.39062H14.2188V10.3281H13.2812V9.39062ZM5.78125 11.2656H6.71875V12.2031H5.78125V11.2656ZM7.65625 11.2656H8.59375V12.2031H7.65625V11.2656ZM9.53125 11.2656H10.4688V12.2031H9.53125V11.2656ZM11.4062 11.2656H12.3438V12.2031H11.4062V11.2656ZM5.78125 13.1406H6.71875V14.0781H5.78125V13.1406ZM7.65625 13.1406H8.59375V14.0781H7.65625V13.1406ZM9.53125 13.1406H10.4688V14.0781H9.53125V13.1406ZM11.4062 13.1406H12.3438V14.0781H11.4062V13.1406ZM13.2812 11.2656H14.2188V12.2031H13.2812V11.2656Z" fill="#C9705F" />
                        </svg>
                      </div>
                      {item?.date}
                    </div></div>
                  ))}
                </div>

                {/* <div className='filter-history' >
                  <p>{title || 'Title'}</p>
                  <select name='filter' id='filter' >
                    {options.map(item => <option key={item} >{item}</option>)}
                  </select>
                </div>
                <div className='history-listitems' >
                  {data.map(item => {
                    const date = new Date(item?.createdAt)
                    return <HistoryCard key={item._id} order={item.cartId} orderId={item.orderId} timeline={date.toLocaleDateString()} status={item.deliveryStatus} />
                  })}
                </div> */}
              </div>
            </div>
          )}
          {module === 2 && (
            <div className="user-orders profile-overview">
              <HistoryList
                title='Orders'
                data={orders}
                options={['All', 'Placed', 'Shipped', 'Out_for_Delivery', 'Delivered']}
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
