import styled, { keyframes } from "styled-components";

const cursor = keyframes`
    from { border-right: 2px solid #222; }
    to { border-right: 2px solid #777; }
`;

export const StTypingText = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;

    &::after {
        content: "";
        margin-left: 0.4rem;
        border-right: 3px solid #1e1e1e;
        animation: cursor 0.9s infinite steps(2);
    }
`;
