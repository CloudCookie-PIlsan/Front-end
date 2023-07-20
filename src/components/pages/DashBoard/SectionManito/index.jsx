import React, { useEffect, useState } from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { StManitoWrap, StGuessWrap, AnswerBox } from "./styled";
import { ContentContainer } from "../styled";
import { useMutation } from "react-query";
import { guessManito, fetchManitoInfo, fetchPreviousManitoInfo } from "../../../../api/API";
import { getCookie } from "../../../../modules/cookie";
import { Navigate } from "react-router-dom";
import ManitoGetter from "../../../shared/ManitoGetter";
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "../../../../redux/modules/user";

const SectionManito = () => {
    const dispatch = useDispatch();
    const {isSucceded, isGuessed} = useSelector((state) => state.user); // 마니또 맞추기 1번 이상 성공시 무조건 유지

    const user = getCookie("Authorization"); // 로그인 여부
    const [guess, setGuess] = useState({
        // 맞추기 결과값
        username: "",
        success: false,
    });
    const [value, setValue] = useState(""); // 맞추기 인풋

    const handleInput = (e) => {
        setValue(e.target.value);
        console.log("value ", value);
    };

    const { mutate } = useMutation(guessManito, {
        onSuccess: (data) => {
            console.log("guessManito ", data);
            setGuess({
                username: data.data.username,
                success: data.data.success,
            });
            dispatch(setSuccess([data.data.success, true]));
        },
        onError: (error) => {
            console.log(error);
        },
    });    

    return (
        <ContentContainer>
            {!user && <Navigate to="/" />}
            <Title>마니또</Title>
            <div>
                <StGuessWrap>
                    <SubTitle>오늘 당신의 마니또를 맞혀보세요! 😘</SubTitle>
                    {isSucceded || 
                    <div>
                        <Input
                            value={value}
                            handleChange={handleInput}
                            name="manito"
                            type="text"
                            placeholder="누구일까...?"
                        />
                        <Button
                            handleBtnClick={() => {
                                mutate(value);
                            }}
                            $negative={true}
                        >
                            맞추기
                        </Button>
                    </div>}
                    {isGuessed && (
                        <AnswerBox type={isSucceded || "fail"}>
                            {isSucceded
                                ? `축하합니다! 마니또를 눈치챘네요. 당신의 오늘 마니또는 ${guess.username} 이었어요.`
                                : "아쉬워요! 이번에는 마니또를 맞히지 못했어요."}
                        </AnswerBox>
                    )}
                </StGuessWrap>
            </div>
            <StManitoWrap>
                <div>
                    <SubTitle>오늘 당신의 비밀 친구는? 🤔</SubTitle>
                    <ManitoGetter 
                        queryKey="curGiver"
                        queryFn={fetchManitoInfo}
                        responseKey="manitoGiver"
                    />
                </div>
                <div>
                    <SubTitle>어제 당신의 마니또는? 💘</SubTitle>
                    <ManitoGetter 
                        queryKey="prevReceiver"
                        queryFn={fetchPreviousManitoInfo}
                        responseKey="manitoReceiver"
                    />
                </div>
            </StManitoWrap>
        </ContentContainer>
    );
};

export default SectionManito;
