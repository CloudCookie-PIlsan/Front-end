import styled from "styled-components";

const $answerSuccess = "#33d9b2";
const $answerSuccessBorder = "#218c74";
const $answerFail = "#ffb8b8";
const $answerFailBorder = "#ff3838";

export const StGuessWrap = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;

    & > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        & > input {
          margin: 0;
          background-color: transparent;
          min-width: 100px;
          max-width: 400px;
          flex-shrink: 0;
        }
        & > button {
          flex-shrink: 0;
        }
    }
`;

export const AnswerBox = styled.p`
    padding: 1rem;
    border: 1px solid ${(props) => props.type === "fail" ? $answerFailBorder : $answerSuccessBorder};
    border-radius: 10px;
    color: ${(props) => props.type === "fail" ? $answerFailBorder : $answerSuccessBorder};;
    background-color: ${(props) => props.type === "fail" ? $answerFail : $answerSuccess};

    margin-bottom: 1rem;
    & > span {
      font-weight : 700;
    }
`;

export const StManitoWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 50px;
    margin-top: 5rem;
    flex-wrap: wrap;
`;
export const StManitoBox = styled.p`
    width: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 10px;
    padding: 2rem;
    border: var(--border-colored);
    margin-top: 1rem;
    font-size: 1.2rem;
    border-radius: 10px;
    font-weight: 500;
`;
