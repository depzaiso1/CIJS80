import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { ChartContainer } from "./components/chart.js";
import Expense from "./components/expense.js";
import "./css/chart.css";
import "./css/expense.css";
import "./css/add_expense.css";
import Select from "react-select";
import { AddExpense, Options } from "./components/addExpense.js";

function App() {
  const [expenseArr, setExpenseArr] = useState([
    {
      id: 0,
      date: {
        day: 15,
        month: "January",
        year: 2022,
      },
      activity: "New laptop",
      cost: 150,
    },
    {
      id: 1,
      date: {
        day: 30,
        month: "May",
        year: 2022,
      },
      activity: "school tuition",
      cost: 800,
    },
    {
      id: 2,
      date: {
        day: 2,
        month: "July",
        year: 2022,
      },
      activity: "water bill",
      cost: 10,
    },
    {
      id: 3,
      date: {
        day: 16,
        month: "December",
        year: 2022,
      },
      activity: "Travel",
      cost: 300,
    },
  ]);

  const [year, setYear] = useState("All");

  const handleChange = (e) => {
    setYear(e.label);
    console.log("handleChange", e);
  };

  const newOption = [{ value: "all", label: "All" }, ...Options[2]];

  return (
    <div className="container">
      <AddExpense setExpenseArr={setExpenseArr} />
      <div className="expense_container">
        <div className="filter">
          <span>filter by year</span>
          <Select
            className="adding_feature"
            options={newOption}
            onChange={handleChange}
            placeholder="year"
          />
        </div>
        <ChartContainer year={year} expenses={expenseArr} />
        <Expense expenses={expenseArr} year={year} />
      </div>
    </div>
  );
}

export default App;
