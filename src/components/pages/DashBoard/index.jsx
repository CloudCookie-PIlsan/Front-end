import React from 'react'
import SubMenu from '../../shared/SubMenu'
import SectionManito from './SectionManito'
import {DashBoardContainer} from './styled';
import {Outlet} from "react-router-dom";
import { getCookie } from "../../../modules/cookie";
import { Navigate } from "react-router-dom";

function DashBoard() {
  const user = getCookie("Authorization");
  return (
    <DashBoardContainer>
      {!user && <Navigate to="/" />}
        <SubMenu/>
        <Outlet />
    </DashBoardContainer>
  )
}

export default DashBoard