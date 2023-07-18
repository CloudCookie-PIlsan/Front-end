import React from 'react'
import { StInput } from './styled'

const Input = (props) => {
    const { name, type, placeholder } = props;
  return (
    <StInput 
        name={name}
        type={type}
        placeholder={placeholder}
    />
  )
}

export default Input