import { configureStore } from "@reduxjs/toolkit";
import salesReducer from "./salesSlice";


export default configureStore({
reducer: { sales: salesReducer }
});