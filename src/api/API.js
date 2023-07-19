// API 통신 관련 모듈
import { assertYieldExpression } from "@babel/types";
import axios from "axios";
import { async } from "q";
import { getCookie } from "../modules/cookie";

/** Axios instance */
const client = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true,
});

/** post config */
const config = () => {
    const loginToken = getCookie("Authorization");
    return {
        headers: {
            Authorization: `Bearer ${loginToken}`,
            "Content-type": "application/json",
        }
    }
}

/** 로그인 */
const login = async (newData) => {
    const response = await client.post(`/api/login`, newData);
    return response;
};

/** 회원 가입 */
const register = async (newData) => {
    console.log("newData", newData);
    const response = await client.post(`/api/signup`, newData);
    return response;
};

/** 마니또 정보 가져오기 */
const fetchManitoInfo = async () => {
    const response = await client.get(`/api/manitoes/giver`, config());
    return response;
};

/** 나의 전 마니또 정보 가져오기 (전날 나를 마니또 한 사람) */
const fetchPreviousManitoInfo = async () => {
    const response = await client.get(`/api/manitoes/receiver`, config());
    return response;
};

/** 나의 마니또 맞추기 */
const guessManito = async (username) => {
    const response = await client.post(`/api/manitoes/guessManito`, { username }, config());
    return response;
};

/** 쪽지 보내기 */
const sendLetter = async (contents) => {
    const response = await client.post(`/api/messages`, { contents }, config());
    return response;
};

/** 보낸 쪽지 리스트 확인 */
const fetchSentList = async () => {
    const response = await client.get(`/api/messages/send`, config());
    return response;
};

/** 받은 쪽지 리스트 확인 */
const fetchReceivedList = async () => {
    const response = await client.get(`/api/messages/get`, config());
    return response;
};

export {
    login,
    register,
    fetchManitoInfo,
    fetchPreviousManitoInfo,
    guessManito,
    sendLetter,
    fetchSentList,
    fetchReceivedList,
};
