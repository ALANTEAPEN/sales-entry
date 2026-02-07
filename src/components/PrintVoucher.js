import React from "react";

export default function PrintVoucher({data}) {
  return (
    <div id="print-area">
      <h2>Voucher</h2>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}
