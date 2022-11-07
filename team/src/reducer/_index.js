import { combineReducers } from "redux";
import userReducer from "./userReducer";
import glenReducer from "./glenReducer";
const rootReducer = combineReducers({ userReducer, glenReducer });

export default rootReducer;
