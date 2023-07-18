import React, {useState} from "react";
import ModalContainer from "..";
import Title from "../../Title";
import Button from "../../Button";
import TextArea from "../../TextArea";
import {StButtonContainer} from "../styled";
import { useQueryClient, useMutation } from "react-query";
import { sendLetter } from "../../../../api/API";

const ModalRegister = (props) => {
    const {onClose} = props;
    const [text, SetText] = useState("");

    // API 통신
    const queryClient = useQueryClient();
    const { mutate } = useMutation(sendLetter, {
        onSuccess: (data) => {
            console.log(data);
            onClose();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    /** 로그인 input state 처리 함수 */
    const handleInput = (e) => {
        SetText(text);
    };

    const handleSubmit = () => {
        if(value === ""){
            alert("쪽지 내용을 입력해주세요.");
            return;
        } else {
            console.log("편지 보내기!");
            mutate(text);
        }
    }

    return (
        <ModalContainer onClose={onClose}>
            <Title>마니또에게 쪽지 보내기</Title>
            <p>이름</p>
            <TextArea value={text} onChange={handleInput}/>
            <StButtonContainer>
                <Button handleBtnClick={handleSubmit}>보내기</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalRegister;
