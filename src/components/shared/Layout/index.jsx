import React from "react";
import NavBar from "../NavBar";
import { StWrapper, StContainer } from "./styled";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <StWrapper>
            <NavBar />
            <StContainer>
                <Outlet />
            </StContainer>
        </StWrapper>
    );
}

export default Layout;
