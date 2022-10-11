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
  const [scroll, setScroll] = useState(false);

  const target = useRef(null);

  //스크롤 감지 로직
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  //스크롤 Y축 50이상시 nav창 활성화
  const handlerScroll = () => {
    if (window.scrollY >= 50) {
      // target.current.style.top = "-100px";
      // console.log(window.scrollY);
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <Styled.TopBanner>
      {scroll ? (
        <>
          <Styled.TopUl ref={target}>
            {nav.map((v) => (
              <Link to={v.id} spy={true} smooth={true}>
                <div></div>
                <p>{v.title}</p>
              </Link>
            ))}
          </Styled.TopUl>
        </>
      ) : (
        <div></div>
      )}
    </Styled.TopBanner>
  );
};
export default TopNav;
