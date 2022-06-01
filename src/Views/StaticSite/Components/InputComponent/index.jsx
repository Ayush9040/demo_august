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
  console.log(form, 'form')
  return (
    <div className="form-content">
      <form>
        <label>
          {icon}
          <input
            type={type}
            placeholder={placeholder}
            // value={form.name}
            name={keyName}
            onChange={(e) => setField({ ...form, [keyName]: e.target.value })}
          />
        </label>
      </form>
    </div>
  )
}

export default InputComponent
