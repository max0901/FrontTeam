import Glen from "../pages/glenfidic";
import HideIndex from "../pages/main/hideindex";

import Main from "../pages/main/index.js";
import MyInfo from "../pages/myinfo";

const routes = () => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/hide",
    element: <HideIndex />,
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
