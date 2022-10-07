import * as style from "./style";
import { useEffect, useRef } from "react";
const ModalSign = ({ setSignModalOpen }) => {
  const closeModal = () => {
    setSignModalOpen(false);
  };
  const ModalRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ModalRef.current && !ModalRef.current.contains(e.target)) {
        setSignModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <style.Form ref={ModalRef}>
      <style.FormInner>
        <h2>회원가입</h2>
        <p>
          <input type="text" placeholder="이름을 입력해주세요" />
        </p>

        <p>
          <input type="text" placeholder="아이디를 입력해주세요" />
        </p>
        <p>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </p>
        <style.Btn>회원가입</style.Btn>
        <style.CloseBtn onClick={closeModal}>
          <style.CloseImg src="img/58007_close_icon.png" alt="" />
        </style.CloseBtn>
      </style.FormInner>
    </style.Form>
  );
};
export default ModalSign;
