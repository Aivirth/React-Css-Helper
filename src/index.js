import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import baseReducer from "./store/reducers/baseReducer";

import "./scss/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  base: baseReducer
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
