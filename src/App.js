import React from "react";
import { useSelector } from "react-redux";
import api from "./api/api";
import HeaderForm from "./components/HeaderForm";
import DetailTable from "./components/DetailTable";
import PrintVoucher from "./components/PrintVoucher";
import "./App.css"
import "./styles.css"

function App() {
  const header = useSelector(state=>state.header);
  const detail = useSelector(state=>state.detail);
let data=[]
  const saveData = async () => {
    const payload = {
      header_table: header,
      detail_table: detail
    };
   // await api.post("/header/multiple", payload);
   data.push(payload);
    alert("Saved");
  };

  return (
    <div className="container">
      <h2>Sales Entry</h2>
      <HeaderForm/>
      <DetailTable/>
      <button className="primary" onClick={saveData}>Save</button>
      <button className="secondary" onClick={()=>window.print()}>Print</button>
      <PrintVoucher data={{header,detail}}/>
    </div>
  );
}

export default App;
