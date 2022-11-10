import { useDispatch, useSelector } from "react-redux";

import Elist from "./component/editlist";
import Glist from "./component/glist";
import * as style from "./style";
const GlenList = () => {
  const { glen } = useSelector((state) => state.glen);

  return (
    <style.EditLine>
      <h1>glenlist</h1>
      {glen.map((v) => (
        <style.BannerBox>
          <Glist key={v.id} glen={v} />
        </style.BannerBox>
      ))}
    </style.EditLine>
  );
};
export default GlenList;
