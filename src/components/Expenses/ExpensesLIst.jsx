import React from "react";
import Expense from "./Expense";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className=""> No expenses found.</h2>;
  }
  return (
    <ul className="">
      {props.items.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
