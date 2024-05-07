import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./styles/index.css";

// import { localStorageMiddleware } from "./localStorageMiddleware";

// //Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// import { configureStore } from "@reduxjs/toolkit";

// // Reducer
// import combineReducers from "./redux/reducers";

// // Load persisted state from localStorage, if available
// const persistedState = JSON.parse(localStorage.getItem("reduxState")) || {};

// // COnfig Store
// const store = configureStore({
//   reducer: combineReducers,
//   devTools: true,
//   preloadedState: persistedState,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(localStorageMiddleware),
// });

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
