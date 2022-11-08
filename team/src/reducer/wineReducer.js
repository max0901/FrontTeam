import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  red: [
    {
      id: 5,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
      ALV: "12.5%",
      품종: "100% 말벡",
      나라: "아르헨티나",
      plate: "부드러운 탄닌과 과일맛이 특징",
    },
    {
      id: 4,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 3,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 2,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 1,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
  ],
};

export const wineReducer = createSlice({
  name: "wine",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.red.unshift(action.payload);
    },
    removetodo: (state, action) => {
      state.red = state.red.filter((item) => item.id !== action.payload.id);
    },
    updatetodo: (state, action) => {
      const red = state.red.find((item) => item.id === action.payload.id);
      red.dt = action.payload.dt;
    },
  },
});

export const { addtodo, removetodo, updatetodo } = wineReducer.actions;
