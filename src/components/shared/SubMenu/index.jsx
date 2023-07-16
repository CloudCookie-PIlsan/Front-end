import React from 'react'
import { StSubMenu, StSubMenuList } from './styled'

function SubMenu() {
  return (
    <StSubMenu>
        <StSubMenuList>
           <li>마니또</li> 
           <li>보낸 쪽지함</li> 
           <li>받은 쪽지함</li> 
        </StSubMenuList>
    </StSubMenu>
  )
}

export default SubMenu