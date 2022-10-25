import Glen from "../pages/glenfidic";
import NewHide from "../pages/main/components/hide/newhide";

import Main from "../pages/main/index.js";

import MyInfo from "../pages/myinfo";

const routes = () => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/hide",
    element: <NewHide />,
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
