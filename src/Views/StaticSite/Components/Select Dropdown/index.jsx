import React from 'react'
import './style.scss'

const SelectDropDown = ({ text,dates=[1,2,3,4,5] }) => {

  return(
    <>
      <div className='Dates-dropdown'>
        <select className='Select-dropdown'>
          <option>{text}</option>
          {dates.map(item=><option key={item}>{item}</option>)}
        </select>
      </div> 
    </>
  )
}
export default SelectDropDown