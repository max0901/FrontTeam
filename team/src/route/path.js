import Glen from "../pages/glenfidic";

import Main from "../pages/main/index.js";

import TestPage from "../pages/testPage";
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
    path: "/test",
    element: <TestPage />,
  },
];
export default routes;
