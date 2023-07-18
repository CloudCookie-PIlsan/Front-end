import React, {useState} from "react";
import ModalContainer from "..";
import Title from "../../Title";
import Button from "../../Button";
import TextArea from "../../TextArea";
import {StButtonContainer} from "../styled";

const ModalRegister = (props) => {
    const {onClose} = props;
    const [input, SetInput] = useState({
        userName: "",
        id: "",
        pw: "",
    });

    /** 로그인 input state 처리 함수 */
    const handleInput = (e) => {
        SetInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log("편지 보내기!");
        //! API 통신 붙이기
    }

    return (
        <ModalContainer onClose={onClose}>
            <Title>마니또에게 쪽지 보내기</Title>
            <p>이름</p>
            <TextArea />
            <StButtonContainer>
                <Button handleBtnClick={handleSubmit}>보내기</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalRegister;
