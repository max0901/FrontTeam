import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "../../../../../../hooks/useinput";
import { updatetodo } from "../../../../../../reducer/glenReducer";
import * as style from "./style";
const Elist = ({ glen, setEdit }) => {
  const dispatch = useDispatch();
  // const inputTarget = useRef(null);
  // useEffect(() => {
  //   inputTarget.current.style.width =
  //     inputTarget.current.value.length * 100 + "px";
  // });
  const [h1, changeh1, setH1] = useInput(glen.h1);
  const [h4, changeh4, setH4] = useInput(glen.h4);
  const [h1_1, changeh1_1, setH1_1] = useInput(glen.h1_1);
  const [span, changespan, setSpan] = useInput(glen.span);
  const [bold, changeBold, setBold] = useInput(glen.bold);
  const [p, changeP, setP] = useInput(glen.p);
  const [img, changeImg, setImg] = useInput(glen.img);
  const CancleBtn = () => {
    setEdit(true);
  };
  const onEdit = () => {
    dispatch(
      updatetodo({
        id: glen.id,
        h4: h4,
        h1: h1,
        h1_1: h1_1,
        span: span,
        bold: bold,
        p: p,
        img: img,
      })
    );
    setEdit(true);
  };
  return (
    <>
      <style.BoxInner key={glen.id}>
        <h1>BannerBox:{glen.id}</h1>
        <p>
          라인: <input value={h4} onChange={changeh4}></input>
        </p>
        <p>
          상품명:
          <input value={h1} onChange={changeh1}></input>
        </p>
        <p>
          상품명2:
          <input value={h1_1} onChange={changeh1_1}></input>
        </p>
        <p>
          testing:
          <input value={span} onChange={changespan}></input>
        </p>
        <p>
          설명:
          <input value={bold} onChange={changeBold}></input>
        </p>
        <p>
          역사: <input value={p} onChange={changeP}></input>
        </p>
        <p>
          이미지주소:
          <input value={img} onChange={changeImg}></input>
        </p>
        <style.BtnBox>
          <button onClick={CancleBtn}>취소</button>
          <button onClick={onEdit}>완료</button>
          <button>삭제</button>
        </style.BtnBox>
      </style.BoxInner>
    </>
  );
};
export default Elist;
