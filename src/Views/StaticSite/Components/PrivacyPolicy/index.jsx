import React,{ useEffect } from 'react'
import './style.scss'
import data from './data.js'
import InnerNavComponent from '../InnerNavComponent'

const PrivacyPolicy = () => {

  useEffect(()=>{
    scrollTo(0,0)
  },[])

  let privacyPolicy = {
    title: 'alumni-gallery',
    color: 'orange',
    menuColor: 'black',
    menuItems:[]
  }


  return (
    <>
      <div className="privacy-container">
        <InnerNavComponent abc={privacyPolicy} />
        <div className='banner-heading'>
                Privacy Policy
          <div className='bottom-line'></div>
        </div>
      </div>
      <div className="terms-and-conditions">
        {
          data.map((value)=>
          {
            return(
              <div key={value.title}>
                <h2>{value.title}</h2>
                <p>{value.policy}</p>
              </div>
            )
          }
          )
        
        }
      </div>
    </>
  )
}

export default PrivacyPolicy
