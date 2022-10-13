import React from 'react'
import './style.scss'
import InnerNavComponent from '../InnerNavComponent'

const LocateSingle = () => {
  const singleLocate ={
    title: 'locate-us',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <div className='locate_div'>
      <InnerNavComponent abc={singleLocate}/>
      <div className="locate_main_heading">Santacruz East</div>
      <div className="locate_heading">Mumbai, India</div>
      
    </div>
  )
}

export default LocateSingle