import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeader } from "../redux/headerSlice";

export default function HeaderForm() {
  const header = useSelector((state) => state.header);
  const dispatch = useDispatch();

  return (
    <div className="section">
      <h3>HEADER</h3>

      <input placeholder="Voucher No"
        value={header.vr_no}
        onChange={(e)=>dispatch(setHeader({vr_no:e.target.value}))}
      />

      <input type="date"
        value={header.vr_date}
        onChange={(e)=>dispatch(setHeader({vr_date:e.target.value}))}
      />

      <input placeholder="Account Name"
        value={header.ac_name}
        onChange={(e)=>dispatch(setHeader({ac_name:e.target.value}))}
      />

      <select value={header.status}
        onChange={(e)=>dispatch(setHeader({status:e.target.value}))}
      >
        <option value="A">Active</option>
        <option value="I">Inactive</option>
      </select>
    </div>
  );
}
