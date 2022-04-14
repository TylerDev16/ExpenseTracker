import React from "react";
import './ExpenseItem.css'

function ExpenseItem(props) {
    // dummy data to replace hard-coded values
        // const expenseDate = new Date(2021, 2, 28);
        // const expenseTitle = "Car Insurance";
        // const expenseAmount = 250.60;

    // output values into HTML code below using {objectName}
    // for date object, must convert to string using .toISOString() function

    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()

    return (
    <div className="expense-item">
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;


// PROPS
// Used to pass data between components.
// Pass data to custom component by adding an attribute(props)

// move dummy data from ExpenseItem.js to App.js
// store data in an array const
// pass data from dummy data array into App.js ExpenseItem component
    // ex: <ExpenseItem title={expenses[0].title} --grabs the "title" from the first item/object
// pass "props" (or whatever name) paramenter into ExpenseItem function
    // update ExpenseItem html to give access to data. (ex: props.title)


