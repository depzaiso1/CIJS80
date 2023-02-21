import { useEffect } from "react";

const renderExpense = (props) => {
  return (
    <div key={props.id} className="expense_item">
      <div className="date">
        <span className="month">{props.date.month}</span>
        <span className="year">{props.date.year}</span>
        <span className="day">{props.date.day}</span>
      </div>
      <span className="title">{props.activity}</span>
      <span className="cost">$ {props.cost}</span>
    </div>
  );
};

const Expense = ({ expenses, year }) => {
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  const renderedExpense =
    String(year) !== "All"
      ? expenses.filter((e) => Number(e.date.year) === Number(year))
      : expenses;

  return (
    <div className="expense_items">
      {renderedExpense.map((e) => renderExpense(e))}
    </div>
  );
};

export default Expense;
