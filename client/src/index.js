import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-dom";

import App from "./components/App";

import reducers from "./reducers";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
