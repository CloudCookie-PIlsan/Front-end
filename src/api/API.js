// API 통신 관련 모듈
import { assertYieldExpression } from "@babel/types";
import axios from "axios";
import { async } from "q";

/** Axios instance */
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

/** 로그인 */
const login = async (userId, password) => {
    const response = await client.post(`/api/login`, { userId, password });
    return response;
};

/** 회원 가입 */
const register = async (userName, userId, password) => {
    const response = await client.post(`/api/signup`, { userName, userId, password });
    return response;
};

/** 마니또 정보 가져오기 */
const fetchManitoInfo = async () => {
    const response = await client.get(`/api/manitoes/giver`);
    return response;
};

/** 나의 전 마니또 정보 가져오기 (전날 나를 마니또 한 사람) */
const fetchPreviousManitoInfo = async () => {
    const response = await client.get(`/api/manitoes/receiver`);
    return response;
};

/** 나의 마니또 맞추기 */
const guessManito = async (userName) => {
    const response = await client.post(`/api/manitoes/guessManito`, { userName });
    return response;
};

/** 쪽지 보내기 */
const sendLetter = async (contents) => {
    const response = await client.post(`/api/messages`, { contents });
    return response;
};

/** 보낸 쪽지 리스트 확인 */
const fetchSentList = async () => {
    const response = await client.get(`/api/messages/send`);
    return response;
};

/** 받은 쪽지 리스트 확인 */
const fetchReceivedList = async () => {
    const response = await client.get(`/api/messages/get`);
    return response;
};

export {
    getManitoInfo,
    login,
    register,
    fetchManitoInfo,
    fetchPreviousManitoInfo,
    guessManito,
    sendLetter,
    fetchSentList,
    fetchReceivedList,
    matchManito,
};
