import React from "react";
import { StManitoBox } from "../../pages/DashBoard/SectionManito/styled";
import { useQuery } from "react-query";

const ManitoGetter = (props) => {
    const { queryKey, queryFn, responseKey } = props;

    const { isLoading, isError, data, error } = useQuery(queryKey, queryFn, {
        onSuccess: (data) => {
            console.log(queryKey, data);
        },
        onError: (e) => {
            console.log(e.message);
        },
    });

    if (isLoading) {
        return <StManitoBox>Loding</StManitoBox>;
    }
    if (isError) {
        return <StManitoBox>Error: {error.message} </StManitoBox>;
    }
    return <StManitoBox>{data.data[responseKey]}</StManitoBox>;
};

export default ManitoGetter;
