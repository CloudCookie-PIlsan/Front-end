import React from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import { ContentContainer, LetterContainer, LetterBox } from "../styled";
import { fetchReceivedList } from "../../../../api/API";
import { useQuery } from "react-query";
import { getCookie } from "../../../../modules/cookie";
import { Navigate } from "react-router-dom";

const SectionInbox = () => {
    const user = getCookie("Authorization");
    const { isLoading, isError, data } = useQuery("inbox", fetchReceivedList, {
        onSuccess: data => {
            console.log("SectionInbox success ", data);
        },
        onError: error => {
            console.log("SectionInbox error ", error.message);
        }
    });

    if(isLoading) {
        return;
    }
    if(isError) {
        return;
    }
    return (
        <ContentContainer>
            {!user && <Navigate to="/" />}
            <Title>받은 쪽지함</Title>
            <LetterContainer>
                {!isLoading &&
                    !isError &&
                    data?.map((item, index) => {
                        return (
                            <LetterBox key={index}>
                                <SubTitle>From. {item.sendPersonUsername}</SubTitle>
                                <p>{item.contents}</p>
                            </LetterBox>
                        );
                    })}
            </LetterContainer>
        </ContentContainer>
    );
};

export default SectionInbox;
