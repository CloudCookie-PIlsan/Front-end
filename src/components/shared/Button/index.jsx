import React from "react";
import { StyledButton } from "./styled";
import Icon from "../Icon";

// 버튼 공통 요소 컴포넌트
// size: large(default), medium, small
// negative: true일 경우 line 버튼
// onClick: 버튼에 전달할 클릭 이벤트 함수
// isIconRight: 아이콘 있을 시 위치 텍스트의 오른쪽(true)/왼쪽(false) 선택
const Button = (props) => {
    const { handleBtnClick, color, size, negative, icon, isIconRight = true, children } = props;
    const onBtnClick = () => {
        handleBtnClick !== undefined && handleBtnClick(); // 이벤트 함수가 전달되었을 시 실행
    };

    return (
        <StyledButton color={color} size={size} $negative={negative} onClick={onBtnClick} $isIconRight={isIconRight}>
            {/* 버튼 내 텍스트 */}
            {children}
            {/* 아이콘 있을 시 Icon 컴포넌트 출력 */}
            {icon !== undefined ? <Icon iconName={icon} /> : ""}
        </StyledButton>
    );
};

export default Button;
