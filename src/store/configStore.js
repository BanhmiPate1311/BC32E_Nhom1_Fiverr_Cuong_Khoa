import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { quanLyCongViecReducer } from "./quanLyCongViec";

const rootReducer = combineReducers({
  authReducer,
  quanLyCongViecReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
