import React from 'react'

const CommonBtn = ({ text, isColor, buttonAction }) => {
  return (
    <>
      <div className="global-common-btn" style={ isColor? { background: isColor, color: 'white' }: {} } onClick={buttonAction}>
        <div className="global-common-btn-content">{text}</div>
      </div>
    </>
  )
}

export default CommonBtn
