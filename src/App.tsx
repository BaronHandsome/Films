import React from "react";
import { Provider } from "react-redux";

import { HeroLane } from "./components/HeroLane";
import { store } from "./redux";
import { MainPage } from "./screens/MainPage";

function App() {
  return (
    <Provider store={store}>
      <MainPage>
        <HeroLane />
      </MainPage>
    </Provider>
  );
}

export default App;
