import UList from "./component/ulist";

import * as style from "./style";
const UserList = ({ user }) => {
  return (
    <style.EditLine>
      <h1>userlist</h1>
      {user.map((v) => (
        <UList key={v.id} user={v} />
      ))}
    </style.EditLine>
  );
};
export default UserList;
