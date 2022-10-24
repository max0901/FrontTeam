import { useRef } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style";
const MainBanner = () => {
  const targetImg = useRef(null);
  const targetImg2 = useRef(null);
  const onOver = () => {
    targetImg.current.style.width = "175vh";
    targetImg.current.style.opacity = "1";
    targetImg2.current.style.width = "30vh";
    targetImg2.current.style.visibility = "hidden";
  };
  const onLeave = () => {
    targetImg.current.style.width = "85vh";
    targetImg2.current.style.width = "85vh";
    targetImg.current.style.opacity = "0.5";
    targetImg2.current.style.visibility = "visible";
  };
  const onOver2 = () => {
    targetImg2.current.style.width = "175vh";
    targetImg2.current.style.opacity = "1";
    targetImg.current.style.width = "30vh";
    targetImg.current.style.visibility = "hidden";
  };
  const onLeave2 = () => {
    targetImg2.current.style.width = "85vh";
    targetImg.current.style.width = "85vh";
    targetImg2.current.style.opacity = "0.5";
    targetImg.current.style.visibility = "visible";
  };
  return (
    <>
      <Styled.MainUl>
        <Styled.ImgBox>
          <Link to="/glen" onMouseOver={onOver} onMouseLeave={onLeave}>
            <Styled.Img1 src="img/glenfiddich_13.jpg" alt="" ref={targetImg} />
          </Link>
        </Styled.ImgBox>
        <Styled.ImgBox>
          <Link to="/glen" onMouseOver={onOver2} onMouseLeave={onLeave2}>
            <Styled.Img2 src="img/Hendricks_Gin_Logo.jpg" ref={targetImg2} />
          </Link>
        </Styled.ImgBox>
      </Styled.MainUl>
    </>
  );
};
export default MainBanner;
