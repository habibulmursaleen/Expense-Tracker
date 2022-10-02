import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

function App(props) {
  const dummy_expenses = [
    {
      expenseDate: new Date(2021, 3, 29),
      expenseTitle: "Car insurance",
      expenseAmount: 298.3,
      id: 1,
    },
    {
      expenseDate: new Date(2021, 3, 23),
      expenseTitle: "Shopping",
      expenseAmount: 300.1,
      id: 1,
    },
    {
      expenseDate: new Date(2021, 4, 16),
      expenseTitle: "Coffee",
      expenseAmount: 45.8,
      id: 1,
    },
    {
      expenseDate: new Date(2021, 2, 30),
      expenseTitle: "Car fix",
      expenseAmount: 1324.4,
      id: 1,
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
