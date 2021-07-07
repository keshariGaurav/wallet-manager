import React, { useCallback, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { useContext } from "react";
import moment from "moment";
const TransactionList = (props) => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  let oneYearBefore = new Date();
  oneYearBefore.setFullYear(oneYearBefore.getFullYear() - 1);
  const [startDate, setStartDate] = useState(
    moment(oneYearBefore).format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  useEffect(() => {
    getTransactions();
  },[]);
  return (
    <>
      <h3>Transactions</h3>
      <form className="sorting__form">
        <div className="form-control">
          <label htmlFor="date">
            Start Date <br />
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(moment(e.target.value).format("YYYY-MM-DD"));
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="date">
            End Date <br />
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(moment(e.target.value).format("YYYY-MM-DD"));
            }}
          />
        </div>
        <br />
      </form>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          let sd = moment(startDate).subtract(1, "days").toDate();
          sd = moment(sd).format("YYYY-MM-DD");
          let ed = moment(endDate).add(1, "days").toDate();
          ed = moment(ed).format("YYYY-MM-DD");

          // let sd = startDate.setDate(startDate.getDate() + 1);
          // let ed=endDate.setDate(endDate.getDate()+1);
          if (transaction.date >= sd && transaction.date <= ed) {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          }
        })}
      </ul>
    </>
  );
};

export default TransactionList;
