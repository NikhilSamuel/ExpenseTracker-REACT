import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./NewExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const editingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onCancelEditing={cancelEditing}
          onSaveData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
