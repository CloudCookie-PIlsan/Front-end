import { Cookies } from "react-cookie";

const cookies = new Cookies();

/** 쿠키값 저장 */
export const setCookie = (name, token) => {
    return cookies.set(name, token);
};

/** 쿠키값 가져오기 */
export const getCookie = (name) => {
    return cookies.get(name);
};

/** 쿠키값 지우기 */
export const removeCookie = (name) => {
    return cookies.remove(name);
};

/** 헤더 쿠키 가져오기 */
export const getHeaderCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};
