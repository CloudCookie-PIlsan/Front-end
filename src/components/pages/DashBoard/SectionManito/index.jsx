import React from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { StManitoWrap, StGuessWrap, StManitoBox, AnswerBox } from "./styled";
import { ContentContainer } from "../styled";

const SectionManito = () => {
    return (
        <ContentContainer>
            <Title>마니또</Title>
            <div>
                <StGuessWrap>
                    <AnswerBox type="fail">
                        축하합니다! 마니또를 눈치챘네요. 당신의 오늘 마니또는 <span>김르탄</span> 이었어요.
                    </AnswerBox>
                    <SubTitle>오늘 당신의 마니또를 맞혀보세요! 😘</SubTitle>
                    <div>
                        <Input name="manito" type="text" placeholder="누구일까...?" />
                        <Button
                            handleBtnClick={() => {
                                console.log("맞추기");
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
                    <StManitoBox type="giver">
                        김구름
                    </StManitoBox>
                </div>
                <div>
                    <SubTitle>어제 당신의 마니또는? 💘</SubTitle>
                    <StManitoBox type="receiver">
                        박구름
                    </StManitoBox>
                </div>
            </StManitoWrap>
        </ContentContainer>
    );
};

export default SectionManito;
