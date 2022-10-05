import Glen from "../pages/glenfidic";
import Login from "../pages/login/index";
import Main from "../pages/main/index.js";
import Sign from "../pages/sign";
import TestPage from "../pages/testPage";
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
  {
    path: "/glen",
    element: <Glen />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
];
export default routes;
