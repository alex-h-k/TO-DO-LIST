import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { Provider } from "react-redux";
import App from "./components/App";
import "./styles/main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
