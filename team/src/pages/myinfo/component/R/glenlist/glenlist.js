import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Addlist from "./component/addlist";

import Elist from "./component/editlist";
import Glist from "./component/glist";
import * as style from "./style";
const GlenList = () => {
  const { glen } = useSelector((state) => state.glen);
  const [addlist, setAddLIst] = useState(false);
  const addlistBtn = () => {
    if (addlist) {
      setAddLIst(false);
    } else {
      setAddLIst(true);
    }
  };

  return (
    <style.EditLine>
      <h1>glenlist</h1>

      {addlist ? (
        <>
          <style.AddBtn onClick={addlistBtn}>리스트로 돌아가기</style.AddBtn>
          <Addlist glen={glen} setAddLIst={setAddLIst} />
        </>
      ) : (
        <>
          <style.AddBtn onClick={addlistBtn}>게시글 작성하기</style.AddBtn>
          {glen.map((v) => (
            <style.BannerBox>
              <Glist key={v.id} glen={v} />
            </style.BannerBox>
          ))}
        </>
      )}
    </style.EditLine>
  );
};
export default GlenList;
