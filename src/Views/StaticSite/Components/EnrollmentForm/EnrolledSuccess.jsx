import React, { useEffect, useState } from 'react'
import './formstyles.scss'
import { useNavigate } from 'react-router-dom'

const EnrolledSuccess = () => {

  const navigate = useNavigate()
  const [courseDetails, setCourseDetails] = useState({ courseName: '', courseFee: '', courseStartDate: '' });
  useEffect(() => {
    setCourseDetails({ courseName: localStorage.getItem('courseName'), courseFee: localStorage.getItem('courseFee'), courseStartDate: localStorage.getItem('courseStartDate') })
  }, [])

  return (
    <>
      <div id="overlay">
        <button onClick={() => navigate('/courses')}>X</button>
        <div id="text">
          <div><svg width="61" height="53" viewBox="0 0 61 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5103 52.0108C12.1626 52.0108 0.5 40.3469 0.5 26.0005C0.5 11.6542 12.1626 -0.00976562 26.5103 -0.00976562C33.089 -0.00976562 39.2635 2.37922 44.0733 6.78901C42.4702 7.73955 40.9247 8.78407 39.4448 9.91711C35.7832 6.95994 31.2169 5.35036 26.5103 5.35783C15.1398 5.35783 5.8676 14.63 5.8676 26.0005C5.8676 37.371 15.1398 46.6418 26.5103 46.6418C42.3307 46.6418 51.7233 29.7307 44.919 16.583C46.2576 15.3379 47.6436 14.1448 49.0741 13.0065C51.351 16.9373 52.5206 21.3956 52.5206 25.9991C52.5206 40.3469 40.858 52.0108 26.5103 52.0108Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1951 39.3706C27.0577 39.3685 26.924 39.3257 26.8109 39.2476C26.6978 39.1695 26.6104 39.0596 26.5598 38.9318C26.5113 38.8349 22.3147 28.0001 15.8246 23.9003C14.5554 23.1197 13.5796 22.2906 13.9699 20.4359C14.3602 18.631 15.5796 17.6054 17.7762 17.1182C21.6794 16.2877 25.8774 22.3391 27.4373 24.8277C32.9046 16.8746 43.8349 4.38155 59.7439 2.91716C60.5107 2.82719 60.7959 3.96493 60.0858 4.28328C59.8422 4.38017 37.1012 14.7749 27.8775 38.9803C27.8085 39.1 27.709 39.1992 27.5891 39.2678C27.4692 39.3364 27.3332 39.3718 27.1951 39.3706Z" fill="white" />
          </svg>
          </div>
          {/* <p className="thankyou">₹{courseDetails?.courseFee}/-</p> */}
          <p className="thankyou">Thank You</p>
          <p className="message">
            Congratulations on taking a step towards leading life the Yogic Way & spreading joy across the world. You have been successfully enrolled for
            <b> {courseDetails?.courseName}</b>  {/*which begins */} {courseDetails?.courseStartDate && (<b>{courseDetails?.courseStartDate}</b>)}.
            For any further queries you can email us on <b>info@theyogainstitute.in</b>  or click the whatsappp Icon below to drop us a whatsapp.
          </p>
        </div>
        {/* <div id="text">
          <p className="thankyou">Thank you</p>
          <p className="message">
            Wishing you a successful yogic journey onwards
          </p>
        </div> */}
      </div>

      <div className="main-div"></div>
    </>
  )
}

export default EnrolledSuccess