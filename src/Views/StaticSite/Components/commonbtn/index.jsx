import React from 'react'

const CommonBtn = ({ text, isColor }) => {
  console.log('iscolor',isColor )
  return (
    <>
      <div className="global-common-btn" style={ isColor? { background: isColor, color: 'white', borderColor: 'white' }: {} }>
        <div className="global-common-btn-content">{text}</div>
      </div>
    </>
  )
}

export default CommonBtn
