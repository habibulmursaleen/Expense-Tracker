import React from "react";
import '../Expenses.css';

const ExpenseDate = (props) => {
    const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
    const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
    const year = props.expenseDate.getFullYear();
  
    return (
      <div className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
      </div>
    );
  };

export default ExpenseDate;

