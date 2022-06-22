import React from 'react'
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
  return (
    <div className="form-content">
      <form>
        <label style={css}>
          {icon}
          <input
            type={type}
            placeholder={placeholder}
            value={form[keyName]}
            name={keyName}
            max={maxnum}
            min={minnum}
            onChange={(e) =>{e.preventDefault();setField({ ...form, [keyName]: e.target.value })}}
          />
        </label>
      </form>
    </div>
  )
}

export default InputComponent
