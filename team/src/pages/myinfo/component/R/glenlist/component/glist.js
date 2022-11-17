import { useState } from "react";
import { useDispatch } from "react-redux";
import { removetodo } from "../../../../../../reducer/glenReducer";
import Elist from "./editlist";
import * as style from "./style";
const Glist = ({ glen }) => {
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const EditBtn = () => {
    setEdit(false);
  };
  const removeBtn = () => {
    dispatch(removetodo({ id: glen.id }));
  };
  return (
    <>
      {edit ? (
        <style.BoxInner key={glen.id}>
          <h1>BannerBox: {glen.id}</h1>
          <p>라인: {glen.h4}</p>
          <p>상품명: {glen.h1}</p>
          <p>상품명2: {glen.h1_1}</p>
          <p>testing: {glen.span}</p>
          <p>설명: {glen.bold}</p>
          <p>역사: {glen.p}</p>
          <p>이미지주소: {glen.img}</p>
          <style.BtnBox key={glen.id}>
            <button onClick={EditBtn}>수정</button>

            <button onClick={removeBtn}>삭제</button>
          </style.BtnBox>
        </style.BoxInner>
      ) : (
        <Elist setEdit={setEdit} glen={glen} removeBtn={removeBtn} />
      )}
    </>
  );
};
export default Glist;
