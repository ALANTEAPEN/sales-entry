import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: [],
  reducers: {
    addRow: (state) => {
      state.push({
        vr_no: "",
        sr_no: state.length + 1,
        item_code: "",
        item_name: "",
        description: "",
        qty: 1,
        rate: 1
      });
    },
    updateRow: (state, action) => {
      const { index, field, value } = action.payload;
      state[index][field] = value;
    },
    removeRow: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    }
  }
});

export const { addRow, updateRow, removeRow } = detailSlice.actions;
export default detailSlice.reducer;
