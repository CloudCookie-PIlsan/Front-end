import React from "react";
import { Navigate } from "react-router-dom";

const UseHandleExpiredToken = () => {
    window.alert("로그인이 만료되었습니다! 다시 로그인해주세요.");
    return <Navigate to="/" />;
};

export default UseHandleExpiredToken;
