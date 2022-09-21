import Login from "../pages/login/index";
import Main from "../pages/main/index.js";
const routes = () => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routes;
