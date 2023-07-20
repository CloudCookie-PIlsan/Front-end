// action value
const GUESS_SUCCESS = "user/GUESS_SUCCESS";

// action creator
export const setSuccess = (isSuccess) => {
    return {
        type: GUESS_SUCCESS,
        payload: isSuccess,
    };
};

// state
const initialState = {
    guessedManito: false, // 마니또 맞추기 성공 여부
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GUESS_SUCCESS:
            return {
                guessedManito: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
