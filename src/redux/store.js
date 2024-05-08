import { configureStore } from "@reduxjs/toolkit";

// Reducer
import combineReducers from "./reducers/index";

// Config Store
const store = configureStore({
  reducer: combineReducers,
  devTools: true,
});

export default store;
