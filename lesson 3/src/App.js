import logo from './logo.svg';
import './App.css';

const ITEMS =[
  {
    id: 0,
    name: "Khanh",
    age: 19
  },
  {
    id: 1,
    name: "Gia",
    age: 19
  },
  {
    id: 2,
    name: "Duy",
    age: 19
  },
  {
    id: 3,
    name: "Tho",
    age: 19
  },
   {
    id: 4,
    name: "Messi",
    age: 35
  }
];

function NameCard1(props) {
  return (
    <div className="card">
      <div className="name">Name: {props.name}</div>
      <div className="age">Age: {props.age}</div>
    </div>
  )
}

const NameCard2 = (props) => {
  return (
    <div className="card">
      <div className="name">Name: {props.name}</div>
      <div className="age">Age: {props.age}</div>
    </div>
  )
}

// function App() {
//   return (
//     <div>
//     {
//       ITEMS.map((item) => NameCard(item))
//     }
//     </div>
//   )
// }

const App = () => {
	return (
    <div className = "container">
      <div>
        {
          ITEMS.map((item) => NameCard1(item))
        }
      </div>
      <div>
        {
          ITEMS.map((item) => NameCard2(item))
        }
      </div>
    </div>
  )
}

export default App;
