import React from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import { ContentContainer, LetterContainer, LetterBox } from "../styled";
import { fetchSentList } from "../../../../api/API";
import { useQuery } from "react-query";
import { getCookie } from "../../../../modules/cookie";
import { Navigate } from "react-router-dom";

const SectionSent = () => {
    const user = getCookie("Authorization");
    const { isLoading, isError, data } = useQuery("sent", fetchSentList);

    return (
        <ContentContainer>
            {!user && <Navigate to="/" />}
            <Title>보낸 쪽지함</Title>
            <LetterContainer>
                {!isLoading &&
                    !isError &&
                    data.map((item, index) => {
                        return (
                            <LetterBox key={index}>
                                <SubTitle>To. {item.getPersonUsername}</SubTitle>
                                <p>{item.contents}</p>
                            </LetterBox>
                        );
                    })}
            </LetterContainer>
        </ContentContainer>
    );
};

export default SectionSent;
