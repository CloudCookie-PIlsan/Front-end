import React from "react";
import { StMsg } from "./styled";

const Message = (props) => {
    const { children, msgType = "error" } = props;
    return <StMsg msgType={msgType}>{children}</StMsg>;
};

export default Message;
