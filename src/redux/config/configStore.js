// 중앙 데이터 관리소(store) 설정하는 부분
import {createStore, combineReducers} from "redux";
import user from "../modules/user"

const rootReducer = combineReducers({
    user,
});
const store = createStore(rootReducer);

export default store;