import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeader } from "./store";
import axios from "axios";
import { Container, Card, CardContent, TextField, Button, Typography, Grid, IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
export default function App(){
const dispatch = useDispatch();
const {header} = useSelector(state=>state.sales);


const [rows,setRows] = useState([
{item_code:"", item_name:"", description:"", qty:0, rate:0}
]);
const addRow = ()=> setRows([...rows,{item_code:"", item_name:"", description:"", qty:0, rate:0}]);
const removeRow = (i)=> setRows(rows.filter((_,idx)=>idx!==i));


const totalAmount = rows.reduce((t,r)=>t+(r.qty*r.rate),0);


const save = async()=>{
const hdr = {...header, ac_amt: totalAmount};
const det = rows.map((r,i)=>({ ...r, vr_no: header.vr_no, sr_no:i+1 }));


await axios.post("http://localhost:5000/api/save", { header: hdr, details: det });
alert("Saved Successfully");
}
return(
<Container maxWidth="lg" sx={{mt:4}}>
<Card sx={{borderRadius:4, boxShadow:4}}>
<CardContent>
<Typography variant="h4" align="center" gutterBottom>
Sales Entry Voucher
</Typography>


<Divider sx={{mb:3}} />


<Typography variant="h6">Header</Typography>
<Grid container spacing={2} sx={{mb:3}}>
<Grid item xs={12} md={4}>
<TextField fullWidth label="Voucher No" onChange={e=>dispatch(setHeader({...header, vr_no:e.target.value}))}/>
</Grid>
<Grid item xs={12} md={4}>
<TextField fullWidth type="date" label="Voucher Date" InputLabelProps={{shrink:true}}
onChange={e=>dispatch(setHeader({...header, vr_date:e.target.value}))}/>
</Grid>
<Grid item xs={12} md={4}>
<TextField fullWidth label="Account Name" onChange={e=>dispatch(setHeader({...header, ac_name:e.target.value}))}/>
</Grid>
</Grid>


<Typography variant="h6">Details</Typography>


{rows.map((r,i)=>(
<Grid container spacing={1} key={i} sx={{mb:1}} alignItems="center">
<Grid item xs={12} md={2}>
<TextField fullWidth label="Item Code" onChange={e=>{const n=[...rows];n[i].item_code=e.target.value;setRows(n);}}/>
</Grid>
<Grid item xs={12} md={2}>
<TextField fullWidth label="Item Name" onChange={e=>{const n=[...rows];n[i].item_name=e.target.value;setRows(n);}}/>
</Grid>
<Grid item xs={12} md={3}>
<TextField fullWidth label="Description" onChange={e=>{const n=[...rows];n[i].description=e.target.value;setRows(n);}}/>
</Grid>
<Grid item xs={12} md={1}>
<TextField fullWidth type="number" label="Qty" onChange={e=>{const n=[...rows];n[i].qty=+e.target.value;setRows(n);}}/>
</Grid>
<Grid item xs={12} md={1}>
<TextField fullWidth type="number" label="Rate" onChange={e=>{const n=[...rows];n[i].rate=+e.target.value;setRows(n);}}/>
</Grid>
<Grid item xs={12} md={2}>
<Typography>Total: ₹{(r.qty*r.rate)||0}</Typography>
</Grid>
<Grid item xs={12} md={1}>
<IconButton color="error" onClick={()=>removeRow(i)}>
<DeleteIcon />
</IconButton>
</Grid>
</Grid>
))}
<Button startIcon={<AddIcon/>} variant="outlined" onClick={addRow} sx={{mt:2}}>
Add Row
</Button>


<Divider sx={{my:3}} />


<Typography variant="h6" align="right">Grand Total: ₹{totalAmount}</Typography>


<Grid container spacing={2} justifyContent="flex-end" sx={{mt:2}}>
<Grid item>
<Button variant="contained" color="primary" onClick={save}>Save</Button>
</Grid>
<Grid item>
<Button variant="outlined" onClick={()=>window.print()}>Print</Button>
</Grid>
</Grid>
</CardContent>
</Card>
</Container>
)
}