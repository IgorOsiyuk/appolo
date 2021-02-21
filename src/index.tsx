import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";

import { AppActions } from "./service/types/actions";
import rootReducer from "./service/redux/reducers";
import App from "./components/App";

import "./assets/style/main.scss";
import { openModal } from "./service/redux/action";



export type AppState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, createLogger()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
