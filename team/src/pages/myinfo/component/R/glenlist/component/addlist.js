import { useDispatch } from "react-redux";
import { useInput } from "../../../../../../hooks/useinput";
import { addtodo } from "../../../../../../reducer/glenReducer";
import * as style from "./style";
const Addlist = ({ glen, setAddLIst }) => {
  const [h1, changeh1, setH1] = useInput("");
  const [h4, changeh4, setH4] = useInput("");
  const [h1_1, changeh1_1, setH1_1] = useInput("");
  const [span, changespan, setSpan] = useInput("");
  const [bold, changeBold, setBold] = useInput("");
  const [p, changeP, setP] = useInput("");
  const [img, changeImg, setImg] = useInput("");
  const dispatch = useDispatch();
  const addBtn = () => {
    console.log(glen);
    let lastId;
    if (glen.length > 0) {
      lastId = glen[0].id;
    } else {
      lastId = 0;
    }
    dispatch(
      addtodo({
        id: lastId + 1,
        h4: h4,
        h1: h1,
        h1_1: h1_1,
        span: span,
        bold: bold,
        p: p,
        img: img,
      })
    );
    setAddLIst(false);
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
          <input onChange={changeh1_1} value={h1_1}></input>
        </p>
        <p>
          testing:
          <input onChange={changespan} value={span}></input>
        </p>
        <p>
          설명:
          <input onChange={changeBold} value={bold}></input>
        </p>
        <p>
          역사: <input onChange={changeP} value={p}></input>
        </p>
        <p>
          이미지주소:
          <input onChange={changeImg} value={img}></input>
        </p>
        <style.BtnBox>
          <button onClick={addBtn}>추가</button>
          <button>취소</button>
        </style.BtnBox>
      </style.BoxInner>
    </>
  );
};
export default Addlist;
