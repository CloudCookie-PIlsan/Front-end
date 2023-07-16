import React from "react";
import { StTitle } from "./styled";

const Title = (props) => {
    const { children } = props;
    return <StTitle>{children}</StTitle>;
};

export default Title;
