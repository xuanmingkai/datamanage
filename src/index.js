import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Pages/Store";

import App from "./App";

//setup fake backend
import { configureFakeBackend } from "./Pages/FakeBackend";
import { BrowserRouter } from "react-router-dom";
configureFakeBackend();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
