import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    vr_no: "",
    vr_date: "",
    ac_name: "",
    ac_amt: 0,
    status: "A"
  },
  reducers: {
    setHeader: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;