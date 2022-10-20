import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./path";
import { AnimatePresence } from "framer-motion";
const Routing = () => {
  const route = routes();
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          {route.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};
export default Routing;
