import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
