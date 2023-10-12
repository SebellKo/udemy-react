import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // let filterInfoText = '2019, 2021 & 2022';

  // if (filteredYear === '2019') {
  //   filterInfoText = '2020, 2021 & 2022';
  // } else if (filteredYear === '2021') {
  //   filterInfoText = '2019, 2020 & 2022';
  // } else if (filteredYear === '2022') {
  //   filterInfoText = '2019, 2020 & 2021';
  // }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
