import { combineReducers } from "redux";
import { signUserReducer } from "./userReducer";
import { glenReducer } from "./glenReducer";
import { wineReducer } from "./wineReducer";
const rootReducer = combineReducers({
  glen: glenReducer.reducer,
  wine: wineReducer.reducer,
  user: signUserReducer.reducer,
});

export default rootReducer;
