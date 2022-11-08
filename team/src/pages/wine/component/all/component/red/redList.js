import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as styled from "./style";
const RedList = () => {
  const { red } = useSelector((state) => state.wine);
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
      <ul ref={slider} onMouseOver={mouseover} onMouseLeave={mouseleave}>
        {red.map((v) => (
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
export default RedList;
