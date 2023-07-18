import React, {useState} from "react";
import ModalContainer from "..";
import Title from "../../Title";
import Input from "../../Input";
import Button from "../../Button";
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
        console.log("회원가입!");
        //! API 통신 붙이기
        /**
         * {
            userName:
            userId:
            password:
            }
         */
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
