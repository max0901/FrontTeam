import { fork, all, takeLatest, put, delay } from "redux-saga/effects";

import {
  LOGIN_F,
  LOGIN_R,
  LOGIN_S,
  SIGN_F,
  SIGN_S,
  SIGN_R,
} from "../reducer/userReducer";
import { dummyUser } from "../util/data";

//saga 함수

function* Login(action) {
  try {
    yield delay(500);
    yield put({
      type: LOGIN_S,
      data: dummyUser(action.data),
    });
  } catch (err) {
    yield put({
      type: LOGIN_F,
      error: err.response.data,
    });
  }
}

function* Sign(action) {
  try {
    yield put({
      type: SIGN_S,
      data: dummyUser(action.data),
    });
  } catch (err) {
    yield put({
      type: SIGN_F,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_R, Login);
}
function* watchSign() {
  yield takeLatest(SIGN_R, Sign);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSign)]);
}
