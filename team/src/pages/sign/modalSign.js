import * as style from "./style";
import { useEffect, useRef, useState } from "react";
import { useInput } from "../../hooks/useinput";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../reducer/userReducer";

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
  const { user } = useSelector((state) => state.user);
  const [email, changeEmail, setEmail] = useInput("");
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
    let lastId;
    console.log(user);
    if (user.length > 0) {
      lastId = user[0].id;
    } else {
      lastId = 0;
    }
    if (pwCheck) {
      if (!alert("비밀번호가 일치하지 않습니다")) {
        setConfirmPw("");
      }
      return;
    } else {
      alert("회원가입완료");
      setSignModalOpen(false);
    }
    dispatch(
      adduser({
        id: lastId + 1,
        password: pw,
        email: email,
        name: name,
      })
    );
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
            value={email}
            onChange={changeEmail}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={changePw}
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
        <div>
          <style.Btn onClick={onRegistHandler}>회원가입</style.Btn>
        </div>
        <style.CloseBtn onClick={closeModal}>
          <style.CloseImg src="img/glen/58007_close_icon.png" alt="" />
        </style.CloseBtn>
      </style.FormInner>
    </style.Form>
  );
};
export default ModalSign;
