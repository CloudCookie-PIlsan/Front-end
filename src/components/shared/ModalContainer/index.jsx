import React from "react";
import { StOverlay, StModalContainer } from "./styled";
import IconButton from "../IconButton";

// * 모달 껍데기 컴포넌트
const ModalContainer = (props) => {
    const { onClose, children } = props;
    const onToggleModal = () => {
        onClose();
    };
    return <StOverlay> 
        <StModalContainer>
            <IconButton icon="x" handleClick={onToggleModal}/>
        {children}
        </StModalContainer>
     </StOverlay>;
};

export default ModalContainer;
