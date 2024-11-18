import React from 'react'

const EnrlNowBtn = ({ text, isColor, buttonAction }) => {
  return (
    <>
      <div id="enrollButton" className="global-common-btn enroll-nw" style={isColor ? { background: isColor, color: 'white' } : {}} onClick={buttonAction}>
        <div className="global-common-btn-content">{text}</div>
      </div>
    </>
  )
}

export default EnrlNowBtn
