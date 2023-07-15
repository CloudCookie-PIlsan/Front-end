import React from "react";
import Icon from "../Icon";
import { StIconButton } from "./styled";
import { iconList } from "../../Datas/iconData";

const IconButton = (props) => {
    const { onClick, icon } = props;
    const clickButton = () => {
        console.log("btn clicked!"); // * 필요한 함수 넣기
    };
    return (
        <StIconButton onClick={clickButton}>
            <Icon iconName={icon} />
        </StIconButton>
    );
};

export default IconButton;
