import styled from "styled-components";

export const DashBoardContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-shrink: 0;
    overflow-y: hidden;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    overflow-y: hidden;
`;

export const LetterContainer = styled.div`
    margin: 30px 0;
    height: calc(100% - 50px);
    overflow-y: scroll;
    box-sizing: border-box;
`;

export const LetterBox = styled.div`
width: 100%;
min-height: 80px;
margin-bottom: 1rem;

& > h5 {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
}
& > p {
    padding: 20px;
    border: var(--border);
}
`
