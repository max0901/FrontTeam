import { useEffect, useRef, useState } from "react";
import HandricksJin from "../link/handrickjin/handrickjin";
import * as styled from "./style";
import { Link } from "react-scroll";
import Luna from "../link/lunar/lunajin";
import Neptunia from "../link/neptunia/neptunia";
import Orbium from "../link/orbium/orbium";
const Hand = () => {
  const [nav, setnav] = useState([
    {
      id: 1,
      title: "핸드릭스진",
    },
    {
      id: 2,
      title: "핸드릭스진",
    },
    {
      id: 3,
      title: "핸드릭스진",
    },
    {
      id: 4,
      title: "핸드릭스진",
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

  const totalSlide = 3;
  const [slideList, setSlideList] = useState(0);

  const rightbtn = () => {
    if (slideList >= totalSlide) {
      setSlideList(0);
    } else {
      setSlideList(slideList + 1);
    }
  };
  const leftbtn = () => {
    if (slideList === 0) {
      setSlideList(totalSlide);
    } else {
      setSlideList(slideList - 1);
    }
  };
  const slideX = window.scrollX;
  useEffect(() => {
    const interval = setTimeout(() => {
      if (slideList >= totalSlide) {
        setSlideList(0);
        console.log(slideX);
      } else {
        setSlideList(slideList + 1);
      }

      return () => clearTimeout(interval);
    }, 5000);
    slider.current.style.transition = "all 2s ease-in-out";
    slider.current.style.transform = `translateX(-${
      slideX + slideList * 2000
    }px)`;
  }, [slideList]);
  return (
    <styled.MainInner>
      <styled.BtnDot>
        {nav.map((v) => (
          <Link to={v.id} spy={true} smooth={true}>
            <styled.Dot></styled.Dot>
          </Link>
        ))}
      </styled.BtnDot>
      <div onMouseOver={mouseover} onMouseLeave={mouseleave}>
        <styled.right ref={right} onClick={rightbtn}>
          <img src="img/hand/right.png" alt="" />
        </styled.right>
        <styled.left ref={left} onClick={leftbtn}>
          <img src="img/hand/left.png" alt="" />
        </styled.left>
      </div>
      <ul ref={slider}>
        <HandricksJin id="1" />
        <Luna id="2" />
        <Neptunia id="3" />
        <Orbium id="4" />
      </ul>
    </styled.MainInner>
  );
};
export default Hand;
