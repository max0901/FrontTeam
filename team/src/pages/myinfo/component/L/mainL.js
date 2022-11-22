import { useState } from "react";
import { Link } from "react-router-dom";
import MyinfoDelete from "../R/userdelet/infoDelet";
import MyInfoEdit from "../R/useredit/infoEdit";
import GlenList from "../R/glenlist/glenlist";
import UserList from "../R/userlist/userlist";
import * as style from "./style";
import { useSelector } from "react-redux";
const MyInfoMainL = () => {
  const [clickState, setClickstate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [list, setList] = useState(false);
  const [glenlist, setGlenList] = useState(false);
  const DeleteHandler = () => {
    setClickstate(true);
    setEdit(false);
    setList(false);
    setGlenList(false);
  };
  const EditHandler = () => {
    setClickstate(false);
    setEdit(true);
    setList(false);
    setGlenList(false);
  };
  const ListHandler = () => {
    setClickstate(false);
    setEdit(false);
    setList(true);
    setGlenList(false);
  };
  const GlenHandler = () => {
    setClickstate(false);
    setEdit(false);
    setList(false);
    setGlenList(true);
  };
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <style.MainLul>
        <style.MainLli>
          <Link to="" onClick={EditHandler}>
            회원 정보
          </Link>
        </style.MainLli>
        <style.MainLli>
          <Link to="" onClick={ListHandler}>
            회원 리스트
          </Link>
        </style.MainLli>
        <style.MainLli>
          <Link to="" onClick={GlenHandler}>
            glen 리스트
          </Link>
        </style.MainLli>
        <style.MainLli>
          <Link to="" onClick={DeleteHandler}>
            회원 탈퇴
          </Link>
        </style.MainLli>
      </style.MainLul>
      {clickState ? (
        <MyinfoDelete user={user} />
      ) : list ? (
        <UserList user={user} />
      ) : glenlist ? (
        <GlenList />
      ) : (
        <MyInfoEdit user={user} />
      )}
    </>
  );
};
export default MyInfoMainL;
