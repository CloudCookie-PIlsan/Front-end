import React from 'react'
import {StTextArea} from './styled';

const TextArea = (props) => {
    const { value, name, handleChange, placeholder } = props;

  return (
    <StTextArea value={value} onChange={handleChange} name={name} cols="30" rows="10" placeholder={placeholder}></StTextArea>
  )
}

export default TextArea