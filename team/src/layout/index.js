import { Link, useNavigate } from "react-router-dom";
import * as Style from "./style";
import { useEffect, useState } from "react";
import ModalLogin from "../pages/login/modalLogin.js";
import ModalSign from "../pages/sign/modalSign.js";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
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
  const { user } = useSelector((state) => state.user);
  // useEffect(() => {
  //   console.log(dummyUser);
  // });
  // useEffect(() => {
  //   if (me) {
  //     return;
  //   }
  //   navigator("/");
  // }, [me]);
  return (
    <>
      <Style.Header
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Style.Title>
          <Link to="/">제목</Link>
        </Style.Title>
        {/* {user.info ? ( */}
        <Style.Sign>
          <Style.LinkTo to="/myinfo">마이페이지</Style.LinkTo>
          <Style.LinkTo to="/">로그아웃</Style.LinkTo>
        </Style.Sign>
        {/* ) : ( */}
        <Style.Sign>
          <Style.LinkTo to="" onClick={loginModal}>
            로그인
          </Style.LinkTo>
          <Style.LinkTo to="" onClick={signModal}>
            회원가입
          </Style.LinkTo>
        </Style.Sign>
        {/* )} */}
        <Style.Menu>
          <li>
            <Link to="/glen">GLEN</Link>
          </li>
          <li>
            <Link to="/hand">HAND</Link>
          </li>
          <li>
            <Link to="/wine">WINE</Link>
          </li>
          <li>
            <Link to="/map">FIND</Link>
          </li>
        </Style.Menu>
      </Style.Header>

      <Style.Container
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
