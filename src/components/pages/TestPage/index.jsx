import React from "react";
import { StTextConatiner } from "./styled";
import TestGet from "./TestGet";
import TestPost from "./TestPost";

function TestPage() {
    return (
        <StTextConatiner>
            <h1>Test Page</h1>
            <TestPost/>
            <TestGet/>
        </StTextConatiner>
    );
}

export default TestPage;
