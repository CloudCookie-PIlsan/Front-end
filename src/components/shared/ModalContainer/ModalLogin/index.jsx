import React, {useState} from "react";
import ModalContainer from "../../ModalContainer";
import Title from "../../Title";
import Input from "../../Input";
import Button from "../../Button";
import {StButtonContainer} from "../styled";

const ModalLogin = (props) => {
    const {onClose} = props;
    const [input, SetInput] = useState({
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
        console.log("로그인!");
        //! API 통신 붙이기
        /**
         * {
            userId:
            password:
            }
         */
    }

    return (
        <ModalContainer onClose={onClose}>
            <Title>Login</Title>
            <div>
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
                <Button handleBtnClick={handleSubmit}>로그인하기</Button>
            </StButtonContainer>
        </ModalContainer>
    );
};

export default ModalLogin;