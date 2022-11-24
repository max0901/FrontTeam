import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  red: [
    {
      id: 5,
      img: "img/wine/red/red1.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
      ALV: "12.5%",
      kind: "100% 말벡",
      country: "아르헨티나",
      plate: "부드러운 탄닌과 과일맛이 특징",
    },
    {
      id: 4,
      img: "img/wine/red/red2.jpg",
      dt: "Roche Maet Cabernet Sauvignon",
      dd: "로쉐 마제 까베르네소비뇽",
      ALV: "12.5%",
      kind: "까베르네 소비뇽",
      country: "프랑스",
      plate: "붉은 과실풍미에 오크의 여운을 남기는 우아함이 특징이다",
    },
    {
      id: 3,
      img: "img/wine/red/red3.jpg",
      dt: "Roche Mazet Merlot",
      dd: "로쉐 마제 메를로",
      ALV: "12.5%",
      kind: "메를로",
      country: "프랑스",
      plate:
        "과실풍미가 스파이스 향, 초콜릿향과 조화를 이루며 부드러운 탄닌이 이를감싼다",
    },
    {
      id: 2,
      img: "img/wine/red/red4.jpg",
      dt: "D`Lamel Reserva Carmenere",
      dd: "달라멜 레세르바 까르메네르",
      ALV: "13.5%",
      kind: "까르메네르",
      country: "칠레",
      plate: "까르메네르 특유의 스파이시함과 탄닌+산도의 조합이 환상적이다.",
    },
    {
      id: 1,
      img: "img/wine/red/red4.jpg",
      dt: "Don Rey Cabernet Sauvignon",
      dd: "돈레이 카베르네 소비뇽",
      ALV: "1.5%",
      kind: "카베르네 소비뇽",
      country: "칠레",
      plate: "미디움 바디감에 쥬시하고 부드러운 탄닌감과 사도가 균형잡혀 있다.",
    },
  ],
  white: [
    {
      id: 5,
      img: "img/wine/white/w5.jpg",
      dt: "Vigor White",
      dd: "비고르 화이트",
      ALV: "12%",
      kind: "100% 파세리나",
      country: "이탈리아",
      plate: "시트러스의 풋풋하고 신선한 산도와 당도가 벨런스있게 잘느껴짐.",
    },
    {
      id: 4,
      img: "img/wine/white/w4.jpg",
      dt: "Don Rey Sauvignon Blancy",
      dd: "돈레이 소비뇽 블랑",
      ALV: "13.5%",
      kind: "100% 소비뇽블랑",
      country: "칠레",
      plate: "아로마와 산도가 아주 잘어우러지며 꽃향이 인상적.",
    },
    {
      id: 3,
      img: "img/wine/white/w3.jpg",
      dt: "D`Alamel Reserva Chardonnay",
      dd: "달라멜 레세르바 샤르도네",
      ALV: "12.5%",
      kind: "100% 샤르도네",
      country: "칠레",
      plate:
        "기분 좋은 산도와 상큼한 과일맛이 느껴지며 지속적인 피니쉬가 나타난다.",
    },
    {
      id: 2,
      img: "img/wine/white/w2.jpg",
      dt: "Roche Mazet Chardonnay",
      dd: "로쉐 마제 샤르도네",
      ALV: "12.5%",
      kind: "샤르도네",
      country: "프랑스",
      plate: "크리미하면서 오크 및 바닐라 풍미가 벨벳처럼 부드럽게 느껴진다",
    },
    {
      id: 1,
      img: "img/wine/white/w1.jpg",
      dt: "Toro Seleccion Shenin Torrontes",
      dd: "토로 셀렉시옹 슈냉 또론테스",
      ALV: "13%",
      kind: "슈냉블랑,또론테스 블랜딩",
      country: "아르헨티나",
      plate: "신선하며 적적한 볼륨감,적절한 산도와 훌륭한 균형감.",
    },
  ],
  spark: [
    {
      id: 5,
      img: "img/wine/spark/s5.jpg",
      dt: "Valdoca Moscato",
      dd: "발도카 모스카토",
      ALV: "6.5%",
      kind: "100% 모스카토",
      country: "이탈리아",
      plate: "열대과일과 벌꿀의 방향성이 짙게느껴진다.",
    },
    {
      id: 4,
      img: "img/wine/spark/s4.jpg",
      dt: "Prosecco Extra Dry Millesimato(Blue)",
      dd: "프로세코 밀레시마토 블루",
      ALV: "11%",
      kind: "100% 글래라",
      country: "이탈리아",
      plate:
        "섬세한 과일향과 우아한 프로럴 노트가 길게 이어지며 완벽한 밸런스를 보여준다.",
    },
    {
      id: 3,
      img: "img/wine/spark/s3.jpg",
      dt: "Cremant De Bourgogne Brut",
      dd: "크레망 드 브르고뉴",
      ALV: "12.5%",
      kind: "피노누아 75%,가메이 10%,알리고떼 10%,샤도네이 5%",
      country: "프랑스",
      plate:
        "살구,시나몬의 아로마와 시트러스류에서 느껴지는 산뜻한 산도와 청량감이 매력적인 와인.",
    },
    {
      id: 2,
      img: "img/wine/spark/s2.jpg",
      dt: "Cava Bonaval Exterm",
      dd: "까바 보나발 익스트림",
      ALV: "11.5%",
      kind: "Macabeo 90%, Parellada 10%",
      country: "스페인",
      plate: "신선하며 온화한 산도와 강하게 다가오는 과일 맛.",
    },
    {
      id: 1,
      img: "img/wine/spark/s1.jpg",
      dt: "Bonaval Cava",
      dd: "보나발 까바",
      ALV: "11.5%",
      kind: "Macabeo 90%, Parellada 10%",
      country: "스페인",
      plate:
        "신선하며 온화한 산도와 강하게 다가오는 과일 맛과 병 내 2차 발효로 인해 파생된 빵 구운느낌들이 어우러진 맛을 제공한다.",
    },
  ],
};

