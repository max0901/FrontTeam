import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [{ id: 1, email: "admin", password: 1234, name: "max", info: false }],
};

export const signUserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.user.unshift(action.payload);
    },
    removeuser: (state, action) => {
      state.user = state.user.filter((item) => item.id !== action.payload.id);
    },
    edituser: (state, action) => {
      const user = state.user.find((item) => item.id === action.payload.id);
      user.h4 = action.payload.h4;
    },
  },
});

export const loginUserReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    Login: (state, action) => {},
    Logout: (state, action) => {
      state.glen = state.glen.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { adduser, removeuser, edituser } = signUserReducer.actions;
export const { Login, Logout } = loginUserReducer.actions;
