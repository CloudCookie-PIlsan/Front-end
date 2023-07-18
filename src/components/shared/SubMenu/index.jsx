import React from "react";
import { StSubMenu, StSubMenuList } from "./styled";
import { Link } from "react-router-dom";

function SubMenu() {
    return (
        <StSubMenu>
            <StSubMenuList>
                <li>
                    <Link to="/dashboard/manito">마니또</Link>
                </li>
                <li>
                    <Link to="/dashboard/sent">보낸 쪽지함</Link>
                </li>
                <li>
                    <Link to="/dashboard/inbox">받은 쪽지함</Link>
                </li>
            </StSubMenuList>
        </StSubMenu>
    );
}

export default SubMenu;
