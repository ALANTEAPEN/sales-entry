import { configureStore, createSlice } from "@reduxjs/toolkit";


const salesSlice = createSlice({
name: "sales",
initialState: { header:{} },
reducers:{
setHeader:(state,action)=>{ state.header = action.payload }
}
});


export const { setHeader } = salesSlice.actions;


export const store = configureStore({
reducer:{ sales:salesSlice.reducer }
});