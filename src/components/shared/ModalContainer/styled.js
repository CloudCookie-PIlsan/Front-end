import styled from "styled-components";
import {StIconButton} from "../IconButton/styled"

export const StOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const StModalContainer = styled.div`
    width: 600px;
    min-height: 400px;
    padding: 4rem;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    & > div {
        width: 100%;
    }
    & > p {
        margin-right: auto;
    }
`;

export const StButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        margin-right: 0.5rem;
        &:last-child {
            margin-right: 0;
        }
    }
`;