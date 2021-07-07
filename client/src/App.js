import React from "react";
import  {Header}  from "./components/Header";
import {Balance} from "./components/Balance";
import "./App.css";
import {IncomceExpenses} from "./components/IncomceExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="flex-layout">
        <Header />
        <Balance />
      </div>

      <IncomceExpenses />
      <div className="grid-layout">
        <div className="left-layout">
          <AddTransaction />
        </div>
        <div className="right-layout">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}
export default App;
