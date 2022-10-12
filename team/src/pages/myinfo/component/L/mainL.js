import { useState } from "react";
import { Link } from "react-router-dom";
import MyinfoDelete from "../R/delet/infoDelet";
import MyInfoEdit from "../R/edit/infoEdit";
import * as style from "./style";
const MyInfoMainL = () => {
  const [clickState, setClickstate] = useState(false);
  const DeleteHandler = () => {
    setClickstate(true);
  };
  const EditHandler = () => {
    setClickstate(false);
  };
  return (
    <>
      <style.MainLul>
        <style.MainLli>
          <Link to="" onClick={EditHandler}>
            회원 정보
          </Link>
        </style.MainLli>
        <style.MainLli>
          <Link to="" onClick={DeleteHandler}>
            회원 탈퇴
          </Link>
        </style.MainLli>
      </style.MainLul>
      {clickState ? <MyinfoDelete /> : <MyInfoEdit />}
    </>
  );
};
export default MyInfoMainL;
