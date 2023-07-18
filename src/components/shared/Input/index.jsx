import React from 'react'
import { StInput } from './styled'

const Input = (props) => {
    const { value, name, type, handleChange, placeholder } = props;
  return (
    <StInput 
        value={value}
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
    />
  )
}

export default Input