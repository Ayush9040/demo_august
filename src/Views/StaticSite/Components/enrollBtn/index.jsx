import React from 'react'

const EnrollBtn = ({ text, isColor, buttonAction }) => {
  return (
    <>
      <div id="enrollButton" className="enroll-btn" style={isColor ? { background: isColor, color: 'white' } : {}} onClick={buttonAction}>
        <div className="enroll-btn-content">{text}

        </div><div><svg className='img' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1493 0L7.78906 2.70472L13.2837 9L7.78906 15.2953L10.1493 18L18.002 9L10.1493 0Z" fill="#C9705F" />
          <path d="M2.36026 18L10.2129 9L2.36026 0L0 2.70472L5.49466 9L0 15.2953L2.36026 18Z" fill="#C9705F" />
        </svg></div>
      </div>
    </>
  )
}

export default EnrollBtn
