// action value
const SET_LOGIN = "user/SET_LOGIN";

// action creator
export const setLogin = (isLogin) => {
    return {
        type: SET_LOGIN,
        payload: isLogin,
    };
};

// state
const initialState = {
    isLogin: false,
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                isLogin: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
