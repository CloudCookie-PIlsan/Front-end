import styled from "styled-components";

export const StIconButton = styled.button`
    position: absolute;
    top: 30px; 
    right: 30px;
    box-shadow: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;

    & > i {
        width: 100%;
        height: 100%;
        display: block;
    }
`;
