import { useRef, useState } from "react";
import * as styled from "./style";
const All = () => {
  const [prod, setProd] = useState([
    {
      id: 1,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
      ALV: "12.5%",
      품종: "100% 말벡",
      나라: "아르헨티나",
      plate: "부드러운 탄닌과 과일맛이 특징",
    },
    {
      id: 2,
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
      id: 4,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 5,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 6,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 7,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 8,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
    {
      id: 9,
      img: "img/wine/malbeck.jpg",
      dt: "Toro Seleccion Malbec",
      dd: "토로 셀렉시용 말벡",
    },
  ]);

  const hiddenRef = useRef(null);
  const visibleRef = useRef(null);

  return (
    <styled.product>
      {prod.map((v) => (
        <styled.prod ref={visibleRef}>
          <img src={v.img} alt="" />
          <dl>
            <styled.Dt>{v.dt}</styled.Dt>
            <styled.DD>{v.dd}</styled.DD>
          </dl>

          <>
            <styled.divHidden ref={hiddenRef}>
              <styled.Info>
                <li>
                  나라 : {v.id}
                  {v.나라}
                </li>
                <li>품종 : {v.품종}</li>
                <li>ALV : {v.ALV}</li>
                <li>PLATE : {v.plate}</li>
              </styled.Info>
            </styled.divHidden>
          </>
        </styled.prod>
      ))}
    </styled.product>
  );
};
export default All;
