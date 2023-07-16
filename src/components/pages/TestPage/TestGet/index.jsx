import React, {useState} from "react";
import { getManitoInfo } from "../../../../api/manito";
import { useQuery } from "react-query";

/** 마니또 정보 가져오기 테스트 */
function TestGet() {
    const { isLoading, isError, data } = useQuery("manito", getManitoInfo);
    //const [manitoData, setManitoData] = useState("");

    if (isLoading) {
        // setManitoData("로딩중");
    }

    if (isError) {
        // setManitoData("에러 발생");
    }

    console.log("data", data.data.manitoGiver);
    return <div>당신의 마니또는 {data.data.manitoGiver}</div>;
}

export default TestGet;
