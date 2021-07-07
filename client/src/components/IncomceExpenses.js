import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
export const IncomceExpenses = (props) => {
  const { transactions,startDate,endDate } = useContext(GlobalContext);
  
  const amounts = transactions.map((transaction) => {
                return transaction.amount
  }
  );

  const totalIncome = amounts
    .reduce((total, cur) => {
      if (cur > 0) total = total + cur;
      return total;
    }, 0)
    .toFixed(2);

  const totalExpense =
    amounts
      .reduce((total, cur) => {
        if (cur < 0) total = total + cur;
        return total;
      }, 0)
      .toFixed(2)*-1;
      

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Total Income</h4>
        <p id="money-plus" className="money plus">
          +Rs {numberWithCommas(totalIncome)}
        </p>
      </div>
      <div>
        <h4>Total Expense</h4>
        <p id="money-minus" className="money minus">
          -Rs {numberWithCommas(totalExpense)}
        </p>
      </div>
    </div>
  );
};
