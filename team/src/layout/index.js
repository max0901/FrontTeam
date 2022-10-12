import { Link, useNavigate } from "react-router-dom";
import * as Style from "./style";
import { useRef, useEffect, useState } from "react";
import ModalLogin from "../pages/login/modalLogin.js";
import ModalSign from "../pages/sign/modalSign.js";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  //modal창들 활성화 로직
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const [SignModalOpen, setSignModalOpen] = useState(false);
  const loginModal = () => {
    setLoginModalOpen(true);
  };
  const signModal = () => {
    setSignModalOpen(true);
  };
  const navigator = useNavigate();
  const { me } = useSelector((state) => state.userReducer);
  // useEffect(() => {
  //   if (!me) {
  //     return;
  //   }
  //   navigator("/");
  // }, [me]);
  return (
    <>
      <Style.Header>
        <Style.Title>
          <Link to="/">제목</Link>
        </Style.Title>
        {me ? (
          <Style.Sign>
            <Style.LinkTo to="/myinfo">마이페이지</Style.LinkTo>
            <Style.LinkTo to="/">로그아웃</Style.LinkTo>
          </Style.Sign>
        ) : (
          <Style.Sign>
            <Style.LinkTo to="" onClick={loginModal}>
              로그인
            </Style.LinkTo>
            <Style.LinkTo to="" onClick={signModal}>
              회원가입
            </Style.LinkTo>
          </Style.Sign>
        )}
        <Style.Menu>
          <li>
            <Link to="/glen">글랜</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
          <li>
            <Link to="">메뉴3</Link>
          </li>
          <li>
            <Link to="">메뉴4</Link>
          </li>
        </Style.Menu>
      </Style.Header>

      <Style.Container>
        {LoginModalOpen && (
          <Style.Background>
            <ModalLogin
              setLoginModalOpen={setLoginModalOpen}
              signModal={signModal}
            />
          </Style.Background>
        )}
        {SignModalOpen && (
          <Style.Background>
            <ModalSign setSignModalOpen={setSignModalOpen} />
          </Style.Background>
        )}
        {children}
      </Style.Container>
    </>
  );
};
export default Layout;
