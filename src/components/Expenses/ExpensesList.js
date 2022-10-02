import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {

  if (props.filteredExpenses.length === 0) {
    return (
        <h2 className='expenses-list__fallback'> Found no expenses</h2>
    )}

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          expenseTitle={expense.expenseTitle}
          expenseAmount={expense.expenseAmount}
          expenseDate={expense.expenseDate}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
