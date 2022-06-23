import React, { useState } from 'react'
import './style.scss'

const InputComponent = ({
  icon,
  type,
  placeholder,
  setField,
  keyName,
  form,
  css,
  minnum,
  maxnum,
}) => {

  const [changeType,setChangeType]=useState(type)
  return (
    <div className="form-content">
      <form>
        <label style={css}>
          {icon}
          <input
            type={changeType}
            placeholder={placeholder}
            value={form[keyName]}
            name={keyName}
            max={maxnum}
            min={minnum}
            onFocus={keyName==='DOB' ?()=>{setChangeType('date')}:()=>{setChangeType(type)}}
            onBlur={()=>{setChangeType(type)}}
            onChange={(e) =>{e.preventDefault();setField({ ...form, [keyName]: e.target.value })}}
          />
        </label>
      </form>
    </div>
  )
}

export default InputComponent
