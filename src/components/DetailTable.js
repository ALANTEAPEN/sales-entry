import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow, updateRow, removeRow } from "../redux/detailSlice";

export default function DetailTable() {
  const rows = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  return (
    <div className="section">
      <h3>DETAIL</h3>

      <button className="primary" onClick={()=>dispatch(addRow())}>+ Add Row</button>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row,i)=>(
            <tr key={i}>
              <td>
                <input onChange={(e)=>dispatch(updateRow({index:i,field:"item_name",value:e.target.value}))}/>
              </td>
              <td>
                <input onChange={(e)=>dispatch(updateRow({index:i,field:"description",value:e.target.value}))}/>
              </td>
              <td>
                <input type="number" onChange={(e)=>dispatch(updateRow({index:i,field:"qty",value:e.target.value}))}/>
              </td>
              <td>
                <input type="number" onChange={(e)=>dispatch(updateRow({index:i,field:"rate",value:e.target.value}))}/>
              </td>
              <td>
                <button className="danger" onClick={()=>dispatch(removeRow(i))}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
