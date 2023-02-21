import { useEffect, useState } from "react";
import Select from "react-select";

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

function readjustExpense(expenseArr) {
  expenseArr.sort((a, b) => {
    if (a.date.year > b.date.year) return 1;
    if (a.date.year < b.date.year) return -1;
    if (months.indexOf(a.date.month) > months.indexOf(b.date.month)) return 1;
    if (months.indexOf(a.date.month) < months.indexOf(b.date.month)) return -1;
    if (a.date.day > b.date.day) return 1;
    if (a.date.day < b.date.day) return -1;
    return 0;
  });
}

const Options = [
  [...Array(31).keys()].map((e) => ({ value: e, label: e + 1 })),
  [
    { value: "Jan", label: "January" },
    { value: "Feb", label: "February" },
    { value: "Mar", label: "March" },
    { value: "Apr", label: "April" },
    { value: "May", label: "May" },
    { value: "Jun", label: "June" },
    { value: "Jul", label: "July" },
    { value: "Aug", label: "August" },
    { value: "Sep", label: "September" },
    { value: "Oct", label: "October" },
    { value: "Nov", label: "November" },
    { value: "Dec", label: "December" },
  ],
  [...Array(5).keys()].reverse().map((e) => ({ value: e, label: e + 2018 })),
];

const AddExpense = ({ setExpenseArr }) => {
  const [day, setDay] = useState(undefined);
  const handleChange1 = (selectedOption) => {
    setDay(selectedOption.label);
    console.log("handleChange", selectedOption);
  };

  const [month, setMonth] = useState(undefined);
  const handleChange2 = (selectedOption) => {
    setMonth(selectedOption.label);
    console.log("handleChange", selectedOption);
  };

  const [year, setYear] = useState(undefined);
  const handleChange3 = (selectedOption) => {
    setYear(selectedOption.label);
    console.log("handleChange", selectedOption);
  };

  const [activity, setActivity] = useState(undefined);
  const handleChange4 = (e) => {
    setActivity(e.target.value);
    console.log(e.target.value);
  };

  const [cost, setCost] = useState(undefined);
  const handleChange5 = (e) => {
    setCost(e.target.value);
    console.log(e.target.value);
  };

  const [flag, setFlag] = useState(true);

  const OnClick1 = () => {
    setFlag(!flag);
  };

  const [btn, setBtn] = useState(
    <button onClick={OnClick1}>ADD NEW EXPENSE</button>
  );

  useEffect(() => {
    if (flag) {
      console.log(
        day === undefined,
        month === undefined,
        year === undefined,
        activity === undefined,
        cost === undefined
      );
      if (
        day === undefined &&
        month === undefined &&
        year === undefined &&
        activity === undefined &&
        cost === undefined
      ) {
        setBtn(<button onClick={OnClick1}>ADD NEW EXPENSE</button>);
      } else if (
        day === undefined ||
        month === undefined ||
        year === undefined ||
        activity === undefined ||
        activity === "" ||
        cost === undefined ||
        cost === ""
      ) {
        console.log("Not enough info");

        function myFunction() {
          if (
            window.confirm(
              "There is not enough information to proceed\nPress OK if you still want to proceed"
            )
          ) {
            setDay(undefined);
            setMonth(undefined);
            setYear(undefined);
            setActivity(undefined);
            setCost(undefined);
            setBtn(<button onClick={OnClick1}>ADD NEW EXPENSE</button>);
          } else {
            setFlag(!flag);
          }
        }
        myFunction();
      } else {
        console.log("There is enough info");

        setExpenseArr((oldExpense) => {
          const newExpense = [
            ...oldExpense,
            {
              id: oldExpense.length,
              date: {
                day: day,
                month: month,
                year: year,
              },
              activity: activity,
              cost: cost,
            },
          ];
          readjustExpense(newExpense);
          return newExpense;
        });

        setDay(undefined);
        setMonth(undefined);
        setYear(undefined);
        setActivity(undefined);
        setCost(undefined);
        setBtn(<button onClick={OnClick1}>ADD NEW EXPENSE</button>);
      }
    } else
      setBtn(
        <div>
          <div className="header_upper day_month_year">
            <Select
              className="adding_feature"
              options={Options[0]}
              onChange={handleChange1}
              placeholder="day"
            />
            <Select
              className="adding_feature"
              options={Options[1]}
              onChange={handleChange2}
              placeholder="month"
            />
            <Select
              className="adding_feature"
              options={Options[2]}
              onChange={handleChange3}
              placeholder="year"
            />
          </div>
          <div className="header_below">
            <div className="activity_cost">
              <div className="element">
                <label>Activity:</label>
                <input
                  onChange={handleChange4}
                  type="text"
                  placeholder="Type your activity ..."
                />
              </div>
              <div className="element">
                <label>Cost:</label>
                <input
                  onChange={handleChange5}
                  type="text"
                  placeholder="The cost of the activity"
                />
              </div>
            </div>
            <button onClick={OnClick1}>ADD</button>
          </div>
        </div>
      );
  }, [flag]);

  return <div className="header">{btn}</div>;
};

export { AddExpense, Options };
