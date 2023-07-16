import styled from "styled-components";

export const StIconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    background-color: #aaaaaa;
    border-radius: 50%;
    cursor: pointer;

    & > i {
        width: 80%;
        height: 80%;
        display: block;
    }
`;
