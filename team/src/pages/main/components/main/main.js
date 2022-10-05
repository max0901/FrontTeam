import { useRef } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style";
const MainBanner = () => {
  const targetImg = useRef(null);
  const targetImg2 = useRef(null);
  const onOver = () => {
    targetImg.current.style.width = "100vh";
    targetImg.current.style.opacity = "1";
    targetImg2.current.style.visibility = "hidden";
  };
  const onLeave = () => {
    targetImg.current.style.width = "50vh";
    targetImg.current.style.opacity = "0.5";
    targetImg2.current.style.visibility = "visible";
  };
  const onOver2 = () => {
    targetImg2.current.style.width = "100vh";
    targetImg2.current.style.opacity = "1";
    targetImg.current.style.visibility = "hidden";
  };
  const onLeave2 = () => {
    targetImg2.current.style.width = "50vh";
    targetImg2.current.style.opacity = "0.5";
    targetImg.current.style.visibility = "visible";
  };
  return (
    <Styled.MainUl>
      <Link to="/glen" onMouseOver={onOver} onMouseLeave={onLeave}>
        <div>
          <Styled.Img1 src="img/glenfiddich_13.jpg" alt="" ref={targetImg} />
        </div>
      </Link>
      <Link to="/test" onMouseOver={onOver2} onMouseLeave={onLeave2}>
        <div>
          <Styled.Img1 src="img/Hendricks_Gin_Logo.jpg" ref={targetImg2} />
        </div>
      </Link>
    </Styled.MainUl>
  );
};
export default MainBanner;
