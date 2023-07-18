import React, {useState} from "react";
import ModalContainer from "..";
import Title from "../../Title";
import Input from "../../Input";
import Button from "../../Button";
import Message from "../../Message";
import {StButtonContainer} from "../styled";
import { useQueryClient, useMutation } from "react-query";
import { register } from "../../../../api/API";

const ModalRegister = (props) => {
    const {onClose} = props;
    const [errMsg, setErrMsg] = useState("");
    const [input, setInput] = useState({
        userName: "",
        userId: "",
        password: "",
    });

    // API 통신
    const queryClient = useQueryClient();
    const { mutate } = useMutation(register, {
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData("user", data);
            window.alert("회원가입이 완료되었습니다!");
            onClose();
        },
        onError: (error) => {
            console.log(error);
            setErrMsg(error.message);
        },
    });

    /** 회원 가입 input state 처리 함수 */
    const handleInput = (e) => {
        console.log("fire!");
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    
    console.log("useName: " + input.userName, "userId: " + input.userId, "password: " + input.password);
    const handleSubmit = () => {
        if(input.userName === "" || input.userId === "" || input.password === "") {
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
                handleChange={handleInput}
                type="text"
                placeholder="이름을 입력해주세요"
                />
            <p>ID</p>
            <Input 
                value={input.userId} 
                name="userId"
                handleChange={handleInput}
                type="text"
                placeholder="영어 소문자와 숫자 반드시 포함한 4~10자"
                />
            <p>비밀번호</p>
            <Input 
                value={input.password} 
                name="password"
                handleChange={handleInput}
                type="password"
                placeholder="영어 소문자, 숫자와 특수문자 반드시 포함한 8~15자"
            />
            </div>
            <Message>{errMsg}</Message>
            <StButtonContainer>
                <Button handleBtnClick={handleSubmit}>회원 가입</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalRegister;
