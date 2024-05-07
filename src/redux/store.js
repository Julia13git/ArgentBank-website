import { localStorageMiddleware } from "./localStorageMiddleware";
import { configureStore } from "@reduxjs/toolkit";

// Reducer
import combineReducers from "./reducers/index";

// Load persisted state from localStorage, if available
const persistedState = JSON.parse(localStorage.getItem("reduxState")) || {};

// COnfig Store
const store = configureStore({
  reducer: combineReducers,
  devTools: true,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;