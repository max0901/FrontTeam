import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { glenReducer } from "./glenReducer";
import { wineReducer } from "./wineReducer";
const rootReducer = combineReducers({
  userReducer,
  glen: glenReducer.reducer,
  wine: wineReducer.reducer,
});

export default rootReducer;
