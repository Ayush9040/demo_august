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
  errorCheck,
  blocked=false
}) => {

  //const [changeType,setChangeType]=useState(type)
  console.log(keyName,'keyname')
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
            // onFocus={keyName==='DOB' ?()=>{setChangeType('date')}:()=>{setChangeType(type)}}
            // onBlur={()=>{setChangeType(type)}}
            onChange={(e) =>{e.preventDefault();setField({ ...form, [keyName]: e.target.value });if(errorCheck){errorCheck(0)}}}
            onKeyDown={e=>{ console.log(e); if(e.keyCode == 13) {
              e.preventDefault()
              return false
            }}}
            disabled={blocked}
          />
        </label>
      </form>
    </div>
  )
}

export default InputComponent
