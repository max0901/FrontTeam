import * as style from "../useredit/style";
const MyinfoDelete = ({ user }) => {
  return (
    <style.EditLine>
      <p>ID</p>
      <input type="text" />
      <p>Password</p>
      <input type="text" />
      <style.EditBtn>
        <button>탈퇴</button>
      </style.EditBtn>
    </style.EditLine>
  );
};
export default MyinfoDelete;
