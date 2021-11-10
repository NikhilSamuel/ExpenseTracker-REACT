import React, { useState } from "react";
import "./Expense.css";
import Date from "../Date";

const Expense = (props) => {
  const [title, setTitle] = useState(props.title);
  // const handleClick = () => {
  //   setTitle("updated");
  // };
  return (
    <div className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
      {/* <button onClick={handleClick}>Change Title</button> */}
    </div>
  );
};

export default Expense;
