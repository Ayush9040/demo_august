import React from 'react'
import './style.scss'

const SelectDropDown = ({ text, dates = [1, 2, 3, 4, 5], isStyles, currentValue ,changeCurrentValue }) => {
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
          value={ currentValue }
          style={{ background: isStyles.background }}
          onChange={(e)=>{ changeCurrentValue(e.target.value) }}
        >
          <option>{text}</option>
          {dates.map((item) => (
            <option
              value={item}
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
