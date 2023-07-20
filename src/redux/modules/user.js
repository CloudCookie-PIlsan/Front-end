// action value
const GUESS_SUCCESS = "user/GUESS_SUCCESS";

// action creator
export const setSuccess = (payload) => {
    return {
        type: GUESS_SUCCESS,
        payload
    };
};

// state
const initialState = {
    isGuessSucceded: false, // 마니또 맞추기 성공 여부
    isGuessed: false, // 마니또 맞추기 시도 여부
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GUESS_SUCCESS:
            console.log(action.payload);
            return {
                isGuessSucceded: action.payload[0],
                isGuessed: action.payload[1],
            };
        default:
            return state;
    }
};

export default reducer;
