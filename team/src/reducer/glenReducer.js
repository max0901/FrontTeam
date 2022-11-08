import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  glen: [
    {
      id: 1,
      h4: "글랜피딕",
      h1: "15년 기프트 컬렉션",
      span: "산뜻한 향신료 끝 풍부한 과일의 풍미가 어우러진 위스키",
      bold: " 알코올 함량: 40%; 선물용으로 포장된 후 한정판으로 판매됩니다.",
      p: "뛰어난 품질의 실글 몰트 위스키로 구성된 글랜피딕 선물 컬렉션은 축제 시즌에 어울리는, 특별 제조된 선물용 틴케이스에 포장되어,위스키 애호가들을 위한 최고의 선물이 될 것입니다.. 글렌피딕에서 가장 인기 있는 제품으로 구성된 본 컬렉션은 아름다운 포장이 특징이며, 받는 사람의 기억에 오래도록 남는 특별한 선물로 사랑을 받고 있습니다. ",
      img: "img/glen/15년.jpg",
    },
    {
      id: 2,
      h4: "글렌 데코레이션",
      h1: "1977 년 빈티지 리저브",
      span: "산뜻한 향신료 끝 풍부한 과일의 풍미가 어우러진 위스키",
      bold: "   글렌 데코레이션 1977 년 빈티지 리저브 (VINTAGE RESERVE 1977) 오크의      풍미, 달콤한 향, 과일과 향신료의 맛이 어우러진 위스키 알칼리성 :54.1 %, 용량 : 700ML",
      p: " 영국, 독일, 미국, 영국, 호주, 영국, 호주에서 6 대 캐스케이드 중세 우승 리서치 위스키가 선택되었습니다. (제 4414 호 캐스 크)에 1977 년 한 리터 브 리버브가 선정되   오크 향연, 바닐라와 익은 과일의 맛과 나무, 향신료의 풍미가 조화 환원. 목근체 후산이 있습니다.",
      img: "img/glen/1997sus.jpg",
    },
    {
      id: 3,
      h4: "글랜피딕",
      h1: "Glenfiddich Excellence",
      h1_1: "26세",
      hr: <hr />,
      span: "깊은 오크, 봄 꽃, 갈색 설탕 및 이국적인 향신료",
      bold: " ABV 43 %, 70CL",
      p: "  희귀하고 오래 된 단일 맥아 스카치 위스키는 미국 오크 전 부르봉 통에서 26 년을 세 심하게 성숙시켜 왔습니다. 이 표현은 윌리엄 그랜트가 1887 년에 우리의 양조장을 설립 한 이래로 Glenfiddich의 연속적인 가족 소유권을 존중하기 위해 만들어졌습니다.우리 자신 만의 방식으로 일한다는 것은 그 이름에 걸맞게 호화스러운 단일 맥아를 만들 수 있음을 의미합니다. 우리는 단맛과 건조 오크 탄닌의 깊고 복잡한 균형으로 생생하지만 부드럽고 섬세한 표현을 창조했습니다. 구개를 흥분시키고 코를 깨우기 위해 묶어 라.Glenfiddich Excellence 26 세 위스키는 엄선 된 시장에서 판매됩니다.",
      img: "img/glen/26년.jpg",
    },

    {
      id: 4,
      h4: "글랜피딕",
      h1: "12년 기프트 컬렉션",

      span: "신선한 배와 은은한 오크의 풍미가 어우러진 위스키",
      bold: "알코올 함량: 40%; 선물용으로 포장된 후 한정판으로 판매됩니다.",
      p: "  뛰어난 품질의 싱글 몰트 위스키로 구성된 글렌피딕 기프트 컬렉션은 축제 시즌에 어울리는, 특별 제조된 선물용 틴케이스에 포장되어, 위스키 애호가들을 위한 최고의 선물이 될 것입니다. 글렌피딕에서 가장 인기 있는 제품으로 구성된 본 컬렉션은 아름다운 포장이 특징이며, 받는 사람의 기억에 오래도록 남는 특별한 선물로 사랑을 받고 있습니다.",
      img: "img/glen/12년.jpg",
    },
  ],
};

export const glenReducer = createSlice({
  name: "glen",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.glen.unshift(action.payload);
    },
    removetodo: (state, action) => {
      state.glen = state.glen.filter((item) => item.id !== action.payload.id);
    },
    updatetodo: (state, action) => {
      const glen = state.glen.find((item) => item.id === action.payload.id);
      glen.h1 = action.payload.h1;
    },
  },
});

export const { addtodo, removetodo, updatetodo } = glenReducer.actions;
