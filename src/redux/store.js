import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import detailReducer from "./detailSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    detail: detailReducer
  }
});