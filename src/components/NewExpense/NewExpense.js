import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "../Expenses.css";

const NewExpense = (props) => {
  const [editMode, setEditMode] = useState(false);

  const SaveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    props.onAddExpenses(expenseData);
    setEditMode(false);
  };

  const editHandler = () => {
    setEditMode(true);
  };

  const cancleHandler = () => {
    setEditMode(false);
  };

  return (
    <div className="new-expense">
      {!editMode && <button onClick={editHandler}> Add new expense </button>}
      {editMode && <ExpenseForm onCancel={cancleHandler} onSaveExpenseData={SaveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
