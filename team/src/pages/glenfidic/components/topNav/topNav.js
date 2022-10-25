import { useEffect, useRef, useState } from "react";
import * as Styled from "./style";
import { Link } from "react-scroll";
const TopNav = () => {
  const [nav, setNav] = useState([
    {
      id: 1,
      title: "15년 기프트 컬렉션",
    },
    {
      id: 2,
      title: "1977년 빈티지 리저브",
    },
    {
      id: 3,
      title: "Glenfiddich Excellence",
    },
    {
      id: 4,
      title: "12년 기프트 컬렉션",
    },
  ]);
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
      // console.log(window.scrollY);

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
            {nav.map((v) => (
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
              {nav.map((v) => (
                <Link to={v.id} spy={true} smooth={true}>
                  <div></div>
                  <p>{v.title}</p>
                </Link>
              ))}
            </Styled.TopUl>
          </>
        )}
      </Styled.TopBanner>
      <Styled.TopBtn onClick={topscroll}>
        <img src="img/arrow_start_top_up_icon.png" />
      </Styled.TopBtn>
    </>
  );
};
export default TopNav;
