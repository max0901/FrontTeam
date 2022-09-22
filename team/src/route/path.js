import Login from "../pages/login/index";
import Main from "../pages/main/index.js";
import Sign from "../pages/sign";
const routes = () => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
];
export default routes;
