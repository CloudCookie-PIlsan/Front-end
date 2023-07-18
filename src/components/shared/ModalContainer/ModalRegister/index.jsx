import React, {useState} from "react";
import ModalContainer from "..";
import Title from "../../Title";
import Input from "../../Input";
import Button from "../../Button";
import {StButtonContainer} from "../styled";
import { useQueryClient, useMutation } from "react-query";
import { register } from "../../../../api/API";

const ModalRegister = (props) => {
    const {onClose} = props;
    const [input, SetInput] = useState({
        userName: "",
        id: "",
        pw: "",
    });

    // API 통신
    const queryClient = useQueryClient();
    const { mutate } = useMutation(register, {
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData("user", data);
            onClose();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    /** 회원 가입 input state 처리 함수 */
    const handleInput = (e) => {
        SetInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(input.userName === "" || input.id === "" || input.pw === "") {
            alert("이름, 아이디와 비밀번호를 입력해주세요.");
            return;
        } else {
            console.log("회원가입!");
            mutate(input);
        }
    }

    return (
        <ModalContainer onClose={onClose}>
            <Title>Sign Up</Title>
            <div>
            <p>이름</p>
            <Input 
                value={input.userName} 
                name="userName"
                onChange={handleInput}
                type="text"
                placeholder="이름을 입력해주세요"
                />
            <p>ID</p>
            <Input 
                value={input.id} 
                name="id"
                onChange={handleInput}
                type="text"
                placeholder="ID 입력해주세요!"
                />
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
                <Button handleBtnClick={handleSubmit}>회원 가입</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalRegister;
