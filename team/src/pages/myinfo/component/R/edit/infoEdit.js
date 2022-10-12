import * as style from "./style";
const MyInfoEdit = () => {
  return (
    <style.EditLine>
      <p>ID</p>
      <input type="text" />
      <p>Name</p>
      <input type="text" />
      <p>Password</p>
      <input type="text" />
      <style.EditBtn>
        <button>수정 완료</button>
      </style.EditBtn>
    </style.EditLine>
  );
};
export default MyInfoEdit;
