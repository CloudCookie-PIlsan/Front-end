// 중앙 데이터 관리소(store) 설정하는 부분
import {createStore, combineReducers} from "redux";
import isLogin from "../modules/user"

const rootReducer = combineReducers({
    isLogin,
});
const store = createStore(rootReducer);

export default store;