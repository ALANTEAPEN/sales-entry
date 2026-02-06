import { useDispatch, useSelector } from "react-redux";
import { setHeader, addRow, removeRow, updateRow, saveVoucher } from "./salesSlice";


export default function App(){
const dispatch = useDispatch();
const { header, details, voucher } = useSelector(s=>s.sales);


const submit=()=>{
if(!header.invoiceNo||!header.customerName||!header.date)
return alert("Fill HEADER section");


for(const r of details){
if(!r.item||r.qty<=0||r.price<=0)
return alert("Fill DETAIL section correctly");
}
dispatch(saveVoucher());
alert("Saved Successfully");
}


return(
<div className="container">
<h1>Sales Entry</h1>
{/* HEADER SECTION */}
<div className="box">
<h2>HEADER</h2>
<input placeholder="Invoice No" value={header.invoiceNo}
onChange={e=>dispatch(setHeader({invoiceNo:e.target.value}))}/>
<input placeholder="Customer Name" value={header.customerName}
onChange={e=>dispatch(setHeader({customerName:e.target.value}))}/>
<input type="date" value={header.date}
onChange={e=>dispatch(setHeader({date:e.target.value}))}/>
</div>

{/* DETAIL SECTION */}
<div className="box">
<h2>DETAIL</h2>
<table>
<thead>
<tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th><th>Action</th></tr>
</thead>
<tbody>
{details.map(r=>(
<tr key={r.id}>
<td><input value={r.item}
onChange={e=>dispatch(updateRow({id:r.id,field:'item',value:e.target.value}))}/></td>
<td><input type="number" value={r.qty}
onChange={e=>dispatch(updateRow({id:r.id,field:'qty',value:+e.target.value}))}/></td>
<td><input type="number" value={r.price}
onChange={e=>dispatch(updateRow({id:r.id,field:'price',value:+e.target.value}))}/></td>
<td>{r.qty*r.price}</td>
<td><button onClick={()=>dispatch(removeRow(r.id))}>X</button></td>
</tr>
))}
</tbody>
</table>
<button onClick={()=>dispatch(addRow())}>Add Row</button>
<button onClick={submit}>Submit</button>
</div>


{/* PRINTABLE VOUCHER */}
{voucher && (
<div className="voucher" id="voucher">
<h2>Printable Voucher</h2>
<p>Invoice: {voucher.header.invoiceNo}</p>
<p>Customer: {voucher.header.customerName}</p>
<p>Date: {voucher.header.date}</p>
<hr/>
{voucher.details.map((r,i)=>(
<p key={i}>{r.item} | {r.qty} x {r.price} = {r.qty*r.price}</p>
))}
<h3>Total: {voucher.details.reduce((s,r)=>s+r.qty*r.price,0)}</h3>
<button onClick={()=>window.print()}>Print Voucher</button>
</div>
)}
</div>
);
}
