import React from 'react'
import nutri_diet_mobile_footer_arrow from '../../Views/Courses/Views/images/nutri_diet_mobile_footer_arrow.svg'

const CommonBtn = ({ text, isColor, buttonAction }) => {

  const isNutriDietLanding = location.pathname.includes("/nutri-diet_landing");



  return (
    <>
      <div id="enrollButton" className="global-common-btn" style={isColor ? { background: isColor, color: 'white' } : {}} onClick={buttonAction}>
        <div className="global-common-btn-content">{text}</div> 
        { isNutriDietLanding && text != 'Continue' && (
          <div className='fixes_des_footer_img'>
            <img src={nutri_diet_mobile_footer_arrow} alt="" />
          </div>
        )}
      </div>
    </>
  )
}

export default CommonBtn
