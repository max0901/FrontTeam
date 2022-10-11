import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer/_index";
import rootSaga from "../saga/_index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddelware from "redux-saga";
const logger = createLogger();
const sagaMiddelware = createSagaMiddelware();
const createConfigure = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(logger, sagaMiddelware))
      : applyMiddleware(sagaMiddelware)
  );
  sagaMiddelware.run(rootSaga);
  return store;
};
export default createConfigure;
