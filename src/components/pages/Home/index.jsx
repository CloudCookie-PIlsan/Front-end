import React from "react";
import { StHomeContainer } from "./styled";
import { getCookie } from "../../../modules/cookie";
import { Navigate } from "react-router-dom";
import TypingAnimText from "../../shared/TypingAnimText";

function Home() {
    const user = getCookie("Authorization");
    console.log(new Date());
    return (
        <StHomeContainer>
            {user && <Navigate to="/dashboard/manito" />}
              <img src="/assets/images/img-sparta.png" alt="르탄이" width="400px" />
            <TypingAnimText text="너... 내 마니또가 돼라 ❤" />
        </StHomeContainer>
    );
}

export default Home;
