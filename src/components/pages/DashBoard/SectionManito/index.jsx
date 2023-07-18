import React, { useEffect, useState } from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { StManitoWrap, StGuessWrap, StManitoBox, AnswerBox } from "./styled";
import { ContentContainer } from "../styled";
import { useMutation, useQueries } from "react-query";
import { guessManito, fetchManitoInfo, fetchPreviousManitoInfo } from "../../../../api/API";

const SectionManito = () => {
    const [isGuessed, setIsGuessed] = useState(false);
    const [guess, setGuess] = useState({
        username: "",
        success: false,
    });
    const [value, setValue] = useState("");
    const result = useQueries([
        {
            queryKey: "curGiver",
            queryFn: fetchManitoInfo,
        },
        {
            queryKey: "prevReceiver",
            queryFn: fetchPreviousManitoInfo,
        },
    ]);
    useEffect(() => {
        console.log("SectionManito");
        console.log(result);
        const loadingFinishAll = result.some((res) => res.isLoading); // ? 아직 이해 못했어
        console.log(loadingFinishAll);
    }, [result]);

    const { mutate } = useMutation(guessManito, {
        onSuccess: (data) => {
            setGuess(data);
            setIsGuessed(true);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <ContentContainer>
            <Title>마니또</Title>
            <div>
                <StGuessWrap>
                    {isGuessed && (
                        <AnswerBox type={guess.success && "fail"}>
                            {guess.success
                                ? `축하합니다! 마니또를 눈치챘네요. 당신의 오늘 마니또는 <span>${guess.username}</span> 이었어요.`
                                : "아쉬워요! 이번에는 마니또를 맞히지 못했어요."}
                        </AnswerBox>
                    )}
                    <SubTitle>오늘 당신의 마니또를 맞혀보세요! 😘</SubTitle>
                    <div>
                        <Input
                            value={value}
                            onChange={handleInput}
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
                    </div>
                </StGuessWrap>
            </div>
            <StManitoWrap>
                <div>
                    <SubTitle>오늘 당신의 비밀 친구는? 🤔</SubTitle>
                    <StManitoBox type="giver">{result[0].data.manitoGiver}</StManitoBox>
                </div>
                <div>
                    <SubTitle>어제 당신의 마니또는? 💘</SubTitle>
                    <StManitoBox type="receiver">{result[1].data.manitoReceiver}</StManitoBox>
                </div>
            </StManitoWrap>
        </ContentContainer>
    );
};

export default SectionManito;
