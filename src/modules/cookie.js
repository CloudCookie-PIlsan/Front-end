import { Cookies } from "react-cookie";

const cookies = new Cookies();

/** 쿠키값 저장 */
export const setCookie = (name, token) => {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 60 * 60 * 1000);
    return cookies.set(name, token, { expires: expirationDate });
};

/** 쿠키값 가져오기 */
export const getCookie = (name) => {
    return cookies.get(name);
};

/** 쿠키값 지우기 */
export const removeCookie = (name) => {
    return cookies.remove(name);
};
