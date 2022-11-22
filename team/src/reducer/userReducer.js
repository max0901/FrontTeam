import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [{ id: 1, email: "admin", password: 1234, name: "max" }],
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

export const { adduser, removeuser, edituser } = signUserReducer.actions;
