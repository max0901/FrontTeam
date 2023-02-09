import Glen from "../pages/glenfidic";
import Handrick from "../pages/hadrick";

import NewHide from "../pages/main/components/hide/newhide";

import Main from "../pages/main/index.js";
import Maps from "../pages/maps";

import MyInfo from "../pages/myinfo";
import Wine from "../pages/wine";

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
    path: "/hand",
    element: <Handrick />,
  },
  {
    path: "/wine",
    element: <Wine />,
  },
  {
    path: "/myinfo",
    element: <MyInfo />,
  },
  {
    path: "/map",
    element: <Maps />,
  },
];
export default routes;
