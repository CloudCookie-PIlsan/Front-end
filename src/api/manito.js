// API 통신 관련 모듈
import axios from "axios";

/** axios instance */
const client = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

/** 마니또 정보 가져오기 */
const getManitoInfo = async () => {
    const response = await client.get(`/api/manitoes/giver`);
    return response;
};

/** 마니또 매칭 요청 (TEST) */
const matchManito = async (newMatch) => {
    const response = await client.post(`/api/manitoes/test`, newMatch);
    return response;
};

export { getManitoInfo, matchManito };
