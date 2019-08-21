import React from "react";
import { Provider } from "react-redux";

import SideBarComponent from "./components/SideBarComponent";
import DescriptionComponent from "./components/DescriptionComponent";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <SideBarComponent />
      <DescriptionComponent />
    </Provider>
  );
}

export default App;
