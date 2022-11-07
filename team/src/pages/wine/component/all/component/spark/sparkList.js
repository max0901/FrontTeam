import { useRef, useState } from "react";
import * as styled from "./style";
const SparkList = () => {
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
  const right = useRef(null);
  const left = useRef(null);
  const slider = useRef(null);
  const mouseover = () => {
    right.current.style.opacity = 0.5;
    left.current.style.opacity = 0.5;
  };
  const mouseleave = () => {
    right.current.style.opacity = 0;
    left.current.style.opacity = 0;
  };

  const totalSlide = 5;
  const [slideList, setSlideList] = useState(0);

  const rightbtn = () => {
    if (slideList >= totalSlide) {
      setSlideList(0);
    } else {
      setSlideList(slideList + 1);
      slider.current.style.transition = "all 1s ease-in-out";
      slider.current.style.transform = `translateX(-${slideList * 200}px)`;
    }
  };
  const leftbtn = () => {
    if (slideList === 0) {
      setSlideList(totalSlide);
    } else {
      setSlideList(slideList - 1);
      slider.current.style.transition = "all 1s ease-in-out";
      slider.current.style.transform = `translateX(-${slideList * 200}px)`;
    }
  };
  const hiddenRef = useRef(null);
  const visibleRef = useRef(null);
  return (
    <div>
      <ul ref={slider}>
        {prod.map((v) => (
          <styled.prod ref={visibleRef}>
            <img src={v.img} alt="" />
            <dl>
              <styled.Dt>
                {v.id}
                {v.dt}
              </styled.Dt>
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
      </ul>
      <div onMouseOver={mouseover} onMouseLeave={mouseleave}>
        <styled.right ref={right} onClick={rightbtn}>
          <img src="img/hand/right.png" alt="" />
        </styled.right>
        <styled.left ref={left} onClick={leftbtn}>
          <img src="img/hand/left.png" alt="" />
        </styled.left>
      </div>
    </div>
  );
};
export default SparkList;
