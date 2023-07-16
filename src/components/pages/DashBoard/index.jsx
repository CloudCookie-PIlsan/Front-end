import React from 'react'
import SubMenu from '../../shared/SubMenu'
import SectionManito from './SectionManito'
import {DashBoardContainer} from './styled';

function DashBoard() {
  return (
    <DashBoardContainer>
        <SubMenu/>
        <SectionManito/>
    </DashBoardContainer>
  )
}

export default DashBoard