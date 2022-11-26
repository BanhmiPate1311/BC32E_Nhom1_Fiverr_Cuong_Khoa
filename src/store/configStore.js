import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { quanLyBinhLuanReducer } from "./quanLyBinhLuan";
import { quanLyCongViecReducer } from "./quanLyCongViec";
import { nguoiDungReducer } from "./nguoiDung/nguoiDungReducer";
import { thueCongViecReducer } from "./thueCongViec/thueCongViec";
import { congViecReducer } from "./congViec/congViecReducer";

const rootReducer = combineReducers({
  authReducer,
  quanLyCongViecReducer,
  nguoiDungReducer,
  thueCongViecReducer,
  quanLyBinhLuanReducer,
  congViecReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
