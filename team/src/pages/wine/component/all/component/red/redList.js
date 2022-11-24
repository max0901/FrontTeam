import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as styled from "./style";
const RedList = () => {
  const { red } = useSelector((state) => state.red);
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
    <styled.ListDiv>
      <styled.ListUl
        ref={slider}
        onMouseOver={mouseover}
        onMouseLeave={mouseleave}
      >
        {red.map((v) => (
          <styled.prod ref={visibleRef} key={v.id}>
            <img src={v.img} alt="" />
            <dl>
              <styled.Dt>{v.dt}</styled.Dt>
              <styled.DD>{v.dd}</styled.DD>
            </dl>

            <>
              <styled.divHidden ref={hiddenRef} key={v.id}>
                <styled.Info>
                  <li>나라 :{v.country}</li>
                  <li>품종 : {v.kind}</li>
                  <li>ALV : {v.ALV}</li>
                  <li>PLATE : {v.plate}</li>
                </styled.Info>
              </styled.divHidden>
            </>
          </styled.prod>
        ))}
      </styled.ListUl>
      <div onMouseOver={mouseover} onMouseLeave={mouseleave}>
        <styled.right ref={right} onClick={rightbtn}>
          <img src="img/hand/right.png" alt="" />
        </styled.right>
        <styled.left ref={left} onClick={leftbtn}>
          <img src="img/hand/left.png" alt="" />
        </styled.left>
      </div>
    </styled.ListDiv>
  );
};
export default RedList;
