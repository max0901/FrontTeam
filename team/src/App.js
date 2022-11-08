import Routing from "./route/routing";

import GlobalStyles from "./styled/style";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Routing />
      </Provider>
    </>
  );
}

export default App;
