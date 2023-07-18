import React from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import { ContentContainer, LetterContainer, LetterBox } from "../styled";
import { fetchReceivedList } from "../../../../api/API";
import { useQuery } from "react-query";

const SectionInbox = () => {
    const { isLoading, isError, data } = useQuery("inbox", fetchReceivedList);

    return (
        <ContentContainer>
            <Title>받은 쪽지함</Title>
            <LetterContainer>
                {!isLoading &&
                    !isError &&
                    data.map((item, index) => {
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
