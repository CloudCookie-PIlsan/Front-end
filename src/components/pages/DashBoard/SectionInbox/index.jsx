import React from "react";
import Title from "../../../shared/Title";
import SubTitle from "../../../shared/SubTitle";
import { ContentContainer, LetterContainer, LetterBox } from "../styled";
import { fetchReceivedList } from "../../../../api/API";
import { useQuery, useQueryClient } from "react-query";
import { getCookie } from "../../../../modules/cookie";
import { Navigate } from "react-router-dom";

const SectionInbox = () => {
    const user = getCookie("Authorization");
    const queryClient = useQueryClient();    
    const calDate = (targetDate) => {
        const today = new Date().toISOString().substring(0, 10);
        const target = targetDate.substring(0, 10);
        console.log("today, ", today, "target, ", target);
        return targetDate === today;
    }
    const { isLoading, isError, data } = useQuery("inbox", fetchReceivedList, {
        onSuccess: (data) => {
            console.log("SectionInbox success ", data);
            queryClient.invalidateQueries("inbox");
        },
        onError: (error) => {
            console.log("SectionInbox error ", error.message);
        },
    }
    );

    if (isLoading) {
        return;
    }
    if (isError) {
        return;
    }
    return (
        <ContentContainer>
            {!user && <Navigate to="/" />}
            <Title>받은 쪽지함</Title>
            <LetterContainer>
                {!isLoading &&
                    !isError &&
                    data.data.length !== 0 &&
                    data.data.map((item, index) => {
                        return (
                            <LetterBox key={index}>
                                <SubTitle>From. {calDate(item.receiveDay) 
                                ? `당신의 마니또😘`
                                : item.sendPersonUsername}<span>{item.receiveDay.substring(0, 10)}</span></SubTitle>
                                <p>{item.contents}</p>
                            </LetterBox>
                        );
                    })}
            </LetterContainer>
        </ContentContainer>
    );
};

export default SectionInbox;
