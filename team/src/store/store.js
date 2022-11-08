import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import rootReducer from "../reducer/_index";
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development", //true,false
  middleware: process.env.NODE_ENV === "development" && [logger], //array
});
