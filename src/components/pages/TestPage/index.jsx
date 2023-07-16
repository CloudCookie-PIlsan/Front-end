import React from "react";
import { StTextConatiner } from "./styled";
import TestGet from "./TestGet";

function TestPage() {
    return (
        <StTextConatiner>
            <h1>Test Page</h1>
            <TestGet/>
        </StTextConatiner>
    );
}

export default TestPage;
