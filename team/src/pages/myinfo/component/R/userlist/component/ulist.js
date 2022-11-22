import * as style from "../style";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../../../../../../reducer/userReducer";
import { useEffect } from "react";

const UList = ({ user }) => {
  const dispatch = useDispatch();

  const removeUserBtn = () => {
    dispatch(removeuser({ id: user.id }));
  };
  return (
    <style.BannerBox>
      <style.BoxInner key={user.id}>
        <p>id={user.id}</p>
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
        <p>password: {user.password}</p>

        <style.BtnBox key={user.id}>
          <p>id={user.id}</p>
          <button>수정</button>

          <button onClick={removeUserBtn}>삭제</button>
        </style.BtnBox>
      </style.BoxInner>
    </style.BannerBox>
  );
};
export default UList;
