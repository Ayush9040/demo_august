import React from 'react'
import nutri_diet_mobile_footer_arrow from '../../Views/Courses/Views/images/nutri_diet_mobile_footer_arrow.svg'

const CommonBtn = ({ text, isColor, buttonAction }) => {

  const isNutriDietLanding = location.pathname.includes("/nutri-diet_landing");
  // const isHome = location.pathname.includes("/");
  const isHome = location.pathname === "/";



  return (
    <>
      <div id="enrollButton" className={isHome ? "global-common-btn global_home_btn" : "global-common-btn"} style={isColor ? { background: isColor, color: 'white' } : {}} onClick={buttonAction}>
        <div className="global-common-btn-content">{text}</div> 
        { isNutriDietLanding && text != 'Continue' && (
          <div className='fixes_des_footer_img'>
            <img src={nutri_diet_mobile_footer_arrow} alt="" />
          </div>
        )}
        {
          isHome &&  (
            <div className='fixes_des_footer_img' style={{display: 'flex', marginLeft: '4px'}}>
              <img src={nutri_diet_mobile_footer_arrow} alt="" />
            </div>
          )
        }
      </div>
    </>
  )
}

export default CommonBtn
