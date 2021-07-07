import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";
const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(moment(Date.now()).format("YYYY-MM-DD"));
  const { addTransaction } = useContext(GlobalContext);
  const [character, setCharacter] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <h3>Add new transaction</h3>

      <form>
        <div className="form-control">
          <label htmlFor="text">
            Title : (Up To 30 characters)
            <br />
            {30 - character} character left
          </label>

          <input
            type="text"
            value={text}
            maxLength="31"
            onChange={(e) => {
              setText(e.target.value);
              let count = text.length;
              setCharacter(count);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(parseFloat(e.target.value));
            }}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">
            Date <br />
            (By default Today)
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(moment(date).format("YYYY-MM-DD"));
            }}
          />
        </div>
        <button
          className={amount >= 0 ? "debit btn" : "credit btn"}
          onClick={(e) => {
            e.preventDefault();
            setLoading(true);
            addTransaction({
              text,
              amount,
              date,
            });
            setText("");
            setAmount(0);
            setLoading(false);
          }}
        >AddTransaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
