import React from "react";
import { StSubTitle } from "./styled";

const SubTitle = (props) => {
    const { children } = props;
    return <StSubTitle>{children}</StSubTitle>;
};

export default SubTitle;
