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
  ]);
  const hiddenRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const onmouse = () => {
    setHidden(true);
  };
  const outmouse = () => {
    setHidden(false);
  };
  return (
    <styled.product>
      {prod.map((v) => (
        <styled.prod onMouseOver={onmouse} onMouseLeave={outmouse} key={v.id}>
          <img src={v.img} alt="" />
          <dl>
            <dt>{v.dt}</dt>
            <dd>{v.dd}</dd>
          </dl>
          {hidden && (
            <styled.divHidden ref={hiddenRef} key={v.id}>
              <styled.Info>
                <li>나라: {v.나라}</li>
                <li>품종: {v.품종}</li>
                <li>ALV: {v.ALV}</li>
                <li>PLATE: {v.plate}</li>
              </styled.Info>
            </styled.divHidden>
          )}
        </styled.prod>
      ))}
    </styled.product>
  );
};
export default All;
