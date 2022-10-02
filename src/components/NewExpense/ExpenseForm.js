import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [newTitle, SetNewTitle] = useState("");
  const [newAmount, SetNewAmount] = useState("");
  const [newDate, SetNewDate] = useState("");

  const changeTitleHandler = (event) => SetNewTitle(event.target.value);
  const changeAmountHandler = (event) => SetNewAmount(event.target.value);
  const changeDateHandler = (event) => SetNewDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      expenseTitle: newTitle,
      expenseAmount: +newAmount,
      expenseDate: new Date(newDate),
    };

    props.onSaveExpenseData(newExpenseData);

    //clearing the form
    SetNewTitle("");
    SetNewAmount("");
    SetNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value={newTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input type="text" value={newAmount} onChange={changeAmountHandler} />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" value={newDate} onChange={changeDateHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.onCancel} >Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

//   // passing as a object as a value. When updating, we need to update all three value.
//   const [userInput, setUserInput] = useState({
//     newTitle: "",
//     newAmount: "",
//     newDate: "",
//   });

//   When updating, we need to update all three value.

//   const changeTitleHandler = (event) => {
//     const newTitle = event.target.value;
//     setUserInput({
//       //this ... spread operator just takes an object, pulls out all the key value pairs,
//       //and adds them to this new object. And then we can still override key value pairs.
//       //And by doing it like this, we ensure that the other values aren't thrown away,
//       //but are always a part of that new state.
//       ...userInput,
//       newTitle: newTitle
//     });
//   };

//another alternative
//   const changeTitleHandler = (event) => {
//     const newTitle = event.target.value;
//     setUserInput((prevState) => {
//       return {
//         ...userInput,
//         newTitle: newTitle,
//       };
//     });
//   };

//   const changeAmountHandler = (event) => {
//     const newAmount = event.target.value;
//     setUserInput({
//       ...userInput,
//       newAmount: newAmount,
//     });
//   };

//   const changeDateHandler = (event) => {
//     const newDate = event.target.value;
//     setUserInput({
//       ...userInput,
//       newDate: newDate,
//     });
//   };
