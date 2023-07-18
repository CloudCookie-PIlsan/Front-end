import styled from 'styled-components';

// 컬러셋
const $error = "#c0392b";
const $success = "#16a085";

// 컬러 타입별 색상 반환해주는 함수
const getMsgColor = (colorType = "error") => {
    switch (colorType) {
        case "success":
            return $success;
        case "error":
        default:
            return $error;
    }
};

export const StMsg = styled.span`
    font-size: 0.8rem;
    color: ${props => getMsgColor(props.$msgType)};
`;