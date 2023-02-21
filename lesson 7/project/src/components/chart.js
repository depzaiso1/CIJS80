import { useEffect } from "react";

const chartInfo = [
  {
    id: 0,
    month: "Jan",
    paid: "70%",
  },
  {
    id: 1,
    month: "Feb",
    paid: "70%",
  },
  {
    id: 2,
    month: "Mar",
    paid: "70%",
  },
  {
    id: 3,
    month: "Apr",
    paid: "70%",
  },
  {
    id: 4,
    month: "May",
    paid: "70%",
  },
  {
    id: 5,
    month: "Jun",
    paid: "70%",
  },
  {
    id: 6,
    month: "Jul",
    paid: "70%",
  },
  {
    id: 7,
    month: "Aug",
    paid: "70%",
  },
  {
    id: 8,
    month: "Sep",
    paid: "70%",
  },
  {
    id: 9,
    month: "Oct",
    paid: "70%",
  },
  {
    id: 10,
    month: "Nov",
    paid: "70%",
  },
  {
    id: 11,
    month: "Dec",
    paid: "70%",
  },
];

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ChartItem = (props) => {
  return (
    <div className="chart_item">
      <div className="bar">
        <div className="fill" style={{ height: props.paid }}></div>
      </div>
      <span className="month">{props.month}</span>
      <span className="extra_info">
        {Number(props.paid.slice(0, -1)) * 10}/1000
      </span>
    </div>
  );
};

function render(year, expenses) {
  const renderedExpense =
    String(year) !== "All"
      ? expenses.filter((e) => Number(e.date.year) === Number(year))
      : expenses;

  chartInfo.forEach((e) => (e.paid = 0));

  for (let i = 0; i < renderedExpense.length; i++) {
    let idx = months.indexOf(renderedExpense[i].date.month);
    chartInfo[idx].paid += Number(renderedExpense[i].cost);
  }

  chartInfo.forEach((e) => {
    e.paid = (e.paid / 1000) * 100;
    e.paid = String(String(e.paid) + "%");
  });
  console.log(2, chartInfo);
}

const ChartContainer = ({ year, expenses }) => {
  render(year, expenses);

  useEffect(() => {
    render(year, expenses);
  }, [expenses, year]);

  return (
    <div className="chart_container">{chartInfo.map((e) => ChartItem(e))}</div>
  );
};

export { ChartContainer, chartInfo };
