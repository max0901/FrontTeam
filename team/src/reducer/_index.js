import { combineReducers } from "redux";
import { signUserReducer } from "./userReducer";
import { glenReducer } from "./glenReducer";
import {
  redWineReducer,
  sparkWineReducer,
  whiteWineReducer,
} from "./wineReducer";
const rootReducer = combineReducers({
  glen: glenReducer.reducer,
  red: redWineReducer.reducer,
  white: whiteWineReducer.reducer,
  spark: sparkWineReducer.reducer,
  user: signUserReducer.reducer,
});

export default rootReducer;
