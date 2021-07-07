import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import moment from 'moment';
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{moment(transaction.date).format('MM/DD/YYYY')}</span>
      <span>
        {sign}Rs {numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(transaction._id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
