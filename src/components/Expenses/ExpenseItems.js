import React from "react";

import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";

import "../Expenses.css";

const ExpenseItems = (props) => {
  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2> {props.expenseTitle} </h2>
          {/* So the key which you access on your props object has to be the name you picked for your attribute in JSX. */}
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
      </Cards>
    </li>
  );
};

export default ExpenseItems;
