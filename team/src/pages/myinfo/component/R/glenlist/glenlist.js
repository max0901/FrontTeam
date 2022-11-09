import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Elist from "./component/editlist";
import Glist from "./component/list";
import * as style from "./style";
const GlenList = () => {
  const { glen } = useSelector((state) => state.glen);

  const [edit, setEdit] = useState(true);

  return (
    <style.EditLine>
      <h1>glenlist</h1>
      {glen.map((v) => (
        <style.BannerBox>
          {edit ? (
            <Glist key={v.id} glen={v} setEdit={setEdit} />
          ) : (
            <Elist key={v.id} glen={v} setEdit={setEdit} />
          )}
        </style.BannerBox>
      ))}
    </style.EditLine>
  );
};
export default GlenList;
