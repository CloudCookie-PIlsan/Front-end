import React from 'react'
import {StNavContainer} from './styled'
import Button from '../Button';
import Title from '../Title';

const NavBar = (props) => {
  const {children} = props;
  return (
    <StNavContainer>
      <div>
        <Title>항해마니또💘</Title>
      </div>
      <div>
        <Button color="danger" $negative={true}>Sign Up</Button>
        <Button color="danger" >Log in</Button>
      </div>
    </StNavContainer>
  )
}

export default NavBar