import React from 'react'
import './style.scss'

const InputComponent = ({
  icon,
  type,
  placeholder,
  setField,
  keyName,
  form,
}) => {
  console.log(form,'form')
  return (
    <div className="form-content">
      <label>
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          // value={form.name}
          name={keyName}
          onChange={(e) => setField({ ...form,[keyName]:e.target.value })}
        />
      </label>
    </div>
  )
}

export default InputComponent
