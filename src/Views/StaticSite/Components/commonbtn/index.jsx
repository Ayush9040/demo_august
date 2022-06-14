import React from 'react'

const CommonBtn = ({ text, isColor }) => {
  return (
    <>
      <div className="global-common-btn" style={ isColor? { background: isColor, color: 'white' }: {} }>
        <div className="global-common-btn-content">{text}</div>
      </div>
    </>
  )
}

export default CommonBtn
