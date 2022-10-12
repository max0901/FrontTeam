import Glen from "../pages/glenfidic";

import Main from "../pages/main/index.js";
import MyInfo from "../pages/myinfo";

const routes = () => [
  {
    path: "/",
    element: <Main />,
  },

  {
    path: "/glen",
    element: <Glen />,
  },
  {
    path: "/myinfo",
    element: <MyInfo />,
  },
];
export default routes;
