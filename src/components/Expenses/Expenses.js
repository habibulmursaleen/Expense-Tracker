import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Cards from "../UI/Cards";

import "../Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          onSelected={filteredYear}
          onChangeFilter={filterChange}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Cards>
    </div>
  );
};

export default Expenses;
