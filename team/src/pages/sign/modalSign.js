import * as style from "./style";
import { useEffect, useRef, useState } from "react";
import { useInput } from "../../hooks/useinput";
import { useDispatch } from "react-redux";
import { SIGN_R } from "../../reducer/userReducer";
const ModalSign = ({ setSignModalOpen }) => {
  //modal
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

  //sign
  const [id, changeId, setId] = useInput("");
  const [name, changeName, setName] = useInput("");
  const [pw, changePw, setPw] = useInput("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwCheck, setPwCheck] = useState(false);
  const [pwLength, setPwLength] = useState(false);

  const dispatch = useDispatch();
  const onConfirmPw = (e) => {
    setConfirmPw(e.target.value);
    setPwCheck(e.target.value !== pw);
  };
  const passwordLength = (e) => {
    setPw(e.target.value);

    if (e.target.value.length < 5) {
      setPwLength(true);
    } else {
      setPwLength(false);
    }
  };
  const onRegistHandler = (e) => {
    console.log(pw);
    console.log(confirmPw);
    console.log(pwCheck);
    if (pwCheck) {
      if (!alert("비밀번호가 일치하지 않습니다")) {
        setConfirmPw("");
      }
      return;
    } else {
      alert("회원가입완료");
    }
    dispatch({
      type: SIGN_R,
      data: {
        id: id,
        name: name,
        pw: pw,
      },
    });
  };
  return (
    <style.Form ref={ModalRef}>
      <style.FormInner>
        <h2>회원가입</h2>
        <p>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={changeName}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={changeId}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={passwordLength}
          />
        </p>
        {pwLength && changePw && (
          <style.CheckMessage>비밀번호가 5자이하입니다!!</style.CheckMessage>
        )}
        <p>
          <input
            type="password"
            placeholder="한번 더 비밀번호를 입력해주세요"
            value={confirmPw}
            onChange={onConfirmPw}
          />
        </p>
        {pwCheck && confirmPw && (
          <style.CheckMessage>
            비밀번호가 일치하지 않습니다!!!!
          </style.CheckMessage>
        )}

        <style.Btn onClick={onRegistHandler}>회원가입</style.Btn>
        <style.CloseBtn onClick={closeModal}>
          <style.CloseImg src="img/58007_close_icon.png" alt="" />
        </style.CloseBtn>
      </style.FormInner>
    </style.Form>
  );
};
export default ModalSign;
