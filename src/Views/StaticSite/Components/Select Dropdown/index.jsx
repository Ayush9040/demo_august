import React from 'react'
import './style.scss'

const SelectDropDown = ({ text, dates = [1, 2, 3, 4, 5], isStyles }) => {
  // const [select, setSelect] = useState(0)
  //  console.log(select, 'fuck')
  return (
    <>
      <div
        //  onClick={()=>{
        //   setSelect(select+1)
        // }}
        // className={select % 2 !== 0 ? 'Dates-dropdown open' : 'Dates-dropdown'}
        className="Dates-dropdown"
        style={isStyles && isStyles}
      >
        <select
          className="Select-dropdown"
          style={{ background: isStyles.background }}
        >
          <option>{text}</option>
          {dates.map((item) => (
            <option
              //  onClick={()=>{
              //   setSelect(select+1)
              // }}
              key={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
export default SelectDropDown
