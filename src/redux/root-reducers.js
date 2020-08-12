import { combineReducers } from "redux";
import userReducer from "./reducers/user-reducer";
import scoketReducer from "./reducers/scoket-reducer";

export default combineReducers({
    user: userReducer,
    data: scoketReducer
});