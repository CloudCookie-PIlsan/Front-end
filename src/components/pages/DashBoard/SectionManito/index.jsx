import React from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import { Container, StManitoWrap, StManitoBox } from "./styled";

const SectionManito = () => {
    return (
        <Container>
            <Title>마니또</Title>
            <StManitoWrap>
              <div>
                <SubTitle>오늘 당신의 비밀 친구는? 🤔</SubTitle>
                <StManitoBox type="giver"><span>S반</span> 김구름</StManitoBox>
              </div>
              <div>
                <SubTitle>어제 당신의 마니또는? 💘</SubTitle>
                <StManitoBox type="receiver"><span>R반</span> 박구름</StManitoBox>
              </div>
            </StManitoWrap>
        </Container>
    );
};

export default SectionManito;
