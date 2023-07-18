import React from 'react'
import {StTextArea} from './styled';

const TextArea = (props) => {
    const { name, placeholder } = props;

  return (
    <StTextArea name={name} cols="30" rows="10" placeholder={placeholder}></StTextArea>
  )
}

export default TextArea