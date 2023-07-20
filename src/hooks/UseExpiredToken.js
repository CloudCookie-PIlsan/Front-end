import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { AxiosError } from "axios";
import React, { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { removeCookie } from "../modules/cookie";

const UseExpiredToken = () => {
    const handleError = useCallback((axiosError) => {
        const errorResponse = axiosError.response?.data;
        const error = errorResponse.error;
        const status = error.statusCode;

        switch (status) {
            case 500:
                removeCookie("Authorization");
                window.alert("로그인이 만료되었습니다! 다시 로그인해주세요.");
                return <Navigate to="/" />;
                break;
            default:
                console.log(error.validationErrorInfo);
                break;
        }
    }, []);
    return handleError;
};

export default UseExpiredToken;
