import { useEffect, useRef, useState } from "react";
import HandricksJin from "../link/handrickjin/handrickjin";
import * as styled from "./style";
import { Link } from "react-scroll";
import Luna from "../link/lunar/lunajin";
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
  const slideTotal = 4;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5e ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <styled.MainInner>
      <styled.BtnDot>
        {nav.map((v) => (
          <Link to={v.id} spy={true} smooth={true}>
            <styled.Dot></styled.Dot>
          </Link>
        ))}
      </styled.BtnDot>
      <ul ref={slideRef}>
        <HandricksJin id="1" />
        <Luna id="2" />
      </ul>
    </styled.MainInner>
  );
};
export default Hand;
