import React from 'react'

const InputWidget = (props) => {
  return (
      <div className="form-input"> 
        {
            (props.label !== "Message" ) ?
                <input type={props.type} 
                name={props.name}
                onChange={props.handleChange}
                value = {props.value}
                /> : 
                <textarea 
                required={true}
                name={props.name}  
                onChange = {props.handleChange} 
                value = {props.value} 
                />
        }
        <label htmlFor="">{props.label}</label>
        <span className= {   !props.valid ? "show-error error-style" : "no-error error-style"   } >{props.errorMsg}</span>
      </div>
  )
}

export default InputWidget