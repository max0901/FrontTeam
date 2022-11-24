import { useSelector } from "react-redux";
import * as style from "./style";
const MyInfoEdit = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <style.EditLine>
      <p>ID</p>
      <input type="text" value={user.email} />
      <p>Name</p>
      <input type="text" value={user.name} />
      <p>Password</p>
      <input type="text" value={user.password} />
      <style.EditBtn>
        <button>수정 완료</button>
      </style.EditBtn>
    </style.EditLine>
  );
};
export default MyInfoEdit;
