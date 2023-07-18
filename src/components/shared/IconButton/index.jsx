import React from "react";
import Icon from "../Icon";
import { StIconButton } from "./styled";

const IconButton = (props) => {
    const { handleClick, icon } = props;
    const clickButton = () => {
        handleClick();
    };
    return (
        <StIconButton onClick={clickButton}>
            <Icon iconName={icon} />
        </StIconButton>
    );
};

export default IconButton;
