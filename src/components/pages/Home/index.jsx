import React from "react";
import { StTypingText } from "./styled";
import { getCookie } from "../../../modules/cookie";
import { Navigate } from "react-router-dom";

function Home() {
    const user = getCookie("Authorization");
    return (
            <StTypingText>
            {user && <Navigate to="/dashboard/manito" />}
              Home</StTypingText>
    );
}

export default Home;
