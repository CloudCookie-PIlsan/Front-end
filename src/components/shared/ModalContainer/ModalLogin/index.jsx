import React, { useState } from "react";
import ModalContainer from "../../ModalContainer";
import Title from "../../Title";
import Input from "../../Input";
import Button from "../../Button";
import { useQueryClient, useMutation } from "react-query";
import { StButtonContainer } from "../styled";
import { login } from "../../../../api/API";

const ModalLogin = (props) => {
    const { onClose } = props;
    const [input, SetInput] = useState({
        id: "",
        pw: "",
    });
    // API 통신
    const queryClient = useQueryClient();
    const { mutate } = useMutation(login, {
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData("user", data);
            onClose();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    /** 로그인 input state 처리 함수 */
    const handleInput = (e) => {
        SetInput({
            ...input,
            [e.target.name]: e.target.value,
        }); 
    };

    const handleSubmit = () => {
        if(input.id === "" || input.pw === ""){
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        } else {
            console.log("로그인!");
            mutate();
        }
    };

    return (
        <ModalContainer onClose={onClose}>
            <Title>Login</Title>
            <div>
                <p>ID</p>
                <Input value={input.id} name="id" onChange={handleInput} type="text" placeholder="ID 입력해주세요!" />
                <p>비밀번호</p>
                <Input
                    value={input.pw}
                    name="pw"
                    onChange={handleInput}
                    type="password"
                    placeholder="pw 입력해주세요!"
                />
            </div>
            <StButtonContainer>
                <Button handleBtnClick={handleSubmit}>로그인하기</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalLogin;
