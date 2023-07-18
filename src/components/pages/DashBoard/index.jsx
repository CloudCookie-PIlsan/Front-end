import React from 'react'
import SubMenu from '../../shared/SubMenu'
import SectionManito from './SectionManito'
import {DashBoardContainer} from './styled';
import {Outlet} from "react-router-dom";

function DashBoard() {
  return (
    <DashBoardContainer>
        <SubMenu/>
        <Outlet />
    </DashBoardContainer>
  )
}

export default DashBoard