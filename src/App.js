import React from "react";
import Data from "./component/Data";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Data />
    </Provider>
  );
};

export default App;
