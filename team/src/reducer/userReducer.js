import producer from "immer";
const initialState = {
  me: null,
  sign: null,
  isLoading: false,
  isDone: false,
  idError: null,
  LoginLoding: false,
  LoginDone: false,
  LoginError: null,
  SignLoding: false,
  SignDone: false,
  SignError: null,
};

export const LOGIN_R = "LOGIN_IN_REQUEST";
export const LOGIN_S = "LOGIN_IN_SUCCESS";
export const LOGIN_F = "LOGIN_IN_FAILURE";
export const SIGN_R = "SIGN_IN_REQUEST";
export const SIGN_S = "SIGN_IN_SUCCESS";
export const SIGN_F = "SIGN_IN_FAILURE";

const reducer = (state = initialState, action) =>
  producer(state, (draft) => {
    switch (action.type) {
      //login
      case LOGIN_R:
        draft.LoginLoding = true;
        draft.LoginDone = false;
        draft.LoginError = null;
        break;
      case LOGIN_S:
        draft.LoginLoding = false;
        draft.LoginDone = true;
        draft.me = action.data;
        break;
      case LOGIN_F:
        draft.LoginLoding = false;
        draft.LoginDone = true;
        draft.LoginError = action.err;
        break;

      //sign
      case SIGN_R:
        draft.SignLoding = true;
        draft.SignDone = false;
        draft.SignError = null;
        break;
      case SIGN_S:
        draft.SignLoding = false;
        draft.SignDone = true;
        draft.sign = action.data;
        break;
      case SIGN_F:
        draft.SignLoding = false;
        draft.SignDone = true;
        draft.SignError = action.err;
        break;
      default:
        return console.log("타입명이틀렸습니다");
    }
  });

export default reducer;
