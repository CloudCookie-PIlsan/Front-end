import styled from "styled-components";

export const StNavContainer = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: var(--border);
    background-color: var(--background);
    border-radius: 10px;
    position: absolute;
    top: 30px;
    left: calc(3%);
    padding: 0 2rem;
    box-sizing: border-box;

    & > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
    }
`;
