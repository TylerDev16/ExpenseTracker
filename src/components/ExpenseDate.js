import React from "react";
import './ExpenseDate.css'

function ExpenseDate(props) {
  // seperate date object into different variables for customizability using toLocaleString() method
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  // pass date functions into JSX
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;

// date data is passed from App.js to ExpenseDate.js then ExpenseItem.js using props.
