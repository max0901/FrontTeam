import { useEffect, useRef, useState } from "react";
import * as Styled from "./style";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
const TopNav = () => {
  const { glen } = useSelector((state) => state.glen);
  const [scroll, setScroll] = useState(true);
  const [overBtn, setOverBtn] = useState(true);
  const target = useRef(null);

  //스크롤 감지 로직
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  const topscroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //스크롤 Y축 50이상시 nav창 활성화
  const handlerScroll = () => {
    if (window.scrollY >= 50) {
      // target.current.style.top = "-100px";
      console.log(scroll);

      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  const onOver = () => {
    setOverBtn(false);
  };
  const onLeave = () => {
    setOverBtn(true);
  };
  return (
    <>
      <Styled.TopBanner onMouseOver={onOver}>
        {scroll ? (
          <div></div>
        ) : overBtn ? (
          <Styled.BtnDot>
            {glen.map((v) => (
              <div>
                <Link to={v.id} spy={true} smooth={true}>
                  <Styled.Dot></Styled.Dot>
                </Link>
              </div>
            ))}
          </Styled.BtnDot>
        ) : (
          <>
            <Styled.TopUl ref={target} onMouseLeave={onLeave}>
              {glen.map((v) => (
                <Link to={v.id} spy={true} smooth={true}>
                  <div></div>
                  <p>{v.h1}</p>
                </Link>
              ))}
            </Styled.TopUl>
          </>
        )}
      </Styled.TopBanner>
      <Styled.TopBtn onClick={topscroll}>
        <img src="img/glen/arrow_start_top_up_icon.png" />
      </Styled.TopBtn>
    </>
  );
};
export default TopNav;
