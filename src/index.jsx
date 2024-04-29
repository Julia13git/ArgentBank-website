import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./styles/index.css";

//Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Reducer
import combineReducers from "./reducers";

// COnfig Store
const store = configureStore({
  reducer: combineReducers,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
