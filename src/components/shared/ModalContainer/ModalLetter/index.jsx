import React, {useState, useEffect} from "react";
import ModalContainer from "..";
import Title from "../../Title";
import Button from "../../Button";
import TextArea from "../../TextArea";
import {StButtonContainer} from "../styled";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { sendLetter, fetchManitoInfo } from "../../../../api/API";

const ModalRegister = (props) => {
    const {onClose} = props;
    const [text, SetText] = useState("");

    // API 통신
    const queryClient = useQueryClient();
    /** 쪽지 보내기 API */
    const { mutate } = useMutation(sendLetter, {
        onSuccess: (data) => {
            console.log(data);
            onClose();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    /** 보낼 마니또 이름 가져오기 */
    const { data } = useQuery("curGiver", fetchManitoInfo);
    useEffect(() => {}, [data]);

    /** 로그인 input state 처리 함수 */
    const handleInput = (e) => {
        SetText(e.target.value);
        console.log(text)
    };

    const handleSubmit = () => {
        if(text === ""){
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
            <p>이름: {data !== undefined && data.manitoGiver}</p>
            <TextArea value={text} onChange={handleInput}/>
            <StButtonContainer>
                <Button handleBtnClick={handleSubmit}>보내기</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalRegister;
