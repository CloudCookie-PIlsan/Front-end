import React from 'react'
import NavBar from '../NavBar'
import {StWrapper, StContainer} from './styled'

function Layout(props) {
    const {children} = props;
  return (
    <StWrapper>
        <NavBar/>
        <StContainer>
            {children}
        </StContainer>
    </StWrapper>
  )
}

export default Layout