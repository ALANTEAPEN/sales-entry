import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const slice = createSlice({
name: "sales",
initialState: {
header: { invoiceNo: "", customerName: "", date: "" },
details: [{ id: uuid(), item: "", qty: 1, price: 0 }],
voucher: null
},
reducers: {
setHeader: (s,a)=>{ s.header={...s.header,...a.payload} },
addRow: s=>{ s.details.push({ id: uuid(), item:"", qty:1, price:0 }) },
removeRow: (s,a)=>{ s.details=s.details.filter(r=>r.id!==a.payload) },
updateRow: (s,a)=>{
const r=s.details.find(x=>x.id===a.payload.id);
if(r) r[a.payload.field]=a.payload.value;
},
saveVoucher: s=>{ s.voucher={ header:s.header, details:s.details } }
}
});


export const { setHeader, addRow, removeRow, updateRow, saveVoucher } = slice.actions;
export default slice.reducer;