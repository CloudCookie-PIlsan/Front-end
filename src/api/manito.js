// API 통신 관련 모듈
import axios from "axios";

/** 마니또 정보 가져오기 */
const getManitoInfo = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/giver`);
    return response;
};

/** 마니또 매칭 요청 (TEST) */
const matchManito = async (newMatch) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/test`, newMatch);
    return response;
};

export { getManitoInfo, matchManito };
