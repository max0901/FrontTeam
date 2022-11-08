import { useSelector } from "react-redux";
import * as style from "./style";
const GlenList = () => {
  return (
    <style.EditLine>
      <p>glenlist</p>

      <input type="text" />
      <style.EditBtn>
        <button>수정 완료</button>
      </style.EditBtn>
    </style.EditLine>
  );
};
export default GlenList;