export const redWineReducer = createSlice({
  name: "red",
  initialState,
  reducers: {
    addred: (state, action) => {
      state.red.unshift(action.payload);
    },
    removered: (state, action) => {
      state.red = state.red.filter((item) => item.id !== action.payload.id);
    },
    updatered: (state, action) => {
      const red = state.red.find((item) => item.id === action.payload.id);
      red.dt = action.payload.dt;
      red.img = action.payload.img;
      red.dd = action.payload.dd;
      red.ALV = action.payload.ALV;
      red.kind = action.payload.kind;
      red.country = action.payload.country;
      red.plate = action.payload.plate;
    },
  },
});
export const whiteWineReducer = createSlice({
  name: "white",
  initialState,
  reducers: {
    addwhite: (state, action) => {
      state.white.unshift(action.payload);
    },
    removewhite: (state, action) => {
      state.white = state.white.filter((item) => item.id !== action.payload.id);
    },
    updatewhite: (state, action) => {
      const white = state.white.find((item) => item.id === action.payload.id);
      white.dt = action.payload.dt;
      white.img = action.payload.img;
      white.dd = action.payload.dd;
      white.ALV = action.payload.ALV;
      white.kind = action.payload.kind;
      white.country = action.payload.country;
      white.plate = action.payload.plate;
    },
  },
});
export const sparkWineReducer = createSlice({
  name: "spark",
  initialState,
  reducers: {
    addspark: (state, action) => {
      state.spark.unshift(action.payload);
    },
    removespark: (state, action) => {
      state.red = state.red.filter((item) => item.id !== action.payload.id);
    },
    updatespark: (state, action) => {
      const spark = state.spark.find((item) => item.id === action.payload.id);
      spark.dt = action.payload.dt;
      spark.img = action.payload.img;
      spark.dd = action.payload.dd;
      spark.ALV = action.payload.ALV;
      spark.kind = action.payload.kind;
      spark.country = action.payload.country;
      spark.plate = action.payload.plate;
    },
  },
});

export const { addred, removered, updatered } = redWineReducer.actions;
export const { addwhite, removewhite, updatewhite } = whiteWineReducer.actions;
export const { addspark, removespark, updatespark } = sparkWineReducer.actions;
