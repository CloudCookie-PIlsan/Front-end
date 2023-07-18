import React from 'react'
import { StInput } from './styled'

const Input = (props) => {
    const { name, type, placeholder } = props;

    /** input state 처리 함수 */
    // const handleInput = (e) => {
    //     SetInput({
    //         ...input,
    //         [e.target.name]: e.target.value,
    //     });
    // };


  return (
    <StInput 
        name={name}
        type={type}
        placeholder={placeholder}
    />
  )
}

export default Input