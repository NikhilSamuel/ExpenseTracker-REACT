import React, { useState } from "react";
import ExpensesList from "./ExpensesLIst";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";

const Items = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (
        <p>No expense found.</p>
      ) : (
        filteredExpenses.map((expense) => ( //ternary operation to render things conditionally
          <Expense
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (    //alternate way of rendering using &&
          <Expense
            key={expense.id}               
            title={expense.title} //alternate way to render things
            price={expense.amount}
            date={expense.date}
          />
        ))} */}
    </div>
  );
};

export default Items;
