import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const {startDate,endDate}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount);
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 className={total>=0?'money plus':'money minus'} >Rs {numberWithCommas(total)}</h1>
    </div>
  );
};
