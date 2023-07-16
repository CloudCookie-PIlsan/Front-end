import styled, { css } from "styled-components";

// 컬러셋
const $primary = "#1abc9c";
const $primaryHover = "#16a085";
const $danger = "#e74c3c";
const $dangerHover = "#c0392b";

// 컬러 타입별 색상 반환해주는 함수
const getBtnColor = (colorType, isHover = false) => {
    switch (colorType) {
        case "danger":
            return isHover ? $dangerHover : $danger;
        case "primary":
        default:
            return isHover ? $primaryHover : $primary;
    }
};

export const StyledButton = styled.button`
    display: flex;
    flex-direction: ${(props) => (props.$isIconRight ? "row" : "row-reverse")};
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    border-radius: 5px;
    padding: 0 1.5rem;
    background-color: ${(props) => getBtnColor(props.color)};
    color: #ffffff;
    cursor: pointer;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: ${(props) => getBtnColor(props.color, true)};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    // icons
    & > i {
        display: block;
        width: 1rem;
        height: 1rem;
        ${(props) => (props.$isIconRight ? "margin-left: 0.25rem;" : "margin-right: 0.25rem;")};
        background-size: cover;
    }

    // 크기. default는 large
    ${(props) =>
        props.size === "medium" &&
        css`
            height: 2rem;
            font-size: 0.75rem;

            & > i {
                width: 0.75rem;
                height: 0.75rem;
            }
        `}
    ${(props) =>
        props.size === "small" &&
        css`
            height: 1.75rem;
            font-size: 0.5rem;

            & > i {
                width: 0.6rem;
                height: 0.6rem;
            }
        `}

    // $negative
    ${(props) =>
        props.$negative === true &&
        css`
            background-color: transparent;
            border: 2px solid ${(props) => getBtnColor(props.color)};
            color: ${(props) => getBtnColor(props.color)};

            &:hover {
                border-color: ${(props) => getBtnColor(props.color, true)};
                background-color: ${(props) => getBtnColor(props.color, true)};
                color: #fff;
            }
        `}

    margin-right: 0.2rem; //! test용, 이후 지우기
`;
